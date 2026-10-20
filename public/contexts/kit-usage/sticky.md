# Sticky

## Usage

Add the `data-z-sticky` attribute to an element to keep it fixed at the top of the viewport when scrolling down.

```html
<div data-z-sticky></div>
```

## Position

Elements stick to the top of the viewport by default. Set `position: bottom` to stick to the bottom of the viewport.

```html
<div data-z-sticky="position: bottom"></div>
```

## Start

Add the `start` option to define an offset for when the element starts being sticky. Accepts `vh`, `%`, `px` (with `+` and `-` operands), or a CSS selector (starts at the selected element's bottom border). Default `0` starts when the element's top border intersects the viewport's top border.

```html
<!-- Sticks after 200px scrolling -->
<div data-z-sticky="start: 200"></div>

<!-- Sticks after scrolling the element's height -->
<div data-z-sticky="start: 100%"></div>

<!-- Sticks after 20vh scrolling -->
<div data-z-sticky="start: 20vh"></div>

<!-- Sticks after the top/bottom of the selected element -->
<div id="my-id">
  <div data-z-sticky="start: #my-id"></div>
</div>
```

## End

Add the `end` option to define when the element stops being sticky. Accepts `vh`, `%`, `px` (with `+` and `-` operands), a CSS selector (aligns element's bottom border with selected element's bottom border), `false` (sticks until end of page), or `true` (selects parent element).

```html
<!-- Sticks until 200px scrolling -->
<div data-z-sticky="end: 200"></div>

<!-- Sticks until scrolling the element's height -->
<div data-z-sticky="end: 100%"></div>

<!-- Sticks until 20vh scrolling -->
<div data-z-sticky="end: 20vh"></div>

<!-- Sticks until the bottom of the selected element -->
<div data-z-sticky="end: #my-id"></div>
<div id="my-id"></div>

<!-- Sticks until the bottom of its parent container -->
<div>
  <div data-z-sticky="end: true"></div>
</div>
```

## Offset

Add the `offset` option (`vh`, `%`, `px`, with `+` and `-` operands) to offset the sticky element from the viewport's edge.

```html
<div data-z-sticky="offset: 200"></div>
```

## Animation

Set `animation` using a class from the [Animation component](/docs/latest/kit/animation) so the element reappears smoothly when becoming sticky after a `start` offset.

```html
<div data-z-sticky="start: 200; animation: z-animation-slide-top"></div>
```

## Show On Up

Add `show-on-up: true` to show the sticky element only when scrolling up.

```html
<div data-z-sticky="show-on-up: true; animation: z-animation-slide-top"></div>
```

## Responsive

Set `media` (pixel width like `640`, breakpoint like `@m`, or media query) to enable sticky behavior only from the specified viewport width and upwards.

```html
<div data-z-sticky="media: 640"></div>
```

## Oversized Content

Sticky content taller than the viewport scrolls down and sticks to the bottom of the viewport, then immediately scrolls up and sticks to the top when scrolling up.

```html
<div id="js-oversized" class="display-grid grid-cols gap" style="--grid-cols: 2; --gap: 4">
  <div>
    <div class="z-position-z-index" data-z-sticky="end: #js-oversized; offset: 80">
      <!-- Oversized sticky content -->
    </div>
  </div>
  <div>
    <!-- Main scrollable content -->
  </div>
</div>
```

## Overflow Flip

`overflow-flip: true` disables overflow scrolling for oversized content and instead flips the sticky `position` if the element is taller than the viewport. Combine with `start` and `end` to cover or reveal adjacent sections.

```html
<!-- Section will be covered by the next section -->
<div data-z-sticky="overflow-flip: true; end: 100%"></div>

<div>Some section.</div>

<!-- Section will be revealed by the previous section -->
<div data-z-sticky="position: bottom; overflow-flip: true; start: -100%; end: 0"></div>
```

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option           | Value                         | Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------- | ----------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `position`       | `top`, `bottom`               | `top`      | The position the element should be stuck to.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `start`          | Length, CSS Selector          | `0`        | Start offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. The default value of `0` means that the element's top border and viewport's top border intersect. A CSS Selector will set start to the selected element's bottom border and the element's top border.                                                                                                                                                                        |
| `end `           | Length, CSS Selector, Boolean | `false`    | End offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. A value of `0` means that the element's top border and viewport's top border intersect, which would cause the element not to be sticky at all if start is also set to `0`. A CSS Selector will set the end to the selected element's bottom and the element's bottom border. `false` will make the element stick until the end of the page. `true` selects the parent element. |
| `offset `        | Length                        | `0`        | The offset the Sticky should be fixed to. The value can be in vh, % and px. It supports basic mathematics operands + and -.                                                                                                                                                                                                                                                                                                                                                  |
| `overflow-flip ` | Boolean                       | `false`    | Flip the Sticky's position option if the element overflows the viewport and disable overflow scrolling.                                                                                                                                                                                                                                                                                                                                                                      |
| `animation `     | String                        | `false`    | The animation to use when the element becomes sticky.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `cls-active`     | String                        | `z-active` | The active class.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `cls-inactive`   | String                        |            | The inactive class.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `show-on-up`     | Boolean                       | `false`    | Only show sticky element when scrolling up.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `media `         | Number, String                | `false`    | Condition for the active status - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)).                                                                                                                                                                                                                                                                                                                   |
| `target-offset ` | `false`, Length               | `false`    | Initially make sure that the Sticky element is not over a referenced element via the page's location hash. The offset defines by how far the element will be above the referenced element. `false` will disable this behavior.                                                                                                                                                                                                                                               |

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```javascript
zUIkit.sticky(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name       | Description                                  |
| ---------- | -------------------------------------------- |
| `active`   | Fires after the element becomes sticky.      |
| `inactive` | Fires after the element is no longer sticky. |
