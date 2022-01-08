<template>
  <div>
    <Navbar></Navbar>
    <main class="container mx-auto pt-16">
      <section class="px-8 py-24 bg-white md:px-0 xl:px-5">
        <div class="flex flex-wrap items-center">
          <div class="w-full md:w-1/2">
            <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <img :src="require(`~/content/img/herramientas/` + params.categoria + `/` + herramienta.img)">
            </div>
          </div>
          <div class="w-full md:w-1/2 md:px-6">
            <div class="w-full pb-6 space-y-6 md:space-y-4 lg:space-y-8 xl:space-y-5 sm:pl-5 lg:pl-0 md:pb-0">
              <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-4xl">
                <span v-if="herramienta.title" class="block xl:inline">{{ herramienta.title }}</span>
              </h1>
              <p v-if="herramienta.description" class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">{{ herramienta.description }}</p>
              <div v-if="herramienta.categorias" class="flex gap-2">
                <div v-for="cat in herramienta.categorias" :key="'categoria-'+cat" class="text-xs font-medium text-blue-500 border-2 rounded-lg border-blue-500 px-3 py-1">
                  <span v-text="cat"></span>
                </div>
              </div>
              <div class="relative flex flex-col sm:flex-row sm:space-x-4">
                <a v-if="herramienta.link" :href="herramienta.link" target="_blank" class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
                  Sitio Oficial
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="px-8 pb-16 md:px-0 xl:px-5">
        <nuxt-content :document="herramienta" class="leading-loose" />
      </section>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const herramienta = await $content(`herramientas/` + params.categoria + `/` + params.herramienta).fetch();

    return { herramienta, params };
  },

  //  methods: {
  //   truncarTexto(dato) {
  //     if(dato.length > 70){
  //       dato = dato.substring(0, 70).concat("...");
  //     }
  //     return dato;
  //   },
  // },
};
</script>