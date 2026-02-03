<template>
<div class=" px-6 py-12 lg:px-8 bg-gray-900">
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <div class="space-y-6">
      <div>
        <label for="email" class="block text-sm/6 font-medium text-gray-100">Email address</label>
        <div class="mt-2">
          <input type="email" v-model="loginCredentials.email" required autocomplete="email" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm/6 font-medium text-gray-100">Password</label>
        </div>
        <div class="mt-2">
          <input id="password" type="password" v-model="loginCredentials.password" name="password" required autocomplete="current-password" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <button type="submit" @click="login" class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign in</button>
      </div>
    </div>

    <p class="mt-10 text-center text-sm/6 text-gray-400">
      Not a member?
      <NuxtLink to="/register" class="font-semibold text-indigo-400 hover:text-indigo-300">Register</NuxtLink>
    </p>
  </div>
</div>
</template>
<script setup lang="ts">

const { login, isLoggedIn, loginCredentials } = useLogin()
</script>

<style scoped>
.login-wrapper {
  padding: 20px;
}

.error-message {
  color: red;
  margin-top: 10px;
  font-size: 14px;
}
</style>