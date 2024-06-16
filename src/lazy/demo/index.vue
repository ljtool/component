<template>
  <demo-block title="lazy">
    <Space wrap :size="10">
      <img class="h-400 w-300 object-cover" data-default="https://img.lj4.top/img/1.jpg"
        :data-src="'https://picsum.photos/300/300?t=1'" v-lazy alt="" />
      <img class="h-400 w-300 object-cover" data-default="https://img.lj4.top/img/2.jpg"
        v-lazy="'https://picsum.photos/300/300?t=2'" alt="" />
      <img class="h-400 w-300 object-cover" v-lazy="'https://picsum.photos/300/300?t=3'" alt="" />
      <div class="h-400 w-300" v-for="(_item, index) in 50" :key="index">
        <img class="h-400 w-300 object-cover" :data-default="!index ? '' : 'https://img.lj4.top/img/1.jpg'"
          :data-src="'https://picsum.photos/300/400?t=' + index" v-lazy alt="" />
      </div>
    </Space>
  </demo-block>
</template>

<script setup>
import 'virtual:uno.css'
import 'vant/lib/index.css'
import vLazy from '@/directive/vLazy'
import { showToast, Space } from 'vant'
import { setLog } from 'lj-utils'
import { reactive } from 'vue'
setLog(localStorage.getItem('logLevel'))

const lazyConfig = reactive({
  loading: 'https://picsum.photos/300/400',
  error: 'https://picsum.photos/300/400',
})
const mutilClick = (msg) => {
  showToast(msg)
}
</script>
