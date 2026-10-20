# Label

## Usage

Add `.z-label` to an inline element such as `<a>` or `<span>`.

```html
<span class="z-label">Default</span>
```

## Style modifiers

Add one of the following classes to modify the label appearance:

- `.z-label-danger`
- `.z-label-warning`
- `.z-label-success`
- `.z-label-info`

```html
<span class="z-label z-label-danger">Danger</span>
<span class="z-label z-label-success">Success</span>
```

## Customization

Customize the component using CSS variables:

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
