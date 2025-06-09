<script setup>
  defineProps({
    data: Object,
    lang: String
  });
</script>

<template>
  <div class="flex-grow p-8 flex justify-around items-center">
    <div class="h-[360px] w-[460px] shadow-md shadow-gray-400 rounded-3xl flex flex-col p-8 justify-between space-y-2">
      <p class="text-xl font-bold text-center">{{data[lang].about.header}}</p>
      <p class="text-sm text-gray-500 text-justify">{{data[lang].about.p1}}</p>
      <p class="text-sm text-gray-500 text-justify">{{data[lang].about.p2}}</p>
      <p class="text-sm text-gray-500 text-justify">{{data[lang].about.p3}}</p>
    </div>

    <div class="h-[340px] w-[440px] shadow-md shadow-gray-400 rounded-3xl flex flex-col justify-center items-center p-10">
      <p>edukaicja</p>
      
      <div class="w-full text-center">
        <p>skola1</p>
        <p>aaaaaa</p>
      </div>

      <div class="w-full text-center">
        <p>skola2</p>
        <p>aaaaaaaaaa</p>
      </div>
    </div>

    <div class="h-[340px] w-[440px] shadow-md shadow-gray-400 rounded-3xl flex flex-col justify-center items-center p-10">
      <p>Naslov</p>

      <div class="w-full text-center">
        <p>naslov</p>
        <div>boja</div>
      </div>

      <div class="w-full text-center">
        <p>naslov</p>
        <div>boja</div>
      </div>

    </div>
  </div>





</template>