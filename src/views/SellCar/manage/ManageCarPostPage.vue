<template>
  <base-back-layout>
    <template v-slot:primary>
      <ion-button>
        <font-awesome-icon
          v-if="isPlatform('ios')"
          slot="icon-only"
          class="w-12"
          :icon="['fas', 'fa-ellipsis']"
        />
        <font-awesome-icon
          v-else
          slot="icon-only"
          class="w-12"
          icon="fa-solid fa-ellipsis-vertical"
        />

        <ion-select
          @ion-change="selectEvent"
          interface="popover"
          class="hover-none"
          selectedText="null"
        >
          <IonSelectOption value="sold">Make as Sold</IonSelectOption>
          <IonSelectOption value="edit-listing">Edit Listing</IonSelectOption>
          <IonSelectOption value="delete">Delete</IonSelectOption>
        </ion-select>
      </ion-button>
    </template>

    <!-- <suspense>
      <template #default> -->
    <!-- <PostManager :post_id="post_id" v-slot="{ carPost }"> -->
    <PostIntroContainer :postDisplay="carPost" own />

    <div class="border-t mt-2 py-2">
      <PostDetailContainer :postDisplay="carPost" />
    </div>
    <!-- </PostManager> -->
    <!-- </template>
      <template #fallback>
        <ion-loading />
      </template> -->
    <!-- </suspense> -->

    <DeletePostModal :post_id="post_id" />
    <SoldPostModal :post_id="post_id" />
    <ion-button
      ref="deleteBtn"
      v-show="false"
      :id="'delete-post-modal-' + post_id"
    ></ion-button>
    <ion-button
      ref="soldBtn"
      v-show="false"
      :id="'sold-post-modal-' + post_id"
    ></ion-button>
  </base-back-layout>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from "vue";
import { IonButton, IonSelect, IonSelectOption, isPlatform } from "@ionic/vue";

import BaseBackLayout from "@/components/Common/BaseBackLayout.vue";

import useHomeSlide from "@/hooks/useHomeSlide";
import { priceFormatter } from "@/lib/utils";

import { useManagePostStore } from "@/stores";
import PostIntroContainer from "@/components/CarPosts/PostIntroContainer.vue";
import PostDetailContainer from "@/components/CarPosts/PostDetailContainer.vue";
import DeletePostModal from "@/components/SellCar/Manage/DeletePostModal.vue";
import SoldPostModal from "@/components/SellCar/Manage/SoldPostModal.vue";

export default defineComponent({
  name: "CarPostPage",
  components: {
    BaseBackLayout,
    IonSelect,
    IonSelectOption,
    PostIntroContainer,
    PostDetailContainer,
    DeletePostModal,
    SoldPostModal,
  },

  props: ["post_id"],

  setup(props) {
    const deleteBtn = ref<InstanceType<typeof IonButton>>();
    const soldBtn = ref();

    const managePostStore = useManagePostStore();
    const carPost = managePostStore.getManagePost(props.post_id);

    const { getActiveHomeSlideByType } = useHomeSlide();
    const targetSlide = getActiveHomeSlideByType("Car news");

    const selectEvent = ({ detail }) => {
      if (detail.value == "delete") {
        deleteBtn.value?.$el.click();
      }

      if (detail.value == "sold") {
        soldBtn.value?.$el.click();
      }
    };

    onMounted(() => {
      console.log(deleteBtn);
    });

    return {
      targetSlide,
      priceFormatter,
      isPlatform,
      carPost,
      deleteBtn,
      soldBtn,
      selectEvent,
    };
  },
});
</script>
<style scoped>
ion-select {
  position: absolute;
}
ion-select::part(text),
ion-select::part(icon) {
  display: none;
}
</style>
