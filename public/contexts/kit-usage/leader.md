# Leader

Visually connects content across horizontal spaces with a repeating character pattern (e.g., menus, tables of contents).

## Usage

Add `data-z-leader` to the left element to fill the remaining space between it and its adjacent sibling with dots.

```html
<div class="display-flex gap-x" style="--gap-x: 2">
  <div class="flex-1" data-z-leader>Item</div>
  <div>$20.90</div>
</div>
```

## Fill character

Set `fill: STRING` to use a custom repeating character.

```html
<div data-z-leader="fill: -"></div>
```

**Note:** The default fill character can be set via CSS or CSS variable:

```css
.z-leader-fill-content::before {
  content: ".";
}

:root {
  --z-leader-fill-content: ".";
}
```

## Responsive

Set the `media` option (pixel width, breakpoint like `@m`, or media query) to only display the leader at and above that viewport width.

```html
<div data-z-leader="media: @m"></div>
```

## Component options

Separate multiple options with a semicolon.

| Option  | Value                   | Default | Description                                                                                                                                                |
| ------- | ----------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fill`  | String                  |         | Optional fill character.                                                                                                                                   |
| `media` | Boolean, Number, String | `false` | Condition for the space filling - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)). |

## JavaScript

### Initialization

```javascript
zUIkit.leader(element, options);
```
