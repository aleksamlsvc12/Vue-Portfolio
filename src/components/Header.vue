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
    <div class="h-1/6 flex justify-between items-center ml-8 mr-8 transition-all duration-700">
      <div>
        <p class="font-bold text-3xl dark:text-white">Aleksa Milošević.</p>
      </div>
      
      <div class="flex font-semibold text-sm items-center gap-6 dark:text-white">
        <RouterLink v-for="(page, index) in data[lang]" :key="index" :to="data.links[index]">
          <p class="hover:underline underline-offset-2 decoration-[2px]">{{page}}</p>
        </RouterLink>
        
        <i class="pi pi-language text-black cursor-pointer dark:text-white" @click = "saveLangInLS"></i>
        <i class="pi pi-moon text-black cursor-pointer dark:text-white" @click="toggleTheme"></i>
      </div>
    </div>
</template>