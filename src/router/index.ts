import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";
import useAuthuser from "@/hooks/user/useAuthUser";
const { isAuthed, returnUrl } = useAuthuser();

import useSellCarFilter from "@/hooks/sell/useSellCarFilter";

const { resetCarSellFiltersValue } = useSellCarFilter();

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/tabs/search-car",
  },
  {
    path: "/sign-in",
    component: () => import("@/views/User/LoginPage.vue"),
  },
  {
    path: "/register",
    component: () => import("@/views/User/RegisterPage.vue"),
  },
  {
    path: "/edit",
    component: () => import("@/views/User/EditPage.vue"),
  },
  {
    path: "/language",
    component: () => import("@/views/LanguagePage.vue"),
  },
  {
    path: "/chats/",
    component: () => import("@/views/Chat/ChatPage.vue"),
    beforeEnter: (to, from) => {
      if (!isAuthed.value) {
        returnUrl.value = to.fullPath;
        return "/login";
      }
    },
  },
  {
    path: "/message/:dealerID",
    component: () => import("@/views/Chat/MessagePage.vue"),
    beforeEnter: (to, from) => {
      if (!isAuthed.value) {
        returnUrl.value = to.fullPath;
        return "/login";
      }
    },
  },
  {
    path: "/login",
    component: () => import("@/views/loginPage.vue"),
  },
  {
    path: "/compare-car",
    component: () => import("@/views/CarPost/CarPostComparePage.vue"),
  },
  {
    path: "/compare-result",
    component: () => import("@/views/Compare/CompareSearchCarResultPage.vue"),
  },
  {
    path: "/compare-display",
    component: () => import("@/views/Compare/CompareDisplayPage.vue"),
  },
  {
    path: "/search-car/filter",
    component: () => import("@/views/SearchCar/SearchFilter.vue"),
  },

  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/search-car",
      },

      {
        path: "search-car",
        component: () => import("@/views/SearchCar/SearchCar.vue"),
        // component: () => import("@/views/SearchCar/SearchCarPage.vue"),
        // children: [
        //   {
        //     path: "",
        //     redirect: "/tabs/search-car/main",
        //   },
        // ],
      },
      {
        path: "search-car/main",
        component: () => import("@/views/SearchCar/SearchCar.vue"),
      },
      {
        path: "search-car/filter",
        component: () => import("@/views/SearchCar/SearchFilter.vue"),
      },
      {
        path: "search-car/result",
        component: () => import("@/views/SearchCar/SearchCarResultPage.vue"),
      },
      {
        path: "search-car/car-post/:post_id",
        component: () => import("@/views/CarPost/CarPostPage.vue"),
        props: true,
      },
      {
        path: "sell-car",
        component: () => import("@/views/SellCar/SellCarPage.vue"),
      },
      {
        path: "sell-car/create-listing",
        component: () => import("@/views/SellCar/CreateListingPage.vue"),

        beforeEnter: (to, from) => {
          if (!isAuthed.value) {
            returnUrl.value = to.fullPath;
            return "/login";
          }
          if (from.path == "/tabs/sell-car") {
            console.log("reset car sell filter ");
            resetCarSellFiltersValue();
          }
        },
      },
      {
        path: "sell-car/car-details",
        component: () => import("@/views/SellCar/CarDetailsPage.vue"),
      },
      {
        path: "sell-car/car-details/:attr",
        component: () => import("@/views/SellCar/CarDetailsSelectPage.vue"),
      },
      {
        path: "sell-car/car-select",
        component: () => import("@/views/SellCar/CarSelectPage.vue"),
      },
      {
        path: "sell-car/car-photo",
        component: () => import("@/views/SellCar/CarPhotoPage.vue"),
      },
      {
        path: "sell-car/car-additional",
        component: () => import("@/views/SellCar/CarAdditionalPage.vue"),
      },
      {
        path: "sell-car/car-additional/select/:attr",
        component: () => import("@/views/SellCar/CarAdditionalSelectPage.vue"),
      },
      {
        path: "sell-car/car-additional/scroll/:attr",
        component: () => import("@/views/SellCar/CarAdditionalScrollPage.vue"),
      },
      {
        path: "sell-car/car-additional/rimtyre",
        component: () => import("@/views/SellCar/CarAdditionalRimTyre.vue"),
      },
      {
        path: "sell-car/ad-select",
        component: () => import("@/views/SellCar/AdPackagePage.vue"),
      },
      {
        path: "sell-car/payment-success",
        component: () => import("@/views/SellCar/PaymentSuccessPage.vue"),
      },
      {
        path: "sell-car/manage",
        component: () => import("@/views/SellCar/manage/ManageMainPage.vue"),
        beforeEnter: (to, from) => {
          if (!isAuthed.value) {
            returnUrl.value = to.fullPath;
            return "/login";
          }
        },
      },
      {
        path: "sell-car/manage/:post_id",
        component: () => import("@/views/SellCar/manage/ManageCarPostPage.vue"),
        props: true,
      },

      {
        path: "saved",
        component: () => import("@/views/SavedPage.vue"),
      },

      {
        path: "blogs",
        component: () => import("@/views/Blog/BlogsPage.vue"),
      },
      {
        path: "blog-content",
        component: () => import("@/views/Blog/BlogContent.vue"),
      },

      {
        path: "account",
        component: () => import("@/views/AccountPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
