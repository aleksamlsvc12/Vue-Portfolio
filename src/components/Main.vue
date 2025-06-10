<script setup>
  import profileImage from '@/assets/images/profile.jpg'
  import cvEng from '@/assets/docs/cv-aleksa-milosevic-english.pdf';
  import cvSer from '@/assets/docs/cv-aleksa-milosevic-serbian.pdf';

  function downloadCvEng() {
    window.open(cvEng, '_blank');
  }

  function downloadCvSer() {
    window.open(cvSer, '_blank');
  }

  defineProps({
    data: Object,
    lang: String
  });
  
</script>

<template>
    <div class="flex-grow p-8 flex justify-around items-center transition-all duration-700">
      <div class="w-1/5"></div>
      <div class="w-full flex flex-col animate-[slideLeftToRight_1s_ease-in-out]">
        <p class="mb-4 font-extrabold text-4xl dark:text-white" v-html="data.title[lang]"></p>
        <p class="mb-8 dark:text-white" v-html="data.description[lang]"></p>
        <button class="bg-purple-700 w-40 h-12 rounded-3xl flex justify-center items-center shadow-gray-400 shadow-md hover:shadow-purple-400 hover:bg-purple-600 transition-all" v-if="lang==='english'" @click="downloadCvEng">
          <i class="pi pi-file text-white text-sm mr-2"></i>
          <p class="text-white">{{data.button[lang]}}</p>
        </button>

        <button class="bg-purple-700 w-40 h-12 rounded-3xl flex justify-center items-center shadow-gray-400 shadow-md hover:shadow-purple-400 hover:bg-purple-600 transition-all" v-else @click="downloadCvSer">
          <i class="pi pi-file text-white text-sm mr-2"></i>
          <p class="text-white">{{data.button[lang]}}</p>
        </button>
      </div>

      <div class="w-full flex justify-center animate-[slideRightToLeft_1s_ease-in-out]">
        <img :src='profileImage' alt="profile-picture" class="size-[360px] rounded-3xl shadow-gray-400 shadow-md overflow-hidden">
      </div>
      <div class="w-1/5"></div>
    </div>
</template>