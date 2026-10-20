# Slider

Responsive slider supporting touch, swipe, mouse drag, and hardware-accelerated animations.

## Usage

Add `data-z-slider` to a container element and create a list of slides with `.z-slider-items`. Define item widths using width utility classes (otherwise width depends on content dimensions).

```html
<div class="z-visible-toggle z-position-relative" tabindex="-1" data-z-slider>
  <div class="z-slider-items">
    <div class="[w] sm:[w] md:[w]" style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%">
      <img src="/images/slider1.jpg" width="400" height="600" alt="" />
      <div class="z-position-center">
        <span class="z-h1 color" style="--color: var(--color-white)">1</span>
      </div>
    </div>
  </div>

  <a class="z-hidden-hover z-position-center-left z-position-small" href data-z-slidenav-previous data-z-slider-item="previous"></a>
  <a class="z-hidden-hover z-position-center-right z-position-small" href data-z-slidenav-next data-z-slider-item="next"></a>
</div>
```

**Note:** Use `loading="lazy"` on slide images to lazy load them. The Slider automatically removes the attribute from images in adjacent slides.

## Container

`.z-slider-container` clips slider items. By default, `data-z-slider` applies this class to its own element, or you can add `.z-slider-container` manually to a child wrapper. Add `.z-slider-container-offset` to widen the clipping container and prevent box-shadows from being clipped.

```html
<div data-z-slider>
  <div class="z-slider-container">
    <div class="z-slider-items">
      <div class="[w] sm:[w] md:[w]" style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%">
        <img src="/images/slider1.jpg" width="400" height="600" alt="" />
      </div>
    </div>
  </div>
</div>
```

## Gap

Apply left padding to each item and an equal negative left margin on `.z-slider-items`.

```html
<div data-z-slider>
  <div class="z-slider-items ml" style="--ml: -4">
    <div
      class="[w] sm:[w] md:[w] pl"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%; --pl: 4"
    >
      <img src="/images/slider1.jpg" width="400" height="600" alt="" />
    </div>
  </div>
</div>
```

## Center

Items align to the left by default. Add `center: true` to center the active slide.

```html
<div data-z-slider="center: true">
  <!-- ... -->
</div>
```

## Autoplay

Add `autoplay: true` to enable autoplay. Set the interval in ms with `autoplay-interval: 6000` and pause on hover with `pause-on-hover: true`.

```html
<div data-z-slider="autoplay: true">
  <!-- ... -->
</div>
```

## Infinite Scrolling

Infinite scrolling is enabled by default. Add `finite: true` to disable it.

```html
<div data-z-slider="finite: true">
  <!-- ... -->
</div>
```

## Slide Sets

Add `sets: true` to loop through sets of visible slides instead of single items.

```html
<div data-z-slider="sets: true">
  <!-- ... -->
</div>
```

## Navigation

Use `data-z-slider-item` inside the `data-z-slider` container with a 0-based slide index, `previous`, or `next`. Can be combined with [Slidenav](/docs/latest/kit/slidenav), [Dotnav](/docs/latest/kit/dotnav), or [Thumbnav](/docs/latest/kit/thumbnav).

```html
<div data-z-slider>
  <div class="z-slider-items">
    <!-- ... -->
  </div>

  <a href data-z-slider-item="previous"></a>
  <a href data-z-slider-item="next"></a>

  <ul>
    <li data-z-slider-item="0"><a href></a></li>
    <li data-z-slider-item="1"><a href></a></li>
  </ul>
</div>
```

Add `.z-slider-nav` to auto-generate navigation items (`<li><a href></a></li>`):

```html
<div data-z-slider>
  <div class="z-slider-items">
    <!-- ... -->
  </div>

  <ul class="z-slider-nav z-dotnav"></ul>
</div>
```

## Navigation outside

Use `.z-position-center-left-out` and `.z-position-center-right-out` from the [Position component](/docs/latest/kit/position) outside `.z-slider-container` so navigation controls are not clipped.

```html
<div data-z-slider>
  <div class="z-position-relative">
    <div class="z-slider-container">
      <div class="z-slider-items">
        <!-- ... -->
      </div>
    </div>

    <a class="z-position-center-left-out" href data-z-slider-item="previous"></a>
    <a class="z-position-center-right-out" href data-z-slider-item="next"></a>
  </div>

  <ul class="z-slider-nav z-dotnav"></ul>
</div>
```

## Parallax animation

Add `parallax: true` for stepless scroll-linked parallax animation. Navigation items become non-clickable indicators of the active slide. Adjust duration with `parallax-start` and `parallax-end` (accepts `vh`, `%` of slider height, `px`, `+`, `-`; default `0`).

```html
<div data-z-slider="parallax: true; parallax-start: 100%; parallax-end: 100%;">
  <!-- ... -->
</div>
```

## Card

Any content (such as the [Card component](/docs/latest/kit/card)) can be placed inside slides.

```html
<div data-z-slider>
  <div class="z-slider-items ml" style="--ml: -4">
    <div class="[w] pl" style="--w: 50%; --pl: 4">
      <div class="z-card">
        <div class="z-card-media-top">
          <img src="/images/photo.jpg" width="1800" height="1200" alt="" />
        </div>
        <div class="z-card-body">
          <h3 class="z-card-title">Headline</h3>
          <p class="mt" style="--mt: 4">Content</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

**Note:** Add `.z-slider-container-offset` or use `center: true` to prevent card box-shadows from being clipped by the container.

## Content overlays

Position overlay content inside slides using the [Position component](/docs/latest/kit/position).

```html
<div data-z-slider>
  <div class="z-slider-items">
    <div>
      <img src="" width="" height="" alt="" />
      <div class="z-position-center">
        <!-- The content goes here -->
      </div>
    </div>
  </div>
</div>
```

## Content parallax

Add `data-z-slider-parallax` to elements inside slides to animate CSS properties (inherited from the [Parallax component](/docs/latest/kit/parallax)) along with the slide position. Pass 2 values (`Start,End`) for symmetric distance or 3 values (`Start,Middle,End`) for custom in/out animations.

```html
<div data-z-slider>
  <div class="z-slider-items">
    <div>
      <img src="" width="" height="" alt="" />
      <div class="z-position-center">
        <div data-z-slider-parallax="x: 100,-100"></div>
        <div data-z-slider-parallax="x: 300,0,-100"></div>
        <div data-z-slider-parallax="x: 100,0,0; opacity: 1,1,0"></div>
      </div>
    </div>
  </div>
</div>
```

## Content transitions

Add `clsActivated: z-transition-active` to `data-z-slider` to automatically trigger transition classes from the [Transition component](/docs/latest/kit/transition) after a slide becomes active.

```html
<div data-z-slider="clsActivated: z-transition-active">
  <div class="z-slider-items">
    <div>
      <img src="" width="" height="" alt="" />
      <div class="z-position-bottom">
        <div class="z-transition-slide-bottom">
          <!-- The content goes here -->
        </div>
      </div>
    </div>
  </div>
</div>
```

### Toggle on hover

Add `.z-transition-toggle` and `tabindex="0"` to slide items to trigger transitions on hover or focus.

```html
<div data-z-slider>
  <div class="z-slider-items">
    <div class="z-transition-toggle" tabindex="0">
      <img src="" width="" height="" alt="" />
      <div class="z-position-bottom">
        <div class="z-transition-slide-bottom">
          <!-- The content goes here -->
        </div>
      </div>
    </div>
  </div>
</div>
```

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option              | Value   | Default | Description                                                             |
| ------------------- | ------- | ------- | ----------------------------------------------------------------------- |
| `autoplay`          | Boolean | `false` | Slider autoplays.                                                       |
| `autoplay-interval` | Number  | `7000`  | The delay between switching slides in autoplay mode.                    |
| `center`            | Boolean | `false` | Center the active slide.                                                |
| `draggable`         | Boolean | `true ` | Enable pointer dragging.                                                |
| `easing`            | String  | `ease`  | The animation easing (CSS timing functions or cubic-bezier).            |
| `finite`            | Boolean | `false` | Disable infinite sliding.                                               |
| `index`             | Number  | `0`     | Slider item to show. 0 based index.                                     |
| `active`            | String  | `all`   | Slider item/items to apply the transition active class to (all, first). |
| `pause-on-hover`    | Boolean | `true`  | Pause autoplay mode on hover.                                           |
| `sets`              | Boolean | `false` | Slide in sets.                                                          |
| `velocity`          | Number  | `1`     | The animation velocity (pixel/ms).                                      |

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```js
zUIkit.slider(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name             | Description                                              |
| ---------------- | -------------------------------------------------------- |
| `beforeitemshow` | Fires before an item is shown.                           |
| `itemshow`       | Fires after an item is shown.                            |
| `itemshown`      | Fires after an item's show animation has been completed. |
| `beforeitemhide` | Fires before an item is hidden.                          |
| `itemhide`       | Fires after an item's hide animation has started.        |
| `itemhidden`     | Fires after an item's hide animation has been completed. |

### Methods

The following methods are available for the component:

#### Show

```js
zUIkit.slider(element).show(index);
```

Shows the slider item.

#### StartAutoplay

```js
zUIkit.slider(element).startAutoplay();
```

Starts the slider autoplay.

#### StopAutoplay

```js
zUIkit.slider(element).stopAutoplay();
```

Stops the slider autoplay.

## Accessibility

The Slider component adheres to the [Carousel WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/) and automatically sets the appropriate WAI-ARIA roles, states and properties:

- **Slider**: `aria-roledescription="carousel"`.
- **Slide list**: has an ID and `aria-live`.
- **Slides**: have an ID, `group` role (prev/next nav only) or `tabpanel` role (with tab nav), `aria-roledescription="slide"`, and `aria-label`.
- **Tab navigation** ([tab pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/)): list has `tablist` role, items have `presentation` role, links have `tab` role, `aria-selected`, `aria-controls`, and `aria-label`.
- **Prev/next navigation** ([button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)): items have `aria-label`, `aria-controls`, and `button` role (if `<a>`).

### Keyboard interaction

Autoplay stops when any element in the Slider receives focus:

- <kbd>tab</kbd> / <kbd>shift+tab</kbd>: Focuses the active tab in tab navigation, or moves focus outside if already focused.
- <kbd>left/right arrow</kbd> or <kbd>right/down arrow</kbd>: Navigates through tabs and activates the corresponding slide (wraps around).
- <kbd>home</kbd> / <kbd>end</kbd>: Moves focus to the first or last tab.

### Internationalization

The Slider component uses the following translation strings. Learn more about [translating components](/docs/latest/kit/accessibility#internationalization).

| Key          | Default          | Description                               |
| ------------ | ---------------- | ----------------------------------------- |
| `next`       | `Next Slide`     | `aria-label` for next slide button.       |
| `previous`   | `Previous Slide` | `aria-label` for previous slide button.   |
| `slideX`     | `Slide %s`       | `aria-label` for pagination slide button. |
| `slideLabel` | `%s of %s`       | `aria-label` for slide.                   |
