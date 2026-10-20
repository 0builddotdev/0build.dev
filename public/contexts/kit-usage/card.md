# Card

## Usage

The Card component consists of the card container, card body, and an optional card title.

| Class           | Description                                                                    |
| --------------- | ------------------------------------------------------------------------------ |
| `.z-card`       | Add this class to a `<div>` element to define the Card component.              |
| `.z-card-body`  | Add this class to the card to create padding between the card and its content. |
| `.z-card-title` | Add this class to a heading to define a card title.                            |

```html
<div class="z-card z-card-body">
  <h3 class="z-card-title">Title</h3>
  <p>Content</p>
</div>
```

## Style modifiers

Add one of the following classes to apply a different look:

- `.z-card-primary`
- `.z-card-secondary`
- `.z-card-success` (`.z-badge-success`)
- `.z-card-warning` (`.z-badge-warning`)
- `.z-card-info` (`.z-badge-info`)
- `.z-card-danger` (`.z-badge-danger`)

```html
<div class="z-card z-card-body"></div>
<div class="z-card z-card-body z-card-primary"></div>
<div class="z-card z-card-body z-card-secondary"></div>
<div class="z-card z-card-body z-card-success"></div>
<div class="z-card z-card-body z-card-warning"></div>
<div class="z-card z-card-body z-card-info"></div>
<div class="z-card z-card-body z-card-danger"></div>
```

## Header and footer

Divide a card into header and footer sections around `.z-card-body` by adding `.z-card-header` and `.z-card-footer` to inner `<div>` elements.

```html
<div class="z-card">
  <div class="z-card-header">
    <h3 class="z-card-title">Create project</h3>
  </div>
  <div class="z-card-body">
    <p>Content</p>
  </div>
  <div class="z-card-footer display-flex justify-between">
    <button class="z-button z-button-default">Cancel</button>
    <button class="z-button z-button-primary">Deploy</button>
  </div>
</div>
```
