<template>
  <slot
    :value="value"
    :setValue="setValue"
    :setValueHandler="setValueHandler"
    :getValue="getValue"
    :error="error"

  >
  </slot>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";

import useSellCarContact from "@/hooks/sell/useSellCarContact";
import useVuelidate from "@vuelidate/core";

export default defineComponent({
  name: "SellCarContactManager",
  props: ["attr", "validation"],

  setup(props) {
    const { setCarSellContactValue, getCarSellContactValue, contactDataInvalidity } =
      useSellCarContact();

    const getValue = computed(() => getCarSellContactValue(props.attr));
    const error = ref("");

    // state
    const value = ref(getValue.value);

    const setValueHandler = (e) => {
      const input = e.target.value;
      setValue(input);
      if(props.attr == "email"){
        const v$ = useVuelidate(props.validation, { value });
        v$.value.$validate().then((valid) => {
          if (!valid) {
            console.log(v$.value.$error);
            error.value = v$.value.$errors[0].$message as string;
            contactDataInvalidity(true);
          } else {
            error.value = "";
            contactDataInvalidity(false);
          }
        });
      }
    };

    const setValue = (input) => {
      setCarSellContactValue(props.attr, input);
      value.value = input;
    };

    return {
      value,
      setValue,
      setValueHandler,
      getValue,
      error
    };
  },
});
</script>
