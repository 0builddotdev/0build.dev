# Comment

## Usage

The Comment component consists of the comment container, a header (avatar, title, meta text), and a body.

| Class               | Description                                                                      |
| ------------------- | -------------------------------------------------------------------------------- |
| `.z-comment`        | Add this class to define the Comment component.                                  |
| `.z-comment-body`   | Add this class to create a comment body.                                         |
| `.z-comment-header` | Add this class to create a comment header.                                       |
| `.z-comment-title`  | Add this class to a heading to create a comment title.                           |
| `.z-comment-meta`   | Add this class to create meta text about your comment.                           |
| `.z-comment-avatar` | Add this class to an `<img>` element to create an avatar for the comment author. |

```html
<article class="z-comment" tabindex="-1" role="comment">
  <header class="z-comment-header">
    <div class="z-comment-avatar">
      <img src="" alt="" />
    </div>
    <div class="z-comment-title"><a href="#">Author</a></div>
    <ul class="z-comment-meta z-subnav">
      <li><a href="#">Just posted</a></li>
    </ul>
  </header>
  <div class="z-comment-body">
    <p>Comment content.</p>
  </div>
</article>
```

## Primary modifier

Add the `.z-comment-primary` class to highlight a comment (e.g. an admin comment).

```html
<article class="z-comment z-comment-primary">...</article>
```

## Lists

Add the `.z-comment-list` class to a `<ul>` element to create a list of comments. You can nest any number of `<ul>` elements inside a comment list.

```html
<ul class="z-comment-list">
  <li>
    <article class="z-comment">...</article>
    <ul>
      <li>
        <article class="z-comment">...</article>
      </li>
    </ul>
  </li>
</ul>
```

## Accessibility

Set the appropriate WAI-ARIA roles, states, and properties:

- Set the `comment` role for each _comment_.

```html
<ul class="z-comment-list">
  <li>
    <article class="z-comment" role="comment">...</article>
    <ul>
      <li>
        <article class="z-comment" role="comment">...</article>
      </li>
    </ul>
  </li>
</ul>
```
