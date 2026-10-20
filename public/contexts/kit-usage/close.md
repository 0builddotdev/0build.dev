# Close

## Usage

Add the `data-z-close` attribute to an `<a>` or `<button>` element.

```html
<button type="button" aria-label="Close" data-z-close></button>
<a href="" data-z-close></a>
```

## Close in alerts

Use `.z-alert-close` with `data-z-close` inside an [Alert component](/docs/latest/kit/alert).

```html
<div class="z-alert" data-z-alert>
  <button class="z-alert-close" type="button" aria-label="Close" data-z-close></button>
  <p>Content</p>
</div>
```

## Close in drops

Use `.z-drop-close` with `data-z-close` inside a [Drop component](/docs/latest/kit/drop).

```html
<div data-z-drop>
  <button class="z-drop-close" type="button" aria-label="Close" data-z-close></button>
</div>
```

## Close in modals

Use `.z-modal-close` with `data-z-close` inside a [Modal component](/docs/latest/kit/modal).

```html
<div class="z-modal" id="modal" data-z-modal>
  <div class="z-modal-dialog z-modal-body">
    <button class="z-modal-close absolute right-4 top-4" type="button" aria-label="Close" data-z-close></button>
  </div>
</div>
```

## Accessibility

The Close component automatically sets the appropriate WAI-ARIA roles and properties:

- The _close icon_ has the `aria-label` property, and if an `<a>` element is used, the `button` role.

### Internationalization

The Close component uses the following translation strings ([learn more](/docs/latest/kit/accessibility)):

| Key     | Default | Description             |
| ------- | ------- | ----------------------- |
| `label` | `Close` | `aria-label` attribute. |
