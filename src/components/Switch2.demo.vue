<demo>
支持 disabled
</demo>
<template>
  <h3>支持disabled：true，false</h3>
  <Switch v-model:value="bool" disabled/>
</template>

<script lang='ts' setup>
import {ref} from "vue"
import Switch from "../lib/Switch.vue"

const bool = ref(false)

</script>

<style lang="scss" scoped>
h3 {
  font-size: 20px;
  margin-bottom: 15px;
}
</style>
