<script setup>
  import profileImage from '@/assets/images/profile.jpg'
  import cv from '@/assets/docs/cv-aleksa-milosevic.pdf'

  function downloadCv() {
    window.open(cv, '_blank');
  }



  defineProps({
    data: Object,
    lang: String
  });
  
</script>

<template>
    <div class="flex-grow p-0 lg:p-8 flex justify-around items-center transition-all duration-700 flex-col-reverse md:flex-row">
      <div class="w-full flex flex-col animate-[slideLeftToRight_1s_ease-in-out] items-center md:items-start">
        <div class="w-[80%]">
          <p class="mb-2 font-extrabold text-xs md:text-xl lg:text-2xl dark:text-white" v-html="data.title[lang]"></p>
          <p class="mb-6 dark:text-white text-[10px] lg:text-sm text-justify" v-html="data.description[lang]"></p>
        </div>
        <button class="bg-purple-700 text-xs w-32 h-8 lg:w-40 lg:h-10 rounded-3xl flex justify-center items-center shadow-gray-400 shadow-md hover:shadow-purple-400 hover:bg-purple-600 transition-all" @click="downloadCv">
          <i class="pi pi-file text-white text-xs md:text-sm mr-2"></i>
          <p class="text-white text-xs lg:text-sm">{{data.button[lang]}}</p>
        </button>


      </div>

      <div class="w-full flex justify-center md:justify-end animate-[slideRightToLeft_1s_ease-in-out] mb-8 mt-8">
        <img :src='profileImage' alt="profile-picture" class="lg:size-[300px] md:rounded-3xl shadow-gray-400 size-[200px] rounded-full shadow-md overflow-hidden transition-all">
      </div>
    </div>
</template>