import { ref, computed, reactive } from "vue";
import { PostDisplay } from "@/model/Posts/carPost";

const comparePosts = reactive<PostDisplay[]>([]);

const attributes = [
  {
    name: "Engine",
    subAttrs: {
      "Safety rating": "safety_rating",
      "Engine code": "engine_code",
      "Engine size": "engine_size",
      Cylinders: "cylinder",
      "Engine location": "engine_location",
      Induction: "air_induction",
      Horsepower: "horsepower",
      "Torque(Nm)": "torque",
      "Power to weight ratio": "power_to_weight_ratio",
      "0-100 km/h": "zero_to_hundred_km",
      "1/4 miles": "quarter_mile",
      Drivetrain: "drivetrain_shorten",
    },
  },
  {
    name: "Fuel",
    subAttrs: {
      "Fuel type": "fuel_type",
      "RON Rating": "ron_rating",
      "Combined fuel consumption": "combined_fuel_consumption",
      "Fuel tank capacity": "fuel_tank_capacity",
      "Approximated range": "approximated_range",
    },
  },

  {
    name: "Dimension and weight",
    subAttrs: {
      Length: "length",
      Width: "width",
      Height: "height",
      Wheelbase: "wheelbase",
      "Turning circle": "turning_circle",
      "Curb weight": "curb_weight",
      "Boot volume": "boot_capacity",
    },
  },
  {
    name: "Others",
    subAttrs: {
      "Country made": "country_made",
      Generation: "generation",
    },
  },
];
const emptyPropertyList: string[] = [];
const reset = () => {
  comparePosts.length = 0;
  emptyPropertyList.length = 0;
};

const genEmptyPropertyList = () => {
  const subAttrs = attributes
    .map((attr) => Object.values(attr.subAttrs))
    .flat();

  for (const subAttr of subAttrs) {
    if (!comparePosts[0][subAttr] && !comparePosts[1][subAttr])
      emptyPropertyList.push(subAttr);
  }
  console.log(emptyPropertyList);
};

export function useCarCompare() {
  return {
    comparePosts,
    reset,
    genEmptyPropertyList,
    attributes,
    emptyPropertyList,
  };
}
