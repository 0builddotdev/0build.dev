# Filter

Filter or sort any layout with smooth fade and move transitions between states. Often used with the Grid component (including Masonry Grid), and unstyled by default so controls can use [Nav](/docs/latest/kit/nav), [Subnav](/docs/latest/kit/subnav), or [Tab](/docs/latest/kit/tab).

## Usage

Add `data-z-filter="target: SELECTOR"` to a container wrapping both the filter controls and the targeted layout items container. Add `data-z-filter-control="filter: SELECTOR"` to each filter control matching item metadata (classes or attributes).

```html
<div data-z-filter="target: .js-filter">
  <!-- Filter controls -->
  <ul>
    <li data-z-filter-control="filter: .tag-blue"><a href="#">Blue</a></li>
  </ul>

  <!-- Layout items -->
  <ul class="js-filter">
    <li class="tag-blue">Item</li>
  </ul>
</div>
```

If `target` is the only option in `data-z-filter`, or `filter` is the only option in `data-z-filter-control`, the option key may be omitted:

```html
<div data-z-filter=".js-filter">
  <ul class="z-subnav z-subnav-primary">
    <li data-z-filter-control=".tag-white"><a href="#">White</a></li>
    <li data-z-filter-control=".tag-blue"><a href="#">Blue</a></li>
  </ul>

  <ul class="js-filter">
    <li class="tag-white">Item 1</li>
    <li class="tag-blue">Item 2</li>
  </ul>
</div>
```

## Animations

By default, items transition with the `slide` animation. Set the `animation` option on `data-z-filter` to change it.

| Animation      | Description                                                |
| -------------- | ---------------------------------------------------------- |
| `slide`        | Fade items out and in or slide them to their new position. |
| `fade`         | Fade all items out and in.                                 |
| `delayed-fade` | Fade items slightly delayed out and in.                    |

```html
<div data-z-filter="target: .js-filter; animation: fade">…</div>
```

## Active state

Add the `.z-active` class to a filter control to apply that filter initially.

```html
<li class="z-active" data-z-filter-control="[data-color='blue']">…</li>
```

## Reset filter

Add the `data-z-filter-control` attribute without a selector to reset the filter and show all items.

```html
<li data-z-filter-control><a href="#">All</a></li>
```

## Metadata

Define item metadata using HTML classes or `data-*` attributes and target them with any CSS selector in `data-z-filter-control`.

```html
<div data-z-filter="target: .js-filter">
  <ul>
    <li data-z-filter-control="[data-tags*='blue']"><a href="#">Blue</a></li>
  </ul>

  <ul class="js-filter">
    <li data-tags="blue dark">Item</li>
  </ul>
</div>
```

## Multiple Filters

Define multiple types of metadata and filter controls. By default, filter controls are exclusive (only one criterion is active at a time).

```html
<div data-z-filter="target: .js-filter">
  <ul>
    <li data-z-filter-control="[data-color='blue']"><a href="#">Blue</a></li>
  </ul>
  <ul>
    <li data-z-filter-control="[data-size='small']"><a href="#">Small</a></li>
  </ul>

  <ul class="js-filter">
    <li data-color="blue" data-size="small">Item</li>
  </ul>
</div>
```

## Groups

To filter items by multiple criteria simultaneously, group the filter controls using the `group: NAME` option on `data-z-filter-control`.

```html
<div data-z-filter="target: .js-filter">
  <ul>
    <li data-z-filter-control="filter: [data-color='blue']; group: color"><a href="#">Blue</a></li>
    <li data-z-filter-control="filter: [data-color='white']; group: color"><a href="#">White</a></li>
  </ul>
  <ul>
    <li data-z-filter-control="filter: [data-size='small']; group: size"><a href="#">Small</a></li>
    <li data-z-filter-control="filter: [data-size='large']; group: size"><a href="#">Large</a></li>
  </ul>

  <ul class="js-filter">
    <li data-color="blue" data-size="small">Item</li>
  </ul>
</div>
```

## Sorting

Sort items alphanumerically by adding `sort: ATTRIBUTE` to `data-z-filter-control`. Sorting is ascending by default; add `order: desc` for descending order.

```html
<div data-z-filter="target: .js-filter">
  <ul>
    <li data-z-filter-control="sort: data-color"><a href="#">Asc</a></li>
    <li data-z-filter-control="sort: data-color; order: desc"><a href="#">Desc</a></li>
  </ul>

  <ul class="js-filter">
    <li data-color="blue">Item</li>
  </ul>
</div>
```

## Masonry Grid

Filter transitions work seamlessly with [Masonry Grid](/docs/latest/kit/masonry-grid) (`data-z-grid="masonry: true"`), including its `parallax` option.

```html
<div data-z-filter="target: .js-filter">
  <ul class="z-subnav z-subnav-primary">
    <li class="z-active" data-z-filter-control><a href="#">All</a></li>
    <li data-z-filter-control="[data-color='white']"><a href="#">White</a></li>
    <li data-z-filter-control="[data-size='small']"><a href="#">Small</a></li>
  </ul>
  <div>
    <span class="z-active" data-z-filter-control="sort: data-name"><a href="#">Asc</a></span>
    <span data-z-filter-control="sort: data-name; order: desc"><a href="#">Desc</a></span>
  </div>

  <ul class="js-filter" data-z-grid="masonry: true">
    <li data-name="A" data-color="white" data-size="large">A</li>
    <li data-name="B" data-color="blue" data-size="small">B</li>
  </ul>
</div>
```

## Component options

Options can be applied to the component attribute, separated by a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option      | Value           | Default | Description                                                  |
| ----------- | --------------- | ------- | ------------------------------------------------------------ |
| `target`    | String          |         | The targeted list on which to apply the filter to.           |
| `selActive` | String, Boolean | `false` | A selector for the initially active filter controls.         |
| `animation` | String, Boolean | `slide` | Animation mode (`slide`, `fade`, `delayed-fade` or `false`). |
| `duration`  | Number          | `250`   | Animation duration in milliseconds.                          |

`target` is the _Primary_ option and its key may be omitted if it's the only option in the attribute value.

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```js
zUIkit.filter(element, options);
```

### Events

| Name           | Description                              |
| -------------- | ---------------------------------------- |
| `beforeFilter` | Fires before the filter is applied.      |
| `afterFilter`  | Fires after the filter has been applied. |

## Accessibility

The Filter component automatically sets the appropriate WAI-ARIA roles, states, and properties:

- The _filter controls_ have the `aria-selected` state.
