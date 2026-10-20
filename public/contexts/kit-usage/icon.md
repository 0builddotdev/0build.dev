# Icon

## Usage

Use the `<z-icon>` web component to render an icon:

```html
<z-icon class="size" style="--size: 4" icon="smile"></z-icon>
```

## Icon library

Visit [Lucide](https://lucide.dev) for the complete catalog of 1000+ available icons.

## Accessibility

### Semantic icons (with labels)

Use the `label` attribute for icons that convey meaning (automatically sets `role="img"` and `aria-label`):

```html
<z-icon icon="home" label="Home page"></z-icon>
<z-icon icon="alert-circle" label="Warning" role="img"></z-icon>
```

### Decorative icons

Use the `decorative` attribute for purely visual icons (hides from screen readers with `aria-hidden="true"`):

```html
<z-icon icon="sparkles" decorative></z-icon>
<button><z-icon icon="trash" decorative></z-icon> Delete</button>
```

### Default behavior

Icons without `label` or `decorative` are accessible but have no specific semantic meaning.

## Internationalization

Priority order (highest to lowest):

- **Component-level i18n** (via `i18n` attribute or script tag)
- **Global component-specific namespace** (via `<script id="z-i18n">`)
- **Label attribute value**

### Using the i18n attribute

```html
<z-icon icon="home" i18n='{"label": "Página de inicio"}'></z-icon>
```

### Using a configuration script

```html
<z-icon icon="home">
  <script type="application/json" data-fn="config">
    {
      "i18n": {
        "label": "Page d'accueil"
      }
    }
  </script>
</z-icon>
```

### Using global i18n

Place in `<head>` or before any icon components:

```html
<script id="z-i18n" type="application/json">
  {
    "z-icon": {
      "label": "Startseite"
    }
  }
</script>
```

### Available i18n option

| Key     | Default | Description                                          |
| ------- | ------- | ---------------------------------------------------- |
| `label` |         | Accessible label for the icon (used with role="img") |

## Custom classes

Apply custom CSS classes via the `cls` attribute.

### Using simple string format

```html
<z-icon icon="home" cls="icon-primary"></z-icon>
```

### Using JSON object format

```html
<z-icon icon="home" cls='{"svg": "icon-large icon-primary"}'></z-icon>
```

### Available cls target

| Target | Description            |
| ------ | ---------------------- |
| `svg`  | The SVG element itself |

## Custom inline styles

Apply custom inline styles via the `stl` attribute.

### Example

```html
<z-icon icon="home" stl='{"svg": "margin-right: 0.5rem; vertical-align: middle;"}'></z-icon>
```

## Preventing layout shift

Set a predefined size on the parent element to prevent layout shift before the Web Component renders:

```html
<div class="size-4">
  <z-icon icon="smile"></z-icon>
</div>
```

## Attributes

| Name                     | Type    | Default | Description                                                                 |
| ------------------------ | ------- | ------- | --------------------------------------------------------------------------- |
| `icon`                   | String  |         | Name of the Lucide icon to display (kebab-case format, e.g., "arrow-right") |
| `label`                  | String  |         | Accessible label for semantic icons (automatically adds role="img")         |
| `decorative`             | Boolean | false   | Marks icon as decorative, hiding it from screen readers                     |
| `role`                   | String  |         | ARIA role for the icon (defaults to "img" when label is provided)           |
| `size`                   | String  |         | Uniform size for both width and height (overrides width/height attributes)  |
| `width`                  | String  | 16      | Icon width in pixels                                                        |
| `height`                 | String  | 16      | Icon height in pixels                                                       |
| `stroke-width`           | String  | 2       | SVG stroke width                                                            |
| `color`                  | String  |         | Icon color (any valid CSS color value)                                      |
| `fill`                   | String  | none    | Fill color for the icon (use with stroke-width="0" for solid icons)         |
| `cls`                    | String  |         | Custom CSS classes for the SVG element                                      |
| `stl`                    | String  |         | Custom inline styles for the SVG element                                    |
| `i18n`                   | String  |         | Internationalization strings as JSON object or via configuration script     |
| `force-prevent-rerender` | Boolean | false   | Prevents component rerendering (useful for HTMX or SPA scenarios)           |
