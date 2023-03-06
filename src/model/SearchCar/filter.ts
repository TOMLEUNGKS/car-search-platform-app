import { IVisitor } from "../Visitors";
import unit from "@/seeds/unit.json";

export interface IBaseFilter {
  category: string;
  getFilterValueStr();
}

export interface ISearchFilter {
  value: (string | number)[];
}

export interface ISearchRangeFilter {
  fromValue?: string | number;
  toValue?: string | number;
}

export class CarModelValue implements IBaseFilter, ISearchFilter {
  category: string;
  value: (string | number)[] = [];

  getFilterValueStr() {
    const resultFilter = this.value.slice(0, 3);
    if (this.value.length > 3) {
      return resultFilter.join(", ") + "...";
    }
    return resultFilter.join(", ");
  }
}

export class CarSearchRangeFilter implements IBaseFilter, ISearchRangeFilter {
  category: string;
  fromValue?: string | number;
  toValue?: string | number;
  constructor(category) {
    this.category = category;
  }

  getFilterValueStr() {
    if (this.fromValue == this.toValue) {
      return this.toValue;
    }
    return `${this.fromValue} - ${this.toValue} ${unit[this.category]}`;
  }

  accept(visitor: IVisitor) {
    return visitor.visitRangeFilter(this);
  }
}

export class CarSearchFilter implements IBaseFilter, ISearchFilter {
  category: string;
  value: (string | number)[] = [];
  constructor(category) {
    this.category = category;
  }

  getFilterValueStr() {
    const resultFilter = this.value.slice(0, 3);
    if (this.value.length > 3) {
      return resultFilter.join(", ") + "...";
    }
    return resultFilter.join(", ");
  }

  addSearchFilter(filter: string | number) {
    this.value.push(filter);
  }

  removeSearchFilter(filter: string | number) {
    this.value.splice(this.getSearchFilterIdx(filter), 1);
  }

  private getSearchFilterIdx(filter: string | number) {
    return this.value.findIndex((ele) => ele === filter);
  }

  isEmpty(): boolean {
    return this.value.length == 0;
  }

  accept(visitor: IVisitor) {
    return visitor.visitFilter(this);
  }
}
