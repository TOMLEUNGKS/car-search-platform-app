import { ref, watch, computed, reactive } from "vue";

import { getRanges } from "@/lib/utils";
import locations from "@/seeds/locationSeed.json";
import useLocation from "@/hooks/search/useLocation";

const { getFlatLocationOptions, getDistrictsOptions } = useLocation();
function getCarSellPostOptionsByCate(category) {
  if (category.includes("Colour")) {
    return getCarSellPostColourOptions();
  }

  switch (category) {
    case "Seller type":
      return ["Private", "Dealer", "Authorized distributor"];
    case "services":
      return [
        "Test drive available",
        "Walk in available",
        "Appointment available",
        "Video tour available",
        "Finance available",
        "Price negotiable",
        "Certified dealer",
      ];
    case "mileage":
      return getRanges(500, 10000, 500);
    case "Listing Price":
      return getRanges(500, 10000, 500);
    case "built_year":
      return getRanges(1900, new Date().getFullYear(), 1, true);
    case "transmission":
      return ["Automatic", "Manual"];
    case "location":
      return getDistrictsOptions();
  }
}

function getCarSellPostColourOptions() {
  return [
    "Black",
    "White",
    "Grey",
    "Silver",
    "Gold",
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Purple",
    "Pink",
    "Brown",
  ];
}

export default function useSellCarPostOptions() {
  return {
    getCarSellPostOptionsByCate,
  };
}
