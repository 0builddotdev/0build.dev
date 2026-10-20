# Avatar

## Usage

Wrap an `<img>` or `.z-avatar-text` inside `.z-avatar`. Add `.z-avatar-rounded` for a circular avatar.

```html
<div class="z-avatar">
  <img src="avatar.jpg" alt="User" />
</div>
<div class="z-avatar">
  <div class="z-avatar-text">JD</div>
</div>
<div class="z-avatar z-avatar-rounded">
  <img src="avatar.jpg" alt="User" />
</div>
<div class="z-avatar z-avatar-rounded">
  <div class="z-avatar-text">AB</div>
</div>
```

## Bordered

Add `.z-avatar-bordered` to render a border around the avatar.

```html
<div class="z-avatar z-avatar-bordered">
  <img src="avatar.jpg" alt="User" />
</div>
<div class="z-avatar z-avatar-rounded z-avatar-bordered">
  <div class="z-avatar-text">EF</div>
</div>
```

## Dot indicator

Add `.z-avatar-dot` to display a status/notification dot, and optionally position it with one of the following classes:

- `.z-avatar-dot-top`
- `.z-avatar-dot-top-left`
- `.z-avatar-dot-top-right`
- `.z-avatar-dot-right`
- `.z-avatar-dot-bottom`
- `.z-avatar-dot-bottom-left`
- `.z-avatar-dot-bottom-right`
- `.z-avatar-dot-left`

```html
<div class="z-avatar z-avatar-dot z-avatar-dot-top-right">
  <img src="avatar.jpg" alt="Top Right" />
</div>
<div class="z-avatar z-avatar-rounded z-avatar-dot z-avatar-dot-bottom-right">
  <img src="avatar.jpg" alt="Bottom Right" />
</div>
```

### Style modifiers

Add one of the following classes to style the dot indicator:

- `.z-avatar-dot-danger`
- `.z-avatar-dot-warning`
- `.z-avatar-dot-success`
- `.z-avatar-dot-info`
- `.z-avatar-dot-muted`

```html
<div class="z-avatar z-avatar-dot z-avatar-dot-danger">
  <img src="avatar.jpg" alt="Danger" />
</div>
```

### Customizing indicator size

Customize the dot size using the `--z-avatar-dot-size` CSS variable:

```html
<div class="z-avatar z-avatar-dot" style="--z-avatar-dot-size: 0.75rem">
  <img src="avatar.jpg" alt="Small dot" />
</div>
<div class="z-avatar z-avatar-dot" style="--z-avatar-dot-size: 1.25rem">
  <img src="avatar.jpg" alt="Large dot" />
</div>
```

## Stacked

Stack multiple avatars using flex utilities and negative horizontal spacing (`space-x` with `--space-x: -4`).

```html
<div class="display-flex items-center space-x" style="--space-x: -4">
  <div class="z-avatar z-avatar-rounded">
    <div class="z-avatar-image">
      <img src="avatar1.jpg" alt="" />
    </div>
  </div>
  <div class="z-avatar z-avatar-rounded">
    <div class="z-avatar-image">
      <img src="avatar2.jpg" alt="" />
    </div>
  </div>
  <div
    class="z-avatar z-avatar-rounded bg color"
    style="--bg: var(--z-primary); --color: var(--z-primary-f)"
  >
    <div class="z-avatar-text">+99</div>
  </div>
</div>
```
