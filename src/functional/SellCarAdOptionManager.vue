<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "SellCarAdManager",
  props: ["attr"],

  setup(props) {
    // state
    const valueIdx = ref("");

    // state functions
    const setValueIdx = (current) => {
      valueIdx.value = current;
    };

    return {
      valueIdx,
      setValueIdx,
    };
  },
});
</script>
