import { loadingController } from "@ionic/vue";

let loading;

export const showLoading = async () => {
  loading = await loadingController.create({});

  loading.present();
};
export const closeLoading = async () => {
  if (loading) {
    loading.dismiss();
  }
};
