# Accordion

## Usage

The Accordion component consists of a parent container with the `data-z-accordion` attribute, and a title and content part for each accordion item.

| Class                   | Description                                                                |
| ----------------------- | -------------------------------------------------------------------------- |
| `.z-accordion-title`   | Defines and styles the toggle for each accordion item. Use `<a>` elements. |
| `.z-accordion-icon`    | Defines and styles the icon part for each accordion item.                  |
| `.z-accordion-content` | Defines the content part for each accordion item.                          |

```html
<ul data-z-accordion>
  <li>
    <a class="z-accordion-title" href>
      <span>Title</span>
      <span class="z-accordion-icon size-4">
        <z-icon icon="chevron-down"></z-icon>
      </span>
    </a>
    <div class="z-accordion-content"></div>
  </li>
</ul>
```

```html
<ul class="z-accordion" data-z-accordion>
  <li class="z-open">
    <a class="z-accordion-title" href>
      Item 1
      <span class="z-accordion-icon">
        <z-icon icon="chevron-down"></z-icon>
      </span>
    </a>
    <div class="z-accordion-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </li>
  <li>
    <a class="z-accordion-title" href>
      Item 2
      <span class="z-accordion-icon">
        <z-icon icon="chevron-down"></z-icon>
      </span>
    </a>
    <div class="z-accordion-content">
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.
      </p>
    </div>
  </li>
  <li>
    <a class="z-accordion-title" href>
      Item 3
      <span class="z-accordion-icon">
        <z-icon icon="chevron-down"></z-icon>
      </span>
    </a>
    <div class="z-accordion-content">
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        proident.
      </p>
    </div>
  </li>
</ul>
```

## No collapsing

By default, all accordion items can be collapsed. To prevent this behavior and always maintain one open item, add the `collapsible: false` option to the attribute.

```html
<ul data-z-accordion="collapsible: false">
  <!-- ... -->
</ul>
```

```html
<ul class="z-accordion" data-z-accordion="collapsible: false">
  <li>
    <a class="z-accordion-title" href>
      Item 1
      <span class="z-accordion-icon">
        <z-icon icon="chevron-down"></z-icon>
      </span>
    </a>
    <div class="z-accordion-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </li>
  <li>
    <a class="z-accordion-title" href>
      Item 2
      <span class="z-accordion-icon">
        <z-icon icon="chevron-down"></z-icon>
      </span>
    </a>
    <div class="z-accordion-content">
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.
      </p>
    </div>
  </li>
  <li>
    <a class="z-accordion-title" href>
      Item 3
      <span class="z-accordion-icon">
        <z-icon icon="chevron-down"></z-icon>
      </span>
    </a>
    <div class="z-accordion-content">
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        proident.
      </p>
    </div>
  </li>
</ul>
```

## Multiple open items

To display multiple content sections at the same time without one collapsing when the other one is opened, add the `multiple: true` option to the `data-z-accordion` attribute.

```html
<ul data-z-accordion="multiple: true">
  <!-- ... -->
</ul>
```

```html
<ul class="z-accordion" data-z-accordion="multiple: true">
  <li class="z-open">
    <a class="z-accordion-title" href>
      Item 1
      <span class="z-accordion-icon">
        <z-icon icon="chevron-down"></z-icon>
      </span>
    </a>
    <div class="z-accordion-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </li>
  <li>
    <a class="z-accordion-title" href>
      Item 2
      <span class="z-accordion-icon">
        <z-icon icon="chevron-down"></z-icon>
      </span>
    </a>
    <div class="z-accordion-content">
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.
      </p>
    </div>
  </li>
  <li>
    <a class="z-accordion-title" href>
      Item 3
      <span class="z-accordion-icon">
        <z-icon icon="chevron-down"></z-icon>
      </span>
    </a>
    <div class="z-accordion-content">
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        proident.
      </p>
    </div>
  </li>
</ul>
```

## Set open items

To specify which items should be opened initially, add the `.z-open` class to the item. You can also use this to open multiple items. Just make sure to add the option `multiple: true` to the `data-z-accordion` attribute.

<span class="z-label z-label-primary">Note</span> Alternatively, you can open a single item by adding the `active: <index>` option to the `data-z-accordion` attribute, e.g. `active: 1` to show the second element (the index is zero-based). Note that this will overwrite the `z-open` class.

```html
<ul data-z-accordion>
  <li></li>
  <li class="z-open"></li>
  <li></li>
</ul>
```

```html
<ul class="z-accordion" data-z-accordion>
  <li>
    <a class="z-accordion-title" href>
      Item 1
      <span class="z-accordion-icon">
        <z-icon icon="chevron-down"></z-icon>
      </span>
    </a>
    <div class="z-accordion-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </li>
  <li class="z-open">
    <a class="z-accordion-title" href>
      Item 2
      <span class="z-accordion-icon">
        <z-icon icon="chevron-down"></z-icon>
      </span>
    </a>
    <div class="z-accordion-content">
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.
      </p>
    </div>
  </li>
  <li>
    <a class="z-accordion-title" href>
      Item 3
      <span class="z-accordion-icon">
        <z-icon icon="chevron-down"></z-icon>
      </span>
    </a>
    <div class="z-accordion-content">
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        proident.
      </p>
    </div>
  </li>
</ul>
```

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option        | Value   | Default                   | Description                                                                                                                                                                                              |
| ------------- | ------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`      | Number  | `false`                   | Index of the element to open initially.                                                                                                                                                                  |
| `animation`   | Boolean | `true`                    | Reveal item directly or with a transition.                                                                                                                                                               |
| `collapsible` | Boolean | `true`                    | Allow all items to be closed.                                                                                                                                                                            |
| `content`     | String  | `> .z-accordion-content` | The content selector, which selects the accordion content elements.                                                                                                                                      |
| `duration`    | Number  | `200`                     | Animation duration in milliseconds.                                                                                                                                                                      |
| `multiple`    | Boolean | `false`                   | Allow multiple open items.                                                                                                                                                                               |
| `targets`     | String  | `> *`                     | CSS selector of the element(s) to toggle.                                                                                                                                                                |
| `toggle`      | String  | `> .z-accordion-title`   | The toggle selector, which toggles accordion items.                                                                                                                                                      |
| `transition`  | String  | `ease`                    | The transition to use when revealing items. Use keyword for [easing functions](https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function#Keywords_for_common_timing-functions). |
| `offset`      | Number  | `0`                       | Pixel offset added to scroll top.                                                                                                                                                                        |

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```javascript
zUIkit.accordion(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name         | Description                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------- |
| `beforeshow` | Fires before an item is shown. Can prevent showing by calling `preventDefault()` on the event. |
| `show`       | Fires after an item is shown.                                                                  |
| `shown`      | Fires after the item's show animation has completed.                                           |
| `beforehide` | Fires before an item is hidden. Can prevent hiding by calling `preventDefault()` on the event. |
| `hide`       | Fires after an item's hide animation has started.                                              |
| `hidden`     | Fires after an item is hidden.                                                                 |

### Methods

The following methods are available for the component:

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

The Accordion component adheres to the [Accordion WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) and automatically sets the appropriate WAI-ARIA roles, states and properties.

- The _titles_ have an ID, the `button` role, the `aria-expanded` state and the `aria-controls` property set to the ID of the respective content.
- The _contents_ have an ID, the `region` role and the `aria-labelledby` property set to the ID of the respective title.

### Keyboard interaction

The Accordion component can be accessed through keyboard using the following keys.

- The <kbd>tab</kbd> or <kbd>shift+tab</kbd> keys navigate through accordion titles.
- The <kbd>enter</kbd> or <kbd>space</kbd> key toggles the content of the focused title.