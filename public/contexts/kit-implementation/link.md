# Link

## Usage

To apply this component, add the `.z-link` class to an `<a>` element.

```html
<a class="z-link" href="#">Link</a>
```

## Muted modifier

If you want the link to apply a muted style instead, just add the `.z-link-muted` class to the anchor element. You can also add the class to a parent element, and it will be applied to all `<a>` elements inside it.

```html
<a class="z-link-muted" href="#"></a>
```

```html
<a class="z-link-muted" href="#">Link</a>

<p class="z-link-muted mt" style="--mt: 4">
  Lorem ipsum <a href="#">dolor sit</a> amet, consectetur adipiscing elit, sed
  do <a href="#">eiusmod</a> tempor incididunt ut
  <a href="#">labore et</a> dolore magna aliqua.
</p>
```

## Text modifier

To make a link appear like body text and apply a hover effect, add the `.z-link-text` class to the anchor element. You can also add the class to a parent element, and it will be applied to all `<a>` elements inside it. This is useful for link lists in the page footer.

```html
<a class="z-link-text" href="#"></a>
```

```html
<ul class="z-link-text z-list">
  <li><a href="#">Link</a></li>
  <li><a href="#">Link</a></li>
  <li><a href="#">Link</a></li>
</ul>
```

## Reset modifier

To reset a link's color, so that it inherits the color from its parent, add the `.z-link-reset` class. There won't be any hover effect at all. This is useful for links inside heading elements. You can also add the class to a parent element, and it will be applied to all `<a>` elements inside it.

```html
<a class="z-link-reset" href="#">Link</a>

<h3 class="z-h3">
  <a class="z-link-reset" href="#">Heading</a>
</h3>
```

## Toggle

To use an anchor as a parent element and apply the link style on one of its child elements, just add the `.z-link-toggle` class to the parent element and one of the `.z-link-*` classes to the child element. For instance, you can link the whole card and still have the hover effect on the heading.

```html
<a class="z-link-toggle" href="#">
  <span class="z-link-text"></span>
</a>
```

```html
<a href class="z-card z-card-body z-link-toggle display-block max-w-sm">
  <h3 class="z-card-title">
    <span class="z-link-text">Heading</span>
  </h3>
  <p class="mt" style="--mt: 4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </p>
</a>
```