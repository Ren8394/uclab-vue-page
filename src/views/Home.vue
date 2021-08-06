<template>
  <div class="mx-8 my-4 w-4/5 max-w-screen-md md:mx-16 md:mt-8">
    <AppItemCard :title="'Introduction'">
      <div class="font-serif font-bold text-indigo-700 text-lg md:text-xl md:mt-2 md:mx-2 leading-relaxed flex justify-center">Ubiquitous Computing Laboratory</div>
      <p class="font-serif md:text-lg mt-2 md:mx-2 leading-relaxed">&nbsp;&nbsp;{{ firstArticle }}</p><br>
      <p class="font-serif md:text-lg md:mb-2 md:mx-2 leading-relaxed">&nbsp;&nbsp;{{ secondArticle }}</p>
    </AppItemCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppItemCard from '../components/AppItemCard.vue'

export default defineComponent({
  components: {AppItemCard},
  setup() {

    const firstArticle = `
    The recent advances in wireless and network technologies have already made a significant impact on current E-healthcare and Telemedicine systems services. 
    The next evolution of healthcare systems will be towards personalized healthcare systems that empower consumers to manage their health, and deliver care to the individual. 
    These will reshape some of the mechanisms of existing healthcare delivery routes. 
    The convergence of information and telecommunication infrastructures around healthcare systems is enabling effective technologies to improve the quality of patient care. 
    The integration of emerging mobile technologies into these applications needs to be evaluated in a systematic way.
    `
    const secondArticle = `
    Our lab here at the Department of Biomedical Engineering, National Yang Ming Chiao Tung University focuses on exactly such research areas in the fields of computer network and information technology and activities upon ubiquitous computing.
    `

    return {firstArticle, secondArticle}
  },
})
</script>

