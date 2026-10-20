# Container

## Usage

Add the `.z-container` class to a block element to give it a max-width, center it, and apply responsive horizontal padding.

**Note:** The padding of nested containers is removed to avoid unnecessary spacing.

```html
<div class="z-container"></div>
```

## Size modifiers

Add one of the following classes to apply a different max-width.

| Class                 | Description                                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------- |
| `.z-container-xsmall` | Add this class for a xsmall container.                                                                         |
| `.z-container-small`  | Add this class for a small container.                                                                          |
| `.z-container-large`  | Add this class for a large container.                                                                          |
| `.z-container-xlarge` | Add this class for a xlarge container.                                                                         |
| `.z-container-expand` | Add this class, if you do not want to limit the container width but still want the dynamic horizontal padding. |

```html
<div class="z-container z-container-xsmall"></div>
<div class="z-container z-container-small"></div>
<div class="z-container z-container-large"></div>
<div class="z-container z-container-xlarge"></div>
<div class="z-container z-container-expand"></div>
```
