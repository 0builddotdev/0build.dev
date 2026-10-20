# Modal

## Usage

Add `data-z-modal` and an `id` to a `<div>` to create the modal container and overlay. Toggle it using `<a href="#ID" data-z-toggle>` or any element with `data-z-toggle="target: #ID"`.

| Class             | Description                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------- |
| `.z-modal-dialog` | Add this class to a child `<div>` element to create the dialog.                                         |
| `.z-modal-body`   | Add this class to create padding between the modal and its content.                                     |
| `.z-modal-title`  | Add this class to a heading element to create the modal title.                                          |
| `.z-modal-close`  | Add this class to an `<a>` or `<button>` element to create a close button and enable its functionality. |

```html
<button data-z-toggle="target: #my-id" type="button">Open</button>
<a href="#my-id" data-z-toggle>Open</a>

<div class="z-modal" id="my-id" data-z-modal>
  <div class="z-modal-dialog z-modal-body">
    <h2 class="z-modal-title">Headline</h2>
    <p>Content</p>
    <button class="z-modal-close" type="button">Cancel</button>
  </div>
</div>
```

## Close button

Add `.z-modal-close` and `data-z-close` (from the [Close component](/docs/latest/kit/close)) to an `<a>` or `<button>` element inside `.z-modal-dialog`.

```html
<div id="modal-close-default" data-z-modal>
  <div class="z-modal-dialog z-modal-body">
    <button
      class="z-modal-close absolute right-4 top-4"
      type="button"
      data-z-close
    ></button>
    <h2 class="z-modal-title">Heading</h2>
  </div>
</div>
```

## Center modal

Add `.z-margin-auto-vertical` to `.z-modal-dialog` to vertically center the modal dialog.

```html
<div class="z-flex-top" data-z-modal>
  <div class="z-modal-dialog z-modal-body z-margin-auto-vertical">Content</div>
</div>
```

**Note:** `.z-flex-top` on the modal container is needed to support IE 11.

## Header and footer

Use these classes to divide the modal into header, body, and footer sections.

| Class             | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| `.z-modal-header` | Add this class to a `<div>` element to create the modal header. |
| `.z-modal-footer` | Add this class to a `<div>` element to create the modal footer. |

```html
<div class="z-modal" data-z-modal>
  <div class="z-modal-dialog">
    <button
      class="z-modal-close absolute right-4 top-4"
      type="button"
      data-z-close
    ></button>
    <div class="z-modal-header">
      <h2 class="z-modal-title">Modal Title</h2>
    </div>
    <div class="z-modal-body">Content</div>
    <div class="z-modal-footer z-text-right">
      <button class="z-modal-close z-button z-button-default" type="button">Cancel</button>
    </div>
  </div>
</div>
```

## Container modifier

Add `.z-modal-container` to expand the modal dialog to the default [Container](/docs/latest/kit/container) width.

```html
<div class="z-modal-container" data-z-modal>
  <div class="z-modal-dialog z-modal-body">...</div>
</div>
```

## Full modifier

Add `.z-modal-full` to create a modal that fills the entire page.

```html
<div class="z-modal z-modal-full" data-z-modal>
  <div class="z-modal-dialog">
    <button class="z-modal-close" type="button" data-z-close></button>
  </div>
</div>
```

## Overflow

Add `data-z-overflow-auto` to `.z-modal-body` (or `.z-modal-dialog`) to apply an internal scrollbar when content exceeds the window height.

```html
<div class="z-modal" data-z-modal>
  <div class="z-modal-dialog">
    <div class="z-modal-header"><h2 class="z-modal-title">Headline</h2></div>
    <div class="z-modal-body" data-z-overflow-auto>Content</div>
    <div class="z-modal-footer">...</div>
  </div>
</div>
```

## Media

Wrap images, `<video>`, or `<iframe>` elements inside `.z-modal-dialog.w-auto` (or use the [Lightbox component](/docs/latest/kit/lightbox)).

**Note:** Add `data-z-video` from the [Video component](/docs/latest/kit/video) so videos stop when the modal closes, and `data-z-responsive` for responsive embeds.

```html
<div class="z-flex-top" data-z-modal>
  <div class="z-modal-dialog z-margin-auto-vertical w-auto">
    <iframe
      src="https://www.youtube-nocookie.com/embed/c2pz2mlSfXA"
      width="1920"
      height="1080"
      loading="lazy"
      data-z-video
      data-z-responsive
    ></iframe>
  </div>
</div>
```

## Groups

Link from one modal to another using `data-z-toggle` to create multistep wizards.

```html
<div id="modal-group-1" class="z-modal" data-z-modal>
  <div class="z-modal-dialog">
    <a href="#modal-group-2" data-z-toggle>Next</a>
  </div>
</div>

<div id="modal-group-2" data-z-modal>
  <div class="z-modal-dialog">
    <a href="#modal-group-1" data-z-toggle>Previous</a>
  </div>
</div>
```

## Component options

Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option      | Value   | Default           | Description                                                                                                                                          |
| ----------- | ------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `esc-close` | Boolean | `true`            | Close the modal when the _Esc_ key is pressed.                                                                                                       |
| `bg-close`  | Boolean | `true`            | Close the modal when the background is clicked.                                                                                                      |
| `stack`     | Boolean | `false`           | Stack modals, when more than one is open. By default, the previous modal will be hidden.                                                             |
| `container` | String  | `true`            | Define a target container via a selector to specify where the modal should be appended in the DOM. Setting it to `false` will prevent this behavior. |
| `cls-page`  | String  | `z-modal-page`    | Class to add to `<html>` when modal is active                                                                                                        |
| `cls-panel` | String  | `z-modal-dialog`  | Class of the element to be considered the panel of the modal                                                                                         |
| `sel-close` | String  | `.z-modal-close`  | CSS selector for all elements that should trigger the closing of the modal                                                                           |

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```javascript
zUIkit.modal(element, options);
```

### Events

| Name         | Description                                          |
| ------------ | ---------------------------------------------------- |
| `beforeshow` | Fires before an item is shown.                       |
| `show`       | Fires after an item is shown.                        |
| `shown`      | Fires after the item's show animation has completed. |
| `beforehide` | Fires before an item is hidden.                      |
| `hide`       | Fires after an item's hide animation has started.    |
| `hidden`     | Fires after an item is hidden.                       |

### Methods

#### Show

```javascript
zUIkit.modal(element).show();
```

Shows the Modal.

#### Hide

```javascript
zUIkit.modal(element).hide();
```

Hides the Modal.

## Modal dialogs

**Note:** Customizing padding on programmatic modal dialogs requires a custom-compiled UIkit JavaScript; otherwise, build the modal using HTML.

Call prebuilt modal dialogs directly from JavaScript:

| Code                                          | Description                                              |
| --------------------------------------------- | -------------------------------------------------------- |
| `zUIkit.modal.alert('UIkit alert!')`          | Show an alert box with one button.                       |
| `zUIkit.modal.confirm('UIkit confirm!')`      | Show a confirm dialog with your message and two buttons. |
| `zUIkit.modal.prompt('Name:', 'Your name')`   | Show a dialog asking for a text input.                   |
| `zUIkit.modal.dialog('<p>UIkit dialog!</p>');`| Show dialog with any HTML content.                       |

`alert`, `confirm`, and `prompt` return a Promise (`then()`) with a `.dialog` property referencing the modal instance (`zUIkit.modal.dialog` returns the modal directly). Pass an optional `options` object with `i18n: { ok, cancel }` to translate button labels:

```javascript
zUIkit.modal.confirm("UIkit confirm!").then(
  function () {
    console.log("Confirmed.");
  },
  function () {
    console.log("Rejected.");
  },
);

const modal = zUIkit.modal.confirm("UIkit confirm!", {
  i18n: { ok: "okay", cancel: "cancel" },
}).dialog;
const el = modal.$el;
```

## Accessibility

Adheres to the [Dialog (Modal) WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/):

- The _modal_ has the `dialog` role and the `aria-modal` property.
- The _close icon_ has the `aria-label` property, and if an `<a>` element is used, the `button` role.

### Keyboard interaction

- <kbd>esc</kbd>: Closes the modal (disabled if `bg-close: false` or `esc-close: false` is set).
