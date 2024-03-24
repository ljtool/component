# mutilClick

### 介绍

mutilClick连点触发

### 引入

```js
import scrollX from 'lj-utils/directives/scrollX';
directives: {
   scrollX: scrollX,
},
// vue3 setup
import vScrollX from 'lj-utils/directive/scrollX';
// 或
import {scrollX as vScrollX} from 'lj-utils/directive/scrollX';
```

## 代码演示

### 基础用法

```html
<div
  v-scroll-x
  style="height: 100px; width: 100vw; background: grey; overflow: auto"
>
  <div style="width: 200vw; background: grey">test text</div>
</div>
```
