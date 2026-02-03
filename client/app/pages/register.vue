<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
            <h1 class="text-2xl font-bold text-center mb-6">Register</h1>
            
            <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name:</label>
                <input
                    id="name"
                    v-model="form.name"
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
                    v-model="form.email"
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
                    v-model="form.password"
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
                    v-model="form.confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition">
                Register
            </button>
            <div class="actions">
                <NuxtLink to="/" class="text-sm text-blue-500 hover:underline mt-4 block text-center">Already have an account? Sign In</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            errors: []
        }
    },
    methods: {
        validateForm() {
            this.errors = [];
            
            if (!this.form.name.trim()) {
                this.errors.push('Name is required');
            }
            
            if (!this.form.email.trim()) {
                this.errors.push('Email is required');
            } else if (!this.isValidEmail(this.form.email)) {
                this.errors.push('Email is invalid');
            }
            
            if (!this.form.password) {
                this.errors.push('Password is required');
            } else if (this.form.password.length < 6) {
                this.errors.push('Password must be at least 6 characters');
            }
            
            if (this.form.password !== this.form.confirmPassword) {
                this.errors.push('Passwords do not match');
            }
            
            return this.errors.length === 0;
        },
        isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },
        handleRegister() {
            if (this.validateForm()) {
                console.log('Register:', this.form);
                // Add your API call here
            } else {
                alert(this.errors.join('\n'));
            }
        }
    }
}
</script>
