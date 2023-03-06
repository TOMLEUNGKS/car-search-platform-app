import unit from "@/seeds/unit.json";
import { roundOf, priceFormatter, shorten } from "@/lib/utils";
class CarSpec {
  model: object;
}

export class PostDisplay {
  name: string;
  post_id: string;
  dealerID: string;
  car: CarSpec;
  built_year: string;
  transmission: string;

  get listing_price() {
    return priceFormatter.format(this["Listing Price"]);
  }

  get horsepower() {
    return (
      this.car["Horsepower"] &&
      Math.round(this.car["Horsepower"]) + " " + unit["Horsepower"]
    );
  }
  get combined_fuel_consumption() {
    return (
      this.car["Combined Fuel Consumption"] &&
      this.car["Combined Fuel Consumption"] +
        " " +
        unit["Combined Fuel Consumption"]
    );
  }

  get _mileage() {
    return this["mileage"] + " " + unit["mileage"];
  }

  get body_type() {
    return this.car.model["body-type"];
  }

  get interior_colour() {
    return this["Interior Colour"];
  }

  get colour() {
    return this["Exterior Colour"];
  }

  get drivetrain() {
    return this.car["Drivetrain"];
  }

  get drivetrain_shorten() {
    return shorten(this.car["Drivetrain"]);
  }

  get model_year() {
    if (this.car["year_start"] && this.car["year_end"]) {
      return `${this.car["year_start"]}-${this.car["year_end"]}`;
    }
  }

  get door_seats() {
    const door = this.car["Doors"] ? this.car["Doors"] + " Doors" : "";
    const seat = this.car["Seats"] ? this.car["Seats"] + " Seats" : "";

    return `${door} ${seat}`;
  }

  get comments() {
    return this["Comments"];
  }

  get factory_options() {
    return this["Factory options"];
  }

  get aftermarket_options() {
    return this["Aftermarket options"];
  }

  //confuse
  get release_date() {
    return this["Release Date"];
  }
  get drive_type() {
    return this["Drive type"];
  }
  get warranty() {
    return this["Warranty"];
  }

  //SpecSeg - Engine
  get safety_rating() {
    return this.car["Safety Rating"];
  }
  get engine_code() {
    return this.car["Engine Code"];
  }
  get engine_size() {
    return (
      this.car["Engine Size"] &&
      roundOf(this.car["Engine Size"] / 1000, 1).toFixed(1) +
        " " +
        unit["Engine Size"]
    );
  }
  get cylinder() {
    return this.car["Cylinder"];
  }
  get engine_location() {
    return this.car["Engine Location"];
  }

  get air_induction() {
    return this.car["Air Induction"];
  }
  get torque() {
    return this.car["Torque"] && this.car["Torque"] + " " + unit["Torque"];
  }
  get power_to_weight_ratio() {
    return (
      this.car["Power to Weight Ratio"] &&
      this.car["Power to Weight Ratio"] + " " + unit["Power to Weight Ratio"]
    );
  }
  get zero_to_hundred_km() {
    return (
      this.car["0-100 km/h"] &&
      this.car["0-100 km/h"] + " " + unit["0-100 km/h"]
    );
  }
  get quarter_mile() {
    return (
      this.car["1/4 Mile"] && this.car["1/4 Mile"] + " " + unit["1/4 Mile"]
    );
  }

  //SpecSeg - Fuel
  get fuel_type() {
    return this.car["Fuel type"];
  }
  get ron_rating() {
    return this.car["RON Rating"];
  }
  get fuel_tank_capacity() {
    return (
      this.car["Fuel Tank Capacity"] &&
      this.car["Fuel Tank Capacity"] + " " + unit["Fuel Tank Capacity"]
    );
  }
  get approximated_range() {
    return (
      this.car["Approximated Range"] &&
      this.car["Approximated Range"] + " " + unit["Approximated Range"]
    );
  }

  //SpecSeg - Wheels and tyres
  get _front_rim() {
    return this["front_rim"];
  }
  get _rear_rim() {
    return this["rear_rim"];
  }
  get _front_tyre() {
    return this["front_tyre"];
  }
  get _rear_tyre() {
    return this["rear_tyre"];
  }

  //SpecSeg - Dimension and weight
  get length() {
    return this.car["Length"] && this.car["Length"] + " " + unit["Length"];
  }
  get width() {
    return this.car["Width"] && this.car["Width"] + " " + unit["Width"];
  }
  get height() {
    return this.car["Height"] && this.car["Height"] + " " + unit["Height"];
  }
  get wheelbase() {
    return (
      this.car["Wheelbase"] && this.car["Wheelbase"] + " " + unit["Wheelbase"]
    );
  }
  get turning_circle() {
    return (
      this.car["Turning Circle"] &&
      this.car["Turning Circle"] + " " + unit["Turning Circle"]
    );
  }
  get curb_weight() {
    return (
      this.car["Curb Weight"] &&
      this.car["Curb Weight"] + " " + unit["Curb Weight"]
    );
  }
  get boot_capacity() {
    return (
      this.car["Boot Capacity"] &&
      this.car["Boot Capacity"] + " " + unit["Boot Capacity"]
    );
  }

  //SpecSeg - Others
  get country_made() {
    return this.car["Country Made"];
  }
  get generation() {
    return this.car["Generation"];
  }
}
