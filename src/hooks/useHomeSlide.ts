import { ref, watch, computed, reactive } from "vue";
// import {  } from "../services/firebase"
import { HomeSlideEnum, HomeSlideORM } from "../model/SearchCar";

const activeHomeSlide = ref<Array<HomeSlideORM>>();
//==================================
//Setter

function setActiveHomeSlide(newActiveHomeSlide: Array<HomeSlideORM>) {
  activeHomeSlide.value = newActiveHomeSlide;
}
//==================================
async function loadActiveHomeSlide() {
  const result: Array<HomeSlideORM> = [];

  const CarBrandsSlide: HomeSlideORM = {
    type: HomeSlideEnum.CarBrands,
    slide: { Audi: "Audi_Rings_bl-RGB 1.svg", BMW: "BMW_logo_PNG1 1.svg", Ford: "ford-emblem-logo-vector 1.svg", Holden: "logo-Holden 1.svg" },
  };

  const CarTypesSlide: HomeSlideORM = {
    type: HomeSlideEnum.CarTypes,
    slide: { SUV: "SUV-logo.png", Sedan: "Sedan-logo.png", Wagon: "SUV-logo.png", Hatch:"Sedan-logo.png" },
  };

  const FeaturedCarsSlide: HomeSlideORM = {
    type: HomeSlideEnum.FeaturedCars,
    slide: {
      "Tesla Model X with new darker wheel":
        "TEsla-Model-X-new-darker-wheels-hero 1.png",
      "All-new 2021 Mercedes-Benz S-Class": "2021-Mercedes-Benz-S-Class 1.png"
    },
  };

  const LatestCarForSellSlide: HomeSlideORM = {
    type: HomeSlideEnum.LatestCarForSell,
    slide: {
      "BMW M135i": "p90440668-highres 1.png",
      "New Porsche 718 Cayman GT4 RS ": "1_porsche_718gt4rs_9_5 1.png",
      "New Porsche 718 Cayman GT4 RS 2": "1_porsche_718gt4rs_9_5 1.png",
    },
  };

  const FeaturedArticlesSlide: HomeSlideORM = {
    type: HomeSlideEnum.FeaturedArticles,
    slide: {
      "Volkswagen ID.4 EV claims Guinness World": "large-14378-volkswagenid 1.png",
      "Sleek new Honda Civic Si unveiled": "2022-honda-civic-si-01 1.png",
      "Sleek new Honda Civic Si unveiled3": "2022-honda-civic-si-01 1.png",
    },
  };

  const CarNewsSlide: HomeSlideORM = {
    type: HomeSlideEnum.CarNews,
    slide: {
      "Top 20 most affordable EVs on sale now": "01_mg_zs_ev-2 1.png",
      "BYD Yuan Plus delayed for Australia": "byd-yuan-plus-05 1.png",
      "Sleek new Honda Civic Si unveiled3": "2022-honda-civic-si-01 1.png",
    },
  };

  result.push(CarBrandsSlide);
  result.push(CarTypesSlide);
  result.push(FeaturedCarsSlide);
  result.push(LatestCarForSellSlide);
  result.push(FeaturedArticlesSlide);
  result.push(CarNewsSlide);

  setActiveHomeSlide(result);
}

//==================================
//Getter
function getActiveHomeSlideByType(type: HomeSlideEnum | string | undefined) {
  return computed(() => activeHomeSlide.value?.find((obj) => obj.type == type));
}
//==================================

//Utility
loadActiveHomeSlide();

export default function useHomeSlide() {
  return {
    getActiveHomeSlideByType,
  };
}
