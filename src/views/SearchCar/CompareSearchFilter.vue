<template>
  <ion-nav :root="SearchCarList"></ion-nav>
</template>

<script setup lang="ts">
import { defineComponent, provide, ref, reactive, onMounted } from "vue";

import { searchOutline } from "ionicons/icons";
import SearchLayout from "@/components/SearchCar/layouts/SearchLayout.vue";
import SearchCarList from "@/components/SearchCar/SearchCarList_test.vue";
import SearchCarListLayer2 from "@/components/SearchCar/layer2/SearchCarListLayer2.vue";
import SearchCarModelLayer from "@/components/SearchCar/layer2/SearchCarModelLayer.vue";
import SearchCarListLayer3 from "@/components/SearchCar/layer3/SearchCarListLayer3.vue";
import SearchCarListLayer4 from "@/components/SearchCar/layer4/SearchCarListLayer4.vue";
import YearPicker from "@/components/SearchCar/layer2/YearPicker.vue";
import BasicPicker from "@/components/SearchCar/layer2/BasicPicker.vue";
import LocationSearch from "@/components/SearchCar/layer2/LocationSearch.vue";

import useSearchFilter from "@/hooks/search/useSearchFilter";
// import useModelFilter from "@/hooks/search/useModelFilter";
import useModelFilter from "@/hooks/search/useModelFilter";
import { IonPage } from "@ionic/vue";

import {
  onIonViewDidLeave,
  onIonViewDidEnter,
  useBackButton,
  useIonRouter,
  IonNav,
} from "@ionic/vue";

import { onBeforeRouteLeave } from "vue-router";

// onBeforeRouteLeave(leaveGuard) {
//   const { resetSearchFilters } = useSearchFilter();
//   const { resetModelFilters } = useModelFilter();

//   if (leaveGuard.to.fullPath == "/tabs/search-car/main") {
//     resetModelFilters();
//     resetSearchFilters();
//   }
//   next(); // Or stay here
// }

const componentRender = ref(["SearchCarList"]);
const componentProps = ref([{}]);

provide("componentRender", componentRender);
provide("componentProps", componentProps);

const doneFilter = () => {
  componentRender.value = ["SearchCarList"];
  componentProps.value = [{}];
};
provide("doneFilter", doneFilter);

const backFunction = () => {
  if (componentRender.value.length > 1) {
    componentRender.value.pop();
    componentProps.value.pop();
  } else {
    router.push("/tabs/search-car/main");
  }
};

const router = useIonRouter();

let backBtnListener;
onIonViewDidEnter(() => {
  console.log("layout did enter");
  backBtnListener = useBackButton(15, () => backFunction());
});

onIonViewDidLeave(() => {
  console.log("layout did leave");
  backBtnListener.unregister();
});
</script>
