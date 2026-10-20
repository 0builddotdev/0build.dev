# Button

## Usage

Add `.z-button` and a style modifier such as `.z-button-default` to an `<a>` or `<button>` element. Add the `disabled` attribute to disable a `<button>`.

```html
<a class="z-button z-button-default" href="#">Link</a>
<button class="z-button z-button-default">Button</button>
<button class="z-button z-button-default" disabled>Disabled</button>
```

## Style modifiers

Add one of the following classes to apply a different style:

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
<button class="z-button z-button-primary">Primary</button>
```

## Customization

Customize buttons using CSS variables:

```html
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
```

## Size modifiers

Add one of the following classes to adjust the button size:

| Class              | Description               |
| ------------------ | ------------------------- |
| `.z-button-xsmall` | Applies extra small size. |
| `.z-button-small`  | Applies small size.       |
| `.z-button-medium` | Applies medium size.      |
| `.z-button-large`  | Applies large size.       |

```html
<button class="z-button z-button-primary z-button-xsmall">xs</button>
<button class="z-button z-button-primary z-button-small">sm</button>
<button class="z-button z-button-primary z-button-medium">md</button>
<button class="z-button z-button-primary z-button-large">lg</button>
```

## Width modifiers

Use width utility classes alongside `.z-button`:

```html
<button class="z-button z-button-default w" style="--w: 40">w-40</button>
<button class="z-button z-button-destructive w-full">w-full</button>
```

## Icon

Use `.z-button-icon` to create an icon-only button for toolbars or social links.

```html
<button class="z-button z-button-default z-button-icon">
  <z-icon icon="copy"></z-icon>
</button>
```

## Group

Wrap buttons inside a `<div class="z-button-group">` to group them together.

```html
<div class="z-button-group">
  <button class="z-button z-button-secondary">Button</button>
  <button class="z-button z-button-secondary">Button</button>
  <button class="z-button z-button-secondary">Button</button>
</div>
```

## Button with dropdowns

Use a button to trigger a Dropdown component (`data-z-dropdown`).

```html
<div class="z-inline">
  <button class="z-button z-button-default" type="button">Dropdown</button>
  <div class="z-drop z-dropdown min-w" style="--min-w: 52" data-z-dropdown>
    <ul class="z-nav z-dropdown-nav">
      <li class="z-active"><a href="#">Active</a></li>
      <li><a href="#">Item</a></li>
      <li class="z-nav-header">Header</li>
      <li class="z-nav-divider"></li>
      <li><a href="#">Item</a></li>
    </ul>
  </div>
</div>
```

## Loading

Combine animated icon utilities or the Spinner component (`data-z-spinner`) for loading states:

```html
<button class="z-button z-button-primary gap-x" style="--gap-x: 2">
  <z-icon class="size animate-spin" style="--size: 4" icon="loader"></z-icon>
  <span>Loading</span>
</button>
<button class="z-button z-button-info gap-x" style="--gap-x: 2" disabled>
  <span data-z-spinner></span>
  <span>Logging in</span>
</button>
```
