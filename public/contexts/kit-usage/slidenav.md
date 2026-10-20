# Slidenav

## Usage

Add `data-z-slidenav-previous` or `data-z-slidenav-next` to `<a>` elements to create previous and next navigation buttons.

```html
<a href="" data-z-slidenav-previous></a>
<a href="" data-z-slidenav-next></a>
```

## Slidenav container

Wrap slidenav items inside a `<div class="z-slidenav-container">` (along with any `.z-position-*` classes) to display a conjoint slidenav.

```html
<div class="z-slidenav-container">
  <a href="" data-z-slidenav-previous></a>
  <a href="" data-z-slidenav-next></a>
</div>
```

## Position as overlay

Add `.z-position-*` classes from the [Position component](/docs/latest/kit/position) inside a `.z-position-relative` container to overlay slidenav controls on top of content (e.g., [Slideshow](/docs/latest/kit/slideshow)).

```html
<div class="z-visible-toggle z-position-relative" tabindex="-1" data-z-slideshow>
  <ul class="z-slideshow-items">
    <li><img src="/images/photo.jpg" alt="" data-z-cover /></li>
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
