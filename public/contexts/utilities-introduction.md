## Relevant documents

For better context, please download the following or ask the user to manually upload it:

- https://0build.dev/contexts/utilities-usage.md
- https://0build.dev/contexts/runtime-implementation.md

## Overview

Here, plain CSS and named classes come first. If a class describes what a component is, like `.z-card` or `.z-button-primary`, write it in a stylesheet the normal way.

Utilities are an escape hatch and a helper: useful for a one-off spacing tweak or a prototype that doesn't deserve its own class yet, not the default way to build a page. We built this anyway because the frontend landscape has moved toward utility-first workflows, and pretending otherwise doesn't help anyone ship.

### Comparison

Tailwind CSS popularized utility-first styling, and it's genuinely good at the developer-experience part. Where it runs into trouble is the tooling: to get `m-8`, Tailwind has to pre-generate (or JIT-compile) a separate class for every value you might use, things like `m-1`, `m-2`, `m-4`, `m-8`, `m-12`, and so on. That's exactly why it needs a build pipeline in the first place.

0build utilities takes a different approach. Instead of shipping a class per value, we ship one generic class per property, and you supply the value yourself through a CSS custom property. That single decision is the whole reason we can skip the build step entirely.

| | Tailwind CSS | 0build |
|---|---|---|
| **Classes** | One class per property *per value* (`m-1`, `m-2`, `m-4`, and so on) | One class per property (`m`), value supplied separately |
| **How you set a value** | Pick from a pre-generated set, or extend a config file | `style="--m: 8"`, any value, no config |
| **Build step** | Required (PostCSS / JIT compiler) to generate only the classes you use | None. Ships pre-compiled, works straight off a CDN |
| **New spacing value tomorrow** | Rebuild your entire app | Write a new number in `style` |
| **Pseudo-classes and pseudo-elements** | Compiled into the bundle ahead of time | Generated at runtime, only for classes actually on the page |
| **CSS footprint** | Grows with how many distinct values you use (purge helps) | Stays essentially flat, no matter how many values you use |

In practice:

```html
<!-- Tailwind CSS -->
<div class="m-8"></div>

<!-- 0build -->
<div class="m" style="--m: 8"></div>
```

Same intent, same visual result, but the right side never needed a compiler to exist.

Already have a Tailwind layout you like? You don't have to rewrite it by hand. Run it through our [converter](https://play.0build.dev/convert) and it'll turn `class="m-8"` into `class="m" style="--m: 8"` (and everything else) for you.

## Syntax

Every utility class has a matching CSS variable, and you don't need to memorize what it's called. Just drop the special characters from the class name:

| Class name | Variable name |
|---|---|
| `m` | `--m` |
| `sm:m` | `--sm-m` |
| `dark:sm:bg:hover` | `--dark-sm-bg-hover` |

```html
<div class="m sm:m md:m" style="--m: 4; --sm-m: 8; --md-m: 16"></div>
```

Order is fixed: `dark:` comes first if it's present, then the breakpoint prefix, then the base class, and the state suffix (`:hover`, `::before`, and so on) always comes last. `dark:sm:bg:hover` is correct. `sm:dark:bg:hover` is not.

Some utility values are multiplied by `var(--spacing)` behind the scenes, so a value of `4` stays consistent everywhere you use it. If you are unsure whether they are scaled or not, your devtools are your best friend. And, if you need something outside the scale, bracketed utilities are your escape hatch:

```html
<div class="[m]" style="--m: 4px"></div>
```

Because the class and its value always come in pairs, there's no such thing as an accidental style or inheritance issue. If you see `class="m"` in your markup, you know exactly where to look for its value.

0build's [Playground](https://play.0build.dev) has built-in intellisense to spot missing pairs, mismatches, and more. If you're working outside the Playground, you can set `zRuntime.debug` to `true` and open your devtools.

### Shorthand

Setting a class and then writing its pair is cumbersome. That's why we created a shorthand.

Any token in `class` that contains an `=` is treated as shorthand. The runtime splits it, injects the value as a CSS variable, and adds the class, all in one pass.

```html
<div class="p=4"></div>
```

That's exactly the same as writing:

```html
<div class="p" style="--p: 4"></div>
```

It works with states, prefixes, and dark mode too. The full syntax just moves to the left side of the `=`:

```html
<!-- sets --bg-hover: #ff0000 and registers bg:hover for CSS generation -->
<div class="bg:hover=#ff0000"></div>
```

**Variable naming reference:**

| Token | Class attribute | Style attribute | Generates CSS |
| :--- | :--- | :--- | :--- |
| `p=4` | `.p` | `--p: 4` | No, `.p` already exists. |
| `p:hover=4` | `.p:hover` | `--p-hover: 4` | Yes, generated at runtime. |
| `md:p:hover=4` | `md:p:hover` | `--md-p-hover: 4` | Yes, generated at runtime. |
| `dark:bg:hover=#000` | `dark:bg:hover` | `--dark-bg-hover: #000` | Yes, generated at runtime. |
| `dark:lg:bg:hover=#000` | `dark:lg:bg:hover` | `--dark-lg-bg-hover: #000` | Yes, generated at runtime. |

A token without a state suffix (like `p=4`) still injects its variable and adds the class, but it skips the interactive CSS-generation path. It relies on a rule already in your stylesheet that references that variable.


CLS Alert: While this feature is fully supported, it is highly discouraged as it may cause CLS (Cumulative Layout Shift). However, if you are working on internal apps, this might be fine for some use cases.

### States

Interactive states like hover and focus aren't pre-baked into a massive CSS bundle that users have to download upfront. Instead, they are generated dynamically the moment the runtime detects a class that requires them, and nowhere else.

This approach completely eliminates CSS bloat. Furthermore, it doesn't cause Cumulative Layout Shift (CLS) because these states only trigger after user interaction. By the time the user interacts with the element, the necessary CSS has already been generated and applied.

```html
<button
  class="bg bg:hover dark:bg dark:bg:hover px py"
  style="
    --bg: var(--color-blue-600);
    --bg-hover: var(--color-blue-800);
    --dark-bg: var(--color-pink-600);
    --dark-bg-hover: var(--color-pink-700);
    --px: 5;
    --py: 2.5;
  "
>
  Button
</button>
```

Append any of these as a suffix to a base class (`base:state`):

| State | CSS produced |
|---|---|
| `:hover` | `.class:hover { ... }` |
| `:active` | `.class:active { ... }` |
| `:focus` | `.class:focus { ... }` |
| `:focus-within` | `.class:focus-within { ... }` |
| `:target` | `.class:target { ... }` |
| `:checked` | `.class:checked { ... }` |
| `:disabled` | `.class:disabled { ... }` |
| `:group-hover` | `.group:hover .class { ... }` |

### Pseudo-elements

Pseudo-elements follow the same convention CSS itself uses: a single colon for pseudo-classes (`:hover`), a double colon for pseudo-elements (`::before`, `::after`). Append either to any base class, on its own or stacked after a pseudo-class. The ordering rule from earlier still applies: the pseudo-element comes last, after any pseudo-class.

```html
<div class="content-before bg::before" style="--bg-before: var(--color-blue-600)"></div>
<div class="content-before bg:hover::before" style="--bg-hover-before: var(--color-blue-800)"></div>
```

Variable names follow the same rule as everything else on this page. Drop the special characters:

| Class name | Variable name |
|---|---|
| `bg::before` | `--bg-before` |
| `color::after` | `--color-after` |
| `bg:hover::before` | `--bg-hover-before` |
| `dark:bg::after` | `--dark-bg-after` |

Pseudo-element need a `content` value before it renders at all. Hence, `.content-before` or `.content-after` classes are mandatory. By default `content` is set to an empty string `content: ''`. You can modify it via a CSS variable like so:

```html
<div
    class="content-before bg::before color::before"
    style="
        --content-before: '0build';
        --bg-before: var(--color-blue-600);
        --color-before: var(--color-white);
    "
></div>
```

CLS Alert: Unlike states or pseudo-classes, pseudo-elements might cause CLS because they dynamically inject new content and layout boxes into the DOM on the fly, altering element dimensions after the initial paint. However, if you are working on internal apps, this might be fine for some use cases.

### Responsiveness

Prefix any class with a breakpoint name and the runtime wraps it in a media query automatically:

| Prefix | Min-width |
|---|---|
| `sm:` | `40rem` |
| `md:` | `48rem` |
| `lg:` | `64rem` |
| `xl:` | `80rem` |
| `2xl:` | `96rem` |

```html
<div class="p sm:p md:p" style="--p: 2; --sm-p: 4; --md-p: 8"></div>
```

Breakpoint rules live in the same CSS layer as their base rule, just wrapped in the media query, so responsive overrides never accidentally jump the cascade.

### Dark

Prefix with `dark:` to scope a rule to a `.dark` ancestor:

```html
<div
    class="bg dark:bg"
    style="
        --bg: pink;
        --dark-bg: violet;
    "
></div>

<!-- You can also pair it with responsive breakpoints -->
 <div
    class="lg:bg dark:lg:bg"
    style="
        --lg-bg: cyan;
        --dark-lg-bg: green;
    "
></div>
```

Only utilities that deal with colors support the `dark:` prefix. For one, our CSS bundle are precompiled for base structure, and structural properties like margins or sizing do not change when switching to dark mode anyway. Two, it does not make any sense to alter layout per theme.

However, since pseudo-classes and pseudo-elements are generated at runtime, any available utilities can be used in dark mode.

### Opacity

Opacity gets its own `/o` suffix and always travels with a paired value variable, so it's never left guessing what it's inheriting from.

```html
<div
  class="bg/o dark:bg/o"
  style="
    --bg: var(--color-blue-800);
    --bg-o: 80%;
    --dark-bg: var(--color-green-800);
    --dark-bg-o: 80%;
  "
></div>
```

The same applies to the `dark:` prefix. Only utilities that deal with colors support the `/o` suffix.
