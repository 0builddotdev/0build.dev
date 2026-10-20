# Alert

## Usage

Add the `.z-alert` class and `data-z-alert` attribute to a block element.

```html
<div class="z-alert" data-z-alert>Content</div>
```

## Close button

Add `.z-alert-close` to a `<button>` or `<a>` element inside the alert box, and `data-z-close` to render a close icon. Use `.z-alert-title` for an optional heading.

```html
<div class="z-alert" data-z-alert>
  <a href class="z-alert-close" data-z-close></a>
  <div class="z-alert-title">Notice</div>
  <p>Content</p>
</div>
```

## Style modifiers

Add one of the following classes to apply a semantic style:

- `.z-alert-danger`
- `.z-alert-warning`
- `.z-alert-success`
- `.z-alert-info`

```html
<div class="z-alert z-alert-danger" data-z-alert>
  <a href class="z-alert-close" data-z-close></a>
  <p>Content</p>
</div>
```

## Component options

Apply options to `data-z-alert`, separated by a semicolon.

| Option      | Value        | Default          | Description                         |
| ----------- | ------------ | ---------------- | ----------------------------------- |
| `animation` | Boolean      | `true`           | Fade out or hide directly.          |
| `duration`  | Number       | `150`            | Animation duration in milliseconds. |
| `sel-close` | CSS selector | `.z-alert-close` | The close trigger element.          |

`animation` is the _Primary_ option and its key may be omitted if it's the only option in the attribute value.

```html
<span data-z-toggle=".my-class"></span>
```

## JavaScript

### Initialization

```javascript
zUIkit.alert(element, options);
```

### Events

| Name         | Description                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------- |
| `beforehide` | Fires before an item is hidden. Can prevent hiding by calling `preventDefault()` on the event. |
| `hide`       | Fires after an item is hidden.                                                                 |

### Methods

#### Close

```javascript
zUIkit.alert(element).close();
```

Closes and removes the Alert.
