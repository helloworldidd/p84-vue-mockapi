<script setup>

</script>

<template>

    <nav class=" bg-dark">
    <router-link class="btn btn-secondary m-2" to="/">Home</router-link>
    <router-link class="btn btn-secondary m-2" to="/about">About</router-link>
    </nav>


    <div class="container">
        <router-view />
    </div>

</template>

<style scoped>

</style>