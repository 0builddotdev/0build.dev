# Pagination

## Usage

| Class           | Description                                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `.z-pagination` | Add this class to a `<ul>` element to define the Pagination component. Use `<a>` elements as pagination items within the list. |
| `.z-active`     | Add this class to a list item to apply an active state and use a `<span>` instead of an `<a>` element.                         |
| `.z-disabled`   | Add this class to a list item to apply a disabled state and use a `<span>` instead of an `<a>` element.                        |

Add `data-z-pagination-previous` or `data-z-pagination-next` to a `<span>` inside a pagination item to render previous/next icons.

```html
<nav aria-label="Pagination">
  <ul class="z-pagination z-pagination-default">
    <li>
      <a href="#"><span data-z-pagination-previous></span></a>
    </li>
    <li><a href="#">1</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li class="z-active"><span aria-current="page">7</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#"><span data-z-pagination-next></span></a>
    </li>
  </ul>
</nav>
```

## Style modifiers

Add one of the following classes to apply a color/style variant:

- `.z-pagination-default`
- `.z-pagination-ghost`
- `.z-pagination-primary`
- `.z-pagination-secondary`
- `.z-pagination-success`
- `.z-pagination-warning`
- `.z-pagination-info`
- `.z-pagination-danger`

```html
<ul class="z-pagination z-pagination-primary">
  <li><a href="#"><span data-z-pagination-previous></span></a></li>
  <li class="z-active"><span aria-current="page">1</span></li>
  <li><a href="#">2</a></li>
  <li><a href="#"><span data-z-pagination-next></span></a></li>
</ul>
```

## Size modifiers

| Class                  | Description               |
| ---------------------- | ------------------------- |
| `.z-pagination-xsmall` | Applies extra small size. |
| `.z-pagination-small`  | Applies small size.       |
| `.z-pagination-medium` | Applies medium size.      |
| `.z-pagination-large`  | Applies large size.       |

```html
<ul class="z-pagination z-pagination-small z-pagination-default">
  ...
</ul>
```

## Alignment

Use Flex utility classes (e.g. `justify-center`, `justify-around`) on `.z-pagination` to align items.

```html
<ul class="z-pagination z-pagination-default justify-center">
  ...
</ul>
```

## Accessibility

Adheres to the [button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/):

- The _prev/next pagination items_ have the `button` role and the `aria-label` property.

### Internationalization

Learn more about [translating components](/docs/latest/kit/accessibility#internationalization).

| Key     | Default              | Description             |
| ------- | -------------------- | ----------------------- |
| `label` | `Next/Previous page` | `aria-label` attribute. |
