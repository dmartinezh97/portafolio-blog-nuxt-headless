<template>
  <main>
    <section class="lg:pt-14 pb-20 bg-gray-50">
      <div class="container mx-auto px-4 py-10">
        <div class="flex flex-col-reverse flex-nowrap lg:flex-row">
          <div class="flex flex-col justify-center space-y-6 text-center px-4 lg:px-12 lg:w-3/5 xl:items-start xl:flex-grow xl:pr-20 xl:w-1/2 xl:text-left z-10"
          >
            <h1
              class="text-3xl dark:text-gray-100 sm:text-4xl md:text-5xl xl:text-6xl text-black font-bold tracking-tight"
            >
              Daniel Martínez<br /><span class="text-sky-500">Full-Stack</span>
              Developer
            </h1>
            <p class="text-lg text-gray-900 dark:text-gray-200">
              Me apasiona crear experiencias web limpias y fáciles de usar.
              Ayudo a las empresas a crear productos que la gente adora.
            </p>
            <button
              class="w-full md:w-auto button flex-none bg-gray-900 dark:bg-primary-800 hover:bg-gray-700 dark:hover:bg-primary-700 text-white leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 focus:ring-gray-900 dark:focus:ring-primary-800 focus:outline-none transition-colors duration-200"
              href="/#contact"
            >
              <div class="flex items-center justify-center capitalize">
                Ponte en contacto
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
            </button>
            <!-- TEXTO -->
          </div>
          <div class="flex flex-col justify-center mb-4 lg:w-2/5">
            <img class="w-1/2 md:w-2/5 lg:w-3/5 mx-auto" :src="'/img/avatar.png'" alt="">
          </div>
        </div>
      </div>
      <div>
        <div class="container mx-auto my-10">
          <div class="flex flex-row flex-wrap justify-center gap-8 text-sm font-semibold text-center text-gray-800 dark:text-gray-100">
            <div class="clay dark:shadow-none z-10 flex flex-col items-center justify-center w-36 py-6 bg-white bg-opacity-60 shadow-gray-800/20 shadow-xl dark:bg-gray-800 dark:bg-opacity-60 rounded-2xl backdrop-blur-sm bg-clip-padding border border-gray-100 border-opacity-80 dark:border-opacity-10 backdrop-saturate-150">
              <img :src="'/img/tailwindcss.svg'" alt="Tailwind CSS" class="w-16 h-16 md:w-20 md:h-20 mb-2 text-primary-500">
              Tailwind CSS
            </div>
            <div class="clay dark:shadow-none z-10 flex flex-col items-center justify-center w-36 py-6 bg-white bg-opacity-60 shadow-gray-800/20 shadow-xl dark:bg-gray-800 dark:bg-opacity-60 rounded-2xl backdrop-blur-sm bg-clip-padding border border-gray-100 border-opacity-80 dark:border-opacity-10 backdrop-saturate-150">
              <img :src="'/img/logos/vscode.svg'" alt="VS Code" class="w-16 h-16 md:w-20 md:h-20 mb-2 text-primary-500">
              VS Code
            </div>
            <div class="clay dark:shadow-none z-10 flex flex-col items-center justify-center w-36 py-6 bg-white bg-opacity-60 shadow-gray-800/20 shadow-xl dark:bg-gray-800 dark:bg-opacity-60 rounded-2xl backdrop-blur-sm bg-clip-padding border border-gray-100 border-opacity-80 dark:border-opacity-10 backdrop-saturate-150">
              <img :src="'/img/vuejs.svg'" alt="Vue JS" class="w-16 h-16 md:w-20 md:h-20 mb-2 text-primary-500">
              Vue JS
            </div>
            <div class="clay dark:shadow-none z-10 flex flex-col items-center justify-center w-36 py-6 bg-white bg-opacity-60 shadow-gray-800/20 shadow-xl dark:bg-gray-800 dark:bg-opacity-60 rounded-2xl backdrop-blur-sm bg-clip-padding border border-gray-100 border-opacity-80 dark:border-opacity-10 backdrop-saturate-150">
              <img :src="'/img/csharp.svg'" alt="C#" class="w-16 h-16 md:w-20 md:h-20 mb-2 text-primary-500">
              C#
            </div>
            <div class="clay dark:shadow-none z-10 flex flex-col items-center justify-center w-36 py-6 bg-white bg-opacity-60 shadow-gray-800/20 shadow-xl dark:bg-gray-800 dark:bg-opacity-60 rounded-2xl backdrop-blur-sm bg-clip-padding border border-gray-100 border-opacity-80 dark:border-opacity-10 backdrop-saturate-150">
              <img :src="'/img/ts.svg'" alt="TypeScript" class="w-16 h-16 md:w-20 md:h-20 mb-2 text-primary-500">
              TypeScript
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-16 bg-white">
      <div class="container mx-auto">
        <h2 class="mb-12 text-center text-3xl text-gray-800 dark:text-gray-50 md:text-5xl font-bold ">
          &#128064; Echa un vistazo a algunos de mis
          <br class="hidden lg:block">
          Proyectos
          <span class="text-sky-500">recientes</span>
        </h2>
        <section class="mt-20 text-gray-600 body-font text-center">
          <h1>Proyectos</h1>
        </section>
      </div>
    </section>
    <div class="spacer wave-1"></div>
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="mb-12 text-center mb-5 text-3xl text-gray-800 dark:text-gray-50 md:text-5xl font-bold">Lo que dicen los demás.</h2>
      </div>
    </section>
    <div class="spacer wave"></div>
    <section class="pb-16 bg-white">
      <div class="container mx-auto">
        <div class="max-w-2xl py-16 md:mx-auto sm:text-center md:mb-12">
          <h2 class="max-w-2xl mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl md:mx-auto">asda dsada d </h2><!-- Front-End 🤓 developer with a design sense. -->
          <p class="text-lg text-gray-900 dark:text-gray-200">
            Building websites that look good is the first step, but it's also important to make sure your website's code is easy to read and maintain. I take care of both so you can focus on running your business.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Inicio",
};
</script>

<style>
.wave {
    background-image: url('~/static/img/divider.svg');
}
.wave-1 {
    background-image: url('~/static/img/divider-1.svg');
}
.spacer {
    aspect-ratio: 900/100;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
}
</style>