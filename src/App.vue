<script setup>
  import { ref } from "vue";
  import {RouterView} from 'vue-router';

  import Container from "@/components/Container.vue";
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  import Projects from "./components/Projects.vue";

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
</script>

<template>
  <div class="h-screen p-12 bg-gray-300 select-none font-serif dark:bg-black transition-all duration-700">
    <Container>
      <Header :data="headerData" :lang="changedLang" @lang-change="langChange"></Header>
      
      <Projects :data="projectsData" :lang="changedLang"/>
      <!--<RouterView :data="mainData" :lang="changedLang"></RouterView>-->

      <Footer></Footer>
    </Container>
  </div>
</template>



