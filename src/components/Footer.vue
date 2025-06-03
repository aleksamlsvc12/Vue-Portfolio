<script setup>
  import githubIcon from '@/assets/icons/github.svg';
  import linkedInIcon from '@/assets/icons/linkedin.svg';
  import emailIcon from '@/assets/icons/email.svg';

  import githubIconDark from '@/assets/icons/github-white.svg';
  import linkedInIconDark from '@/assets/icons/linkedin-white.svg';
  import emailIconDark from '@/assets/icons/email-white.svg';
</script>

<template>
      <div class="h-1/6 flex items-center justify-center gap-16">
      <a href="https://linkedin.com/in/aleksamlsvc12">
        <img :src="githubIcon" alt="github" class="size-5 hover:translate-y-1 transition-all block dark:hidden">
        <img :src="githubIconDark" alt="github" class="size-5 hover:translate-y-1 transition-all hidden dark:block">
      </a>

      <a href="https://github.com/aleksamlsvc12">
        <img :src="linkedInIcon" alt="linkedin" class="size-5 hover:translate-y-1 transition-all block dark:hidden">
        <img :src="linkedInIconDark" alt="linkedin" class="size-5 hover:translate-y-1 transition-all hidden dark:block">
      </a>
      
      <a href="mailto:aleksamlsvc12@gmail.com">
        <img :src="emailIcon" alt="email" class="size-5 hover:translate-y-1 transition-all block dark:hidden">
        <img :src="emailIconDark" alt="email" class="size-5 hover:translate-y-1 transition-all hidden dark:block">
      </a>
    </div>
</template>