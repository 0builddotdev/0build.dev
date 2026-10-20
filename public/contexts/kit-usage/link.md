# Link

## Usage

Add `.z-link` to an `<a>` element.

```html
<a class="z-link" href="#">Link</a>
```

## Muted modifier

Add `.z-link-muted` to an `<a>` element or a parent element (applies to all inner `<a>` elements) for a muted link style.

```html
<a class="z-link-muted" href="#">Link</a>
```

## Text modifier

Add `.z-link-text` to an `<a>` element or a parent element to style links like body text with a hover effect.

```html
<a class="z-link-text" href="#">Link</a>
```

## Reset modifier

Add `.z-link-reset` to an `<a>` element or a parent element to inherit parent text color with no hover effect (useful inside headings).

```html
<h3 class="z-h3">
  <a class="z-link-reset" href="#">Heading</a>
</h3>
```

## Toggle

Add `.z-link-toggle` to a parent `<a>` element and a `.z-link-*` class to a child element so hovering anywhere on the parent triggers the link style on the child.

```html
<a class="z-link-toggle" href="#">
  <span class="z-link-text">Heading</span>
</a>
```
