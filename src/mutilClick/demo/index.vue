<template>
  <demo-block title="mutilClick">
    <Space wrap :size="10">
      <div class="" v-for="(item, index) in [1, 2, 3, 4, 5]" :key="index">
        <Button
          :data-count="item"
          v-mutil-click="() => mutilClick(item + '连击')"
        >
          {{ item }}连击
        </Button>
      </div>
    </Space>
    <Button v-mutil-click="() => mutilClick(2 + '连击')">
      default:2连击
    </Button>
  </demo-block>
</template>

<script setup>
import 'virtual:uno.css'
import 'vant/lib/index.css'
import vMutilClick from '@/directive/vMutilClick'
import { Button, showToast, Space } from 'vant'
import { setLog } from 'lj-utils'
setLog(localStorage.getItem('logLevel'))
const mutilClick = (msg) => {
  showToast(msg)
}
</script>
