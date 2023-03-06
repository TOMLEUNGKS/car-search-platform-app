<template>
  <slot :carPost="carPost"> </slot>
</template>

<script lang="ts">
import useCarPost from "@/hooks/useCarPost";
import { ref, defineComponent, computed } from "vue";

export default defineComponent({
  name: "PostManager",
  props: ["post_id"],
  async setup(props) {
    const { getCarPostByID } = useCarPost();

    const carPost = await getCarPostByID(props.post_id);

    return {
      carPost,
    };
  },
});
</script>
