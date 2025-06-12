<script setup>
  import { ref, computed, onMounted } from "vue";
  import {RouterView, useRoute} from 'vue-router';

  import Container from "@/components/Container.vue";
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";

  import data from '@/assets/data/data.js';

  if(!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'english');
  }

  if(!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'white');
  }

  onMounted(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });

  const changedLang = ref(localStorage.getItem('lang'));
  const changedTheme = ref(localStorage.getItem('theme'))

  function langChange(lang){
    changedLang.value = lang;    
  }

  function themeChange(theme){
    changedTheme.value = theme;    
  }

  const headerData = data.header;
  const mainData = data.main;
  const projectsData = data.projects;
  const aboutData = data;

  const route = useRoute();
  const currentData = computed(()=>{
    if(route.name === 'home'){
      return mainData;
    }else if(route.name === 'projects'){
      return projectsData;
    }
    else if(route.name === 'about'){
      return aboutData;
    }
    return{};
  }); 
</script>

<template>
  <div class="h-screen p-12 bg-gray-300 select-none font-serif dark:bg-black transition-all duration-700 min-w-[320px]">
    <Container>
      <Header :data="headerData" :lang="changedLang" :theme="changedTheme" @lang-change="langChange" @theme-change="themeChange"></Header>
      
      <RouterView v-slot="{Component}">
        <component :is="Component" :data="currentData" :lang="changedLang" :theme="changedTheme"></component>
      </RouterView>

      <Footer></Footer>
    </Container>
  </div>
</template>



