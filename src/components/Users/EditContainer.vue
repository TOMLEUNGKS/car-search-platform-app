<template>
  <div class="formContainer flex items-center justify-center">
    <div class="formWrapper flex flex-col items-center p-6 gap-4">
      <form
        class="flex flex-col gap-3 items-center"
        @submit.prevent="handleSubmit"
      >
        <ion-thumbnail
          class="bg-gray-200 rounded-full mx-4 w-32 h-32 relative cursor-pointer flex"
        >
          <img
            :src="photoURL || 'assets/icon/account-user.svg'"
            class="p-0 rounded-full object-cover"
          />
          <ion-button
            @click="takePhoto"
            color="light"
            class="absolute w-full h-full opacity-0 top-0"
          >
            <input
              v-if="!isMobile"
              type="file"
              accept="image/*"
              @change="filesChange($event.target.files)"
            />
          </ion-button>
        </ion-thumbnail>

        <ion-input
          class="w-80 p-4 border-b border-b-primary"
          type="text"
          v-model="displayName"
          :placeholder="'display name'"
        />

        <ion-button class="w-full" type="submit">Save</ion-button>
      </form>

      <span class="text-red-500" v-if="errorMsg">{{ errorMsg }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, Ref } from "vue";
import useUser from "@/hooks/user/useUser";

import { updateUserProfile, uploadImg } from "@/services/firebase";
import { showLoading, closeLoading } from "@/hooks/useLoading";
import { isPlatform } from "@ionic/vue";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { Filesystem } from "@capacitor/filesystem";
import moment from "moment";

const { getUser, setUser } = useUser();
const router = useRouter();
const isMobile = isPlatform("mobile");

const displayName = ref(getUser.value.displayName);
const photoURL = ref(getUser.value.photoURL);
const fileHolder = ref(null);
const errorMsg = ref("");

const filesChange = (fileList) => {
  const file = fileList[0];
  const url = URL.createObjectURL(file);
  photoURL.value = url;
  fileHolder.value = file;
};
const takePhoto = async () => {
  const b64toBlob = (base64, type = "application/octet-stream") =>
    fetch(`data:${type};base64,${base64}`).then((res) => res.blob());

  if (isMobile) {
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Uri,
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
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
      photoURL.value = imageUrl;
      fileHolder.value = file;
    }
  }
};

const handleSubmit = async () => {
  await showLoading();

  // save new displayName in firebase users table
  // upload the new thumbnail to firebase storage and get the link then save in firebase users table
  let url = photoURL.value;
  if (fileHolder.value) {
    url = await uploadImg(fileHolder.value);
  }

  await updateUserProfile(getUser.value.uid, displayName.value, url);
  await setUser(getUser.value.uid);
  await closeLoading();
  router.replace("/tabs/account");
};
</script>
