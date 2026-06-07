# Pagination

## Usage

The Pagination component consists of button-like styled links, that are aligned side by side in a horizontal list.

| Class            | Description                                                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `.z-pagination` | Add this class to a `<ul>` element to define the Pagination component. Use `<a>` elements as pagination items within the list. |
| `.z-active`     | Add this class to a list item to apply an active state and use a `<span>` instead of an `<a>` element.                         |
| `.z-disabled`   | Add this class to a list item to apply a disabled state and use a `<span>` instead of an `<a>` element.                        |

To add an icon, just add the `data-z-pagination-previous` or `data-z-pagination-next` attribute to a `<span>` element inside a pagination item.

```html
<nav>
  <ul class="z-pagination z-pagination-default">
    <li>
      <a href="#">
        <span class="mr-2" data-z-pagination-previous></span>
        Previous
      </a>
    </li>
    <li>
      <a href="#">Next <span class="ml-2" data-z-pagination-next></span></a>
    </li>
  </ul>
</nav>

<nav class="mt" style="--mt: 4" aria-label="Pagination">
  <ul class="z-pagination z-pagination-default">
    <li>
      <a href="#">
        <span data-z-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="z-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-z-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>
```

## Style modifiers

There are several style modifiers available. Just add one of the following classes to apply a different look.

- `.z-pagination-default`
- `.z-pagination-ghost`
- `.z-pagination-primary`
- `.z-pagination-secondary`
- `.z-pagination-success`
- `.z-pagination-warning`
- `.z-pagination-info`
- `.z-pagination-danger`

```html
<nav aria-label="Pagination">
  <ul class="z-pagination z-pagination-default">
    <li>
      <a href="#">
        <span data-z-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="z-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-z-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>

<nav class="mt" style="--mt: 4" aria-label="Pagination">
  <ul class="z-pagination z-pagination-primary">
    <li>
      <a href="#">
        <span data-z-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="z-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-z-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>

<nav class="mt" style="--mt: 4" aria-label="Pagination">
  <ul class="z-pagination z-pagination-secondary">
    <li>
      <a href="#">
        <span data-z-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="z-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-z-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>

<nav class="mt" style="--mt: 4" aria-label="Pagination">
  <ul class="z-pagination z-pagination-danger">
    <li>
      <a href="#">
        <span data-z-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="z-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-z-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>

<nav class="mt" style="--mt: 4" aria-label="Pagination">
  <ul class="z-pagination z-pagination-info">
    <li>
      <a href="#">
        <span data-z-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="z-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-z-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>

<nav class="mt" style="--mt: 4" aria-label="Pagination">
  <ul class="z-pagination z-pagination-success">
    <li>
      <a href="#">
        <span data-z-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="z-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-z-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>

<nav class="mt" style="--mt: 4" aria-label="Pagination">
  <ul class="z-pagination z-pagination-warning">
    <li>
      <a href="#">
        <span data-z-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="z-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-z-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>

<nav class="mt" style="--mt: 4" aria-label="Pagination">
  <ul class="z-pagination z-pagination-ghost">
    <li>
      <a href="#">
        <span data-z-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="z-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-z-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>
```

## Size modifiers

There are several size modifiers available. Just add one of the following classes to make the pagination smaller or larger.

| Class                   | Description               |
| ----------------------- | ------------------------- |
| `.z-pagination-xsmall` | Applies extra small size. |
| `.z-pagination-small`  | Applies small size.       |
| `.z-pagination-medium` | Applies medium size.      |
| `.z-pagination-large`  | Applies large size.       |

```html
<nav aria-label="Pagination">
  <ul class="z-pagination z-pagination-xsmall z-pagination-default">
    <li>
      <a href="#">
        <span data-z-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="z-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-z-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>

<nav aria-label="Pagination">
  <ul
    class="z-pagination z-pagination-small z-pagination-default mt"
    style="--mt: 4"
  >
    <li>
      <a href="#">
        <span data-z-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="z-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-z-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>

<nav aria-label="Pagination">
  <ul
    class="z-pagination z-pagination-medium z-pagination-default mt"
    style="--mt: 4"
  >
    <li>
      <a href="#">
        <span data-z-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="z-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-z-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>

<nav aria-label="Pagination">
  <ul
    class="z-pagination z-pagination-large z-pagination-default mt"
    style="--mt: 4"
  >
    <li>
      <a href="#">
        <span data-z-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="z-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-z-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>
```

## Alignment

The Pagination component utilizes flexbox, so navigations can easily be aligned with Flex utility classes.

```html
<ul class="z-pagination justify-center">
  ...
</ul>
```

```html
<nav aria-label="Pagination">
  <ul class="z-pagination z-pagination-default justify-center">
    <li>
      <a href="#">
        <span data-z-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="z-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="z-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-z-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>

<nav>
  <ul
    class="z-pagination z-pagination-default mt justify-around"
    style="--mt: 4"
  >
    <li>
      <a href="#">
        <span class="mr-2" data-z-pagination-previous></span>
        Previous
      </a>
    </li>
    <li>
      <a href="#">Next <span class="ml-2" data-z-pagination-next></span></a>
    </li>
  </ul>
</nav>
```

## Accessibility

The previous/next pagination adheres to the [button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/) and automatically sets the appropriate WAI-ARIA roles, states and properties.

- The _prev/next pagination items_ have the `button` role and the `aria-label` property.

### Internationalization

The Pagination component uses the following translation strings. Learn more about [translating components](/docs/latest/kit/accessibility#internationalization).

| Key     | Default              | Description             |
| ------- | -------------------- | ----------------------- |
| `label` | `Next/Previous page` | `aria-label` attribute. |