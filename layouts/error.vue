<template>
  <div>
    <Navbar></Navbar>
    <main class="md:pt-16">
      <div class="container mx-auto py-16 sm:pt-0">
        <img
          v-if="error.statusCode === 404"
          class="max-w-2xl mx-auto"
          :src="require(`@/content/img/404.svg`)"
        />
        <div class="text-center mb-4">
          <h1 class="text-base font-bold text-gray-700 sm:text-lg md:text-xl">
            Lo sentimos, no se puede acceder a la página que busca
          </h1>
        </div>
        <div id="buttons" class="flex justify-center flex-wrap gap-4 px-6">
          <a
            :href="'mailto:' +  'dmartinezh97@gmail.com?subject=¡He encontrado un enlace roto!&body=Hola Dani,%0D%0A%0D%0AHe encontrado un enlace roto en su sitio. La página debería estar en' + ' ' + 'entorno.dev' + currentURL"
            class="w-full md:w-auto button cursor-pointer flex-none dark:bg-primary-800 hover:bg-gray-200 text-gray-700 leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 focus:ring-gray-900 dark:focus:ring-primary-800 focus:outline-none transition-colors duration-200"
          >
            <div class="flex items-center justify-center">
              ¡Hágamelo saber para que pueda arreglarlo!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline h-6 w-6 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </a>
          <NuxtLink
            to="/"
            class="w-full md:w-auto button flex-none bg-gray-900 dark:bg-primary-800 hover:bg-gray-700 dark:hover:bg-primary-700 text-white leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 focus:ring-gray-900 dark:focus:ring-primary-800 focus:outline-none transition-colors duration-200"
          >
            <div class="flex items-center justify-center">
              Ir al inicio
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                viewBox="0 0 256 256"
                class="inline w-6 h-6 ml-1"
              >
                <path fill="none" d="M0 0h256v256H0z"></path>
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="24"
                  d="M40 128h176M144 56l72 72-72 72"
                ></path>
              </svg>
            </div>
          </NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
  computed: {
    currentURL: function () {
      return this.$route.fullPath;
    },
  },
};
</script>
