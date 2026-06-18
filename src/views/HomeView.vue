<script setup>
import ProductForm from '../components/ProductForm.vue';
import ProductList from '../components/ProductList.vue';



</script>

<template>
  <div>
  <h1 class="text-center">CRUD</h1>
  <ul> 
    <li><b>c</b>rear,</li>
    <li><b>r</b>eal,</li>
    <li><b>u</b>pdate,</li>
    <li><b>d</b>elete</li>
  </ul>
    
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