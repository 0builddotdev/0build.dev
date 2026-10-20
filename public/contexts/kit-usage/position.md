# Position

## Usage

Add one of the `.z-position-*` classes to a block element. When placing content on top of an image, wrap both in a container with `.z-inline` to establish a positioning context.

| Class                | Description                          |
| -------------------- | ------------------------------------ |
| `.z-position-top`    | Positions the element at the top.    |
| `.z-position-left`   | Positions the element at the left.   |
| `.z-position-right`  | Positions the element at the right.  |
| `.z-position-bottom` | Positions the element at the bottom. |

```html
<div class="z-inline">
  <img src="/images/photo.jpg" width="1800" height="1200" alt="" />
  <div class="z-position-top">Top</div>
</div>
```

### X and Y directions

Position elements at specific corners or edges without spanning the full side:

| Class                       | Description                                              |
| --------------------------- | -------------------------------------------------------- |
| `.z-position-top-left`      | Positions the element at the top left.                   |
| `.z-position-top-center`    | Positions the element at the top center.                 |
| `.z-position-top-right`     | Positions the element at the top right.                  |
| `.z-position-center`        | Positions the element vertically centered in the middle. |
| `.z-position-center-left`   | Positions the element vertically centered on the left.   |
| `.z-position-center-right`  | Positions the element vertically centered on the right.  |
| `.z-position-bottom-left`   | Positions the element at the bottom left.                |
| `.z-position-bottom-center` | Positions the element at the bottom center.              |
| `.z-position-bottom-right`  | Positions the element at the bottom right.               |

```html
<div class="z-position-top-right"></div>
```

### Center

Center elements along a single axis:

| Class                           | Description                                             |
| ------------------------------- | ------------------------------------------------------- |
| `.z-position-center-horizontal` | Positions the element at the center from top to bottom. |
| `.z-position-center-vertical`   | Positions the element at the center from left to right. |

```html
<div class="z-position-center-horizontal"></div>
```

### Cover

Add `.z-position-cover` so the positioned element covers its parent container.

```html
<div class="z-position-cover"></div>
```

### Outside

Center elements vertically outside the left or right of the parent container (e.g. for [Slidenav](/docs/latest/kit/slidenav) outside a [Slideshow](/docs/latest/kit/slideshow) or [Slider](/docs/latest/kit/slider)).

| Class                          | Description                                                     |
| ------------------------------ | --------------------------------------------------------------- |
| `.z-position-center-left-out`  | Positions the element vertically centered outside on the left.  |
| `.z-position-center-right-out` | Positions the element vertically centered outside on the right. |

**Note:** If an outside-positioned element extends past the right edge of the viewport, it will cause a horizontal scrollbar. Use visibility utilities to swap to an inside-positioned element on smaller viewports.

```html
<div class="z-position-center-left-out"></div>
```

## Small modifier

Add `.z-position-small` to apply a small margin to positioned elements.

```html
<div class="z-position-center z-position-small"></div>
```

## Medium modifier

Add `.z-position-medium` to apply a medium margin to positioned elements.

```html
<div class="z-position-center z-position-medium"></div>
```

## Large modifier

Add `.z-position-large` to apply a large margin to positioned elements.

```html
<div class="z-position-large z-position-center"></div>
```

## Utility classes

| Class                  | Description                                   |
| ---------------------- | --------------------------------------------- |
| `.z-position-relative` | Add this class to apply relative positioning. |
| `.z-position-absolute` | Add this class to apply absolute positioning. |
| `.z-position-fixed`    | Add this class to apply fixed positioning.    |
| `.z-position-z-index`  | Add this class to apply a z-index of 1.       |
