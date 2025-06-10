<script setup>
  defineProps({
    data: Object,
    lang: String
  });

  function openLink(url) {
    window.open(url, '_blank');
  }
</script>

<template>
  <div class="flex-grow p-8 flex justify-around items-center">
    <div class="h-[360px] w-[460px] shadow-md shadow-gray-400 rounded-3xl flex flex-col p-8 justify-between space-y-2 animate-[topSlide_1s_ease-in-out]">
      <p class="text-xl font-bold text-center dark:text-white">{{data.about[lang].header}}</p>
      <p class="text-sm text-gray-500 text-justify">{{data.about[lang].p1}}</p>
      <p class="text-sm text-gray-500 text-justify">{{data.about[lang].p2}}</p>
      <p class="text-sm text-gray-500 text-justify">{{data.about[lang].p3}}</p>
    </div>

    <div class="h-[360px] w-[460px] shadow-md shadow-gray-400 rounded-3xl flex flex-col p-8 justify-between space-y-2 animate-[topSlide_1.5s_ease-in-out]">
      <p class="text-xl font-bold text-center dark:text-white">{{data.education[lang].header}}</p>
      
      <div class="w-full text-center">
        <p class="font-bold text-purple-700 cursor-pointer" @click="openLink(data.education.links[0])">{{data.education[lang].school1}}</p>
        <p class="text-sm text-gray-500">{{data.education[lang].desc1}}</p>
      </div>

      <div class="w-full text-center">
        <p class="font-bold text-purple-700 cursor-pointer" @click="openLink(data.education.links[1])">{{data.education[lang].school2}}</p>
        <p class="text-sm text-gray-500">{{data.education[lang].desc2}}</p>
      </div>
    </div>

    <div class="h-[360px] w-[460px] shadow-md shadow-gray-400 rounded-3xl flex flex-col p-8 justify-between space-y-2 animate-[topSlide_2s_ease-in-out]">
      <p class="text-xl font-bold text-center dark:text-white">{{data.skills[lang].header}}</p>

      <div class="w-full text-center">
        <p class="font-bold text-purple-700 mb-2">{{data.skills[lang].text1}}</p>
        <div class="w-full h-4 shadow-sm shadow-gray-400 rounded-full overflow-hidden">
          <div  class="h-full bg-purple-700 rounded-full animate-[slide_3s_ease-in-out]"
                :style="{ width: data.skills.progress.web}"></div>
        </div>
      </div>

      <div class="w-full text-center">
        <p class="font-bold text-purple-700 mb-2">{{data.skills[lang].text2}}</p>
        <div class="w-full h-4 shadow-sm shadow-gray-400 rounded-full overflow-hidden">
          <div  class="h-full bg-purple-700 rounded-full animate-[slide_3.2s_ease-in-out]"
                :style="{ width: data.skills.progress.git}"></div>
        </div>
      </div>

      <div class="w-full text-center">
        <p class="font-bold text-purple-700 mb-2">{{data.skills[lang].text3}}</p>
        <div class="w-full h-4 shadow-sm shadow-gray-400 rounded-full overflow-hidden">
          <div  class="h-full bg-purple-700 rounded-full animate-[slide_3.4s_ease-in-out]"
                :style="{ width: data.skills.progress.sql}"></div>
        </div>
      </div>

    </div>
  </div>
</template>