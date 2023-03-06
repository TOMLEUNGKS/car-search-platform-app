<template>
  <ion-item
    button
    v-if="!disabled"
    :detail="false"
    lines="none"
    class="border-gray-200 mx-4 border-x-2 border-t-2"
  >
    <div slot="start" class="mr-3 text-xl">
      <font-awesome-icon
        v-if="selected"
        class="text-primary"
        :icon="['fas', 'circle-check']"
      />
      <font-awesome-icon v-else :icon="['far', 'circle']" />
    </div>
    <!-- <div slot="start" v-else class="mr-3 text-xl">
    </div> -->
    <div class="pr-2 mt-0.5">
      <font-awesome-icon
        v-if="category=='Colour' || category=='Exterior Colour' || category=='Interior Colour'"
        :icon="['fa-solid', 'fa-circle']"
        class="fa-border"
        style="--fa-border-color:#e9e9e9; --fa-border-radius:100%; --fa-border-padding:0px; --fa-border-width:1px"
        :style={color:title}
      >
      </font-awesome-icon>
    </div>
    <ion-label>
      <h2>{{ $t(title) }}</h2>
    </ion-label>
    <slot> </slot>
  </ion-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListSelectItem",
  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
      required: true,
    },
    category: {
      type: String,
      default: "",
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>