<template>
  <slot
    :value="value"
    :setValue="setValue"
    :setValueHandler="setValueHandler"
    :setValueHandlerNumber="setValueHandlerNumber"
    :getValue="getValue"
    :error="error"
  >
  </slot>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";

import useSellCarPost from "@/hooks/sell/useSellCarPost";
import useVuelidate from "@vuelidate/core";

export default defineComponent({
  name: "SellCarPostManager",
  props: ["attr", "validation"],

  setup(props) {
    const error = ref("");

    const { setCarSellPostValue, getCarSellPostValue, resetCarSellPostValue, formDataInvalidity } =
      useSellCarPost();
    if (props.attr == "Expired Date") {
      //for isregister and reset expired date
      resetCarSellPostValue(props.attr);
    }
    const getValue = computed(() => getCarSellPostValue(props.attr));
    console.log(getValue);
    // state
    const value = ref(getValue.value);

    const setValueHandlerNumber = (value) => {
      if (value) {
        const input = parseInt(value);
        setValue(input);
      }
    };

    const setValueHandler = (e) => {
      console.log(e.target.value);
      const input = e.target.value;
      setValue(input);
      if(props.attr == "built_year"){
        const v$ = useVuelidate(props.validation, { value });
        v$.value.$validate().then((valid) => {
          if (!valid) {
            console.log(v$.value.$error);
            error.value = v$.value.$errors[0].$message as string;
            formDataInvalidity(true);
          } else {
            error.value = "";
            formDataInvalidity(false);
          }
        });
      }
      if(props.attr == "Expired Date"){
        const inputMonth = value.value.split("/")[0];
        const inputYear = value.value.split("/")[1];
        const state = reactive({
          inputMonth,
          inputYear
        });
        const v$ = useVuelidate(props.validation, state);
        v$.value.$validate().then((valid) => {
          if (!valid) {
            console.log(v$.value.$error);
            error.value = v$.value.$errors[0].$message as string;
            formDataInvalidity(true);
          } else {
            error.value = "";
            formDataInvalidity(false);
          }
        });
      }
    };

    const setValue = (input) => {
      setCarSellPostValue(props.attr, input);
      value.value = input;
    };

    return {
      value,
      setValue,
      setValueHandler,
      setValueHandlerNumber,
      getValue,
      error,
    };
  },
});
</script>
