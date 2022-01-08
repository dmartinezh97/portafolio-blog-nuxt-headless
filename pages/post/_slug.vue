<template>
  <div>
    <Navbar></Navbar>
    <article class="md:pt-16" v-if="article">
      <nuxt-content :document="article" />
      <p>Post last updated: {{ article.updatedAt }}</p>
      <pre>
        {{article}}
      </pre>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("es", options);
    },
  },
};
</script>
