<template>
  <div class="gulu-checkbox" @click="changeChecked">
    <i v-if="props.modelValue" class="iconfont icon-checked"></i>
    <i v-else class="iconfont icon-unchecked"></i>
    <span v-if="$slots.default">
      <slot/>
    </span>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  modelValue?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false
})
const emits = defineEmits<{
  (e: "update:modelValue", value: boolean)
}
>()

const changeChecked = () => {
  emits("update:modelValue", !props.modelValue)
}

</script>

<style lang="scss">
.gulu-checkbox {
  display: inline-block;
  margin-right: 2px;

  .iconfont {
    font-size: 30px;
  }

  .icon-checked {
    color: #27ba9b;

    ~ span {
      color: #27ba9b;
    }
  }

  i {
    position: relative;
    top: 1px;
  }

  span {
    margin-left: 2px;
    font-size: 30px;
  }
}
</style>