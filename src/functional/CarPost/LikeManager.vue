<template>
  <slot :isLiked="isLiked" :likeHandler="likeHandler"> </slot>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";

import { updateLike } from "@/services/firebase";
import useUser from "@/hooks/user/useUser";
import useAuthUser from "@/hooks/user/useAuthUser";

export default defineComponent({
  name: "LikeManager",
  props: ["post_id"],

  setup(props) {
    const { likedPost } = useUser();
    const { getAuthUser } = useAuthUser();

    const isLiked = computed(() =>
      likedPost.value.includes(`${props.post_id}`)
    );

    const likeHandler = async () => {
      await updateLike(
        getAuthUser.value.uid,
        `${props.post_id}`,
        isLiked.value
      );
      if (isLiked.value) {
        const idx = likedPost.value.indexOf(`${props.post_id}`);
        likedPost.value.splice(idx, 1);
      } else {
        likedPost.value.push(`${props.post_id}`);
      }
    };

    return { isLiked, likeHandler };
  },
});
</script>
