# mutilClick

### 介绍

mutilClick连点触发

### 引入

```js
import vMutilClick from 'lj-component/directives/vMutilClick';
directives: {
   mutilClick: vMutilClick,
},
// vue3 setup
import vMutilClick from 'lj-component/directive/vMutilClick';
// 或
import {vMutilClick} from 'lj-component/directive/vMutilClick';
```

## 代码演示

### 基础用法

```html
<button v-mutil-click="() => console.log(2 + '连击')">default:2连击</button>
<button data-count="3" v-mutil-click="() => console.log(3 + '连击')">
  default:3连击
</button>
<button v-mutil-click="() => console.log(2 + '连击')">default:2连击</button>
```
