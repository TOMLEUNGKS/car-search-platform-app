<template>
  <div class="formContainer flex items-center justify-center">
    <div class="formWrapper flex flex-col items-center p-6 gap-4">
      <span class="font-bold text-primary">Register</span>
      <form class="flex flex-col gap-3" @submit.prevent="handleSubmit">
        <FormInput
          type="text"
          placeholder="display name"
          v-model="formState.displayName"
        />
        <ion-note color="danger" v-if="$v.displayName.$error">{{
          $v.displayName.$errors[0].$message
        }}</ion-note>

        <FormInput type="text" placeholder="email" v-model="formState.email" />
        <ion-note color="danger" v-if="$v.email.$error">{{
          $v.email.$errors[0].$message
        }}</ion-note>

        <FormInput
          type="password"
          placeholder="password"
          v-model="formState.password.password"
        />

        <ion-note color="danger" v-if="$v.password.password.$error">{{
          $v.password.password.$errors[0].$message
        }}</ion-note>

        <FormInput
          type="password"
          placeholder="confirm password"
          v-model="formState.password.confirm"
        />
        <ion-note color="danger" v-if="$v.password.confirm.$error">{{
          $v.password.confirm.$errors[0].$message
        }}</ion-note>

        <ion-button type="submit">Sign up</ion-button>
      </form>
      <!-- <span class="text-red-500" v-if="errorMsg">{{ errorMsg }}</span> -->
      <p>
        You do have an account?
        <router-link to="/sign-in" replace>
          <span class="underline text-blue-800"> Login </span>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref } from "vue";
import useValidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";
import { alertController } from "@ionic/vue";

//composables
const router = useRouter();
const { handleRegister } = useAuthUser();

// data
let errorMsg: Ref<null | string> = ref(null);

const formState = reactive({
  displayName: "",
  email: "",
  password: {
    password: "",
    confirm: "",
  },
});

const rules = computed(() => {
  return {
    displayName: {
      required: helpers.withMessage("display name is required", required),
      minLength: minLength(6),
    },
    email: {
      required: helpers.withMessage("email is required", required),
      email: helpers.withMessage("invalid email", email),
    },
    password: {
      password: {
        required: helpers.withMessage("password is required", required),
        minLength: minLength(8),
      },
      confirm: {
        required: helpers.withMessage("confirm password is required", required),
        sameAs: sameAs(formState.password.password),
      },
    },
  };
});

const $v = useValidate(rules, formState);

// methods
const handleSubmit = async (e) => {
  $v.value.$validate();
  if ($v.value.$error) {
    return;
  }

  await showLoading();

  const displayName = formState.displayName;
  const email = formState.email;
  const password = formState.password.password;

  try {
    await handleRegister(displayName, email, password);
    await closeLoading();
    router.replace("/");
  } catch (error) {
    await closeLoading();
    let msg = "Could not sign you up. Please try again.";
    if (e.code == "auth/email-already-in-use") {
      msg = "Email already in use";
    }

    presentAlert(msg);
    // const errorCode = error.code;
    // const errorMessage = error.message;
  }
};

const presentAlert = async (msg) => {
  const alert = await alertController.create({
    header: "Alert",
    message: msg,
    buttons: ["OK"],
  });

  await alert.present();
};
</script>
