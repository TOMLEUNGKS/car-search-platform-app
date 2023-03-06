import { defineStore } from "pinia";
import useBaseFetch from "@/hooks/useBaseFetch";
import { PostDisplay } from "@/model/Posts";
import { plainToInstance } from "class-transformer";
import { ADPACKAGE } from "@/model/SellCar";

const { getCarSellPostValue } = useSellCarPost();

interface AdPackageState {
  selectPackage: ADPACKAGE | null;
  price: string | null;
  amount: number | null;
}

export const useAdPackageStore = defineStore("adPackageStore", {
  state: (): AdPackageState => ({
    selectPackage: null,
    price: null,
    amount: null,
  }),

  actions: {
    async fetchProducts() {
      const response = await useBaseFetch()("/products");
      const { success, data } = response;

      if (success) {
        return data;
      }
    },

    async confirmPayment(session_id) {
      const response = await useBaseFetch()("/confirm-payment/" + session_id, {
        method: "POST",
      });
      const { success } = response;
      return success;
    },

    async proceedPaymemnt() {
      const post_id = getCarSellPostValue("post_id");

      const response = await useBaseFetch()(`/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lineItems: [
            {
              price: this.price,
              quantity: 1,
            },
          ],
          success_url:
            "http://archiiii.github.io/tabs/sell-car/payment-success",
          cancel_url: "http://archiiii.github.io/tabs/sell-car/ad-select",
          amount: this.amount,
          post_id: post_id,
        }),
      });
      const { url, session_id } = response;
      console.log(url);
      window.location.replace(url);
    },
  },
});
