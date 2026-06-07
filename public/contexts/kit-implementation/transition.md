# Transition

## Usage

To toggle a transition on hover or focus, add the `.z-transition-toggle` class to a parent element. Also add `tabindex="0"` to make the animation focusable through keyboard navigation and on touch devices. Add one of the `.z-transition-*` classes to any child element to apply the actual effect.

| Class                                                                                                                                                           | Description                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `.z-transition-fade`                                                                                                                                           | Lets the element fade in                                                           |
| `.z-transition-scale-up`<br /> `.z-transition-scale-down`                                                                                                     | The element scales up or down.                                                     |
| `.z-transition-slide-top`<br /> `.z-transition-slide-bottom`<br /> `.z-transition-slide-left`<br /> `.z-transition-slide-right`                             | Lets the element slide in from the top                                             |
| `.z-transition-slide-top-small`<br /> `.z-transition-slide-bottom-small`<br /> `.z-transition-slide-left-small`<br /> `.z-transition-slide-right-small`     | The element slides in from the top, bottom, left or right with a smaller distance. |
| `.z-transition-slide-top-medium`<br /> `.z-transition-slide-bottom-medium`<br /> `.z-transition-slide-left-medium`<br /> `.z-transition-slide-right-medium` | The element slides in from the top, bottom, left or right with a medium distance.  |

```html
<div class="z-transition-toggle" tabindex="0">
  <div class="z-transition-fade"></div>
</div>
```

```html
<div
  class="display-grid grid-cols gap sm:grid-cols-3"
  style="--grid-cols: 2; --gap: 4; --small-grid-cols: 3"
>
  <div class="text-center">
    <div class="z-transition-toggle z-inline-clip" tabindex="0">
      <img src="/images/dark.jpg" width="1800" height="1200" alt="" />
      <div
        class="z-position-cover z-position-small z-transition-fade bg/o p"
        style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
      >
        <p class="z-h4">Fade</p>
      </div>
    </div>
    <p class="z-h3 mt" style="--mt: 4">Fade</p>
  </div>
  <div class="text-center">
    <div class="z-transition-toggle z-inline-clip" tabindex="0">
      <img src="/images/dark.jpg" width="1800" height="1200" alt="" />
      <div
        class="z-position-bottom z-transition-slide-bottom bg/o p"
        style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
      >
        <p class="z-h4">Bottom</p>
      </div>
    </div>
    <p class="z-h3 mt" style="--mt: 4">Bottom</p>
  </div>
  <div class="text-center">
    <div class="z-transition-toggle z-inline-clip" tabindex="0">
      <img src="/images/dark.jpg" width="1800" height="1200" alt="" />
      <div class="z-position-center">
        <span
          class="z-transition-fade color"
          style="--color: var(--color-white)"
        >
          <z-icon icon="plus"></z-icon>
        </span>
      </div>
    </div>
    <p class="z-h3 mt" style="--mt: 4">Icon</p>
  </div>
  <div class="text-center">
    <div class="z-transition-toggle z-inline-clip" tabindex="0">
      <img src="/images/dark.jpg" width="1800" height="1200" alt="" />
      <img
        class="z-position-cover z-transition-scale-up"
        src="/images/light.jpg"
        alt=""
      />
    </div>
    <p class="z-h3 mt" style="--mt: 4">2 Images</p>
  </div>
  <div class="text-center">
    <div class="z-transition-toggle z-inline-clip" tabindex="0">
      <img
        class="z-transition-scale-up z-transition-opaque"
        src="/images/dark.jpg"
        width="1800"
        height="1200"
        alt=""
      />
    </div>
    <p class="z-h3 mt" style="--mt: 4">Scale Up Image</p>
  </div>
  <div class="text-center">
    <div class="z-transition-toggle z-inline-clip" tabindex="0">
      <img src="/images/dark.jpg" width="1800" height="1200" alt="" />
      <div class="z-position-center">
        <div class="z-transition-slide-top-small">
          <h4 class="color" style="--color: var(--color-white)">Headline</h4>
        </div>
        <div class="z-transition-slide-bottom-small">
          <h4 class="color" style="--color: var(--color-white)">Subheadline</h4>
        </div>
      </div>
    </div>
    <p class="z-h3 mt" style="--mt: 4">Small Top + Bottom</p>
  </div>
</div>
```