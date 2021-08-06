<template>
  <div class="flex flex-col h-screen static">
    <header class="flex-none">
      <BaseNavBar :drawerIsOpen="drawerIsOpen" @ToggleDrawer="ToggleDrawer"/>
    </header>
    <main class="flex-grow bg-white flex flex-col items-center relative">
      <router-view></router-view>
      <BaseNavDrawer class="absolute right-0 w-8/12 h-full z-1" :drawerIsOpen="drawerIsOpen" @ToggleDrawer="ToggleDrawer"/>
    </main>
    <ScrollTopButton v-if="scrollButtonShow"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import BaseNavBar from './components/BaseNavBar.vue'
import BaseNavDrawer from './components/BaseNavDrawer.vue'
import ScrollTopButton from './components/TheScrollToTopButton.vue'

export default defineComponent({
  name: 'APP',
  components: {BaseNavBar, BaseNavDrawer, ScrollTopButton},
  setup() {

    const drawerIsOpen = ref(false)
    const scrollButtonShow = ref(false)

    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButtonShow.value = true
      } else {
        scrollButtonShow.value = false
      }
    })

    const ToggleDrawer = () => {
      drawerIsOpen.value = !drawerIsOpen.value
    }

    return {drawerIsOpen, ToggleDrawer, scrollButtonShow}
  },
})
</script>

