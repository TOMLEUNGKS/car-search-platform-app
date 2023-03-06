<template>
  <ion-img :alt="alt" :src="src" />
</template>

<script setup lang="ts">
defineProps(["src", "alt"]);
</script>
<style scoped>
ion-img::part(image) {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
  background-color: rgb(229 231 235);
}
</style>
