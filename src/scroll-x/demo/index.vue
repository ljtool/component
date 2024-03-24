<template>
  <demo-block title="mutilClick">
    <button class="m20" @click="showA = !showA">切换区域一</button>
    <button class="m20" @click="showB = !showB">切换区域二</button>
    <div
      id="a"
      v-if="showA"
      v-scroll-x
      style="height: 100px; width: 100vw; background: grey; overflow: auto"
    >
      <div style="width: 200vw; background: grey">test text</div>
      <div style="width: 200vw; background: grey">
        test texttest texttest texttest texttest texttest text
      </div>
    </div>
    <div class="flex">
      <div class="flex1">1</div>
      <div class="flex2">2</div>
      <div class="flex3">3</div>
    </div>
    <div
      id="b"
      v-if="showB"
      v-scroll-x
      style="height: 100px; width: 100vw; background: grey"
    >
      <div style="width: 200vw; background: grey">test text</div>
      <div style="width: 200vw; background: grey">
        test texttest texttest texttest texttest texttest <br />
        texttest texttest texttest texttest texttest texttest text
      </div>
    </div>
  </demo-block>
</template>

<script setup>
import 'virtual:uno.css'
import vScrollX from 'lj-utils/directive/vScrollX'
import { ref } from 'vue'
import { setLog } from 'lj-utils'
setLog(localStorage.getItem('logLevel'))
const showA = ref(true)
const showB = ref(true)
</script>
