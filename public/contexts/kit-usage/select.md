# Select

## Usage

`<z-select>` is a custom web component that enhances the native `<select>` element, using `<select data-fn="data-source" hidden>` as its options reference.

```html
<div class="[h]" style="--h: calc(var(--z-global-font-size) * 2.5)">
  <z-select
    cls="button: z-input-fake justify-between w-full; dropdown: z-dropdown w-full"
    stl="dropdown: z-index\: 1020"
  >
    <select data-fn="data-source" hidden>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>
  </z-select>
</div>
```

## Capturing values

Add a `name` attribute to `<z-select>` to automatically generate a hidden input field with the selected value for form submission.

```html
<z-select
  cls="button: z-input-fake justify-between w-full; dropdown: z-dropdown w-full"
  stl="dropdown: z-index\: 1020"
  name="option"
>
  <select data-fn="data-source" hidden>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </select>
</z-select>
```

**Note:** If an `<option>` has no `value` attribute, its text content is used as the value.

## Size modifiers

Add one of the following classes to the `button` target in `cls` to adjust the fake input size.

| Class            | Description               |
| ---------------- | ------------------------- |
| `.z-form-xsmall` | Applies extra small size. |
| `.z-form-small`  | Applies small size.       |
| `.z-form-medium` | Applies medium size.      |
| `.z-form-large`  | Applies large size.       |

```html
<z-select
  cls="button: z-input-fake z-form-small justify-between w-full; dropdown: z-dropdown w-full"
  stl="dropdown: z-index\: 1020"
>
  <select data-fn="data-source" hidden>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </select>
</z-select>
```

## Adding header

Use `<optgroup label="...">` inside the data-source `<select>` to automatically render dropdown group headers.

```html
<z-select
  cls="button: z-input-fake justify-between w-full; dropdown: z-dropdown w-full"
>
  <select data-fn="data-source" hidden>
    <optgroup label="Letter A">
      <option value="apple">Apple</option>
      <option value="apricot">Apricot</option>
    </optgroup>
    <optgroup label="Letter B">
      <option value="banana">Banana</option>
      <option value="blueberry">Blueberry</option>
    </optgroup>
  </select>
</z-select>
```

## Selecting multiple values

Add the `multiple` attribute to `<z-select>` to allow selecting multiple options.

```html
<z-select
  cls="button: z-input-fake justify-between w-full; dropdown: z-dropdown w-full"
  stl="dropdown: z-index\: 1020"
  multiple
>
  <select data-fn="data-source" hidden>
    <option value="python">Python</option>
    <option value="javascript">JavaScript</option>
  </select>
</z-select>
```

**Note:** Using `multiple` automatically appends `[]` to the generated input `name` so the server receives an array regardless of how many options are selected.

## Prepopulating values

Prepopulate values by adding the `selected` attribute to one or more `<option>` tags.

```html
<z-select
  cls="button: z-input-fake justify-between w-full; dropdown: z-dropdown w-full"
  stl="dropdown: z-index\: 1020"
  multiple
>
  <select data-fn="data-source" hidden>
    <option selected>Mercedes-Benz</option>
    <option>Audi</option>
    <option selected>Porsche</option>
  </select>
</z-select>
```

In multiple mode:

- Clicking an option toggles selection (doesn't close dropdown)
- Selected options show checkmarks
- Button text shows "{'{n}'} options selected" when 2+ options are selected
- Hidden inputs are created with `name[]` for form submission
- Options have `aria-multiselectable="true"`

### Manually setting value

Alternatively, set the `value` attribute on `<z-select>` (accepts a comma-separated list for `multiple`).

```html
<z-select
  cls="button: z-input-fake justify-between w-full; dropdown: z-dropdown w-full"
  stl="dropdown: z-index\: 1020"
  multiple
  value="Mercedes-Benz,Porsche"
>
  <select data-fn="data-source" hidden>
    <option>Mercedes-Benz</option>
    <option>Audi</option>
    <option>Porsche</option>
  </select>
</z-select>
```

**Note:** When both `value` and `selected` are used, the `value` attribute takes precedence.

## Disabling options

Add the `disabled` attribute to `<option>` or `<optgroup>` tags to prevent selection of specific options or groups.

```html
<z-select
  cls="button: z-input-fake justify-between w-full; dropdown: z-dropdown w-full"
  stl="dropdown: z-index\: 1020"
  multiple
>
  <select data-fn="data-source" hidden>
    <optgroup label="Group A">
      <option value="apple">Apple</option>
      <option value="apricot" disabled>Apricot</option>
    </optgroup>
    <optgroup label="Group B" disabled>
      <option value="banana">Banana</option>
    </optgroup>
  </select>
</z-select>
```

## Reactivity

By default, `<z-select>` is not reactive to DOM mutations on `<select data-fn="data-source" hidden>`. Add `data-reactive` to enable `MutationObserver` monitoring (useful with HTMX or dynamic option updates).

```html
<z-select>
  <select data-fn="data-source" data-reactive hidden>
    <!-- -->
  </select>
</z-select>
```

## Searchable

Add the `searchable` attribute to render a search input inside the dropdown menu.

```html
<z-select
  cls="button: z-input-fake justify-between w-full; dropdown: z-dropdown w-full"
  stl="dropdown: z-index\: 1020"
  placeholder="Select a country"
  searchable
>
  <select data-fn="data-source" hidden>
    <option value="Argentina">Argentina</option>
    <option value="Australia">Australia</option>
    <option value="Austria">Austria</option>
  </select>
</z-select>
```

Search features:

- Case-insensitive filtering
- Real-time results as you type
- Searches through option keywords (automatically generated from text)
- Emits `z-select:search` event on search term change
- Supports keyboard navigation through filtered results

### Custom keywords

Add a comma-separated `data-keywords` attribute to `<option>` tags to match additional search terms.

```html
<z-select
  cls="button: z-input-fake justify-between w-full; dropdown: z-dropdown w-full"
  stl="dropdown: z-index\: 1020"
  name="option"
  searchable
>
  <select data-fn="data-source" hidden>
    <option data-keywords="apple, mango, lemon" value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </select>
</z-select>
```

## Disable input

Add the `disabled` attribute to `<z-select>` to disable the entire component.

```html
<z-select
  cls="button: z-input-fake justify-between w-full; dropdown: z-dropdown w-full"
  stl="dropdown: z-index\: 1020"
  disabled
>
  <select data-fn="data-source" hidden>
    <option value="apple">Apple</option>
    <option value="avocado" selected>Avocado</option>
  </select>
</z-select>
```

## Icon

Customize icons using `<template data-fn="icons">` with keyed `<svg data-key="...">` elements:

```html
<z-select
  cls="button: z-input-fake justify-between w-full; dropdown: z-dropdown w-full"
  stl="dropdown: z-index\: 1020"
>
  <template data-fn="icons">
    <svg data-key="chevrons-up-down" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
  </template>
  <select data-fn="data-source" hidden>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </select>
</z-select>
```

### Options icon

Add `data-icon="<key>"` to `<option>` tags and provide the corresponding `<svg data-key="<key>">` inside `<template data-fn="icons">`.

```html
<z-select
  cls="button: z-input-fake justify-between w-full; dropdown: z-dropdown w-full"
  stl="dropdown: z-index\: 1020"
>
  <template data-fn="icons">
    <svg data-key="chevrons-up-down" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
    <svg data-key="circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /></svg>
  </template>
  <select data-fn="data-source" hidden>
    <option data-icon="circle" value="option1">Option 1</option>
    <option data-icon="circle" value="option2">Option 2</option>
  </select>
</z-select>
```

## Internationalization

The Select component supports internationalization with the following priority order (highest to lowest):

- **Component-level i18n** (via `i18n` attribute or script tag)
- **Global component-specific namespace** (via `<script id="z-i18n">`)
- **Default values**

### Using the i18n attribute

```html
<z-select
  cls="button: z-input-fake justify-between w-full; dropdown: z-dropdown w-full"
  stl="dropdown: z-index\: 1020"
  searchable
  i18n="search-placeholder: Buscar; selection-count: {n} opciones seleccionadas; insert: Insertar; list-label: Opciones; button-label: Seleccionar una opción"
>
  <select data-fn="data-source" hidden>
    <option value="apple">Manzana</option>
    <option value="banana">Plátano</option>
  </select>
</z-select>
```

### Using a configuration script

```html
<z-select
  cls="button: z-input-fake justify-between w-full; dropdown: z-dropdown w-full"
  stl="dropdown: z-index\: 1020"
  searchable
  multiple
>
  <script type="application/json" data-fn="config" hidden>
    {
      "i18n": {
        "search-placeholder": "Rechercher",
        "selection-count": "{n} options sélectionnées",
        "insert": "Insérer",
        "list-label": "Options",
        "button-label": "Sélectionner une option"
      }
    }
  </script>
  <select data-fn="data-source" hidden>
    <option value="apple">Pomme</option>
    <option value="banana">Banane</option>
  </select>
</z-select>
```

### Using global i18n

Place in `<head>` or before any select components:

```html
<script id="z-i18n" type="application/json">
{
  "z-select": {
    "search-placeholder": "Suchen",
    "selection-count": "{n} Optionen ausgewählt",
    "insert": "Einfügen",
    "list-label": "Optionen",
    "button-label": "Eine Option auswählen"
  }
}
</script>
```

### Available i18n options

| Key                  | Default                  | Description                                                                  |
| -------------------- | ------------------------ | ---------------------------------------------------------------------------- |
| `search-placeholder` | Search                   | Placeholder text for search input field                                      |
| `selection-count`    | {'{n}'} options selected | Text shown when multiple options are selected (supports {'{n}'} placeholder) |
| `insert`             | Insert                   | Button text for inserting custom options                                     |
| `list-label`         | Options                  | ARIA label for the listbox                                                   |
| `button-label`       | Select an option         | ARIA label and default text for the select button                            |

## Custom classes

Apply custom CSS classes to internal elements via the `cls` attribute or configuration script.

### Using simple string format

Apply a class to the default element (`button`):

```html
<z-select cls="my-custom-select-button">
  <select data-fn="data-source" hidden>
    <option value="apple">Apple</option>
  </select>
</z-select>
```

### Using JSON object format

```html
<z-select
  cls='{
    "host-inner": "select-wrapper",
    "button": "z-input z-form-large",
    "button-text": "select-text",
    "icon": "select-icon",
    "dropdown": "select-dropdown",
    "list": "select-list",
    "item": "select-item",
    "item-link": "select-link",
    "item-text": "item-label",
    "item-check": "check-icon",
    "search": "search-wrapper",
    "search-input": "z-input z-form-small"
  }'
>
  <select data-fn="data-source" hidden>
    <option value="apple">Apple</option>
  </select>
</z-select>
```

### Using configuration script

```html
<z-select>
  <script type="application/json" data-fn="config">
    {
      "cls": {
        "button": "z-input",
        "dropdown": "z-select-dropdown",
        "item-link": "z-drop-close"
      }
    }
  </script>
  <select data-fn="data-source" hidden>
    <option value="apple">Apple</option>
  </select>
</z-select>
```

### Available cls targets

| Target          | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| `host-inner`    | The main wrapper container for the entire component             |
| `button`        | The clickable button that opens the dropdown                    |
| `button-text`   | The text span inside the button showing selected option(s)      |
| `icon`          | The icon element inside the button (when icon attribute is set) |
| `dropdown`      | The dropdown container holding the list and search              |
| `list`          | The listbox (ul) containing all options                         |
| `item`          | Individual list item (li) wrapper                               |
| `item-active`   | The active list item (li)                                       |
| `item-disabled` | Class for disabled list item (li)                               |
| `item-header`   | Group header for grouped options                                |
| `item-link`     | The clickable button/link inside each item                      |
| `item-wrapper`  | Wrapper for item content (icon + text)                          |
| `item-icon`     | Icon element for options with data-icon                         |
| `item-text`     | Text label for the option                                       |
| `item-check`    | Checkmark indicator for selected options                        |
| `item-subtitle` | Description/subtitle text for options with data-description     |
| `search`        | Search input wrapper (when searchable is enabled)               |
| `search-input`  | The actual search input field                                   |
| `search-icon`   | Icon displayed in search input                                  |
| `divider`       | Class for the divider element                                   |

## Custom inline styles

Apply custom inline styles to internal elements via the `stl` attribute or configuration script.

### Using simple string format

Apply styles to the default element (`button`):

```html
<z-select stl="width\: 300px; min-height\: 44px;">
  <select data-fn="data-source">
    <option value="apple">Apple</option>
  </select>
</z-select>
```

### Using JSON object format

```html
<z-select
  stl='{
    "container": "position: relative;",
    "button": "background: #f8f9fa; border: 1px solid #dee2e6; padding: 0.75rem 1rem;",
    "button-text": "color: #495057; font-weight: 500;",
    "dropdown": "min-width: 320px; max-height: 400px; overflow-y: auto;",
    "item-link": "padding: 0.5rem 1rem; transition: background 0.2s;"
  }'
>
  <select data-fn="data-source">
    <option value="apple">Apple</option>
  </select>
</z-select>
```

### Using configuration script

```html
<z-select>
  <script type="application/json" data-fn="config">
    {
      "stl": {
        "button": "min-width: 250px;",
        "dropdown": "box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
      }
    }
  </script>
  <select data-fn="data-source">
    <option value="apple">Apple</option>
  </select>
</z-select>
```

### Available stl targets

The `stl` attribute supports the same targets as the `cls` attribute. See [Available cls targets](#available-cls-targets).

## Error state

Add `.z-form-danger` to the `button` target in `cls` to indicate a form error state.

```html
<div class="space-y" style="--space-y: 2">
  <label class="z-form-label color display-block" style="--color: var(--z-danger-f)">
    Select an option
  </label>
  <div class="z-form-controls [h]" style="--h: calc(var(--z-global-font-size) * 2.5)">
    <z-select
      cls="button: z-input-fake z-form-danger justify-between w-full; dropdown: z-dropdown w-full"
      stl="dropdown: z-index\: 1020"
    >
      <select data-fn="data-source" hidden>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
    </z-select>
  </div>
  <p class="z-form-help color" style="--color: var(--z-danger-f)">
    This field is required.
  </p>
</div>
```

## Preventing layout shift

Set a predefined height on the parent container to prevent layout shift before the Web Component upgrades.

```html
<div class="[h]" style="--h: calc(var(--z-global-font-size) * 2.5)">
  <z-select>
    <!-- ... -->
  </z-select>
</div>
```

## Attributes

The following attributes are available for this component:

| Name                     | Type    | Default | Description                                                                      |
| ------------------------ | ------- | ------- | -------------------------------------------------------------------------------- |
| `searchable`             | Boolean | false   | Enables search functionality to filter options                                   |
| `insertable`             | Boolean | false   | Allows inserting custom options (auto-enables searchable)                        |
| `send-headers`           | String  |         | JSON object of HTTP headers for server validation requests                       |
| `send-url`               | String  |         | Server endpoint URL for validating inserted options                              |
| `send-method`            | String  | POST    | HTTP method for server requests                                                  |
| `multiple`               | Boolean | false   | Enables multi-select mode                                                        |
| `icon`                   | String  |         | Custom icon/text displayed in the button                                         |
| `name`                   | String  |         | Name attribute for hidden input(s), enabling form submission                     |
| `disabled`               | Boolean | false   | Disables the entire component, preventing user interaction                       |
| `required`               | Boolean | false   | Marks the select as required for form validation                                 |
| `placeholder`            | String  |         | Custom placeholder text when no option is selected                               |
| `value`                  | String  |         | Pre-selected value(s). Use comma-separated for multiple selections               |
| `cls`                    | String  |         | Custom CSS classes. Can be simple string or JSON object for targeting elements   |
| `stl`                    | String  |         | Custom inline styles. Can be simple string or JSON object for targeting elements |
| `i18n`                   | String  |         | Internationalization strings as JSON object or via configuration script          |
| `force-prevent-rerender` | Boolean | false   | Prevents component rerendering (useful for HTMX or SPA scenarios)                |

## Events

The Select component triggers the following events:

| Name              | Description                                                                                               |
| ----------------- | --------------------------------------------------------------------------------------------------------- |
| `z-select:input`  | Fired when the selected value(s) change. Event detail contains `{value: string \| string[]}`.             |
| `z-select:search` | Fired when the search term changes (when searchable is enabled). Event detail contains `{value: string}`. |
