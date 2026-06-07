# Dotnav

## Usage

To create a navigation with dots, use the following classes. This component is built with Flexbox. So to align a dotnav, you can use utility classes.

| Class         | Description                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------- |
| `.z-dotnav`  | Add this class to a `<ul>` element to define the Dotnav component. Use `<a>` elements as nav items within the list. |
| `.z-active ` | Add this class to a list item to apply an active state.                                                             |

```html
<ul class="z-dotnav">
  <li class="z-active"><a href=""></a></li>
  <li><a href=""></a></li>
</ul>
```

```html
<ul class="z-dotnav">
  <li class="z-active"><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
  <li><a>Item 4</a></li>
  <li><a>Item 5</a></li>
</ul>
```

## Vertical alignment

The dotnav can also be displayed vertically. Just add the `.z-dotnav-vertical` modifier.

```html
<ul class="z-dotnav z-dotnav-vertical">
  ...
</ul>
```

```html
<ul class="z-dotnav z-dotnav-vertical">
  <li class="z-active"><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
  <li><a>Item 4</a></li>
  <li><a>Item 5</a></li>
</ul>
```