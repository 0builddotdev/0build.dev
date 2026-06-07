# Modal

## Usage

The Modal component consists of an overlay, a dialog and an optional close button. You can use any element to toggle a modal dialog. To enable the necessary JavaScript, add the `data-z-toggle` attribute. An `<a>` element needs to be linked to the modal's id. If you are using another element, like a button, just add the `data-z-toggle="target: #ID"` attribute to target the id of the modal container.

Add the `data-z-modal` attribute to a `<div>` element to create the modal container and an overlay that blanks out the page. It is important to add an `id` to indicate the element for toggling. Use the following classes to define the modal's sections.

| Class              | Description                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------- |
| `.z-modal-dialog` | Add this class to a child `<div>` element to create the dialog                                          |
| `.z-modal-body`   | Add this class to create padding between the modal and its content.                                     |
| `.z-modal-title`  | Add this class to a heading element to create the modal title.                                          |
| `.z-modal-close`  | Add this class to an `<a>` or `<button>` element to create a close button and enable its functionality. |

```html
<!-- This is a button toggling the modal -->
<button data-z-toggle="target: #my-id" type="button"></button>

<!-- This is the modal -->
<div class="z-modal" id="my-id" data-z-modal>
  <div class="z-modal-dialog z-modal-body">
    <h2 class="z-modal-title"></h2>
    <button class="z-modal-close" type="button"></button>
  </div>
</div>
```

```html
<button
  class="z-button z-button-default mr"
  style="--mr: 2"
  type="button"
  data-z-toggle="target: #modal-example"
>
  Open
</button>

<a href="#modal-example" data-z-toggle>Open</a>

<div id="modal-example" data-z-modal>
  <div class="z-modal-dialog z-modal-body">
    <h2 class="z-modal-title">Headline</h2>
    <p class="my" style="--my: 4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p class="z-text-right">
      <button
        class="z-modal-close z-button z-button-default mr"
        style="--mr: 2"
        type="button"
      >
        Cancel
      </button>
      <button class="z-button z-button-primary" type="button">Save</button>
    </p>
  </div>
</div>
```

## Close button

To create a close button, enable its functionality and add proper styling and positioning, add the `.z-modal-close` class to an `<a>` or `<button>` element.

Add the `data-z-close` attribute from the [Close component](/docs/latest/kit/close), to apply a close icon.

```html
<div>
  <div class="z-modal-dialog">
    <button
      class="z-modal-close absolute right-4 top-4"
      type="button"
      data-z-close
    ></button>
  </div>
</div>
```

```html
<!-- This is a button toggling the modal with the default close button -->
<button
  class="z-button z-button-default"
  type="button"
  data-z-toggle="target: #modal-close-default"
>
  Open
</button>

<!-- This is the modal with the default close button -->
<div id="modal-close-default" data-z-modal>
  <div class="z-modal-dialog z-modal-body">
    <button
      class="z-modal-close absolute right top"
      style="--right: 4; --top: 4"
      type="button"
      data-z-close
    ></button>
    <h2 class="z-modal-title">Heading</h2>
    <p class="mt" style="--mt: 4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
</div>
```

## Center modal

To vertically center the modal dialog, you can use the `.z-margin-auto-vertical` class.

```html
<div class="z-flex-top" data-z-modal>
  <div class="z-modal-dialog z-margin-auto-vertical"></div>
</div>
```

```html
<a class="z-button z-button-default" href="#modal-center" data-z-toggle>
  Open
</a>

<div id="modal-center" class="z-flex-top" data-z-modal>
  <div class="z-modal-dialog z-modal-body z-margin-auto-vertical">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
</div>
```

<span class="z-label z-label-primary">Note</span> `.z-flex-top` on the modal
container is needed to support IE 11.

## Header and footer

To divide the modal into different content sections, use the following classes.

| Class              | Description                                                     |
| ------------------ | --------------------------------------------------------------- |
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
      <h2 class="z-modal-title"></h2>
    </div>
    <div class="z-modal-body"></div>
    <div class="z-modal-footer"></div>
  </div>
</div>
```

```html
<a class="z-button z-button-default" href="#modal-sections" data-z-toggle>
  Open
</a>

<div id="modal-sections" data-z-modal>
  <div class="z-modal-dialog">
    <button
      class="z-modal-close absolute right top"
      style="--right: 4; --top: 4"
      type="button"
      data-z-close
    ></button>
    <div class="z-modal-header">
      <h2 class="z-modal-title">Modal Title</h2>
    </div>
    <div class="z-modal-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <div class="z-modal-footer z-text-right">
      <button
        class="z-modal-close z-button z-button-default mr"
        style="--mr: 2"
        type="button"
      >
        Cancel
      </button>
      <button class="z-button z-button-primary" type="button">Save</button>
    </div>
  </div>
</div>
```

## Container modifier

Add the `.z-modal-container` class to expand the modal dialog to the default [Container](/docs/latest/kit/container) width.

```html
<div class="z-modal-container" data-z-modal>...</div>
```

```html
<a class="z-button z-button-default" href="#modal-container" data-z-toggle>
  Open
</a>

<div id="modal-container" class="z-modal-container" data-z-modal>
  <div class="z-modal-dialog z-modal-body">
    <button
      class="z-modal-close absolute right top"
      style="--right: 4; --top: 4"
      type="button"
      data-z-close
    ></button>
    <h2 class="z-modal-title">Headline</h2>
    <p class="mt" style="--mt: 4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
</div>
```

## Full modifier

To create a modal, that fills the entire page, add the `.z-modal-full` class.

```html
<div class="z-modal z-modal-full" data-z-modal>
  <div class="z-modal-dialog">
    <button class="z-modal-close" type="button" data-z-close></button>
  </div>
</div>
```

```html
<a class="z-button z-button-default" href="#modal-full" data-z-toggle> Open </a>

<div id="modal-full" class="z-modal-full" data-z-modal>
  <div class="z-modal-dialog">
    <button
      class="z-modal-close absolute right top p"
      style="--right: 0; --top: 0; --p: 8"
      type="button"
      data-z-close
    ></button>
    <div class="display-grid md:grid-cols" style="--md-grid-cols: 2">
      <div
        class="h-screen bg-cover bg-image"
        style="--bg-image: url(&quot;https://0build.dev/images/photo.jpg&quot;)"
      ></div>
      <div class="p" style="--p: 8">
        <h1 class="z-h1">Headline</h1>
        <p class="mt" style="--mt: 4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>
</div>
```

## Overflow

By default, the page will scroll with the modal, if its content exceeds the window height. To apply a scrollbar inside the modal, add the `data-z-overflow-auto` attribute to the modal body.

```html
<div class="z-modal" data-z-modal>
  <div class="z-modal-dialog" data-z-overflow-auto></div>
</div>
```

```html
<a class="z-button z-button-default" href="#modal-overflow" data-z-toggle>
  Open
</a>

<div id="modal-overflow" data-z-modal>
  <div class="z-modal-dialog">
    <button
      class="z-modal-close absolute right top"
      style="--right: 4; --top: 4"
      type="button"
      data-z-close
    ></button>

    <div class="z-modal-header">
      <h2 class="z-modal-title">Headline</h2>
    </div>

    <div class="z-modal-body space-y" style="--space-y: 4" data-z-overflow-auto>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>

    <div class="z-modal-footer z-text-right">
      <button
        class="z-modal-close z-button z-button-default mr"
        style="--mr: 2"
        type="button"
      >
        Cancel
      </button>
      <button class="z-button z-button-primary" type="button">Save</button>
    </div>
  </div>
</div>
```

## Media

If you want to display media, you should first check, if the [Lightbox component](/docs/latest/kit/lightbox) doesn't already offer everything you need. However, you can also use the modal to have more control over the markup to wrap your media in.

<span class="z-label z-label-primary">Note</span> Use the `data-z-video`
attribute from the [Video component](/docs/latest/kit/video) to make sure videos are
stopped when the modal is closed.

```html
<div class="z-modal" data-z-modal>
  <div class="z-modal-dialog w-auto">
    <iframe src="" data-z-video></iframe>
  </div>
</div>
```

```html
<div class="display-flex flex-wrap gap" style="--gap: 2">
  <a class="z-button z-button-default" href="#modal-media-image" data-z-toggle>
    Image
  </a>
  <a class="z-button z-button-default" href="#modal-media-video" data-z-toggle>
    Video
  </a>
  <a
    class="z-button z-button-default"
    href="#modal-media-youtube"
    data-z-toggle
  >
    YouTube
  </a>
  <a class="z-button z-button-default" href="#modal-media-vimeo" data-z-toggle>
    Vimeo
  </a>
</div>

<div id="modal-media-image" class="z-flex-top" data-z-modal>
  <div class="z-modal-dialog z-margin-auto-vertical w-auto">
    <button
      class="z-modal-close absolute right top text-white"
      style="--right: -4; --top: -4"
      type="button"
      data-z-close
    ></button>
    <img src="/images/photo.jpg" width="1800" height="1200" alt="" />
  </div>
</div>

<div id="modal-media-video" class="z-flex-top" data-z-modal>
  <div class="z-modal-dialog z-margin-auto-vertical w-auto">
    <video
      src="https://yootheme.com/site/images/media/yootheme-pro.mp4"
      width="1920"
      height="1080"
      controls
      playsinline
      data-z-video
    ></video>
  </div>
</div>

<div id="modal-media-youtube" class="z-flex-top" data-z-modal>
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

<div id="modal-media-vimeo" class="z-flex-top" data-z-modal>
  <div class="z-modal-dialog z-margin-auto-vertical w-auto">
    <iframe
      src="https://player.vimeo.com/video/1084537"
      width="1280"
      height="720"
      loading="lazy"
      data-z-video
      data-z-responsive
    ></iframe>
  </div>
</div>
```

## Groups

You can group multiple modals by linking from one to the other and back. Use this to create multistep wizards inside your modals.

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

```html
<div class="display-flex flex-wrap gap" style="--gap: 2">
  <a class="z-button z-button-default" href="#modal-group-1" data-z-toggle>
    Modal 1
  </a>
  <a class="z-button z-button-default" href="#modal-group-2" data-z-toggle>
    Modal 2
  </a>
</div>

<div id="modal-group-1" data-z-modal>
  <div class="z-modal-dialog">
    <button
      class="z-modal-close absolute right top"
      style="--right: 4; --top: 4"
      type="button"
      data-z-close
    ></button>
    <div class="z-modal-header">
      <h2 class="z-modal-title">Headline 1</h2>
    </div>
    <div class="z-modal-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <div class="z-modal-footer z-text-right">
      <button
        class="z-modal-close z-button z-button-default mr"
        style="--mr: 2"
        type="button"
      >
        Cancel
      </button>
      <a href="#modal-group-2" class="z-button z-button-primary" data-z-toggle>
        Next
      </a>
    </div>
  </div>
</div>

<div id="modal-group-2" data-z-modal>
  <div class="z-modal-dialog">
    <button
      class="z-modal-close absolute right top"
      style="--right: 4; --top: 4"
      type="button"
      data-z-close
    ></button>
    <div class="z-modal-header">
      <h2 class="z-modal-title">Headline 2</h2>
    </div>
    <div class="z-modal-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <div class="z-modal-footer z-text-right">
      <button
        class="z-modal-close z-button z-button-default mr"
        style="--mr: 2"
        type="button"
      >
        Cancel
      </button>
      <a href="#modal-group-1" class="z-button z-button-primary" data-z-toggle>
        Previous
      </a>
    </div>
  </div>
</div>
```

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option      | Value   | Default           | Description                                                                                                                                          |
| ----------- | ------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `esc-close` | Boolean | `true`            | Close the modal when the _Esc_ key is pressed.                                                                                                       |
| `bg-close`  | Boolean | `true`            | Close the modal when the background is clicked.                                                                                                      |
| `stack`     | Boolean | `false`           | Stack modals, when more than one is open. By default, the previous modal will be hidden.                                                             |
| `container` | String  | `true`            | Define a target container via a selector to specify where the modal should be appended in the DOM. Setting it to `false` will prevent this behavior. |
| `cls-page`  | String  | `z-modal-page`   | Class to add to `<html>` when modal is active                                                                                                        |
| `cls-panel` | String  | `z-modal-dialog` | Class of the element to be considered the panel of the modal                                                                                         |
| `sel-close` | String  | `.z-modal-close` | CSS selector for all elements that should trigger the closing of the modal                                                                           |

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```javascript
zUIkit.modal(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name         | Description                                          |
| ------------ | ---------------------------------------------------- |
| `beforeshow` | Fires before an item is shown.                       |
| `show`       | Fires after an item is shown.                        |
| `shown`      | Fires after the item's show animation has completed. |
| `beforehide` | Fires before an item is hidden.                      |
| `hide`       | Fires after an item's hide animation has started.    |
| `hidden`     | Fires after an item is hidden.                       |

### Methods

The following methods are available for the component:

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

<span class="z-label z-label-primary">Note</span> While the modal dialogs work
perfectly, customizing padding requires a custom-compiled UIkit JavaScript. If
you're unfamiliar with compiling your JavaScript, it's advisable to build the
modal using HTML.

The component comes with a number of prepared modal dialogs that you can use for user interaction. You can call the dialog directly from JavaScript and use callback functions to process the user input.

| Code                                          | Description                                              |
| --------------------------------------------- | -------------------------------------------------------- |
| `zUIkit.modal.alert('UIkit alert!')`           | Show an alert box with one button.                       |
| `zUIkit.modal.confirm('UIkit confirm!')`       | Show a confirm dialog with your message and two buttons. |
| `zUIkit.modal.prompt('Name:', 'Your name')`    | Show a dialog asking for a text input.                   |
| `zUIkit.modal.dialog('<p>UIkit dialog!</p>');` | Show dialog with any HTML content.                       |

To process the user input, the modal uses a promise based interface which provides a `then()` function to register your callback functions. The `zUIkit.modal.dialog` function however will return the modal itself.

```javascript
zUIkit.modal.confirm("UIkit confirm!").then(
  function () {
    console.log("Confirmed.");
  },
  function () {
    console.log("Rejected.");
  },
);
```

The returned promise has a property `dialog`, which holds a reference to the modal itself. This lets you manipulate e.g. the markup of the modal's element.

To translate the button labels, the dialog functions accepts an optional `options` object parameter. This has a key `i18n` and two properties `ok` and `cancel`.

```javascript
const modal = zUIkit.modal.confirm("UIkit confirm!", {
  i18n: { ok: "okay" },
}).dialog; // The modal component
const el = modal.$el; // The modal element
```

```html
<div class="flex flex-wrap gap-2">
  <a id="js-modal-dialog" class="z-button z-button-default" href="#">Dialog</a>

  <a id="js-modal-alert" class="z-button z-button-default" href="#">Alert</a>

  <a id="js-modal-confirm" class="z-button z-button-default" href="#"
    >Confirm</a
  >

  <a id="js-modal-prompt" class="z-button z-button-default" href="#">Prompt</a>

  <script>
    document
      .getElementById("js-modal-dialog")
      ?.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.blur();
        zUIkit.modal.dialog('<p class="z-modal-body">UIkit dialog!</p>');
      });

    document
      .getElementById("js-modal-alert")
      ?.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.blur();
        zUIkit.modal.alert("UIkit alert!").then(function () {
          console.log("Alert closed.");
        });
      });

    document
      .getElementById("js-modal-confirm")
      ?.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.blur();
        zUIkit.modal.confirm("UIkit confirm!").then(
          function () {
            console.log("Confirmed.");
          },
          function () {
            console.log("Rejected.");
          },
        );
      });

    document
      .getElementById("js-modal-prompt")
      ?.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.blur();
        zUIkit.modal.prompt("Name:", "Your name").then(function (name) {
          console.log("Prompted:", name);
        });
      });
  </script>
</div>
```

## Accessibility

The Modal component adheres to the [Dialog (Modal) WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/) and automatically sets the appropriate WAI-ARIA roles and properties.

- The _modal_ has the `dialog` role and the `aria-modal` property.

The Close component automatically sets the appropriate WAI-ARIA roles and properties.

- The _close icon_ has the `aria-label` property, and if an `<a>` element is used, the `button` role.

### Keyboard interaction

The Modal component can be accessed through keyboard using the following keys.

- The <kbd>esc</kbd> key closes the modal. This behaviour is disabled if the `bg-close: false` option is set.