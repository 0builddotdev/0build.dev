# Thumbnav

## Usage

To create a navigation with thumbnails, use the following classes. This component is built with Flexbox. So to align a thumbnav, you can use utility classes.

| Class          | Description                                                                                                                            |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `.z-thumbnav` | Add this class to a `<ul>` element to define the Thumbnav component. Nest your thumbnail images inside `<a>` elements within the list. |
| `.z-active `  | Add this class to a list item to apply an active state.                                                                                |

```html
<ul class="z-thumbnav">
  <li class="z-active">
    <a href=""><img src="" width="" height="" alt="" /></a>
  </li>
  <li>
    <a href=""><img src="" alt="" /></a>
  </li>
</ul>
```

```html
<ul class="z-thumbnav">
  <li class="z-active">
    <a href="#">
      <img src="/images/photo.jpg" width="100" height="67" alt="" />
    </a>
  </li>
  <li>
    <a href="#">
      <img src="/images/dark.jpg" width="100" height="67" alt="" />
    </a>
  </li>
  <li>
    <a href="#">
      <img src="/images/light.jpg" width="100" height="67" alt="" />
    </a>
  </li>
</ul>
```

## Vertical alignment

The thumbnav can also be displayed vertically. Just add the `.z-thumbnav-vertical` modifier.

```html
<ul class="z-thumbnav z-thumbnav-vertical">
  ...
</ul>
```

```html
<ul class="z-thumbnav z-thumbnav-vertical">
  <li class="z-active">
    <a href="#">
      <img src="/images/photo.jpg" width="100" height="67" alt="" />
    </a>
  </li>
  <li>
    <a href="#">
      <img src="/images/dark.jpg" width="100" height="67" alt="" />
    </a>
  </li>
  <li>
    <a href="#">
      <img src="/images/light.jpg" width="100" height="67" alt="" />
    </a>
  </li>
</ul>
```

## Position as overlay

To position the thumbnav on top of an element or the [Slideshow component](/docs/latest/kit/slideshow) for example, add one of the `.z-position-*` classes from the [Position component](/docs/latest/kit/position) to a `div` element wrapping the thumbnav. To create a position context on the container, add the `.z-position-relative` class.

```html
<div class="z-position-relative">
  <!-- The element which is wrapped goes here -->

  <div class="z-position-bottom-center z-position-small">
    <ul class="z-thumbnav">
      ...
    </ul>
  </div>
</div>
```

```html
<div class="z-position-relative" data-z-slideshow="animation: fade">
  <ul class="z-slideshow-items">
    <li>
      <img src="/images/photo.jpg" alt="" data-z-cover />
    </li>
    <li>
      <img src="/images/dark.jpg" alt="" data-z-cover />
    </li>
    <li>
      <img src="/images/light.jpg" alt="" data-z-cover />
    </li>
  </ul>

  <div class="z-position-small z-position-bottom-center">
    <ul class="z-thumbnav">
      <li data-z-slideshow-item="0">
        <a href="#">
          <img src="/images/photo.jpg" width="100" height="67" alt="" />
        </a>
      </li>
      <li data-z-slideshow-item="1">
        <a href="#">
          <img src="/images/dark.jpg" width="100" height="67" alt="" />
        </a>
      </li>
      <li data-z-slideshow-item="2">
        <a href="#">
          <img src="/images/light.jpg" width="100" height="67" alt="" />
        </a>
      </li>
    </ul>
  </div>
</div>
```