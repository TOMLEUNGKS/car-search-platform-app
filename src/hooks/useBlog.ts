import { ref } from "vue";

import blog from "@/seeds/blogSeed.json";

//==================================
//Getter
function getBlogs() {
  return blog;
}
//==================================

//Utility

export default function useBlog() {
  return {
    getBlogs,
  };
}
