# Sortable

Drag and drop an element to a new location within the sortable grid, while the other items adjust to fit. This is great, if you want to sort items like gallery or menu items, for example.

## Usage

To apply this component, add the `data-z-sortable` attribute to a container and create child elements.

```html
<div data-z-sortable>
  <div></div>
  <div></div>
</div>
```

```html
<ul
  class="display-grid grid-cols gap md:grid-cols"
  style="--grid-cols: 2; --md-grid-cols: 4; --gap: 4"
  data-z-sortable="handle: .handle"
>
  <li>
    <div
      class="handle bg/o color p text-center"
      style="
        --bg: var(--z-muted);
        --bg-o: var(--z-muted-o);
        --color: var(--z-muted-f);
        --p: 4;
      "
    >
      Item 1
    </div>
  </li>
  <li>
    <div
      class="handle bg/o color p text-center"
      style="
        --bg: var(--z-muted);
        --bg-o: var(--z-muted-o);
        --color: var(--z-muted-f);
        --p: 4;
      "
    >
      Item 2
    </div>
  </li>
  <li>
    <div
      class="handle bg/o color p text-center"
      style="
        --bg: var(--z-muted);
        --bg-o: var(--z-muted-o);
        --color: var(--z-muted-f);
        --p: 4;
      "
    >
      Item 3
    </div>
  </li>
  <li>
    <div
      class="handle bg/o color p text-center"
      style="
        --bg: var(--z-muted);
        --bg-o: var(--z-muted-o);
        --color: var(--z-muted-f);
        --p: 4;
      "
    >
      Item 4
    </div>
  </li>
  <li>
    <div
      class="handle bg/o color p text-center"
      style="
        --bg: var(--z-muted);
        --bg-o: var(--z-muted-o);
        --color: var(--z-muted-f);
        --p: 4;
      "
    >
      Item 5
    </div>
  </li>
  <li>
    <div
      class="handle bg/o color p text-center"
      style="
        --bg: var(--z-muted);
        --bg-o: var(--z-muted-o);
        --color: var(--z-muted-f);
        --p: 4;
      "
    >
      Item 6
    </div>
  </li>
  <li>
    <div
      class="handle bg/o color p text-center"
      style="
        --bg: var(--z-muted);
        --bg-o: var(--z-muted-o);
        --color: var(--z-muted-f);
        --p: 4;
      "
    >
      Item 7
    </div>
  </li>
  <li>
    <div
      class="handle bg/o color p text-center"
      style="
        --bg: var(--z-muted);
        --bg-o: var(--z-muted-o);
        --color: var(--z-muted-f);
        --p: 4;
      "
    >
      Item 8
    </div>
  </li>
</ul>
```

## Handle

By default, the entire sortable element can be used for drag and drop sorting. To create a handle which will be used instead, just add the `handle: SELECTOR` option to the attribute and add the handle class to the element that you want to use as a handle.

```html
<ul data-z-sortable="handle: .z-sortable-handle">
  <li>
    <div class="z-sortable-handle"></div>
    ...
  </li>
</ul>
```

```html
<ul
  class="display-grid grid-cols gap md:grid-cols"
  style="--grid-cols: 2; --md-grid-cols: 4; --gap: 4"
  data-z-sortable="handle: .z-sortable-handle"
>
  <li>
    <div
      class="display-flex items-center justify-center bg/o color p text-center"
      style="
        --bg: var(--z-muted);
        --bg-o: var(--z-muted-o);
        --color: var(--z-muted-f);
        --p: 4;
      "
    >
      <span class="z-sortable-handle mr size" style="--size: 4; --mr: 2">
        <z-icon icon="move"></z-icon>
      </span>
      Item 1
    </div>
  </li>
  <li>
    <div
      class="display-flex items-center justify-center bg/o color p text-center"
      style="
        --bg: var(--z-muted);
        --bg-o: var(--z-muted-o);
        --color: var(--z-muted-f);
        --p: 4;
      "
    >
      <span class="z-sortable-handle mr size" style="--size: 4; --mr: 2">
        <z-icon icon="move"></z-icon>
      </span>
      Item 2
    </div>
  </li>
  <li>
    <div
      class="display-flex items-center justify-center bg/o color p text-center"
      style="
        --bg: var(--z-muted);
        --bg-o: var(--z-muted-o);
        --color: var(--z-muted-f);
        --p: 4;
      "
    >
      <span class="z-sortable-handle mr size" style="--size: 4; --mr: 2">
        <z-icon icon="move"></z-icon>
      </span>
      Item 3
    </div>
  </li>
  <li>
    <div
      class="display-flex items-center justify-center bg/o color p text-center"
      style="
        --bg: var(--z-muted);
        --bg-o: var(--z-muted-o);
        --color: var(--z-muted-f);
        --p: 4;
      "
    >
      <span class="z-sortable-handle mr size" style="--size: 4; --mr: 2">
        <z-icon icon="move"></z-icon>
      </span>
      Item 4
    </div>
  </li>
  <li>
    <div
      class="display-flex items-center justify-center bg/o color p text-center"
      style="
        --bg: var(--z-muted);
        --bg-o: var(--z-muted-o);
        --color: var(--z-muted-f);
        --p: 4;
      "
    >
      <span class="z-sortable-handle mr size" style="--size: 4; --mr: 2">
        <z-icon icon="move"></z-icon>
      </span>
      Item 5
    </div>
  </li>
  <li>
    <div
      class="display-flex items-center justify-center bg/o color p text-center"
      style="
        --bg: var(--z-muted);
        --bg-o: var(--z-muted-o);
        --color: var(--z-muted-f);
        --p: 4;
      "
    >
      <span class="z-sortable-handle mr size" style="--size: 4; --mr: 2">
        <z-icon icon="move"></z-icon>
      </span>
      Item 6
    </div>
  </li>
  <li>
    <div
      class="display-flex items-center justify-center bg/o color p text-center"
      style="
        --bg: var(--z-muted);
        --bg-o: var(--z-muted-o);
        --color: var(--z-muted-f);
        --p: 4;
      "
    >
      <span class="z-sortable-handle mr size" style="--size: 4; --mr: 2">
        <z-icon icon="move"></z-icon>
      </span>
      Item 7
    </div>
  </li>
  <li>
    <div
      class="display-flex items-center justify-center bg/o color p text-center"
      style="
        --bg: var(--z-muted);
        --bg-o: var(--z-muted-o);
        --color: var(--z-muted-f);
        --p: 4;
      "
    >
      <span class="z-sortable-handle mr size" style="--size: 4; --mr: 2">
        <z-icon icon="move"></z-icon>
      </span>
      Item 8
    </div>
  </li>
</ul>
```

## Group

To be able to sort items from one list to another, you can group them by adding the `group: GROUP-NAME` option to the `data-z-sortable` attribute on each list.

```html
<div data-z-sortable="group: my-group">
  <div></div>
</div>

<div data-z-sortable="group: my-group">
  <div></div>
</div>
```

```html
<div
  class="display-grid grid-cols gap md:grid-cols"
  style="--grid-cols: 1; --md-grid-cols: 3; --gap: 4"
>
  <div class="z-placeholder">
    <h4 class="z-h4 mb" style="--mb: 4">Group 1</h4>
    <div
      class="space-y"
      style="--space-y: 4"
      data-z-sortable="group: sortable-group"
    >
      <div
        class="bg/o color p text-center"
        style="
          --bg: var(--z-muted);
          --bg-o: var(--z-muted-o);
          --color: var(--z-muted-f);
          --p: 4;
        "
      >
        Item 1
      </div>
      <div
        class="bg/o color p text-center"
        style="
          --bg: var(--z-muted);
          --bg-o: var(--z-muted-o);
          --color: var(--z-muted-f);
          --p: 4;
        "
      >
        Item 2
      </div>
      <div
        class="bg/o color p text-center"
        style="
          --bg: var(--z-muted);
          --bg-o: var(--z-muted-o);
          --color: var(--z-muted-f);
          --p: 4;
        "
      >
        Item 3
      </div>
      <div
        class="bg/o color p text-center"
        style="
          --bg: var(--z-muted);
          --bg-o: var(--z-muted-o);
          --color: var(--z-muted-f);
          --p: 4;
        "
      >
        Item 4
      </div>
    </div>
  </div>
  <div class="z-placeholder">
    <h4 class="z-h4 mb" style="--mb: 4">Group 2</h4>
    <div
      class="space-y"
      style="--space-y: 4"
      data-z-sortable="group: sortable-group"
    >
      <div
        class="bg/o color p text-center"
        style="
          --bg: var(--z-muted);
          --bg-o: var(--z-muted-o);
          --color: var(--z-muted-f);
          --p: 4;
        "
      >
        Item 1
      </div>
      <div
        class="bg/o color p text-center"
        style="
          --bg: var(--z-muted);
          --bg-o: var(--z-muted-o);
          --color: var(--z-muted-f);
          --p: 4;
        "
      >
        Item 2
      </div>
      <div
        class="bg/o color p text-center"
        style="
          --bg: var(--z-muted);
          --bg-o: var(--z-muted-o);
          --color: var(--z-muted-f);
          --p: 4;
        "
      >
        Item 3
      </div>
      <div
        class="bg/o color p text-center"
        style="
          --bg: var(--z-muted);
          --bg-o: var(--z-muted-o);
          --color: var(--z-muted-f);
          --p: 4;
        "
      >
        Item 4
      </div>
    </div>
  </div>
  <div class="z-placeholder">
    <h4 class="z-h4 mb" style="--mb: 4">Empty Group</h4>
    <div
      class="space-y"
      style="--space-y: 4"
      data-z-sortable="group: sortable-group"
    ></div>
  </div>
</div>
```

## Custom class

You can also apply one or more custom classes to items when they are being dragged. To do so, add the `cls-custom: MY-CLASS` option to the attribute.

```html
<ul data-z-sortable="cls-custom: my-class">
  ...
</ul>
```

```html
<ul
  class="max-w-sm space-y"
  style="--space-y: 4"
  data-z-sortable="cls-custom: z-placeholder"
>
  <li
    class="bg/o color p text-center"
    style="
      --bg: var(--z-muted);
      --bg-o: var(--z-muted-o);
      --color: var(--z-muted-f);
      --p: 4;
    "
  >
    <a href="#">Item 1</a>
  </li>
  <li
    class="bg/o color p text-center"
    style="
      --bg: var(--z-muted);
      --bg-o: var(--z-muted-o);
      --color: var(--z-muted-f);
      --p: 4;
    "
  >
    <a href="#">Item 2</a>
  </li>
  <li
    class="bg/o color p text-center"
    style="
      --bg: var(--z-muted);
      --bg-o: var(--z-muted-o);
      --color: var(--z-muted-f);
      --p: 4;
    "
  >
    <a href="#">Item 3</a>
  </li>
  <li
    class="bg/o color p text-center"
    style="
      --bg: var(--z-muted);
      --bg-o: var(--z-muted-o);
      --color: var(--z-muted-f);
      --p: 4;
    "
  >
    <a href="#">Item 4</a>
  </li>
</ul>
```

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option            | Value           | Default                   | Description                                   |
| ----------------- | --------------- | ------------------------- | --------------------------------------------- |
| `group`           | String          |                           | The group                                     |
| `animation`       | String, Boolean | `slide`                   | Animation mode (`slide`, `false`).            |
| `duration`        | Number          | `250`                     | Animation duration in milliseconds.           |
| `threshold`       | Number          | `5`                       | Mouse move threshold before dragging starts.  |
| `cls-item`        | String          | `z-sortable-item`        | The item class.                               |
| `cls-placeholder` | String          | `z-sortable-placeholder` | The placeholder class.                        |
| `cls-drag`        | String          | `z-sortable-drag`        | The ghost class.                              |
| `cls-drag-state`  | String          | `z-drag`                 | The body's dragging class.                    |
| `cls-base`        | String          | `z-sortable`             | The list's class.                             |
| `cls-no-drag`     | String          | `z-sortable-nodrag`      | Disable dragging on elements with this class. |
| `cls-empty`       | String          | `z-sortable-empty`       | The empty list class.                         |
| `cls-custom`      | String          |                           | The ghost's custom class.                     |
| `handle`          | String          | `false`                   | The handle selector.                          |

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```javascript
zUIkit.sortable(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name      | Description                              |
| --------- | ---------------------------------------- |
| `start`   | Fires after dragging starts.             |
| `stop`    | Fires after dragging stops.              |
| `moved`   | Fires after an element has been moved.   |
| `added`   | Fires after an element has been added.   |
| `removed` | Fires after an element has been removed. |