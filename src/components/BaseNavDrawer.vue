<template>
  <div v-if="drawerIsOpen" class="flex flex-col justify-start items-center bg-white">
    <router-link @click="ToggleDrawerEvent" class="px-4 py-2 mt-2 font-black text-lg uppercase w-full border-b-2 border-indigo-700" :to="{ name: 'Home'}">Home</router-link>
    <router-link @click="ToggleDrawerEvent" class="px-4 py-2 mt-2 font-bold text-lg uppercase w-full border-b-2 border-indigo-700" :to="{ name: 'Director'}">Lab Director</router-link>
    <router-link @click="ToggleDrawerEvent" class="px-4 py-2 mt-2 font-bold text-lg uppercase w-full border-b-2 border-indigo-700" :to="{ name: 'Members'}">Lab Members</router-link>
    <router-link @click="ToggleDrawerEvent" class="px-4 py-2 mt-2 mb-4 font-bold text-lg uppercase w-full border-b-2 border-indigo-700" :to="{ name: 'Contact'}">Contact</router-link>
  </div> 
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

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
  border-left-width: 8px;
}
</style>
