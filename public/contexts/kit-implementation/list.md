# List

## Usage

To apply this component, add the `.z-list` class to an unordered or ordered list. The list will now display without any spacing or list-style.

```html
<ul class="z-list">
  <li></li>
  <li></li>
  <li></li>
</ul>
```

```html
<ul class="z-list">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>
```

## Style type modifiers

Add one of the following classes to set the marker of a list item.

| Class              | Description                                      |
| ------------------ | ------------------------------------------------ |
| `.z-list-disc`    | Use a filled circle as a marker.                 |
| `.z-list-circle`  | Use a hollow circle as marker.                   |
| `.z-list-square`  | Use a filled square as marker                    |
| `.z-list-decimal` | Use decimal numbers as marker. Beginning with 1. |
| `.z-list-hyphen`  | Use a hyphen as marker                           |

```html
<ul class="z-list z-list-disc">
  …
</ul>
```

```html
<div
  class="display-grid grid-cols gap sm:grid-cols md:grid-cols"
  style="--grid-cols: 2; --gap: 4; --sm-grid-cols: 3; --md-grid-cols: 5"
>
  <div>
    <h4 class="z-h4">Disc</h4>
    <ul class="z-list z-list-disc mt" style="--mt: 4">
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  </div>

  <div>
    <h4 class="z-h4">Circle</h4>
    <ul class="z-list z-list-circle mt" style="--mt: 4">
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  </div>

  <div>
    <h4 class="z-h4">Square</h4>
    <ul class="z-list z-list-square mt" style="--mt: 4">
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  </div>

  <div>
    <h4 class="z-h4">Decimal</h4>
    <ul class="z-list z-list-decimal mt" style="--mt: 4">
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  </div>

  <div>
    <h4 class="z-h4">Hyphen</h4>
    <ul class="z-list z-list-hyphen mt" style="--mt: 4">
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  </div>
</div>
```

## Divider modifier

Add the `.z-list-divider` class to separate list items with lines.

```html
<ul class="z-list z-list-divider">
  …
</ul>
```

```html
<ul class="z-list z-list-divider">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>
```

## Striped modifier

Add zebra-striping to a list using the `.z-list-striped` class.

```html
<ul class="z-list z-list-striped">
  …
</ul>
```

```html
<ul class="z-list z-list-striped">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>
```

## Accessibility

Set the appropriate WAI-ARIA roles, states and properties to the List component.

- If a `<div>` element is used, set the `list` role to the list, and the `listitem` role to the list items.

```html
<div class="z-list" role="list">
  <div role="listitem">List item 1</div>
  <div role="listitem">List item 2</div>
  <div role="listitem">List item 3</div>
</div>
```