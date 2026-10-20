# Nav

## Usage

| Class       | Description                                                                                                      |
| ----------- | ---------------------------------------------------------------------------------------------------------------- |
| `.z-nav`    | Add this class to a `<ul>` element to define the Nav component. Use `<a>` elements as nav items within the list. |
| `.z-active` | Add this class to a list item to apply an active state to a menu item.                                           |

```html
<ul class="z-nav z-nav-default">
  <li class="z-active"><a href="#">Active</a></li>
  <li><a href="#">Item</a></li>
</ul>
```

**Note:** By default, `.z-nav` has no styling; add a modifier class such as `.z-nav-default` or `.z-nav-alt`.

## Nested navs

Add `.z-parent` to a `<li>` item and `.z-nav-sub` to a child `<ul>` to create a subnav. Nested `<ul>` elements inside `.z-nav-sub` are also supported.

```html
<ul class="z-nav z-nav-default">
  <li class="z-parent">
    <a href="#">Parent</a>
    <ul class="z-nav-sub">
      <li><a href="#">Sub item</a></li>
      <li>
        <a href="#">Sub item</a>
        <ul>
          <li><a href="#">Sub item</a></li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

## Accordion

Add `data-z-nav` to the main `<ul>` to apply an accordion effect to child subnavs.

**Note:** `data-z-nav` automatically sets the `.z-nav` class.

```html
<ul class="z-nav-default" data-z-nav>
  ...
</ul>
```

### Parent icon

Add `data-z-nav-parent-icon` to a `<span>` inside the parent `<a>` to display an accordion parent icon.

```html
<ul class="z-nav-default" data-z-nav>
  <li class="z-parent">
    <a href="#">Parent <span data-z-nav-parent-icon></span></a>
    <ul class="z-nav-sub">
      <li><a href="#">Sub item</a></li>
    </ul>
  </li>
</ul>
```

### Multiple open subnavs

Add `multiple: true` to `data-z-nav` to allow multiple open subnavs simultaneously.

```html
<ul class="z-nav-default" data-z-nav="multiple: true">
  ...
</ul>
```

## Header and divider

| Element          | Description                                                                  |
| ---------------- | ---------------------------------------------------------------------------- |
| `.z-nav-header`  | Add this class to a `<li>` element to create a header.                       |
| `.z-nav-divider` | Add this class to a `<li>` element to create a divider separating nav items. |

```html
<ul class="z-nav z-nav-default">
  <li class="z-nav-header">Header</li>
  <li><a href="#">Item</a></li>
  <li class="z-nav-divider"></li>
  <li><a href="#">Item</a></li>
</ul>
```

## Subtitle

Add `.z-nav-subtitle` to a `<div>` inside the item's `<a>` wrapper to display a subtitle.

```html
<ul class="z-nav z-nav-default">
  <li>
    <a href="#">
      <div>
        Item
        <div class="z-nav-subtitle">Subtitle</div>
      </div>
    </a>
  </li>
</ul>
```

## Default modifier

Add `.z-nav-default` to apply the default nav style (e.g. inside `.z-card.z-card-body`).

```html
<ul class="z-nav z-nav-default">
  ...
</ul>
```

## Alternative layout

Add `.z-nav-alt` to give the nav a distinct pill/indicator style.

```html
<ul class="z-nav z-nav-alt" data-z-nav>
  ...
</ul>
```

### Customization

Customize `.z-nav-alt` and `.z-nav-sub` using CSS variables:

```html
<ul
  class="z-nav z-nav-alt"
  style="
    --z-nav-item-active-bg: var(--color-purple-500);
    --z-nav-item-active-bg-o: 100%;
    --z-nav-item-active-color: var(--color-white);
    --z-nav-item-hover-bg: var(--color-purple-600);
    --z-nav-item-hover-bg-o: 100%;
    --z-nav-item-hover-color: var(--color-purple-100);
  "
>
  <li class="z-active">
    <a href="#">Custom Purple</a>
    <ul class="z-nav-sub" style="--z-nav-sub-active-bg: var(--color-green-400)">
      <li class="z-active"><a href="#">Active with green indicator</a></li>
      <li><a href="#">Another item</a></li>
    </ul>
  </li>
</ul>
```

## Nav in Dropdown

Add `.z-dropdown-nav` to place a nav inside a [Dropdown](/docs/latest/kit/dropdown) (`data-z-dropdown`).

```html
<div class="z-drop" data-z-dropdown>
  <ul class="z-dropdown-nav z-nav">
    <li class="z-active"><a href="#">Active</a></li>
    <li class="z-nav-divider"></li>
    <li class="z-nav-header">Header</li>
    <li><a href="#">Item</a></li>
  </ul>
</div>
```

## Nav in offcanvas

Place a nav inside an [Offcanvas](/docs/latest/kit/offcanvas) bar (`.z-offcanvas-bar`), optionally with `.z-nav-primary` and `.z-nav-alt`.

```html
<div class="z-offcanvas" id="offcanvas-slide" data-z-offcanvas>
  <div class="z-offcanvas-bar">
    <ul class="z-nav-primary z-nav-alt" data-z-nav>
      <li class="z-active"><a href="#">Active</a></li>
      <li class="z-parent">
        <a href="#">Parent <span data-z-nav-parent-icon></span></a>
        <ul class="z-nav-sub">
          <li><a href="#">Sub item</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
```

## Component options

Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option        | Value           | Default       | Description                                                                                           |
| ------------- | --------------- | ------------- | ----------------------------------------------------------------------------------------------------- |
| `targets`     | CSS selector    | `> .z-parent` | The element(s) to toggle.                                                                             |
| `toggle`      | CSS selector    | `> a`         | The toggle element(s).                                                                                |
| `content`     | CSS selector    | `> ul`        | The content element(s).                                                                               |
| `collapsible` | Boolean         | `true`        | Allow all items to be closed.                                                                         |
| `multiple`    | Boolean         | `false`       | Allow multiple open items.                                                                            |
| `transition`  | String          | `ease`        | The transition to use.                                                                                |
| `animation`   | Boolean, String | `true`        | Space-separated names of [animations](/docs/latest/kit/animation). Comma-separated for animation out. |
| `duration`    | Number          | `200`         | The animation duration in milliseconds.                                                               |

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```javascript
zUIkit.nav(element, options);
```

### Methods

#### Toggle

```javascript
zUIkit.nav(element).toggle(index, animate);
```

Toggles the content pane.

| Name      | Type                 | Default | Description                                  |
| --------- | -------------------- | ------- | -------------------------------------------- |
| `index`   | String, Number, Node | 0       | Nav pane to toggle. 0 based index.           |
| `animate` | Boolean              | true    | Suppress opening animation by passing false. |
