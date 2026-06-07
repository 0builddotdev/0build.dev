# Position

## Usage

To apply this component, add one of the `.z-position-*` classes to a block element. When using this component to place content on top of an image, add the `.z-inline` class to a container element around the image and the element to create a position context.

| Class                 | Description                          |
| --------------------- | ------------------------------------ |
| `.z-position-top`    | Positions the element at the top.    |
| `.z-position-left`   | Positions the element at the left.   |
| `.z-position-right`  | Positions the element at the right.  |
| `.z-position-bottom` | Positions the element at the bottom. |

```html
<div class="z-inline">
  <!-- Place any content, like an image, here -->

  <div class="z-position-center"></div>
</div>
```

```html
<div class="z-margin z-inline">
  <img src="/images/photo.jpg" width="1800" height="1200" alt="" />

  <div class="z-position-top bg-white/80 p-4 text-center">Top</div>
  <div class="z-position-bottom bg-white/80 p-4 text-center">Bottom</div>
  <div
    class="z-position-left display-flex items-center bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Left
  </div>
  <div
    class="z-position-right display-flex items-center bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Right
  </div>
</div>
```

### X and Y directions

You can also apply more specific positions that won't spread over one side of the parent container by adding one of the following classes.

| Class                        | Description                                              |
| ---------------------------- | -------------------------------------------------------- |
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

```html
<div class="z-inline">
  <img src="/images/photo.jpg" width="1800" height="1200" alt="" />

  <div
    class="z-position-top-left bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Top Left
  </div>
  <div
    class="z-position-top-center bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Top Center
  </div>
  <div
    class="z-position-top-right bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Top Right
  </div>
  <div
    class="z-position-center-left bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Center Left
  </div>
  <div
    class="z-position-center bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Center
  </div>
  <div
    class="z-position-center-right bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Center Right
  </div>
  <div
    class="z-position-bottom-left bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Bottom Left
  </div>
  <div
    class="z-position-bottom-center bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Bottom Center
  </div>
  <div
    class="z-position-bottom-right bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Bottom Right
  </div>
</div>
```

### Center

You can also apply more specific positions that won't spread over one side of the parent container by adding one of the following classes.

| Class                            | Description                                             |
| -------------------------------- | ------------------------------------------------------- |
| `.z-position-center-horizontal` | Positions the element at the center from top to bottom. |
| `.z-position-center-vertical`   | Positions the element at the center from left to right. |

```html
<div class="z-position-center-horizontal"></div>
```

```html
<div class="z-inline">
  <img src="/images/photo.jpg" width="1800" height="1200" alt="" />

  <div
    class="z-position-center-horizontal bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Horizontal
  </div>
  <div
    class="z-position-center-vertical bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Vertical
  </div>
</div>
```

### Cover

If you want a position element to cover its container, just add the `.z-position-cover` class.

```html
<div class="z-position-cover"></div>
```

```html
<div class="z-inline">
  <img src="/images/photo.jpg" width="1800" height="1200" alt="" />

  <div
    class="z-position-cover display-flex items-center justify-center bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Cover
  </div>
</div>
```

### Outside

There are two classes to center elements outside on the left and right of the parent container. This is useful to position the [Slidenav component](/docs/latest/kit/slidenav) outside of a [Slideshow](/docs/latest/kit/slideshow) or [Slider](/docs/latest/kit/slider) component.

| Class                           | Description                                                     |
| ------------------------------- | --------------------------------------------------------------- |
| `.z-position-center-left-out`  | Positions the element vertically centered outside on the left.  |
| `.z-position-center-right-out` | Positions the element vertically centered outside on the right. |

<span class="z-label z-label-primary">Note</span> Once the outside positioned
element sticks out of the viewport to the right, it will cause a horizontal
scrollbar. You can use the visibility utility classes to hide the outside
positioned element on a smaller viewports and show an inside positioned element
instead.

```html
<div class="z-position-center-left-out"></div>
```

```html
<div class="mx-auto w-3/4">
  <div class="z-inline">
    <img src="/images/photo.jpg" width="1800" height="1200" alt="" />

    <div
      class="z-position-center-left-out bg/o color p"
      style="
        --bg: var(--color-black);
        --bg-o: 80%;
        --color: var(--color-white);
        --p: 4;
      "
    >
      Out
    </div>
    <div
      class="z-position-center-right-out bg/o color p"
      style="
        --bg: var(--color-black);
        --bg-o: 80%;
        --color: var(--color-white);
        --p: 4;
      "
    >
      Out
    </div>
  </div>
</div>
```

## Small modifier

To apply a small margin to positioned elements, add the `.z-position-small` class.

```html
<div class="z-position-center z-position-small"></div>
```

```html
<div class="z-inline">
  <img src="/images/photo.jpg" width="1800" height="1200" alt="" />

  <div
    class="z-position-top-left z-position-small bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Top Left
  </div>
  <div
    class="z-position-top-center z-position-small bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Top Center
  </div>
  <div
    class="z-position-top-right z-position-small bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Top Right
  </div>
  <div
    class="z-position-center-left z-position-small bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Center Left
  </div>
  <div
    class="z-position-center z-position-small bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Center
  </div>
  <div
    class="z-position-center-right z-position-small bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Center Right
  </div>
  <div
    class="z-position-bottom-left z-position-small bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Bottom Left
  </div>
  <div
    class="z-position-bottom-center z-position-small bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Bottom Center
  </div>
  <div
    class="z-position-bottom-right z-position-small bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Bottom Right
  </div>
</div>

<div class="z-inline mt" style="--mt: 4">
  <img src="/images/photo.jpg" width="1800" height="1200" alt="" />

  <div
    class="z-position-toptext-center z-position-small bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Top
  </div>
  <div
    class="z-position-bottomtext-center z-position-small bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Bottom
  </div>
  <div
    class="z-position-left z-position-small display-flex items-center bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Left
  </div>
  <div
    class="z-position-right z-position-small display-flex items-center bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Right
  </div>
</div>

<div class="z-inline mt" style="--mt: 4">
  <img src="/images/photo.jpg" width="1800" height="1200" alt="" />

  <div
    class="z-position-cover z-position-small display-flex items-center justify-center bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Cover
  </div>
</div>

<div class="mx-auto mt [w]" style="--mt: 4; --w: 75%">
  <div class="z-inline">
    <img src="/images/photo.jpg" width="1800" height="1200" alt="" />

    <div
      class="z-position-center-left-out z-position-small bg/o color p"
      style="
        --bg: var(--color-black);
        --bg-o: 80%;
        --color: var(--color-white);
        --p: 4;
      "
    >
      Out
    </div>
    <div
      class="z-position-center-right-out z-position-small bg/o color p"
      style="
        --bg: var(--color-black);
        --bg-o: 80%;
        --color: var(--color-white);
        --p: 4;
      "
    >
      Out
    </div>
  </div>
</div>
```

## Medium modifier

To apply a medium margin to positioned elements, add the `.z-position-medium` class.

```html
<div class="z-position-center z-position-medium"></div>
```

```html
<div class="z-inline">
  <img src="/images/photo.jpg" width="1800" height="1200" alt="" />

  <div
    class="z-position-top-left z-position-medium bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Top Left
  </div>
  <div
    class="z-position-top-center z-position-medium bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Top Center
  </div>
  <div
    class="z-position-top-right z-position-medium bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Top Right
  </div>
  <div
    class="z-position-center-left z-position-medium bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Center Left
  </div>
  <div
    class="z-position-center z-position-medium bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Center
  </div>
  <div
    class="z-position-center-right z-position-medium bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Center Right
  </div>
  <div
    class="z-position-bottom-left z-position-medium bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Bottom Left
  </div>
  <div
    class="z-position-bottom-center z-position-medium bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Bottom Center
  </div>
  <div
    class="z-position-bottom-right z-position-medium bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Bottom Right
  </div>
</div>

<div class="z-inline mt" style="--mt: 4">
  <img src="/images/photo.jpg" width="1800" height="1200" alt="" />

  <div
    class="z-position-toptext-center z-position-medium bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Top
  </div>
  <div
    class="z-position-bottomtext-center z-position-medium bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Bottom
  </div>
  <div
    class="z-position-left z-position-medium display-flex items-center bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Left
  </div>
  <div
    class="z-position-right z-position-medium display-flex items-center bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Right
  </div>
</div>

<div class="z-inline mt" style="--mt: 4">
  <img src="/images/photo.jpg" width="1800" height="1200" alt="" />

  <div
    class="z-position-cover z-position-medium display-flex items-center justify-center bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Cover
  </div>
</div>

<div class="mx-auto mt [w]" style="--mt: 4; --w: 75%">
  <div class="z-inline">
    <img src="/images/photo.jpg" width="1800" height="1200" alt="" />

    <div
      class="z-position-center-left-out z-position-medium bg/o color p"
      style="
        --bg: var(--color-black);
        --bg-o: 80%;
        --color: var(--color-white);
        --p: 4;
      "
    >
      Out
    </div>
    <div
      class="z-position-center-right-out z-position-medium bg/o color p"
      style="
        --bg: var(--color-black);
        --bg-o: 80%;
        --color: var(--color-white);
        --p: 4;
      "
    >
      Out
    </div>
  </div>
</div>
```

## Large modifier

To apply a large margin to positioned elements, add the `.z-position-large` class.

```html
<div class="z-position-large z-position-center"></div>
```

```html
<div class="z-inline">
  <img src="/images/photo.jpg" width="1800" height="1200" alt="" />

  <div
    class="z-position-top-left z-position-large bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Top Left
  </div>
  <div
    class="z-position-top-center z-position-large bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Top Center
  </div>
  <div
    class="z-position-top-right z-position-large bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Top Right
  </div>
  <div
    class="z-position-center-left z-position-large bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Center Left
  </div>
  <div
    class="z-position-center z-position-large bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Center
  </div>
  <div
    class="z-position-center-right z-position-large bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Center Right
  </div>
  <div
    class="z-position-bottom-left z-position-large bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Bottom Left
  </div>
  <div
    class="z-position-bottom-center z-position-large bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Bottom Center
  </div>
  <div
    class="z-position-bottom-right z-position-large bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Bottom Right
  </div>
</div>

<div class="z-inline mt" style="--mt: 4">
  <img src="/images/photo.jpg" width="1800" height="1200" alt="" />

  <div
    class="z-position-toptext-center z-position-large bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Top
  </div>
  <div
    class="z-position-bottomtext-center z-position-large bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Bottom
  </div>
  <div
    class="z-position-left z-position-large display-flex items-center bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Left
  </div>
  <div
    class="z-position-right z-position-large display-flex items-center bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Right
  </div>
</div>

<div class="z-inline mt" style="--mt: 4">
  <img src="/images/photo.jpg" width="1800" height="1200" alt="" />

  <div
    class="z-position-cover z-position-large display-flex items-center justify-center bg/o p"
    style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
  >
    Cover
  </div>
</div>

<div class="mx-auto mt [w]" style="--mt: 4; --w: 50%">
  <div class="z-inline">
    <img src="/images/photo.jpg" width="1800" height="1200" alt="" />

    <div
      class="z-position-center-left-out z-position-large bg/o color p"
      style="
        --bg: var(--color-black);
        --bg-o: 80%;
        --color: var(--color-white);
        --p: 4;
      "
    >
      Out
    </div>
    <div
      class="z-position-center-right-out z-position-large bg/o color p"
      style="
        --bg: var(--color-black);
        --bg-o: 80%;
        --color: var(--color-white);
        --p: 4;
      "
    >
      Out
    </div>
  </div>
</div>
```

## Utility classes

This component features a number of general position utility classes:

| Class                   | Description                                   |
| ----------------------- | --------------------------------------------- |
| `.z-position-relative` | Add this class to apply relative positioning. |
| `.z-position-absolute` | Add this class to apply absolute positioning. |
| `.z-position-fixed`    | Add this class to apply fixed positioning.    |
| `.z-position-z-index`  | Add this class to apply a z-index of 1.       |