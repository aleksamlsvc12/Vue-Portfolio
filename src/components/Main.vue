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
</script>

<template>
      <div class="flex-grow p-8 flex justify-around items-center transition-all duration-700">
      <div>
        <p class="mb-4 font-extrabold text-4xl dark:text-white">I am an <span class="block text-purple-700">Electrical and Computer Engineer</span></p>
        <p class="mb-8 dark:text-white">I am a final year student of the School of Electrical and Computer Engineering,<span class="block">majoring in Computer Engineering.</span></p>
        <button class="bg-purple-700 pt-2 pb-2 pl-8 pr-8 rounded-3xl flex items-center shadow-gray-400 shadow-md hover:shadow-purple-400 hover:bg-purple-600 transition-all" @click="downloadCvEng">
          <img :src='docIcon' alt="doc" class="size-5 mr-2">
          <p class="text-white">Download CV</p>
        </button>
      </div>

      <img :src='profileImage' alt="profile-picture" class="size-[360px] rounded-3xl shadow-gray-400 shadow-md overflow-hidden">
    </div>
</template>