# Slideshow

Responsive slideshow supporting touch, swipe, mouse drag, and hardware-accelerated animations.

## Usage

Add `data-z-slideshow` to a container element and create a list of slides with `.z-slideshow-items`. Use `data-z-cover` from the [Cover component](/docs/latest/kit/cover) on slide background images.

```html
<div class="z-visible-toggle z-position-relative" tabindex="-1" data-z-slideshow>
  <div class="z-slideshow-items">
    <div>
      <img src="/images/photo.jpg" alt="" data-z-cover />
    </div>
  </div>

  <a class="z-hidden-hover z-position-center-left z-position-small" href data-z-slidenav-previous data-z-slideshow-item="previous"></a>
  <a class="z-hidden-hover z-position-center-right z-position-small" href data-z-slidenav-next data-z-slideshow-item="next"></a>
</div>
```

**Note:** Use `loading="lazy"` on slide images to lazy load them. The Slideshow automatically removes the attribute from images in adjacent slides.

## Animations

By default, the slideshow uses the `slide` animation. Set the `animation` option to change it:

| Animation | Description                        |
| --------- | ---------------------------------- |
| `slide`   | Slides slide in side by side.      |
| `fade`    | Slides fade in.                    |
| `scale`   | Slides are scaled up and fade out. |
| `pull`    | Slides are pulled from the deck.   |
| `push`    | Slides are pushed to the deck.     |

```html
<div data-z-slideshow="animation: fade">
  <!-- ... -->
</div>
```

## Autoplay

Add `autoplay: true` to enable autoplay. Set the interval in ms with `autoplay-interval: 6000` and pause on hover with `pause-on-hover: true`.

```html
<div data-z-slideshow="autoplay: true">
  <!-- ... -->
</div>
```

## Infinite Scrolling

Infinite scrolling is enabled by default. Add `finite: true` to disable it.

```html
<div data-z-slideshow="finite: true">
  <!-- ... -->
</div>
```

## Ratio

The slideshow takes the full width of its parent container, with height adapting to the `ratio` option (defaults to `16:9`, e.g., `7:3` or `1600:1200`).

```html
<div data-z-slideshow="ratio: 7:3">
  <!-- ... -->
</div>
```

## Min/Max height

Constrain the adaptive height using the `min-height` and `max-height` options.

```html
<div data-z-slideshow="min-height: 300; max-height: 600">
  <!-- ... -->
</div>
```

## Navigation

Use `data-z-slideshow-item` inside the `data-z-slideshow` container with a 0-based slide index, `previous`, or `next`. Can be combined with [Slidenav](/docs/latest/kit/slidenav), [Dotnav](/docs/latest/kit/dotnav), or [Thumbnav](/docs/latest/kit/thumbnav).

```html
<div data-z-slideshow>
  <div class="z-slideshow-items">
    <!-- ... -->
  </div>

  <a href data-z-slideshow-item="previous"></a>
  <a href data-z-slideshow-item="next"></a>

  <ul>
    <li data-z-slideshow-item="0"><a href></a></li>
    <li data-z-slideshow-item="1"><a href></a></li>
  </ul>
</div>
```

Add `.z-slideshow-nav` to auto-generate navigation items (`<li><a href></a></li>`):

```html
<div data-z-slideshow>
  <div class="z-slideshow-items">
    <!-- ... -->
  </div>

  <ul class="z-slideshow-nav z-dotnav"></ul>
</div>
```

## Parallax animation

Add `parallax: true` for stepless scroll-linked parallax animation. Navigation items become non-clickable indicators of the active slide. Adjust duration with `parallax-start` and `parallax-end` (accepts `vh`, `%` of slideshow height, `px`, `+`, `-`; default `0`).

```html
<div data-z-slideshow="parallax: true; parallax-start: 100%; parallax-end: 100%;">
  <!-- ... -->
</div>
```

## Videos

Place `<video>` or `<iframe>` elements in slides using `data-z-cover`. Videos are muted, play automatically when visible, and pause when hidden.

```html
<div data-z-slideshow>
  <div class="z-slideshow-items">
    <div>
      <video src="" autoplay loop muted playsinline data-z-cover></video>
    </div>
    <div>
      <iframe src="" data-z-cover></iframe>
    </div>
  </div>
</div>
```

## Ken Burns effect

Wrap the slide image in a `<div>` with `.z-position-cover` and `.z-animation-kenburns` (optionally with `.z-animation-reverse` and `.z-transform-origin-*`).

```html
<div data-z-slideshow>
  <div class="z-slideshow-items">
    <div>
      <div class="z-animation-kenburns z-animation-reverse z-position-cover z-transform-origin-center-left">
        <img src="" alt="" data-z-cover />
      </div>
    </div>
  </div>
</div>
```

## Content overlays

Position overlay content inside slides using the [Position component](/docs/latest/kit/position).

```html
<div data-z-slideshow>
  <div class="z-slideshow-items">
    <div>
      <img src="" alt="" data-z-cover />
      <div class="z-position-center z-position-small">
        <!-- The content goes here -->
      </div>
    </div>
  </div>
</div>
```

## Content parallax

Add `data-z-slideshow-parallax` to elements inside slides to animate CSS properties (inherited from the [Parallax component](/docs/latest/kit/parallax)) along with the slideshow position. Pass 2 values (`Start,End`) for symmetric distance or 3 values (`Start,Middle,End`) for custom in/out animations.

```html
<div data-z-slideshow>
  <div class="z-slideshow-items">
    <div>
      <img src="" alt="" data-z-cover />
      <div class="z-position-center z-position-small">
        <div data-z-slideshow-parallax="x: 100,-100"></div>
        <div data-z-slideshow-parallax="x: 300,0,-100"></div>
        <div data-z-slideshow-parallax="x: 100,0,0; opacity: 1,1,0"></div>
      </div>
    </div>
  </div>
</div>
```

### Advanced effects

Use `data-z-slideshow-parallax` on `.z-position-cover` wrappers to extend slide animations (e.g., scaling down and dimming out when sliding out):

```html
<div data-z-slideshow="animation: push">
  <div class="z-slideshow-items">
    <div>
      <div class="z-position-cover" data-z-slideshow-parallax="scale: 1.2,1.2,1">
        <img src="" alt="" data-z-cover />
      </div>
      <div
        class="z-position-cover"
        data-z-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"
      ></div>
    </div>
  </div>
</div>
```

## Content transitions

Transition classes from the [Transition component](/docs/latest/kit/transition) are triggered automatically inside slides after the slideshow animation completes.

```html
<div data-z-slideshow>
  <div class="z-slideshow-items">
    <div>
      <img src="" alt="" data-z-cover />
      <div class="z-position-bottom z-position-small">
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

### Slideshow

| Option              | Value           | Default | Description                                                            |
| ------------------- | --------------- | ------- | ---------------------------------------------------------------------- |
| `animation`         | String          | `slide` | Slideshow animation mode (`slide`, `fade`, `scale`, `pull` or `push`). |
| `autoplay`          | Boolean         | `false` | Slideshow autoplays.                                                   |
| `autoplay-interval` | Number          | `7000`  | The delay between switching slides in autoplay mode.                   |
| `draggable`         | Boolean         | `true ` | Enable pointer dragging.                                               |
| `easing`            | String          | `ease`  | The animation easing (CSS timing functions or cubic-bezier).           |
| `finite`            | Boolean         | `false` | Disable infinite sliding.                                              |
| `pause-on-hover`    | Boolean         | `true`  | Pause autoplay mode on hover.                                          |
| `index`             | Number          | `0`     | Slideshow item to show. 0 based index.                                 |
| `velocity`          | Number          | `1`     | The animation velocity (pixel/ms).                                     |
| `ratio`             | Boolean, String | `16:9`  | The ratio. (`false` prevents height adjustment)                        |
| `min-height`        | Boolean, Number | `false` | The minimum height.                                                    |
| `max-height`        | Boolean, Number | `false` | The maximum height.                                                    |

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```js
zUIkit.slideshow(element, options);
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
zUIkit.slideshow(element).show(index);
```

Shows the slideshow item.

#### startAutoplay

```js
zUIkit.slideshow(element).startAutoplay();
```

Starts the slideshow autoplay.

#### stopAutoplay

```js
zUIkit.slideshow(element).stopAutoplay();
```

Stops the slideshow autoplay.

## Accessibility

The Slideshow component adheres to the [Carousel WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/) and automatically sets the appropriate WAI-ARIA roles, states and properties:

- **Slideshow**: `aria-roledescription="carousel"`.
- **Slide list**: has an ID and `aria-live`.
- **Slides**: have an ID, `group` role (prev/next nav only) or `tabpanel` role (with tab nav), `aria-roledescription="slide"`, and `aria-label`.
- **Tab navigation** ([tab pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/)): list has `tablist` role, items have `presentation` role, links have `tab` role, `aria-selected`, `aria-controls`, and `aria-label`.
- **Prev/next navigation** ([button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)): items have `aria-label`, `aria-controls`, and `button` role (if `<a>`).

### Keyboard interaction

Autoplay stops when any element in the Slideshow receives focus:

- <kbd>tab</kbd> / <kbd>shift+tab</kbd>: Focuses the active tab in tab navigation, or moves focus outside if already focused.
- <kbd>left/right arrow</kbd> or <kbd>up/down arrow</kbd>: Navigates through tabs and activates the corresponding slide (wraps around).
- <kbd>home</kbd> / <kbd>end</kbd>: Moves focus to the first or last tab.

### Internationalization

The Slideshow component uses the following translation strings. Learn more about [translating components](/docs/latest/kit/accessibility#internationalization).

| Key          | Default          | Description                               |
| ------------ | ---------------- | ----------------------------------------- |
| `next`       | `Next Slide`     | `aria-label` for next slide button.       |
| `previous`   | `Previous Slide` | `aria-label` for previous slide button.   |
| `slideX`     | `Slide %s`       | `aria-label` for pagination slide button. |
| `slideLabel` | `%s of %s`       | `aria-label` for slide.                   |
