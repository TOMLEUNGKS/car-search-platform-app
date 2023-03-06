<template>
  <div>
    <div class="searchForm p-4">
      <input
        class="outline-none w-full"
        type="text"
        :placeholder="$t('Find a user')"
        v-model="searchText"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    modelValue: String,
  },

  setup(props, { emit }) {
    const searchText = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    });
    return { searchText };
  },
});
</script>

<style scoped>
ion-img::part(image) {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
