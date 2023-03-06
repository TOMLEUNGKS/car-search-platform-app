<template>
  <BaseBackLayout>
    <ion-list class="mb-20">
      <ion-list-header>
        <ion-title size="large" class="pl-2 font-bold">
          {{ $t(tilteCapitalize(routeAttr)) }}
        </ion-title>
      </ion-list-header>

      <div>
        <suspense>
          <DetailsSelectOptionManager
            :routeAttr="routeAttr"
            v-slot="{ titles }"
          >
            <SellCarFilterSelectManager
              :options="titles"
              :attr="routeAttr"
              v-slot:default="{ current, selected, setValueIdx }"
            >
              <list-select-item
                :title="titles[current - 1]"
                :selected="selected"
                @click="setValueIdx(current)"
                class="first:rounded-t-xl last:rounded-b-xl last:border-b-2"
              />
            </SellCarFilterSelectManager>
          </DetailsSelectOptionManager>
          <template #fallback>
            <ion-loading></ion-loading>
          </template>
        </suspense>
      </div>
    </ion-list>
    <SellCarDoneBtn />
  </BaseBackLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BaseBackLayout from "@/components/Common/BaseBackLayout.vue";

import ListSelectItem from "@/components/Common/ListSelectItem.vue";
import SellCarDoneBtn from "@/components/SellCar/DoneBtn.vue";

import { useRoute } from "vue-router";

import { tilteCapitalize } from "@/lib/utils";

import SellCarFilterSelectManager from "@/functional/SellCarFilterSelectManager.vue";
import DetailsSelectOptionManager from "@/functional/SellCar/DetailsSelectOptionManager.vue";

export default defineComponent({
  components: {
    BaseBackLayout,
    ListSelectItem,
    SellCarDoneBtn,
    SellCarFilterSelectManager,
    DetailsSelectOptionManager,
  },

  setup() {
    const route = useRoute();

    const routeAttr = route.params.attr;

    return { routeAttr, tilteCapitalize };
  },
});
</script>
