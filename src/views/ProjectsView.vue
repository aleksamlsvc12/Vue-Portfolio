<script setup>
  import Projects from '@/components/Projects.vue';

  defineProps({
    data: Object,
    lang: String
  });
</script>

<template>
  <Projects :data="data" :lang="lang"></Projects>
</template>