# lazy

### 介绍

基于视口的图片懒加载 [IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)

### 引入

```js
import vLazy from 'lj-component/directives/vLazy';
directives: {
   mutilClick: vLazy,
},
// vue3 setup
import vLazy from 'lj-component/directive/vLazy';
// 或
import {vLazy} from 'lj-component/directive/vLazy';
```

## 代码演示

### 基础用法

```html
<div>使用defaultSrcSet(src) 设置全局默认图</div>
<div>data-default:设置默认图（优先）</div>

<img
  class="h-400 w-300 object-cover"
  v-lazy="'https://picsum.photos/300/300?t=3'"
  alt=""
/>

<img
  class="h-400 w-300 object-cover"
  data-default="https://img.lj4.top/img/2.jpg"
  v-lazy="'https://picsum.photos/300/300?t=2'"
  alt=""
/>

<img
  class="h-400 w-300 object-cover"
  data-default="https://img.lj4.top/img/1.jpg"
  :data-src="'https://picsum.photos/300/300?t=1'"
  v-lazy
  alt=""
/>
```
