# List

## Usage

Add `.z-list` to a `<ul>` or `<ol>` element to remove default spacing and list markers.

```html
<ul class="z-list">
  <li>List item 1</li>
  <li>List item 2</li>
</ul>
```

## Style type modifiers

Add one of the following classes to set the list item marker:

| Class             | Description                                      |
| ----------------- | ------------------------------------------------ |
| `.z-list-disc`    | Use a filled circle as a marker.                 |
| `.z-list-circle`  | Use a hollow circle as marker.                   |
| `.z-list-square`  | Use a filled square as marker                    |
| `.z-list-decimal` | Use decimal numbers as marker. Beginning with 1. |
| `.z-list-hyphen`  | Use a hyphen as marker                           |

```html
<ul class="z-list z-list-disc">
  <li>List item 1</li>
  <li>List item 2</li>
</ul>
```

## Divider modifier

Add `.z-list-divider` to separate list items with horizontal lines.

```html
<ul class="z-list z-list-divider">
  <li>List item 1</li>
  <li>List item 2</li>
</ul>
```

## Striped modifier

Add `.z-list-striped` for zebra-striping across list items.

```html
<ul class="z-list z-list-striped">
  <li>List item 1</li>
  <li>List item 2</li>
</ul>
```

## Accessibility

When using non-list elements such as `<div>`, apply `role="list"` to the container and `role="listitem"` to each item:

```html
<div class="z-list" role="list">
  <div role="listitem">List item 1</div>
  <div role="listitem">List item 2</div>
</div>
```
