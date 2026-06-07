# Scrollspy

## Usage

The Scrollspy component listens to page scrolling and triggers events based on the scroll position. For example, if you scroll down a page, and an element appears in the viewport for the first time, you can trigger a smooth animation to fade in the element. Just add the `data-z-scrollspy` attribute which takes the following options.

Typically, classes from the [Animation component](/docs/latest/kit/animation) are used together with the Scrollspy component.

```html
<div data-z-scrollspy="cls:z-animation-fade"></div>
```

```html
<div
  class="display-grid grid-cols-1 gap sm:grid-cols"
  style="--grid-cols: 1; --gap: 4; --sm-grid-cols: 2"
>
  <div>
    <div
      class="z-card z-card-body"
      data-z-scrollspy="cls: z-animation-slide-left; repeat: true"
    >
      <h3 class="z-card-title">Left</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div>
    <div
      class="z-card z-card-body"
      data-z-scrollspy="cls: z-animation-slide-right; repeat: true"
    >
      <h3 class="z-card-title">Right</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
</div>
```

This example uses the `repeat: true` option. Scroll up and down to see the triggered animations. The layout is made with the [Card component](/docs/latest/kit/card).

## Groups

You can also group scrollspy elements, so you won't have to apply the attribute to each of them. Just add the `data-z-scrollspy="target: SELECTOR"` attribute to a container element, targeting the selector of the items you want to animate inside the container. When using a delay, it will be applied cumulatively to the items that scroll into view.

```html
<div data-z-scrollspy="target: > div; cls: z-animation-fade; delay: 500">
  <div></div>
  <div></div>
</div>
```

```html
<div
  class="display-grid grid-cols gap sm:grid-cols"
  style="--grid-cols: 1; --gap: 4; --sm-grid-cols: 2"
  data-z-scrollspy="cls: z-animation-fade; target: .z-card; delay: 500; repeat: true"
>
  <div>
    <div class="z-card-default z-card z-card-body">
      <h3 class="z-card-title">Fade</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div>
    <div class="z-card-default z-card z-card-body">
      <h3 class="z-card-title">Fade</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div>
    <div class="z-card-default z-card z-card-body">
      <h3 class="z-card-title">Fade</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div>
    <div class="z-card-default z-card z-card-body">
      <h3 class="z-card-title">Fade</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div>
    <div class="z-card-default z-card z-card-body">
      <h3 class="z-card-title">Fade</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div>
    <div class="z-card-default z-card z-card-body">
      <h3 class="z-card-title">Fade</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
</div>
```

## Set `cls` option per target

You can also give each target a separate `cls` option. Just add the `data-z-scrollspy-class="CLASS"` attribute to a target element. It will override the `cls` option set on the component.

```html
<div data-z-scrollspy="target: > div; cls: z-animation-fade; delay: 500">
  <div data-z-scrollspy-class="z-animation-slide-top"></div>
  <div data-z-scrollspy-class="z-animation-slide-bottom"></div>
</div>
```

```html
<div
  class="display-grid grid-cols gap sm:grid-cols"
  style="--grid-cols: 1; --gap: 4; --sm-grid-cols: 2"
  data-z-scrollspy="cls: z-animation-slide-bottom; target: .z-card; delay: 300; repeat: true"
>
  <div>
    <div class="z-card z-card-body">
      <h3 class="z-card-title">Bottom</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div>
    <div
      class="z-card z-card-body"
      data-z-scrollspy-class="z-animation-slide-top"
    >
      <h3 class="z-card-title">Top</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div>
    <div class="z-card z-card-body">
      <h3 class="z-card-title">Bottom</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
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

`cls` is the _Primary_ option and its key may be omitted, if it's the only option in the attribute value.

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

To automatically update the active menu item depending on the scroll position of your site, add the `data-z-scrollspy-nav` attribute to any navigation. Each menu item must link to the ID of its corresponding part of the site.

```html
<ul
  class="z-nav z-nav-default"
  data-z-scrollspy-nav="closest: li; scroll: true"
>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
</ul>
```

For an example of the scrollspy nav, just check out the fixed nav on the right side of this page or take a look at the test. Any of the following options can be applied to the `data-z-scrollspy-nav` attribute. Separate multiple options with a semicolon.

### Scrollspy nav options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option    | Value                 | Default     | Description                                                   |
| --------- | --------------------- | ----------- | ------------------------------------------------------------- |
| `cls`     | String                | `z-active` | Class to add to the active links.                             |
| `closest` | Boolean, CSS selector | `false`     | Target to apply the class to. Defaults to the element itself. |
| `scroll`  | Boolean               | `false`     | Adds the [Scroll component](/docs/latest/kit/scroll) to its links.       |
| `target`  | CSS selector          | `a[href]`   | Targets the anchor elements that should be used.              |
| `offset`  | Number                | `0`         | Offset added to scroll top.                                   |

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