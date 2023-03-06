<template>
  <template v-if="results instanceof Array">
    <search-badge
      v-for="value in results"
      :title="value"
      :key="value"
      @removeFilter="null"
    ></search-badge>
  </template>

  <template v-else-if="results instanceof Object">
    <search-badge :title="results.model" @removeFilter="null"></search-badge>

    <search-badge
      v-for="value in results.generation"
      :title="value"
      :key="value"
      @removeFilter="null"
    ></search-badge>

    <search-badge
      v-for="value in results.version"
      :title="value"
      :key="value"
      @removeFilter="null"
    ></search-badge>
  </template>

  <template v-else>
    <search-badge :title="results" @removeFilter="null"></search-badge>
  </template>
</template>

<script setup lang="ts">
import SearchBadge from "@/components/SearchCar/SearchBadge.vue";
import CarModelDetailsFilter from "@/model/SearchCar/CarModelDetailsFilter";
import {
  CarSearchFilter,
  CarSearchRangeFilter,
} from "@/model/SearchCar/filter";

import { FilterVisitor } from "@/model/Visitors";

interface Props {
  filter: CarModelDetailsFilter | CarSearchFilter | CarSearchRangeFilter;
}
const props = defineProps<Props>();
const filterVisitor = new FilterVisitor();
const results = props.filter.accept(filterVisitor);
</script>
