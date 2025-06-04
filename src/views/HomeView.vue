<script setup>
  import Main from "@/components/Main.vue";

  defineProps({
    data: Object,
    lang: String
  });

</script>

<template>
   <Main :data="data" :lang="lang"></Main>
</template>