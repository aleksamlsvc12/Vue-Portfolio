<script setup>
  import { ref, computed } from "vue";
  import {RouterView, useRoute} from 'vue-router';

  import Container from "@/components/Container.vue";
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";

  import data from '@/assets/data/data.js';

  if(!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'english');
  }

  let changedLang = ref(localStorage.getItem('lang'));

  function langChange(lang){
    changedLang.value = lang;    
  }

  const headerData = data.header;
  const mainData = data.main;
  const projectsData = data.projects

  const route = useRoute();
  const currentData = computed(()=>{
    if(route.name === 'home'){
      return mainData;
    }else if(route.name === 'projects'){
      return projectsData;
    }
    return{};
  }); 
</script>

<template>
  <div class="h-screen p-12 bg-gray-300 select-none font-serif dark:bg-black transition-all duration-700">
    <Container>
      <Header :data="headerData" :lang="changedLang" @lang-change="langChange"></Header>
      
      <RouterView v-slot="{Component}">
        <component :is="Component" :data="currentData" :lang="changedLang"></component>
      </RouterView>

      <Footer></Footer>
    </Container>
  </div>
</template>



