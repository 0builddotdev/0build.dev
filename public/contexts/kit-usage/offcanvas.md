# Offcanvas

## Usage

Add `data-z-offcanvas` and an `id` to a parent `<div>` element. Toggle it using `<a href="#ID" data-z-toggle>` or any element with `data-z-toggle="target: #ID"`.

| Class                | Description                                                                                                                               |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `.z-offcanvas-bar`   | Add this class to a child `<div>` element.                                                                                                |
| `.z-offcanvas-close` | Add this class and the `data-z-close` attribute to an `<a>` or `<button>` element to create a close button and enable its functionality. |

```html
<button data-z-toggle="target: #my-id" type="button">Open</button>
<a href="#my-id" data-z-toggle>Open</a>

<div class="z-offcanvas" id="my-id" data-z-offcanvas>
  <div class="z-offcanvas-bar">
    <button class="z-offcanvas-close absolute top-4 right-4" type="button" data-z-close></button>
    <h3 class="z-h3">Title</h3>
    <p>Content</p>
  </div>
</div>
```

### Overlay

Add `overlay: true` to `data-z-offcanvas` to blank out the page with an overlay.

```html
<div id="my-id" data-z-offcanvas="overlay: true">...</div>
```

## Flip modifier

Add `flip: true` to `data-z-offcanvas` so the offcanvas slides in from the right.

```html
<div id="my-id" data-z-offcanvas="flip: true">...</div>
```

## Animation modes

| Parameter      | Description                                                                  |
| -------------- | ---------------------------------------------------------------------------- |
| `mode: slide`  | The offcanvas slides out and overlays the content. This is the default mode. |
| `mode: push`   | The offcanvas slides out and pushes the site.                                |
| `mode: reveal` | The offcanvas slides out and reveals its content while pushing the site.     |
| `mode: none`   | The offcanvas appears and overlays the content without an animation.         |

```html
<div id="my-id" data-z-offcanvas="mode: push">...</div>
```

## Nav in Offcanvas

Place a [Nav](/docs/2.1/nav) inside `.z-offcanvas-bar` to create a mobile navigation.

```html
<div id="my-id" data-z-offcanvas>
  <div class="z-offcanvas-bar">
    <ul class="z-nav z-nav-default" data-z-nav>
      <li class="z-active"><a href="#">Active</a></li>
      <li class="z-parent">
        <a href="#">Parent <span data-z-nav-parent-icon></span></a>
        <ul class="z-nav-sub">
          <li><a href="#">Sub item</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
```

## Component options

Separate multiple options with a semicolon. [Learn more](/docs/2.1/javascript#component-configuration)

| Option      | Value   | Default | Description                                                                                                                                              |
| ----------- | ------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mode`      | String  | `slide` | Offcanvas animation mode (`slide`, `reveal`, `push` or `none`).                                                                                          |
| `flip`      | Boolean | `false` | Flip offcanvas to the right side.                                                                                                                        |
| `overlay`   | Boolean | `false` | Display the offcanvas together with an overlay.                                                                                                          |
| `esc-close` | Boolean | `true`  | Close the offcanvas when the _Esc_ key is pressed.                                                                                                       |
| `bg-close`  | Boolean | `true`  | Close the offcanvas when the background is clicked.                                                                                                      |
| `container` | String  | `false` | Define a target container via a selector to specify where the offcanvas should be appended in the DOM. Setting it to `false` will prevent this behavior. |

`mode` is the _Primary_ option and its key may be omitted if it's the only option in the attribute value.

```html
<span z-offcanvas="push"></span>
```

## JavaScript

Learn more about [JavaScript components](/docs/2.1/javascript#programmatic-use).

### Initialization

```javascript
zUIkit.offcanvas(element, options);
```

### Events

| Name         | Description                                          |
| ------------ | ---------------------------------------------------- |
| `beforeshow` | Fires before an item is shown.                       |
| `show`       | Fires after an item is shown.                        |
| `shown`      | Fires after the item's show animation has completed. |
| `beforehide` | Fires before an item is hidden.                      |
| `hide`       | Fires after an item's hide animation has started.    |
| `hidden`     | Fires after an item is hidden.                       |

### Methods

#### Show

```javascript
zUIkit.offcanvas(element).show();
```

Shows the Offcanvas.

#### Hide

```javascript
zUIkit.offcanvas(element).hide();
```

Hides the Offcanvas.

## Accessibility

Adheres to the [Dialog (Modal) WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/):

- The _offcanvas bar_ has the `dialog` role, and if the offcanvas has an overlay, the `aria-modal` property.
- The _close icon_ has the `aria-label` property, and if an `<a>` element is used, the `button` role.

### Keyboard interaction

- <kbd>esc</kbd>: Closes the offcanvas (disabled if `bg-close: false` is set).
