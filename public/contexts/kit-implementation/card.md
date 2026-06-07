# Card

## Usage

The Card component consists of the card itself, the card body and an optional card title. Typically, cards are arranged in grid columns.

| Class            | Description                                                                    |
| ---------------- | ------------------------------------------------------------------------------ |
| `.z-card`       | Add this class to a `<div>` element to define the Card component.              |
| `.z-card-body`  | Add this class to the card to create padding between the card and its content. |
| `.z-card-title` | Add this class to a heading to define a card title.                            |

```html
<div class="z-card z-card-body">
  <h3 class="z-card-title"></h3>
</div>
```

```html
<div class="z-card z-card-body max-w-sm">
  <h3 class="z-card-title">Default</h3>
  <p class="mt" style="--mt: 4">
    Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed
    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
</div>
```

## Style modifiers

There are several style modifiers available. Just add one of the following classes to apply a different look.

- `.z-card-primary`
- `.z-card-secondary`
- `.z-badge-danger`
- `.z-badge-warning`
- `.z-badge-success`
- `.z-badge-info`

```html
<div class="z-card"></div>

<div class="z-card z-card-primary"></div>

<div class="z-card z-card-secondary"></div>

<div class="z-card z-card-success"></div>

<div class="z-card z-card-warning"></div>

<div class="z-card z-card-info"></div>

<div class="z-card z-card-danger"></div>
```

```html
<div class="display-grid gap md:grid-cols" style="--gap: 4; --md-grid-cols: 2">
  <div>
    <div class="z-card z-card-body">
      <h3 class="z-card-title">Default</h3>
      <p class="mt" style="--mt: 4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  </div>
  <div>
    <div class="z-card z-card-body z-card-primary">
      <h3 class="z-card-title">Primary</h3>
      <p class="mt" style="--mt: 4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  </div>
  <div>
    <div class="z-card z-card-body z-card-secondary">
      <h3 class="z-card-title">Secondary</h3>
      <p class="mt" style="--mt: 4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  </div>
  <div>
    <div class="z-card z-card-body z-card-success">
      <h3 class="z-card-title">Success</h3>
      <p class="mt" style="--mt: 4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  </div>
  <div>
    <div class="z-card z-card-body z-card-warning">
      <h3 class="z-card-title">Warnng</h3>
      <p class="mt" style="--mt: 4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  </div>
  <div>
    <div class="z-card z-card-body z-card-info">
      <h3 class="z-card-title">Info</h3>
      <p class="mt" style="--mt: 4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  </div>
  <div>
    <div class="z-card z-card-body z-card-danger">
      <h3 class="z-card-title">Danger</h3>
      <p class="mt" style="--mt: 4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  </div>
</div>
```

## Header and footer

You can also divide a card into header and footer — around the default body. Just add the `.z-card-header` or `.z-card-footer` class to a `<div>` element inside the card.

```html
<div class="z-card">
  <div class="z-card-header">
    <h3 class="z-card-title"></h3>
  </div>
  <div class="z-card-body"></div>
  <div class="z-card-footer"></div>
</div>
```

```html
<div class="z-card max-w-sm">
  <div class="z-card-header">
    <h3 class="z-card-title">Create project</h3>
    <p class="mt text-muted-foreground" style="--mt: 2">
      Deploy your new project in one-click.
    </p>
  </div>
  <div class="z-card-body">
    <div class="">
      <label class="z-form-label" for="name">Name</label>
      <div class="z-form-controls mt" style="--mt: 2">
        <input
          class="z-input"
          id="name"
          type="text"
          aria-describedby="name-help-block"
          placeholder="Name"
        />
        <div id="name-help-block" class="z-form-help mt" style="--mt: 2">
          The name of your project.
        </div>
      </div>
    </div>

    <div class="mt" style="--mt: 4">
      <label class="z-form-label" for="framework">Framework</label>
      <div class="z-form-controls mt" style="--mt: 2">
        <select class="z-select" name="framework">
          <option value="sveltekit">Sveltekit</option>
          <option value="astro" selected>Astro</option>
        </select>
      </div>
    </div>
  </div>

  <div class="z-card-footer display-flex justify-between">
    <button class="z-button z-button-default">Cancel</button>
    <button class="z-button z-button-primary">Deploy</button>
  </div>
</div>
```