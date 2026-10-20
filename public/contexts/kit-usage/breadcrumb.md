# Breadcrumb

## Usage

Add `.z-breadcrumb` to a `<ul>` element and use `<a>` elements inside `<li>` items. An active state is automatically applied to the last `<li>`. For non-linked items, use `<span>` instead of `<a>`, or add `.z-disabled` to `<li>` and omit `href` on `<a>`.

```html
<nav aria-label="Breadcrumb">
  <ul class="z-breadcrumb">
    <li><a href="#">Home</a></li>
    <li><a href="#">Linked Category</a></li>
    <li class="z-disabled"><a>Disabled Category</a></li>
    <li><span aria-current="page">Current Page</span></li>
  </ul>
</nav>
```

## Accessibility

To adhere to the WAI-ARIA Breadcrumb design pattern:

- Wrap the `.z-breadcrumb` list in a `<nav>` element with an `aria-label` describing the navigation.
- Set `aria-current="page"` on the last item if it represents the current page.
