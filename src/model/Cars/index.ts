type Nullable<T> = T | null;

export interface ICarPost {
  post_id?: string;
  car_id: Nullable<string>;
  dealerID: Nullable<string>;
  imgs: string[] | File[];
  mileage: Nullable<number>;
  "Exterior Colour": Nullable<string>;
  "Interior Colour": Nullable<string>;
  built_year: Nullable<string>;
  "Expired Date": Nullable<string>; //License Fee Until
  Comments: Nullable<string>;

  front_rim: Nullable<string>;
  rear_rim: Nullable<string>;
  front_tyre: Nullable<string>;
  rear_tyre: Nullable<string>;
  tyre_model: Nullable<string>;
  transmission: Nullable<string>;

  "Listing Price": Nullable<number>;
  "Factory options": Nullable<string>;
  "Aftermarket options": Nullable<string>;
  Location: Nullable<string>;
  isRegister: Nullable<boolean>;
  "VIN number": Nullable<string>;
  "Manufactor Listed Colour": Nullable<string>;
  "Seller type": Nullable<string>;
  services: Nullable<string[]>;
  datetimeCreate?: string;
}

export interface IModel {
  model_id: number;
  model: string;
  series: string;
  yearEnd: Nullable<string>;
  yearStart: Nullable<string>;
}

export interface ICar {
  id: string;
  title: string;
  dealer: string;
  datetimeCreate: Date;
  details: ICarDetails;
  contactDetails: IContact;
  img: string;
}

interface ICarDetails {
  brand: string;
  model: string;
  builtYear: string;

  location: string;
  odometer: string;
  listingPrice: string;
  isRegistered: boolean;
  expiredDate?: Date;
  vinNumber?: string;
  exteriorColour: string;
  listedColour?: string;
  interiorColour: string;
  factoryOptions?: string;
  afterMarketOptions?: string;
}

export interface IContact {
  lastname: Nullable<string>;
  firstname: Nullable<string>;
  email: Nullable<string>;
  phoneNumber: Nullable<string>;
  secPhoneNUmber?: Nullable<string>;
}

export class PostDisplayObject {
  overview: Record<string, unknown>;

  constructor(carPost) {
    this["name"] = carPost.name;
    const car = carPost.car;
    const model = car.model;
    this.overview = {};

    this.overview["Colour"] = carPost["Exterior Colour"]!;
    this.overview["Interior colour"] = carPost["Interior colour"]!;
    this.overview["Body type"] = model["body-type"]!;
    this.overview["Doors / Seats"] = `${car.Doors && car.Doors + "Doors"}${
      car.Seats && car.Seats + "Seats"
    }`;
    this.overview["Drivetrain"] = car.Drivetrain!;
    this.overview["Drive type"] = null;
    this.overview["Release date"] = null;
    this.overview["Model year(MY)"] = null;
    this.overview["Built year"] = carPost["built_year"]!;
    this.overview["Warranty"] = null;
    this.overview["Comments"] = carPost["Comments"]!;
  }
}
