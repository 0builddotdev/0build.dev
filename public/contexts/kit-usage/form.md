# Form

## Usage

Add one of the following classes to form controls inside a `<form>` element. Use `.z-fieldset` on `<fieldset>` and `.z-legend` on `<legend>`.

| Class              | Description                                                                     |
| ------------------ | ------------------------------------------------------------------------------- |
| `.z-input`         | Add this class to `<input>` elements.                                           |
| `.z-select`        | Add this class to `<select>` elements.                                          |
| `.z-textarea`      | Add this class to `<textarea>` elements.                                        |
| `.z-radio`         | Add this class to `<input type="radio">` elements to create radio buttons.      |
| `.z-checkbox`      | Add this class to `<input type="checkbox">` elements to create checkboxes.      |
| `.z-range`         | Add this class to `<input type="range">` elements to create range forms.        |
| `.z-toggle-switch` | Add this class to `<input type="checkbox">` elements to create toggle switches. |

```html
<form>
  <fieldset class="z-fieldset">
    <legend class="z-legend">Legend</legend>
    <input class="z-input" type="text" placeholder="Input" aria-label="Input" />
    <select class="z-select" aria-label="Select">
      <option>Option 01</option>
      <option>Option 02</option>
    </select>
    <textarea class="z-textarea" rows="5" placeholder="Textarea" aria-label="Textarea"></textarea>
    <label><input class="z-radio" type="radio" name="radio2" checked /> Option 1</label>
    <label><input class="z-checkbox" type="checkbox" checked /> Option 1</label>
    <input class="z-range" type="range" value="2" min="0" max="10" step="0.1" aria-label="Range" />
  </fieldset>
</form>
```

## Destructive modifier

Add `.z-form-danger` to an `<input>`, `<select>`, or `<textarea>` element to indicate an invalid value. Add `disabled` to disable a control.

```html
<input class="z-input z-form-danger" type="text" placeholder="form-danger" aria-label="form-danger" value="form-danger" />
<input class="z-input" type="text" placeholder="disabled" aria-label="disabled" value="disabled" disabled />
```

## Size modifiers

Add one of the following classes to adjust form control size.

| Class            | Description               |
| ---------------- | ------------------------- |
| `.z-form-xsmall` | Applies extra small size. |
| `.z-form-small`  | Applies small size.       |
| `.z-form-medium` | Applies medium size.      |
| `.z-form-large`  | Applies large size.       |

```html
<input class="z-input z-form-xsmall" type="text" placeholder="xs" aria-label="xs" />
<input class="z-input z-form-small" type="text" placeholder="sm" aria-label="sm" />
<input class="z-input z-form-medium" type="text" placeholder="md" aria-label="md" />
<input class="z-input z-form-large" type="text" placeholder="lg" aria-label="lg" />
```

## Width modifiers

Use width utility classes on parent wrappers or alongside form classes to control width.

```html
<div class="w" style="--w: 40">
  <input class="z-input" type="text" placeholder="10rem" />
</div>
<div class="[w]" style="--w: 50%">
  <input class="z-input" type="text" placeholder="50%" />
</div>
<div class="w-full">
  <input class="z-input" type="text" placeholder="100%" />
</div>
```

## Blank modifier

Add `.z-form-blank` to minimize the styling of form controls.

```html
<input class="z-input z-form-blank" type="text" placeholder="Form blank" />
```

## Layout

Define labels and controls and apply a stacked layout to form elements (on `<form>`, `<fieldset>`, or any parent element).

| Class                    | Description                                                     |
| ------------------------ | --------------------------------------------------------------- |
| `.z-form-stacked`        | Add this class to display labels on top of controls.            |
| `.z-form-label`          | Add this class to define form labels.                           |
| `.z-form-label-required` | Add this class to automatically add an asterisk to form labels. |
| `.z-form-controls`       | Add this class to define form controls.                         |

```html
<form class="z-form-stacked">
  <div>
    <label class="z-form-label z-form-label-required" for="form-stacked-text">Text</label>
    <div class="z-form-controls">
      <input class="z-input" id="form-stacked-text" type="text" placeholder="Some text" />
    </div>
  </div>
</form>
```

## Form and icons

Place a `.z-form-icon` `<span>` containing a `<z-icon>` before an `<input>` inside a `.z-inline` container. Add `.z-form-icon-flip` to place the icon on the right.

```html
<div class="z-inline">
  <span class="z-form-icon">
    <z-icon icon="user"></z-icon>
  </span>
  <input class="z-input" type="text" aria-label="Not clickable icon" />
</div>

<div class="z-inline">
  <span class="z-form-icon z-form-icon-flip">
    <z-icon icon="user"></z-icon>
  </span>
  <input class="z-input" type="text" aria-label="Not clickable icon" />
</div>
```

### Clickable icons

Use an `<a>` or `<button>` element instead of `<span>` for `.z-form-icon` to make the icon interactive.

```html
<div class="z-inline">
  <a class="z-form-icon z-form-icon-flip" href="#">
    <z-icon icon="link"></z-icon>
  </a>
  <input class="z-input" type="text" aria-label="Clickable icon" />
</div>
```

## Custom controls

Add `data-z-form-custom` to a container element to replace native file or select inputs with custom HTML content.

### File

Use a button, text, or disabled input (`target: true`) as a custom file input.

```html
<div data-z-form-custom>
  <input type="file" aria-label="Custom controls" />
  <button class="z-button z-button-default" type="button" tabindex="-1">Select</button>
</div>

<div data-z-form-custom="target: true">
  <input type="file" aria-label="Custom controls" />
  <input class="z-input max-w-sm" type="text" placeholder="Select file" aria-label="Custom controls" disabled />
</div>
```

**Note:** Hover and focus states for `z-form-custom` are not styled by default; use the adjacent sibling selector if needed.

### Select

Add `target: SELECTOR` to `data-z-form-custom` to display the selected option text inside the target element (`target: true` selects the adjacent sibling).

```html
<div data-z-form-custom="target: true">
  <select aria-label="Custom controls">
    <option value="1">Option 01</option>
    <option value="2">Option 02</option>
  </select>
  <span></span>
</div>

<div data-z-form-custom="target: > * > span:first-child">
  <select aria-label="Custom controls">
    <option value="">Please select...</option>
    <option value="1">Option 01</option>
  </select>
  <button class="z-button z-button-default" type="button" tabindex="-1">
    <span></span>
    <z-icon icon="chevron-down"></z-icon>
  </button>
</div>
```

## Help block

Create form help text with `.z-form-help` and associate it with the control using `aria-describedby`.

```html
<div>
  <label for="name" class="z-form-label">Name</label>
  <input type="text" id="name" class="z-input" aria-describedby="name-help-block" placeholder="Name" />
  <div class="z-form-help" id="name-help-block">Help text description.</div>
</div>
```

## Toggle Switch

Use `.z-toggle-switch` with `.z-toggle-switch-primary` or `.z-toggle-switch-danger` on `<input type="checkbox">` for a CSS-only toggle switch.

```html
<div class="flex items-center space-x" style="--space-x: 2">
  <input class="z-toggle-switch z-toggle-switch-primary" id="toggle-switch" type="checkbox" />
  <label class="z-form-label" for="toggle-switch">Toggle me</label>
</div>

<div class="flex items-center space-x" style="--space-x: 2">
  <input class="z-toggle-switch z-toggle-switch-danger" checked id="toggle-danger" type="checkbox" />
  <label class="z-form-label" for="toggle-danger">Danger</label>
</div>
```

## Accessibility

Set the appropriate WAI-ARIA roles, states, and properties:

- If no `<label>` element is associated with the form control, set `aria-label` on the control to describe its meaning.

```html
<input class="z-input" type="text" aria-label="..." />
```
