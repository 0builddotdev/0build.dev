# Alert

## Usage

To apply this component, add the `data-z-alert` attribute to a block element.

```html
<div class="z-alert" data-z-alert></div>
```

```html
<div class="z-alert" data-z-alert>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua.
</div>
```

## Close button

To create a close button and enable its functionality, add the `.z-alert-close` class to a `<button>` or `<a>` element inside the alert box. To apply a close icon, add the `data-z-close` attribute from the [Close component](/docs/latest/kit/close).

```html
<div class="z-alert" data-z-alert>
  <a href class="z-alert-close"></a>
</div>
```

```html
<div class="z-alert" data-z-alert>
  <a href class="z-alert-close" data-z-close></a>
  <div class="z-alert-title">Notice</div>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </p>
</div>
```

## Style modifiers

There are several style modifiers available. Just add one of the following classes to apply a different look.

- `.z-alert-danger`
- `.z-alert-warning`
- `.z-alert-success`
- `.z-alert-info`

```html
<div class="z-alert z-alert-danger" data-z-alert>
  <a href class="z-alert-close" data-z-close></a>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt.
  </p>
</div>

<div class="z-alert z-alert-warning mt" style="--mt: 4" data-z-alert>
  <a href class="z-alert-close" data-z-close></a>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt.
  </p>
</div>

<div class="z-alert z-alert-success mt" style="--mt: 4" data-z-alert>
  <a href class="z-alert-close" data-z-close></a>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt.
  </p>
</div>

<div class="z-alert z-alert-info mt" style="--mt: 4" data-z-alert>
  <a href class="z-alert-close" data-z-close></a>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt.
  </p>
</div>
```

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option      | Value        | Default           | Description                         |
| ----------- | ------------ | ----------------- | ----------------------------------- |
| `animation` | Boolean      | `true`            | Fade out or hide directly.          |
| `duration`  | Number       | `150`             | Animation duration in milliseconds. |
| `sel-close` | CSS selector | `.z-alert-close` | The close trigger element.          |

`animation` is the _Primary_ option and its key may be omitted, if it's the only option in the attribute value.

```html
<span data-z-toggle=".my-class"></span>
```

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```javascript
zUIkit.alert(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name         | Description                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------- |
| `beforehide` | Fires before an item is hidden. Can prevent hiding by calling `preventDefault()` on the event. |
| `hide`       | Fires after an item is hidden.                                                                 |

### Methods

The following methods are available for the component:

#### Close

```javascript
zUIkit.alert(element).close();
```

Closes and removes the Alert.