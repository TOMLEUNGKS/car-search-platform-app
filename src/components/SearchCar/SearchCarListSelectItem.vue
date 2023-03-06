<template>
  <ListSelectItem :title="title" :selected="selected">
    <div
      slot="end"
      class="h-full flex justify-center items-center pl-4"
      @click.stop="$emit('go-detail')"
    >
      <span v-if="checked" class="text-gray-500 mr-3">{{ checkedStr }}</span>
      <div v-if="detail">
        <font-awesome-icon
          class="text-lg text-slate-300"
          :icon="['fas', 'angle-right']"
        />
      </div>
    </div>
  </ListSelectItem>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import useSearchFilter from "@/hooks/search/useSearchFilter";
import ListSelectItem from "@/components/Common/ListSelectItem.vue";

export default defineComponent({
  name: "SearchCarListItem",
  components: { ListSelectItem },
  props: {
    title: {
      type: [String],
      default: "",
      required: true,
    },

    detail: {
      type: Boolean,
      default: true,
    },
    checkedStr: {
      type: String,
      default: "",
    },
    filterAttr: {
      type: String,
      default: "",
    },

    indent: {
      type: String,
      default: "",
    },
    selected: {
      type: Boolean,
      default: false,
      required: true,
    },
  },

  setup(props) {
    return {};
  },
});
</script>
