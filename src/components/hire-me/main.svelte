<script>
  import "./reset.css";
  import "./style.css";
  import { tylerSteps, meSteps } from "./config";
  import { fade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  let tylerProgress = $state(0);
  let meProgress = $state(0);

  const meTotalPhases = meSteps.length + 2; // meSteps + coding phase + invoice phase

  function clampProgress(n) {
    return Math.min(1, Math.max(0, n));
  }

  function fmt(n) {
    return `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  function typingDurationFor(text) {
    return text.length * 70;
  }

  function pauseDurationFor(text) {
    const lower = text.toLowerCase();
    if (lower.includes("meeting") || lower.includes("sync")) return 3200;
    if (
      lower.includes("assistant") ||
      lower.startsWith("the assistant") ||
      lower.includes("ai ")
    )
      return 2600;
    return 1900;
  }

  function animateCost(step, targetCost) {
    if (targetCost === 0) {
      step.costText = "$0.00";
      return;
    }
    const duration = 800;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const currentVal = targetCost * ease;
      step.costText = fmt(currentVal);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        step.costText = fmt(targetCost);
      }
    }
    requestAnimationFrame(update);
  }

  let started = $state(false);
  let reduceMotion = $state(false);

  let visibleTylerSteps = $state([]);
  let tylerSprint = $state(1);
  let tylerPaused = $state(false);

  let visibleMeSteps = $state([]);
  let meStarted = $state(false);
  let coding = $state(false);
  let codeText = $state("");
  let codeCursorActive = $state(true); // Blinking underscore by default
  let codingStatus = $state("Pending"); // Pending by default
  let codeDone = $state(false);
  let meDone = $state(false);

  const tylerTotal = tweened(0, { duration: 900, easing: cubicOut });
  const myTotal = tweened(0, { duration: 500, easing: cubicOut });

  let tylerStepIndex = 0;
  let meStepIndex = 0;

  let tylerTimer;
  let meTimer;
  let typeIntervals = [];

  let tylerDate = new Date();
  tylerDate.setHours(9, 0, 0, 0);

  function typeText(arr, index, fullText, duration, onDone, onProgress) {
    const total = fullText.length;

    if (total === 0) {
      if (arr[index]) arr[index].isTyping = false;
      onProgress?.(1);
      onDone?.();
      return;
    }

    const per = Math.max(45, Math.floor(duration / total));
    let i = 0;

    if (arr[index]) arr[index].isTyping = true;

    const t = setInterval(() => {
      i += 1;

      if (arr[index]) {
        arr[index].label = fullText.slice(0, i);
      }

      onProgress?.(i / total);

      if (i >= total) {
        clearInterval(t);
        typeIntervals = typeIntervals.filter((id) => id !== t);

        if (arr[index]) arr[index].isTyping = false;
        onDone?.();
      }
    }, per);

    typeIntervals.push(t);
  }

  function typeCode(fullText, duration, onDone, onProgress) {
    const total = fullText.length;

    if (total === 0) {
      codeCursorActive = false;
      onProgress?.(1);
      onDone?.();
      return;
    }

    const per = Math.max(45, Math.floor(duration / total));
    let i = 0;

    codeCursorActive = true;

    const t = setInterval(() => {
      i += 1;

      codeText = fullText.slice(0, i);
      onProgress?.(i / total);

      if (i >= total) {
        clearInterval(t);
        typeIntervals = typeIntervals.filter((id) => id !== t);

        codeCursorActive = false;
        onDone?.();
      }
    }, per);

    typeIntervals.push(t);
  }

  function pushTylerStep(stepData) {
    const stepIndexForProgress = tylerStepIndex;

    const newStep = {
      id: `t-${tylerStepIndex}-${Date.now()}`,
      ...stepData,
      label: "",
      isTyping: true,
      costText: "$0.00",
    };

    visibleTylerSteps = [newStep, ...visibleTylerSteps].slice(0, 4);

    typeText(
      visibleTylerSteps,
      0,
      stepData.fullText,
      typingDurationFor(stepData.fullText),
      () => {
        if (visibleTylerSteps[0]) {
          visibleTylerSteps[0].isTyping = false;
          animateCost(visibleTylerSteps[0], stepData.cost);
        }

        tylerTotal.set($tylerTotal + stepData.cost);

        tylerProgress = tylerSteps.length
          ? clampProgress((stepIndexForProgress + 1) / tylerSteps.length)
          : 0;

        tylerTimer = setTimeout(
          () => stepTyler(),
          pauseDurationFor(stepData.fullText),
        );
      },
      (p) => {
        tylerProgress = tylerSteps.length
          ? clampProgress((stepIndexForProgress + p) / tylerSteps.length)
          : 0;
      },
    );
  }

  function stepTyler() {
    if (tylerPaused) return;

    if (tylerStepIndex < tylerSteps.length) {
      const step = tylerSteps[tylerStepIndex];
      const isReopen = tylerStepIndex === 0 && tylerSprint > 1;
      const fullText = isReopen
        ? `Ticket reopened — sign-off requested for Sprint ${tylerSprint}.`
        : step.label;
      const cost = isReopen ? 0 : step.cost;

      if (!isReopen) {
        tylerDate.setMinutes(tylerDate.getMinutes() + step.jump);
      }
      const timeStr = tylerDate.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      });
      const dateStr = tylerDate.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });

      pushTylerStep({
        fullText,
        cost,
        time: timeStr,
        date: dateStr,
        assignee: step.assignee,
        avatar: step.avatar,
      });

      tylerStepIndex += 1;
    } else {
      tylerSprint += 1;
      tylerStepIndex = 0;

      tylerProgress = 0;

      if (tylerSprint === 2 && !meStarted) {
        meStarted = true;
        tylerPaused = true;
        stepMe();
        return;
      }

      tylerDate = new Date();
      tylerDate.setHours(9, 0, 0, 0);
      tylerTimer = setTimeout(stepTyler, 1200);
    }
  }

  function pushMeStep(stepData) {
    const phaseIndexForProgress = meStepIndex;

    const newStep = {
      id: `me-${meStepIndex}-${Date.now()}`,
      ...stepData,
      label: "",
      isTyping: true,
      costText: "$0.00",
    };

    visibleMeSteps = [newStep, ...visibleMeSteps].slice(0, 4);

    typeText(
      visibleMeSteps,
      0,
      stepData.fullText,
      typingDurationFor(stepData.fullText),
      () => {
        if (visibleMeSteps[0]) visibleMeSteps[0].isTyping = false;

        meStepIndex += 1;

        meProgress = meTotalPhases
          ? clampProgress(meStepIndex / meTotalPhases)
          : 0;

        meTimer = setTimeout(() => stepMe(), 600);
      },
      (p) => {
        meProgress = meTotalPhases
          ? clampProgress((phaseIndexForProgress + p) / meTotalPhases)
          : 0;
      },
    );
  }

  function stepMe() {
    if (meStepIndex < meSteps.length) {
      const step = meSteps[meStepIndex];
      pushMeStep({
        fullText: step.label,
        time: step.time,
        avatar: step.avatar,
      });
    } else {
      startCoding();
    }
  }

  function startCoding() {
    coding = true;
    codeText = "";
    codeDone = false;
    codingStatus = "Coding...";

    visibleMeSteps = [
      {
        id: "coding-step",
        label: "Coding...",
        time: "9:46 AM",
        avatar: "https://api.dicebear.com/10.x/clay/svg?seed=Reden",
        isTyping: true,
        costText: "$0.00",
      },
      ...visibleMeSteps,
    ].slice(0, 4);

    const fullCode = ".button { justify-content: flex-end; }";
    const codingPhase = meSteps.length;

    meProgress = meTotalPhases ? clampProgress(codingPhase / meTotalPhases) : 0;

    typeCode(
      fullCode,
      8000,
      () => {
        codeDone = true;
        codingStatus = "Done";

        meProgress = meTotalPhases
          ? clampProgress((codingPhase + 1) / meTotalPhases)
          : 0;

        setTimeout(finishCoding, 1500);
      },
      (p) => {
        meProgress = meTotalPhases
          ? clampProgress((codingPhase + p) / meTotalPhases)
          : 0;
      },
    );
  }

  function finishCoding() {
    const codingStep = visibleMeSteps.find((s) => s.id === "coding-step");

    if (!codingStep) return;

    codingStep.label = "";
    codingStep.isTyping = true;

    typeText(
      visibleMeSteps,
      visibleMeSteps.indexOf(codingStep),
      "Code it, test it, push it.",
      2000,
      () => {
        codingStep.isTyping = false;
        animateCost(codingStep, 15.0);

        meProgress = meTotalPhases
          ? clampProgress((meSteps.length + 1) / meTotalPhases)
          : 0;

        setTimeout(() => {
          meDone = true;

          visibleMeSteps = [
            {
              id: "invoice-step",
              label: "",
              time: "9:52 AM",
              avatar: "https://api.dicebear.com/10.x/clay/svg?seed=Reden",
              isTyping: true,
              costText: "$0.00",
            },
            ...visibleMeSteps,
          ].slice(0, 4);

          const invoicePhase = meSteps.length + 1;

          typeText(
            visibleMeSteps,
            0,
            "Send the invoice.",
            2000,
            () => {
              if (visibleMeSteps[0]) {
                visibleMeSteps[0].isTyping = false;
                animateCost(visibleMeSteps[0], 15.0);
                myTotal.set(15.0);
              }

              meProgress = 1;
            },
            (p) => {
              meProgress = meTotalPhases
                ? clampProgress((invoicePhase + p) / meTotalPhases)
                : 0;
            },
          );
        }, 500);
      },
    );
  }

  function reset() {
    clearTimeout(tylerTimer);
    clearTimeout(meTimer);
    typeIntervals.forEach(clearInterval);
    typeIntervals = [];

    started = false;
    meStarted = false;
    tylerStepIndex = 0;
    meStepIndex = 0;
    tylerPaused = false;

    visibleTylerSteps = [];
    tylerTotal.set(0, { duration: 0 });
    tylerSprint = 1;

    tylerDate = new Date();
    tylerDate.setHours(9, 0, 0, 0);

    visibleMeSteps = [];
    coding = false;
    codeText = "";
    codeCursorActive = true;
    codeDone = false;
    codingStatus = "Pending";
    myTotal.set(0, { duration: 0 });
    meDone = false;

    tylerProgress = 0;
    meProgress = 0;
  }

  function start() {
    reset();
    started = true;

    if (reduceMotion) {
      let d = new Date();
      d.setHours(9, 0, 0, 0);
      visibleTylerSteps = tylerSteps.slice(0, 4).map((s, i) => {
        d.setMinutes(d.getMinutes() + s.jump);
        return {
          id: `1-${i}`,
          label: s.label,
          costText: fmt(s.cost),
          time: d.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
          }),
          date: d.toLocaleString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          }),
          assignee: s.assignee,
          avatar: s.avatar,
          isTyping: false,
        };
      });
      tylerTotal.set(
        tylerSteps.reduce((sum, s) => sum + s.cost, 0),
        { duration: 0 },
      );
      tylerSprint = 2;

      const finalAmount = 15.0;
      myTotal.set(finalAmount, { duration: 0 });
      codeText = ".button { justify-content: flex-end; }";
      codeCursorActive = false;
      codeDone = true;
      codingStatus = "Done";
      coding = true;
      visibleMeSteps = [
        {
          id: "invoice-step",
          label: "Send the invoice.",
          costText: fmt(finalAmount),
          time: "9:52 AM",
          avatar: "https://api.dicebear.com/10.x/clay/svg?seed=Reden",
          isTyping: false,
        },
        {
          id: "coding-step",
          label: "Code it, test it, push it.",
          costText: fmt(finalAmount),
          time: "9:46 AM",
          avatar: "https://api.dicebear.com/10.x/clay/svg?seed=Reden",
          isTyping: false,
        },
        ...meSteps.slice(0, 2).map((step, i) => ({
          id: `me-${i}`,
          label: step.label,
          costText: "$0.00",
          time: step.time,
          avatar: step.avatar,
          isTyping: false,
        })),
      ];
      meStarted = true;
      meDone = true;

      tylerProgress = 0;
      meProgress = 1;

      return;
    }

    stepTyler();
  }

  $effect(() => {
    if (meDone && tylerSprint === 2 && tylerPaused && started) {
      tylerPaused = false;
      tylerDate = new Date();
      tylerDate.setHours(9, 0, 0, 0);
      tylerTimer = setTimeout(stepTyler, 1200);
    }
  });

  $effect(() => {
    reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    return () => {
      clearTimeout(tylerTimer);
      clearTimeout(meTimer);
      typeIntervals.forEach(clearInterval);
    };
  });
</script>

<svelte:head>
  <title>Why hire me over Tyler</title>
</svelte:head>

<div class="page">
  <div class="mobile-ban">
    <p class="mobile-title">Tyler vs Reden</p>
    <p>
      This experience requires a screen 1024px or wider.<br />Rotate your device
      or come back on desktop.
    </p>
  </div>

  <!-- LEFT: Task Brief -->
  <header class="brief task-panel">
    <h1>The task</h1>
    <p class="task-copy">
      "Hey — quick one. Align this button to the right. Shouldn't take long."
    </p>
    <button class="submit" onclick={start} disabled={started && !meDone}>
      {#if started && !meDone}
        Running...
      {:else if started}
        Run it again
      {:else}
        Accept the task
      {/if}
    </button>
  </header>

  <!-- CENTER: The Split -->
  <div class="split">
    <!-- Left Pane: Tyler -->
    <section class="col tyler" aria-label="Tyler's process">
      <div class="col-head">
        <h2>Tyler™ Solutions Inc.</h2>
        {#if started}
          <span class="stamp stamp-open"
            >{tylerSprint > 1 ? "reopened" : "open"}</span
          >
        {/if}
      </div>

      <!-- Permanently rendered to prevent layout jumping -->
      <div
        class="hold-message"
        class:hold-working={meStarted && !meDone}
        class:hold-nightmare={meDone}
        class:waiting={!meStarted}
      >
        {#if meDone}
          <p>Let the handoff nightmare continue.</p>
        {:else if meStarted}
          <p>Reden is working.<br />Tyler is on hold.</p>
        {:else}
          <p>The nightmare is dormant.<br />Accept the task to begin.</p>
        {/if}
      </div>

      <div class="bill-board" style="--progress: {tylerProgress};">
        <div class="bill-progress" aria-hidden="true"></div>

        <div class="bill-info">
          <span class="bill-label">Running Total</span>
          <span class="bill-sprint">Sprint {tylerSprint}</span>
        </div>

        <div class="total-amount">{fmt($tylerTotal)}</div>
      </div>

      <div class="preview">
        <span class="preview-btn">Submit</span>
      </div>

      <div class="list-wrapper">
        <ol class="ledger">
          {#each visibleTylerSteps as step (step.id)}
            <li animate:flip={{ duration: 400, easing: cubicOut }}>
              <div class="ticket-header">
                <div class="ticket-meta">
                  <span class="ticket-date">{step.date}</span>
                  <span class="ticket-time">{step.time}</span>
                </div>
                <div class="ticket-assignee">
                  <img src={step.avatar} alt={step.assignee} class="avatar" />
                  <span>{step.assignee}</span>
                </div>
              </div>
              <div class="ticket-body">
                <span class="line-label"
                  >{step.label}<span class="cursor" class:active={step.isTyping}
                    >_</span
                  ></span
                >
              </div>
              <div class="ticket-cost">{step.costText}</div>
            </li>
          {/each}
        </ol>
      </div>

      <p class="fine-print">Button is still not aligned.</p>
    </section>

    <!-- Right Pane: Me -->
    <section class="col me" aria-label="My process">
      <div class="col-head">
        <h2>Reden</h2>
        {#if meDone}
          <span class="stamp stamp-paid">paid</span>
        {/if}
      </div>

      <div class="bill-board" style="--progress: {meProgress};">
        <div class="bill-progress" aria-hidden="true"></div>

        <div class="bill-info">
          <span class="bill-label">Invoice Total</span>
          <span class="bill-sprint done">{meDone ? "Sent" : "Pending"}</span>
        </div>

        <div class="total-amount me-amount">{fmt($myTotal)}</div>
      </div>

      <!-- Permanently rendered to prevent layout jumping -->
      <div class="coding-section" class:active={coding || codeDone}>
        <div class="code-editor">
          <span>{codeText}</span><span
            class="cursor"
            class:active={codeCursorActive}>_</span
          >
        </div>
        <div class="coding-status">
          <span class="status-dot" class:active={coding}></span>
          {codingStatus}
        </div>
      </div>

      <div
        class="preview"
        class:justify-right={codeDone || meDone}
        class:flash-active={codeDone}
      >
        <div class="preview-spacer"></div>
        <span class="preview-btn">Submit</span>
      </div>

      <div class="list-wrapper">
        {#if started && !meStarted}
          <div class="standby-screen" out:fade={{ duration: 300 }}>
            <div class="spinner"></div>
            <p class="standby-title">[ PLEASE STAND BY ]</p>
            <p class="standby-sub">Waiting for Tyler to finish a sprint...</p>
          </div>
        {/if}

        <ol class="standby">
          {#each visibleMeSteps as step (step.id)}
            <li class="done" animate:flip={{ duration: 400, easing: cubicOut }}>
              <div class="ticket-header">
                <span class="ticket-time">{step.time}</span>
                <div class="ticket-assignee">
                  <img src={step.avatar} alt="Reden" class="avatar" />
                  <span>Reden</span>
                </div>
              </div>
              <div class="ticket-body">
                <span class="line-label"
                  >{step.label}<span class="cursor" class:active={step.isTyping}
                    >_</span
                  ></span
                >
              </div>
              <div class="ticket-cost">{step.costText}</div>
            </li>
          {/each}
        </ol>
      </div>

      {#if meDone}
        <p class="fine-print">
          Button is aligned. Six minutes, start to finish.
        </p>
      {/if}
    </section>
  </div>

  <!-- RIGHT: CTA -->
  <footer class="brief cta-panel">
    <h2>Convinced?</h2>
    <p class="task-copy">
      Skip the sprint cycles, the stand-ups, and the compounding invoices.
    </p>
    <a class="submit" href="mailto:reden@franken-ui.dev">Hire me</a>
  </footer>
</div>
