<script setup>

import {ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProductStore } from "@/stores/productStore";

const route = useRoute();
const router = useRouter();
const productStore = useProductStore();

const name = ref('');
const description = ref('');
const price = ref('');

onMounted( async() => {

  await productStore.fetchProducts();

  const product = productStore.products.find(
    item => item.id === route.params.id
  );

  name.value = product.name;
  description.value = product.description;
  price.value = product.price;
});

const updateProduct = async () => {
  const id = route.params.id;
  
  const productData = {
    name: name.value,
    description: description.value,
    price: Number(price.value)
  };

  await productStore.updateProduct(id, productData);

  router.push('/');



  

}



</script>

<template>

  <div class="container">
    <router-link class="btn btn-sm btn-secondary m-2" to="/">
      ⬅️Volver
    </router-link>
    <h1> Edit</h1>

    <form @submit.prevent="updateProduct">
      <input v-model="name" class="form-control mb-2" type="text">
      <input v-model="description" class="form-control mb-2" type="text">
      <input v-model="price" class="form-control mb-2" type="number">
      <button class="btn btn-primary w-100" type="submit">Actualizar</button>
    </form>
    
  </div>
</template>

<style scoped>

</style>