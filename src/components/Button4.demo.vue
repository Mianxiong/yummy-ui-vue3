<demo>
支持 disabled
</demo>
<template>
  <h3>disabled支持：true，false</h3>
  <Button disabled>禁用按钮</Button>
  <Button theme="link" disabled>禁用链接按钮</Button>
  <Button theme="text" disabled>禁用按钮</Button>
</template>

<script lang="ts" setup>
import Button from "../lib/Button.vue"

</script>
<style lang="scss" scoped>
h3 {
  font-size: 20px;
  margin-bottom: 15px;
}
</style>