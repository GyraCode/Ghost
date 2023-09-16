import GhostContentAPI from "@tryghost/content-api";

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