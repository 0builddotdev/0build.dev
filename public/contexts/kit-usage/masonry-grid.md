# Masonry Grid

## Usage

Add `data-z-grid="masonry: true"` (or `z-grid="masonry: true"`) to a `<div>` with `.flex` and `.flex-wrap` or `.grid` / `.display-grid` to create a gap-free masonry layout.

```html
<div
  class="display-grid sm:grid-cols md:grid-cols"
  style="--sm-grid-cols: 2; --md-grid-cols: 3"
  data-z-grid="masonry: true"
>
  <div class="p" style="--p: 4">
    <div class="z-card display-flex items-center justify-center" style="height: 100px">Item 1</div>
  </div>
  <div class="p" style="--p: 4">
    <div class="z-card display-flex items-center justify-center" style="height: 150px">Item 2</div>
  </div>
  <div class="p" style="--p: 4">
    <div class="z-card display-flex items-center justify-center" style="height: 300px">Item 3</div>
  </div>
</div>
```

## Masonry pack

Use `data-z-grid="masonry: pack"` to sort items into columns with the most room so column heights are as equal as possible.

```html
<div
  class="display-grid sm:grid-cols md:grid-cols"
  style="--sm-grid-cols: 2; --md-grid-cols: 3"
  data-z-grid="masonry: pack"
>
  <div class="p" style="--p: 4"><div style="height: 140px">Item 1</div></div>
  <div class="p" style="--p: 4"><div style="height: 180px">Item 2</div></div>
  <div class="p" style="--p: 4"><div style="height: 220px">Item 3</div></div>
</div>
```

## Masonry next

Use `data-z-grid="masonry: next"` to sort items in their natural DOM order.

```html
<div
  class="display-grid sm:grid-cols md:grid-cols"
  style="--sm-grid-cols: 2; --md-grid-cols: 3"
  data-z-grid="masonry: next"
>
  <div class="p" style="--p: 4"><div style="height: 140px">Item 1</div></div>
  <div class="p" style="--p: 4"><div style="height: 180px">Item 2</div></div>
  <div class="p" style="--p: 4"><div style="height: 220px">Item 3</div></div>
</div>
```

## With parallax

Add `parallax: NUMBER` (translation in pixels) to `data-z-grid` to move columns at different speeds while scrolling.

```html
<div
  class="display-grid sm:grid-cols md:grid-cols"
  style="--sm-grid-cols: 2; --md-grid-cols: 3"
  data-z-grid="masonry: pack; parallax: 150"
>
  <!-- Grid items -->
</div>
```

Set `parallax-start` (default `0`: grid top intersects viewport bottom) and `parallax-end` (default `0`: grid bottom intersects viewport top) to adjust parallax duration. Values accept `vh`, `%` (relative to grid height), and `px`, and support `+` and `-` operands.

```html
<div data-z-grid="parallax: 150; parallax-start: 100%; parallax-end: 100%;">
  <!-- ... -->
</div>
```

Set `parallax-justify: true` so columns of different heights reach the bottom at the same time. Set `parallax: 0` to move columns only by their height difference until justified, or provide an additional translation value.

```html
<div data-z-grid="parallax: 0; parallax-justify: true; masonry: pack">
  <!-- ... -->
</div>
```

## Component options

Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option             | Value           | Default                 | Description                                                                                                                                                                                         |
| ------------------ | --------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `margin`           | String          | `z-grid-margin`         | This class is added to items that break into the next row, typically to create margin to the previous row.                                                                                          |
| `first-column`     | String          | `z-first-column`        | This class is added to the first element in each row.                                                                                                                                               |
| `masonry`          | String, Boolean | `false`, `pack`, `next` | Enables masonry layout for this grid.                                                                                                                                                               |
| `parallax`         | Number          | `0`                     | Parallax translation value. The value can be in vh, % and px. Falsy disables the parallax effect (default).                                                                                         |
| `parallax-start`   | Length          | `0`                     | Start offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. The default value of `0` means that the grid's top border and viewport's bottom border intersect.   |
| `parallax-end`     | Length          | `0`                     | End offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. The default value of `0` means that the grid's bottom border and the viewport's top border intersect. |
| `parallax-justify` | Boolean         | `false`                 | With parallax enabled, all columns will reach the bottom at the same time.                                                                                                                          |

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```js
zUIkit.grid(element, options);
```
