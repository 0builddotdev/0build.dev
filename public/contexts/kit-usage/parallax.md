# Parallax

## Usage

Add `data-z-parallax` to any element with one or more of the following options to animate CSS properties on scroll:

| Option             | Description                        | Values         | Start Value |
| ------------------ | ---------------------------------- | -------------- | ----------- |
| `x`                | Animate translateX.                | Length         | `0`         |
| `y`                | Animate translateY.                | Length         | `0`         |
| `bgy`              | Animate background Y position.     | Length         | *Initial*   |
| `bgx`              | Animate background X position.     | Length         | *Initial*   |
| `rotate`           | Animate rotation clockwise.        | `deg`          | `0`         |
| `scale`            | Animate scaling.                   | Number, Length | `1`         |
| `color`            | Animate color                      | Color          | *Initial*   |
| `background-color` | Animate background-color           | Color          | *Initial*   |
| `border-color`     | Animate border color               | Color          | *Initial*   |
| `opacity`          | Animate the opacity.               | Number         | *Initial*   |
| `blur`             | Animate the blur filter.           | `px`           | `0`         |
| `hue`              | Animate the hue rotation filter.   | `deg`          | `0`         |
| `grayscale`        | Animate the grayscale filter.      | `%`            | `0`         |
| `invert`           | Animate the invert filter.         | `%`            | `0`         |
| `saturate`         | Animate the saturated filter.      | `%`            | `0`         |
| `sepia`            | Animate the sepia filter.          | `%`            | `0`         |
| `stroke`           | Animate strokes within SVG images. |                | `0`         |

Length values support `px` (default if unit is omitted), `%`, `vw`, and `vh`, as well as `+` and `-` operands. Setting a single value animates from the property's start value to the stop value:

```html
<div data-z-parallax="bgy: -200">…</div>
```

## Start stop

Specify both start and end values separated by a comma:

```html
<div data-z-parallax="opacity: 0,1">…</div>
```

## Multiple stops

Provide a comma-separated list of values to distribute the animation evenly across intermediate stops:

```html
<div data-z-parallax="x: 0,50,150">…</div>
```

## Stop positions

Append a percentage to specify when a stop occurs along the animation sequence:

```html
<div data-z-parallax="x: 0,50 10%,150 50%">…</div>
```

## Nesting

Parallax animations can be nested:

```html
<div data-z-parallax="bgx: -50">
  <div data-z-parallax="x: -100, 100">…</div>
</div>
```

## Target

Use `target` to base animation start and stop on another element's viewport visibility:

```html
<div id="target">
  <div data-z-parallax="target: #target; y: 100,0">…</div>
</div>
```

## Start and end

Set `start` (default `0`: target top intersects viewport bottom) and `end` (default `0`: target bottom intersects viewport top) in `vh`, `%` (relative to target height), or `px` (supports `+` and `-`):

```html
<div data-z-parallax="start: 100%; end: 100%;">…</div>
<div data-z-parallax="start: 30vh; end: 30vh;">…</div>
<div data-z-parallax="start: 100% + 100; end: 100% + 100;">…</div>
```

## Easing

Set `easing` to adjust animation speed curve: `0` transitions at an even speed, negative values start fast and decelerate, and positive values start slow and accelerate.

```html
<div data-z-parallax="y: 200; easing: -2">…</div>
<div data-z-parallax="y: 200; easing: 0">…</div>
<div data-z-parallax="y: 200; easing: 2">…</div>
```

## Colors

Transition colors (`color`, `background-color`, `border-color`) using `rgb()`, color keywords, or hex values:

```html
<div data-z-parallax="border-color: #00f,#f00">…</div>
```

## Filters

Dynamically animate CSS filters:

```html
<div data-z-parallax="blur: 10; sepia: 100;">…</div>
```

## SVG Strokes

Animate inline SVG strokes (manual inline SVG or injected via the [SVG component](/docs/latest/kit/svg) `data-z-svg`). Add `data-z-parallax` to a parent element when using `data-z-svg`.

```html
<div data-z-parallax="stroke: 100%">
  <img src="/images/strokes.svg" width="250" height="250" alt="" data-z-svg />
</div>
```

**Note:** Use `%` units so you do not need to know the exact stroke length.

## SVG Images

Apply `data-z-parallax` directly to inline SVG elements such as `rect`, `circle`, and `path`:

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="10" height="10" data-z-parallax="rotate: 360" />
</svg>
```

## Responsive

Use `vw` or `vh` units for viewport-adaptive movement, or restrict parallax to specific viewports using `media` (pixel width like `640`, breakpoint `@s`, `@m`, `@l`, `@xl`, or media query):

```html
<div data-z-parallax="media: @m"></div>
```

## Component options

Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option   | Value                   | Default | Description                                                                                                                                                                                         |
| -------- | ----------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `easing` | Number                  | `1`     | Animation easing during scrolling                                                                                                                                                                   |
| `target` | CSS Selector            | `false` | Element dimension reference for animation duration.                                                                                                                                                 |
| `start`  | Length                  | `0`     | Start offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. The default value of `0` means that the target's top border and viewport's bottom border intersect. |
| `end`    | Length                  | `0`     | End offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. The default value of `0` means that the target's bottom border and the viewport's top border intersect.|
| `media`  | Boolean, Number, String | `false` | Condition for the active status - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)).                                          |

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```js
zUIkit.parallax(element, options);
```
