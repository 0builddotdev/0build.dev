# Subnav

## Usage

Use the following classes to create a horizontal subnavigation. To add non-clickable items, use a `<span>` instead of `<a>`, or add `.z-disabled` to the `<li>` and remove the `href` attribute from `<a>`.

| Class       | Description                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------- |
| `.z-subnav` | Add this class to a `<ul>` element to define the Subnav component. Use `<a>` elements as nav items within the list. |
| `.z-active` | Add this class to a list item to apply an active state.                                                             |

```html
<ul class="z-subnav">
  <li class="z-active"><a href="#">Active</a></li>
  <li><a href="#">Item</a></li>
  <li><span>Disabled</span></li>
</ul>
```

## Style modifiers

Add `.z-subnav-primary` for a pill-styled primary subnav:

- `.z-subnav-primary`

```html
<ul class="z-subnav z-subnav-primary">
  <li class="z-active"><a href="#">Active</a></li>
  <li><a href="#">Item</a></li>
  <li><span class="opacity-50">Disabled</span></li>
</ul>
```

### Customization

Customize the subnav appearance and dimensions using CSS variables:

```html
<ul
  class="z-subnav"
  style="
    --z-subnav-item-active-background: var(--color-teal-500);
    --z-subnav-item-active-background-o: 100%;
    --z-subnav-item-active-color: white;
    --z-subnav-item-active-color-o: 100%;
    --z-subnav-item-active-hover-background: var(--color-teal-600);
    --z-subnav-item-active-hover-color: var(--color-teal-50);
    --z-subnav-item-active-hover-background-o: 100%;
  "
>
  <li class="z-active"><a href="#">Custom</a></li>
  <li><a href="#">Teal</a></li>
</ul>

<ul
  class="z-subnav z-subnav-primary mt"
  style="
    --z-subnav-item-height: 2.5rem;
    --z-subnav-item-padding: 0 1.5rem;
    --mt: 4;
  "
>
  <li class="z-active"><a href="#">Larger</a></li>
  <li><a href="#">Pills</a></li>
</ul>
```

## Subnav and Dropdown

Combine a subnav item with the [Dropdown component](/docs/latest/kit/dropdown).

```html
<ul class="z-subnav z-subnav-primary">
  <li class="z-active"><a href="#">Active</a></li>
  <li>
    <a href>
      <span class="mr" style="--mr: 2">More</span>
      <z-icon icon="chevron-down"></z-icon>
    </a>
    <div class="z-drop min-w" style="--min-w: 52" data-z-dropdown="mode: click">
      <ul class="z-nav z-dropdown-nav">
        <li class="z-active"><a href="#">Active</a></li>
        <li><a href="#">Item</a></li>
        <li class="z-nav-header">Header</li>
        <li class="z-nav-divider"></li>
        <li><a href="#">Item</a></li>
      </ul>
    </div>
  </li>
</ul>
```
