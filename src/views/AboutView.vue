<script setup>
  import About from "@/components/About.vue";

  defineProps({
    data: Object,
    lang: String
  });
</script>

<template>
   <About :data="data" :lang="lang"></About>
</template>