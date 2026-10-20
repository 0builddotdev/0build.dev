# Accordion

## Usage

The Accordion component consists of a parent container with the `data-z-accordion` attribute, and a title and content part for each item.

| Class                  | Description                                                                |
| ---------------------- | -------------------------------------------------------------------------- |
| `.z-accordion-title`   | Defines and styles the toggle for each accordion item. Use `<a>` elements. |
| `.z-accordion-icon`    | Defines and styles the icon part for each accordion item.                  |
| `.z-accordion-content` | Defines the content part for each accordion item.                          |

```html
<ul class="z-accordion" data-z-accordion>
  <li class="z-open">
    <a class="z-accordion-title" href>
      <span>Item 1</span>
      <span class="z-accordion-icon size-4">
        <z-icon icon="chevron-down"></z-icon>
      </span>
    </a>
    <div class="z-accordion-content">
      <p>Content 1</p>
    </div>
  </li>
  <li>
    <a class="z-accordion-title" href>
      <span>Item 2</span>
      <span class="z-accordion-icon size-4">
        <z-icon icon="chevron-down"></z-icon>
      </span>
    </a>
    <div class="z-accordion-content">
      <p>Content 2</p>
    </div>
  </li>
</ul>
```

## No collapsing

Add `collapsible: false` to `data-z-accordion` to prevent all items from collapsing simultaneously and always maintain at least one open item.

```html
<ul class="z-accordion" data-z-accordion="collapsible: false">
  <!-- ... -->
</ul>
```

## Multiple open items

Add `multiple: true` to `data-z-accordion` to allow multiple content sections to stay open at the same time.

```html
<ul class="z-accordion" data-z-accordion="multiple: true">
  <!-- ... -->
</ul>
```

## Set open items

Add `.z-open` to an item (`<li>`) to open it initially. Combine with `multiple: true` on `data-z-accordion` to open multiple items initially.

**Note:** Alternatively, open a single item by setting `active: <index>` (zero-based) on `data-z-accordion` (e.g., `active: 1`). This overwrites `.z-open`.

```html
<ul class="z-accordion" data-z-accordion>
  <li></li>
  <li class="z-open"></li>
  <li></li>
</ul>
```

## Component options

Apply options to `data-z-accordion`, separated by a semicolon.

| Option        | Value   | Default                  | Description                                                                 |
| ------------- | ------- | ------------------------ | --------------------------------------------------------------------------- |
| `active`      | Number  | `false`                  | Index of the element to open initially.                                     |
| `animation`   | Boolean | `true`                   | Reveal item directly or with a transition.                                  |
| `collapsible` | Boolean | `true`                   | Allow all items to be closed.                                               |
| `content`     | String  | `> .z-accordion-content` | The content selector, which selects the accordion content elements.         |
| `duration`    | Number  | `200`                    | Animation duration in milliseconds.                                         |
| `multiple`    | Boolean | `false`                  | Allow multiple open items.                                                  |
| `targets`     | String  | `> *`                    | CSS selector of the element(s) to toggle.                                   |
| `toggle`      | String  | `> .z-accordion-title`   | The toggle selector, which toggles accordion items.                         |
| `transition`  | String  | `ease`                   | CSS transition timing function keyword when revealing items.                |
| `offset`      | Number  | `0`                      | Pixel offset added to scroll top.                                           |

## JavaScript

### Initialization

```javascript
zUIkit.accordion(element, options);
```

### Events

| Name         | Description                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------- |
| `beforeshow` | Fires before an item is shown. Can prevent showing by calling `preventDefault()` on the event. |
| `show`       | Fires after an item is shown.                                                                  |
| `shown`      | Fires after the item's show animation has completed.                                           |
| `beforehide` | Fires before an item is hidden. Can prevent hiding by calling `preventDefault()` on the event. |
| `hide`       | Fires after an item's hide animation has started.                                              |
| `hidden`     | Fires after an item is hidden.                                                                 |

### Methods

#### Toggle

```javascript
zUIkit.accordion(element).toggle(index, animate);
```

Toggles the content pane.

| Name      | Type                 | Default | Description                                  |
| --------- | -------------------- | ------- | -------------------------------------------- |
| `index`   | String, Number, Node | 0       | Accordion pane to toggle. 0 based index.     |
| `animate` | Boolean              | true    | Suppress opening animation by passing false. |

## Accessibility

Follows the Accordion WAI-ARIA design pattern and automatically sets roles, states, and properties:

- **Titles**: Assigned an ID, `role="button"`, `aria-expanded`, and `aria-controls` pointing to the content ID.
- **Contents**: Assigned an ID, `role="region"`, and `aria-labelledby` pointing to the title ID.

### Keyboard interaction

- <kbd>tab</kbd> / <kbd>shift+tab</kbd>: Navigate through accordion titles.
- <kbd>enter</kbd> / <kbd>space</kbd>: Toggle the content of the focused title.
