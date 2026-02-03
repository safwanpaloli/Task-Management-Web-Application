<template>
    <div class="logout-wrapper">
        <h1>Logout Page</h1>
    </div>
</template>
<script setup lang="ts">

const {
    logout
} = useLogin()

await logout()
</script>
