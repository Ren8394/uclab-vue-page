<template>
  <div>
    <div class="flex justify-between items-center w-full bg-indigo-700 rounded-tr-xl rounded-tl-xl">
      <div class="px-4 py-1 font-extrabold text-white text-lg capitalize md:text-xl">{{ title }}</div>
      <img class="px-4 py-1" src="../assets/icon/health.svg">  
    </div>
    <div class="border-2 border-indigo-700 p-2">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['title'],
  setup(props) {
    return {}
  },
})
</script>
