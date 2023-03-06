import { defineStore } from "pinia";
import useBaseFetch from "@/hooks/useBaseFetch";
import { PostDisplay } from "@/model/Posts";
import { plainToInstance } from "class-transformer";
interface ManagePostState {
  managePostList: PostDisplay[];
}

export const useManagePostStore = defineStore("managePostStore", {
  state: (): ManagePostState => ({
    managePostList: [],
  }),

  getters: {
    getManagePost: (state) => (post_id) => {
      const carPostresult = state.managePostList.filter(
        (obj) => obj.post_id == post_id
      )[0];

      console.log(carPostresult);
      return carPostresult;
    },
  },

  actions: {
    async fetchManagePost(dealerID) {
      try {
        const response = await useBaseFetch()(
          `/api/car-posts/manage/${dealerID}`,
          {
            method: "GET",
          }
        );
        const { success, data, message } = response;

        if (success) {
          const postDisplay = plainToInstance(PostDisplay, <any[]>data);

          this.managePostList = postDisplay;

          return data;
        }
        return message;
      } catch (error) {
        // alert(error)
        console.log(error);
      }
    },
  },
});
