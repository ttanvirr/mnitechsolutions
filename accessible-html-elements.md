## Responsive `<img>`
https://web.dev/learn/design/responsive-images/

### CSS
```
img {
  max-inline-size: 100%;
  block-size: auto;
  aspect-ratio: 2/1;
  object-fit: cover;
  object-position: top center;
}
```
### HTML
```
<img
    src="small-image.png"
    alt="A description of the image."
    width="300"
    height="200"
    loading="lazy"
    decoding="async"
    srcset="small-image.png 300w,
    medium-image.png 600w,
    large-image.png 1200w"
    sizes="(min-width: 66em) 33vw,
    (min-width: 44em) 50vw,
    100vw"
>
```

## `<picture>` Element
https://web.dev/learn/design/picture-element/
```
<picture>
  <source srcset="large.png 1x" media="(min-width: 75em)">
  <source srcset="medium.png 1x, large.png 2x" media="(min-width: 40em)">
  <img src="small.png" alt="A description of the image." width="300" height="200" loading="lazy" decoding="async"
    srcset="small.png 1x, medium.png 2x, large.png 3x">
</picture>
```

## Using Inline SVG ICON
https://web.dev/learn/design/icons/
```
<figure>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-21 -21 42 42" width="100" height="100">
    <title>Smiling face</title>
    <circle r="20" fill="yellow" stroke="black"/>
    <ellipse rx="2.5" ry="4" cx="-6" cy="-7" fill="black"/>
    <ellipse rx="2.5" ry="4" cx="6" cy="-7" fill="black"/>
    <path stroke="black" d="M -12,5 A 13.5,13.5,0 0,0 12,5 A 13,13,0 0,1 -12,5"/>
  </svg>
  <figcaption>
  A description of the image for accessibility
  </figcaption>
</figure>
```

## Buttons or Links With SVG ICON
https://web.dev/learn/design/icons/
```
<button class="menu-trigger" aria-label="Menu">
    <svg aria-hidden="true" focusable="false" width="24" height="28" viewBox="0 0 24 28">
        <!-- svg content -->
    </svg>
</button>
```



