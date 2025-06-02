<script setup>
  import Container from "@/components/Container.vue";
  import Header from "@/components/Header.vue";
  import Main from "@/components/Main.vue";
  import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="h-screen p-12 bg-gray-300 select-none font-serif dark:bg-black transition-all duration-700">
    <Container>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Container>
  </div>
</template>



