# Close

## Usage

To apply this component, add the `data-z-close` attribute to an `<a>` or `<button>` element.

```html
<button type="button" data-z-close></button>

<a href="" data-z-close></a>
```

```html
<button type="button" aria-label="Close" data-z-close></button>
```

## Close in alerts

This is an example of how this component is used with an alert box from the [Alert component](/docs/latest/kit/alert).

```html
<div class="z-alert" data-z-alert>
  <a href class="z-alert-close" data-z-close></a>
</div>
```

```html
<div class="z-alert" data-z-alert>
  <button
    class="z-alert-close"
    type="button"
    aria-label="Close"
    data-z-close
  ></button>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt.
  </p>
</div>
```

## Close in drops

This is an example of how this component is used with the [Drop component](/docs/latest/kit/drop).

```html
<div data-z-drop>
  <button class="z-drop-close" type="button" data-z-close></button>
</div>
```

```html
<div class="z-inline">
  <button class="z-button z-button-default" type="button">Click</button>
  <div data-z-drop="mode: click">
    <div class="z-card z-card-body">
      <button
        class="z-drop-close"
        type="button"
        aria-label="Close"
        data-z-close
      ></button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
    </div>
  </div>
</div>
```

## Close in modals

This is an example of how this component is used with the [Modal component](/docs/latest/kit/modal).

```html
<div id="modal" data-z-modal>
  <div class="z-modal-dialog z-modal-body">
    <button
      class="z-modal-close absolute right-4 top-4"
      type="button"
      data-z-close
    ></button>
  </div>
</div>
```

```html
<a class="z-button z-button-default" href="#modal" data-z-toggle>
  Open modal
</a>

<div class="z-modal z-flex-top" id="modal" data-z-modal>
  <div class="z-modal-dialog z-modal-body z-margin-auto-vertical">
    <button
      class="z-modal-close absolute right top"
      style="--right: 4; --top: 4"
      type="button"
      aria-label="Close"
      data-z-close
    ></button>
    <h2 class="z-modal-title">Are you absolutely sure?</h2>
    <div class="my text-sm text-muted-foreground" style="--my: 4">
      This action cannot be undone. This will permanently delete your account
      and remove your data from our servers.
    </div>
    <div class="display-flex justify-end">
      <button
        class="z-modal-close z-button z-button-default mr"
        style="--mr: 2"
        type="button"
      >
        Cancel
      </button>
      <button class="z-button z-button-danger" type="button">Continue</button>
    </div>
  </div>
</div>
```

## Accessibility

The Close component automatically sets the appropriate WAI-ARIA roles and properties.

- The _close icon_ has the `aria-label` property, and if an `<a>` element is used, the `button` role.

### Internationalization

The Close component uses the following translation strings. Learn more about [translating components](/docs/latest/kit/accessibility).

| Key     | Default | Description             |
| ------- | ------- | ----------------------- |
| `label` | `Close` | `aria-label` attribute. |