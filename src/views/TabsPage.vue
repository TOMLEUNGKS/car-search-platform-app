<template>
  <ion-page>
    <ion-tabs @ionTabsDidChange="afterTabChange">
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="flex justify-between">
        <ion-tab-button tab="SearchCar" href="/tabs/search-car">
          <ion-img :src="`/assets/icon/${iconSrc}.svg`" />
          <ion-label class="text-xs">{{ $t('Search') }}</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="SellCar" href="/tabs/sell-car">
          <ion-img :src="`/assets/icon/${selliconSrc}.svg`" />
          <ion-label>{{ $t('Sell Car') }}</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Saved" href="/tabs/saved">
          <ion-img :src="`/assets/icon/${saveiconSrc}.svg`" />
          <ion-label>{{ $t('Saved') }}</ion-label>
        </ion-tab-button>

        <!-- <ion-tab-button tab="Blogs" href="/tabs/blogs">
          <ion-img :src="`/assets/icon/${blogiconSrc}.svg`" />
          <ion-label>Blogs</ion-label>
        </ion-tab-button> -->

        <ion-tab-button tab="Account" href="/tabs/account">
          <ion-img :src="`/assets/icon/${accounticonSrc}.svg`" />
          <ion-label>{{ $t('Account') }}</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonImg,
  IonPage,
  IonRouterOutlet,
  alertController,
  onIonViewDidEnter,
  onIonViewDidLeave,
} from "@ionic/vue";
import {
  newspaperOutline,
  personCircleOutline,
  bookmarkOutline,
  pricetagOutline,
  searchOutline,
} from "ionicons/icons";

import { useBackButton, useIonRouter } from "@ionic/vue";
import { App as capApp } from "@capacitor/app";

export default defineComponent({
  name: "TabsPage",
  components: {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    const iconSrc = ref("MagnifyingGlassPlus");
    const selliconSrc = ref("Tag");
    const saveiconSrc = ref("BookmarkSimple");
    const blogiconSrc = ref("Note");
    const accounticonSrc = ref("UserCircle");

    const afterTabChange = (e) => {
      if (e.tab == "SearchCar") {
        iconSrc.value = "MagnifyingGlassPlus-active";
      } else {
        iconSrc.value = "MagnifyingGlassPlus";
      }

      if (e.tab == "SellCar") {
        selliconSrc.value = "Tag-active";
      } else {
        selliconSrc.value = "Tag";
      }

      if (e.tab == "Saved") {
        saveiconSrc.value = "BookmarkSimple-active";
      } else {
        saveiconSrc.value = "BookmarkSimple_gray";
      }

      // if (e.tab == "Blogs") {
      //   blogiconSrc.value = "Note-active";
      // } else {
      //   blogiconSrc.value = "Note";
      // }

      if (e.tab == "Account") {
        accounticonSrc.value = "UserCircle-active";
      } else {
        accounticonSrc.value = "UserCircle";
      }
    };
    let backBtnListener;

    onIonViewDidLeave(() => {
      // console.log(backBtnListener);
      // backBtnListener.unregister();
      console.log("unregister");
    });

    return {
      bookmarkOutline,
      pricetagOutline,
      searchOutline,
      newspaperOutline,
      personCircleOutline,
      afterTabChange,
      iconSrc,
      selliconSrc,
      saveiconSrc,
      blogiconSrc,
      accounticonSrc,
    };
  },
});
</script>
