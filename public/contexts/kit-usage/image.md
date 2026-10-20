# Image

Emulates `<img>` and `<picture>` features (`loading="lazy"`, `srcset`, `sizes`, and `<source>`) for background images, lazy-loading them as they enter the viewport and serving responsive/retina assets.

## Usage

Add `data-z-img` and `data-src` with the background image path to any element. Background images are lazy-loaded by default when scrolling into view.

```html
<div class="bg-cover" data-src="image.jpg" data-z-img>…</div>
```

## Eager loading

Set `loading: eager` on `data-z-img` to disable lazy loading for images in the initial visible viewport.

```html
<div data-src="image.jpg" data-z-img="loading: eager">…</div>
```

## Srcset

Add `data-srcset` and optionally `sizes` (without prefix) to serve responsive background images.

```html
<div
  data-src="image-650.jpg"
  data-srcset="image-650.jpg 650w, image-1300.jpg 1300w"
  sizes="(min-width: 650px) 650px, 100vw"
  data-z-img
>
  …
</div>
```

## Picture sources

Add the `sources` attribute with `srcset`, `media`, and `type` parameters to emulate `<picture>` `<source>` elements.

```html
<div sources="srcset: ____; media: (min-width: 1200px)" data-src="" data-srcset="" sizes="" data-z-img>…</div>
<div sources="srcset: ____; type: ____" data-src="" data-z-img>…</div>
```

Multiple sources can be defined using HTML-encoded JSON syntax (e.g. for WebP and AVIF):

```html
<div
  sources='[{"srcset": "/images/image-type.avif", "type": "image\/avif"},
            {"srcset": "/images/image-type.webp", "type": "image\/webp"}]'
  data-src="/images/image-type.jpg"
  data-z-img
>
  …
</div>
```

## Component options

Options can be applied to the component attribute, separated by a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option    | Value  | Default | Description                                                                                                                                                                             |
| --------- | ------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dataSrc` | String |         | The image's `src` attribute.                                                                                                                                                            |
| `sources` | String |         | The image's sources. This option is used for background images only. The source attributes are passed in `key: value;` format for a single source. For multiple sources in JSON format. |
| `loading` | String | `lazy`  | Enable lazy/eager loading. Set to `eager` for images within the first visible viewport.                                                                                                 |
| `margin`  | String | `50%`   | The margin is added to the viewport's bounding box, before computing an intersection with the image. The value must be in px or % units.                                                |
| `target`  | String | `false` | A list of targets whose bounding boxes will be used to compute an intersection with the image. Defaults to the image itself.                                                            |

`dataSrc` is the _Primary_ option, and its key may be omitted if it's the only option in the attribute value.

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```js
zUIkit.img(element, options);
```

**Note:** The Image component records loaded images in Session Storage to detect cached images and load them immediately without lazy loading. Clear Session Storage before testing lazy-loading behavior.
