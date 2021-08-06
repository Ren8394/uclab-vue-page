<template>
  <div class="mx-8 my-4 w-4/5 md:mx-16 md:mt-8">
    <AppItemCard :title="'lab director'">
      <div class=" flex flex-col items-center p-2 md:flex-row">
        <img src="../assets/director.png" class="mt-2 shadow-lg md:self-start">
        <div class="font-serif md:mx-4 lg:text-lg">
          <div class="mt-2 mb-4">
            <span class="font-bold text-indigo-700 text-lg lg:text-xl">Chia-Tai Chan</span>
            <span></span>
            <span>{{ bio }}</span>
          </div>
          <div class="my-4">
            <div class="font-bold text-indigo-700 text-lg lg:text-xl">Profreesional Experience</div>
            <div class="flex flex-col">
              <div>Feb. 2021 – now:</div>
              <div class="my-2 ml-4">Professor, Department of Biomedical Engineering, National Yang Ming Chiao Tung University</div>
            </div>
            <div class="flex flex-col">
              <div>Aug. 2017 – Jan. 2021:</div>
              <div class="my-2 ml-4">Professor, Department of Biomedical Engineering, National Yang-Ming University</div>
            </div>
            <div class="flex flex-col">
              <div>Aug. 2005 – July 2017:</div>
              <div class="my-2 ml-4">Associate Professor, Institute of Biomedical Engineering, National Yang-Ming University</div>
            </div>
            <div class="flex flex-col">
              <div>Apr. 1999 – Aug. 2005:</div>
              <div class="mt-2 ml-4">Project Researcher, Telecommunication Laboratories Chunghwa Telecom Co., Ltd.</div>
            </div>
          </div>
          <div class="my-4">
            <div class="font-bold text-indigo-700 text-lg lg:text-xl">Research Topics</div>
            <p class="font-bold">Active and Assisted Living: Technologies and Applications</p>
            <ul class="list-disc md:list-none ml-4">
              <li>Ambient Assisted Living Technologies</li>
              <li>Activity Recognition Technologies</li>
              <li>Human Monitoring and Smart Health Technologies</li>
              <li>Machine Learning for Healthcare Technologies</li>
            </ul>
            <p class="font-bold">Personalized Health Information Technologies</p>
            <ul class="list-disc md:list-none ml-4">
              <li>Pervasive Healthcare</li>
              <li>Context-Aware Computing</li>
              <li>Ubiquitous Computing and Intelligence</li>
              <li>Wireless Sensor Networks</li>
            </ul>
          </div>
        </div>
      </div>
    </AppItemCard>

    <AppItemCard :title="'Publication'" class="mt-4">
      <DirectorPublish :publishType="'journal'"/>
      <DirectorPublish :publishType="'book'"/>
      <DirectorPublish :publishType="'conference'"/>
      <DirectorPublish :publishType="'thesis'"/>
    </AppItemCard>    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppItemCard from '../components/AppItemCard.vue'
import DirectorPublish from '../components/DirectorPublish.vue'

export default defineComponent({
  components: {AppItemCard, DirectorPublish},
  setup() {
    const bio = `
    received his Ph.D. degree in Computer Science and Information Engineering from National Chiao Tung University, Hsinchu, Taiwan in 1998. 
    From 1999 to 2005, he was with Telecommunication Laboratories Chunghwa Telecom Co., Ltd., as a Project Researcher. 
    In August 2005, he joined the faculty of the Institute of Biomedical Engineering, National Yang-Ming University, as an Associate Professor. 
    He is currently a professor in the Department of Biomedical Engineering, National Yang Ming Chiao Tung University. 
    His research interests include Active and Assisted Living: Technologies and Applications, Personalized Health Information Technologies.
    `
    return {bio}
  },
})
</script>
