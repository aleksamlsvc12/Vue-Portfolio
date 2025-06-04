<script setup>
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
        
        <i class="pi pi-language text-black cursor-pointer dark:text-white" @click = "saveLangInLS"></i>
        <i class="pi pi-moon text-black cursor-pointer dark:text-white" @click="toggleTheme"></i>
      </div>
    </div>
</template>