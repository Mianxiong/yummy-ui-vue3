<template>
  <!--  <template v-if="visible">-->
  <!--    <teleport to="body">-->
  <!--      <div class="gulu-dialog-overlay" @click="OnClickOverlay"></div>-->
  <!--      <div class="gulu-dialog-wrapper">-->
  <!--        <div class="gulu-dialog">-->
  <!--          <header>-->
  <!--            <slot name="title"/>-->
  <!--            <span @click="close" class="gulu-dialog-close"></span>-->
  <!--          </header>-->
  <!--          <main>-->
  <!--            <slot name="content"/>-->
  <!--          </main>-->
  <!--          <footer>-->
  <!--            <Button level="main" @click="ok">OK</Button>-->
  <!--            <Button @click="cancel">Cancel</Button>-->
  <!--          </footer>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </teleport>-->
  <!--  </template>-->
  <div class="gulu-dialog" v-show="visible" :class="{fade}">
    <div class="wrapper" :class="{fade}">
      <div class="header">
        <h3>{{ title }}</h3>
        <a @click="closeDialog" href="JavaScript:;" class="iconfont icon-close-new"></a>
      </div>
      <div class="body">
        <slot/>
      </div>
      <div class="footer">
        <slot name="footer"/>
      </div>
    </div>
  </div>
</template>

<!--<script lang='ts' setup>-->
<!--import Button from "./Button.vue"-->

<!--interface Props {-->
<!--  visible?: boolean,-->
<!--  closeOnClickOverlay?: boolean,-->
<!--  ok?: () => boolean,-->
<!--  cancel?: () => void-->
<!--}-->

<!--// const props= defineProps<Props>()-->
<!--//const { visible: false, closeOnClickOverlay: true } = toRefs(props);-->
<!--const props = withDefaults(defineProps<Props>(), {-->
<!--  visible: false,-->
<!--  closeOnClickOverlay: true-->
<!--})-->

<!--const emit = defineEmits<{-->
<!--  (e: "update:visible", value: boolean): void,-->
<!--}-->
<!--&gt;()-->

<!--const close = () => {-->
<!--  emit("update:visible", false)-->
<!--}-->
<!--const OnClickOverlay = () => {-->
<!--  if (props.closeOnClickOverlay) {-->
<!--    close()-->
<!--  }-->
<!--}-->
<!--const confirm = () => {-->
<!--  if (props.ok?.() !== false) {-->
<!--    close()-->
<!--  }-->
<!--}-->
<!--const cancel = () => {-->
<!--  close()-->
<!--}-->
<!--</script>-->

<script lang="ts" setup>
import {ref, watchEffect} from "vue"

interface Props {
  title?: string,
  visible?: boolean
}

const props = defineProps<Props>()
const emits = defineEmits<{
  (e: "update:visible", value: boolean): void,
}
>()

const fade = ref(false)
// visible的值为true打开对话框，否则就是关闭对话框，其实就是在控制fade的值
watchEffect(() => {
  fade.value = props.visible
})

// 自己关闭对话框，但是需要修改父组件提供的数据visible
const closeDialog = () => {
  emits("update:visible", false)
}

</script>
<style scoped lang="scss">
.gulu-dialog {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 8887;
  background: rgba(0, 0, 0, 0);

  &.fade {
    transition: all 0.4s;
    background: rgba(0, 0, 0, 0.5);
  }

  .wrapper {
    width: 600px;
    background: #fff;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    opacity: 0;

    &.fade {
      transition: all 0.4s;
      transform: translate(-50%, -50%);
      opacity: 1;
    }

    .body {
      padding: 20px 40px;
      font-size: 16px;

      .icon-warning {
        color: #cf4444;
        margin-right: 3px;
        font-size: 16px;
      }
    }

    .footer {
      text-align: center;
      padding: 10px 0 30px 0;
    }

    .header {
      position: relative;
      height: 70px;
      line-height: 70px;
      padding: 0 20px;
      border-bottom: 1px solid #f5f5f5;

      h3 {
        font-weight: normal;
        font-size: 18px;
      }

      a {
        position: absolute;
        right: 25px;
        top: 25px;
        font-size: 24px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        color: #999;

        &:hover {
          color: #666;
        }
      }
    }
  }
}
</style>
<!--<style lang="scss">-->
<!--$radius: 4px;-->
<!--$border-color: #d9d9d9;-->
<!--.gulu-dialog {-->
<!--  background: white;-->
<!--  border-radius: $radius;-->
<!--  box-shadow: 0 0 3px fade_out(black, 0.5);-->
<!--  min-width: 15em;-->
<!--  max-width: 90%;-->

<!--  &-overlay {-->
<!--    position: fixed;-->
<!--    top: 0;-->
<!--    left: 0;-->
<!--    width: 100%;-->
<!--    height: 100%;-->
<!--    background: fade_out(black, 0.5);-->
<!--    z-index: 10;-->
<!--  }-->

<!--  &-wrapper {-->
<!--    position: fixed;-->
<!--    left: 50%;-->
<!--    top: 50%;-->
<!--    transform: translate(-50%, -50%);-->
<!--    z-index: 11;-->
<!--  }-->

<!--  > header {-->
<!--    padding: 12px 16px;-->
<!--    border-bottom: 1px solid $border-color;-->
<!--    display: flex;-->
<!--    align-items: center;-->
<!--    justify-content: space-between;-->
<!--    font-size: 20px;-->
<!--  }-->

<!--  > main {-->
<!--    padding: 12px 16px;-->
<!--  }-->

<!--  > footer {-->
<!--    border-top: 1px solid $border-color;-->
<!--    padding: 12px 16px;-->
<!--    text-align: right;-->
<!--  }-->

<!--  &-close {-->
<!--    position: relative;-->
<!--    display: inline-block;-->
<!--    width: 16px;-->
<!--    height: 16px;-->
<!--    cursor: pointer;-->

<!--    &::before,-->
<!--    &::after {-->
<!--      content: '';-->
<!--      position: absolute;-->
<!--      height: 1px;-->
<!--      background: black;-->
<!--      width: 100%;-->
<!--      top: 50%;-->
<!--      left: 50%;-->
<!--    }-->

<!--    &::before {-->
<!--      transform: translate(-50%, -50%) rotate(-45deg);-->
<!--    }-->

<!--    &::after {-->
<!--      transform: translate(-50%, -50%) rotate(45deg);-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->