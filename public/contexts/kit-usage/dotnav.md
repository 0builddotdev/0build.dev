# Dotnav

## Usage

Create a Flexbox-based dot navigation using the following classes. Use utility classes for alignment.

| Class        | Description                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------- |
| `.z-dotnav`  | Add this class to a `<ul>` element to define the Dotnav component. Use `<a>` elements as nav items within the list. |
| `.z-active ` | Add this class to a list item to apply an active state.                                                             |

```html
<ul class="z-dotnav">
  <li class="z-active"><a href="">Item 1</a></li>
  <li><a href="">Item 2</a></li>
</ul>
```

## Vertical alignment

Add the `.z-dotnav-vertical` modifier to display the dotnav vertically.

```html
<ul class="z-dotnav z-dotnav-vertical">
  <li class="z-active"><a href="">Item 1</a></li>
  <li><a href="">Item 2</a></li>
</ul>
```
