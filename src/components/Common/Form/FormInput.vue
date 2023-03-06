<template>
  <ion-item>
    <ion-input
      class="w-80 p-4"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </ion-item>
</template>

<script lang="ts" setup>
defineProps(["type", "placeholder", "modelValue", "error", "errMsg"]);
defineEmits(["update:modelValue"]);
</script>
