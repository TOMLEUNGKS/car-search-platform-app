<template>
  <slot :searchResult="postReults" />
</template>

<script setup lang="ts" async>
import useCarPost from "@/hooks/useCarPost";
import { useCarCompare } from "@/hooks/compare";

import { plainToInstance } from "class-transformer";
import { PostDisplay } from "@/model/Posts";

const { getCarPostBySearch } = useCarPost();
const searchResult = await getCarPostBySearch();

const { comparePosts } = useCarCompare();
const filterReults = searchResult.filter(
  (ele) => !comparePosts.map((ele) => ele.post_id).includes(ele.post_id)
);

const postReults = plainToInstance(PostDisplay, filterReults);
</script>
