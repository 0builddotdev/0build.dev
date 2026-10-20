# Input Range

## Usage

Customizable range slider web component with keyboard navigation and ARIA support.

```html
<z-input-range></z-input-range>
```

## Dual range

Add the `multiple` attribute to render two knobs for selecting a minimum and maximum value range.

```html
<z-input-range multiple></z-input-range>
```

## Capturing values

Add the `name` attribute to automatically generate a hidden input field for form submission.

**Note:** When `multiple` is enabled, two hidden inputs are rendered (for lower and upper values) and `[]` is automatically appended to the `name` attribute (e.g., `name="range[]"`).

```html
<z-input-range name="range"></z-input-range>
```

## Prepopulating values

Pass initial value(s) via the `value` attribute.

**Note:** In dual knob (`multiple`) mode, pass two comma-separated values (`lower,upper`).

```html
<z-input-range value="75"></z-input-range>
<z-input-range multiple value="20,80"></z-input-range>
```

## Labeling

Use the `label` attribute to display a value label on each knob.

**Note:** Including `label` without a value (or `true`) displays only the numeric value; passing a string concatenates it with the value.

```html
<z-input-range label></z-input-range>
<z-input-range label="kg"></z-input-range>
```

### Position

Control label position relative to the knob with `label-position`:
- `top` (default): Above the knob.
- `bottom`: Below the knob.

```html
<z-input-range label="kg" label-position="bottom"></z-input-range>
```

## Min and max

Set `min` and `max` to define the lowest and highest selectable values.

```html
<z-input-range min="50" max="75" label></z-input-range>
```

## Step

Set `step` to define the increment interval for dragging and keyboard navigation.

```html
<z-input-range label step="0.5"></z-input-range>
<z-input-range label multiple step="0.5"></z-input-range>
```

## Disable input

Add the `disabled` attribute to prevent user interaction.

```html
<z-input-range disabled value="50"></z-input-range>
```

## Preventing layout shift

Set a predefined height on the parent element to prevent layout shift before rendering.

```html
<div class="h" style="--h: 10">
  <z-input-range name="range"></z-input-range>
</div>
```

## Internationalization

Priority order (highest to lowest):
1. **Component-level i18n** (via `i18n` attribute or script tag)
2. **Global component-specific namespace** (via `<script id="z-i18n">`)
3. **Default values**

### Using the i18n attribute

```html
<z-input-range
  min="0"
  max="100"
  value="50"
  label
  i18n="aria-value-text: Valor: {value}; aria-label: Control deslizante; low-knob-label: Valor mínimo; high-knob-label: Valor máximo"
></z-input-range>
```

### Using a configuration script

```html
<z-input-range min="0" max="100" value="50" label>
  <script type="application/json" data-fn="config">
    {
      "i18n": {
        "aria-value-text": "Valeur: {value}",
        "aria-range-text": "Plage de {low} à {high}",
        "low-knob-label": "Valeur minimale",
        "high-knob-label": "Valeur maximale",
        "aria-label": "Curseur de plage"
      }
    }
  </script>
</z-input-range>
```

### Using global i18n

```html
<script id="z-i18n" type="application/json">
  {
    "z-input-range": {
      "aria-value-text": "Wert: {value}",
      "aria-range-text": "Bereich von {low} bis {high}",
      "low-knob-label": "Mindestwert",
      "high-knob-label": "Höchstwert",
      "aria-label": "Bereichsschieberegler"
    }
  }
</script>
```

### Available i18n options

| Key               | Default                            | Description                                                                     |
| ----------------- | ---------------------------------- | ------------------------------------------------------------------------------- |
| `aria-value-text` | Value: {'{value}'}                 | ARIA value text for single mode (supports {'{value}'} placeholder)              |
| `aria-range-text` | Range from {'{low}'} to {'{high}'} | ARIA value text for multiple mode (supports {'{low}'}, {'{high}'} placeholders) |
| `low-knob-label`  | Minimum value                      | ARIA label for the low/single knob                                              |
| `high-knob-label` | Maximum value                      | ARIA label for the high knob (multiple mode only)                               |
| `aria-label`      | Range slider                       | ARIA label for the component group                                              |

## Custom classes

Style internal elements via the `cls` attribute.

### Using simple string format

Applies to `host-inner`:

```html
<z-input-range cls="my-range-slider"></z-input-range>
```

### Using JSON object format

```html
<z-input-range
  cls='{
    "host-inner": "range-container",
    "runnable": "range-track",
    "fill": "range-fill",
    "knob": "range-knob",
    "knob-low": "low-knob",
    "knob-high": "high-knob",
    "knob-dragging": "dragging",
    "label": "value-label",
    "label-top": "label-above",
    "label-bottom": "label-below"
  }'
  min="0"
  max="100"
  value="50"
  label
></z-input-range>
```

### Using configuration script

```html
<z-input-range min="0" max="100" value="50" label>
  <script type="application/json" data-fn="config">
    {
      "cls": {
        "host-inner": "z-input-range",
        "knob": "custom-knob",
        "fill": "custom-fill"
      }
    }
  </script>
</z-input-range>
```

### Available cls targets

| Target          | Description                                                           |
| --------------- | --------------------------------------------------------------------- |
| `host-inner`    | The main container wrapper for the entire component                   |
| `runnable`      | The track/rail element that knobs slide along                         |
| `fill`          | The filled portion of the track (from start to knob or between knobs) |
| `knob`          | Base class for all knobs                                              |
| `knob-low`      | The low/single knob (overrides `knob` for this knob)                  |
| `knob-high`     | The high knob in multiple mode (overrides `knob`)                     |
| `knob-dragging` | Additional class applied to knob while being dragged                  |
| `label`         | Base class for value labels                                           |
| `label-top`     | Class applied when label-position="top"                               |
| `label-bottom`  | Class applied when label-position="bottom"                            |

## Custom inline styles

Apply custom inline styles via the `stl` attribute.

### Using simple string format

Applies to `host-inner`:

```html
<z-input-range stl="padding\: 2rem 0; margin\: 1rem 0;"></z-input-range>
```

### Using JSON object format

```html
<z-input-range
  stl='{
    "host-inner": "position: relative; padding: 2rem 0;",
    "runnable": "height: 8px; background: #e0e0e0;",
    "fill": "background: #1e87f0; height: 8px;",
    "knob": "width: 24px; height: 24px; border-radius: 50%;",
    "label": "font-size: 14px;"
  }'
  min="0"
  max="100"
  value="50"
  label
></z-input-range>
```

### Using configuration script

```html
<z-input-range min="0" max="100" value="50" label>
  <script type="application/json" data-fn="config">
    {
      "stl": {
        "host-inner": "padding: 1.5rem 0;",
        "knob": "width: 20px; height: 20px;"
      }
    }
  </script>
</z-input-range>
```

### Available stl targets

Supports the same targets as `cls` (see [Available cls targets](#available-cls-targets)).

## Attributes

| Name                     | Type           | Default | Description                                                                      |
| ------------------------ | -------------- | ------- | -------------------------------------------------------------------------------- |
| `multiple`               | Boolean        | false   | Enables dual-knob mode for selecting a value range                               |
| `min`                    | Number         | 0       | Minimum allowed value for the slider                                             |
| `max`                    | Number         | 100     | Maximum allowed value for the slider                                             |
| `step`                   | Number         | 1       | Step increment for value changes                                                 |
| `label`                  | String/Boolean | false   | Show value label on knob(s). Can be boolean (true/false) or custom text          |
| `label-position`         | String         | top     | Position of the label relative to knob: `top` or `bottom`                        |
| `aria-label`             | String         |         | Custom ARIA label for the component (overrides i18n default)                     |
| `name`                   | String         |         | Name attribute for hidden input(s), enabling form submission                     |
| `disabled`               | Boolean        | false   | Disables the entire component, preventing user interaction                       |
| `required`               | Boolean        | false   | Marks the input as required for form validation                                  |
| `value`                  | String         |         | Pre-set value (single) or comma-separated values (multiple mode)                 |
| `cls`                    | String         |         | Custom CSS classes. Can be simple string or JSON object for targeting elements   |
| `stl`                    | String         |         | Custom inline styles. Can be simple string or JSON object for targeting elements |
| `i18n`                   | String         |         | Internationalization strings as JSON object or via configuration script          |
| `force-prevent-rerender` | Boolean        | false   | Prevents component rerendering (useful for HTMX or SPA scenarios)                |

## Events

| Name                  | Description                                                                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `z-input-range:input` | Fired when the range value changes. Event detail contains `{value: string \| string[]}`. In single mode, value is a string. In multiple mode, value is an array of two strings. |
