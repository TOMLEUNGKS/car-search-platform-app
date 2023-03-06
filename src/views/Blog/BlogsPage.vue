<template>
  <app-layout>
    <ion-searchbar
      show-cancel-button="never"
      placeholder="Search keyword..."
      class="px-4"
    ></ion-searchbar>
    <ion-toolbar class="px-4 py-2">
      <ion-title class="text-2xl font-bold">Blogs</ion-title>
    </ion-toolbar>
    <div class="md:flex">
      <BlogCard v-for="blog in blogs" :blogitem="blog" :key="blog.id" />
    </div>
  </app-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonToolbar, IonSearchbar } from "@ionic/vue";

import BlogCard from "@/components/Blogs/BlogCard.vue";
import useBlog from "@/hooks/useBlog";

export default defineComponent({
  name: "BlogsPage",
  components: {
    IonToolbar,
    IonSearchbar,
    BlogCard,
  },

  setup() {
    const { getBlogs } = useBlog();
    const blogs = getBlogs();
    return { blogs };
  },
});
</script>

<style scoped>
ion-searchbar {
  --border-radius: 12px;
  --background: #f3f3f3;
  --placeholder-color: #cecece;
  --placeholder-font-weight: 400;
  --box-shadow: none;
}
</style>
