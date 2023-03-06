<template>
  <ion-page>
    <BlogShareHeader></BlogShareHeader>
    <ion-content>
      <div class="md:flex">
        <BlogCard v-for="blog in blogs" :blogitem="blog" :key="blog.id" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonContent, IonPage } from "@ionic/vue";

import BlogShareHeader from "@/components/Common/BlogShareHeader.vue";
import BlogCard from "@/components/Blogs/BlogCard.vue";
import useBlog from "@/hooks/useBlog";

export default defineComponent({
  name: "BlogsPage",
  components: {
    IonContent,

    IonPage,
    BlogCard,
    // AppHeader,
    BlogShareHeader,
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
