<script setup>
  import { ref } from "vue";
  import Container from "@/components/Container.vue";
  import Header from "@/components/Header.vue";
  import Main from "@/components/Main.vue";
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
</script>

<template>
  <div class="h-screen p-12 bg-gray-300 select-none font-serif dark:bg-black transition-all duration-700">
    <Container>
      <Header :data="headerData" :lang="changedLang" @lang-change="langChange"></Header>
      <Main :data="mainData" :lang="changedLang"></Main>
      <Footer></Footer>
    </Container>
  </div>
</template>



