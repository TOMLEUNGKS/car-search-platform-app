<script lang="ts">
import { ref, defineComponent, computed } from "vue";

export default defineComponent({
  name: "Selection",

  template: `<div>
        <slot 
            v-for="current in range" 
            :key="current" 
            :current="current+1"
            :selected="isSelected(current+1)"
            :covered="isCovered(current+1)"
            :set-hovered="setHovered"
        >
            {{ current }}
        </slot>
    </div>
  `,
  props: ["modelValue", "count"],

  setup(props) {
    // state
    const hoveredIndex = ref(0);
    const range = computed(() => {
      return [...Array(props.count).keys()];
    });

    const isCovered = (current) => {
      return props.modelValue >= current || hoveredIndex.value >= current;
    };

    const isSelected = (current) => {
      return props.modelValue == current;
    };

    // state functions
    const setHovered = (current) => {
      hoveredIndex.value = current;
    };

    return {
      range,
      isSelected,
      isCovered,
      setHovered,
    };
  },
});
</script>
