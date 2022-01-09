<template>
  <nuxt-img format="webp" :src="imageUrl" />
</template>
<script>
export default {
    name: 'ImagenComponent',
    props: {
        imageUrl: {
          type: String,
          default: ''
        }
    }
}
</script>