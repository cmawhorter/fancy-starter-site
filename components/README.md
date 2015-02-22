# Components

Themes can provide extended FUNctionality through components.  

They're a little bit like a more user-friendly partial that can be called from the theme OR data.  

It works like this:

1. Theme supports special html tags
2. Theme + Data = Rendered HTML page
3. HTML runs through theme components pre-processor, which swaps out the custom tag with rendered content

```javascript
// TODO: write example
```

```html
<p>Lorem ipsum</p>

<fancy-code data-language="javascript">
for (var i=0; i < 10; i++) {
  console.log('Hello %s!', i);
}
</fancy-code>

<p>Lorem ipsum</p>
```

And that `fancy-code` block would end up being replaced with something like this: 

```javascript
for (var i=0; i < 10; i++) {
  console.log('Hello %s!', i);
}
```

## Files

HTML elements are taken from the file name the component and prefixed with the fancy namespace.  e.g. code.js or fancy-code.js becomes `<fancy-code>`
