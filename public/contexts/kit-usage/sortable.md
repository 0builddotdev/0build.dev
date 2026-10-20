# Sortable

Drag-and-drop sorting for grids and lists.

## Usage

Add the `data-z-sortable` attribute to a container element with child items.

```html
<div data-z-sortable>
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

## Handle

By default, the entire item is draggable. Add `handle: SELECTOR` to `data-z-sortable` to restrict dragging to a specific handle element inside each item.

```html
<ul data-z-sortable="handle: .z-sortable-handle">
  <li>
    <div class="z-sortable-handle"></div>
    Item 1
  </li>
</ul>
```

## Group

Add `group: GROUP-NAME` to `data-z-sortable` on multiple containers to allow dragging items between them.

```html
<div data-z-sortable="group: my-group">
  <div>Item 1</div>
</div>

<div data-z-sortable="group: my-group">
  <div>Item 2</div>
</div>
```

## Custom class

Add `cls-custom: MY-CLASS` to apply custom classes to the dragged ghost element.

```html
<ul data-z-sortable="cls-custom: z-placeholder">
  <li><a href="#">Item 1</a></li>
  <li><a href="#">Item 2</a></li>
</ul>
```

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option            | Value           | Default                  | Description                                   |
| ----------------- | --------------- | ------------------------ | --------------------------------------------- |
| `group`           | String          |                          | The group                                     |
| `animation`       | String, Boolean | `slide`                  | Animation mode (`slide`, `false`).            |
| `duration`        | Number          | `250`                    | Animation duration in milliseconds.           |
| `threshold`       | Number          | `5`                      | Mouse move threshold before dragging starts.  |
| `cls-item`        | String          | `z-sortable-item`        | The item class.                               |
| `cls-placeholder` | String          | `z-sortable-placeholder` | The placeholder class.                        |
| `cls-drag`        | String          | `z-sortable-drag`        | The ghost class.                              |
| `cls-drag-state`  | String          | `z-drag`                 | The body's dragging class.                    |
| `cls-base`        | String          | `z-sortable`             | The list's class.                             |
| `cls-no-drag`     | String          | `z-sortable-nodrag`      | Disable dragging on elements with this class. |
| `cls-empty`       | String          | `z-sortable-empty`       | The empty list class.                         |
| `cls-custom`      | String          |                          | The ghost's custom class.                     |
| `handle`          | String          | `false`                  | The handle selector.                          |

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
