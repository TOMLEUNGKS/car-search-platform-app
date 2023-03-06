<template>
  <CarPostCard
    v-for="carPost in ownPosts"
    :carPost="carPost"
    button
    :key="carPost.post_id"
    :like="false"
    @toCarPost="$router.push('manage/' + `${carPost.post_id}`)"
  >
    <template v-slot:img>
      <ImgManager type="car-posts" :id="carPost.post_id" #default="{ urls }">
        <ImgsSlider :carImgs="urls" />
      </ImgManager>
    </template>
  </CarPostCard>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

import CarPostCard from "@/components/CarPosts/CarPostCard.vue";

import useAuthUser from "@/hooks/user/useAuthUser";
import { priceFormatter } from "@/lib/utils";

import ImgsSlider from "@/components/Common/ImgsSlider.vue";
import ImgManager from "@/functional/Common/ImgManager.vue";
import { useManagePostStore } from "@/stores";
import { plainToInstance } from "class-transformer";
import { PostDisplay } from "@/model/Posts";

export default defineComponent({
  name: "SellingSeg",
  components: {
    CarPostCard,
    ImgsSlider,
    ImgManager,
  },

  async setup(_, { emit }) {
    const { getAuthUser } = useAuthUser();
    const managePostStore = useManagePostStore();
    let ownPosts = await managePostStore.fetchManagePost(getAuthUser.value.uid);
    //console.log(ownPosts);
    ownPosts = plainToInstance(PostDisplay, ownPosts);

    return { ownPosts, priceFormatter };
  },
});
</script>
