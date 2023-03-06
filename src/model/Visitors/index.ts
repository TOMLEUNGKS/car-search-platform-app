import CarModelDetailsFilter from "@/model/SearchCar/CarModelDetailsFilter";
import {
  CarSearchFilter,
  CarSearchRangeFilter,
} from "@/model/SearchCar/filter";

export interface IVisitor {
  visitFilter(filter: CarSearchFilter);
  visitRangeFilter(filter: CarSearchRangeFilter);
  visitModelFilter(filter: CarModelDetailsFilter);
}

export class FilterVisitor implements IVisitor {
  visitFilter(filter: CarSearchFilter) {
    return filter.value;
  }
  visitRangeFilter(filter: CarSearchRangeFilter) {
    return filter.getFilterValueStr();
  }
  visitModelFilter(filter: CarModelDetailsFilter) {
    return {
      model: filter.model,
      generation: filter.getFilterList("generation").value,
      version: filter.getFilterList("version").value,
    };
  }
}
