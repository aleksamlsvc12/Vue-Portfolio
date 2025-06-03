<script setup>
  import profileImage from '@/assets/images/profile.jpg'
  import docIcon from '@/assets/icons/doc.svg'
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
      <div>
        <p class="mb-4 font-extrabold text-4xl dark:text-white" v-html="data.title[lang]"></p>
        <p class="mb-8 dark:text-white" v-html="data.description[lang]"></p>
        <button class="bg-purple-700 pt-2 pb-2 pl-8 pr-8 rounded-3xl flex items-center shadow-gray-400 shadow-md hover:shadow-purple-400 hover:bg-purple-600 transition-all" v-if="lang==='english'" @click="downloadCvEng">
          <img :src='docIcon' alt="doc" class="size-5 mr-2">
          <p class="text-white">{{data.button[lang]}}</p>
        </button>

        <button class="bg-purple-700 pt-2 pb-2 pl-8 pr-8 rounded-3xl flex items-center shadow-gray-400 shadow-md hover:shadow-purple-400 hover:bg-purple-600 transition-all" v-else @click="downloadCvSer">
          <img :src='docIcon' alt="doc" class="size-5 mr-2">
          <p class="text-white">{{data.button[lang]}}</p>
        </button>
      </div>

      <img :src='profileImage' alt="profile-picture" class="size-[360px] rounded-3xl shadow-gray-400 shadow-md overflow-hidden">
    </div>
</template>