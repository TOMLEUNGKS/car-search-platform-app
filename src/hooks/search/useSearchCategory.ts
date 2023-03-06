import { ref, watch, computed, reactive } from "vue";
import base from "@/seeds/base.json";

function getSearchFilterCategory(parent_cat_id: string | undefined) {
  if (!parent_cat_id) return [];
  const result = base.filter((ele) => ele.parent_cat_id === parent_cat_id);
  return result;
}
function getBaseCategory() {
  return [
    {
      name: "Search with filters",
      children: getSearchFilterCategory("000"),
      icon: "MagnifyingGlass",
    },
    {
      name: "Preferences",
      children: getSearchFilterCategory("001"),
      icon: "Sliders",
    },
    {
      name: "Car specification",
      children: getSearchFilterCategory("002"),
      icon: "Car",
    },
  ];
}

export default function useSearchCategory() {
  return {
    getBaseCategory,

    getSearchFilterCategory,
  };
}
