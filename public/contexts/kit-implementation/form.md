# Form

## Usage

Add one of the following classes to form controls inside a `<form>` element to define them.

| Class               | Description                                                                     |
| ------------------- | ------------------------------------------------------------------------------- |
| `.z-input`         | Add this class to `<input>` elements.                                           |
| `.z-select`        | Add this class to `<select>` elements.                                          |
| `.z-textarea`      | Add this class to `<textarea>` elements.                                        |
| `.z-radio`         | Add this class to `<input type="radio">` elements to create radio buttons.      |
| `.z-checkbox`      | Add this class to `<input type="checkbox">` elements to create checkboxes.      |
| `.z-range`         | Add this class to `<input type="range">` elements to create range forms.        |
| `.z-toggle-switch` | Add this class to `<input type="checkbox">` elements to create toggle switches. |

```html
<form>
  <input class="z-input" type="text" />
  <select class="z-select">
    <option></option>
    <option></option>
  </select>
  <textarea class="z-textarea"></textarea>
  <input class="z-radio" type="radio" />
  <input class="z-checkbox" type="checkbox" />
  <input class="z-range" type="range" />
</form>
```

Add the `.z-fieldset` class to a `<fieldset>` element and the `.z-legend` class to a `<legend>` element to define a fieldset and a form legend.

```html
<form>
  <fieldset class="z-fieldset space-y" style="--space-y: 4">
    <div class="">
      <input
        class="z-input"
        type="text"
        placeholder="Input"
        aria-label="Input"
      />
    </div>

    <div class="">
      <select class="z-select" aria-label="Select">
        <option>Option 01</option>
        <option>Option 02</option>
      </select>
    </div>

    <div class="">
      <textarea
        class="z-textarea"
        rows="5"
        placeholder="Textarea"
        aria-label="Textarea"
      ></textarea>
    </div>

    <div class="">
      <label class="mr" style="--mr: 2">
        <input
          class="z-radio mr"
          style="--mr: 1"
          type="radio"
          name="radio2"
          checked
        />
        Option 1
      </label>
      <label>
        <input class="z-radio mr" style="--mr: 1" type="radio" name="radio2" />
        Option 2
      </label>
    </div>

    <div class="">
      <label class="mr" style="--mr: 2">
        <input class="z-checkbox mr" style="--mr: 1" type="checkbox" checked />
        Option 1
      </label>
      <label
        ><input class="z-checkbox mr" style="--mr: 1" type="checkbox" /> Option
        2</label
      >
    </div>

    <div class="">
      <input
        class="z-range"
        type="range"
        value="2"
        min="0"
        max="10"
        step="0.1"
        aria-label="Range"
      />
    </div>
  </fieldset>
</form>
```

## Destructive modifier

Add the `.z-form-danger` class to an `<input>`, `<select>` or `<textarea>` element to notify the user that the value is not validated.

```html
<div>
  <input
    class="z-input z-form-danger"
    type="text"
    placeholder="form-danger"
    aria-label="form-danger"
    value="form-danger"
  />
</div>

<div class="mt" style="--mt: 4">
  <input
    class="z-input"
    type="text"
    placeholder="disabled"
    aria-label="disabled"
    value="disabled"
    disabled
  />
</div>
```

## Size modifiers

There are several size modifiers available. Just add one of the following classes to make the form smaller or larger.

| Class             | Description               |
| ----------------- | ------------------------- |
| `.z-form-xsmall` | Applies extra small size. |
| `.z-form-small`  | Applies small size.       |
| `.z-form-medium` | Applies medium size.      |
| `.z-form-large`  | Applies large size.       |

```html
<form>
  <div class="">
    <input
      class="z-input z-form-xsmall"
      type="text"
      placeholder="xs"
      aria-label="xs"
    />
  </div>

  <div class="mt" style="--mt: 4">
    <input
      class="z-input z-form-small"
      type="text"
      placeholder="sm"
      aria-label="sm"
    />
  </div>

  <div class="mt" style="--mt: 4">
    <input
      class="z-input z-form-medium"
      type="text"
      placeholder="md"
      aria-label="md"
    />
  </div>

  <div class="mt" style="--mt: 4">
    <input
      class="z-input z-form-large"
      type="text"
      placeholder="lg"
      aria-label="lg"
    />
  </div>
</form>
```

## Width modifiers

You can use utility classes alongside form classes and the it will follow its width.

```html
<div class="space-y" style="--space-y: 4">
  <div class="w" style="--w: 40">
    <input class="z-input" type="text" placeholder="10rem" />
  </div>
  <div class="[w]" style="--w: 50%">
    <input class="z-input" type="text" placeholder="50%" />
  </div>
  <div class="w-full">
    <input class="z-input" type="text" placeholder="100%" />
  </div>
</div>
```

## Blank modifier

Add the `.z-form-blank` class to minimize the styling of form controls.

```html
<form>
  <input class="z-input z-form-blank" type="text" placeholder="Form blank" />
</form>
```

## Layout

Define labels and controls and apply a stacked layout to form elements. Layout modifiers can be added to any parent element like the `<fieldset>` element.

| Class                     | Description                                                     |
| ------------------------- | --------------------------------------------------------------- |
| `.z-form-stacked`        | Add this class to display labels on top of controls.            |
| `.z-form-label`          | Add this class to define form labels.                           |
| `.z-form-label-required` | Add this class to automatically add an asterisk to form labels. |
| `.z-form-controls`       | Add this class to define form controls.                         |

```html
<form class="z-form-stacked">
  <div>
    <label class="z-form-label block"></label>
    <div class="z-form-controls">…</div>
  </div>
  <div>
    <div class="z-form-label"></div>
    <div class="z-form-controls">…</div>
  </div>
</form>
```

```html
<form class="z-form-stacked space-y" style="--space-y: 4">
  <div class="">
    <label class="z-form-label z-form-label-required" for="form-stacked-text">
      Text
    </label>
    <div class="z-form-controls">
      <input
        class="z-input"
        id="form-stacked-text"
        type="text"
        placeholder="Some text"
      />
    </div>
  </div>

  <div class="">
    <label class="z-form-label" for="form-stacked-select">Select</label>
    <div class="z-form-controls">
      <select class="z-select" id="form-stacked-select">
        <option>Option 01</option>
        <option>Option 02</option>
      </select>
    </div>
  </div>

  <div class="">
    <div class="z-form-label">Radio</div>
    <div class="z-form-controls">
      <label class="mr" style="--mr: 2">
        <input class="z-radio mr" style="--mr: 1" type="radio" name="radio1" />
        Option 01
      </label>
      <label>
        <input class="z-radio mr" style="--mr: 1" type="radio" name="radio1" />
        Option 02
      </label>
    </div>
  </div>
</form>
```

## Form and icons

You use an icon from the [Icon component](/docs/latest/kit/icon) inside a form. Add the `.z-form-icon` class to a `<span>` element. Group it with an `<input>` element by adding the `.z-inline` class to a container element around both. The icon has to come first in the markup. By default, the icon will be placed on the left side of the form. To change the alignment, add the `.z-form-icon-flip` class.

```html
<div class="z-inline">
  <span class="z-form-icon">
    <z-icon icon="user"></z-icon>
  </span>
  <input class="z-input" />
</div>
```

```html
<form class="space-y" style="--space-y: 4">
  <div class="">
    <div class="z-inline">
      <span class="z-form-icon">
        <z-icon icon="user"></z-icon>
      </span>
      <input class="z-input" type="text" aria-label="Not clickable icon" />
    </div>
  </div>

  <div class="">
    <div class="z-inline">
      <span class="z-form-icon z-form-icon-flip">
        <z-icon icon="user"></z-icon>
      </span>
      <input class="z-input" type="text" aria-label="Not clickable icon" />
    </div>
  </div>
</form>
```

### Clickable icons

To enable an action, for example opening a modal to pick an image or link, use an `<a>` or `<button>` element to create the icon.

```html
<div class="z-inline">
  <a class="z-form-icon z-form-icon-flip" href="">
    <z-icon icon="user"></z-icon>
  </a>
  <input class="z-input" />
</div>
```

```html
<form class="space-y" style="--space-y: 4">
  <div class="">
    <div class="z-inline">
      <a class="z-form-icon" href="#">
        <z-icon icon="file-pen-line"></z-icon>
      </a>
      <input class="z-input" type="text" aria-label="Clickable icon" />
    </div>
  </div>

  <div class="">
    <div class="z-inline">
      <a class="z-form-icon z-form-icon-flip" href="#">
        <z-icon icon="link"></z-icon>
      </a>
      <input class="z-input" type="text" aria-label="Clickable icon" />
    </div>
  </div>
</form>
```

## Custom controls

To replace a file input or select forms with your own HTML content, like a button or text, add the `data-z-form-custom` attribute to a container element.

### File

Use a button or text as a file input.

```html
<div data-z-form-custom>
  <input type="file" />
  <button type="button"></button>
</div>
```

```html
<form>
  <div class="">
    <div data-z-form-custom>
      <input type="file" aria-label="Custom controls" />
      <button class="z-button z-button-default" type="button" tabindex="-1">
        Select
      </button>
    </div>
  </div>

  <div class="mt" style="--mt: 4">
    <span class="z-text-middle">Here is a text</span>
    <div data-z-form-custom>
      <input type="file" aria-label="Custom controls" />
      <span class="z-link">upload</span>
    </div>
  </div>

  <div class="mt" style="--mt: 4">
    <div data-z-form-custom="target: true">
      <input type="file" aria-label="Custom controls" />
      <input
        class="z-input max-w-sm"
        type="text"
        placeholder="Select file"
        aria-label="Custom controls"
        disabled
      />
    </div>
    <button class="z-button z-button-default">Submit</button>
  </div>
</form>
```

<span class="z-label z-label-primary">Note</span> The hover and focus state
for `z-form-custom` are not styled by default, but you could use the adjacent
sibling selector to do so.

### Select

Use a button, text or a link as a select form. Just add the `target: SELECTOR` option to the `z-form-custom` attribute to select where the option value should be displayed. `target: true` will select the adjacent element in the markup.

```html
<div data-z-form-custom="target: true">
  <select>
    <option></option>
    <option></option>
  </select>
  <button type="button"></button>
</div>
```

```html
<form>
  <div class="">
    <div data-z-form-custom="target: true">
      <select aria-label="Custom controls">
        <option value="1">Option 01</option>
        <option value="2">Option 02</option>
        <option value="3">Option 03</option>
        <option value="4">Option 04</option>
      </select>
      <span></span>
    </div>
  </div>

  <div class="mt" style="--mt: 4">
    <div data-z-form-custom="target: > * > span:last-child">
      <select aria-label="Custom controls">
        <option value="1">Option 01</option>
        <option value="2">Option 02</option>
        <option value="3">Option 03</option>
        <option value="4">Option 04</option>
      </select>
      <span class="display-flex items-center z-link">
        <span class="mr" style="--mr: 2">
          <z-icon icon="pencil-line"></z-icon>
        </span>
        <span></span>
      </span>
    </div>
  </div>

  <div class="mt" style="--mt: 4">
    <div data-z-form-custom="target: > * > span:first-child">
      <select aria-label="Custom controls">
        <option value="">Please select...</option>
        <option value="1">Option 01</option>
        <option value="2">Option 02</option>
        <option value="3">Option 03</option>
        <option value="4">Option 04</option>
      </select>
      <button class="z-button z-button-default" type="button" tabindex="-1">
        <span></span>
        <span class="ml-2">
          <z-icon icon="chevron-down"></z-icon>
        </span>
      </button>
    </div>
  </div>
</form>
```

## Help block

Form text can be created using `.z-form-help` and should be explicitly associated with the form control it relates to using the `aria-describedby` attribute. This will ensure that assistive technologies—such as screen readers—will announce this form text when the user focuses or enters the control.

```html
<div class="space-y" style="--space-y: 2">
  <label for="name" class="z-form-label">Name</label>
  <input
    type="text"
    id="name"
    class="z-input"
    aria-describedby="name-help-block"
    placeholder="Name"
  />
  <div class="z-form-help" id="name-help-block">
    This is your public display name. It can be your real name or a pseudonym.
    You can only change this once every 30 days.
  </div>
</div>
```

## Toggle Switch

Use the following toggle switch component to ask for a yes or no type of input from your users without the use of JavaScript. You can also add the the `.z-toggle-switch-danger` modifier to apply a danger style.

```html
<div class="flex items-center space-x" style="--space-x: 2">
  <input
    class="z-toggle-switch z-toggle-switch-primary"
    id="toggle-switch"
    type="checkbox"
  />
  <label class="z-form-label" for="toggle-switch">Toggle me</label>
</div>

<div class="mt flex items-center space-x" style="--mt: 4; --space-x: 2">
  <input
    class="z-toggle-switch z-toggle-switch-primary"
    checked
    id="toggle-checked"
    type="checkbox"
  />
  <label class="z-form-label" for="toggle-checked">Checked toggle</label>
</div>

<div class="mt flex items-center space-x" style="--mt: 4; --space-x: 2">
  <input
    class="z-toggle-switch z-toggle-switch-primary"
    disabled
    id="toggle-disabled"
    type="checkbox"
  />
  <label class="z-form-label" for="toggle-disabled">Disabled toggle</label>
</div>

<div class="mt flex items-center space-x" style="--mt: 4; --space-x: 2">
  <input
    class="z-toggle-switch z-toggle-switch-primary"
    checked
    disabled
    id="toggle-disabled-checked"
    type="checkbox"
  />
  <label class="z-form-label" for="toggle-disabled-checked"
    >Disabled checked toggle</label
  >
</div>

<div class="mt flex items-center space-x" style="--mt: 4; --space-x: 2">
  <input
    class="z-toggle-switch z-toggle-switch-danger"
    checked
    id="toggle-checked"
    type="checkbox"
  />
  <label class="z-form-label" for="toggle-checked">Danger</label>
</div>
```

## Accessibility

Set the appropriate WAI-ARIA roles, states and properties to the Form component.

- If no `<label>` element is associated with the form control, set the `aria-label` property to the form control to describe its meaning.

```html
<input class="z-input" type="text" aria-label="..." />
```