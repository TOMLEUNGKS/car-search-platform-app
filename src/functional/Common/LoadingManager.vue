<template>
  <slot :isOpenRef="isOpenRef" :setOpen="setOpen" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const isOpenRef = ref(true);
    const setOpen = (state: boolean) => (isOpenRef.value = state);
    return { isOpenRef, setOpen };
  },
});
</script>
