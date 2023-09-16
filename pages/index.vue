<template>
  <div class="StartBiz">
    <Header />
    <Homepage />
    <img class="index-leftflower" src="/leftflower.png" alt="左邊的花" />
    <img class="mobilego" src="/mobilego.png" alt="左邊的花" />
    <img class="mobileleftflower" src="/mobileleftflower.png" alt="左邊的花" />
    <img class="index-rightflower" src="/rightflower.png" alt="左邊的花" />
    <Contentpage/>
    <Consult/>
    <Copyright/>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import './../assets/index.css';
import GhostContentAPI from "@tryghost/content-api";
import Header from '@/components/Header.vue';
import Homepage from '@/components/homepage.vue';
import Contentpage from '@/components/contentpage.vue';
import Consult from '@/components/consult.vue';
import Copyright from '@/components/copyright.vue';

const api = new GhostContentAPI({
  url: 'https://gyrachen.ghost.io',
  key: 'a6a228a511265233dd452676c3',
  version: "v5"
});

async function fetchBlogPosts() {
   try {
    const posts = await api.posts.browse({ limit: 5, include: 'authors' });
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }

}

async function getPages() {
  try {
    const pages = await api.pages.browse({ limit: "all", include: 'authors' });
    return pages;
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }

}

async function getAuthorName(authorSlug) {
  try {
    const author = await api.authors.read({ slug: authorSlug });
    return author.name;
  } catch (error) {
    console.error('Error fetching author:', error);
    return 'Unknown Author';
  }

}

export default {
  components: {
    Header,
    Homepage,
    Contentpage,
    Consult,
    Copyright,
  },
  async asyncData() {
    const blogPosts = await fetchBlogPosts();
    const pages = await getPages();
    return { blogPosts, pages };
  },
  setup() {
    const blogPosts = ref([]);
    const pages = ref([]);

    // Load data when component is mounted
    // Note: You might need to handle this differently if using Nuxt 3.
    // This example is for pure Vue 3.
    onMounted(async () => {
      blogPosts.value = await fetchBlogPosts();
      pages.value = await getPages();
    });

    return {
      blogPosts,
      pages,
      getAuthorName
    };
  }
};
</script>
