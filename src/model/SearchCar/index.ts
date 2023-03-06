export enum HomeSlideEnum {
  CarBrands = "Car brands",
  CarTypes = "Car models",
  FeaturedCars = "Featured cars",
  LatestCarForSell = "Latest car for sell",
  FeaturedArticles = "Featured articles",
  CarNews = "Car news",
}

export interface HomeSlideORM {
  type: HomeSlideEnum;
  slide: Record<string, string>;
}

interface HomeSlideItem {
  name: string;
}

export class CategoryFilterORM {
  name: string;
  cat_id: string;
  parent_cat_id: string;
  parent_cat?: string;
  sub_cat?: boolean;

  constructor(name: string, cat_id: string, parent_cat_id: string) {
    this.name = name;
    this.cat_id = cat_id;
    this.parent_cat_id = parent_cat_id;
  }
}

export interface Category {
  name: string;
  cat_id: string;
  parent_cat_id: string;
  attr: string;

  special?: Array<{
    name: string;
    children_cat: string[];
    children?: Category[];
  }>;
}
