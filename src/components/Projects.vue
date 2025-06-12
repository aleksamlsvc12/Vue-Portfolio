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
  <div class="custom-scrollbar overflow-y-auto animate-[appear_1s_ease-in-out] h-full">
    <div class="flex-grow p-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <div class="rounded-full shadow-md sm:rounded-[60px] shadow-gray-400 p-6 sm:p-10 w-full items-center sm:items-start hover:scale-95 transition-all overflow-hidden cursor-pointer flex flex-col animate-[appear_1s_ease-in-out]" 
        v-for="(title, index) in data.titles" :key="index" @click="openLink(data.links[index])">
        <p class="font-bold dark:text-white mb-4 text-sm md:text-lg">{{title}}</p>
        <div class="flex justify-between w-full sm:flex-row flex-col items-center gap-y-2">
          <span 
          :class="['text-xs text-white rounded-md w-24 sm:w-40 h-8 p-2 flex justify-center items-center',
          data[lang][title].difficulty === 'Beginner' || data[lang][title].difficulty === 'Početni nivo' ? 'beginner-button' : '',
          data[lang][title].difficulty === 'Intermediate' || data[lang][title].difficulty === 'Srednji nivo' ? 'intermediate-button' : '',
          data[lang][title].difficulty === 'Advanced' || data[lang][title].difficulty === 'Napredni nivo' ? 'advanced-button' : ''
          ]">{{data[lang][title].difficulty}}</span>

          <span 
          :class="['text-xs text-white rounded-md w-24 sm:w-32 h-8 p-2 flex justify-center items-center ml-2 mr-2',
          data[lang][title].completion === 'Completed' || data[lang][title].completion === 'Završeno' ? 'completed-button' : ''
          ]">{{data[lang][title].completion}}</span>

          <span
          :class="['text-xs text-white rounded-md w-24 sm:w-32 h-8 p-2 flex justify-center items-center',
          data[lang][title].date !== '' ? 'date-button' : ''
          ]">{{data[lang][title].date}}</span>
        </div>
      </div>
    </div>
  </div>
</template>