<template>
  <ion-list>
    <ion-list-header>
      <ion-icon
        class="text-xl ml-2 text-primary"
        :src="'/assets/icon/' + category.icon"
      />
      <ion-title size="large" class="pl-2 font-bold">
        {{ $t(category.name) }}
      </ion-title>
    </ion-list-header>
  </ion-list>
  <FilterRangeOptionsManager :categoryname="category.name" v-slot="{ options }">
    <FilterRangeManager :options="options" :attr="category.attr">
      <template v-slot="valueObj">
        <div class="flex justify-center gap-4">
          <div class="flex flex-col w-full items-center ml-4 max-w-2xl">
            <div class="bg-gray-100 rounded-xl flex items-center">
              <ion-input
                ref="fromInput"
                class="text-center text-gray text-lg font-semibold px-0"
                :value="
                  valueObj.state.fromReadonly
                    ? valueObj.fromValue
                    : valueObj.state.fromCusValue
                "
                @ion-input="valueObj.state.fromCusValue = $event.target.value"
                :readonly="valueObj.state.fromReadonly"
                type="number"
                min="0"
              >
              </ion-input>
              <span class="text-gray-400 font-normal text-lg mr-2">
                {{ category.unit }}
              </span>
            </div>
            <ScrollPicker
              class="w-full mt-8 text-center border rounded-lg border-gray"
              :options="options"
              v-model="valueObj.fromValue"
              inactive-style="color: lightgrey; background-color:transparent"
              active-style="color: var(--ion-color-primary) "
              @update:modelValue="valueObj.fromCustomInput"
            >
              <template v-slot:option="prop">
                  {{ prop.item.label }}
              </template>
            </ScrollPicker>
          </div>
          <span class="self-top mt-2">To</span>
          <div class="flex flex-col w-full items-center mr-4 max-w-2xl">
            <div class="bg-gray-100 rounded-xl flex items-center">
              <ion-input
                class="bg-gray-100 rounded-xl text-center text-gray text-lg font-semibold px-0"
                :value="
                  valueObj.state.toReadonly
                    ? valueObj.toValue
                    : valueObj.state.toCusValue
                "
                @ion-input="valueObj.state.toCusValue = $event.target.value"
                :readonly="valueObj.state.toReadonly"
                type="number"
                min="0"
              >
              </ion-input>
              <span class="text-gray-400 font-normal text-lg mr-2">
                {{ category.unit }}
              </span>
            </div>
            <ScrollPicker
              class="w-full mt-8 text-center border rounded-lg border-gray"
              :options="options"
              v-model="valueObj['toValue']"
              inactive-style="color: lightgrey"
              active-style="color: var(--ion-color-primary)"
              @update:modelValue="valueObj.toCustomInput"
            >
              <template v-slot:option="prop">
                  {{ prop.item.label }}
              </template>
            </ScrollPicker>
          </div>
        </div>
      </template>

      <template #done="{ commit }">
        <SearchDoneBtn @click="commit" />
      </template>
    </FilterRangeManager>
  </FilterRangeOptionsManager>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { IonListHeader, IonIcon } from "@ionic/vue";
import ScrollPicker from "vue3-scroll-picker";

import SearchDoneBtn from "@/components/SearchCar/SearchDoneBtn.vue";

import FilterRangeManager from "@/functional/SearchCar/layer2/FilterRangeManager.vue";
import FilterRangeOptionsManager from "@/functional/SearchCar/layer2/FilterRangeOptionsManager.vue";

export default defineComponent({
  components: {
    ScrollPicker,
    IonListHeader,
    IonIcon,
    SearchDoneBtn,
    FilterRangeManager,
    FilterRangeOptionsManager,
  },
  props: {
    category: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    return {};
  },
});
</script>

<style>
ion-button::part(native) {
  border-radius: 12px;
}
</style>

<style>

.pad-overlay{
  border-radius: inherit;
}

.pad-top-overlay-custom{
  border-radius: inherit;
}

.pad-bottom-overlay-custom{
  border-radius: inherit;
}

</style>
