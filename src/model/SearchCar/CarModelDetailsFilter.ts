import { Category } from "@/model/SearchCar";
import { CarModelValue } from "@/model/SearchCar/filter";
import { IVisitor } from "../Visitors";
import { Type } from "class-transformer";
import "reflect-metadata";
export default class CarModelDetailsFilter {
  brand: string;
  model: string;

  @Type(() => CarModelValue)
  versionList: CarModelValue;

  @Type(() => CarModelValue)
  generationList: CarModelValue;

  categoryBrand: Category;
  categoryModel: Category;

  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.versionList = new CarModelValue();
    this.generationList = new CarModelValue();
  }

  setCategoryBrand(_cb) {
    this.categoryBrand = _cb;
  }
  setCategoryModel(_cm) {
    this.categoryModel = _cm;
  }

  getFilterList(category) {
    if (category == "generation") return this.generationList;
    return this.versionList;
  }

  accept(visitor: IVisitor) {
    return visitor.visitModelFilter(this);
  }
}
