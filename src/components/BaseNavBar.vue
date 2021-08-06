<template>
  <nav class="flex justify-between items-center border-b border-gray-200 mx-4 px-4 py-2 md:px-8 md:py-4">
    <div class="flex items-center">
      <img class="hidden md:inline-block md:mr-6" src="../assets/uclab-logo.png">
      <div class="flex flex-col">
        <span class="font-extrabold text-indigo-700 text-xl md:text-2xl">Ubiquitous Computing</span>
        <span class="font-semibold text-sm md:text-base"><a href="https://ymbme.nycu.edu.tw/index.php/zh-tw/">Department of BioMedical Engineering</a></span>
        <span class="font-semibold text-sm md:text-base"><a href="https://www.nycu.edu.tw/">National Yang Ming Chiao Tung University</a></span>
      </div>
    </div>
    <div>
      <div class="hidden xl:inline-block flex">
        <router-link class="mx-2 my-2 px-4 py-2 font-bold text-lg" :to="{ name: 'Home'}">Home</router-link>
        <router-link class="mx-2 my-2 px-4 py-2 font-bold text-lg" :to="{ name: 'Director'}">Lab Director</router-link>
        <router-link class="mx-2 my-2 px-4 py-2 font-bold text-lg" :to="{ name: 'Members'}">Lab Members</router-link>
        <router-link class="mx-2 my-2 px-4 py-2 font-bold text-lg" :to="{ name: 'Contact'}">Contact</router-link>
      </div>
      <button v-if="drawerIsOpen" @click="ToggleDrawerEvent" class="xl:hidden"><img src="../assets/icon/menu_open.svg"></button>
      <button v-else @click="ToggleDrawerEvent" class="xl:hidden"><img src="../assets/icon/menu.svg"></button>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

  props: ['drawerIsOpen'],
  setup(props, context) {

    function ToggleDrawerEvent() {
      context.emit('ToggleDrawer')
    }
    
    return {ToggleDrawerEvent}
  },
})
</script>

<style scoped>
.router-link-active {
  border-bottom-width: 2px;
  border-color: rgba(67, 56, 202, 1);
}
</style>
