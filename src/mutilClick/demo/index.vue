<template>
  <demo-block title="mutilClick">
    <div v-for="(item, index) in [1, 2, 3, 4, 5]" :key="index">
      <button
        :data-count="item"
        v-mutil-click="() => mutilClick(item + '连击')"
        class="m-20"
      >
        {{ item }}连击
      </button>
    </div>
    <button
      v-if="showDef"
      v-mutil-click="() => mutilClick(2 + '连击')"
      class="m-20"
    >
      default:2连击
    </button>
    <div class="m-20">
      <Button size="small" type="primary" @click="showDef = !showDef">
        切换
      </Button>
    </div>
  </demo-block>
</template>

<script setup>
import 'virtual:uno.css'
import vMutilClick from 'lj-utils/directive/vMutilClick'
import { ref } from 'vue'
import { Button } from 'vant'
import 'vant/lib/index.css'
import { setLog } from 'lj-utils'

const showDef = ref(true)
setLog(localStorage.getItem('logLevel'))
const mutilClick = (msg) => {
  console.error('click', msg)
}
</script>
