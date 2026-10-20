# Input Tag

## Usage

Web component for creating and managing a list of tags or keywords.

**Note:** Always sanitize and validate user input on the server side.

```html
<z-input-tag placeholder="Add a fruit"></z-input-tag>
```

## Tag states

Customize tag styling via the `cls` attribute (`tag: z-tag z-tag-*`). Available tag state classes: `.z-tag-primary`, `.z-tag-secondary`, `.z-tag-danger`, `.z-tag-success`, `.z-tag-warning`, `.z-tag-info`, `.z-tag-muted`.

```html
<z-input-tag cls="tag: z-tag z-tag-primary" placeholder="Add a tag" value="Featured,Verified"></z-input-tag>
<z-input-tag cls="tag: z-tag z-tag-danger" placeholder="Add a tag" value="Deprecated,Error"></z-input-tag>
```

## Capturing values

Add the `name` attribute to automatically generate hidden input fields for form submission.

```html
<z-input-tag name="tags"></z-input-tag>
```

## Prepopulating values

Pass a comma-separated list of tags to the `value` attribute.

```html
<z-input-tag placeholder="Add a fruit" value="Apple,Mango,Lemon"></z-input-tag>
```

## Allow duplicates

Duplicate tags are prevented by default. Add `allow-duplicates` to permit them.

```html
<z-input-tag allow-duplicates placeholder="Add a fruit"></z-input-tag>
```

## Maximum tags

Limit the maximum number of tags with `max-tags` (`0` = unlimited, default).

```html
<z-input-tag max-tags="3" placeholder="Add a fruit"></z-input-tag>
```

## Custom delimiters

Tags are created on Enter or comma (`,`) by default. Customize delimiter characters with `delimiters`.

```html
<z-input-tag delimiters=",; "></z-input-tag>
```

## Internationalization

Priority order (highest to lowest):
- **Component-level i18n** (via `i18n` attribute or script tag)
- **Global component-specific namespace** (via `<script id="z-i18n">`)
- **Default values**

### Using the i18n attribute

```html
<z-input-tag
  i18n='{"placeholder": "Añadir etiqueta...", "remove-label": "Eliminar etiqueta", "duplicate-error": "La etiqueta ya existe"}'
></z-input-tag>
```

### Using a configuration script

```html
<z-input-tag>
  <script type="application/json" data-fn="config">
    {
      "i18n": {
        "placeholder": "Ajouter un tag...",
        "remove-label": "Supprimer le tag",
        "edit-label": "Modifier le tag",
        "duplicate-error": "Le tag existe déjà"
      }
    }
  </script>
</z-input-tag>
```

### Available i18n options

| Key                | Default                                   | Description                                                       |
| ------------------ | ----------------------------------------- | ----------------------------------------------------------------- |
| `placeholder`      | Add a tag...                              | Placeholder text for input field                                  |
| `remove-label`     | Remove tag                                | ARIA label for remove button                                      |
| `edit-label`       | Edit tag                                  | ARIA label for tag text (click to edit)                           |
| `tag-list-label`   | Tags                                      | ARIA label for tag list container                                 |
| `min-length-error` | Tag must be at least {'{min}'} characters | Error message for minimum length (supports {'{min}'} placeholder) |
| `max-length-error` | Tag cannot exceed {'{max}'} characters    | Error message for maximum length (supports {'{max}'} placeholder) |
| `duplicate-error`  | Tag already exists                        | Error message for duplicate tags                                  |
| `max-tags-error`   | Maximum {'{max}'} tags allowed            | Error message for max tags limit (supports {'{max}'} placeholder) |
| `input-label`      | Tag input                                 | ARIA label for input field                                        |

## Custom classes

Style internal elements via the `cls` attribute.

### Using simple string format

Applies to `host-inner`:

```html
<z-input-tag cls="my-tag-input"></z-input-tag>
```

### Using JSON object format

```html
<z-input-tag
  cls='{
    "host-inner": "tag-container",
    "wrapper": "z-input-tag custom-wrapper",
    "tag-list": "tags-list",
    "tag": "z-tag z-tag-primary",
    "tag-text": "tag-label",
    "tag-remove": "remove-btn",
    "input": "z-input",
    "error": "error-message"
  }'
></z-input-tag>
```

### Available cls targets

| Target       | Description                                           |
| ------------ | ----------------------------------------------------- |
| `host-inner` | The main container wrapper                            |
| `wrapper`    | The wrapper containing tags and input field           |
| `tag-list`   | The container for all tag elements                    |
| `tag`        | Individual tag elements                               |
| `tag-text`   | Text span inside tag (clickable for editing)          |
| `tag-remove` | Remove button inside tag                              |
| `input`      | The text input field                                  |
| `error`      | Error message container (shown on validation failure) |

## Custom inline styles

Apply custom inline styles via `stl` using the same targets as `cls` (see [Available cls targets](#available-cls-targets)).

### Example

```html
<z-input-tag
  stl='{
    "wrapper": "padding: 0.5rem; border: 1px solid #ddd;",
    "tag": "margin: 0.25rem; padding: 0.25rem 0.5rem;",
    "input": "min-width: 120px; flex-grow: 1;"
  }'
></z-input-tag>
```

## Behavior

### Paste behavior

- Pasting text containing delimiters automatically splits and adds multiple tags.

### Mouse Behavior

- Clicking a tag name removes it from the list and places its value into the input field for editing.
- Clicking the close icon removes the tag completely.

### Keyboard Behavior

- Pressing Backspace in an empty input removes the last tag and places its value into the input field.
- Pressing Enter or a delimiter key adds the current input value as a tag.

## Slugifying tags

Add `slugify` to automatically convert tags into URL-friendly slugs. Customize behavior with `slugify-options` (JSON object or `key: value;` format).

```html
<z-input-tag placeholder="Add a tag" slugify value="fan-fiction"></z-input-tag>
```

### Available Options

| Option        | Description                                                                                   | Default |
| ------------- | --------------------------------------------------------------------------------------------- | ------- |
| `replacement` | The replacement string used to replace spaces and other characters                            | -       |
| `remove`      | A valid regular expression pattern to remove from the tag                                     |         |
| `lower`       | A boolean indicating whether to convert the tag to lowercase                                  | true    |
| `strict`      | A boolean indicating whether to strip special characters except for the replacement character | true    |
| `locale`      | The language code of the locale to use for slugification                                      |         |
| `trim`        | A boolean indicating whether to trim leading and trailing replacement characters              | true    |

## Disable input

Add `disabled` to disable the input field and prevent tag editing or removal.

```html
<z-input-tag placeholder="Add a tag" slugify value="Verified,Exclusive" state="primary" disabled></z-input-tag>
```

## Error state

Add `.z-form-danger` to the `cls` attribute to indicate an error state.

```html
<z-input-tag cls="z-input-tag z-form-danger;" placeholder="Add a tag"></z-input-tag>
```

## Preventing layout shift

Set a predefined `min-height` on the parent element (since the component may grow vertically with more tags).

```html
<div class="[min-h]" style="--min-h: 2.875rem">
  <z-input-tag></z-input-tag>
</div>
```

## Attributes

| Name                     | Type    | Default | Description                                                                       |
| ------------------------ | ------- | ------- | --------------------------------------------------------------------------------- |
| `maxlength`              | Number  | 20      | Maximum character length allowed for each tag.                                    |
| `minlength`              | Number  | 1       | Minimum character length required for each tag.                                   |
| `slugify`                | Boolean | false   | Enables slug transformation for tags (URL-friendly format).                       |
| `slugify-options`        | String  |         | JSON object or key\:value format for customizing slugify behavior.                |
| `delimiters`             | String  | ,       | Characters that trigger tag creation (e.g., ",;" for comma or semicolon).         |
| `allow-duplicates`       | Boolean | false   | Allows duplicate tags when enabled.                                               |
| `max-tags`               | Number  | 0       | Maximum number of tags allowed (0 = unlimited).                                   |
| `name`                   | String  |         | Name attribute for hidden input fields (automatically appends []).                |
| `disabled`               | Boolean | false   | Disables input field and prevents tag editing/removal.                            |
| `placeholder`            | String  |         | Placeholder text for input field (overrides i18n default).                        |
| `value`                  | String  |         | Comma-separated list of tags to prepopulate.                                      |
| `cls`                    | String  |         | Custom CSS classes. Can be simple string or JSON object for targeting elements.   |
| `stl`                    | String  |         | Custom inline styles. Can be simple string or JSON object for targeting elements. |
| `i18n`                   | String  |         | Internationalization strings as JSON object or via configuration script.          |
| `force-prevent-rerender` | Boolean | false   | Prevents component rerendering (useful for HTMX or SPA scenarios).                |

## Events

| Name                | Description                                                                           |
| ------------------- | ------------------------------------------------------------------------------------- |
| `z-input-tag:input` | Fired after the value has changed, providing an opportunity to respond to user input. |
