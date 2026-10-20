# Scroll

## Usage

Add the `data-z-scroll` attribute to any page-internal link containing a URL fragment for smooth scrolling. Sticky element heights (e.g., sticky navbar) are automatically added as an offset so the target is not covered.

```html
<a href="#my-id" data-z-scroll></a>
```

## Offset

Add the `offset` option to define a custom scroll offset. If a sticky element offset already exists, `offset` is added to it.

```html
<a href="#my-id" data-z-scroll="offset: 100"></a>
```

## Callback after scroll

Listen to the `scrolled` event on the trigger link to run a callback when scrolling completes.

```html
<a id="js-scroll-trigger" href="#my-id" data-z-scroll></a>
```

```js
zUIkit.util.on("#js-scroll-trigger", "scrolled", function () {
  alert("Done.");
});
```

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option   | Value  | Default | Description                 |
| -------- | ------ | ------- | --------------------------- |
| `offset` | Number | `0`     | Offset added to scroll top. |

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```js
zUIkit.scroll(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name           | Description                                                                                   |
| -------------- | --------------------------------------------------------------------------------------------- |
| `beforescroll` | Fires before scroll begins. Can prevent scrolling by calling `preventDefault()` on the event. |
| `scrolled`     | Fires after scrolling is finished.                                                            |

### Methods

The following methods are available for the component:

#### ScrollTo

```js
zUIkit.scroll(element).scrollTo(el);
```

Scroll to the given element.

| Name | Type           | Default   | Description               |
| ---- | -------------- | --------- | ------------------------- |
| `el` | Node, Selector | undefined | The element to scroll to. |
