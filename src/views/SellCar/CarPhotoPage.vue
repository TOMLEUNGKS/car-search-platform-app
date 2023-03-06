<template>
  <BaseBackLayout>
    <ion-list class="h-full">
      <ion-list-header>
        <ion-title size="large" class="pl-2 font-bold mt-4">
          {{$t("Car photos")}}
        </ion-title>
      </ion-list-header>
      <ion-label class="text-sm text-gray-400 ml-6">
        {{$t("upload photos of your car")}}
      </ion-label>
      <div
        class="grid grid-cols-2 grid-rows-3 gap-y-4 gap-x-2 justify-items-center h-2/3 mt-4 mx-2"
      >
        <ion-button @click="takePhoto" color="light" class="w-full h-full m-0">
          <input
            v-if="!isMobile"
            type="file"
            class="absolute w-full h-full opacity-0"
            accept="image/*"
            @change="filesChange($event.target.files)"
          />
          <font-awesome-icon
            class="text-primary text-2xl"
            :icon="['fas', 'fa-plus']"
          />
        </ion-button>

        <div
          v-for="idx in Array(5).keys()"
          :key="idx"
          class="border border-gray-300 rounded-large w-full h-full relative"
        >
          <img
            v-if="idx < imagesURL.value.length"
            :src="imagesURL.value[idx]"
            class="max-w-full max-h-full rounded-large -translate-x-1/2 absolute left-1/2"
          />
          <div
            v-if="idx < imagesURL.value.length"
            class="absolute top-0 right-0 pr-2 rounded-full font-semibold bg-red"
            @click="cancelPhoto(idx)"
          >
            <font-awesome-icon
              class="text-sm px- rounded-full cursor-pointer text-red-500"
              :icon="['fas', 'xmark']"
            />
          </div>
        </div>
      </div>
      <BaseBtn
        :title="'NEXT'"
        @proceed="$router.push('/tabs/sell-car/car-additional')"
        :disabled="disabled"
      />
    </ion-list>
  </BaseBackLayout>
</template>

<script lang="ts">
// @proceed="$router.push('/tabs/sell-car/car-additional')"
import { defineComponent, computed, ref, Ref, reactive } from "vue";

import BaseBackLayout from "@/components/Common/BaseBackLayout.vue";
import BaseBtn from "@/components/SellCar/BaseBtn.vue";

import useSellCarPost from "@/hooks/sell/useSellCarPost";

import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { Filesystem } from "@capacitor/filesystem";

import { isPlatform } from "@ionic/vue";
import moment from "moment";

export default defineComponent({
  components: {
    BaseBackLayout,
    BaseBtn,
  },

  setup() {
    const { setCarSellPostValue } = useSellCarPost();
    const uploadedFiles: { value: File[] } = reactive({ value: [] });
    const imagesURL: { value: string[] } = reactive({ value: [] });

    const isMobile = isPlatform("mobile");

    const filesChange = (fileList) => {
      const file = fileList[0];
      const url = URL.createObjectURL(file);

      uploadedFiles.value.push(file);
      imagesURL.value.push(url);
      setCarSellPostValue("imgs", uploadedFiles.value);
    };

    const takePhoto = async () => {
      if (isMobile) {
        const image = await Camera.getPhoto({
          quality: 90,
          resultType: CameraResultType.Uri,
        });

        // image.webPath will contain a path that can be set as an image src.
        // You can access the original file using image.path, which can be
        // passed to the Filesystem API to read the raw data of the image,
        // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
        console.log(image);
        const imageUrl = image.webPath;
        const imagePath = image.path as string;
        const contents = await Filesystem.readFile({
          path: imagePath,
        });

        const blob = await b64toBlob(contents.data);

        const fileName = imagePath.split("/")[imagePath.split("/").length - 1];

        const file = new File([blob], fileName, {
          lastModified: moment().unix(),
          type: image.format,
        });

        // Can be set to the src of an image now

        if (imageUrl) {
          uploadedFiles.value.push(file);
          imagesURL.value.push(imageUrl);
          setCarSellPostValue("imgs", uploadedFiles.value);
        }
      }
    };

    const disabled = computed(() => {
      return imagesURL.value.length == 0;
    });

    const cancelPhoto = (idx) => {
      uploadedFiles.value.splice(idx, 1);
      imagesURL.value.splice(idx, 1);
      setCarSellPostValue("imgs", uploadedFiles.value);
    };

    //save the image
    //send the image as form data to backend

    return {
      uploadedFiles,
      imagesURL,
      filesChange,
      takePhoto,
      isMobile,
      disabled,
      cancelPhoto,
    };
  },
});

const b64toBlob = (base64, type = "application/octet-stream") =>
  fetch(`data:${type};base64,${base64}`).then((res) => res.blob());
</script>

<style scoped>
ion-button::part(native) {
  box-shadow: none;
  border-radius: 12px;
}
</style>
