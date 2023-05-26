<template>
  <demo-block title="鼠标点击内容移动">
    <div
      id="a"
      v-scroll-x
      style="height: 100px; width: 100vw; background: grey; overflow: auto"
    >
      <div style="width: 200vw; background: grey">test text</div>
      <div style="width: 200vw; background: grey">
        test texttest texttest texttest texttest texttest text
      </div>
    </div>
  </demo-block>
</template>

<script setup>
import { scrollX as vScrollX } from 'lj-utils/directive/scrollX';
</script>
