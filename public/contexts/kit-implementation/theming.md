# Theming

The convention uses a simple background and foreground colors. Take a look at the following CSS variables:

```css
--z-primary: oklch(27.4% 0.006 286.033);
--z-primary-f: oklch(98.5% 0 0);
```

The background color of the following component will be `oklch(27.4% 0.006 286.033)` and the foreground color will be `oklch(98.5% 0 0)`.

```html
<div class="bg color" style="--bg: var(--z-primary); --color: var(--z-primary-f);"></div>
```

## List of variables

Here's the list of variables available for customization:

```css
/* Background */
--z-bg: #fff;
--z-bg-f: oklch(21% 0.006 285.885);

/* Card */
--z-card: #fff;
--z-card-f: oklch(21% 0.006 285.885);

/* Popover/Dropdown */
--z-drop: #fff;
--z-drop-f: oklch(21% 0.006 285.885);

/* Primary */
--z-primary: oklch(27.4% 0.006 286.033);
--z-primary-f: oklch(98.5% 0 0);

/* Secondary */
--z-secondary: #000;
--z-secondary-o: 4%;
--z-secondary-f: oklch(21% 0.006 285.885);

/* Muted */
--z-muted: #000;
--z-muted-o: 4%;
--z-muted-f: oklch(44.2% 0.017 285.786);

/* Accent */
--z-accent: #000;
--z-accent-o: 4%;
--z-accent-f: oklch(21% 0.006 285.885);

/* Destructive/Danger */
--z-danger: oklch(63.7% 0.237 25.331);
--z-danger-f: oklch(50.5% 0.213 27.518);

/* Info */
--z-info: oklch(62.3% 0.214 259.815);
--z-info-f: oklch(48.8% 0.243 264.376);

/* Success */
--z-success: oklch(69.6% 0.17 162.48);
--z-success-f: oklch(50.8% 0.118 165.612);

/* Warning */
--z-warning: oklch(76.9% 0.188 70.08);
--z-warning-f: oklch(55.5% 0.163 48.998);

/* Border & Input */
--z-border: #000;
--z-border-o: 10%;
--z-input: #000;
--z-input-o: 10%;

/* Focus Ring */
--z-focus: oklch(70.5% 0.015 286.067);

/* Charts */
--z-chart-1: oklch(64.6% 0.222 41.116);
--z-chart-2: oklch(60% 0.118 184.704);
--z-chart-3: oklch(30.2% 0.056 229.695);
--z-chart-4: oklch(82.8% 0.189 84.429);
--z-chart-5: oklch(76.9% 0.188 70.08);
```

## Adding new colors

To add new colors, simply add them to your main CSS file.

```css
:root {
  --z-custom: oklch(0.84 0.16 84);
  --z-custom-f: oklch(0.28 0.07 46);
}
 
.dark {
  --z-custom: oklch(0.41 0.11 46);
  --z-custom-f: oklch(0.99 0.02 95);
}

@layer theme {
  --color-custom: var(--z-custom);
  --color-custom-f: var(--z-custom-f);
}
```

You can now use it via utility class in your components.

```html
<!-- Direct -->
<div class="bg color" style="--bg: var(--z-custom); --color: var(--z-custom-f);"></div>

<!-- Proxy -->
<div class="bg color" style="--bg: var(--color-custom); --color: var(--color-custom-f);"></div>
```

## Custom palette

**1\.** Start by [picking your desired color](/docs/latest/style/colors) and use that to assign values to the `--z-primary`, `--z-primary-f`, and `--z-focus` tokens. These tokens represent your main theme color, its contrasting foreground color, and the focus color. 

**2\.** Use the CSS snippet below as your starting point and replace the * with your theme name (e.g. indigo, cyan, fuchsia, etc.). You only need to update the values for `--z-primary`, `--z-primary-f`, and `--z-focus` for both light and dark modes, but you're free to customize everything else if needed.

```css
.z-theme-emerald {
  --z-primary: /* oklch(...) */;
  --z-primary-f: /* oklch(...) */;
  --z-focus: /* oklch(...) */;
}

.dark.z-theme-emerald {
  --z-primary: /* oklch(...) */;
  --z-primary-f: /* oklch(...) */;
  --z-focus: /* oklch(...) */;
}
```

## Setting the default palette

To set your newly added palette as the default, simply update the script in your `<head>` tag to reference the new theme name, like so:

```html
<script>
  const htmlElement = document.documentElement;

  const __Z_THEME__ = JSON.parse(
    localStorage.getItem("__Z_THEME__") || "{}",
  );

  if (
    __Z_THEME__.mode === "dark" ||
    (!__Z_THEME__.mode &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    htmlElement.classList.add("dark");
  } else {
    htmlElement.classList.remove("dark");
  }

  htmlElement.classList.add(__Z_THEME__.layout || "z-layout-small");
  htmlElement.classList.add(__Z_THEME__.ff || "z-ff-a");
</script>
```

## Adding to LSH

To register your newly added palette with the [LSH](/docs/latest/kit/lsh#custom-groups) component, please refer to the corresponding documentation or guide for step-by-step instructions on how to integrate it.