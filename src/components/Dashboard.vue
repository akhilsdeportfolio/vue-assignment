<script setup lang="ts">
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import userStore from "../stores/userData";
import { useRouter } from "vue-router";
import {  onBeforeMount, reactive } from "vue";

const userData = userStore();
let requiredData = reactive({});

onBeforeMount(() => {
  if (!userData.getUserLoggedIn) router.push({ path: "/", replace: true });
  const { uid, email, displayName, metadata } = userData.getUserInfo;
  requiredData = reactive({ uid, email, displayName, metadata });
});

const router = useRouter();
const handleSignOut = async function () {
  userData.addUserData({});
  userData.setUserLoggedIn(false);
  router.push({ path: "/", replace: true });
  signOut(auth);
};
</script>

<template>
  <v-app-bar color="primary" density="compact">
    <v-app-bar-title>Dashboard</v-app-bar-title>
  </v-app-bar>
  <v-main>
    <div
      className="flex flex-col items-center justify-between text-center pt-16"
    >
      <div className="flex border-2 border-red">
        <p>User Id : {{ requiredData.uid }}</p>
        <p>Email : {{ requiredData.email }}</p>
        <p>Creation Time : {{ requiredData.metadata.creationTime }}</p>
        <p>Last Sign In Time : {{ requiredData.metadata.lastSignInTime }}</p>
      </div>

      <div className="flex border-2 border-green mt-4">
        <v-btn variant="flat" color="red" @click="handleSignOut"
          >Sign Out</v-btn
        >
      </div>
    </div>
  </v-main>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
