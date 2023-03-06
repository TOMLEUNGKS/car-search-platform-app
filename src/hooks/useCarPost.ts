import { ref, reactive } from "vue";

import { ICarPost } from "@/model/Cars";
import useBaseFetch from "@/hooks/useBaseFetch";

import useSearchFilter from "@/hooks/search/useSearchFilter";
// import useModelFilter from "@/hooks/search/useModelFilter";
import useModelFilter from "@/hooks/search/useModelFilter";

//==================================
//Setter

//==================================

//==================================
//Getter

let searchResultPost;
const { getSearchFilters } = useSearchFilter();
const { getModelFilters } = useModelFilter();

async function getCarPostBySearch() {
  const searchObj = createSearchObject();
  console.log(searchObj);

  const response = await useBaseFetch()("/api/car-posts/search", {
    method: "POST",
    body: JSON.stringify(searchObj),
  });
  const { success, data, message } = response;

  if (success) {
    console.log(data);
    searchResultPost = data;
    return data;
  }
  return message;
}

function createSearchObject() {
  const search = {};
  const searchFilters = getSearchFilters().value;
  const modelFilters = getModelFilters().value;
  search["model_filters"] = modelFilters;
  search["search_filters"] = searchFilters;
  return search;
}

async function getCarPostByIDArray(post_idArray) {
  const promises = post_idArray.map(async (ele) => {
    return await getCarPostByID(ele);
  });
  return await Promise.all(promises);
}

async function getCarPostByID(post_id) {
  const response = await useBaseFetch()(`/api/car-posts/${post_id}`, {
    method: "GET",
  });
  const { success, data, message } = response;

  if (success) {
    //searchResultPost = data;
    return data;
  }
  return message;
}

function getCarPostByIDinSearch(post_id) {
  const carPostresult = searchResultPost.filter(
    (obj) => obj.post_id == post_id
  )[0];
  return carPostresult;
}

//==================================

//Utility

export default function useCarPost() {
  return {
    getCarPostBySearch,
    getCarPostByID,
    getCarPostByIDinSearch,
    getCarPostByIDArray,
    createSearchObject,
  };
}
