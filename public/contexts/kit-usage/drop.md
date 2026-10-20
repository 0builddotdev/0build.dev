# Drop

The Drop component is aim-aware: it stays open while the mouse pointer moves towards the drop (with an additional delay if the pointer briefly moves away) and closes immediately if another menu item is hovered.

## Usage

Add the `data-z-drop` attribute to a block element following a toggle element. Wrap the toggle and drop in a `.z-inline` container to group them.

**Note:** The Drop component has no default styling. Use `.z-drop` with another component like [Card](/docs/latest/kit/card) for visualization.

```html
<div class="z-inline">
  <button class="z-button z-button-default" type="button">Hover, Click</button>
  <div class="z-card z-card-body z-drop" data-z-drop>Content</div>
</div>
```

## Mode

By default, the drop is toggled on hover and click. Set the `mode` option to change the toggle behavior.

| Mode          | Description                     |
| ------------- | ------------------------------- |
| `click,hover` | Toggle drop on click and hover. |
| `click`       | Toggle drop on click only.      |
| `hover`       | Toggle drop on hover only.      |

```html
<div data-z-drop="mode: click"></div>
```

## Parent icon

Add the `data-z-drop-parent-icon` attribute to a `<span>` element to create a parent icon.

```html
<button type="button">Parent <span data-z-drop-parent-icon></span></button>
<div data-z-drop="mode: click"></div>
```

## Position

Set the `pos` option on `data-z-drop` to change where the drop is positioned (first part) and aligned (second part) relative to the toggle.

| Position        | Description                                                                |
| --------------- | -------------------------------------------------------------------------- |
| `top-left`      | Positions the drop above the toggle and aligns it to the left.             |
| `top-center`    | Positions the drop above the toggle and aligns it to the center.           |
| `top-right`     | Positions the drop above the toggle and aligns it to the right.            |
| `bottom-left`   | Positions the drop below the toggle and aligns it to the left.             |
| `bottom-center` | Positions the drop below the toggle and aligns it to the center.           |
| `bottom-right`  | Positions the drop below the toggle and aligns it to the right.            |
| `left-top`      | Positions the drop to the left of the toggle and aligns it to the top.     |
| `left-center`   | Positions the drop to the left of the toggle and aligns it to the center.  |
| `left-bottom`   | Positions the drop to the left of the toggle and aligns it to the bottom.  |
| `right-top`     | Positions the drop to the right of the toggle and aligns it to the top.    |
| `right-center`  | Positions the drop to the right of the toggle and aligns it to the center. |
| `right-bottom`  | Positions the drop to the right of the toggle and aligns it to the bottom. |

```html
<div data-z-drop="pos: top-left"></div>
```

## Boundary

By default, the drop flips and shifts if it exceeds the viewport or nearest scrolling ancestor. Set `boundary: SELECTOR` (or single-axis `boundary-x: SELECTOR` / `boundary-y: SELECTOR`) on `data-z-drop` to constrain it to a custom element.

```html
<div class="my-class">
  <button type="button"></button>
  <div data-z-drop="boundary: !.my-class"></div>
</div>
```

## Shift and flip

Add `shift: false` or `flip: false` to `data-z-drop` to disable automatic shifting and flipping.

```html
<div data-z-drop="shift: false; flip: false"></div>
```

## Auto update

Add `auto-update: false` to `data-z-drop` to disable dynamic repositioning on scroll (positions only once when opened).

```html
<div data-z-drop="auto-update: false"></div>
```

## Target

Align the drop to a different element instead of its toggle using `target: SELECTOR` (or `target-x: SELECTOR` / `target-y: SELECTOR` for a single axis).

```html
<div class="my-class">
  <button type="button"></button>
  <div data-z-drop="target: !.my-class"></div>
</div>
```

## Inset

Position the drop inside its target by adding `inset: true` (use together with `target` so it does not cover the toggle).

```html
<div data-z-drop="target: .my-class; inset: true"></div>
```

## Stretch

Stretch the drop to fill its closest scrolling ancestor (or defined `boundary`) with `stretch: true`, or on a single axis with `stretch: x` or `stretch: y`.

```html
<div data-z-drop="stretch: true"></div>
```

## Animation

Apply [Animation component](/docs/latest/kit/animation) classes via `animation: z-animation-*`, set `duration` in ms, and set `animate-out: true` to animate when closing.

```html
<div data-z-drop="animation: z-animation-slide-top-small; duration: 1000; animate-out: true"></div>
```

Drop also supports `slide-*` (slides drop and content) and `reveal-*` (static content revealed from direction) animations:

| Animation       | Description                       |
| --------------- | --------------------------------- |
| `slide-top`     | Slides the drop from the top.     |
| `slide-bottom`  | Slides the drop from the bottom.  |
| `slide-left`    | Slides the drop from the left.    |
| `slide-right`   | Slides the drop from the right.   |
| `reveal-top`    | Reveals the drop from the top.    |
| `reveal-bottom` | Reveals the drop from the bottom. |
| `reveal-left`   | Reveals the drop from the left.   |
| `reveal-right`  | Reveals the drop from the right.  |

```html
<div data-z-drop="animation: slide-top; animate-out: true"></div>
```

## Offset

Define a custom offset in pixels between the drop and its toggle using the `offset` option.

```html
<div data-z-drop="offset: 80"></div>
```

## Component options

Options can be applied to the component attribute, separated by a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option            | Value                 | Default            | Description                                                                                              |
| ----------------- | --------------------- | ------------------ | -------------------------------------------------------------------------------------------------------- |
| `toggle`          | CSS selector          | `- *`              | CSS selector for the element to be used as toggle. By default, the preceding element.                    |
| `pos`             | String                | `bottom-left`      | Drop position.                                                                                           |
| `stretch`         | Boolean, String       | `false`            | Stretch drop on both (true) or given axis (`x`, `y`).                                                    |
| `mode`            | String                | `click, hover`     | Comma-separated list of drop trigger behavior modes (`click`, `hover`).                                  |
| `delay-show`      | Number                | `0`                | Delay time in hover mode before a drop is shown in ms.                                                   |
| `delay-hide`      | Number                | `800`              | Delay time in hover mode before a drop is hidden in ms.                                                  |
| `auto-update`     | Boolean               | `true`             | Disable dynamic positioning while scrolling by setting this option to `false`.                           |
| `boundary`        | CSS selector          | `false`            | The area the drop can't exceed causing it to flip and shift. By default, the nearest scrolling ancestor. |
| `boundary-x`      | CSS selector          | `false`            | The area on the x-axis the drop can't exceed causing it to flip and shift.                               |
| `boundary-y`      | CSS selector          | `false`            | The area on the y-axis the drop can't exceed causing it to flip and shift.                               |
| `target`          | Boolean, CSS selector | `false`            | The element the drop is positioned to (`true` for window).                                               |
| `target-x`        | Boolean, CSS selector | `false`            | The element's X axis the drop is positioned to (`true` for window).                                      |
| `target-y`        | Boolean, CSS selector | `false`            | The element's Y axis the drop is positioned to (`true` for window).                                      |
| `inset`           | Boolean               | `false`            | Position inside its target.                                                                              |
| `flip`            | Boolean               | `true`             | Flip the drop along the main axis if it overflows the boundary.                                          |
| `shift`           | Boolean               | `true`             | Shift the drop along the cross axis if it overflows the boundary.                                        |
| `offset`          | Number                | `0`                | The drop offset.                                                                                         |
| `animation`       | String                | `z-animation-fade` | Space-separated names of animations. Comma-separated for animation out.                                  |
| `animate-out`     | Boolean               | `false`            | Use animation when closing the drop.                                                                     |
| `bg-scroll`       | Boolean               | `true`             | Allow background scrolling while drop is opened.                                                         |
| `close-on-scroll` | Boolean               | `false`            | Close the drop on scrolling a parent scroll container.                                                   |
| `duration`        | Number                | `200`              | The animation duration.                                                                                  |
| `container`       | Boolean               | `false`            | Define a target container via a selector to specify where the drop should be appended in the DOM.        |

`pos` is the _Primary_ option, and its key may be omitted if it's the only option in the attribute value.

```html
<span data-z-drop="top-left"></span>
```

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```javascript
zUIkit.drop(element, options);
```

### Events

| Name         | Description                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------- |
| `toggle`     | Fires before an item is toggled.                                                               |
| `beforeshow` | Fires before an item is shown. Can prevent showing by calling `preventDefault()` on the event. |
| `show`       | Fires after an item is shown.                                                                  |
| `shown`      | Fires after the item's show animation has completed.                                           |
| `beforehide` | Fires before an item is hidden. Can prevent hiding by calling `preventDefault()` on the event. |
| `hide`       | Fires before an item is hidden.                                                                |
| `hidden`     | Fires after an item is hidden.                                                                 |
| `stack`      | Fires when the `drop-stack`class is applied.                                                   |

### Methods

#### Show

```javascript
zUIkit.drop(element).show();
```

Shows the drop.

#### Hide

```javascript
zUIkit.drop(element).hide(delay);
```

Hides the drop.

| Name    | Type    | Default | Description            |
| ------- | ------- | ------- | ---------------------- |
| `delay` | Boolean | true    | Delay hiding the drop. |

## Accessibility

Adheres to the [Menu Button WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubutton/) and automatically sets WAI-ARIA roles, states, and properties:

- The _toggle_ has the `button` role, the `aria-expanded` state, and the `aria-haspopup` property.

### Keyboard interaction

- <kbd>enter</kbd> or <kbd>space</kbd>: Opens and closes the drop.
- <kbd>esc</kbd>: Closes the drop even if focus has moved to another element.
