<template>
  <button class="demo-button" :style="{ backgroundColor: color }">
    <slot />
  </button>
</template>

<script ts>
export default {
  name: 'DemoButton',

  props: {
    color: String,
    type: {
      type: String,
      default: 'primary',
    },
  },
}
</script>

<style scoped lang="scss">
$color: #fff;
.demo-button {
  min-width: 120px;
  color: $color;
  font-size: 16px;
  line-height: 36px;
  background-color: grey;
  border: none;
  border-radius: 30px;
}
</style>
