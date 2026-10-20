# Calendar

## Usage

Build a calendar manually for server-side rendering using CSS classes, or use the `<z-calendar>` web component.

### Manual server-side rendering

| Class           | Description                                                                     |
| --------------- | ------------------------------------------------------------------------------- |
| `z-cal`         | The calendar wrapper                                                            |
| `z-cal-oom`     | For dates that are out-of-month                                                 |
| `z-active`      | To show the active date                                                         |
| `z-disabled`    | To disable a date (add `disabled` attribute to the button for full disablement) |
| `z-cal-marked`  | To add an indicator for "marked dates" (dates with events)                      |
| `z-cal-divider` | To add a divider between calendar weeks.                                        |

```html
<div class="z-cal z-cal-divider">
  <table>
    <thead>
      <tr>
        <th>Su</th>
        <th>Mo</th>
        <th>Tu</th>
        <th>We</th>
        <th>Th</th>
        <th>Fr</th>
        <th>Sa</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="z-cal-oom"><button>28</button></td>
        <td class="z-cal-oom"><button>29</button></td>
        <td class="z-cal-oom"><button>30</button></td>
        <td class="z-cal-oom"><button>31</button></td>
        <td class="z-active"><button>1</button></td>
        <td class="z-cal-marked"><button>2</button></td>
        <td class="z-disabled"><button disabled>3</button></td>
      </tr>
    </tbody>
  </table>
</div>
```

### Web components

```html
<z-calendar></z-calendar>
```

## Setting the current day

Add the `today` attribute (default `false`) to automatically highlight today's date as active.

```html
<z-calendar today></z-calendar>
```

## Enabling month and year selection

Add the `jumpable` attribute (default `false`) to enable a month dropdown and year input field.

```html
<z-calendar jumpable></z-calendar>
```

## Setting the starting day of the week

Use `starts-with` to set the first day of the week: `0` for Sunday (default) or `1` for Monday.

```html
<z-calendar starts-with="1"></z-calendar>
```

## Disabling specific dates

Pass a comma-separated list of `YYYY-MM-DD` dates to `disabled-dates`. Invalid formats throw a console error and are ignored.

```html
<z-calendar
  disabled-dates="2022-07-25,2022-08-01,2022-08-15"
  view-date="2022-07-01"
></z-calendar>
```

## Marking specific dates

Pass a comma-separated list of `YYYY-MM-DD` dates to `marked-dates` to display an event indicator. Invalid formats throw a console error and are ignored.

```html
<z-calendar
  marked-dates="2022-07-25,2022-08-01,2022-08-15"
  view-date="2022-07-01"
></z-calendar>
```

## Setting the view date

Set the initial displayed month/year with `view-date` in `YYYY-MM-DD` format (defaults to current date).

```html
<z-calendar view-date="2023-06-30"></z-calendar>
```

## Setting the minimum and maximum date

Restrict selectable dates with `min` and `max` in `YYYY-MM-DD` format.

```html
<z-calendar
  min="2022-01-01"
  max="2022-12-31"
  view-date="2022-07-01"
></z-calendar>
```

## Setting the current value

Set the selected date with `value` in `YYYY-MM-DD` format. Overrides `view-date` and `today`.

```html
<z-calendar value="2022-07-01"></z-calendar>
```

## Capturing values

Add a `name` attribute to automatically generate a hidden input field for form submission.

```html
<z-calendar name="calendar"></z-calendar>
```

## Internationalization

Priority order (highest to lowest):

- **Component-level i18n** (via `i18n` attribute or script tag)
- **Global component-specific namespace** (via `<script id="z-i18n">`)
- **Default values**

### Using the i18n attribute

```html
<z-calendar
  i18n="prev-month: Mois précédent; next-month: Mois suivant; select-month: Sélectionner le mois; select-year: Sélectionner l'année"
  lang="fr-FR"
></z-calendar>
```

### Using a configuration script

```html
<z-calendar lang="de-DE">
  <script type="application/json" data-fn="config">
    {
      "i18n": {
        "prev-month": "Vorheriger Monat",
        "next-month": "Nächster Monat",
        "select-month": "Monat auswählen",
        "select-year": "Jahr auswählen"
      }
    }
  </script>
</z-calendar>
```

### Using global i18n

Place in `<head>` or before components:

```html
<script id="z-i18n" type="application/json">
  {
    "z-calendar": {
      "prev-month": "Previous Month",
      "next-month": "Next Month",
      "select-month": "Select Month",
      "select-year": "Select Year"
    }
  }
</script>
```

### Available i18n options

| Key            | Default        | Description                                         |
| -------------- | -------------- | --------------------------------------------------- |
| `prev-month`   | Previous month | Aria-label for the previous month navigation button |
| `next-month`   | Next month     | Aria-label for the next month navigation button     |
| `prev-year`    | Previous year  | Aria-label for the previous year navigation button  |
| `next-year`    | Next year      | Aria-label for the next year navigation button      |
| `select-month` | Select month   | Aria-label for the month dropdown selector          |
| `select-year`  | Select year    | Aria-label for the year input field                 |

## Custom classes

Apply custom CSS classes via the `cls` attribute or configuration script.

### Using simple string format

Applies to the default `host-inner` element:

```html
<z-calendar cls="my-calendar-wrapper"></z-calendar>
```

### Using JSON object format

```html
<z-calendar
  cls='{
    "host-inner": "my-calendar",
    "header": "calendar-header",
    "previous-button": "prev-button",
    "next-button": "next-button",
    "title": "calendar-title",
    "grid": "calendar-grid",
    "day-button": "day-button",
    "button-selected": "active-day",
    "button-today": "today-highlight"
  }'
></z-calendar>
```

### Using configuration script

```html
<z-calendar>
  <script type="application/json" data-fn="config">
    {
      "cls": {
        "host-inner": "custom-calendar",
        "header": "custom-header",
        "day-button": "custom-day"
      }
    }
  </script>
</z-calendar>
```

### Available cls targets

| Target                 | Description                                         |
| ---------------------- | --------------------------------------------------- |
| `host-inner`           | The main calendar wrapper element                   |
| `header`               | The calendar header containing navigation and title |
| `previous-button`      | Previous month/year navigation button               |
| `next-button`          | Next month/year navigation button                   |
| `title`                | The calendar title (month and year display)         |
| `jumper`               | The jumper container (when jumpable is enabled)     |
| `month-select`         | Month dropdown selector (when jumpable is enabled)  |
| `year-input`           | Year input field (when jumpable is enabled)         |
| `grid`                 | The calendar grid table element                     |
| `weekdays`             | The weekdays header row                             |
| `weekday`              | Individual weekday header cell                      |
| `week`                 | Individual week row                                 |
| `day`                  | Individual day cell                                 |
| `day-button`           | Day button element                                  |
| `jumper-month`         | Month jumper wrapper                                |
| `jumper-year`          | Year jumper wrapper                                 |
| `jumper-button`        | Jumper navigation buttons                           |
| `day-outside-month`    | Class for days outside current month                |
| `day-selected`         | Class for the selected day cell                     |
| `day-today`            | Class for today's day cell                          |
| `day-marked`           | Class for marked day cells                          |
| `button-outside-month` | Class for day buttons outside current month         |
| `button-selected`      | Class for the selected day button                   |
| `button-today`         | Class for today's day button                        |
| `button-marked`        | Class for marked day buttons                        |

## Custom inline styles

Apply custom inline styles via the `stl` attribute or configuration script.

### Using simple string format

Applies to `host-inner`:

```html
<z-calendar stl="background\: #f0f0f0; padding\: 20px;"></z-calendar>
```

### Using JSON object format

```html
<z-calendar
  stl='{
    "host-inner": "padding: 1rem; background: white;",
    "header": "margin-bottom: 1rem; border-bottom: 2px solid #ddd;",
    "day-button": "border-radius: 50%; padding: 0.5rem;",
    "button-selected": "background: #1e87f0; color: white;"
  }'
></z-calendar>
```

### Using configuration script

```html
<z-calendar>
  <script type="application/json" data-fn="config">
    {
      "stl": {
        "host-inner": "background: #fafafa;",
        "header": "padding: 1rem;",
        "day-button": "font-weight: bold;"
      }
    }
  </script>
</z-calendar>
```

### Available stl targets

Supports the same targets as `cls` (see [Available cls targets](#available-cls-targets)).

## Custom icons

Override navigation icons using `<template data-fn="icons">`:

```html
<z-calendar>
  <template data-fn="icons">
    <svg data-key="chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="16" height="16"><path d="..." /></svg>
    <svg data-key="chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="16" height="16"><path d="..." /></svg>
  </template>
</z-calendar>
```

### Available icon keys

| Key             | Description                 |
| --------------- | --------------------------- |
| `chevron-left`  | Left navigation arrow icon  |
| `chevron-right` | Right navigation arrow icon |

## Attributes

| Name                     | Type    | Default      | Description                                                                                  |
| ------------------------ | ------- | ------------ | -------------------------------------------------------------------------------------------- |
| `today`                  | Boolean | false        | Automatically sets today as the active date.                                                 |
| `jumpable`               | Boolean | false        | Enables month dropdown and year input for quick date navigation.                             |
| `starts-with`            | Number  | 0 (Sunday)   | Sets the starting day of the week. 0 for Sunday, 1 for Monday.                               |
| `disabled-dates`         | String  |              | Comma-separated list of dates to disable. Dates must be in format YYYY-MM-DD.                |
| `marked-dates`           | String  |              | Comma-separated list of dates to mark with indicator. Dates must be in format YYYY-MM-DD.    |
| `view-date`              | String  | Current date | Sets the initial view date of the calendar. Must be in format YYYY-MM-DD.                    |
| `min`                    | String  |              | Sets the minimum selectable date (inclusive). Must be in format YYYY-MM-DD.                  |
| `max`                    | String  |              | Sets the maximum selectable date (exclusive). Must be in format YYYY-MM-DD.                  |
| `value`                  | String  |              | Sets the selected date value. Must be in format YYYY-MM-DD. Takes precedence over `today`.   |
| `weekday-format`         | String  | short        | Format for weekday labels: `long`, `short`, or `narrow`.                                     |
| `lang`                   | String  | en-us        | Locale string for date formatting (e.g., "en-US", "fr-FR", "de-DE").                         |
| `name`                   | String  |              | Name attribute for the hidden input field, enabling form submission.                         |
| `disabled`               | Boolean | false        | Disables the entire calendar, preventing user interaction.                                   |
| `required`               | Boolean | false        | Marks the calendar as required for form validation.                                          |
| `placeholder`            | String  |              | Placeholder text (used in parent components like input-date).                                |
| `cls`                    | String  |              | Custom CSS classes. Can be a simple string or JSON object for targeting specific elements.   |
| `stl`                    | String  |              | Custom inline styles. Can be a simple string or JSON object for targeting specific elements. |
| `i18n`                   | String  |              | Internationalization strings as JSON object or via configuration script.                     |
| `force-prevent-rerender` | Boolean | false        | Prevents component rerendering (useful for HTMX or SPA scenarios).                           |

## Events

| Name                | Description                                                                    |
| ------------------- | ------------------------------------------------------------------------------ |
| `z-calendar:change` | Fired when the selected date changes. Event detail contains `{value: string}`. |
