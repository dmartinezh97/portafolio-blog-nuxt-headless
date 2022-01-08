<template>
  <div>
    <Navbar></Navbar>
    <main class="container mx-auto pt-16">
      <section class="py-10">
        <div class="mb-10 text-center">
          <h2 class="text-3xl md:text-5xl mb-4 text-gray-800 font-bold">{{ index[0].title }}</h2>
          <p class="text-lg text-gray-900 max-w-3xl mx-auto">{{ index[0].description }}</p>
        </div>
        <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <template v-if="herramientas">
            <div v-for="herramienta in herramientas" :key="herramienta.slug" class="w-full border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div class="flex flex-col items-center justify-center p-5">
                <img class="w-28 h-28 mb-6 rounded-full" :src="require(`~/content/img/logos/${herramienta.logo}`)">
                <h2 class="text-lg font-medium">{{ herramienta.title }}</h2>
                <!-- <p class="font-medium text-blue-500">CEO and Founder</p> -->
                <p class="text-gray-400 px-5 text-center">{{ truncarTexto(herramienta.description) }}</p>
              </div>
              <div class="flex border-t border-gray-200 divide-x divide-gray-200">
                  <NuxtLink v-if="herramienta.slug" :to="`/herramientas/${params.categoria}/${herramienta.slug}`" class="flex-1 block p-2 text-center bg-blue-500 hover:bg-blue-600 text-gray-300 transition duration-200 ease-out hover:text-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </NuxtLink>
                  <a v-if="herramienta.link" target="_blank" :href="herramienta.link" class="flex-1 block p-2 text-center text-gray-300 transition duration-200 ease-out hover:bg-gray-100 hover:text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </a>
              </div>
            </div>
          </template>
        </div>
      </section>
      <!-- <h1>{{this.$route.params.pathMatch}} _.vue</h1> -->
      <!-- <pre>
        {{herramientas}}
      </pre> -->
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const index = await $content("herramientas/index").where({ slug: { $contains: params.categoria } }).limit(1).fetch();

    const herramientas = await $content(`herramientas/` + params.categoria).fetch();
    return { index, herramientas, params };
  },

   methods: {
    truncarTexto(dato) {
      if(dato.length > 70){
        dato = dato.substring(0, 70).concat("...");
      }
      return dato;
    },
  },
};
</script>