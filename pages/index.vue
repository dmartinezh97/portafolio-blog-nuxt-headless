<template>
  <main>
    <section class="lg:pt-14 pb-4 lg:pb-20 bg-gray-50">
      <div class="container mx-auto px-4 py-10">
        <div class="flex flex-col-reverse flex-nowrap lg:flex-row">
          <div
            class="flex flex-col justify-center space-y-6 text-center px-4 lg:px-12 lg:w-3/5 xl:items-start xl:flex-grow xl:pr-20 xl:w-1/2 xl:text-left z-10"
          >
            <h1
              class="text-3xl dark:text-gray-100 sm:text-4xl md:text-5xl xl:text-6xl text-black font-bold tracking-tight"
            >
              Daniel Martínez<br /><span class="text-sky-500">Full-Stack</span>
              Developer
            </h1>
            <p class="text-lg text-gray-900 dark:text-gray-200">
              Me apasiona crear aplicaciones web limpias y fáciles de usar.
              Enfocado en .NET Core y Vue. Aunque también sigo muy de cerca todo
              lo relacionado con la seguridad informática.
            </p>
            <NuxtLink
              class="w-full md:w-auto button flex-none bg-gray-900 dark:bg-primary-800 hover:bg-gray-700 dark:hover:bg-primary-700 text-white leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 focus:ring-gray-900 dark:focus:ring-primary-800 focus:outline-none transition-colors duration-200"
              to="/sobremi"
            >
              <div class="flex items-center justify-center capitalize">
                Más sobre mí
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
            <!-- TEXTO -->
          </div>
          <div class="flex flex-col justify-center mb-4 lg:w-2/5">
            <img
              class="w-1/2 md:w-2/5 lg:w-3/5 mx-auto"
              :src="'/img/avatardani.png'"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="container mx-auto my-10 px-8">
        <div
          class="grid gap-4 grid-cols-2 md:grid-cols-3 justify-items-center lg:flex lg:flex-row lg:flex-wrap lg:gap-16 lg:justify-center text-sm font-semibold text-center text-gray-800 dark:text-gray-100"
        >
          <div
            class="clay dark:shadow-none z-10 flex flex-col items-center justify-center w-36 py-6 bg-white bg-opacity-60 shadow-gray-800/20 shadow-xl dark:bg-gray-800 dark:bg-opacity-60 rounded-2xl backdrop-blur-sm bg-clip-padding border border-white border-opacity-80 dark:border-opacity-10 backdrop-saturate-150"
          >
            <img
              :src="'/img/tailwindcss.svg'"
              alt="Tailwind CSS"
              class="w-16 h-16 md:w-20 md:h-20 mb-2 text-primary-500"
            />
            Tailwind CSS
          </div>
          <div
            class="clay dark:shadow-none z-10 flex flex-col items-center justify-center w-36 py-6 bg-white bg-opacity-60 shadow-gray-800/20 shadow-xl dark:bg-gray-800 dark:bg-opacity-60 rounded-2xl backdrop-blur-sm bg-clip-padding border border-gray-100 border-opacity-80 dark:border-opacity-10 backdrop-saturate-150"
          >
            <img
              :src="'/img/logos/vscode.svg'"
              alt="VS Code"
              class="w-16 h-16 md:w-20 md:h-20 mb-2 text-primary-500"
            />
            VS Code
          </div>
          <div
            class="clay dark:shadow-none z-10 flex flex-col items-center justify-center w-36 py-6 bg-white bg-opacity-60 shadow-gray-800/20 shadow-xl dark:bg-gray-800 dark:bg-opacity-60 rounded-2xl backdrop-blur-sm bg-clip-padding border border-gray-100 border-opacity-80 dark:border-opacity-10 backdrop-saturate-150"
          >
            <img
              :src="'/img/vuejs.svg'"
              alt="Vue JS"
              class="w-16 h-16 md:w-20 md:h-20 mb-2 text-primary-500"
            />
            Vue JS
          </div>
          <div
            class="clay dark:shadow-none z-10 flex flex-col items-center justify-center w-36 py-6 bg-white bg-opacity-60 shadow-gray-800/20 shadow-xl dark:bg-gray-800 dark:bg-opacity-60 rounded-2xl backdrop-blur-sm bg-clip-padding border border-gray-100 border-opacity-80 dark:border-opacity-10 backdrop-saturate-150"
          >
            <img
              :src="'/img/csharp.svg'"
              alt="C#"
              class="w-16 h-16 md:w-20 md:h-20 mb-2 text-primary-500"
            />
            C#
          </div>
          <div
            class="clay dark:shadow-none z-10 flex flex-col items-center justify-center w-36 py-6 bg-white bg-opacity-60 shadow-gray-800/20 shadow-xl dark:bg-gray-800 dark:bg-opacity-60 rounded-2xl backdrop-blur-sm bg-clip-padding border border-gray-100 border-opacity-80 dark:border-opacity-10 backdrop-saturate-150"
          >
            <img
              :src="'/img/graphql.svg'"
              alt="TypeScript"
              class="w-16 h-16 md:w-20 md:h-20 mb-2 text-primary-500"
            />
            GraphQL
          </div>
          <div
            class="clay dark:shadow-none z-10 flex flex-col items-center justify-center w-36 py-6 bg-white bg-opacity-60 shadow-gray-800/20 shadow-xl dark:bg-gray-800 dark:bg-opacity-60 rounded-2xl backdrop-blur-sm bg-clip-padding border border-gray-100 border-opacity-80 dark:border-opacity-10 backdrop-saturate-150"
          >
            <img
              :src="'/img/ts.svg'"
              alt="TypeScript"
              class="w-16 h-16 md:w-20 md:h-20 mb-2 text-primary-500"
            />
            TypeScript
          </div>
        </div>
      </div>
    </section>
    <section class="py-10 bg-white">
      <div class="max-w-7xl px-10 mx-auto text-center">
        <!-- <p class="text-blue-500 font-medium uppercase">Our Application Integrations</p> -->
        <!-- <h2 class="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3">Proyectos Recientes</h2> -->
        <h2 class="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 capitalize">
          Descubre mis proyectos
        </h2>
        <p
          class="max-w-3xl mt-4 mx-auto text-gray-500 text-base sm:text-xl lg:text-2xl"
        >
          A continuación encontrarás muchos de los proyectos que he desarrollado
          o en los que he formado parte 👇
        </p>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-12 sm:my-16"
        >
          <div
            class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100"
          >
            <svg
              class="h-16 w-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 250 343"
              fill="none"
            >
              <path
                d="M163.818 0H23.736C10.59 0 0 10.663 0 23.736v294.771c0 13.146 10.663 23.737 23.736 23.737H226.19c13.147 0 23.737-10.664 23.737-23.737V85.159h-86.109V0Z"
                fill="#34A853"
              ></path>
              <path
                d="M250.001 85.16h-86.182V0l86.182 85.16Z"
                fill="#188038"
              ></path>
              <path
                d="M46.89 132.194V245.18h156.149V132.194H46.889Zm136.722 19.354v27.388h-49.08v-27.388h49.08Zm-68.507 0v27.388H66.317v-27.388h48.788Zm-48.788 74.131v-27.388h48.788v27.388H66.317Zm68.215 0v-27.388h49.08v27.388h-49.08Z"
                fill="#fff"
              ></path>
            </svg>
            <p class="font-bold mt-4">Proyecto 1</p>
            <p class="mt-2 text-sm text-gray-500">Categoria 1</p>
          </div>
          <div
            class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100"
          >
            <svg
              class="h-16 w-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 250 343"
              fill="none"
            >
              <path
                d="M163.818 0H23.736C10.59 0 0 10.663 0 23.736v294.771c0 13.146 10.663 23.737 23.736 23.737H226.19c13.147 0 23.737-10.664 23.737-23.737V85.159h-86.109V0Z"
                fill="#34A853"
              ></path>
              <path
                d="M250.001 85.16h-86.182V0l86.182 85.16Z"
                fill="#188038"
              ></path>
              <path
                d="M46.89 132.194V245.18h156.149V132.194H46.889Zm136.722 19.354v27.388h-49.08v-27.388h49.08Zm-68.507 0v27.388H66.317v-27.388h48.788Zm-48.788 74.131v-27.388h48.788v27.388H66.317Zm68.215 0v-27.388h49.08v27.388h-49.08Z"
                fill="#fff"
              ></path>
            </svg>
            <p class="font-bold mt-4">Proyecto 2</p>
            <p class="mt-2 text-sm text-gray-500">Categoria 2</p>
          </div>
          <div
            class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100"
          >
            <svg
              class="h-16 w-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 250 343"
              fill="none"
            >
              <path
                d="M163.818 0H23.736C10.59 0 0 10.663 0 23.736v294.771c0 13.146 10.663 23.737 23.736 23.737H226.19c13.147 0 23.737-10.664 23.737-23.737V85.159h-86.109V0Z"
                fill="#34A853"
              ></path>
              <path
                d="M250.001 85.16h-86.182V0l86.182 85.16Z"
                fill="#188038"
              ></path>
              <path
                d="M46.89 132.194V245.18h156.149V132.194H46.889Zm136.722 19.354v27.388h-49.08v-27.388h49.08Zm-68.507 0v27.388H66.317v-27.388h48.788Zm-48.788 74.131v-27.388h48.788v27.388H66.317Zm68.215 0v-27.388h49.08v27.388h-49.08Z"
                fill="#fff"
              ></path>
            </svg>
            <p class="font-bold mt-4">Proyecto 3</p>
            <p class="mt-2 text-sm text-gray-500">Categoria 3</p>
          </div>
          <div
            class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100"
          >
            <svg
              class="h-16 w-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 250 343"
              fill="none"
            >
              <path
                d="M163.818 0H23.736C10.59 0 0 10.663 0 23.736v294.771c0 13.146 10.663 23.737 23.736 23.737H226.19c13.147 0 23.737-10.664 23.737-23.737V85.159h-86.109V0Z"
                fill="#34A853"
              ></path>
              <path
                d="M250.001 85.16h-86.182V0l86.182 85.16Z"
                fill="#188038"
              ></path>
              <path
                d="M46.89 132.194V245.18h156.149V132.194H46.889Zm136.722 19.354v27.388h-49.08v-27.388h49.08Zm-68.507 0v27.388H66.317v-27.388h48.788Zm-48.788 74.131v-27.388h48.788v27.388H66.317Zm68.215 0v-27.388h49.08v27.388h-49.08Z"
                fill="#fff"
              ></path>
            </svg>
            <p class="font-bold mt-4">Proyecto 4</p>
            <p class="mt-2 text-sm text-gray-500">Categoria 4</p>
          </div>
        </div>
        <a
          href="#_"
          class="px-8 py-4 capitalize sm:w-auto w-full text-center text-base font-medium inline-block rounded text-white hover:bg-sky-600 bg-sky-500"
          >Ver todos los proyectos</a
        >
      </div>
    </section>
    <div class="spacer wave-1"></div>
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto">
        <h2
          class="mb-12 text-center mb-5 text-3xl text-gray-800 dark:text-gray-50 md:text-5xl font-bold"
        >
          Lo que dicen los demás.
        </h2>
      </div>
    </section>
    <div class="spacer wave"></div>
    <section class="pb-16 bg-white">
      <div class="container mx-auto">
        <div class="max-w-2xl px-10 py-16 mx-auto text-center md:mb-12">
          <h2
            class="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 capitalize mb-6 leading-none tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl md:mx-auto"
          >
            Un desarrollador 🤓 con
            <span class="text-sky-500">habilidades especiales</span>
          </h2>
          <p class="text-lg text-gray-900 dark:text-gray-200">
            Crear aplicaciones y páginas web con una buena apariencia es el
            primer paso, pero es más importante asegurarse de que el código sea
            fácil de leer y mantener.
          </p>
        </div>
        <div class="grid gap-y-12 gap-4 px-3 grid-cols-1 lg:grid-cols-3 justify-items-center">
          <div
            class="relative flex flex-col p-6 rounded-md bg-gray-100 shadow-smooth"
          >
            <div
              class="absolute flex items-center justify-center w-20 h-20 mb-4 bg-gray-100 border-8 border-white rounded-full -top-10 dark:border-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="currentColor"
                viewBox="0 0 256 256"
                class="w-12 h-12 text-sky-600 inline"
              >
                <rect width="256" height="256" fill="none"></rect>
                <rect
                  x="64"
                  y="56"
                  width="128"
                  height="144"
                  opacity="0.2"
                ></rect>
                <rect
                  x="64"
                  y="24"
                  width="128"
                  height="208"
                  rx="16"
                  stroke-width="16"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                ></rect>
                <line
                  x1="64"
                  y1="56"
                  x2="192"
                  y2="56"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></line>
                <line
                  x1="64"
                  y1="200"
                  x2="192"
                  y2="200"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></line>
              </svg>
            </div>
            <div class="pt-10">
              <h6
                class="mb-3 font-sans text-2xl font-semibold leading-5 text-gray-900 dark:text-gray-50"
              >
                Diseño Responsive
              </h6>
              <div class="text-base text-gray-900 dark:text-gray-200">
                El mundo se ha vuelto móvil - ¿Por qué no su página web?
                Especializado en diseño web responsivo para que nunca tengas que
                preocuparte de que tu contenido sea visto por los clientes o
                usuarios sin importar el dispositivo en el que se encuentren.
              </div>
            </div>
          </div>
          <div
            class="relative flex flex-col p-6 rounded-md bg-gray-100 shadow-smooth"
          >
            <div
              class="absolute flex items-center justify-center w-20 h-20 mb-4 bg-gray-100 border-8 border-white rounded-full -top-10 dark:border-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="currentColor"
                viewBox="0 0 256 256"
                class="w-12 h-12 text-sky-600 inline"
              >
                <rect width="256" height="256" fill="none"></rect>
                <path
                  d="M138.72355,175.46465l-19.21681,52.1599a8,8,0,0,1-15.01348,0l-19.21681-52.1599a8,8,0,0,0-4.7411-4.7411l-52.1599-19.21681a8,8,0,0,1,0-15.01348l52.1599-19.21681a8,8,0,0,0,4.7411-4.7411l19.21681-52.1599a8,8,0,0,1,15.01348,0l19.21681,52.1599a8,8,0,0,0,4.7411,4.7411l52.1599,19.21681a8,8,0,0,1,0,15.01348l-52.1599,19.21681A8,8,0,0,0,138.72355,175.46465Z"
                  opacity="0.2"
                ></path>
                <path
                  d="M138.72355,175.46465l-19.21681,52.1599a8,8,0,0,1-15.01348,0l-19.21681-52.1599a8,8,0,0,0-4.7411-4.7411l-52.1599-19.21681a8,8,0,0,1,0-15.01348l52.1599-19.21681a8,8,0,0,0,4.7411-4.7411l19.21681-52.1599a8,8,0,0,1,15.01348,0l19.21681,52.1599a8,8,0,0,0,4.7411,4.7411l52.1599,19.21681a8,8,0,0,1,0,15.01348l-52.1599,19.21681A8,8,0,0,0,138.72355,175.46465Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></path>
                <line
                  x1="176"
                  y1="16"
                  x2="176"
                  y2="64"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></line>
                <line
                  x1="200"
                  y1="40"
                  x2="152"
                  y2="40"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></line>
                <line
                  x1="224"
                  y1="72"
                  x2="224"
                  y2="104"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></line>
                <line
                  x1="240"
                  y1="88"
                  x2="208"
                  y2="88"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"
                ></line>
              </svg>
            </div>
            <div class="pt-10">
              <h6
                class="mb-3 font-sans text-2xl font-semibold leading-5 text-gray-900 dark:text-gray-50"
              >
                Código Limpio
              </h6>
              <div class="text-base text-gray-900 dark:text-gray-200">
                Me centro en asegurarme de que el código se ejecute sin
                problemas y de manera eficiente. Un código más sencillo
                significa menos mantenimiento y menos posibilidades de que se
                produzcan errores: ¡siempre es una victoria!
              </div>
            </div>
          </div>
          <div
            class="relative flex flex-col p-6 rounded-md bg-gray-100 shadow-smooth"
          >
            <div
              class="absolute flex items-center justify-center w-20 h-20 mb-4 bg-gray-100 border-8 border-white rounded-full -top-10 dark:border-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                viewBox="0 0 256 256"
                class="w-12 h-12 text-sky-600 inline"
              >
                <path fill="none" d="M0 0h256v256H0z"></path>
                <ellipse
                  cx="128"
                  cy="128"
                  rx="44"
                  ry="116"
                  transform="rotate(-45 128 128)"
                  fill="currentColor"
                  opacity="0.2"
                ></ellipse>
                <ellipse
                  cx="128"
                  cy="128"
                  rx="44"
                  ry="116"
                  transform="rotate(-45 128 128)"
                  stroke-width="16"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                ></ellipse>
                <ellipse
                  cx="128"
                  cy="128"
                  rx="116"
                  ry="44"
                  transform="rotate(-45 128 128)"
                  stroke-width="16"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                ></ellipse>
                <circle fill="currentColor" cx="128" cy="128" r="12"></circle>
              </svg>
            </div>
            <div class="pt-10">
              <h6
                class="mb-3 font-sans text-2xl font-semibold leading-5 text-gray-900 dark:text-gray-50"
              >
                Innovador
              </h6>
              <div class="text-base text-gray-900 dark:text-gray-200">
                Me mantengo al día en las últimas herramientas y tecnologías
                como NuxtJS, Tailwind CSS, .NET Core o VueJS (por nombrar
                algunas). Elijo las mejores herramientas para la tarea en
                cuestión para implementarlas de la manera más efectiva.
              </div>
            </div>
          </div>
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
  background-image: url("~/static/img/divider.svg");
}
.wave-1 {
  background-image: url("~/static/img/divider-1.svg");
}
.spacer {
  aspect-ratio: 900/100;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
}
</style>
