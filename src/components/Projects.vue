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
  <div class="flex-grow p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 place-items-center">
    <div class="shadow-md rounded-[60px] shadow-gray-400 p-12 hover:scale-95 transition-all overflow-hidden cursor-pointer flex flex-col justify-center items-start w-full animate-[appear_1s_ease-in-out]" 
      v-for="(title, index) in data.titles" :key="index" @click="openLink(data.links[index])">
      <p class="mb-10 font-bold dark:text-white">{{title}}</p>
      <div class="flex justify-between w-full">
        <span 
        :class="['text-sm text-white rounded-md w-32 h-8 flex justify-center items-center',
        data[lang][title].difficulty === 'Beginner' || data[lang][title].difficulty === 'Početni nivo' ? 'beginner-button' : '',
        data[lang][title].difficulty === 'Intermediate' || data[lang][title].difficulty === 'Srednji nivo' ? 'intermediate-button' : '',
        data[lang][title].difficulty === 'Advanced' || data[lang][title].difficulty === 'Napredni nivo' ? 'advanced-button' : ''
        ]">{{data[lang][title].difficulty}}</span>

        <span 
        :class="['text-sm text-white rounded-md w-32 h-8 flex justify-center items-center ml-2 mr-2',
        data[lang][title].completion === 'Completed' || data[lang][title].completion === 'Završeno' ? 'completed-button' : ''
        ]">{{data[lang][title].completion}}</span>

        <span
        :class="['text-sm text-white rounded-md w-24 h-8 flex justify-center items-center',
        data[lang][title].date !== '' ? 'date-button' : ''
        ]">{{data[lang][title].date}}</span>
      </div>
    </div>
  </div>
</template>