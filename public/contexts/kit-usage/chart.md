## Usage

Use the `<z-chart>` (or `<uk-chart>`) element with a `<script data-fn="config" type="application/json"></script>` child containing the `apexCharts` configuration object.

## Reactivity

By default, `<uk-chart>` is not reactive to avoid `MutationObserver` overhead. Add `data-reactive` to the config `<script>` tag to observe changes and re-render automatically:

```html
<uk-chart>
  <script data-fn="config" type="application/json" data-reactive></script>
</uk-chart>
```

## Attributes

| Name                     | Type    | Default  | Description                                                                                                     |
| ------------------------ | ------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| `force-prevent-rerender` | Boolean | `false`  | Forcefully prevents component rerendering.                                                                      |
| `cls`                    | String  |          | Allows you to add custom CSS classes, which will be attached to the `<div>` tag.                                |
| `loading`                | Boolean | `false`  | Displays a loading state before the chart is rendered. Useful when chart data is being fetched asynchronously.  |
| `width`                  | String  | `"100%"` | Sets the width of the chart container. Accepts a pixel value or any valid CSS unit (e.g. `"500px"`, `"100%"`).  |
| `height`                 | String  | `"auto"` | Sets the height of the chart container. Accepts a pixel value or any valid CSS unit (e.g. `"400px"`, `"50vh"`). |

## Area Chart

### Smooth

```html
<div class="uk-chart-container max-w-md">
  <uk-chart>
    <script data-fn="config" type="application/json">
      {
        "apexCharts": {
          "series": [{ "name": "Desktops", "data": [186, 305, 237, 73, 209, 214] }],
          "chart": { "type": "area", "zoom": { "enabled": false }, "toolbar": { "show": false } },
          "dataLabels": { "enabled": false },
          "stroke": { "curve": "smooth", "width": 2 },
          "colors": ["var(--uk-chart-1)"],
          "grid": {
            "row": { "colors": [] },
            "borderColor": "color-mix(in srgb, var(--uk-border) var(--uk-border-o), transparent)"
          },
          "xaxis": {
            "categories": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            "tooltip": { "enabled": false },
            "labels": { "style": { "colors": "var(--uk-muted-f)" } },
            "axisBorder": { "show": false },
            "axisTicks": { "show": false }
          },
          "yaxis": { "labels": { "show": false } },
          "tooltip": { "title": { "show": false } }
        }
      }
    </script>
  </uk-chart>
</div>
```

### Multiple

For multiple area series, pass multiple objects in `series`, multiple CSS variables in `colors`, and optionally `"legend": { "show": false }`:

```html
<uk-chart>
  <script data-fn="config" type="application/json">
    {
      "apexCharts": {
        "series": [
          { "name": "Desktops", "data": [186, 305, 237, 73, 209, 214] },
          { "name": "Mobile", "data": [80, 200, 120, 190, 130, 140] }
        ],
        "chart": { "type": "area", "zoom": { "enabled": false }, "toolbar": { "show": false } },
        "dataLabels": { "enabled": false },
        "stroke": { "curve": "smooth", "width": 2 },
        "colors": ["var(--uk-chart-1)", "var(--uk-chart-2)"],
        "grid": {
          "row": { "colors": [] },
          "borderColor": "color-mix(in srgb, var(--uk-border) var(--uk-border-o), transparent)"
        },
        "xaxis": {
          "categories": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          "tooltip": { "enabled": false },
          "labels": { "style": { "colors": "var(--uk-muted-f)" } },
          "axisBorder": { "show": false },
          "axisTicks": { "show": false }
        },
        "yaxis": { "labels": { "show": false } },
        "tooltip": { "title": { "show": false } },
        "legend": { "show": false }
      }
    }
  </script>
</uk-chart>
```

## Line Chart

### Smooth

Set `"chart": { "type": "line" }` and `"stroke": { "curve": "smooth", "width": 2 }`:

```html
<uk-chart>
  <script data-fn="config" type="application/json">
    {
      "apexCharts": {
        "series": [{ "name": "Desktops", "data": [186, 305, 237, 73, 209, 214] }],
        "chart": { "type": "line", "zoom": { "enabled": false }, "toolbar": { "show": false } },
        "dataLabels": { "enabled": false },
        "stroke": { "curve": "smooth", "width": 2 },
        "colors": ["var(--uk-chart-1)"],
        "grid": {
          "row": { "colors": [] },
          "borderColor": "color-mix(in srgb, var(--uk-border) var(--uk-border-o), transparent)"
        },
        "xaxis": {
          "categories": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          "tooltip": { "enabled": false },
          "labels": { "style": { "colors": "var(--uk-muted-f)" } },
          "axisBorder": { "show": false },
          "axisTicks": { "show": false }
        },
        "yaxis": { "labels": { "show": false } },
        "tooltip": { "title": { "show": false } }
      }
    }
  </script>
</uk-chart>
```

### Straight

Set `"stroke": { "curve": "straight", "width": 2 }` on a `line` chart:

```html
<uk-chart>
  <script data-fn="config" type="application/json">
    {
      "apexCharts": {
        "series": [{ "name": "Desktops", "data": [186, 305, 237, 73, 209, 214] }],
        "chart": { "type": "line", "zoom": { "enabled": false }, "toolbar": { "show": false } },
        "dataLabels": { "enabled": false },
        "stroke": { "curve": "straight", "width": 2 },
        "colors": ["var(--uk-chart-1)"]
      }
    }
  </script>
</uk-chart>
```

### Stepline

Set `"stroke": { "curve": "stepline", "width": 2 }` and optionally configure `"markers": { "hover": { "sizeOffset": 4 } }`:

```html
<uk-chart>
  <script data-fn="config" type="application/json">
    {
      "apexCharts": {
        "series": [{ "name": "Desktops", "data": [186, 305, 237, 73, 209, 214] }],
        "chart": { "type": "line", "zoom": { "enabled": false }, "toolbar": { "show": false } },
        "dataLabels": { "enabled": false },
        "stroke": { "curve": "stepline", "width": 2 },
        "colors": ["var(--uk-chart-1)"],
        "markers": { "hover": { "sizeOffset": 4 } }
      }
    }
  </script>
</uk-chart>
```

### Multiple

Pass multiple series and configure `tooltip.style` and `legend`:

```html
<uk-chart>
  <script data-fn="config" type="application/json">
    {
      "apexCharts": {
        "series": [
          { "name": "Desktops", "data": [186, 305, 237, 73, 209, 214] },
          { "name": "Mobile", "data": [80, 200, 120, 190, 130, 140] }
        ],
        "chart": { "type": "line", "zoom": { "enabled": false }, "toolbar": { "show": false } },
        "dataLabels": { "enabled": false },
        "stroke": { "curve": "smooth", "width": 2 },
        "colors": ["var(--uk-chart-1)", "var(--uk-chart-2)"],
        "tooltip": {
          "title": { "show": false },
          "style": {
            "fontFamily": "inherit",
            "fontSize": "var(--uk-global-font-size-small)",
            "lineHeight": "var(--uk-global-line-height-small)"
          }
        },
        "legend": {
          "fontFamily": "inherit",
          "fontSize": "",
          "lineHeight": "",
          "markers": { "strokeWidth": 0 }
        }
      }
    }
  </script>
</uk-chart>
```
