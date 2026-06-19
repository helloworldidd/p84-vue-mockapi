<script setup>
import ProductForm from '../components/ProductForm.vue';
import ProductList from '../components/ProductList.vue';



</script>

<template>
  <div>
  <h1 class="text-center">CRUD</h1>
  <p class="text-center">
    <i class="bi bi-pencil-square"></i> create,
    <i class="bi bi-eye"></i> read,
    <i class="bi bi-arrow-clockwise"></i> update,
    <i class="bi bi-trash2"></i>delete
  </p>

    
<ProductForm />
<hr>
<ProductList />


  </div>
</template>

<style scoped>

b{
  font-size: 120%;
}
</style>