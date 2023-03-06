import { ref } from "vue";

import locations from "@/seeds/locationSeed.json";
import districts from "@/seeds/districtsSeed.json";

//==================================
//Getter
function getLocations() {
  return locations;
}
//==================================

function getFlatLocationOptions() {
  const result = locations.map((district) => {
    return district.children.map((ele) => ({
      title: ele.name_en,
      value: ele.value,
    }));
  });
  return result.flat();
}

function getDistrictsOptions() {
  const result = districts.sort();
  return result;
}

//Utility

export default function useLocation() {
  return {
    getLocations,
    getFlatLocationOptions,
    getDistrictsOptions,
  };
}
