<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
            <h1 class="text-2xl font-bold text-center mb-6">Register</h1>
            
            <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name:</label>
                <input
                    id="name"
                    v-model="registerForm.name"
                    type="text"
                    placeholder="Enter your name"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email:</label>
                <input
                    id="email"
                    v-model="registerForm.email"
                    type="email"
                    placeholder="Enter your email"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password:</label>
                <input
                    id="password"
                    v-model="registerForm.password"
                    type="password"
                    placeholder="Enter your password"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            <div class="mb-6">
                <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">Confirm Password:</label>
                <input
                    id="confirmPassword"
                    v-model="registerForm.confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            <button @click="register" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition">
                Register
            </button>
            <div class="actions">
                <NuxtLink to="/" class="text-sm text-blue-500 hover:underline mt-4 block text-center">Already have an account? Sign In</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const {
    register,
    registerForm
} = useRegister()
</script>
