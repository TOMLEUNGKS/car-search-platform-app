<template>
  <FiltersLoader #default="{ loadFilters }">
    <ion-card
      button
      class="flex"
      @click="async () => await loadFilters(filter_key)"
    >
      <div>
        <ion-card-header class="pb-1">
          <ion-card-subtitle class="text-base font-bold">{{
            filter_key
          }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <div class="flex">
            <div class="flex flex-col flex-1 gap-1">
              <div class="flex items-center">
                <font-awesome-icon
                  class="mr-2 h-5"
                  icon="fa-regular fa-circle"
                />
                <!-- <font-awesome-icon icon="fa-regular fa-circle-check" /> -->
                <span class="text-base">Email alerts</span>
              </div>
              <div class="flex items-center">
                <font-awesome-icon
                  class="mr-2 h-5"
                  icon="fa-regular fa-circle"
                />
                <!-- <font-awesome-icon icon="fa-regular fa-circle-check" /> -->
                <span class="text-base">App notifications</span>
              </div>
            </div>

            <div>
              <font-awesome-icon
                @click.stop="isOpen = true"
                :id="'delete-filter-modal-' + filter_key"
                class="h-5 cursor-pointer"
                icon="fa-solid fa-xmark"
              />
            </div>
          </div>
        </ion-card-content>
      </div>
    </ion-card>
  </FiltersLoader>
  <DeleteFilterModal
    :filter_key="filter_key"
    :is-open="isOpen"
    @willDismiss="isOpen = false"
  />
</template>

<script lang="ts">
export default defineComponent({
  props: ["filter_key"],
  async setup(props) {
    const isOpen = ref(false);
    const filterStore = useFilterStore();
    const filter = await filterStore.fetchFilter(props.filter_key);

    return { filter, isOpen };
  },
});
</script>
