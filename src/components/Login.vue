<script setup lang="ts">
import { ref } from "vue";
import { auth } from "../firebase";
import { useRouter } from "vue-router";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import userStore from '../stores/userData';


const email = ref("");
const router = useRouter();
const password = ref("");
let snackbar = ref(false);
const isLoading = ref(false);
const errorMessage = ref("");
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const emailRules = ref([
  (value) => {
    if (regex.test(value)) return true;

    return "Enter a valid email address";
  },
]);
const passwordRules = ref([
  (value) => {
    if (value) return true;
    return "Enter a valid password";
  },
]);

async function handleSubmit() {
  if (regex.test(email.value)) {
    isLoading.value = true;
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      if (user) {

        userStore().addUserData(user.user);
        userStore().setUserLoggedIn(true);
        router.push({ path: "/dashboard", replace: true });
      }
    } catch (e) {
      isLoading.value = false;
      snackbar.value = true;
      const { code } = e;
      errorMessage.value = code;
    }
  }
}
</script>

<template>
  <v-main>
    <v-app-bar title="Login" color="blue" :elevation="2"> </v-app-bar>
    <div
      class="flex flex-row min-h-full flex flex-row justify-between"
      :style="{ display: 'flex' }"
    >
      <div
        class="bg-white background"
        :style="{ minHeight: '50vh', minWidth: '65%' }"
      ></div>
      <div
        class="bg-white border-2 border-red"
        :style="{ minWidth: '35%', minHeight: '95vh' }"
      >
        <v-card
          :style="{ padding: '20px', minHeight: '95vh' }"
          title="Welcome to My portal"
          text="create your account with email and password"
        >
          <div
            class="px-4"
            :style="{ display: 'flex', flexDirection: 'column' }"
          >
            <v-form
              @submit.prevent="handleSubmit"
              validate-on="input"
              fast-fail
            >
              <v-text-field
                :rules="emailRules"
                variant="filled"
                label="Email Address"
                placeholder="Enter email address"
                v-model="email"
              ></v-text-field>
              <v-text-field
                :rules="passwordRules"
                variant="filled"
                label="Password"
                placeholder="Enter password"
                v-model="password"
              ></v-text-field>
              <v-btn
                :loading="isLoading"
                type="submit"
                variant="flat"
                size="large"
                color="blue"
                block
                class="px-4"
                >Login</v-btn
              >

              <p class="text-xs font-bold mt-4">
                Dont have account ? 
                <router-link to="/signup">Signup</router-link>
              </p>
            </v-form>
          </div>
        </v-card>
        <v-snackbar v-model="snackbar">
          <div class="text-subtitle-1 pb-2">
            {{ errorMessage }}
          </div>
          <template v-slot:actions>
            <v-btn color="red" variant="text" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </div>
  </v-main>
</template>

<style>
.background {
  background-image: url(https://img.freepik.com/free-vector/composed-particles-swirling-abstract-graphics_456031-137.jpg?w=1800&t=st=1693466766~exp=1693467366~hmac=13d2038cb110abd60a9659dca8761d8215a6102f940cb2efc51bc5ae2c0b3196);
}
</style>
