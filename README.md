<h1 align="center">modern-screenshot</h1>

<p align="center">
  <a href="https://unpkg.com/modern-screenshot">
    <img src="https://img.shields.io/bundlephobia/minzip/modern-screenshot" alt="Minzip">
  </a>
  <a href="https://www.npmjs.com/package/modern-screenshot">
    <img src="https://img.shields.io/npm/v/modern-screenshot.svg" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/modern-screenshot">
    <img src="https://img.shields.io/npm/dw/modern-screenshot" alt="Downloads">
  </a>
  <a href="https://github.com/qq15725/modern-screenshot/issues">
    <img src="https://img.shields.io/github/issues/qq15725/modern-screenshot" alt="Issues">
  </a>
  <a href="https://github.com/qq15725/modern-screenshot/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/modern-screenshot.svg" alt="License">
  </a>
</p>

<p align="center">Generates an image from a DOM node using HTML5 canvas and SVG</p>

<p align="center">Fork from <a href="https://github.com/bubkoo/html-to-image">html-to-image</a></p>

<p align="center">English | <a href="README.zh-CN.md">简体中文</a></p>

## 📦 Install

```sh
npm i modern-screenshot
```

## 🦄 Usage

### Basic

```ts
import { domToPng } from 'modern-screenshot'

domToPng(document.querySelector('#app')).then(dataURL => {
  open().document.write(`<img src="${ dataURL }" />`)
})
```

### CDN

```html
<script src="https://unpkg.com/modern-screenshot"></script>
<script>
  modernScreenshot.domToPng(document.querySelector('body')).then(dataURL => {
    open().document.write(`<img src="${ dataURL }" />`)
  })
</script>
```

### Browser console

> ⚠️ Partial embedding will fail due to CORS

```js
const script = document.createElement('script')
script.src = "https://unpkg.com/modern-screenshot"
document.getElementsByTagName('head')[0].appendChild(script)

script.onload = () => {
  modernScreenshot
    .domToImage(document.querySelector('body'), {
      debug: true,
      progress: (current, total) => {
        console.log(`${ current }/${ total }`)
      }
    })
    .then(img => {
      const width = 600
      const height = img.height * (width / img.width)
      console.log('%c ', [
        `padding: 0 ${ width / 2 }px;`,
        `line-height: ${ height }px;`,
        `background-image: url('${ img.src }');`,
        `background-size: 100% 100%;`,
      ].join(''))
    })
}
```

## Methods

> Such as `domToPng(node, options)`

DOM to dataURL

- [domToPng](src/converts/dom-to-png.ts)
- [domToSvg](src/converts/dom-to-svg.ts)
- [domToJpeg](src/converts/dom-to-jpeg.ts)
- [domToWebp](src/converts/dom-to-webp.ts)
- [domToDataUrl](src/converts/dom-to-data-url.ts)

DOM to data

- [domToBlob](src/converts/dom-to-blob.ts)
- [domToPixel](src/converts/dom-to-pixel.ts)

DOM to HTMLElement

- [domToForeignObjectSvg](src/converts/dom-to-foreign-object-svg.ts)
- [domToImage](src/converts/dom-to-image.ts)
- [domToCanvas](src/converts/dom-to-canvas.ts)

## Options

See the [options.ts](src/options.ts)

## TODO

- [ ] unable to clone closed [shadowDom](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)

  `input::placeholder { color: red; }`

- [ ] unable to clone [css counters](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)

  `content: counter(step);`

- [ ] unable to clone [-webkit-scrollbar](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar)

  `body::-webkit-scrollbar-thumb { background-color: red; }`

## Other interesting packages

| name      | description                                 |
|-----------|---------------------------------------------|
| [dom-vcr] | Generates an `MP4` or `GIF` from a DOM node |

[dom-vcr]: https://github.com/qq15725/dom-vcr
