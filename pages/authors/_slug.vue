<template>
<div>
    <h1>{{ author.title }}</h1>
    <p>{{ author.bio }}</p>
</div>
</template>

<script>
import GhostContentAPI from "@tryghost/content-api";

export default {
    async asyncData ({ params }) {
    const author = await getAuthor(params.query.slug);
    return { author: author }
    }
}
</script>