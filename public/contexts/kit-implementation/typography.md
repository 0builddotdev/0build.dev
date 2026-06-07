# Typography

```html
<h1 class="z-h1">The Joke Tax Chronicles</h1>

<p class="z-text-lead mt" style="--mt: 6">
  Once upon a time, in a far-off land, there was a very lazy king who spent all
  day lounging on his throne. One day, his advisors came to him with a problem:
  the kingdom was running out of money.
</p>

<h2 class="z-h2 mt" style="--mt: 6">The King's Plan</h2>

<p class="z-paragraph">
  The king thought long and hard, and finally came up with a
  <a class="z-link" href="#">brilliant plan</a>: he would tax the jokes in the
  kingdom.
</p>

<blockquote class="z-blockquote">
  "After all," he said, "everyone enjoys a good joke, so it's only fair that
  they should pay for the privilege."
</blockquote>

<h3 class="z-h3 mt" style="--mt: 6">The Joke Tax</h3>

<p class="z-paragraph">
  The king's subjects were not amused. They grumbled and complained, but the
  king was firm:
</p>

<ul class="z-list z-list-disc mt" style="--mt: 6">
  <li>1st level of puns: 5 gold coins</li>
  <li>2nd level of jokes: 10 gold coins</li>
  <li>3rd level of one-liners : 20 gold coins</li>
</ul>

<p class="z-paragraph">
  As a result, people stopped telling jokes, and the kingdom fell into a gloom.
  But there was one person who refused to let the king's foolishness get him
  down: a court jester named Jokester.
</p>

<h3 class="z-h3 mt" style="--mt: 6">Jokester's Revolt</h3>

<p class="z-paragraph">
  Jokester began sneaking into the castle in the middle of the night and leaving
  jokes all over the place: under the king's pillow, in his soup, even in the
  royal toilet. The king was furious, but he couldn't seem to stop Jokester.
</p>

<p class="z-paragraph">
  And then, one day, the people of the kingdom discovered that the jokes left by
  Jokester were so funny that they couldn't help but laugh. And once they
  started laughing, they couldn't stop.
</p>

<h3 class="z-h3 mt" style="--mt: 6">The People's Rebellion</h3>

<p class="z-paragraph">
  The people of the kingdom, feeling uplifted by the laughter, started to tell
  jokes and puns again, and soon the entire kingdom was in on the joke.
</p>

<table class="z-table z-table-divider z-table-striped mt" style="--mt: 6">
  <thead>
    <tr>
      <th>King's Treasury</th>
      <th>People's happiness</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Empty</td>
      <td>Overflowing</td>
    </tr>
    <tr>
      <td>Modest</td>
      <td>Satisfied</td>
    </tr>
    <tr>
      <td>Full</td>
      <td>Ecstatic</td>
    </tr>
  </tbody>
</table>

<p class="z-paragraph">
  The king, seeing how much happier his subjects were, realized the error of his
  ways and repealed the joke tax. Jokester was declared a hero, and the kingdom
  lived happily ever after.
</p>

<p class="z-paragraph">
  The moral of the story is: never underestimate the power of a good laugh and
  always be careful of bad ideas.
</p>
```

## Headings

Add one of the following classes to modify the size and style of headings. Usually, these classes would be used on heading elements, but they work also with any other element like a `div` element.

| Class    | Description                            |
| -------- | -------------------------------------- |
| `.z-h1` | Add this class to apply an h1 heading. |
| `.z-h2` | Add this class to apply an h2 heading. |
| `.z-h3` | Add this class to apply an h3 heading. |
| `.z-h4` | Add this class to apply an h4 heading. |
| `.z-h5` | Add this class to apply an h5 heading. |
| `.z-h6` | Add this class to apply an h6 heading. |

```html
<div class="z-h1">h1</div>
<div class="z-h2 mt" style="--mt: 4">h2</div>
<div class="z-h3 mt" style="--mt: 4">h3</div>
<div class="z-h4 mt" style="--mt: 4">h4</div>
<div class="z-h5 mt" style="--mt: 4">h5</div>
<div class="z-h6 mt" style="--mt: 4">h6</div>
```

## Hero

Add one of the following classes to apply hero headings. These classes are typically used to add a prominent message with a very large font size.

| Class              | Description                                      |
| ------------------ | ------------------------------------------------ |
| `.z-hero-small`   | Add this class to apply a small-sized heading.   |
| `.z-hero-medium`  | Add this class to apply a medium-sized heading.  |
| `.z-hero-large`   | Add this class to apply a large-sized heading.   |
| `.z-hero-xlarge`  | Add this class to apply a xlarge-sized heading.  |
| `.z-hero-2xlarge` | Add this class to apply a 2xlarge-sized heading. |
| `.z-hero-3xlarge` | Add this class to apply a 3xlarge-sized heading. |

```html
<h1 class="z-hero-small">Small</h1>
<h1 class="z-hero-medium mt" style="--mt: 4">Medium</h1>
<h1 class="z-hero-large mt" style="--mt: 4">Large</h1>
<h1 class="z-hero-xlarge mt" style="--mt: 4">XL</h1>
<h1 class="z-hero-2xlarge mt" style="--mt: 4">2XL</h1>
<h1 class="z-hero-3xlarge mt" style="--mt: 4">3XL</h1>
```

## Heading Styles

Add one of the following classes to modify the size and style of headings.

| Class                 | Description                                                      |
| --------------------- | ---------------------------------------------------------------- |
| `.z-heading-divider` | Add this class to apply a divider to a heading.                  |
| `.z-heading-line`    | Add this class to apply a vertically centered line to a heading. |
| `.z-heading-bullet`  | Add this class to apply a bullet to a heading.                   |

```html
<div class="z-hero-small z-heading-divider">Divider</div>
<div class="z-hero-small z-heading-line mt" style="--mt: 4">
  <span>Line</span>
</div>
<div class="z-hero-small z-heading-line z-text-right mt" style="--mt: 4">
  <span>Line</span>
</div>
<div class="z-hero-small z-heading-line mt text-center" style="--mt: 4">
  <span>Line</span>
</div>
<div class="z-hero-small z-heading-bullet mt" style="--mt: 4">Bullet</div>
```

## Paragraph

```html
<p class="z-paragraph">
  The king, seeing how much happier his subjects were, realized the error of his
  ways and repealed the joke tax.
</p>
```

## Blockquote

```html
<blockquote class="z-blockquote">
  "After all," he said, "everyone enjoys a good joke, so it's only fair that
  they should pay for the privilege."
</blockquote>
```

## Inline code

```html
<code class="z-codespan">0build</code>
```

## Text

| Class               | Description                                                                                                          |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `.z-text-lead`     | <span class="z-text-lead">Add this class to highlight text, for example in article subtitles.</span>                |
| `.z-text-meta`     | <span class="z-text-meta">Add this class to a paragraph that contains meta text about an article or similar.</span> |
| `.z-text-truncate` | Prevents text from wrapping into multiple lines, truncating it and displaying an ellipsis instead.                   |
| `.z-text-break`    | Breaks strings, if their length exceeds the width of their container.                                                |

### Background

To apply a gradient or background image to text, add the `.z-text-background` class to a `<span>` element inside the text element. Styles that don't define a `background-image`, will apply the primary color.

```html
<h1><span class="z-text-background"></span></h1>
```

```html
<div class="z-hero-large">
  <span
    class="z-text-background"
    style="background-image: linear-gradient(90deg, #e4e405 0%, #f01ebb 100%)"
  >
    FRNKN
  </span>
</div>
```