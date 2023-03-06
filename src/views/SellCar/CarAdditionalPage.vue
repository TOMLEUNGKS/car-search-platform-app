<template>
  <BaseBackLayout>
    <ion-list>
      <ion-list-header>
        <ion-title class="pl-2 font-bold mt-4">
          Additional information
        </ion-title>
      </ion-list-header>
      <ion-label class="text-sm text-gray-400 ml-6">
        More details help buyers make decision faster.
      </ion-label>
      <div class="mt-2 mx-6 text-sm font-semibold">
        <!-- <ion-title class="font-semibold text-xl"> Overview </ion-title>
        <hr class="mx-auto my-2" /> -->

        <div lines="none" class="p-2 grid grid-cols-3 items-center">
          <ion-label class="font-semibold text-base"> {{$t("Built Year")}}* </ion-label>

          <SellCarPostManager
            :attr="'built_year'"
            :validation="valBuiltYear"
            v-slot="{ value, setValueHandler, error }"
          >
            <ion-input
              class="rounded-large bg-gray-100 text-gray-500 col-span-2"
              type="number"
              :v-model="value"
              @ionInput="setValueHandler"
            >
            </ion-input>
            <ion-note 
              v-if="error" 
              color="danger" 
              class="text-xs col-span-3 text-right pt-2 px-1"
            >Enter a valid built year</ion-note>
          </SellCarPostManager>
        </div>

        <div lines="none" class="p-2 grid grid-cols-3 items-center">
          <ion-label class="font-semibold text-base"> {{$t("Mileage")}}* </ion-label>

          <SellCarPostManager
            :attr="'mileage'"
            v-slot="{ value, setValueHandler }"
          >
            <ion-input
              class="rounded-large bg-gray-100 text-gray-500 col-span-2"
              type="number"
              :v-model="value"
              @change="setValueHandler"
            >
            </ion-input>
          </SellCarPostManager>
        </div>

        <div lines="none" class="p-2 grid grid-cols-3 items-center">
          <ion-label class="font-semibold text-base">
            {{$t("Listing Price")}}*
          </ion-label>

          <SellCarPostManager
            :attr="'Listing Price'"
            type="number"
            v-slot="{ value, setValueHandler }"
          >
            <ion-input
              class="rounded-large bg-gray-100 text-gray-500 col-span-2"
              :v-model="value"
              type="number"
              @change="setValueHandler"
            >
            </ion-input>
          </SellCarPostManager>
        </div>

        <ion-title class="text-base font-semibold my-2">
          Is your car registered?*
        </ion-title>

        <SellCarPostManager :attr="'isRegister'" v-slot="{ value, setValue }">
          <div class="flex">
            <ion-button
              @click="
                setValue(true);

                registerTemp = true;
              "
              class="flex-1"
              :class="{ active: value == true }"
            >
              <ion-label class="font-semibold">Yes</ion-label>
            </ion-button>
            <ion-button
              @click="
                setValue(false);
                registerTemp = false;
              "
              class="flex-1"
              :class="{ active: value == false }"
            >
              <ion-label class="font-semibold">No</ion-label>
            </ion-button>
          </div>
        </SellCarPostManager>

        <div
          lines="none"
          class="p-2 grid grid-cols-3 items-center"
          v-if="registerTemp"
        >
          <ion-label class="font-semibold text-base"> Expired Date* </ion-label>

          <SellCarPostManager
            :attr="'Expired Date'"
            :validation="valExpiredDate"
            v-slot="{ value, setValueHandler, error }"
          >
              <ion-input
                slot="end"
                class="rounded-large bg-gray-100 text-gray-500 col-span-2 text-sm font-semibold"
                placeholder="MM/YYYY"
                :v-model="value"
                @ion-input="setValueHandler"
              >
              </ion-input>
              <ion-note 
              v-if="error" 
              color="danger" 
              class="text-xs col-span-3 text-right pt-1 px-1"
            >Enter a valid expired date</ion-note>
          </SellCarPostManager>
        </div>

        <div lines="none" class="p-2 grid grid-cols-3 items-center">
          <ion-label class="font-semibold text-base"> VIN number </ion-label>

          <SellCarPostManager
            :attr="'VIN number'"
            v-slot="{ value, setValueHandler }"
          >
            <ion-input
              slot="end"
              class="rounded-large bg-gray-100 text-gray-500 col-span-2"
              :v-model="value"
              @change="setValueHandler"
            >
            </ion-input>
          </SellCarPostManager>
        </div>

        <hr class="mx-auto my-2" />

        <SellCarPostManager attr="transmission" v-slot="{ getValue }">
          <list-item
            :result="getValue"
            lines="full"
            @go-detail="
              $router.push(
                '/tabs/sell-car/car-additional/select/' + 'transmission'
              )
            "
          >
            <ion-label class="text-sm font-semibold"
              >{{$t("Transmission")}}*</ion-label
            ></list-item
          >
        </SellCarPostManager>

        <SellCarPostManager attr="Exterior Colour" v-slot="{ getValue }">
          <list-item
            :result="getValue"
            lines="full"
            @go-detail="
              $router.push(
                '/tabs/sell-car/car-additional/select/' + 'Exterior Colour'
              )
            "
          >
            <ion-label class="text-sm font-semibold"
              >Exterior Colour*</ion-label
            ></list-item
          >
        </SellCarPostManager>

        <div lines="none" class="p-2 grid grid-cols-4 items-center">
          <ion-label class="font-semibold text-base col-span-2">
            Manufactor Listed Colour
          </ion-label>

          <SellCarPostManager
            :attr="'Manufactor Listed Colour'"
            v-slot="{ value, setValueHandler }"
          >
            <ion-input
              slot="end"
              class="rounded-large bg-gray-100 text-gray-500 col-span-2"
              :v-model="value"
              @change="setValueHandler"
            >
            </ion-input>
          </SellCarPostManager>
        </div>

        <hr class="mx-auto my-1" />

        <SellCarPostManager attr="Interior Colour" v-slot="{ getValue }">
          <list-item
            :result="getValue"
            lines="full"
            @go-detail="
              $router.push(
                '/tabs/sell-car/car-additional/select/' + 'Interior Colour'
              )
            "
          >
            <ion-label class="text-sm font-semibold"
              >Interior Colour</ion-label
            ></list-item
          >
        </SellCarPostManager>

        <SellCarPostManager
          attr="Manufactor Listed Colour"
          v-slot="{ getValue }"
        >
          <list-item
            :result="getValue"
            lines="full"
            @go-detail="$router.push('/tabs/sell-car/car-additional/rimtyre')"
          >
            <ion-label class="text-sm font-semibold"
              >{{$t("Rim and Tyre")}}</ion-label
            ></list-item
          >
        </SellCarPostManager>

        <SellCarPostManager attr="location" v-slot="{ getValue }">
          <list-item
            lines="full"
            :result="getValue"
            @go-detail="
              $router.push('/tabs/sell-car/car-additional/select/' + 'location')
            "
            ><ion-label class="text-sm font-semibold"
              >{{$t("Location")}}*</ion-label
            ></list-item
          >
        </SellCarPostManager>

        <SellCarPostManager attr="services" v-slot="{ getValue }">
          <list-item
            :result="getValue"
            lines="full"
            @go-detail="
              $router.push('/tabs/sell-car/car-additional/select/' + 'services')
            "
          >
            <ion-label class="text-sm font-semibold"
              >{{$t("Services")}}</ion-label
            ></list-item
          >
        </SellCarPostManager>

        <SellCarPostManager attr="Seller type" v-slot="{ getValue }">
          <list-item
            :result="getValue"
            lines="full"
            @go-detail="
              $router.push(
                '/tabs/sell-car/car-additional/select/' + 'Seller type'
              )
            "
          >
            <ion-label class="text-sm font-semibold"
              >{{$t("Seller Type")}}</ion-label
            ></list-item
          >
        </SellCarPostManager>

        <ion-title class="text-base font-semibold mt-2"> {{$t("Comments")}} </ion-title>

        <SellCarPostManager
          :attr="'Comments'"
          v-slot="{ value, setValueHandler }"
        >
          <ion-textarea
            autoGrow="true"
            class="text-sm border rounded-large bg-gray-100 text-gray-500 min-h-24"
            placeholder="Add your own comments here"
            wrap="hard"
            :v-model="value"
            @change="setValueHandler"
          ></ion-textarea>
        </SellCarPostManager>

        <!-- <ion-title class="font-semibold"> Options </ion-title> -->
        <hr class="mx-auto my-2" />

        <ion-title class="text-base font-semibold"> {{$t("Factory Options")}} </ion-title>

        <SellCarPostManager
          :attr="'Factory options'"
          v-slot="{ value, setValueHandler }"
        >
          <ion-textarea
            autoGrow="true"
            class="text-sm border rounded-large bg-gray-100 text-gray-500 min-h-24"
            placeholder="Please fill in the details of your cars"
            wrap="hard"
            :v-model="value"
            @change="setValueHandler"
          ></ion-textarea>
        </SellCarPostManager>

        <hr class="mx-auto my-2" />

        <ion-title class="text-base font-semibold">
          {{$t("Aftermarket Options")}}
        </ion-title>

        <SellCarPostManager
          :attr="'Aftermarket options'"
          v-slot="{ value, setValueHandler }"
        >
          <ion-textarea
            autoGrow="true"
            class="text-sm border rounded-large bg-gray-100 text-gray-500 min-h-24"
            placeholder="Please fill in the details of your cars"
            wrap="hard"
            :v-model="value"
            @change="setValueHandler"
          ></ion-textarea>
        </SellCarPostManager>

        <hr class="mx-auto my-2" />

        <ion-title class="text-base font-semibold my-2">
          Contact detail
        </ion-title>

        <div class="flex flex-col gap-2">
          <div class="grid grid-cols-2 gap-2">
            <SellCarContactManager
              :attr="'firstname'"
              v-slot="{ value, setValueHandler }"
            >
              <ion-input
                class="rounded-large bg-gray-100 text-gray-500"
                placeholder="Firstname*"
                :v-model="value"
                @change="setValueHandler"
              >
              </ion-input>
            </SellCarContactManager>
            <SellCarContactManager
              :attr="'lastname'"
              v-slot="{ value, setValueHandler }"
            >
              <ion-input
                class="rounded-large bg-gray-100 text-gray-500"
                placeholder="Lastname*"
                :v-model="value"
                @change="setValueHandler"
              >
              </ion-input>
            </SellCarContactManager>
          </div>
          <SellCarContactManager
            :attr="'email'"
            :validation="valEmail"
            v-slot="{ value, setValueHandler, error }"
          >
            <ion-input
              class="rounded-large bg-gray-100 text-gray-500 text-sm font-semibold"
              placeholder="Email*"
              type="email"
              :v-model="value"
              @ionInput="setValueHandler"
            >
            </ion-input>
            <ion-note 
            v-if="error" 
            color="danger" 
            class="text-xs col-span-3 text-right px-1"
          >Enter a valid email</ion-note>
          </SellCarContactManager>
          <SellCarContactManager
            :attr="'phoneNumber'"
            v-slot="{ value, setValueHandler }"
          >
            <ion-input
              class="rounded-large bg-gray-100 text-gray-500"
              placeholder="Primary phone number*"
              :v-model="value"
              @change="setValueHandler"
            >
            </ion-input>
          </SellCarContactManager>
          <SellCarContactManager
            :attr="'secPhoneNUmber'"
            v-slot="{ value, setValueHandler }"
          >
            <ion-input
              class="rounded-large bg-gray-100 text-gray-500"
              placeholder="Secondary phone number(Optional)"
              :v-model="value"
              @change="setValueHandler"
            >
            </ion-input>
          </SellCarContactManager>
        </div>
      </div>
    </ion-list>

    <BaseBtn :title="'NEXT'" @proceed="process" :disabled="disabled" />
  </BaseBackLayout>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";

import BaseBackLayout from "@/components/Common/BaseBackLayout.vue";
import BaseBtn from "@/components/SellCar/BaseBtn.vue";

import { IonTextarea } from "@ionic/vue";

import useSellCarFilter from "@/hooks/sell/useSellCarFilter";
import useSellCarContact from "@/hooks/sell/useSellCarContact";

import ListItem from "@/components/Common/ListItem.vue";

import SellCarPostManager from "@/functional/SellCarPostManager.vue";
import SellCarContactManager from "@/functional/SellCarContactManager.vue";

import router from "@/router";
import useSellCarPost from "@/hooks/sell/useSellCarPost";
import { showLoading, closeLoading } from "@/hooks/useLoading";
import { maxValue, minValue, required, email } from "@vuelidate/validators";

export default defineComponent({
  components: {
    BaseBackLayout,
    IonTextarea,
    BaseBtn,
    ListItem,
    SellCarPostManager,
    SellCarContactManager,
  },

  setup() {
    const { isNullCarSellFilters } = useSellCarFilter();

    const { createPost, isNullCarSellPostByCate, returnFormInvalidity } = useSellCarPost();
    const { isNullCarSellContactByCate, returnContactInvalidity } = useSellCarContact();
    const registerTemp = ref(true);

    let disabled = computed(() => {
      return (
        (isNullCarSellPostByCate("Expired Date") && registerTemp.value) ||
        isNullCarSellPostByCate("location") ||
        isNullCarSellPostByCate("transmission") ||
        isNullCarSellPostByCate("built_year") ||
        isNullCarSellPostByCate("Listing Price") ||
        isNullCarSellPostByCate("Exterior Colour") ||
        isNullCarSellContactByCate("lastname") ||
        isNullCarSellContactByCate("firstname") ||
        isNullCarSellContactByCate("email") ||
        isNullCarSellContactByCate("phoneNumber") ||
        returnFormInvalidity() ||
        returnContactInvalidity()
      );
    });

    let process = async () => {
      try {
        showLoading();
        const { success, message } = await createPost();

        if (success) {
          router.push("/tabs/sell-car/ad-select");
        }
      } catch (err) {
        console.log(err);
      }
      closeLoading();
    };

    const valBuiltYear = computed(() => ({
      value: {
        required,
        minValue: minValue(1900),
        maxValue: maxValue(2100)
      },
    }));

    const valExpiredDate = computed(() => {
      return {
      inputMonth: {
        minValue: minValue(0),
        maxValue: maxValue(12)
      },
      inputYear: {
        minValue: minValue(1990),
        maxValue: maxValue(2100)
      }
      }
    });

    const valEmail = computed(() => ({
      value: {
        required,
        email
      }
    }));

    return {
      process,
      disabled,
      registerTemp,
      valBuiltYear,
      valExpiredDate,
      valEmail
    };
  },
});
</script>

<style scoped>
ion-button::part(native) {
  --background: #f3f3f3;
  color: #cecece;

  border: 0.5px solid rgba(0, 0, 0, 0.04);
  border-radius: 20px;
}

ion-button.active::part(native) {
  --background: var(--ion-color-primary);
  color: #fff;
}

</style>
