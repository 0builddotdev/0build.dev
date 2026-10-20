# Lightbox

Responsive lightbox gallery supporting touch, swipe, mouse drag, and hardware-accelerated animations.

## Usage

Add `data-z-lightbox` to a container to turn all inner anchors into lightbox links.

```html
<div data-z-lightbox>
  <a class="z-button z-button-default" href="image.jpg">Open Lightbox</a>
</div>
```

## Alt Attribute

Set `data-alt` on an anchor to apply an `alt` attribute to the lightbox image.

```html
<div data-z-lightbox>
  <a href="image.jpg" data-alt="Image"></a>
</div>
```

## Caption

Set `data-caption` on an anchor to display a caption at the bottom of the lightbox.

```html
<div data-z-lightbox>
  <a href="image.jpg" data-caption="Caption"></a>
</div>
```

## Animations

Set `animation` to `slide` (default), `fade`, or `scale`.

```html
<div data-z-lightbox="animation: fade">
  <a href="image.jpg"></a>
</div>
```

## Navigations

Hide the default slidenav with `slidenav: false`, or enable item navigation with `nav: thumbnav` or `nav: dotnav`.

```html
<div data-z-lightbox="slidenav: false; nav: thumbnav">
  <a href="image.jpg"></a>
</div>
```

## Counter

Add `counter: true` to display the current item index and total item count.

```html
<div data-z-lightbox="counter: true">
  <a class="z-inline" href="/images/photo.jpg" data-caption="Caption 1">
    <img src="/images/photo.jpg" width="1800" height="1200" alt="" />
  </a>
</div>
```

## Content sources

Supports images, videos (auto-pauses when hidden; set `data-poster` for poster image), YouTube, Vimeo, and iframes.

```html
<div data-z-lightbox>
  <a class="z-button" href="video.mp4" data-poster="image.jpg">Video</a>
  <a class="z-button" href="https://www.youtube.com/watch?v=aqz-KE-bpKQ">YouTube</a>
  <a class="z-button" href="https://vimeo.com/1084537">Vimeo</a>
  <a class="z-button" href="https://www.google.com/maps" data-type="iframe">Maps</a>
</div>
```

**Note:** Use `youtube-nocookie.com` within a YouTube link to embed via the no-cookie domain.

### Manual content type

If `href` lacks a file extension, specify `data-type` on the `<a>` tag (YouTube and Vimeo URLs are detected automatically).

| Option               | Description                            |
| -------------------- | -------------------------------------- |
| `data-type="image"`  | The content type is an image.          |
| `data-type="video"`  | The content type is a video.           |
| `data-type="iframe"` | The content type is a regular website. |

## Delay controls

Controls auto-hide on mouse inactivity. Set `delay-controls: 0` to keep controls always visible.

```html
<div data-z-lightbox="delay-controls: 0">
  <a href="image.jpg"></a>
</div>
```

## BG close

Set `bg-close: false` to prevent closing the lightbox when clicking the background.

```html
<div data-z-lightbox="bg-close: false">
  <a href="image.jpg"></a>
</div>
```

## Custom Attributes

Pass custom attributes to lightbox content items via `data-attrs` (e.g., `data-attrs="width: 1280; height: 720;"`).

```html
<div data-z-lightbox>
  <a
    class="z-button"
    href="https://www.youtube.com/watch?v=aqz-KE-bpKQ"
    data-attrs="width: 1280; height: 720;"
  ></a>
</div>
```

## Component options

Separate multiple options with a semicolon.

| Option              | Value           | Default | Description                                                                                                |
| ------------------- | --------------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `animation`         | String          | `slide` | Lightbox animation mode (`slide`, `fade` or `scale`).                                                      |
| `autoplay`          | Boolean         | `false` | Lightbox autoplays.                                                                                        |
| `autoplay-interval` | Number          | `7000`  | The delay between switching slides in autoplay mode.                                                       |
| `pause-on-hover`    | Boolean         | `false` | Pause autoplay mode on hover.                                                                              |
| `video-autoplay`    | Boolean, String | `false` | Lightbox videos autoplay. A value of `inline` will autoplay the video, make it muted and without controls. |
| `counter`           | Boolean         | `false` | Lightbox shows counter.                                                                                    |
| `nav`               | Boolean, String | `false` | Lightbox navigation (`dotnav`, `thumbnav`).                                                                |
| `slidenav`          | Boolean         | `true`  | Lightbox shows slidenav controls.                                                                          |
| `index`             | String, Number  | `0`     | Lightbox item to show. 0 based index.                                                                      |
| `delay-controls`    | Number          | `3000`  | Delay time before controls fade out in ms. Setting `0` will prevent hiding controls.                       |
| `toggle`            | CSS selector    | `a`     | Toggle selector - opens the Lightbox Panel upon click.                                                     |

## JavaScript

### Initialization

```javascript
// Apply lightbox to a group of links
zUIkit.lightbox(element, options);

// Dynamically initialize the lightbox panel
zUIkit.lightboxPanel(panelOptions);
```

### Methods

#### Show

```javascript
zUIkit.lightbox(element).show(index);
```

Shows the Lightbox's Panel and item.

#### Hide

```javascript
zUIkit.lightbox(element).hide();
```

Hides the Lightbox's Panel.

### Lightbox Panel Options

Options when using `zUIkit.lightboxPanel(panelOptions)` directly:

| Option              | Value           | Default        | Description                                                                                                |
| ------------------- | --------------- | -------------- | ---------------------------------------------------------------------------------------------------------- |
| `animation`         | String          | `slide`        | Lightbox animation mode (`slide`, `fade` or `scale`).                                                      |
| `autoplay`          | Boolean         | `false`        | Lightbox autoplays.                                                                                        |
| `autoplay-interval` | Number          | `7000`         | The delay between switching slides in autoplay mode.                                                       |
| `pause-on-hover`    | Boolean         | `false`        | Pause autoplay mode on hover.                                                                              |
| `video-autoplay`    | Boolean, String | `false`        | Lightbox videos autoplay. A value of `inline` will autoplay the video, make it muted and without controls. |
| `counter`           | Boolean         | `false`        | Lightbox shows counter.                                                                                    |
| `nav`               | Boolean, String | `false`        | Lightbox navigation (`dotnav`, `thumbnav`).                                                                |
| `slidenav`          | Boolean         | `true`         | Lightbox shows slidenav controls.                                                                          |
| `index`             | Number          | `0`            | The initial item to show. (zero-based)                                                                     |
| `velocity`          | Number          | `2`            | The animation velocity (pixel/ms).                                                                         |
| `preload`           | Number          | `1`            | The number of items to preload. (left and right of the currently active item)                              |
| `items`             | Array           | `[]`           | An array of items to display, e.g. `[{source: 'images/size1.jpg', caption: '900x600'}]`                    |
| `template`          | String          | Default markup | The template string.                                                                                       |
| `delay-controls`    | Number          | `3000`         | Delay time before controls fade out in ms. Setting `0` will prevent hiding controls.                       |
| `container`         | String          | `body`         | Define a target container via a selector to specify where the Lightbox should be appended in the DOM.      |

### Events

| Name             | Description                                              |
| ---------------- | -------------------------------------------------------- |
| `beforeshow`     | Fires before the Lightbox is shown.                      |
| `beforehide`     | Fires before the Lightbox is hidden.                     |
| `show`           | Fires after the Lightbox is shown.                       |
| `shown`          | Fires after the Lightbox's show animation has completed. |
| `hide`           | Fires after the Lightbox's hide animation has started.   |
| `hidden`         | Fires after the Lightbox is hidden.                      |
| `itemload`       | Fires when an item loads.                                |
| `beforeitemshow` | Fires before an item is shown.                           |
| `itemshow`       | Fires after an item is shown.                            |
| `itemshown`      | Fires after an item's show animation has completed.      |
| `beforeitemhide` | Fires before an item is hidden.                          |
| `itemhide`       | Fires after an item's hide animation has started.        |
| `itemhidden`     | Fires after an item's hide animation has completed.      |

### Methods

#### Show

```javascript
zUIkit.lightboxPanel(element).show(index);
```

Shows the Lightbox Panel and item.

| Name    | Type           | Default | Description                           |
| ------- | -------------- | ------- | ------------------------------------- |
| `index` | String, Number | 0       | Lightbox item to show. 0 based index. |

#### Hide

```javascript
zUIkit.lightboxPanel(element).hide();
```

Hides the Lightbox Panel.

#### startAutoplay

```javascript
zUIkit.lightboxPanel(element).startAutoplay();
```

Starts the Lightbox's autoplay.

#### stopAutoplay

```javascript
zUIkit.lightboxPanel(element).stopAutoplay();
```

Stops the Lightbox's autoplay.

## Accessibility

Follows the Dialog (Modal) and Carousel WAI-ARIA patterns automatically:
- **Lightbox**: `role="dialog"`, `aria-modal`, `aria-roledescription="carousel"`.
- **Slide list**: ID, `role="presentation"`, `aria-live`.
- **Slides**: ID, `role="group"`, `aria-roledescription="slide"`, `aria-label`.
- **Prev/Next nav**: `role="button"`, `aria-controls` (slide list ID), `aria-label`.
- **Close icon**: `aria-label`, and `role="button"` if an `<a>` element is used.

### Keyboard interaction

- <kbd>left/right arrow</kbd>: Navigate through slides (loops from last to first).
- <kbd>home</kbd> / <kbd>end</kbd>: Jump to first or last slide.
- <kbd>esc</kbd>: Close the lightbox.

### Internationalization

| Key          | Default          | Description                             |
| ------------ | ---------------- | --------------------------------------- |
| `next`       | `Next Slide`     | `aria-label` for next slide button.     |
| `previous`   | `Previous Slide` | `aria-label` for previous slide button. |
| `slideLabel` | `%s of %s`       | `aria-label` for slide.                 |
| `close`      | `Close`          | `aria-label` for close button.          |
