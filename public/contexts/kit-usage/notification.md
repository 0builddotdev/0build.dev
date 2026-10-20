# Notification

## Usage

Notifications remain visible while hovered and close when clicked. Trigger notifications via the JavaScript API:

### JavaScript

```javascript
zUIkit.notification({
  message: "my-message!",
  status: "primary",
  pos: "top-right",
  timeout: 5000,
});

// Shortcuts
zUIkit.notification("My message");
zUIkit.notification("My message", status);
zUIkit.notification("My message", {
  /* options */
});
```

## HTML message

HTML (such as `<z-icon>`) can be used inside the notification message.

```javascript
zUIkit.notification("<z-icon icon='rocket'></z-icon> Message");
```

## Position

Set `pos` to adjust the notification's display corner:

| Position        | Code                                                |
| --------------- | --------------------------------------------------- |
| `top-left`      | `zUIkit.notification("...", {pos: 'top-left'})`      |
| `top-center`    | `zUIkit.notification("...", {pos: 'top-center'})`    |
| `top-right`     | `zUIkit.notification("...", {pos: 'top-right'})`     |
| `bottom-left`   | `zUIkit.notification("...", {pos: 'bottom-left'})`   |
| `bottom-center` | `zUIkit.notification("...", {pos: 'bottom-center'})` |
| `bottom-right`  | `zUIkit.notification("...", {pos: 'bottom-right'})`  |

## Status

Set `status` to `primary`, `success`, `warning`, `danger`, or `info`:

```javascript
zUIkit.notification("...", { status: "danger" });
```

## Close all

Call `zUIkit.notification.closeAll()` to close all open notifications immediately.

```javascript
zUIkit.notification.closeAll();
```

## Component options

Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option    | Value  | Default      | Description                                                                                                   |
| --------- | ------ | ------------ | ------------------------------------------------------------------------------------------------------------- |
| `message` | String | `false`      | Notification message to show.                                                                                 |
| `status`  | String | `null`       | Notification status color.                                                                                    |
| `timeout` | Number | `5000`       | Visibility duration until a notification disappears. If set to `0`, notification will not hide automatically. |
| `group`   | String |              | Useful, if you want to close all notifications in a specific group.                                           |
| `pos`     | String | `top-center` | Display corner.                                                                                               |

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

This is a `Functional Component` and may omit the element argument.

```javascript
zUIkit.notification(options);
zUIkit.notification(message, status);
```

### Events

| Name    | Description                                   |
| ------- | --------------------------------------------- |
| `close` | Fires after the notification has been closed. |

### Methods

#### Close

```javascript
zUIkit.notification(element).close(immediate);
```

Closes the notification.

| Name        | Type    | Default | Description                      |
| ----------- | ------- | ------- | -------------------------------- |
| `immediate` | Boolean | true    | Transition the notification out. |

## Accessibility

- The _notification_ has the `alert` role.
