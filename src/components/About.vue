<script setup>
defineProps({
  data: Object,
  lang: String,
});

function openLink(url) {
  window.open(url, "_blank");
}
</script>

<template>
  <div
    class="custom-scrollbar overflow-y-auto animate-[appear_1s_ease-in-out] h-full"
  >
    <div class="pt-8 pb-8">
      <div
        class="flex-grow flex justify-around items-center flex-col lg:flex-row lg:gap-y-0 gap-y-6 h-full lg:mt-0 lg:mb-0"
      >
        <div
          class="w-[90%] lg:w-1/4 md:w-1/3 h-[460px] shadow-md shadow-gray-400 rounded-3xl flex flex-col p-6 gap-4 animate-[topSlide_1s_ease-in-out]"
        >
          <p class="xl:text-xl text-md font-bold text-center dark:text-white">
            {{ data.about[lang].header }}
          </p>
          <p class="xl:text-sm text-xs text-gray-500 text-justify">
            {{ data.about[lang].p1 }}
          </p>
          <p class="xl:text-sm text-xs text-gray-500 text-justify">
            {{ data.about[lang].p2 }}
          </p>
          <p class="xl:text-sm text-xs text-gray-500 text-justify">
            {{ data.about[lang].p3 }}
          </p>
        </div>

        <div
          class="w-[90%] lg:w-1/4 md:w-1/3 h-[460px] shadow-md shadow-gray-400 rounded-3xl flex flex-col p-6 justify-around gap-4 animate-[topSlide_1.5s_ease-in-out]"
        >
          <p class="xl:text-xl text-md font-bold text-center dark:text-white">
            {{ data.education[lang].header }}
          </p>

          <div class="w-full text-center">
            <span
              class="font-bold xl:text-lg text-md text-purple-700 cursor-pointer"
              @click="openLink(data.education.links[0])"
              >{{ data.education[lang].school1 }}</span
            >
            <p class="xl:text-sm text-xs text-gray-500">
              {{ data.education[lang].desc1 }}
            </p>
          </div>

          <div class="w-full text-center">
            <span
              class="font-bold xl:text-lg text-md text-purple-700 cursor-pointer"
              @click="openLink(data.education.links[1])"
              >{{ data.education[lang].school2 }}</span
            >
            <p class="xl:text-sm text-xs text-gray-500">
              {{ data.education[lang].desc2 }}
            </p>
          </div>
        </div>

        <div
          class="w-[90%] lg:w-1/4 md:w-1/3 h-[460px] shadow-md shadow-gray-400 rounded-3xl flex flex-col p-6 justify-around gap-4 animate-[topSlide_2s_ease-in-out]"
        >
          <p class="xl:text-xl text-md font-bold text-center dark:text-white">
            {{ data.skills[lang].header }}
          </p>

          <div class="flex flex-col justify-around h-[80%]">
            <div class="w-full text-center">
              <p class="font-bold xl:text-lg text-md text-purple-700 mb-2">
                {{ data.skills[lang].text1 }}
              </p>
              <div
                class="w-full h-3 xl:h-4 shadow-sm shadow-gray-400 rounded-full overflow-hidden"
              >
                <div
                  class="h-full bg-purple-700 rounded-full animate-[slide_3s_ease-in-out]"
                  :style="{ width: data.skills.progress.web }"
                ></div>
              </div>
            </div>

            <div class="w-full text-center">
              <p class="font-bold text-purple-700 mb-2">
                {{ data.skills[lang].text2 }}
              </p>
              <div
                class="w-full h-3 xl:h-4 shadow-sm shadow-gray-400 rounded-full overflow-hidden"
              >
                <div
                  class="h-full bg-purple-700 rounded-full animate-[slide_3.2s_ease-in-out]"
                  :style="{ width: data.skills.progress.git }"
                ></div>
              </div>
            </div>

            <div class="w-full text-center">
              <p class="font-bold text-purple-700 mb-2">
                {{ data.skills[lang].text3 }}
              </p>
              <div
                class="w-full h-3 xl:h-4 shadow-sm shadow-gray-400 rounded-full overflow-hidden"
              >
                <div
                  class="h-full bg-purple-700 rounded-full animate-[slide_3.4s_ease-in-out]"
                  :style="{ width: data.skills.progress.sql }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
