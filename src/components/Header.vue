<script setup>
  import languageIconWhite from '@/assets/icons/lang.svg';
  import themeIconWhite from '@/assets/icons/dark-theme.svg';

  import languageIconDark from '@/assets/icons/lang-white.svg';
  import themeIconDark from '@/assets/icons/sun.svg';

  const emit = defineEmits(['langChange']);

  function toggleTheme(){
    document.documentElement.classList.toggle('dark');
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
    lang: String
  });
</script>

<template>
    <div class="h-1/6 flex justify-between items-center ml-8 mr-8 transition-all duration-700">
      <div>
        <p class="font-bold text-3xl dark:text-white">Aleksa Milošević.</p>
      </div>
      
      <div class="flex font-semibold text-sm items-center gap-6 dark:text-white">
        <a v-for="(page, index) in data[lang]" :key="index" :href="data.links[index]">
          <p class="hover:underline underline-offset-2 decoration-[2px]">{{page}}</p>
        </a>
        
        <i class="pi pi-language text-black"></i>
        <img :src='languageIconWhite' alt="language" class="size-4 cursor-pointer block dark:hidden" @click = "saveLangInLS">
        <img :src='languageIconDark' alt="language" class="size-4 cursor-pointer hidden dark:block" @click = "saveLangInLS">

        <img :src='themeIconWhite' alt="theme" class="size-4 cursor-pointer block dark:hidden" @click="toggleTheme">
        <img :src='themeIconDark' alt="theme" class="size-4 cursor-pointer hidden dark:block" @click="toggleTheme">
      </div>
    </div>
</template>