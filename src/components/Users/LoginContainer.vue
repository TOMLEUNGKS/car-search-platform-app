<template>
  <div class="formContainer flex items-center justify-center">
    <div class="formWrapper flex flex-col items-center p-6 gap-4">
      <span class="font-bold text-primary">{{$t("Login")}}</span>
      <form class="flex flex-col gap-3" @submit.prevent="handleSubmit">
        <FormInput type="text" placeholder="email" v-model="formState.email" />
        <ion-note color="danger" v-if="$v.email.$error">{{
          $v.email.$errors[0].$message
        }}</ion-note>

        <FormInput
          type="password"
          placeholder="password"
          v-model="formState.password"
        />

        <ion-note color="danger" v-if="$v.password.$error">{{
          $v.password.$errors[0].$message
        }}</ion-note>

        <ion-button type="submit">{{$t("SIGN IN")}}</ion-button>
      </form>
      <span class="text-red-500" v-if="errorMsg">{{ errorMsg }}</span>

      <p>
        {{$t("You don't have an account?")}}
        <router-link to="/register" replace>
          <span class="underline text-blue-800"> {{$t("Register")}} </span>
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
const { handleSignIn } = useAuthUser();
const router = useRouter();

// data
let errorMsg: Ref<null | string> = ref(null);
const formState = reactive({
  email: "",
  password: "",
});

const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage("email is required", required),
      email: helpers.withMessage("invalid email", email),
    },

    password: {
      required: helpers.withMessage("password is required", required),
      minLength: minLength(8),
    },
  };
});

const $v = useValidate(rules, formState);

const handleSubmit = async (e) => {
  $v.value.$validate();
  if ($v.value.$error) {
    return;
  }
  await showLoading();

  const email = formState.email;
  const password = formState.password;

  try {
    await handleSignIn(email, password);
    await closeLoading();

    router.replace("/");
  } catch (error) {
    await closeLoading();

    if (error instanceof Error) {
      errorMsg.value = error.message;
    }

    errorMsg.value = String(error);
    // const errorCode = error.code;
    // const errorMessage = error.message;
  }
};
</script>
