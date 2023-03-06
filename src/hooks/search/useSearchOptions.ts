import baseOptions from "@/seeds/baseOptions.json";
import { getRanges } from "@/lib/utils";
import useLocation from "@/hooks/search/useLocation";

import useBaseFetch from "@/hooks/useBaseFetch";
import useModelFilter from "@/hooks/search/useModelFilter";
import { FilterVisitor } from "@/model/Visitors";

function getSearchOptionsByCate(category) {
  console.log(category);
  switch (category) {
    case "Year":
      return getYears();
    case "Mileage":
      return getMileageRange();
    case "Price":
      return getPriceRange();
    case "Doors":
      return getRanges(1, 8, 1, false, true, false);
    case "Seats":
      return getRanges(1, 6, 1, false, true, false);

    case "Horsepower":
      return getRanges(100, 500, 100);
    case "Torque":
      return getRanges(100, 500, 100);
    case "Power to weight ratio":
      return getRanges(100, 250, 50);
    case "0-100 km/h":
      return getRanges(3, 8, 1);
    case "Engine size":
      return getRanges(500, 6000, 500);
  }
}

function getYears() {
  const nowYear = new Date().getFullYear();
  const range = getRanges(1900, nowYear, 1, true);

  return range;
}

function getMileageRange() {
  const midRange = getRanges(10, 100, 10);

  const array = midRange.pop() as Record<string, number | string>[];
  const firstEle = array.shift();
  const lastEle = array.pop();

  const newArray = array.map((ele) => ({
    value: (ele.value as number) * 1000,
    label: ele.label + "k",
  }));

  const extra1 = [500, 1000, 2000, 5000].map((ele) => ({
    value: ele,
    label: ele,
  }));

  const extra2 = [150, 200, 300].map((ele) => ({
    value: ele * 1000,
    label: `${ele}k`,
  }));

  return [[firstEle, ...extra1, ...newArray, ...extra2, lastEle]];
}

function getPriceRange() {
  const midRange = getRanges(100, 500, 50);

  const array1 = midRange.pop() as Record<string, number | string>[];
  const firstEle = array1.shift();
  const lastEle = array1.pop();

  const newArray = array1.map((ele) => ({
    value: (ele.value as number) * 1000,
    label: ele.label + "k",
  }));

  const midRange2 = getRanges(600, 900, 100, false, false, false);
  const array2 = midRange2.pop() as Record<string, number | string>[];
  const newArray2 = array2.map((ele) => ({
    value: (ele.value as number) * 1000,
    label: ele.label + "k",
  }));

  const midRange3 = getRanges(1, 3, 0.5, false, false, false);
  const array3 = midRange3.pop() as Record<string, number | string>[];
  const newArray3 = array3.map((ele) => ({
    value: (ele.value as number) * 1000000,
    label: ele.label + "m",
  }));

  const extra1 = [10, 25, 50, 75].map((ele) => ({
    value: ele * 1000,
    label: `${ele}k`,
  }));

  return [
    [firstEle, ...extra1, ...newArray, ...newArray2, ...newArray3, lastEle],
  ];
}

//==================================
//Getter

function getSearchFilterOptions(parent_cat_id: string | undefined) {
  if (parent_cat_id == "009") {
    const { getDistrictsOptions } = useLocation();
    return getDistrictsOptions().map((item) => ({
      name: item,
    }));
  }

  if (!parent_cat_id) return [];
  const result = baseOptions.filter(
    (ele) => ele.parent_cat_id === parent_cat_id
  );
  return result;
}

function getSearchFilterOptionsByid(cat_id: string) {
  const result = baseOptions.find((ele) => ele.cat_id === cat_id);
  return result;
}

async function getSearchOptionAvailableList(cat_name) {
  //only for body type now
  const { getModelFilters } = useModelFilter();
  const modelFilters = getModelFilters();

  console.log(modelFilters);

  const filterVisitor = new FilterVisitor();
  const results = modelFilters.value.map((mf) => mf.accept(filterVisitor));
  console.log(results);

  try {
    const { success, data } = await useBaseFetch()("/api/options/" + cat_name, {
      method: "post",
      body: { model: results },
    });

    if (success) {
      return data;
    }
  } catch (err) {
    console.log(err);
  }
}

export default function useSearchOptions() {
  return {
    getSearchOptionsByCate,
    getSearchFilterOptions,
    getSearchFilterOptionsByid,

    getSearchOptionAvailableList,
  };
}
