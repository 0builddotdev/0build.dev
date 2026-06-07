# Button

## Usage

To apply this component, add the `.z-button` class and a modifier such as `.z-button-default` to an `<a>` or `<button>` element. Add the `disabled` attribute to a `<button>` element to disable the button.

```html
<a class="z-button z-button-default" href=""></a>

<button class="z-button z-button-default"></button>

<button class="z-button z-button-default" disabled></button>
```

```html
<div class="display-flex flex-wrap gap" style="--gap: 2">
  <a class="z-button z-button-default" href="#">Link</a>
  <button class="z-button z-button-default">Button</button>
  <button class="z-button z-button-default" disabled>Disabled</button>
</div>
```

## Style modifiers

There are several style modifiers available. Just add one of the following classes to apply a different look.

- `.z-button-default`
- `.z-button-ghost`
- `.z-button-primary`
- `.z-button-secondary`
- `.z-button-success`
- `.z-button-warning`
- `.z-button-info`
- `.z-button-danger`
- `.z-button-text`

```html
<button class="z-button z-button-primary"></button>
```

```html
<div class="display-flex flex-wrap items-center gap" style="--gap: 2">
  <button class="z-button z-button-default">Default</button>
  <button class="z-button z-button-ghost">Ghost</button>
  <button class="z-button z-button-primary">Primary</button>
  <button class="z-button z-button-secondary">Secondary</button>
  <button class="z-button z-button-success">Success</button>
  <button class="z-button z-button-warning">Warning</button>
  <button class="z-button z-button-info">Info</button>
  <button class="z-button z-button-danger">Danger</button>
  <button class="z-button z-button-text">Text</button>
</div>
```

## Customization

You can use CSS variables to customize this component in any way you prefer.

```html
<div class="gap display-flex flex-wrap items-center" style="--gap: 2">
  <button
    class="z-button"
    style="
      --z-button-bg: var(--color-purple-500);
      --z-button-color: white;
      --z-button-border: var(--color-purple-500);
      --z-button-hover-bg: var(--color-purple-600);
      --z-button-hover-bg-o: 100%;
      --z-button-hover-color: white;
    "
  >
    Custom Purple
  </button>
  <button
    class="z-button"
    style="
      --z-button-bg: var(--color-teal-500);
      --z-button-color: white;
      --z-button-border: var(--color-teal-500);
      --z-button-hover-bg: var(--color-teal-600);
      --z-button-hover-bg-o: 100%;
      --z-button-hover-color: white;
    "
  >
    Custom Teal
  </button>
  <button
    class="z-button"
    style="
      --z-button-bg: var(--color-pink-500);
      --z-button-color: white;
      --z-button-border: var(--color-pink-500);
      --z-button-hover-bg: var(--color-pink-600);
      --z-button-hover-bg-o: 100%;
      --z-button-hover-color: white;
    "
  >
    Custom Pink
  </button>
</div>
```

## Size modifiers

There are several size modifiers available. Just add one of the following classes to make the button smaller or larger.

| Class        | Description               |
| ------------ | ------------------------- |
| `.z-button-xsmall` | Applies extra small size. |
| `.z-button-small` | Applies small size.       |
| `.z-button-medium` | Applies medium size.      |
| `.z-button-large` | Applies large size.       |

```html
<div class="flex flex-wrap gap-2">
  <button class="z-button z-button-default z-button-xsmall">xs</button>
  <button class="z-button z-button-primary z-button-xsmall">xs</button>
  <button class="z-button z-button-secondary z-button-xsmall">xs</button>
</div>

<div class="mt display-flex flex-wrap gap" style="--mt: 4; --gap: 2">
  <button class="z-button z-button-default z-button-small">sm</button>
  <button class="z-button z-button-primary z-button-small">sm</button>
  <button class="z-button z-button-secondary z-button-small">sm</button>
</div>

<div class="mt display-flex flex-wrap gap" style="--mt: 4; --gap: 2">
  <button class="z-button z-button-default">md</button>
  <button class="z-button z-button-primary">md</button>
  <button class="z-button z-button-secondary">md</button>
</div>

<div class="mt display-flex flex-wrap gap" style="--mt: 4; --gap: 2">
  <button class="z-button z-button-default z-button-large">lg</button>
  <button class="z-button z-button-primary z-button-large">lg</button>
  <button class="z-button z-button-secondary z-button-large">lg</button>
</div>
```

## Width modifiers

You can use  utility classes alongside button classes and the it will follow its width.

```html
<div class="display-flex flex-col gap" style="--gap: 2">
  <button class="z-button z-button-default w" style="--w: 40">w-40</button>
  <button class="z-button z-button-primary w" style="--w: 44">w-44</button>
  <button class="z-button z-button-secondary w" style="--w: 48">w-48</button>
  <button class="z-button z-button-danger w" style="--w: 52">w-52</button>
  <button class="z-button z-button-destructive w-full">w-full</button>
</div>
```

## Icon

Use `.z-button-icon` class to create an icon button, which can be used for social icons or toolbars.

```html
<div class="display-flex gap-x" style="--gap-x: 2">
  <button class="z-button z-button-default z-button-icon">
    <z-icon icon="copy"></z-icon>
  </button>
  <button class="z-button z-button-default z-button-icon">
    <z-icon icon="file"></z-icon>
  </button>
  <button class="z-button z-button-default z-button-icon">
    <z-icon icon="trash"></z-icon>
  </button>
</div>
```

## Group

To create a button group, add the `.z-button-group` class to a `<div>` element around the buttons. That's it! No further markup is needed.

```html
<div>
  <div class="z-button-group">
    <button class="z-button z-button-secondary">Button</button>
    <button class="z-button z-button-secondary">Button</button>
    <button class="z-button z-button-secondary">Button</button>
  </div>
</div>

<div class="mt" style="--mt: 4">
  <div class="z-button-group">
    <button class="z-button z-button-primary">Button</button>
    <button class="z-button z-button-primary">Button</button>
    <button class="z-button z-button-primary">Button</button>
  </div>
</div>

<div class="mt" style="--mt: 4">
  <div class="z-button-group">
    <button class="z-button z-button-destructive">Button</button>
    <button class="z-button z-button-destructive">Button</button>
    <button class="z-button z-button-destructive">Button</button>
  </div>
</div>
```

## Button with dropdowns

A button can be used to trigger a dropdown menu from the [Dropdown component](/docs/latest/kit/dropdown).

```html
<!-- A button toggling a dropdown -->
<button class="z-button z-button-default" type="button"></button>
<div data-z-dropdown></div>
```

```html
<div class="z-inline">
  <button class="z-button z-button-default" type="button">Dropdown</button>
  <div class="z-drop z-dropdown min-w" style="--min-w: 52" data-z-dropdown>
    <ul class="z-nav z-dropdown-nav">
      <li class="z-active"><a href="#">Active</a></li>
      <li><a href="#">Item</a></li>
      <li class="z-nav-header">Header</li>
      <li><a href="#">Item</a></li>
      <li><a href="#">Item</a></li>
      <li class="z-nav-divider"></li>
      <li><a href="#">Item</a></li>
    </ul>
  </div>
</div>
```

## Loading

You can use utilities or the [Spinner component](/docs/latest/kit/spinner) to add a loading state.

```html
<div class="gap display-flex flex-wrap items-center" style="--gap: 2">
  <button class="z-button z-button-primary gap-x" style="--gap-x: 2">
    <z-icon class="size animate-spin" style="--size: 4" icon="loader"></z-icon>
    <span>Loading</span>
  </button>
  <button class="z-button gap-x" style="--gap-x: 2" disabled>
    <z-icon class="size animate-spin" style="--size: 4" icon="loader"></z-icon>
    <span>Processing</span>
  </button>
  <button class="z-button z-button-info gap-x" style="--gap-x: 2">
    <span data-z-spinner></span>
    <span>Logging in</span>
  </button>
</div>
```