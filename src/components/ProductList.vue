<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '@/stores/productStore'


const productStore = useProductStore()


onMounted(() => {
    productStore.fetchProducts()
})

</script>

<template>
  <div>
    <h2>Total de productos: {{ productStore.totalProducts }}</h2>
    <div class="row">

      <div v-for="product in productStore.products"
        class="card p-2 bg-warning col-4"
        :key="product.id"
        >
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p class="text-danger fw-bold">{{ product.price }}</p>
        <button @click="productStore.deleteProduct(product.id)">
          Borrar producto
        </button>
     </div>
    
  </div>
  </div>
</template>

<style scoped>

</style>