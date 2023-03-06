<template>
  <ion-card class="mx-4 sm:shadow-none border-b sm:w-full md:w-80" button>
    <ion-img
      :alt="blogitem.img"
      :src="'/assets/imgs/' + blogitem.img"
    ></ion-img>
    <ion-card-header>
      <ion-card-title class="font-bold text-2xl">{{
        blogitem.title
      }}</ion-card-title>
      <ion-card-subtitle
        >by
        <span
          class="underline text-blue-800 hover:cursor-pointer"
          @click="test"
        >
          {{ blogitem.author }}
        </span>
        , {{ blogitem.datetime }}
      </ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <span v-if="!readMoreActivated"> {{ text.slice(0, 250) }} ... </span>
      <a
        class="underline font-semibold text-blue-900"
        v-if="!readMoreActivated"
        @click="activateReadMore"
        href="#"
      >
        Read More
      </a>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import {
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";

import IBlog from "@/model/Blogs";

export default defineComponent({
  name: "BlogCard",
  components: {
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
  },
  props: {
    blogitem: {
      type: Object as PropType<IBlog>,
      required: true,
    },
    readMoreActivated: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const test = () => {
      console.log("tetinf");
    };

    const text = `
     Trying to figure out which car you should purchase but are waiting for a
        sign from a higher power? Well, the answer could all be in the
        stars...signs. Without a doubt, astrology has made a comeback into the
        mainstream over the last few years. Whether its the dire world
        circumstances we currently find ourselves in, or just bringing people
        joy to believe in something, there's no shortage of places to get your
        witchy star sign fix... <br />
        <br />Trying to figure out which car you should purchase but are waiting
        for a sign from a higher power? Well, the answer could all be in the
        stars...signs. Without a doubt, astrology has made a comeback into the
        mainstream over the last few years. Whether it's the dire world
        circumstances we currently find ourselves in, or just bringing people
        joy to believe in something, there's no shortage of places to get your
        witchy star sign fix... <br /><br />are waiting for a sign from a higher
        power? Well, the answer could all be in the stars...signs. Without a
        doubt, astrology has made a comeback into the mainstream over the last
        few years. Whether it's the dire world circumstances we currently find
        ourselves in,.
        `;

    const activateReadMore = () => {
      props.readMoreActivated;
    };
    return { test, text };
  },
});
</script>
