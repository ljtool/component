# scrollX PC 鼠标横向滑动 scroll

### 介绍

scroll PC 使用鼠标移动scroll区域

### 引入

```js
// vue2
import vScroll from 'lj-component/directives/vScroll';
directives: {
   scroll: vScroll,
},
// vue3 setup
import vScroll from 'lj-component/directive/vScroll';
// 或
import {vScroll} from 'lj-component/directive/vScroll';
```

## 代码演示

### 基础用法

```html
<div
  v-scroll
  style="height: 100px; width: 100vw; background: grey; overflow: auto"
>
  <div style="width: 200vw; background: grey">test text</div>
</div>
<div
  v-scroll:x
  style="height: 100px; width: 100vw; background: grey; overflow: auto"
>
  <div style="width: 200vw; background: grey">test text</div>
</div>
<div
  v-scroll:y
  style="height: 100px; width: 100vw; background: grey; overflow: auto"
>
  <div style="height: 200vw; background: grey">test text</div>
</div>
```
