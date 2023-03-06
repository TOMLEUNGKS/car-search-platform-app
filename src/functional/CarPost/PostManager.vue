<template>
  <slot :postDisplay="postDisplay"> </slot>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { plainToInstance } from "class-transformer";
import { PostDisplay } from "@/model/Posts";
import useCarPost from "@/hooks/useCarPost";

export default defineComponent({
  name: "PostManager",
  props: ["post_id"],
  async setup(props) {
    const { getCarPostByID } = useCarPost();

    const carPost = await getCarPostByID(props.post_id);
    console.log(carPost);

    const postDisplay = plainToInstance(PostDisplay, carPost);

    return {
      postDisplay,
    };
  },
});
</script>
