<template>
  <div class="flex flex-col justify-center items-center mx-8 my-4 w-full md:flex-row md:mx-16 md:mt-8">
    <div class="flex flex-col justify-start w-4/5 h-full max-w-screen-md">
      <AppItemCard v-for="level in ['Ph.D.', 'master', 'bachelor']" :key="level" :title="level + ' students'" class="mb-4 md:mx-4">
        <div v-for="(member, index) in members" :key="index" class="flex font-serif lg:text-lg">
            <li v-if="member.level == level" class="list-square">{{member.name}}</li>
            <p v-if="member.level == level" class="px-4 md:px-8">{{member.email}}</p>
        </div>
      </AppItemCard>
    </div>
    <div class="w-4/5 max-w-screen-md h-full">
      <AppItemCard v-for="level in ['alumni']" :key="level" :title="level" class="mb-4 md:mx-4">
        <div v-for="(member, index) in members" :key="index" class="flex font-serif lg:text-lg">
            <li v-if="member.level == level" class="list-square">{{member.name}}</li>
            <p v-if="member.level == level" class="px-4 md:px-8">{{member.email}}</p>
        </div>
      </AppItemCard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import membersData from '../data/members.json'
import AppItemCard from '../components/AppItemCard.vue'

export default defineComponent({
  components: {AppItemCard},
  setup() {
    const members = membersData
    return {members}
  },
})
</script>
