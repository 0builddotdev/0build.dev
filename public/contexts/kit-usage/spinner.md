# Spinner

## Usage

Add the `data-z-spinner` attribute to a block or inline element to create a loading spinner.

```html
<div data-z-spinner></div>
```

## Ratio

Add `ratio: NUMBER` to `data-z-spinner` to scale the spinner size.

```html
<span data-z-spinner="ratio: 3"></span>
<span data-z-spinner="ratio: 4.5"></span>
```

## Accessibility

The Spinner component automatically sets WAI-ARIA properties:

- The _spinner_ has the `status` role.
