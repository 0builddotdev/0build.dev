# Scrollspy

## Usage

The Scrollspy component listens to page scrolling and triggers events and classes (typically from the [Animation component](/docs/latest/kit/animation)) when elements enter the viewport. Add the `data-z-scrollspy` attribute to an element.

```html
<div data-z-scrollspy="cls: z-animation-fade; repeat: true"></div>
```

## Groups

Group scrollspy elements by adding `data-z-scrollspy="target: SELECTOR"` to a container element. When `delay` is set, it is applied cumulatively to items scrolling into view.

```html
<div data-z-scrollspy="target: > div; cls: z-animation-fade; delay: 500">
  <div></div>
  <div></div>
</div>
```

## Set `cls` option per target

Add `data-z-scrollspy-class="CLASS"` to individual target elements to override the `cls` option set on the container.

```html
<div data-z-scrollspy="target: > div; cls: z-animation-fade; delay: 500">
  <div data-z-scrollspy-class="z-animation-slide-top"></div>
  <div data-z-scrollspy-class="z-animation-slide-bottom"></div>
</div>
```

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option   | Value                 | Default | Description                                                                                                                                |
| -------- | --------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `cls`    | String                |         | Class to toggle when the element enters/leaves viewport.                                                                                   |
| `target` | Boolean, CSS selector | `false` | Target to apply the scrollspy to. Defaults to the element itself.                                                                          |
| `hidden` | Boolean               | `true`  | Hides the element while out of view.                                                                                                       |
| `margin` | String                | `-1px`  | The margin is added to the viewport's bounding box, before computing an intersection with the element. The value must be in px or % units. |
| `repeat` | Boolean               | `false` | Applies the `cls` class every time the element is in view.                                                                                 |
| `delay`  | Number                | `0`     | Delay time in ms.                                                                                                                          |

`cls` is the _Primary_ option and its key may be omitted if it's the only option in the attribute value.

```html
<span data-z-scrollspy="my-class"></span>
```

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```js
zUIkit.scrollspy(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name      | Description                                     |
| --------- | ----------------------------------------------- |
| `inview`  | Fires after an item moves into the viewport.    |
| `outview` | Fires after an item moves into out of viewport. |

## Scrollspy nav

Add `data-z-scrollspy-nav` to any navigation to automatically update the active menu item depending on scroll position. Each menu item must link to the ID of its corresponding section.

```html
<ul
  class="z-nav z-nav-default"
  data-z-scrollspy-nav="closest: li; scroll: true"
>
  <li><a href="#section-1"></a></li>
  <li><a href="#section-2"></a></li>
</ul>
```

### Scrollspy nav options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option    | Value                 | Default     | Description                                                        |
| --------- | --------------------- | ----------- | ------------------------------------------------------------------ |
| `cls`     | String                | `z-active`  | Class to add to the active links.                                  |
| `closest` | Boolean, CSS selector | `false`     | Target to apply the class to. Defaults to the element itself.      |
| `scroll`  | Boolean               | `false`     | Adds the [Scroll component](/docs/latest/kit/scroll) to its links. |
| `target`  | CSS selector          | `a[href]`   | Targets the anchor elements that should be used.                   |
| `offset`  | Number                | `0`         | Offset added to scroll top.                                        |

### Scrollspy nav JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Scrollspy nav initialization

```js
zUIkit.scrollspyNav(element, options);
```

### Scrollspy nav events

The following events will be triggered on elements with this component attached:

| Name     | Description                         |
| -------- | ----------------------------------- |
| `active` | Fires after an item becomes active. |
