<template>
  <div>
    <Navbar></Navbar>
    <main class="container mx-auto pt-16">
      <section class="py-10">
        <div class="mb-10 text-center">
          <h2 class="text-3xl md:text-5xl mb-4"><span class="text-gray-800 font-bold">Recursos</span> &#9996;</h2>
          <p class="text-lg text-gray-900">Una lista de recursos recursos para desarrolladores &#129299;</p>
        </div>
        <div id="recursos" class="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-4 mt-4 px-4 sm:px-0">
          <a href="https://octopus.do/" target="_blank" class="relative flex flex-col items-center justify-between cursor-pointer col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
            <div class="p-3 text-white bg-blue-500 rounded-full">
              <img class="w-8 h-8" :src="`/img/recursos/octopus.svg`">
            </div>
            <h4 class="text-xl font-medium text-gray-700">Octopus</h4>
            <p class="text-base text-center text-gray-500">Herramienta para crear prototipos de sitios web o aplicaciones al instante.</p>
          </a>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articulos = await $content("articles").fetch();

    return { articulos };
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("es", options);
    },
  },
};
</script>