<template>
  <div class="mx-8 my-4 w-4/5 max-w-screen-xl md:mx-16 md:mt-8">
    <AppItemCard :title="'Contact'">
      <div class="flex flex-col items-center md:flex-row md:items-start md:justify-between">
        <div>
          <div class="font-serif flex items-center m-2">
            <img src="../assets/icon/post.svg">
            <p class="font-semibold md:text-lg">&nbsp;Post Address:</p>
          </div>
          <p class="font-serif mx-8 mb-4">
            Multi-Media Communications Lab <br>
            Department of BioMedical Engineering, <br>
            National Yang Ming Chiao Tung University <br>
            11221 台北市北投區立農街二段155號
          </p>
          <div class="font-serif flex items-center m-2">
            <img src="../assets/icon/phone.svg">
            <p class="font-semibold md:text-lg">&nbsp;Phone:</p>
          </div>
          <p class="font-serif mx-8 mb-4">
            (02)28267000 Ext. 67371&nbsp;&nbsp;FOR ADVISER <br>
            (02)28267000 Ext. 65494&nbsp;&nbsp;FOR LAB
          </p>
          <div class="font-serif flex items-center m-2">
            <img src="../assets/icon/email.svg">
            <p class="font-semibold md:text-lg">&nbsp;Director's Email:</p>
          </div>
          <p class="font-serif mx-8 mb-2">
            ctchan@ym.edu.tw<br>
            ctchan@nycu.edu.tw
          </p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.375086822151!2d121.51151331535765!3d25.123006840870904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae607218a317%3A0x5ee74377bf928f57!2sNational%20Yangming%20Jiaotong%20University!5e0!3m2!1sen!2stw!4v1627522759845!5m2!1sen!2stw"
        width="350" height="250" style="border:0;" loading="lazy" class="my-4 md:hidden"></iframe>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.375086822151!2d121.51151331535765!3d25.123006840870904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae607218a317%3A0x5ee74377bf928f57!2sNational%20Yangming%20Jiaotong%20University!5e0!3m2!1sen!2stw!4v1627522759845!5m2!1sen!2stw"
        width="600" height="450" style="border:0;" loading="lazy" class="hidden m-2 md:inline-block"></iframe>
      </div>
    </AppItemCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppItemCard from '../components/AppItemCard.vue'


export default defineComponent({
  components: {AppItemCard},
  setup() {
    return {}
  },
})
</script>
