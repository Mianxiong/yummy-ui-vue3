<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-caomao"/>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleAside">
      <use xlink:href="#icon-menu"/>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import {inject, Ref, toRefs} from "vue"

interface Props {
  toggleMenuButtonVisible?: boolean
}

const asideVisible = inject<Ref<boolean>>("asideVisible")
const props = withDefaults(defineProps<Props>(), {
  toggleMenuButtonVisible: false
})
const {toggleMenuButtonVisible} = toRefs(props)
const toggleAside = () => {
  asideVisible.value = !asideVisible.value
}

</script>

<style lang="scss" scoped>
$color: #007974;
.topnav {
  color: $color;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;

    > svg {
      width: 48px;
      height: 48px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    display: inline-block;
    width: 36px;
    height: 36px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline;
    }
  }
}
</style>