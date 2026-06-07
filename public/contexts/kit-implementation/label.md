# Label

## Usage

To create a label, just add the `.z-label` class to an inline element like `<a>` or `<span>` element.

```html
<span class="z-label"></span>
```

```html
<span class="z-label">Default</span>
```

## Style modifiers

There are several style modifiers available. Just add one of the following classes to apply a different look.

- `.z-label-danger`
- `.z-label-warning`
- `.z-label-success`
- `.z-label-info`

```html
<span class="z-label">Default</span>
<span class="z-label z-label-danger">Danger</span>
<span class="z-label z-label-warning">Warning</span>
<span class="z-label z-label-success">Success</span>
<span class="z-label z-label-info">Info</span>
```

## Customization

You can use CSS variables to customize this component in any way you prefer.

```html
<span
  class="z-label"
  style="
    --z-label-bg: var(--color-purple-500);
    --z-label-bg-o: 8%;
    --z-label-color: var(--color-purple-800);
    --z-label-border: var(--color-purple-500);
    --z-label-border-o: 32%;
    --z-label-shadow: var(--shadow-xs);
  "
>
  Custom
</span>
```