# Local Storage Head (Theme Switcher)

## Usage

The `<z-lsh>` component manages theme switching and style preferences, storing selections in `localStorage` under `__Z_THEME__` and applying them as classes on `<html>`. Multiple instances stay in sync automatically.

**1.** Initialize default theme and mode in `<head>`:

```html
<script>
  const htmlElement = document.documentElement;
  const __Z_THEME__ = JSON.parse(localStorage.getItem("__Z_THEME__") || "{}");

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

**Note:** Replace `z-[group]-[value]` with any desired default class.

**2.** Add `bg` and `color` classes to `<body>` to adapt to the active theme:

```html
<body class="bg color" style="--bg: var(--z-bg); --color: var(--z-bg-f)">
```

**3.** Place `<z-lsh>` anywhere in your HTML.

## Theme toggle

Use `toggle` with `group="mode"` to switch between light and dark modes (ignores `value`):

```html
<z-lsh
  toggle
  group="mode"
  cls="z-button z-button-icon z-button-secondary z-button-small relative"
>
  <template data-fn="template">
    <z-icon icon="moon"></z-icon>
    <z-icon icon="sun"></z-icon>
  </template>
</z-lsh>
```

## Configuration groups

### Mode group (special behavior)

- `value="light"` removes the `dark` class from `<html>`.
- `value="dark"` adds the `dark` class to `<html>`.

```html
<z-lsh group="mode" value="light">
  <template data-fn="template">Light</template>
</z-lsh>
<z-lsh group="mode" value="dark">
  <template data-fn="template">Dark</template>
</z-lsh>
```

### Custom groups

Custom groups apply `value` as a class on `<html>` and automatically remove any existing class sharing the same prefix (e.g., switching `z-radius-sharp` to `z-radius-rounded` removes the previous `z-radius-*` class).

#### Example 1: Layout Density

```css
@layer theme {
  .z-density-compact {
    --z-interactive-padding-block-multiplier: 0.35;
    --z-interactive-padding-inline-multiplier: 0.75;
  }
  .z-density-comfortable {}
  .z-density-spacious {
    --z-interactive-padding-block-multiplier: 1;
    --z-interactive-padding-inline-multiplier: 1.75;
  }
}
```

```html
<z-lsh group="density" value="z-density-compact">
  <template data-fn="template">Compact</template>
</z-lsh>
<z-lsh group="density" value="z-density-spacious">
  <template data-fn="template">Spacious</template>
</z-lsh>
```

#### Example 2: Global UI Styles

```html
<z-lsh group="theme" value="z-theme-blue">
  <template data-fn="template">Blue</template>
</z-lsh>
<z-lsh group="font" value="z-font-small">
  <template data-fn="template">Small</template>
</z-lsh>
<z-lsh group="corners" value="z-radius-rounded">
  <template data-fn="template">Rounded</template>
</z-lsh>
```

## Prevent auto-update

Add `prevent-autoupdate` to prevent an instance from syncing with other instances:

```html
<z-lsh group="mode" value="dark" prevent-autoupdate>
  <template data-fn="template">Dark</template>
</z-lsh>
```

## Programmatic control

```html
<z-lsh id="theme-toggle" toggle group="mode">
  <template data-fn="template">Toggle</template>
</z-lsh>

<script>
  const toggle = document.getElementById("theme-toggle");

  // Before change (cancelable)
  toggle.addEventListener("z-lsh:before-change", (e) => {
    // e.preventDefault();
  });

  // After change: e.detail = { group, value, previousValue, config }
  toggle.addEventListener("z-lsh:change", (e) => {
    console.log("Changed:", e.detail);
  });
</script>
```

## Local storage structure

Stored in `localStorage` under `__Z_THEME__`:

```json
{
  "mode": "dark",
  "color": "z-theme-blue",
  "font": "z-font-medium"
}
```

## Internationalization

Priority order (highest to lowest):
- **Component-level i18n** (via `i18n` attribute or script tag)
- **Global component-specific namespace** (via `<script id="z-i18n">`)
- **Default values**

### Using the i18n attribute

```html
<z-lsh
  toggle
  group="mode"
  i18n='{"aria-label": "Cambiar tema", "switch-to-dark": "Cambiar a modo oscuro", "switch-to-light": "Cambiar a modo claro"}'
></z-lsh>
```

### Using a configuration script

```html
<z-lsh toggle group="mode">
  <script type="application/json" data-fn="config">
    {
      "i18n": {
        "aria-label": "Thème bascule",
        "switch-to-dark": "Passer en mode sombre",
        "switch-to-light": "Passer en mode clair"
      }
    }
  </script>
  <template data-fn="template">🌓</template>
</z-lsh>
```

### Available i18n options

| Key               | Default              | Description                                            |
| ----------------- | -------------------- | ------------------------------------------------------ |
| `aria-label`      | Toggle theme         | ARIA label for the button                              |
| `active-label`    | Active               | Label appended to ARIA when button is active           |
| `switch-to-dark`  | Switch to dark mode  | ARIA description when switching to dark (toggle mode)  |
| `switch-to-light` | Switch to light mode | ARIA description when switching to light (toggle mode) |

## Custom classes

Style the button via the `cls` attribute.

### Using simple string format

```html
<z-lsh cls="my-theme-button" toggle group="mode">
  <template data-fn="template">Toggle</template>
</z-lsh>
```

### Using JSON object format

```html
<z-lsh cls='{"button": "z-button z-button-primary z-lsh"}' toggle group="mode">
  <template data-fn="template">Toggle</template>
</z-lsh>
```

### Available cls target

| Target   | Description        |
| -------- | ------------------ |
| `button` | The button element |

## Custom inline styles

Apply custom inline styles via the `stl` attribute.

### Example

```html
<z-lsh
  stl='{"button": "padding: 0.5rem 1rem; border-radius: 8px;"}'
  toggle
  group="mode"
>
  <template data-fn="template">Toggle</template>
</z-lsh>
```

## Attributes

| Name                     | Type    | Default | Description                                                             |
| ------------------------ | ------- | ------- | ----------------------------------------------------------------------- |
| `value`                  | String  |         | The specific theme value to apply (e.g., "dark", "z-theme-blue")       |
| `group`                  | String  |         | Configuration group (e.g., "mode", "color", "font")                     |
| `toggle`                 | Boolean | false   | Enables toggle behavior for mode switching (ignores value attribute)    |
| `prevent-autoupdate`     | Boolean | false   | Prevents this instance from syncing with other instances                |
| `cls`                    | String  |         | Custom CSS classes for the button                                       |
| `stl`                    | String  |         | Custom inline styles for the button                                     |
| `i18n`                   | String  |         | Internationalization strings as JSON object or via configuration script |
| `force-prevent-rerender` | Boolean | false   | Prevents component rerendering (useful for HTMX or SPA scenarios)       |

## Events

| Name                  | Description                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------ |
| `z-lsh:before-change` | Fired before theme change (cancelable). Event detail contains `{group, value, previousValue, config}`. |
| `z-lsh:change`        | Fired after theme change. Event detail contains `{group, value, previousValue, config}`.               |
