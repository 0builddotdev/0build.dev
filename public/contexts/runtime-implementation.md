## Relevant documents

For better context, please download the following or ask the user to manually upload it:

- https://0build.dev/contexts/utilities-usage.md

## Usage

The runtime scans elements, parses their class names, and generates exactly the CSS you need — nothing more. It supports responsive breakpoints, dark mode, group states, CSS cascade layers, a safelist for dynamic classes, and a full API for programmatic control.

```html
<div class="card p group border" style="--p: 4">
  <h3>Card Title</h3>

  <div
    class="opacity:group-hover opacity transition"
    style="--opacity-group-hover: 100%; --opacity: 0"
  >
    Read More
  </div>
</div>
```

## Supported States

Append any of these suffixes to a base class name to generate a state-scoped rule:

| State | CSS produced |
| --- | --- |
| `:hover` | `.class:hover { ... }` |
| `:active` | `.class:active { ... }` |
| `:focus` | `.class:focus { ... }` |
| `:focus-within` | `.class:focus-within { ... }` |
| `:target` | `.class:target { ... }` |
| `:checked` | `.class:checked { ... }` |
| `:disabled` | `.class:disabled { ... }` |
| `:group-hover` | `.group:hover .class { ... }` |

`opacity:hover`, `bg:focus`, `color:group-hover` — the pattern is always `base:state`.

## Responsive Prefixes

Prefix any class with a breakpoint name to wrap it in a `@media (min-width: ...)` block:

| Prefix | Min-width |
| --- | --- |
| `sm:` | `40rem` |
| `md:` | `48rem` |
| `lg:` | `64rem` |
| `xl:` | `80rem` |
| `2xl:` | `96rem` |

```html
<div
  class="md:opacity:hover"
  style="--opacity-hover: 0.5"
></div>
```

Breakpoint rules are placed inside the same CSS layer as their base rule, just wrapped in the appropriate media query.

## Dark Mode

Prefix with `dark:` to scope a rule to a `.dark` ancestor:

```html
<div
  class="dark:opacity:hover"
  style="--dark-opacity-hover: 0.5"
></div>
```

Dark mode can be combined with responsive prefixes and states:

```html
<div
  class="dark:lg:opacity:hover"
  style="--dark-lg-opacity-hover: 0.5"
></div>
```

The generated selector becomes `.dark .dark\:lg\:opacity\:hover` — applied only when `.dark` wraps the element and the viewport is at least `64rem`.

## Safelist

The safelist generates CSS for classes that aren't present in the DOM at scan time — essential for dynamically injected elements, server-rendered HTML, or classes set via JavaScript after load.

Set `zRuntime.safelist` before the runtime initializes:

```js
window.zRuntime = window.zRuntime || {};

zRuntime.safelist = [
  'opacity:hover',
  {
    class: 'bg',
    states: [':hover', ':focus'],
    prefixes: ['md'],
    dark: true,
  },
];
```

### String form

Each string is a full class name, parsed exactly like a DOM class:

```js
zRuntime.safelist = [
  'opacity:hover',
  'md:opacity:hover',
  'dark:opacity:hover',
];
```

### Object form

Use the object form to generate every combination of states, breakpoint prefixes, and dark/light variants from a single base class:

```js
zRuntime.safelist = [
  {
    class: 'opacity',
    states: [':hover', ':focus'],
    prefixes: ['md', 'lg'],
    dark: true,
  },
];

// Generates all 12 combinations:
//   opacity:hover          opacity:focus
//   md:opacity:hover       md:opacity:focus
//   lg:opacity:hover       lg:opacity:focus
//   dark:opacity:hover     dark:opacity:focus
//   dark:md:opacity:hover  dark:md:opacity:focus
//   dark:lg:opacity:hover  dark:lg:opacity:focus
```

| Property | Type | Description |
| --- | --- | --- |
| `class` | `string` | Base class name (e.g. `opacity`) |
| `states` | `string[]` | States to generate (e.g. `[':hover', ':focus']`) |
| `prefixes` | `string[]` | Breakpoint prefixes (e.g. `['md', 'lg']`). Omit for no prefix. |
| `dark` | `boolean` | If `true`, also generates all dark-mode variants |

The object form builds the full matrix: every prefix × every state × dark and light.

### Inspecting the safelist

```js
console.log(zRuntime.getSafelist());
// [{ baseClass: 'opacity', state: ':hover', fullClass: 'opacity:hover', isDark: false, prefix: null }, ...]
```

Returns the parsed list of class objects that will be included in the next style generation pass.

## Custom Rules

`zRuntime.customRules` lets you extend or replace built-in rule definitions. Each rule maps a base class name to one or more CSS properties and their values.

Set `zRuntime.customRules` before the runtime initializes:

```js
window.zRuntime = window.zRuntime || {};

zRuntime.customRules = [
  {
    selector: 'ring',        // matches class="ring:hover", "ring:focus", etc.
    properties: 'box-shadow',
    values: ['0 0 0 3px blue'],
    layer: 'utilities',
  },
];
```

If your `selector` matches an existing built-in rule, your entry **replaces** it entirely.

### Rule shape

| Field | Required | Description |
| --- | --- | --- |
| `selector` | Yes | Base class name this rule matches (e.g. `opacity`) |
| `properties` | Yes | CSS property or array of properties |
| `values` | Yes (unless `arbitrary`) | Values mapped to each property |
| `arbitrary` | No | If `true`, value is read from a CSS variable — no `values` needed |
| `placeholders` | No | Template substitution: parts of `values` replaced by CSS vars |
| `layer` | No | Cascade layer: `components`, `styles` (default), or `utilities` |

### Arbitrary rules

When `arbitrary: true`, the CSS value is always a variable derived from the class name, state, prefix, and dark flag — you define it per element in `style`:

```html
<script>
  window.zRuntime = window.zRuntime || {};
  
  zRuntime.customRules = [
    {
      selector: 'scale',
      properties: 'transform',
      arbitrary: true,      // value comes from --scale-hover, --scale-focus, etc.
      layer: 'utilities',
    },
  ];
</script>

<div
  class="scale:hover"
  style="--scale-hover: scale(1.05)"
></div>
```

Variable naming convention: `--[dark-][prefix-]baseClass-state`.

### Placeholder rules

Placeholders let you template values where specific parts are replaced by CSS variables:

```js
zRuntime.customRules = [
  {
    selector: 'shadow',
    properties: 'box-shadow',
    values: ['0 0 0 __size__ __color__'],
    placeholders: {
      '__size__': 'shadow-size',   // replaced by --shadow-size-hover, etc.
      '__color__': 'shadow-color', // replaced by --shadow-color-hover, etc.
    },
  },
];
```

Each key in `placeholders` is a substring in `values` that gets replaced by the computed CSS variable name for the given state.

### Inspecting merged rules

```js
console.log(zRuntime.getRules());
// [{ selector: 'opacity', properties: 'opacity', values: [...], layer: 'styles' }, ...]
```

Returns the complete merged rule set (built-ins + your custom rules) that the runtime is currently using.

## Debug Mode

Enable debug mode during development to surface silent failures:

```js
window.zRuntime = window.zRuntime || {};

zRuntime.debug = true;
```

Debug scans every `[class]` element in the document, checks and warns if a variable required by a class isn't set on the element.

### Debug output

```text
[zRuntime] Missing variables (2):
opacity:hover → --opacity-hover, opacity:active → --opacity-active
<div data-fs class="opacity:hover opacity:active">...</div>

[zRuntime] Element has interactive state class(es) ["opacity:hover" (state: :hover)]
but is missing the `data-fs` attribute — these styles will have no effect.
<div class="opacity:hover">...</div>
```

Each warning includes the count of missing items, the variable names, and the actual DOM node so you can jump straight to it in DevTools.

### What debug catches

**Incorrect variable name (camelCase vs. kebab-case):**

```html
<!-- camelCase won't match — no variable found -->
<div class="opacity:hover" style="--opacityHover: 100%"></div>

<!-- kebab-case matches -->
<div class="opacity:hover" style="--opacity-hover: 100%"></div>
```

**Partial state coverage — one variable present, one missing:**

```html
<!-- debug warns: --opacity-active is missing -->
<div
  class="opacity:hover opacity:active"
  style="--opacity-hover: 100%"
></div>
```

## The zRuntime API

The runtime exposes these methods on the global `zRuntime` object after initialization.

### `zRuntime.refresh()`

Clears the rule cache and re-runs style generation from scratch.

```js
// After dynamically adding elements
document.body.appendChild(newElement);

zRuntime.refresh(); // clears cache, re-scans, regenerates
```

### `zRuntime.regenerate()`

Re-runs style generation without clearing the cache. Faster than `refresh()` when the rule definitions haven't changed:

```js
// Re-generate using the existing cache (faster)
zRuntime.regenerate();
```

### `zRuntime.getCache()`

Returns the internal `Map` of generated rules, keyed by a string combining class + state + dark + prefix:

```js
console.log(zRuntime.getCache());
// Map(1) { 'opacity:hover:hover-false-null' => { css: '.opacity\\:hover:hover { ... }', layer: 'styles', breakpoint: null } }
```

Useful for inspecting what the runtime has already compiled, or checking whether a specific class has been processed.

### `zRuntime.getRules()`

Returns the complete merged rule array — built-ins plus any custom rules — currently active:

```js
console.log(zRuntime.getRules());
// [{ selector: 'opacity', properties: 'opacity', values: [...], layer: 'styles' }, ...]
```

### `zRuntime.getSafelist()`

Returns the parsed safelist entries that will be included in the next generation pass:

```js
console.log(zRuntime.getSafelist());
// [{ baseClass: 'opacity', state: ':hover', fullClass: 'opacity:hover', isDark: false, prefix: null }]
```

## CSS Cascade Layers

All generated CSS lives inside `@layer` blocks. The layer is controlled per rule via the `layer` field (default: `styles`):

```css
@layer components {
  /* rules with layer: 'components' */
}

@layer styles {
  /* default layer */
  .opacity\:hover:hover { opacity: var(--opacity-hover); }

  @media (min-width: 48rem) {
    .md\:opacity\:hover:hover { opacity: var(--opacity-hover); }
  }
}

@layer utilities {
  /* rules with layer: 'utilities' */
}
```

This means component styles always yield to utility overrides, and utilities always win — without `!important`. Use the `layer` field in `zRuntime.customRules` to place your rules in the right tier.

## Recommended Workflow

**1\.** Build your UI with static classes as normal.

**2\.** Set inline CSS variables for each state:

```html
<div
  class="opacity:hover opacity"
  style="--opacity-hover: 1; --opacity: 0"
></div>
```

**3\.** Enable debug to catch missing variables:

```js
window.zRuntime = window.zRuntime || {};

zRuntime.debug = true;
```

**4\.** Fix every warning in the console.

**5\.** Remove or gate `zRuntime.debug = true` before shipping.

## Minimal Setup

```html
<div class="card group">
  <div
    class="opacity:group-hover opacity"
    style="--opacity-group-hover: 100%; --opacity: 0"
  >
    Read More
  </div>
</div>

<script>
  window.zRuntime = window.zRuntime || {};

  // Pre-generate classes for dynamic elements
  zRuntime.safelist = ['opacity:hover'];

  // Enable during development only
  zRuntime.debug = true;
</script>
```

## Inline Value Shorthand

Any token in `class` containing `=` is treated as an inline assignment. The runtime splits on the first `=`, injects the value as a CSS custom property directly on the element, and adds the class — all in one pass.

### Basic form

```html
<div class="p=4"></div>
```

Equivalent to writing:

```html
<div class="p" style="--p: 4"></div>
```

### With a state suffix

When the key includes a state, the CSS variable name is derived from the full parsed class:

```html
<div class="bg:hover=#ff0000"></div>
<!-- sets --bg-hover: #ff0000 inline, registers bg:hover for CSS generation -->
```

### Quoted values

Wrap complex values in single or double quotes to prevent the token parser from splitting on spaces:

```html
<div class="p='calc(var(--spacing) * 8)'"></div>
<div class="shadow='0 4px 6px rgb(0 0 0 / 0.1)'"></div>
```

Quotes are stripped before the value is applied. Any valid CSS — `calc()`, `var()`, space-separated shorthands — is safe to use.

### Combining with prefixes and dark mode

The full prefix syntax applies to the key side:

```html
<div class="md:p:hover='calc(var(--spacing) * 4)' dark:bg:hover=#1a1a1a"></div>
```

### Variable naming

| Token | CSS variable set |
| --- | --- |
| `p=4` | `--p` |
| `p:hover=4` | `--p-hover` |
| `md:p:hover=4` | `--md-p-hover` |
| `dark:bg:hover=#000` | `--dark-bg-hover` |
| `dark:lg:bg:hover=#000` | `--dark-lg-bg-hover` |

<span class="z-label z-label-primary">Note</span> Tokens without a state suffix (e.g. `p=4`) still have their variable injected and their class added, but they don't go through the interactive CSS generation path — they rely on a rule in your stylesheet that already references the variable.