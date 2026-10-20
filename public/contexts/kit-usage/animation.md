# Animation

## Usage

Add one of the `.z-animation-*` classes to any element. Animations are CSS-based and play when the class is added (e.g., on page load or dynamically via Scrollspy).

| Class                                                                                                                                                    | Description                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `.z-animation-fade`                                                                                                                                      | The element fades in.                                                                                   |
| `.z-animation-scale-up`<br/> `.z-animation-scale-down`                                                                                                   | The element fades in and scales up or down.                                                             |
| `.z-animation-slide-top`<br/> `.z-animation-slide-bottom`<br/> `.z-animation-slide-left`<br/> `.z-animation-slide-right`                                 | The element fades and slides in from the top, bottom, left, or right by its own height or width.        |
| `.z-animation-slide-top-small`<br/> `.z-animation-slide-bottom-small`<br/> `.z-animation-slide-left-small`<br/> `.z-animation-slide-right-small`         | The element fades and slides in from the top, bottom, left, or right with a smaller fixed pixel offset. |
| `.z-animation-slide-top-medium`<br/> `.z-animation-slide-bottom-medium`<br/> `.z-animation-slide-left-medium`<br/> `.z-animation-slide-right-medium`     | The element fades and slides in from the top, bottom, left, or right with a medium fixed pixel offset.  |
| `.z-animation-kenburns`                                                                                                                                  | The element scales up very slowly without fading in.                                                    |
| `.z-animation-shake`                                                                                                                                     | The element shakes.                                                                                     |
| `.z-animation-stroke`                                                                                                                                    | The SVG element strokes are drawn.                                                                      |

To toggle an animation on hover or focus, add `.z-animation-toggle` and `tabindex="0"` to a parent element.

```html
<div class="z-animation-toggle" tabindex="0">
  <div class="z-animation-fade"></div>
</div>
```

## Reverse modifier

By default, all animations are incoming. Add `.z-animation-reverse` to reverse any animation.

```html
<div class="z-animation-fade z-animation-reverse"></div>
```

## Fast modifier

Add `.z-animation-fast` to play animations at a faster speed.

```html
<div class="z-animation-fade z-animation-fast"></div>
```

## Origin modifiers

By default, scaling animations originate from the center. Add a `.z-transform-origin-*` class (e.g., `.z-transform-origin-bottom-right`, `.z-transform-origin-top-center`, `.z-transform-origin-bottom-center`, `.z-transform-origin-top-right`) to change the transform origin.

```html
<div class="z-animation-scale-up z-transform-origin-bottom-right"></div>
```

## Ken Burns

Add `.z-animation-kenburns` to any image. Combine with `.z-animation-reverse` or `.z-transform-origin-*` to modify the effect, or use `data-z-scrollspy` to trigger on viewport entry.

```html
<div class="z-overflow-hidden">
  <img
    src="/images/dark.jpg"
    width="1800"
    height="1200"
    alt=""
    class="z-animation-reverse z-transform-origin-top-right"
    data-z-scrollspy="cls: z-animation-kenburns; repeat: true"
  />
</div>
```

## SVG Strokes

Animate inline SVG strokes by adding `.z-animation-stroke` and setting the exact stroke length in `--z-animation-stroke`:

```html
<svg
  class="z-animation-stroke"
  style="--z-animation-stroke: 46;"
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg"
>
  <path fill="none" stroke="#000" stroke-width="1" d="" />
</svg>
```

Alternatively, use the SVG component with `data-z-svg="stroke-animation: true"` on an `<img>` element to automatically calculate and set `--z-animation-stroke`:

```html
<img
  class="z-animation-stroke"
  src="/images/strokes.svg"
  width="250"
  height="250"
  alt=""
  data-z-svg="stroke-animation: true"
/>
```
