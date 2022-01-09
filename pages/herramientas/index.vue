<template>
  <div>
    <Navbar></Navbar>
    <main class="container mx-auto pt-16">
      <section class="py-10">
        <div class="mb-10 text-center">
          <h2 class="text-3xl md:text-5xl mb-4"><span class="text-gray-800 font-bold">Herramientas</span> &#128295;</h2>
          <p class="text-lg text-gray-900 max-w-3xl mx-auto">Hay muchas herramientas entre las que elegir, y es difícil encontrar las adecuadas. Por eso he creado esta lista, para que ahorres tiempo y encuentres fácilmente lo mejor que hay, clasificado por categorías para ayudarte a encontrar exactamente lo que necesitas para tu trabajo.</p>
        </div>
        <div id="recursos" class="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-4 mt-4 px-4 sm:px-0">
          <NuxtLink :to="`/herramientas/${categoria.slug}`" v-for="categoria in categorias" :key="categoria.slug" class="relative flex flex-col items-center justify-between cursor-pointer col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
            <div class="p-3 text-white bg-blue-500 rounded-full">
              <img class="w-8 h-8" :src="`/img/herramientas/${categoria.img}`">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"></path><circle cx="6" cy="14" r="3"></circle><path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"></path></svg> -->
            </div>
            <h4 class="text-xl font-medium text-gray-700">{{ categoria.title }}</h4>
            <p class="text-base text-center text-gray-500">{{ categoria.description }}</p>
          </NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const categorias = await $content("herramientas/index").fetch();

    return { categorias };
  },

  // methods: {
  //   formatDate(date) {
  //     const options = { year: "numeric", month: "long", day: "numeric" };
  //     return new Date(date).toLocaleDateString("es", options);
  //   },
  // },
};
</script>

<style>
.fill-white{
  fill: white;
}
</style>