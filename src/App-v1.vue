<script setup>

// llamar datod de api en puerto:3066

import { ref, onMounted } from 'vue'

const products = ref([])

onMounted(() => {
  fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(data => {
      products.value = data

    })
  
})

</script>

<template>
  <h1>CRUD</h1>
  <p> Crud de productos: crear, leer, actualizar y borrar</p>
<br />

  <p v-for="product in products" :key="product.id"> {{ product.name }} - {{ product.description }} - {{ product.price }} <br>
    
</p>
</template>

<style scoped></style>
