<template>
  <div class="font-serif my-2">
    <h2 class="font-bold text-indigo-700 text-lg mx-2 my-2 capitalize md:text-xl md:mx-4">{{ publishTitle }}</h2>
    <ul class="mx-4 md:mx-6">
      <li class="list-decimal px-2 mx-2 lg:text-justify" v-for="(publish, index) in publishes" :key="index">
          <span>{{ beforeAuthors[index] }}&nbsp;</span>
          <span v-if="publish.author.includes(directorEN)" class="font-bold underline">{{ directorEN }}&nbsp;</span>
          <span v-if="publish.author.includes(directorTW)" class="font-bold underline">{{ directorTW }}&nbsp;</span>
          <span>{{ afterAuthors[index] }}&nbsp;</span>
          <span>{{ publish.topic }}&nbsp;</span>
          <span>{{ publish.publisher }}&nbsp;</span>
          <span class="font-bold">{{ publish.remark }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import publications from '../data/publications.json'
import Publish from '../types/Publish'

export default defineComponent({
  props: ['publishType'],
  setup(props) {

    let publishes: Publish[] =[]
    let beforeAuthors: string[] = []
    let afterAuthors: string[] = []
    let publishTitle = ""

    switch(props.publishType) {
      case 'journal':
        publishes = publications.journal
        publishTitle = 'Journal Paper (International)'
        break
      case 'book':
        publishes = publications.book
        publishTitle = 'Book Series'
        break
      case 'conference':
        publishes = publications.conference
        publishTitle = 'Conference Paper (International)'
        break
      case 'thesis':
        publishes = publications.thesis
        publishTitle = 'Thesis'
        break
      default:
        break
    }

    let i: number
    const directorTW = "詹家泰"
    const directorEN = "Chia-Tai Chan"
    for(i = 0; i < publishes.length; i++) {
      let tempAuthor = publishes[i].author
      if(tempAuthor.includes(directorEN)) {
        beforeAuthors.push(publishes[i].author.split(directorEN)[0])
        afterAuthors.push(publishes[i].author.split(directorEN)[1])
      } else if(tempAuthor.includes(directorTW)) {
        beforeAuthors.push(publishes[i].author.split(directorTW)[0])
        afterAuthors.push(publishes[i].author.split(directorTW)[1])  
      } 
    }

    return { publishes, publishTitle ,beforeAuthors, afterAuthors, directorTW, directorEN }

  }
})
</script>
