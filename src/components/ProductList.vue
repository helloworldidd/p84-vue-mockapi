<script setup>
import { onMounted } from "vue";
import { useProductStore } from "@/stores/productStore";

const productStore = useProductStore();

onMounted(() => {
  productStore.fetchProducts();
});
</script>

<template>
  <div>
    <h2>Total de productos: {{ productStore.totalProducts }}</h2>
    <div class="row">
      <div
        v-for="product in productStore.products"
        class="p-2 col-4"
        :key="product.id"
      >
        <div class="card p-2 bg-warning">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p class="text-danger fw-bold">{{ product.price }}</p>
          <button
          class="btn btn-danger m-1"
          @click="productStore.deleteProduct(product.id)">
            Borrar
          </button>
          <router-link
            class="btn btn-secondary m-1"
            :to="{
              name:'product-edit',
              params: {
                id: product.id
              },
            }"
          >
            Actualizar
          </router-link>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
