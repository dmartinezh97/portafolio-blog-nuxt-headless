<template>
  <header
    class="z-50 flex h-16 fixed w-full font-bold text-gray-700 bg-white bg-opacity-80 border-b backdrop-blur-md backdrop-saturate-150"
  >
    <div
      class="container mx-auto px-4 flex py-4"
    >
      <a class="flex items-center" href="/">
        <span class="ml-3 text-xl">Dani</span>
      </a>
      <nav
        class="flex flex-wrap items-center justify-center text-base md:ml-auto space-x-6"
      >
        <a class="cursor-pointer" href="/blog">Blog</a>
        <!-- <a class="cursor-pointer" href="/uses">Recursos</a>
        <a class="cursor-pointer" href="/about">About</a> -->
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.backdrop-blur-md{
  backdrop-filter: blur(12px);
}
</style>