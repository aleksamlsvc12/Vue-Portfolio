<script setup>
  import {onMounted, ref} from 'vue'

  import languageIconWhite from '@/assets/icons/lang.svg';
  import themeIconWhite from '@/assets/icons/dark-theme.svg';

  function toggleTheme(){
    document.documentElement.classList.toggle('dark');
  }
</script>

<template>
    <div class="h-1/6 flex justify-between items-center ml-8 mr-8 transition-all duration-700">
      <div>
        <p class="font-bold text-3xl dark:text-white">Aleksa Milošević.</p>
      </div>
      
      <div class="flex font-semibold text-sm items-center gap-6 dark:text-white">
        <a href="index.html">
          <p class="hover:underline underline-offset-2 decoration-[2px]">Home</p>
        </a>
        
        <a href="projects.html">
          <p class="hover:underline underline-offset-2 decoration-[2px]">Projects</p>
        </a>
        
        <a href="about.html">
          <p class="hover:underline underline-offset-2 decoration-[2px]">About</p>
        </a>
        
        <img :src='languageIconWhite' alt="language" class="size-4 cursor-pointer">
        <img :src='themeIconWhite' alt="theme" class="size-4 cursor-pointer" @click="toggleTheme">
      </div>
    </div>
</template>