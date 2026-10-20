# Badge

## Usage

Add `.z-badge` to an inline element such as `<a>` or `<span>`.

```html
<span class="z-badge">1</span>
<span class="z-badge">100</span>
```

## Style modifiers

Add one of the following classes to change the appearance:

- `.z-badge-danger`
- `.z-badge-warning`
- `.z-badge-success`
- `.z-badge-info`

```html
<span class="z-badge">1</span>
<span class="z-badge z-badge-danger">8</span>
<span class="z-badge z-badge-warning">15</span>
<span class="z-badge z-badge-success">26</span>
<span class="z-badge z-badge-info">37</span>
```

## Customization

Customize the badge using CSS variables:

```html
<span
  class="z-badge"
  style="
    --z-badge-bg: var(--color-purple-500);
    --z-badge-bg-o: 8%;
    --z-badge-color: var(--color-purple-800);
    --z-badge-border: var(--color-purple-500);
    --z-badge-border-o: 32%;
    --z-badge-shadow: var(--shadow-xs);
  "
>
  99+
</span>
```
