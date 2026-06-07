# Avatar

## Usage

To get started with the Avatar component, simply wrap your image directly inside the `.z-avatar` class or `.z-avatar-text` if it's just a text or initials.

```html
<div class="gap-x display-flex items-center" style="--gap-x: 4">
  <div class="z-avatar">
    <img src="https://i.pravatar.cc/150?img=1" alt="User 1" />
  </div>
  <div class="z-avatar">
    <div class="z-avatar-text">JD</div>
  </div>
  <div class="z-avatar z-avatar-rounded">
    <img src="https://i.pravatar.cc/150?img=2" alt="User 2" />
  </div>
  <div class="z-avatar z-avatar-rounded">
    <div class="z-avatar-text">AB</div>
  </div>
</div>
```

## Bordered

To add a border around your avatar, include the `.z-avatar-bordered` class along with any other modifiers you like.

```html
<div class="gap-x display-flex items-center" style="--gap-x: 4">
  <div class="z-avatar z-avatar-bordered">
    <img src="https://i.pravatar.cc/150?img=3" alt="User 3" />
  </div>
  <div class="z-avatar z-avatar-rounded z-avatar-bordered">
    <img src="https://i.pravatar.cc/150?img=4" alt="User 4" />
  </div>
  <div class="z-avatar z-avatar-bordered">
    <div class="z-avatar-text">CD</div>
  </div>
  <div class="z-avatar z-avatar-rounded z-avatar-bordered">
    <div class="z-avatar-text">EF</div>
  </div>
</div>
```

## Dot indicator

To indicate status or notifications, you can add a small dot using the `.z-avatar-dot` class. Or, choose one of the following classes to reposition the dot indicator:

- `.z-avatar-dot-top`
- `.z-avatar-dot-top-left`
- `.z-avatar-dot-top-right`
- `.z-avatar-dot-right`
- `.z-avatar-dot-bottom`
- `.z-avatar-dot-bottom-left`
- `.z-avatar-dot-bottom-right`
- `.z-avatar-dot-left`

```html
<div class="gap-x display-flex flex-wrap items-center" style="--gap-x: 4">
  <div>
    <div class="z-avatar z-avatar-dot z-avatar-dot-top-left">
      <img src="https://i.pravatar.cc/150?img=5" alt="Top Left" />
    </div>
  </div>
  <div>
    <div class="z-avatar z-avatar-dot z-avatar-dot-top">
      <img src="https://i.pravatar.cc/150?img=6" alt="Top" />
    </div>
  </div>
  <div>
    <div class="z-avatar z-avatar-dot z-avatar-dot-top-right">
      <img src="https://i.pravatar.cc/150?img=7" alt="Top Right" />
    </div>
  </div>
  <div>
    <div class="z-avatar z-avatar-dot z-avatar-dot-right">
      <img src="https://i.pravatar.cc/150?img=8" alt="Right" />
    </div>
  </div>
  <div>
    <div class="z-avatar z-avatar-dot z-avatar-dot-bottom-right">
      <img src="https://i.pravatar.cc/150?img=9" alt="Bottom Right" />
    </div>
  </div>
  <div>
    <div class="z-avatar z-avatar-dot z-avatar-dot-bottom">
      <img src="https://i.pravatar.cc/150?img=10" alt="Bottom" />
    </div>
  </div>
  <div>
    <div class="z-avatar z-avatar-dot z-avatar-dot-bottom-left">
      <img src="https://i.pravatar.cc/150?img=11" alt="Bottom Left" />
    </div>
  </div>
  <div>
    <div class="z-avatar z-avatar-dot z-avatar-dot-left">
      <img src="https://i.pravatar.cc/150?img=12" alt="Left" />
    </div>
  </div>
</div>

<div
  class="mt gap-x display-flex flex-wrap items-center"
  style="--mt: 4; --gap-x: 4"
>
  <div>
    <div class="z-avatar z-avatar-rounded z-avatar-dot z-avatar-dot-top-left">
      <img src="https://i.pravatar.cc/150?img=13" alt="Top Left" />
    </div>
  </div>
  <div>
    <div class="z-avatar z-avatar-rounded z-avatar-dot z-avatar-dot-top">
      <img src="https://i.pravatar.cc/150?img=14" alt="Top" />
    </div>
  </div>
  <div>
    <div class="z-avatar z-avatar-rounded z-avatar-dot z-avatar-dot-top-right">
      <img src="https://i.pravatar.cc/150?img=15" alt="Top Right" />
    </div>
  </div>
  <div>
    <div class="z-avatar z-avatar-rounded z-avatar-dot z-avatar-dot-right">
      <img src="https://i.pravatar.cc/150?img=16" alt="Right" />
    </div>
  </div>
  <div>
    <div
      class="z-avatar z-avatar-rounded z-avatar-dot z-avatar-dot-bottom-right"
    >
      <img src="https://i.pravatar.cc/150?img=17" alt="Bottom Right" />
    </div>
  </div>
  <div>
    <div class="z-avatar z-avatar-rounded z-avatar-dot z-avatar-dot-bottom">
      <img src="https://i.pravatar.cc/150?img=18" alt="Bottom" />
    </div>
  </div>
  <div>
    <div
      class="z-avatar z-avatar-rounded z-avatar-dot z-avatar-dot-bottom-left"
    >
      <img src="https://i.pravatar.cc/150?img=19" alt="Bottom Left" />
    </div>
  </div>
  <div>
    <div class="z-avatar z-avatar-rounded z-avatar-dot z-avatar-dot-left">
      <img src="https://i.pravatar.cc/150?img=20" alt="Left" />
    </div>
  </div>
</div>
```

### Style modifiers

There are several style modifiers available. Just add one of the following classes to apply a different look.

- `.z-avatar-dot-danger`
- `.z-avatar-dot-warning`
- `.z-avatar-dot-success`
- `.z-avatar-dot-info`
- `.z-avatar-dot-muted`

```html
<div class="gap-x display-flex flex-wrap items-center" style="--gap-x: 4">
  <div>
    <div class="z-avatar z-avatar-dot z-avatar-dot-danger">
      <img src="https://i.pravatar.cc/150?img=22" alt="Danger" />
    </div>
  </div>
  <div>
    <div class="z-avatar z-avatar-dot z-avatar-dot-warning">
      <img src="https://i.pravatar.cc/150?img=23" alt="Warning" />
    </div>
  </div>
  <div>
    <div class="z-avatar z-avatar-dot z-avatar-dot-success">
      <img src="https://i.pravatar.cc/150?img=24" alt="Success" />
    </div>
  </div>
  <div>
    <div class="z-avatar z-avatar-dot z-avatar-dot-info">
      <img src="https://i.pravatar.cc/150?img=25" alt="Info" />
    </div>
  </div>
  <div>
    <div class="z-avatar z-avatar-dot z-avatar-dot-muted">
      <img src="https://i.pravatar.cc/150?img=26" alt="Muted" />
    </div>
  </div>
</div>
```

### Customizing indicator size

You can also customize the size of indicator if you want.

```html
<div class="mt gap-x display-flex items-center" style="--mt: 4; --gap-x: 4">
  <div class="z-avatar z-avatar-dot" style="--z-avatar-dot-size: 0.75rem">
    <img src="https://i.pravatar.cc/150?img=33" alt="Small dot" />
  </div>
  <div class="z-avatar z-avatar-dot" style="--z-avatar-dot-size: 1.25rem">
    <img src="https://i.pravatar.cc/150?img=35" alt="Large dot" />
  </div>
</div>
```

## Stacked

Stack multiple avatars together to represent a group or team. Use flex utilities and negative spacing to achieve the overlapping effect.

```html
<div
  class="display-flex items-center justify-center space-x"
  style="--space-x: -4"
>
  <div class="z-avatar z-avatar-rounded">
    <div class="z-avatar-image">
      <img src="https://i.pravatar.cc/150?img=36" alt="" />
    </div>
  </div>

  <div class="z-avatar z-avatar-rounded">
    <div class="z-avatar-image">
      <img src="https://i.pravatar.cc/150?img=37" alt="" />
    </div>
  </div>

  <div class="z-avatar z-avatar-rounded">
    <div class="z-avatar-image">
      <img src="https://i.pravatar.cc/150?img=38" alt="" />
    </div>
  </div>

  <div class="z-avatar z-avatar-rounded">
    <div class="z-avatar-image">
      <img src="https://i.pravatar.cc/150?img=39" alt="" />
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