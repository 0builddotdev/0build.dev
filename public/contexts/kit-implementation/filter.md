# Filter

The Filter component is often used together with grid component, especially the masonry grid, but it's not bound to it. Any layout can be filtered or sorted no matter how the items are positioned. Items fade and move with smooth transitions between the different filtering and sorting states.

## Usage

To apply this component, you need a container element with the `data-z-filter="target: SELECTOR"` attribute. Inside this container create a list of filter controls as well as the layout items you want to filter. Use the `target: SELECTOR` option to select the element containing the layout items.

```html
<div data-z-filter="target: .js-filter">
  <!-- Filter controls -->
  <ul>
    <li><a href="#"></a></li>
  </ul>

  <!-- Layout items -->
  <ul class="js-filter">
    <li></li>
  </ul>
</div>
```

Next, we need to define the metadata for each layout item, for example which category the item belongs to. Use any HTML class or attribute to do so.

To apply a filter control, add the `data-z-filter-control` attribute. To define the metadata that should be filtered, use the `filter: SELECTOR` option. The selector can be any CSS selector like an HTML class or an attribute you define for the layout items.

```html
<div data-z-filter="target: .js-filter">
  <ul>
    <li data-z-filter-control="filter: .tag-blue"><a href="#"></a></li>
  </ul>

  <ul class="js-filter">
    <li class="tag-blue"></li>
  </ul>
</div>
```

If `target` is the only option in the `data-z-filter` attribute value, you can also use `data-z-filter="SELECTOR"`. The same applies to the filter control. If `filter` is the only option in the `data-z-filter-control` attribute value, you can also use `data-z-filter-control="SELECTOR"`.

```html
<div data-z-filter=".js-filter">
  <ul>
    <li data-z-filter-control=".tag-blue"><a href="#"></a></li>
  </ul>

  <ul class="js-filter">
    <li class="tag-blue"></li>
  </ul>
</div>
```

```html
<div data-z-filter="target: .js-filter">
  <ul class="z-subnav z-subnav-primary">
    <li data-z-filter-control=".tag-white"><a href="#">White</a></li>
    <li data-z-filter-control=".tag-blue"><a href="#">Blue</a></li>
    <li data-z-filter-control=".tag-black"><a href="#">Black</a></li>
  </ul>

  <ul
    class="js-filter mt display-grid grid-cols md:grid-cols gap text-center"
    style="--mt: 4; --grid-cols: 2; --md-grid-cols: 3; --gap: 4"
  >
    <li class="tag-white">
      <div class="p" style="--p: 4">Item</div>
    </li>

    <li class="tag-blue">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        Item
      </div>
    </li>

    <li class="tag-white">
      <div class="p" style="--p: 4">Item</div>
    </li>

    <li class="tag-white">
      <div class="p" style="--p: 4">Item</div>
    </li>

    <li class="tag-black">
      <div
        class="bg p color"
        style="--bg: var(--color-black); --p: 4; --color: var(--color-white)"
      >
        Item
      </div>
    </li>

    <li class="tag-black">
      <div
        class="bg p color"
        style="--bg: var(--color-black); --p: 4; --color: var(--color-white)"
      >
        Item
      </div>
    </li>

    <li class="tag-blue">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        Item
      </div>
    </li>

    <li class="tag-black">
      <div
        class="bg p color"
        style="--bg: var(--color-black); --p: 4; --color: var(--color-white)"
      >
        Item
      </div>
    </li>

    <li class="tag-blue">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        Item
      </div>
    </li>

    <li class="tag-white">
      <div class="p" style="--p: 4">Item</div>
    </li>

    <li class="tag-blue">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        Item
      </div>
    </li>

    <li class="tag-black">
      <div
        class="bg p color"
        style="--bg: var(--color-black); --p: 4; --color: var(--color-white)"
      >
        Item
      </div>
    </li>
  </ul>
</div>
```

The Filter component comes unstyled, which allows you to use any of the other UIkit components to create the filter controls and layout items. For example, the [Nav](/docs/latest/kit/nav), [Subnav](/docs/latest/kit/subnav) and [Tab](/docs/latest/kit/tab) components can be used to style the filter controls.

## Animations

By default, the filter uses a `slide` animation for the items between the different filtering states. To apply a different animation, just add the `animation` option to the attribute.

| Animation      | Description                                                |
| -------------- | ---------------------------------------------------------- |
| `slide`        | Fade items out and in or slide them to their new position. |
| `fade`         | Fade all items out and in.                                 |
| `delayed-fade` | Fade items slightly delayed out and in.                    |

```html
<div data-z-filter="animation: fade">…</div>
```

```html
<div data-z-filter="target: .js-filter; animation: fade">
  <ul class="z-subnav z-subnav-primary">
    <li data-z-filter-control=".tag-white"><a href="#">White</a></li>
    <li data-z-filter-control=".tag-blue"><a href="#">Blue</a></li>
    <li data-z-filter-control=".tag-black"><a href="#">Black</a></li>
  </ul>

  <ul
    class="js-filter mt display-grid grid-cols md:grid-cols gap text-center"
    style="--mt: 4; --grid-cols: 2; --md-grid-cols: 3; --gap: 4"
  >
    <li class="tag-white">
      <div class="p" style="--p: 4">Item</div>
    </li>

    <li class="tag-blue">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        Item
      </div>
    </li>

    <li class="tag-white">
      <div class="p" style="--p: 4">Item</div>
    </li>

    <li class="tag-white">
      <div class="p" style="--p: 4">Item</div>
    </li>

    <li class="tag-black">
      <div
        class="bg p color"
        style="--bg: var(--color-black); --p: 4; --color: var(--color-white)"
      >
        Item
      </div>
    </li>

    <li class="tag-black">
      <div
        class="bg p color"
        style="--bg: var(--color-black); --p: 4; --color: var(--color-white)"
      >
        Item
      </div>
    </li>

    <li class="tag-blue">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        Item
      </div>
    </li>

    <li class="tag-black">
      <div
        class="bg p color"
        style="--bg: var(--color-black); --p: 4; --color: var(--color-white)"
      >
        Item
      </div>
    </li>

    <li class="tag-blue">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        Item
      </div>
    </li>

    <li class="tag-white">
      <div class="p" style="--p: 4">Item</div>
    </li>

    <li class="tag-blue">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        Item
      </div>
    </li>

    <li class="tag-black">
      <div
        class="bg p color"
        style="--bg: var(--color-black); --p: 4; --color: var(--color-white)"
      >
        Item
      </div>
    </li>
  </ul>
</div>
```

## Active state

Add the `.z-active` class to a filter control, and the filter will be applied initially.

```html
<li class="z-active" data-z-filter-control="[data-color='blue']">…</li>
```

```html
<div data-z-filter="target: .js-filter">
  <ul class="z-subnav z-subnav-primary">
    <li class="z-active" data-z-filter-control="[data-color='white']">
      <a href="#">White</a>
    </li>
    <li data-z-filter-control="[data-color='blue']"><a href="#">Blue</a></li>
    <li data-z-filter-control="[data-color='black']"><a href="#">Black</a></li>
  </ul>

  <ul
    class="js-filter mt display-grid grid-cols md:grid-cols gap text-center"
    style="--mt: 4; --grid-cols: 2; --md-grid-cols: 3; --gap: 4"
  >
    <li data-color="white">
      <div class="p" style="--p: 4">Item</div>
    </li>

    <li data-color="blue">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        Item
      </div>
    </li>

    <li data-color="white">
      <div class="p" style="--p: 4">Item</div>
    </li>

    <li data-color="white">
      <div class="p" style="--p: 4">Item</div>
    </li>

    <li data-color="black">
      <div class="bg p color" style="--bg: #000; --p: 4; --color: #fff">
        Item
      </div>
    </li>

    <li data-color="black">
      <div class="bg p color" style="--bg: #000; --p: 4; --color: #fff">
        Item
      </div>
    </li>

    <li data-color="blue">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        Item
      </div>
    </li>

    <li data-color="black">
      <div class="bg p color" style="--bg: #000; --p: 4; --color: #fff">
        Item
      </div>
    </li>

    <li data-color="blue">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        Item
      </div>
    </li>

    <li data-color="white">
      <div class="p" style="--p: 4">Item</div>
    </li>

    <li data-color="blue">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        Item
      </div>
    </li>

    <li data-color="black">
      <div class="bg p color" style="--bg: #000; --p: 4; --color: #fff">
        Item
      </div>
    </li>
  </ul>
</div>
```

## Reset filter

To reset the filter and target all items, use the `data-z-filter-control` attribute without any specified selector.

```html
<li data-z-filter-control>…</li>
```

```html
<div data-z-filter="target: .js-filter">
  <ul class="z-subnav z-subnav-primary">
    <li class="z-active" data-z-filter-control><a href="#">All</a></li>
    <li data-z-filter-control="[data-color='white']"><a href="#">White</a></li>
    <li data-z-filter-control="[data-color='blue']"><a href="#">Blue</a></li>
    <li data-z-filter-control="[data-color='black']"><a href="#">Black</a></li>
  </ul>

  <ul
    class="js-filter mt display-grid grid-cols md:grid-cols gap text-center"
    style="--mt: 4; --grid-cols: 2; --md-grid-cols: 3; --gap: 4"
  >
    <li data-color="white">
      <div class="p" style="--p: 4">Item</div>
    </li>

    <li data-color="blue">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        Item
      </div>
    </li>

    <li data-color="white">
      <div class="p" style="--p: 4">Item</div>
    </li>

    <li data-color="white">
      <div class="p" style="--p: 4">Item</div>
    </li>

    <li data-color="black">
      <div
        class="bg p color"
        style="--bg: var(--color-black); --p: 4; --color: var(--color-white)"
      >
        Item
      </div>
    </li>

    <li data-color="black">
      <div
        class="bg p color"
        style="--bg: var(--color-black); --p: 4; --color: var(--color-white)"
      >
        Item
      </div>
    </li>

    <li data-color="blue">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        Item
      </div>
    </li>

    <li data-color="black">
      <div
        class="bg p color"
        style="--bg: var(--color-black); --p: 4; --color: var(--color-white)"
      >
        Item
      </div>
    </li>

    <li data-color="blue">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        Item
      </div>
    </li>

    <li data-color="white">
      <div class="p" style="--p: 4">Item</div>
    </li>

    <li data-color="blue">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        Item
      </div>
    </li>

    <li data-color="black">
      <div
        class="bg p color"
        style="--bg: var(--color-black); --p: 4; --color: var(--color-white)"
      >
        Item
      </div>
    </li>
  </ul>
</div>
```

## Metadata

Items can have different metadata for filtering. You just need to define the HTML classes or `data` attributes and create the corresponding CSS selectors for the filter controls. This example uses `data` attributes for the filter instead of HTML classes.

```html
<div data-z-filter="target: .js-filter">
  <ul>
    <li data-z-filter-control="[data-tags*='blue']"><a href="#"></a></li>
  </ul>

  <ul class="js-filter">
    <li data-tags="blue dark"></li>
  </ul>
</div>
```

```html
<div data-z-filter="target: .js-filter">
  <ul class="z-subnav z-subnav-primary">
    <li data-z-filter-control="[data-tags*='white']"><a href="#">White</a></li>
    <li data-z-filter-control="[data-tags*='blue']"><a href="#">Blue</a></li>
    <li data-z-filter-control="[data-tags*='black']"><a href="#">Black</a></li>
    <li data-z-filter-control="[data-tags*='dark']">
      <a href="#">Dark Colors</a>
    </li>
  </ul>

  <ul
    class="js-filter mt display-grid grid-cols md:grid-cols gap text-center"
    style="--mt: 4; --grid-cols: 2; --md-grid-cols: 3; --gap: 4"
  >
    <li data-tags="white">
      <div class="p" style="--p: 4">Item</div>
    </li>

    <li data-tags="blue dark">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        Item
      </div>
    </li>

    <li data-tags="white">
      <div class="p" style="--p: 4">Item</div>
    </li>

    <li data-tags="white">
      <div class="p" style="--p: 4">Item</div>
    </li>

    <li data-tags="black dark">
      <div
        class="bg p color"
        style="--bg: var(--color-black); --p: 4; --color: var(--color-white)"
      >
        Item
      </div>
    </li>

    <li data-tags="black dark">
      <div
        class="bg p color"
        style="--bg: var(--color-black); --p: 4; --color: var(--color-white)"
      >
        Item
      </div>
    </li>

    <li data-tags="blue dark">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        Item
      </div>
    </li>

    <li data-tags="black dark">
      <div
        class="bg p color"
        style="--bg: var(--color-black); --p: 4; --color: var(--color-white)"
      >
        Item
      </div>
    </li>

    <li data-tags="blue dark">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        Item
      </div>
    </li>

    <li data-tags="white">
      <div class="p" style="--p: 4">Item</div>
    </li>

    <li data-tags="blue dark">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        Item
      </div>
    </li>

    <li data-tags="black dark">
      <div
        class="bg p color"
        style="--bg: var(--color-black); --p: 4; --color: var(--color-white)"
      >
        Item
      </div>
    </li>
  </ul>
</div>
```

## Multiple Filters

Define different types of metadata and add any number of controls to filter them. The filter controls are exclusive, meaning just one criterion is filtered at a time.

```html
<div data-z-filter="target: .js-filter">
  <ul>
    <li data-z-filter-control="[data-color='blue']"><a href="#"></a></li>
  </ul>

  <ul>
    <li data-z-filter-control="[data-size='small']"><a href="#"></a></li>
  </ul>

  <ul class="js-filter">
    <li data-color="blue" data-size="small"></li>
  </ul>
</div>
```

```html
<div data-z-filter="target: .js-filter">
  <div
    class="display-flex gap-x [divide-x] border/o"
    style="
      --gap-x: 4;
      --divide-x: 1px;
      --border: var(--z-border);
      --border-o: var(--z-border-o);
    "
  >
    <div>
      <ul class="z-subnav z-subnav-primary" z-margin>
        <li class="z-active" data-z-filter-control><a href="#">All</a></li>
      </ul>
    </div>
    <div>
      <ul class="z-subnav z-subnav-primary" z-margin>
        <li data-z-filter-control="[data-color='white']">
          <a href="#">White</a>
        </li>
        <li data-z-filter-control="[data-color='blue']">
          <a href="#">Blue</a>
        </li>
        <li data-z-filter-control="[data-color='black']">
          <a href="#">Black</a>
        </li>
      </ul>
    </div>
    <div>
      <ul class="z-subnav z-subnav-primary" z-margin>
        <li data-z-filter-control="[data-size='small']">
          <a href="#">Small</a>
        </li>
        <li data-z-filter-control="[data-size='medium']">
          <a href="#">Medium</a>
        </li>
        <li data-z-filter-control="[data-size='large']">
          <a href="#">Large</a>
        </li>
      </ul>
    </div>
  </div>

  <ul
    class="js-filter mt display-grid grid-cols md:grid-cols text-center"
    data-z-grid="masonry: true"
    style="--mt: 4; --grid-cols: 2; --md-grid-cols: 3"
  >
    <li class="p" data-color="white" data-size="large" style="--p: 4">
      <div class="h" style="--h: 96">
        <div class="z-position-center">Item</div>
      </div>
    </li>

    <li class="p" data-color="blue" data-size="small" style="--p: 4">
      <div
        class="h bg color"
        style="
          --h: 60;
          --bg: var(--color-blue-500);
          --color: var(--color-blue-50);
        "
      >
        <div class="z-position-center">Item</div>
      </div>
    </li>

    <li class="p" data-color="white" data-size="medium" style="--p: 4">
      <div class="h" style="--h: 80">
        <div class="z-position-center">Item</div>
      </div>
    </li>

    <li class="p" data-color="white" data-size="small" style="--p: 4">
      <div class="h" style="--h: 60">
        <div class="z-position-center">Item</div>
      </div>
    </li>

    <li class="p" data-color="black" data-size="medium" style="--p: 4">
      <div
        class="h bg color"
        style="--h: 80; --bg: var(--color-black); --color: var(--color-white)"
      >
        <div class="z-position-center">Item</div>
      </div>
    </li>

    <li class="p" data-color="black" data-size="small" style="--p: 4">
      <div
        class="h bg color"
        style="--h: 60; --bg: var(--color-black); --color: var(--color-white)"
      >
        <div class="z-position-center">Item</div>
      </div>
    </li>

    <li class="p" data-color="blue" data-size="medium" style="--p: 4">
      <div
        class="h bg color"
        style="
          --h: 80;
          --bg: var(--color-blue-500);
          --color: var(--color-blue-50);
        "
      >
        <div class="z-position-center">Item</div>
      </div>
    </li>

    <li class="p" data-color="black" data-size="large" style="--p: 4">
      <div
        class="h bg color"
        style="--h: 96; --bg: var(--color-black); --color: var(--color-white)"
      >
        <div class="z-position-center">Item</div>
      </div>
    </li>

    <li class="p" data-color="blue" data-size="large" style="--p: 4">
      <div
        class="h bg color"
        style="
          --h: 96;
          --bg: var(--color-blue-500);
          --color: var(--color-blue-50);
        "
      >
        <div class="z-position-center">Item</div>
      </div>
    </li>

    <li class="p" data-color="white" data-size="large" style="--p: 4">
      <div class="h" style="--h: 96">
        <div class="z-position-center">Item</div>
      </div>
    </li>

    <li class="p" data-color="blue" data-size="medium" style="--p: 4">
      <div
        class="h bg color"
        style="
          --h: 80;
          --bg: var(--color-blue-500);
          --color: var(--color-blue-50);
        "
      >
        <div class="z-position-center">Item</div>
      </div>
    </li>

    <li class="p" data-color="black" data-size="small" style="--p: 4">
      <div
        class="h bg color"
        style="--h: 60; --bg: var(--color-black); --color: var(--color-white)"
      >
        <div class="z-position-center">Item</div>
      </div>
    </li>
  </ul>
</div>
```

## Groups

To filter items by multiple criteria at the same time, the filter controls need to be grouped. Just add the `group: NAME` option to the `data-z-filter-control` attribute and define group names for the metadata.

```html
<div data-z-filter="target: .js-filter">
  <ul>
    <li data-z-filter-control="filter: [data-color='blue']; group: color">
      <a href="#"></a>
    </li>
    <li data-z-filter-control="filter: [data-color='white']; group: color">
      <a href="#"></a>
    </li>
  </ul>

  <ul>
    <li data-z-filter-control="filter: [data-size='small']; group: size">
      <a href="#"></a>
    </li>
    <li data-z-filter-control="filter: [data-size='large']; group: size">
      <a href="#"></a>
    </li>
  </ul>

  <ul class="js-filter">
    <li data-color="blue" data-size="small"></li>
  </ul>
</div>
```

```html
<div data-z-filter="target: .js-filter">
  <div
    class="display-flex gap-x divide-x border/o"
    style="
      --gap-x: 4;
      --divide-x: 1;
      --border: var(--z-border);
      --border-o: var(--z-border-o);
    "
  >
    <div>
      <ul class="z-subnav z-subnav-primary" z-margin>
        <li class="z-active" data-z-filter-control><a href="#">All</a></li>
      </ul>
    </div>
    <div>
      <ul class="z-subnav z-subnav-primary" z-margin>
        <li
          data-z-filter-control="filter: [data-color='white']; group: data-color"
        >
          <a href="#">White</a>
        </li>
        <li
          data-z-filter-control="filter: [data-color='blue']; group: data-color"
        >
          <a href="#">Blue</a>
        </li>
        <li
          data-z-filter-control="filter: [data-color='black']; group: data-color"
        >
          <a href="#">Black</a>
        </li>
      </ul>
    </div>
    <div>
      <ul class="z-subnav z-subnav-primary" z-margin>
        <li data-z-filter-control="filter: [data-size='small']; group: size">
          <a href="#">Small</a>
        </li>
        <li data-z-filter-control="filter: [data-size='medium']; group: size">
          <a href="#">Medium</a>
        </li>
        <li data-z-filter-control="filter: [data-size='large']; group: size">
          <a href="#">Large</a>
        </li>
      </ul>
    </div>
  </div>

  <ul
    class="js-filter mt display-grid grid-cols md:grid-cols text-center"
    data-z-grid="masonry: true"
    style="--mt: 4; --grid-cols: 2; --md-grid-cols: 3"
  >
    <li class="p" data-color="white" data-size="large" style="--p: 4">
      <div class="h" style="--h: 96">
        <div class="z-position-center">Item</div>
      </div>
    </li>

    <li class="p" data-color="blue" data-size="small" style="--p: 4">
      <div
        class="h bg color"
        style="
          --h: 60;
          --bg: var(--color-blue-500);
          --color: var(--color-blue-50);
        "
      >
        <div class="z-position-center">Item</div>
      </div>
    </li>

    <li class="p" data-color="white" data-size="medium" style="--p: 4">
      <div class="h" style="--h: 80">
        <div class="z-position-center">Item</div>
      </div>
    </li>

    <li class="p" data-color="white" data-size="small" style="--p: 4">
      <div class="h" style="--h: 60">
        <div class="z-position-center">Item</div>
      </div>
    </li>

    <li class="p" data-color="black" data-size="medium" style="--p: 4">
      <div
        class="h bg color"
        style="--h: 80; --bg: var(--color-black); --color: var(--color-white)"
      >
        <div class="z-position-center">Item</div>
      </div>
    </li>

    <li class="p" data-color="black" data-size="small" style="--p: 4">
      <div
        class="h bg color"
        style="--h: 60; --bg: var(--color-black); --color: var(--color-white)"
      >
        <div class="z-position-center">Item</div>
      </div>
    </li>

    <li class="p" data-color="blue" data-size="medium" style="--p: 4">
      <div
        class="h bg color"
        style="
          --h: 80;
          --bg: var(--color-blue-500);
          --color: var(--color-blue-50);
        "
      >
        <div class="z-position-center">Item</div>
      </div>
    </li>

    <li class="p" data-color="black" data-size="large" style="--p: 4">
      <div
        class="h bg color"
        style="--h: 96; --bg: var(--color-black); --color: var(--color-white)"
      >
        <div class="z-position-center">Item</div>
      </div>
    </li>

    <li class="p" data-color="blue" data-size="large" style="--p: 4">
      <div
        class="h bg color"
        style="
          --h: 96;
          --bg: var(--color-blue-500);
          --color: var(--color-blue-50);
        "
      >
        <div class="z-position-center">Item</div>
      </div>
    </li>

    <li class="p" data-color="white" data-size="large" style="--p: 4">
      <div class="h" style="--h: 96">
        <div class="z-position-center">Item</div>
      </div>
    </li>

    <li class="p" data-color="blue" data-size="medium" style="--p: 4">
      <div
        class="h bg color"
        style="
          --h: 80;
          --bg: var(--color-blue-500);
          --color: var(--color-blue-50);
        "
      >
        <div class="z-position-center">Item</div>
      </div>
    </li>

    <li class="p" data-color="black" data-size="small" style="--p: 4">
      <div
        class="h bg color"
        style="--h: 60; --bg: var(--color-black); --color: var(--color-white)"
      >
        <div class="z-position-center">Item</div>
      </div>
    </li>
  </ul>
</div>
```

## Sorting

To sort items alphanumerically, just add the `sort: ATTRIBUTE` option to the `data-z-filter-control` attribute and define the metadata attribute by which the items should be sorted. By default, items are sorted in ascending order. Add the `order: desc` to sort items in descending order.

```html
<div data-z-filter="target: .js-filter">
  <ul>
    <li data-z-filter-control="sort: data-color"><a href="#"></a></li>
    <li data-z-filter-control="sort: data-color; order: desc">
      <a href="#"></a>
    </li>
  </ul>

  <ul class="js-filter">
    <li data-color="blue"></li>
  </ul>
</div>
```

```html
<div data-z-filter="target: .js-filter">
  <ul class="z-subnav z-subnav-primary">
    <li class="z-active" data-z-filter-control="sort: data-date">
      <a href="#">Asc</a>
    </li>
    <li data-z-filter-control="sort: data-date; order: desc">
      <a href="#">Desc</a>
    </li>
  </ul>

  <ul
    class="js-filter mt display-grid grid-cols md:grid-cols gap text-center"
    style="--mt: 4; --grid-cols: 2; --md-grid-cols: 3; --gap: 4"
  >
    <li data-date="2016-06-01">
      <div class="p" style="--p: 4">2016-06-01</div>
    </li>

    <li data-date="2016-12-13">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        2016-12-13
      </div>
    </li>

    <li data-date="2017-05-20">
      <div class="p" style="--p: 4">2017-05-20</div>
    </li>

    <li data-date="2017-09-17">
      <div class="p" style="--p: 4">2017-09-17</div>
    </li>

    <li data-date="2017-11-03">
      <div
        class="bg p color"
        style="--bg: var(--color-black); --p: 4; --color: var(--color-white)"
      >
        2017-11-03
      </div>
    </li>

    <li data-date="2017-12-25">
      <div
        class="bg p color"
        style="--bg: var(--color-black); --p: 4; --color: var(--color-white)"
      >
        2017-12-25
      </div>
    </li>

    <li data-date="2018-01-30">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        2018-01-30
      </div>
    </li>

    <li data-date="2018-02-01">
      <div
        class="bg p color"
        style="--bg: var(--color-black); --p: 4; --color: var(--color-white)"
      >
        2018-02-01
      </div>
    </li>

    <li data-date="2018-03-11">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        2018-03-11
      </div>
    </li>

    <li data-date="2018-06-13">
      <div class="p" style="--p: 4">2018-06-13</div>
    </li>

    <li data-date="2018-10-27">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        2018-10-27
      </div>
    </li>

    <li data-date="2018-12-02">
      <div
        class="bg p color"
        style="--bg: var(--color-black); --p: 4; --color: var(--color-white)"
      >
        2018-12-02
      </div>
    </li>
  </ul>
</div>
```

## Masonry Grid

A filter is often applied to a [Masonry Grid](/docs/latest/kit/masonry-grid). The filter transition works perfectly with any kind of layout no matter how the items are positioned. It even works with the `parallax` option from the Masonry Grid component.

Here is a comprehensive example with a masonry grid:

```html
<div data-z-filter="target: .js-filter">
  <div class="display-flex items-center justify-between">
    <div class="flex-1">
      <div
        class="display-flex gap-x [divide-x] border/o"
        style="
          --gap-x: 4;
          --divide-x: 1px;
          --border: var(--z-border);
          --border-o: var(--z-border-o);
        "
      >
        <div>
          <ul class="z-subnav z-subnav-primary" z-margin>
            <li class="z-active" data-z-filter-control>
              <a href="#">All</a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="z-subnav z-subnav-primary" z-margin>
            <li data-z-filter-control="[data-color='white']">
              <a href="#">White</a>
            </li>
            <li data-z-filter-control="[data-color='blue']">
              <a href="#">Blue</a>
            </li>
            <li data-z-filter-control="[data-color='black']">
              <a href="#">Black</a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="z-subnav z-subnav-primary" z-margin>
            <li data-z-filter-control="[data-size='small']">
              <a href="#">Small</a>
            </li>
            <li data-z-filter-control="[data-size='medium']">
              <a href="#">Medium</a>
            </li>
            <li data-z-filter-control="[data-size='large']">
              <a href="#">Large</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="display-flex flex-none gap-x" style="--gap-x: 4">
      <span class="z-active" data-z-filter-control="sort: data-name">
        <a class="z-icon-link" href="#" aria-label="Sort ascending">
          <z-icon icon="arrow-down"></z-icon>
        </a>
      </span>
      <span data-z-filter-control="sort: data-name; order: desc">
        <a class="z-icon-link" href="#" aria-label="Sort descending">
          <z-icon icon="arrow-up"></z-icon>
        </a>
      </span>
    </div>
  </div>

  <ul
    class="js-filter mt display-grid grid-cols md:grid-cols text-center"
    data-z-grid="masonry: true"
    style="--mt: 4; --grid-cols: 2; --md-grid-cols: 3"
  >
    <li
      class="p"
      data-name="A"
      data-color="white"
      data-size="large"
      style="--p: 4"
    >
      <div class="h" style="--h: 96">
        <div class="z-position-center">A</div>
      </div>
    </li>

    <li
      class="p"
      data-name="B"
      data-color="blue"
      data-size="small"
      style="--p: 4"
    >
      <div
        class="h bg color"
        style="
          --h: 60;
          --bg: var(--color-blue-500);
          --color: var(--color-blue-50);
        "
      >
        <div class="z-position-center">B</div>
      </div>
    </li>

    <li
      class="p"
      data-name="C"
      data-color="white"
      data-size="medium"
      style="--p: 4"
    >
      <div class="h" style="--h: 80">
        <div class="z-position-center">C</div>
      </div>
    </li>

    <li
      class="p"
      data-name="D"
      data-color="white"
      data-size="small"
      style="--p: 4"
    >
      <div class="h" style="--h: 60">
        <div class="z-position-center">D</div>
      </div>
    </li>

    <li
      class="p"
      data-name="E"
      data-color="black"
      data-size="medium"
      style="--p: 4"
    >
      <div
        class="h bg color"
        style="--h: 80; --bg: var(--color-black); --color: var(--color-white)"
      >
        <div class="z-position-center">E</div>
      </div>
    </li>

    <li
      class="p"
      data-name="F"
      data-color="black"
      data-size="small"
      style="--p: 4"
    >
      <div
        class="h bg color"
        style="--h: 60; --bg: var(--color-black); --color: var(--color-white)"
      >
        <div class="z-position-center">F</div>
      </div>
    </li>

    <li
      class="p"
      data-name="G"
      data-color="blue"
      data-size="medium"
      style="--p: 4"
    >
      <div
        class="h bg color"
        style="
          --h: 80;
          --bg: var(--color-blue-500);
          --color: var(--color-blue-50);
        "
      >
        <div class="z-position-center">G</div>
      </div>
    </li>

    <li
      class="p"
      data-name="H"
      data-color="black"
      data-size="large"
      style="--p: 4"
    >
      <div
        class="h bg color"
        style="--h: 96; --bg: var(--color-black); --color: var(--color-white)"
      >
        <div class="z-position-center">H</div>
      </div>
    </li>

    <li
      class="p"
      data-name="I"
      data-color="blue"
      data-size="large"
      style="--p: 4"
    >
      <div
        class="h bg color"
        style="
          --h: 96;
          --bg: var(--color-blue-500);
          --color: var(--color-blue-50);
        "
      >
        <div class="z-position-center">I</div>
      </div>
    </li>

    <li
      class="p"
      data-name="J"
      data-color="white"
      data-size="large"
      style="--p: 4"
    >
      <div class="h" style="--h: 96">
        <div class="z-position-center">J</div>
      </div>
    </li>

    <li
      class="p"
      data-name="K"
      data-color="blue"
      data-size="medium"
      style="--p: 4"
    >
      <div
        class="h bg color"
        style="
          --h: 80;
          --bg: var(--color-blue-500);
          --color: var(--color-blue-50);
        "
      >
        <div class="z-position-center">K</div>
      </div>
    </li>

    <li
      class="p"
      data-name="L"
      data-color="black"
      data-size="small"
      style="--p: 4"
    >
      <div
        class="h bg color"
        style="--h: 60; --bg: var(--color-black); --color: var(--color-white)"
      >
        <div class="z-position-center">L</div>
      </div>
    </li>
  </ul>
</div>
```

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option      | Value           | Default | Description                                                  |
| ----------- | --------------- | ------- | ------------------------------------------------------------ |
| `target`    | String          |         | The targeted list on which to apply the filter to.           |
| `selActive` | String, Boolean | `false` | A selector for the initially active filter controls.         |
| `animation` | String, Boolean | `slide` | Animation mode (`slide`, `fade`, `delayed-fade` or `false`). |
| `duration`  | Number          | `250`   | Animation duration in milliseconds.                          |

`target` is the _Primary_ option and its key may be omitted, if it's the only option in the attribute value.

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```js
zUIkit.filter(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name           | Description                              |
| -------------- | ---------------------------------------- |
| `beforeFilter` | Fires before the filter is applied.      |
| `afterFilter`  | Fires after the filter has been applied. |

## Accessibility

The Filter component automatically sets the appropriate WAI-ARIA roles, states and properties.

- The _filter controls_ have the `aria-selected` state.