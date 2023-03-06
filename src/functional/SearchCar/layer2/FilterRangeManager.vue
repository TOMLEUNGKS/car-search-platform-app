<template>
  <slot
    :toValue="[toValue]"
    :fromValue="[fromValue]"
    :toCustomInput="toCustomInput"
    :fromCustomInput="fromCustomInput"
    :state="state"
  >
  </slot>
  <slot name="done" :commit="commit"> </slot>
</template>

<script lang="ts">
import { ref, defineComponent, computed, reactive, onUnmounted } from "vue";

import useSearchFilter from "@/hooks/search/useSearchFilter";
import useEvent from "@/hooks/useEvent";

export default defineComponent({
  name: "FilterRangeManager",
  props: ["options", "attr"],

  setup(props) {
    const { addSearchFilter, getCateRangeFilter, removeSearchFilter } =
      useSearchFilter();

    const getValues = getCateRangeFilter(props.attr).value;

    const fromValue = ref(getValues.fromValue);
    const toValue = ref(getValues.toValue);

    const optionsObj = {};
    // const optionsReverseObj = {};
    props.options[0].forEach((ele) => {
      optionsObj[ele.label] = ele.value;
      // optionsReverseObj[ele.value] = ele.label;
    });

    const state = reactive({
      fromReadonly: Object.values(optionsObj).includes(fromValue.value),
      toReadonly: Object.values(optionsObj).includes(toValue.value),
      fromCusValue: "",
      toCusValue: "",
    });

    if (!state.fromReadonly) {
      state.fromCusValue = fromValue.value! as string;
      fromValue.value = "custom";
    }

    if (!state.toReadonly) {
      state.toCusValue = toValue.value! as string;
      toValue.value = "custom";
    }

    const commit = () => {
      let fromItem = fromValue.value as number;
      let toItem = toValue.value as number;
      if (toValue.value == "custom") {
        toItem = parseInt(state.toCusValue as string);
      }

      if (fromValue.value == "custom") {
        fromItem = parseInt(state.fromCusValue as string);
      }

      if (fromItem > toItem) {
        alert("Invalid input!");
        return;
      }

      getValues.fromValue = fromItem || "";
      getValues.toValue = toItem || "";

      if (!fromItem && !toItem) {
        removeSearchFilter(getValues);
      } else {
        addSearchFilter(getValues);
      }
    };

    const fromCustomInput = (scrollResult) => {
      fromValue.value = scrollResult[0];
      if (fromValue.value == "custom") {
        state.fromReadonly = false;
      } else {
        state.fromReadonly = true;
      }
    };

    const toCustomInput = (scrollResult) => {
      toValue.value = scrollResult[0];
      if (toValue.value == "custom") {
        state.toReadonly = false;
      } else {
        state.toReadonly = true;
      }
    };

    //for clear selelction
    const reset = () => {
      toValue.value = props.options[0][0].value;
      fromValue.value = props.options[0][0].value;
    };
    const emmiter = useEvent();
    emmiter.on("clear", reset);
    onUnmounted(() => {
      emmiter.off("clear", reset);
    });

    return {
      toValue,
      fromValue,
      fromCustomInput,
      toCustomInput,

      state,
      commit,
    };
  },
});
</script>
