<script setup>
  import { RouterLink } from 'vue-router';
  const emit = defineEmits(['langChange','themeChange']);

  function toggleTheme(){
    if (localStorage.getItem('theme') === 'white') {
      localStorage.setItem('theme','dark');
      document.documentElement.classList.add('dark');
    }else{
      localStorage.setItem('theme','white');
      document.documentElement.classList.remove('dark');
    }

    emit('themeChange', localStorage.getItem('theme'));
  }

  function saveLangInLS(){
    if(localStorage.getItem('lang') === 'english'){
      localStorage.setItem('lang', 'serbian');
    }else{
      localStorage.setItem('lang', 'english');
    }

    emit('langChange', localStorage.getItem('lang'));
  }

  defineProps({
    data: Object,
    lang: String,
    theme: String
  });
</script>

<template>
    <div class="h-1/6 flex md:justify-between items-center ml-0 mr-0 lg:ml-8 lg:mr-8 transition-all duration-700 flex-col  md:flex-row flex-shrink-0">
      <div class="mb-4 md:mb-0">
        <p class="font-bold text-xl md:text-3xl dark:text-white text-center">Aleksa Milošević.</p>
      </div>
      
      <div class="flex font-semibold text-xs md:text-sm items-center gap-2 md:gap-6 dark:text-white">
        <RouterLink v-for="(page, index) in data[lang]" :key="index" :to="data.links[index]">
          <p class="hover:underline underline-offset-2 decoration-[2px]">{{page}}</p>
        </RouterLink>
        
        <i class="pi pi-language text-black cursor-pointer dark:text-white" @click = "saveLangInLS"></i>
        <i class="pi pi-moon text-black cursor-pointer dark:text-white" @click="toggleTheme"></i>
      </div>
    </div>
</template>