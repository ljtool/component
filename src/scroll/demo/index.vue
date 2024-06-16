<template>
  <demo-block title="mutilClick">
    <div class="m-10">
      <Button type="default" class="m-20" @click="show.a = !show.a"
        >默认x+y</Button
      >
    </div>
    <div id="a" v-if="show.a" v-scroll class="w-full bg-gray h-100 flex mt-10">
      <div class="" v-for="(item, index) in 10" :key="index">
        <img :src="'https://picsum.photos/100/200?t=' + index" alt="" />
      </div>
    </div>
    <div class="m-10">
      <Button class="m-20" @click="show.b = !show.b">只有x</Button>
    </div>
    <div
      id="a"
      v-if="show.b"
      v-scroll:x
      class="w-full bg-gray h-100 flex mt-10"
    >
      <div class="" v-for="(item, index) in 10" :key="index">
        <img :src="'https://picsum.photos/100/200?t=' + index" alt="" />
      </div>
    </div>

    <div class="m-10">
      <Button class="m-20" @click="show.c = !show.c">只有y</Button>
    </div>
    <div id="a" v-if="show.c" v-scroll:y class="w-full bg-gray h-100 mt-10">
      <div v-for="(item, index) in 5" :key="index">
        <img
          class="w-200"
          :src="'https://picsum.photos/200/200?t=' + index"
          alt=""
        />
      </div>
    </div>
  </demo-block>
</template>

<script setup>
import 'virtual:uno.css'
import 'vant/lib/index.css'
import vScroll from '@/directive/vScroll'
import { reactive } from 'vue'
import { setLog } from 'lj-utils'
import { Button } from 'vant'
setLog(localStorage.getItem('logLevel'))
console.log(APP_VERSION)
const show = reactive({
  a: true,
  b: true,
  c: true,
})
</script>
