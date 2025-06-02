<script setup>
  import githubIcon from '@/assets/icons/github.svg';
  import linkedInIcon from '@/assets/icons/linkedin.svg';
  import emailIcon from '@/assets/icons/email.svg';
</script>

<template>
      <div class="h-1/6 flex items-center justify-center gap-16">
      <a href="https://linkedin.com/in/aleksamlsvc12">
        <img :src="githubIcon" alt="github" class="size-5 hover:translate-y-1 transition-all">
      </a>

      <a href="https://github.com/aleksamlsvc12">
        <img :src="linkedInIcon" alt="linkedin" class="size-5 hover:translate-y-1 transition-all">
      </a>
      
      <a href="mailto:aleksamlsvc12@gmail.com">
        <img :src="emailIcon" alt="email" class="size-5 hover:translate-y-1 transition-all">
      </a>
    </div>
</template>