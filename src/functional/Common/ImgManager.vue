<template>
  <slot :urls="urls" :imgs="imgs"> </slot>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import useBaseFetch from "@/hooks/useBaseFetch";
const props = defineProps(["type", "id"]);

const getImgUrls = async () => {
  const url = "/api/" + props.type + "/img/" + props.id;
  const response = await useBaseFetch(false)(url);
  // change status to indicate the success of the upload request
  const { success, data, message } = response;
  // console.log(data);
  if (success) {
    return data;
  } else {
    console.log(message);
  }
};
const { imgs, urls } = await getImgUrls();
</script>
