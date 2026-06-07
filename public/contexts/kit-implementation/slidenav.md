# Slidenav

## Usage

To create a navigation with previous and next buttons, just add the `data-z-slidenav` attribute to `<a>` elements. Add the `previous` or `next` parameter to the attribute to style the nav items as previous or next buttons.

```html
<a href="" data-z-slidenav-previous></a>
<a href="" data-z-slidenav-next></a>
```

```html
<a href="#" data-z-slidenav-previous></a>
<a href="#" data-z-slidenav-next></a>
```

## Slidenav container

To display a conjoint slidenav, wrap the slidenav items inside a `<div>` element and add the `.z-slidenav-container` class, as well as one of the `.z-position-*` classes.

```html
<div class="z-slidenav-container">
  <a href="" data-z-slidenav-previous></a>
  <a href="" data-z-slidenav-next></a>
</div>
```

```html
<div class="z-slidenav-container">
  <a href="" data-z-slidenav-previous></a>
  <a href="" data-z-slidenav-next></a>
</div>
```

## Position as overlay

To position the slidenav on top of an element or the [Slideshow component](/docs/latest/kit/slideshow) for example, just add one of the `.z-position-*` classes from the [Position component](/docs/latest/kit/position). To create a position context on the container, add the `.z-position-relative` class.

```html
<div class="z-position-relative">
  <!-- The element which is wrapped goes here -->

  <a class="z-position-center-left" href="" data-z-slidenav-previous></a>
  <a class="z-position-center-right" href="" data-z-slidenav-next></a>
</div>
```

```html
<div
  class="z-visible-toggle z-position-relative"
  tabindex="-1"
  data-z-slideshow
>
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

  <a
    class="z-hidden-hover z-position-center-left z-position-small"
    href="#"
    data-z-slidenav-previous
    data-z-slideshow-item="previous"
  ></a>
  <a
    class="z-hidden-hover z-position-center-right z-position-small"
    href="#"
    data-z-slidenav-next
    data-z-slideshow-item="next"
  ></a>
</div>
```