import { ref, watch, computed, reactive } from "vue";

import baseOptions from "@/seeds/baseOptions.json";
import { useBrandStore } from "@/stores/brandStore";
import { useModelStore } from "@/stores/modelStore";
import { Category } from "@/model/SearchCar";
import useSellCarFilter from "@/hooks/sell/useSellCarFilter";

const brandStore = useBrandStore();
const modelStore = useModelStore();
const { getCarSellFilterValue } = useSellCarFilter();
function getCarSellFilterOptionsByCate(category) {
  switch (category) {
    case "price range":
      return [
        "Below $40,000",
        "$40,000 - $80,000",
        "$80,000 - $130,000",
        "$130,000 - $200,000",
        "$200,000 - $400,000",
        "$400,000 - $800,000",
        "Above $800,000",
      ];

    case "brand":
      return getCarSellFilterBrandOptions();
    case "model":
      return getCarSellFilterModelOptions();
    case "built year":
      return getCarSellFilterBuiltYearOptions();
  }
}

function getCarSellFilterBrandOptions() {
  return baseOptions
    .filter((ele) => ele.parent_cat_id === "003")
    .map((ele) => {
      return { name: ele.name, car_id: ele.cat_id };
    });
}

async function getCarSellFilterModelOptions() {
  const brand_name = getCarSellFilterValue("brand");
  const cat = baseOptions.find((ele) => ele.name === brand_name);

  let options = brandStore.getModelOptions(cat?.cat_id);

  if (options.length == 0) {
    options = (await brandStore.fetchModel(
      cat?.cat_id,
      brand_name
    )) as Category[];
  }
  return options;
}

async function getCarSellFilterBuiltYearOptions() {
  const model_name = getCarSellFilterValue("model");
  const cat_id = brandStore.getModelCatID(model_name);

  let options = modelStore.getModelDetailsOptions(cat_id);
  if (options.length == 0) {
    options = (await modelStore.fetchModelDetails(
      cat_id,
      model_name
    )) as Category[];
  }

  return options;
}

export default function useSellCarFilterOptions() {
  return {
    getCarSellFilterOptionsByCate,
  };
}
