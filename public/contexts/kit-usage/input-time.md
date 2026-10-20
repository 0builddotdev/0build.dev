# Input Time

## Usage

Web component for selecting time in 12-hour or 24-hour format while outputting the value in 24-hour (`HH:MM`) format.

```html
<z-input-time></z-input-time>
```

## Capturing values

Add the `name` attribute to automatically generate a hidden input field for form submission.

```html
<z-input-time name="time"></z-input-time>
```

## Prepopulating values

Pass a 24-hour time string (`HH:MM`) via `value`, or add the `now` attribute to default to the current time.

```html
<z-input-time value="20:00"></z-input-time>
<z-input-time now></z-input-time>
```

## Size modifiers

Add a size modifier class to the `cls` attribute.

| Class            | Description               |
| ---------------- | ------------------------- |
| `.z-form-xsmall` | Applies extra small size. |
| `.z-form-small`  | Applies small size.       |
| `.z-form-medium` | Applies medium size.      |
| `.z-form-large`  | Applies large size.       |

```html
<z-input-time cls="z-input-time z-form-small"></z-input-time>
<z-input-time cls="z-input-time z-form-large"></z-input-time>
```

## Disable input

Add the `disabled` attribute to make all fields read-only.

```html
<z-input-time disabled></z-input-time>
```

## Error state

Add `.z-form-danger` to the `cls` attribute targets to indicate an error state.

```html
<z-input-time
  cls="host-inner: z-input-time; input: z-input z-form-danger; meridiem-button: z-input-fake z-form-danger"
></z-input-time>
```

## Preventing layout shift

Set a predefined height on the parent element to prevent layout shift before rendering.

```html
<div class="[h]" style="--h: calc(var(--z-global-font-size) * 2.5)">
  <z-input-time></z-input-time>
</div>
```

## Internationalization

Priority order (highest to lowest):
- **Component-level i18n** (via `i18n` attribute or script tag)
- **Global component-specific namespace** (via `<script id="z-i18n">`)
- **Default values**

### Using the i18n attribute

```html
<z-input-time
  i18n="am: Morning; pm: Evening; hour-label: Hour; minute-label: Minute"
></z-input-time>
```

### Using a configuration script

```html
<z-input-time>
  <script type="application/json" data-fn="config">
    {
      "i18n": {
        "am": "Vormittag",
        "pm": "Nachmittag",
        "hour-label": "Stunde",
        "minute-label": "Minute",
        "meridiem-label": "Tageszeit",
        "time-label": "Uhrzeit"
      }
    }
  </script>
</z-input-time>
```

### Using global i18n

```html
<script id="z-i18n" type="application/json">
  {
    "z-input-time": {
      "am": "AM",
      "pm": "PM",
      "hour-label": "Hour",
      "minute-label": "Minute",
      "meridiem-label": "AM/PM",
      "time-label": "Time",
      "hour-placeholder": "HH",
      "minute-placeholder": "MM",
      "invalid-time": "Invalid time format"
    }
  }
</script>
```

### Available i18n options

| Key                  | Default             | Description                             |
| -------------------- | ------------------- | --------------------------------------- |
| `am`                 | AM                  | Text for AM period (12-hour clock only) |
| `pm`                 | PM                  | Text for PM period (12-hour clock only) |
| `hour-label`         | Hour                | Aria-label for hour input field         |
| `minute-label`       | Minute              | Aria-label for minute input field       |
| `meridiem-label`     | AM/PM               | Aria-label for AM/PM toggle button      |
| `time-label`         | Time                | Aria-label for the time input group     |
| `hour-placeholder`   | HH                  | Placeholder text for hour input         |
| `minute-placeholder` | MM                  | Placeholder text for minute input       |
| `invalid-time`       | Invalid time format | Error message for invalid time format   |

## Custom classes

Style internal elements via the `cls` attribute.

### Using simple string format

Applies to `container`:

```html
<z-input-time cls="my-time-input"></z-input-time>
```

### Using JSON object format

```html
<z-input-time
  cls='{
    "container": "time-input-wrapper",
    "input": "z-input z-form-small",
    "hour-input": "hour-field",
    "minute-input": "minute-field",
    "separator": "time-separator",
    "meridiem-button": "am-pm-toggle z-button",
    "button": "z-button"
  }'
></z-input-time>
```

### Using configuration script

```html
<z-input-time>
  <script type="application/json" data-fn="config">
    {
      "cls": {
        "container": "z-input-time",
        "input": "z-input",
        "meridiem-button": "z-input-fake"
      }
    }
  </script>
</z-input-time>
```

### Available cls targets

| Target            | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| `container`       | The main wrapper container for the entire component         |
| `input`           | Base class applied to both hour and minute inputs           |
| `hour-input`      | The hour input field (overrides `input` for hour field)     |
| `minute-input`    | The minute input field (overrides `input` for minute field) |
| `separator`       | The colon separator between hour and minute                 |
| `meridiem-button` | The AM/PM toggle button (12-hour clock only)                |
| `button`          | Base button class (fallback for meridiem-button)            |

## Custom inline styles

Apply custom inline styles via the `stl` attribute.

### Using simple string format

Applies to `container`:

```html
<z-input-time stl="display\: flex; gap\: 8px; align-items\: center;"></z-input-time>
```

### Using JSON object format

```html
<z-input-time
  stl='{
    "container": "display: flex; gap: 0.5rem;",
    "input": "width: 60px; text-align: center;",
    "hour-input": "border: 2px solid #1e87f0;",
    "separator": "font-weight: bold;",
    "meridiem-button": "min-width: 60px;"
  }'
></z-input-time>
```

### Using configuration script

```html
<z-input-time>
  <script type="application/json" data-fn="config">
    {
      "stl": {
        "container": "gap: 0.5rem;",
        "input": "font-size: 1.125rem;"
      }
    }
  </script>
</z-input-time>
```

### Available stl targets

Supports the same targets as `cls` (see [Available cls targets](#available-cls-targets)).

## Attributes

| Name                     | Type    | Default | Description                                                                                  |
| ------------------------ | ------- | ------- | -------------------------------------------------------------------------------------------- |
| `autofocus`              | Boolean | false   | Automatically focuses on the hour input field when the component is rendered.                |
| `now`                    | Boolean | false   | Automatically sets the current time as the default value.                                    |
| `clock`                  | String  | 12h     | Clock format: `12h` (with AM/PM) or `24h` (without AM/PM).                                   |
| `min`                    | String  |         | Minimum allowed time in HH:MM format.                                                        |
| `max`                    | String  |         | Maximum allowed time in HH:MM format.                                                        |
| `name`                   | String  |         | Name attribute for the hidden input field, enabling form submission.                         |
| `disabled`               | Boolean | false   | Disables all input fields, making the entire component read-only.                            |
| `required`               | Boolean | false   | Marks the time input as required for form validation.                                        |
| `value`                  | String  |         | Pre-populated time value in 24-hour format (HH:MM).                                          |
| `cls`                    | String  |         | Custom CSS classes. Can be a simple string or JSON object for targeting specific elements.   |
| `stl`                    | String  |         | Custom inline styles. Can be a simple string or JSON object for targeting specific elements. |
| `i18n`                   | String  |         | Internationalization strings as JSON object or via configuration script.                     |
| `force-prevent-rerender` | Boolean | false   | Prevents component rerendering (useful for HTMX or SPA scenarios).                           |

## Events

| Name                 | Description                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------- |
| `z-input-time:input` | Fired when the time value changes. Event detail contains `{value: string}` in 24-hour format. |
