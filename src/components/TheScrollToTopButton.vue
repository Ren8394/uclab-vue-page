<template>
    <button @click="scrollTop" class="fixed bottom-2 right-2 md:bottom-10 md:right-10 z-100">
        <img src="../assets/icon/arrow_upward.svg" class="border-2 border-indigo-700 bg-indigo-700 rounded-xl">
    </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {      

        const scrollTop = () => {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }

        return { scrollTop }
    },
})
</script>
