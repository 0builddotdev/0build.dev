# Nav

## Usage

To apply this component, use the following classes.

| Class         | Description                                                                                                      |
| ------------- | ---------------------------------------------------------------------------------------------------------------- |
| `.z-nav`     | Add this class to a `<ul>` element to define the Nav component. Use `<a>` elements as nav items within the list. |
| `.z-active ` | Add this class to a list item to apply an active state to a menu item.                                           |

```html
<ul class="z-nav">
  <li class="z-active"><a href=""></a></li>
  <li><a href=""></a></li>
</ul>
```

```html
<div class="max-w-sm">
  <ul class="z-nav z-nav-default">
    <li class="z-active"><a href="#">Active</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
  </ul>
</div>
```

<span class="z-label z-label-primary">Note</span> By default, the nav has no
styling. That's why it is important to add a modifier class. In our example we
are using the `.z-nav-default` class.

## Nested navs

Add the `.z-parent` class to an item to turn it into a parent. Add the `.z-nav-sub` class to a `<ul>` element inside the item to create the subnav.

```html
<ul class="z-nav">
  <li class="z-parent">
    <a href=""></a>
    <ul class="z-nav-sub">
      <li><a href=""></a></li>
      <li>
        <a href=""></a>
        <ul>
          ...
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

```html
<div class="max-w-sm">
  <ul class="z-nav z-nav-default">
    <li class="z-active"><a href="#">Active</a></li>
    <li class="z-parent">
      <a href="#">Parent</a>
      <ul class="z-nav-sub">
        <li><a href="#">Sub item</a></li>
        <li>
          <a href="#">Sub item</a>
          <ul>
            <li><a href="#">Sub item</a></li>
            <li><a href="#">Sub item</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
```

## Accordion

By default, child menu items are always visible. To apply an accordion effect, just add the `data-z-nav` attribute to the main `<ul>`.

<span class="z-label z-label-primary">Note</span> The attribute automatically
sets the `.z-nav` class, so you don't have to apply it manually.

```html
<ul data-z-nav>
  ...
</ul>
```

```html
<div class="max-w-sm">
  <ul class="z-nav-default" data-z-nav>
    <li class="z-active"><a href="#">Active</a></li>
    <li class="z-parent">
      <a href="#">Parent</a>
      <ul class="z-nav-sub">
        <li><a href="#">Sub item</a></li>
        <li>
          <a href="#">Sub item</a>
          <ul>
            <li><a href="#">Sub item</a></li>
            <li><a href="#">Sub item</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li class="z-parent">
      <a href="#">Parent</a>
      <ul class="z-nav-sub">
        <li><a href="#">Sub item</a></li>
        <li><a href="#">Sub item</a></li>
      </ul>
    </li>
  </ul>
</div>
```

### Parent icon

To create a parent icon, just add the `data-z-nav-parent-icon` attribute to a `<span>` element.

```html
<ul data-z-nav>
  <li>
    <a href="">Parent <span data-z-nav-parent-icon></span></a>
    ...
  </li>
</ul>
```

```html
<div class="max-w-sm">
  <ul class="z-nav-default" data-z-nav>
    <li class="z-active"><a href="#">Active</a></li>
    <li class="z-parent">
      <a href="#">Parent <span data-z-nav-parent-icon></span></a>
      <ul class="z-nav-sub">
        <li><a href="#">Sub item</a></li>
        <li>
          <a href="#">Sub item</a>
          <ul>
            <li><a href="#">Sub item</a></li>
            <li><a href="#">Sub item</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li class="z-parent">
      <a href="#">Parent <span data-z-nav-parent-icon></span></a>
      <ul class="z-nav-sub">
        <li><a href="#">Sub item</a></li>
        <li><a href="#">Sub item</a></li>
      </ul>
    </li>
  </ul>
</div>
```

### Multiple open subnavs

When clicking on a parent item, an open one will close, allowing only one open nested list at a time. To allow multiple open subnavs, just add the `multiple: true` option to the attribute.

```html
<ul data-z-nav="multiple: true">
  ...
</ul>
```

```html
<div class="max-w-sm">
  <ul class="z-nav-default" data-z-nav="multiple: true">
    <li class="z-active"><a href="#">Active</a></li>
    <li class="z-parent">
      <a href="#">Parent <span data-z-nav-parent-icon></span></a>
      <ul class="z-nav-sub">
        <li><a href="#">Sub item</a></li>
        <li>
          <a href="#">Sub item</a>
          <ul>
            <li><a href="#">Sub item</a></li>
            <li><a href="#">Sub item</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li class="z-parent">
      <a href="#">Parent <span data-z-nav-parent-icon></span></a>
      <ul class="z-nav-sub">
        <li><a href="#">Sub item</a></li>
        <li><a href="#">Sub item</a></li>
      </ul>
    </li>
  </ul>
</div>
```

## Header and divider

Add one of the following classes to a list item to create a header or a divider between items.

| Element           | Description                                                                  |
| ----------------- | ---------------------------------------------------------------------------- |
| `.z-nav-header`  | Add this class to a `<li>` element to create a header.                       |
| `.z-nav-divider` | Add this class to a `<li>` element to create a divider separating nav items. |

```html
<li class="z-nav-header"></li>

<li class="z-nav-divider"></li>
```

```html
<div class="max-w-sm">
  <ul class="z-nav z-nav-default">
    <li class="z-nav-header">Header</li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li class="z-nav-divider"></li>
    <li><a href="#">Item</a></li>
  </ul>
</div>
```

## Subtitle

Add the `.z-nav-subtitle` class to a `div` element to create an item subtitled.

```html
<ul class="z-nav">
  <li>
    <a href="">
      <div>
        Item
        <div class="z-nav-subtitle">
          Subtitle lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do.
        </div>
      </div>
    </a>
  </li>
</ul>
```

```html
<div class="max-w-sm">
  <ul class="z-nav z-nav-default">
    <li class="z-active">
      <a href="#"
        ><div>
          Active
          <div class="z-nav-subtitle">
            Subtitle lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do.
          </div>
        </div></a
      >
    </li>
    <li>
      <a href="#"
        ><div>
          Item
          <div class="z-nav-subtitle">
            Subtitle lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do.
          </div>
        </div></a
      >
    </li>
    <li>
      <a href="#"
        ><div>
          Item
          <div class="z-nav-subtitle">
            Subtitle lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do.
          </div>
        </div></a
      >
    </li>
    <li>
      <a href="#"
        ><div>
          Item
          <div class="z-nav-subtitle">
            Subtitle lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do.
          </div>
        </div></a
      >
    </li>
  </ul>
</div>
```

## Default modifier

Add the `.z-nav-default` class to give the nav its default style. You can place the nav inside cards or anywhere else in your content.

```html
<ul class="z-nav z-nav-default">
  ...
</ul>
```

```html
<div class="z-card z-card-body max-w-sm">
  <ul class="z-nav-default" data-z-nav>
    <li class="z-active"><a href="#">Active</a></li>
    <li class="z-parent">
      <a href="#">Parent <span data-z-nav-parent-icon></span></a>
      <ul class="z-nav-sub">
        <li><a href="#">Sub item</a></li>
        <li><a href="#">Sub item</a></li>
      </ul>
    </li>
    <li class="z-parent">
      <a href="#">Parent <span data-z-nav-parent-icon></span></a>
      <ul class="z-nav-sub">
        <li><a href="#">Sub item</a></li>
        <li><a href="#">Sub item</a></li>
      </ul>
    </li>
    <li class="z-nav-header">Header</li>
    <li>
      <a href="#">
        <z-icon
          class="mr size"
          style="--mr: 2; --size: 4"
          icon="table"
        ></z-icon>
        Item
      </a>
    </li>
    <li>
      <a href="#">
        <z-icon class="mr size" style="--mr: 2; --size: 4" icon="bell"></z-icon>
        Item
      </a>
    </li>
    <li class="z-nav-divider"></li>
    <li>
      <a href="#">
        <z-icon
          class="mr size"
          style="--mr: 2; --size: 4"
          icon="trash"
        ></z-icon>
        Item
      </a>
    </li>
  </ul>
</div>
```

## Alternative layout

Add `.z-nav-alt` class to give the nav a more distinct styling.

```html
<ul class="z-nav z-nav-alt">
  ...
</ul>
```

```html
<div class="max-w-sm">
  <ul class="z-nav z-nav-alt" data-z-nav>
    <li class="z-active"><a href="#">Active</a></li>
    <li class="z-parent">
      <a href="#">Parent <span data-z-nav-parent-icon></span></a>
      <ul class="z-nav-sub">
        <li><a href="#">Sub item</a></li>
        <li><a href="#">Sub item</a></li>
      </ul>
    </li>
    <li class="z-parent">
      <a href="#">Parent <span data-z-nav-parent-icon></span></a>
      <ul class="z-nav-sub">
        <li><a href="#">Sub item</a></li>
        <li><a href="#">Sub item</a></li>
      </ul>
    </li>
    <li><a href="#">Item</a></li>
  </ul>
</div>
```

### Customization

You can use CSS variables to customize this component in any way you prefer.

```html
<div class="max-w-sm">
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
      <ul
        class="z-nav-sub"
        style="--z-nav-sub-active-bg: var(--color-green-400)"
      >
        <li class="z-active">
          <a href="#">Active with green indicator</a>
        </li>
        <li><a href="#">Another item</a></li>
      </ul>
    </li>
    <li><a href="#">Regular Item</a></li>
  </ul>
</div>
```

## Nav in Dropdown

Add the `.z-dropdown-nav` class to place a nav inside a default dropdown from the [Dropdown component](/docs/latest/kit/dropdown).

```html
<div data-z-dropdown>
  <ul class="z-dropdown-nav z-nav">
    ...
  </ul>
</div>
```

```html
<button class="z-button z-button-default" type="button">Hover</button>
<div class="z-drop min-w" style="--min-w: 52" data-z-dropdown>
  <ul class="z-nav z-dropdown-nav">
    <li class="z-active"><a href="#">Active</a></li>
    <li class="z-nav-divider"></li>
    <li class="z-nav-header">Header</li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
  </ul>
</div>
```

## Nav in offcanvas

A nav can be used inside an offcanvas from the [Offcanvas component](/docs/latest/kit/offcanvas). No modifier class needs to be added.

```html
<a href="#offcanvas-slide" class="z-button z-button-default" data-z-toggle>
  Open
</a>

<div class="z-offcanvas" id="offcanvas-slide" data-z-offcanvas>
  <div class="z-offcanvas-bar">
    <ul class="z-nav-primary z-nav-alt" data-z-nav>
      <li class="z-active"><a href="#">Active</a></li>
      <li class="z-parent">
        <a href="#">Parent <span data-z-nav-parent-icon></span></a>
        <ul class="z-nav-sub">
          <li><a href="#">Sub item</a></li>
          <li><a href="#">Sub item</a></li>
        </ul>
      </li>
      <li class="z-parent">
        <a href="#">Parent <span data-z-nav-parent-icon></span></a>
        <ul class="z-nav-sub">
          <li><a href="#">Sub item</a></li>
          <li><a href="#">Sub item</a></li>
        </ul>
      </li>
      <li><a href="#">Item</a></li>
    </ul>
  </div>
</div>
```

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option        | Value           | Default        | Description                                                                                |
| ------------- | --------------- | -------------- | ------------------------------------------------------------------------------------------ |
| `targets`     | CSS selector    | `> .z-parent` | The element(s) to toggle.                                                                  |
| `toggle `     | CSS selector    | `> a`          | The toggle element(s).                                                                     |
| `content`     | CSS selector    | `> ul`         | The content element(s).                                                                    |
| `collapsible` | Boolean         | `true`         | Allow all items to be closed.                                                              |
| `multiple`    | Boolean         | `false`        | Allow multiple open items.                                                                 |
| `transition`  | String          | `ease`         | The transition to use.                                                                     |
| `animation`   | Boolean, String | `true`         | Space-separated names of [animations](/docs/latest/kit/animation). Comma-separated for animation out. |
| `duration`    | Number          | `200`          | The animation duration in milliseconds.                                                    |

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```javascript
zUIkit.nav(element, options);
```

### Methods

The following methods are available for the component:

#### Toggle

```javascript
zUIkit.nav(element).toggle(index, animate);
```

Toggles the content pane.

| Name      | Type                 | Default | Description                                  |
| --------- | -------------------- | ------- | -------------------------------------------- |
| `index`   | String, Number, Node | 0       | Nav pane to toggle. 0 based index.           |
| `animate` | Boolean              | true    | Suppress opening animation by passing false. |