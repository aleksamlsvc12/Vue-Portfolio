<script setup>
  defineProps({
    data: Object,
    lang: String
  });
</script>

<template>
  <div class="flex-grow p-8 flex justify-around items-center">
    <div class="h-[360px] w-[460px] shadow-md shadow-gray-400 rounded-3xl flex flex-col p-8 justify-between space-y-2">
      <p class="text-xl font-bold text-center dark:text-white">{{data.about[lang].header}}</p>
      <p class="text-sm text-gray-500 text-justify">{{data.about[lang].p1}}</p>
      <p class="text-sm text-gray-500 text-justify">{{data.about[lang].p2}}</p>
      <p class="text-sm text-gray-500 text-justify">{{data.about[lang].p3}}</p>
    </div>

    <div class="h-[360px] w-[460px] shadow-md shadow-gray-400 rounded-3xl flex flex-col p-8 justify-between space-y-2">
      <p class="text-xl font-bold text-center dark:text-white">{{data.education[lang].header}}</p>
      
      <div class="w-full text-center">
        <p class="font-bold text-purple-700 cursor-pointer">{{data.education[lang].school1}}</p>
        <p class="text-sm text-gray-500">{{data.education[lang].desc1}}</p>
      </div>

      <div class="w-full text-center">
        <p class="font-bold text-purple-700 cursor-pointer">{{data.education[lang].school2}}</p>
        <p class="text-sm text-gray-500">{{data.education[lang].desc2}}</p>
      </div>
    </div>

    <div class="h-[360px] w-[460px] shadow-md shadow-gray-400 rounded-3xl flex flex-col p-8 justify-between space-y-2">
      <p class="text-xl font-bold text-center dark:text-white">{{data.skills[lang].header}}</p>

      <div class="w-full text-center">
        <p class="font-bold text-purple-700 mb-2">{{data.skills[lang].text1}}</p>
        <div class="w-full h-4 shadow-sm shadow-gray-400 rounded-full">
          <div  class="h-full bg-purple-700 rounded-full"
                :style="{ width: data.skills.progress.web}"></div>
        </div>
      </div>

      <div class="w-full text-center">
        <p class="font-bold text-purple-700 mb-2">{{data.skills[lang].text2}}</p>
        <div class="w-full h-4 shadow-sm shadow-gray-400 rounded-full">
          <div  class="h-full bg-purple-700 rounded-full"
                :style="{ width: data.skills.progress.git}"></div>
        </div>
      </div>

      <div class="w-full text-center">
        <p class="font-bold text-purple-700 mb-2">{{data.skills[lang].text3}}</p>
        <div class="w-full h-4 shadow-sm shadow-gray-400 rounded-full">
          <div  class="h-full bg-purple-700 rounded-full"
                :style="{ width: data.skills.progress.sql}"></div>
        </div>
      </div>

    </div>
  </div>
</template>