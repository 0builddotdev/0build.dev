# Input PIN

## Usage

Web component for entering a sequence of single-character alphanumeric inputs (verification codes, 2FA, PINs).

```html
<z-input-pin></z-input-pin>
```

## Capturing values

Add the `name` attribute to automatically generate a hidden input field for form submission.

```html
<z-input-pin name="pin"></z-input-pin>
```

## Customize length

Defaults to 6 characters. Set the `length` attribute to change the number of inputs.

```html
<z-input-pin length="4"></z-input-pin>
```

## Separated input

Add `.z-input-pin-separated` to the `cls` attribute to add visual gaps between input fields.

```html
<z-input-pin cls="z-input-pin z-input-pin-separated"></z-input-pin>
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
<z-input-pin cls="z-input-pin z-form-small"></z-input-pin>
<z-input-pin cls="z-input-pin z-form-large"></z-input-pin>
```

## Disable input

Add the `disabled` attribute to disable all input fields.

```html
<z-input-pin disabled></z-input-pin>
```

## Error state

Add `.z-form-danger` to the `cls` attribute to indicate an error state.

```html
<z-input-pin cls="z-input-pin z-form-danger"></z-input-pin>
```

## Internationalization

Priority order (highest to lowest):
- **Component-level i18n** (via `i18n` attribute or script tag)
- **Global component-specific namespace** (via `<script id="z-i18n">`)
- **Default values**

### Using the i18n attribute

```html
<z-input-pin
  length="6"
  i18n='{"label": "Código de verificación", "description": "Ingrese el código de {length} dígitos", "complete": "Entrada de PIN completada"}'
></z-input-pin>
```

### Using a configuration script

```html
<z-input-pin length="6">
  <script type="application/json" data-fn="config">
    {
      "i18n": {
        "label": "Code de vérification",
        "description": "Entrez le code à {length} chiffres",
        "field-label": "Chiffre {n} sur {total}",
        "complete": "Saisie du PIN terminée"
      }
    }
  </script>
</z-input-pin>
```

### Using global i18n

```html
<script id="z-i18n" type="application/json">
  {
    "z-input-pin": {
      "label": "Bestätigungscode",
      "description": "Geben Sie den {length}-stelligen Code ein",
      "field-label": "Ziffer {n} von {total}",
      "loaded": "PIN-Eingabe bereit",
      "complete": "PIN-Eingabe abgeschlossen",
      "field-filled": "Feld {n} ausgefüllt",
      "invalid-character": "Ungültiges Zeichen eingegeben"
    }
  }
</script>
```

### Available i18n options

| Key                 | Default                       | Description                                                                      |
| ------------------- | ----------------------------- | -------------------------------------------------------------------------------- |
| `label`             | PIN Code                      | Main label for the PIN input group                                               |
| `description`       | Enter {'{length}'}-digit code | Description text (supports {'{length}'} placeholder)                             |
| `field-label`       | Digit {'{n}'} of {'{total}'}  | ARIA label for individual fields (supports {'{n}'}, {'{total}'} placeholders)    |
| `loaded`            | PIN input ready               | Screen reader announcement when component loads                                  |
| `complete`          | PIN entry complete            | Screen reader announcement when all fields are filled                            |
| `field-filled`      | Field {'{n}'} filled          | Screen reader announcement when a field is filled (supports {'{n}'} placeholder) |
| `invalid-character` | Invalid character entered     | Screen reader announcement for invalid input                                     |

## Custom classes

Style internal elements via the `cls` attribute.

### Using simple string format

Applies to the default element (`host-inner`):

```html
<z-input-pin cls="my-pin-input"></z-input-pin>
```

### Using JSON object format

```html
<z-input-pin
  cls='{
    "host-inner": "pin-container",
    "wrapper": "z-input-pin z-input-pin-separated",
    "input": "z-input z-form-large",
    "label": "pin-label",
    "description": "pin-desc"
  }'
></z-input-pin>
```

### Using configuration script

```html
<z-input-pin>
  <script type="application/json" data-fn="config">
    {
      "cls": {
        "wrapper": "z-input-pin z-input-pin-separated",
        "input": "z-input"
      }
    }
  </script>
</z-input-pin>
```

### Available cls targets

| Target        | Description                                          |
| ------------- | ---------------------------------------------------- |
| `host-inner`  | The main container div                               |
| `wrapper`     | The div wrapping all input fields                    |
| `input`       | Individual input fields                              |
| `label`       | The label element (visually hidden by default)       |
| `description` | The description element (visually hidden by default) |

## Custom inline styles

Apply custom inline styles via the `stl` attribute.

### Using simple string format

Applies to `host-inner`:

```html
<z-input-pin stl="margin\: 2rem 0;"></z-input-pin>
```

### Using JSON object format

```html
<z-input-pin
  stl='{
    "container": "margin: 2rem 0;",
    "wrapper": "gap: 1rem; display: flex;",
    "input": "width: 50px; height: 60px; text-align: center;",
    "label": "font-weight: 600;",
    "description": "color: #666;"
  }'
></z-input-pin>
```

### Using configuration script

```html
<z-input-pin>
  <script type="application/json" data-fn="config">
    {
      "stl": {
        "wrapper": "gap: 0.75rem;",
        "input": "width: 45px; height: 55px;"
      }
    }
  </script>
</z-input-pin>
```

### Available stl targets

Supports the same targets as `cls` (see [Available cls targets](#available-cls-targets)).

## Keyboard navigation

| Key            | Action                                                   |
| -------------- | -------------------------------------------------------- |
| Type character | Auto-advances to next field                              |
| Backspace      | Deletes character and moves to previous field (if empty) |
| Delete         | Moves to next field (if current is empty)                |
| Arrow Left     | Move to previous field                                   |
| Arrow Right    | Move to next field                                       |
| Home           | Jump to first field                                      |
| End            | Jump to last filled field                                |
| Paste (Ctrl+V) | Distributes pasted content across fields                 |

## Paste support

- Content is automatically distributed across input fields and trimmed to PIN length.
- Focus moves to the next empty field or blurs if complete.
- Invalid pastes are rejected with a screen reader announcement.

## Preventing layout shift

Set a predefined height on the parent element to prevent layout shift before Web Component rendering.

```html
<div class="[h]" style="--h: calc(var(--z-global-font-size) * 2.5)">
  <z-input-pin></z-input-pin>
</div>
```

## Attributes

| Name                     | Type    | Default | Description                                                                       |
| ------------------------ | ------- | ------- | --------------------------------------------------------------------------------- |
| `autofocus`              | Boolean | false   | Automatically focuses on the first input field when the component is rendered     |
| `length`                 | Number  | 6       | Number of PIN digits/characters to collect                                        |
| `input-mode`             | String  | numeric | Input mode for mobile keyboards: `numeric` or `text`                              |
| `show-labels`            | Boolean | false   | Whether to show labels and descriptions visually (default: hidden but accessible) |
| `name`                   | String  |         | Name attribute for the hidden input field, enabling form submission               |
| `disabled`               | Boolean | false   | Disables all input fields, making the entire component read-only                  |
| `value`                  | String  |         | Pre-populated PIN value                                                           |
| `cls`                    | String  |         | Custom CSS classes. Can be simple string or JSON object for targeting elements    |
| `stl`                    | String  |         | Custom inline styles. Can be simple string or JSON object for targeting elements  |
| `i18n`                   | String  |         | Internationalization strings as JSON object or via configuration script           |
| `force-prevent-rerender` | Boolean | false   | Prevents component rerendering (useful for HTMX or SPA scenarios)                 |

## Events

| Name                   | Description                                                                    |
| ---------------------- | ------------------------------------------------------------------------------ |
| `z-input-pin:change`   | Fired when the PIN value changes. Event detail contains `{value: string}`.     |
| `z-input-pin:complete` | Fired when all PIN fields are filled. Event detail contains `{value: string}`. |
