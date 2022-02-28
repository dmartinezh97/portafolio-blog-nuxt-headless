<template>
  <main class="container mx-auto">
    <section class="py-10">
      <div class="mb-10 text-center px-4">
        <h2 class="text-3xl md:text-5xl mb-4"><span class="text-gray-800 font-bold">Proyectos</span> &#128295;</h2>
        <p class="text-lg text-gray-900 max-w-3xl mx-auto">En mi tiempo libre me gusta crear cosas diferentes y retarme a hacer cosas nuevas. Por eso, estoy continuamente aprendiendo y, entretanto, haciendo proyectos innovadores.</p>
      </div>
      <div id="recursos" class="grid grid-cols-12 gap-4 mt-4 px-4 sm:px-0">
        
        <NuxtLink :to="`/proyecto/${proyecto.slug}`" v-for="proyecto in proyectos" :key="proyecto.slug" class="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
          <div class="block w-full transition duration-200 ease-out transform hover:scale-110">
            <nuxt-img
              format="webp"
              class="object-cover w-full shadow-sm max-h-56"
              :src="`/img/proyectos/${proyecto.slug}/${proyecto.img}`"
              :alt="proyecto.alt"
            />
          </div>
          <div class="relative flex flex-col items-start w-full px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
            <div class="absolute top-0 -mt-3"> <!-- bg-blue-500 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto rounded-full text-xs font-medium uppercase text-white inline-block -->
                <span class="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900 border border-indigo-800">{{proyecto.tipo}}</span>
            </div>
            <h2 class="text-base font-bold sm:text-lg md:text-xl">{{proyecto.title}}</h2>
            <p class="mt-2 text-sm text-gray-500">{{proyecto.description}}</p>
          </div>
        </NuxtLink>
      </div>
    </section>
    <!-- <pre>
      {{proyectos}}
    </pre> -->
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const proyectos = await $content("proyectos").fetch();

    return { proyectos };
  },
  // async asyncData({ $content }) {
  //   const categorias = await $content("proyectos/index").fetch();

  //   return { categorias };
  // },

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