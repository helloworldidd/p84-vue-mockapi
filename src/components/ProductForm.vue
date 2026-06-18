<script setup>

import { ref, computed } from 'vue'
import { useProductStore } from '@/stores/productStore'

const productStore = useProductStore()

const name = ref('')
const description = ref('')
const price = ref('')

const msg = ref('')

const formEmpty = computed(() => {
  return !name.value || !description.value || !price.value
})

async function handleSubmit(){
  const newProduct = {
    name: name.value,
    description: description.value,
    price: Number(price.value)
  }

  await productStore.createProduct(newProduct)

  name.value = ''
  description.value = ''
  price.value = ''

  msg.value = 'Producto creado con exito'
  
  setTimeout(() => {
    msg.value = ''
  },2000)

}

</script>

<template>
  <div>
    <h1>ProductForm</h1>
    
    <form  @submit.prevent="handleSubmit">
      <h2>Crear Producto</h2>

      <input
        v-model="name"
        type="text"
        placeholder="Nombre"
      ><br>

      <input
        v-model="description"
        type="text"
        placeholder="Descripción"
      ><br>

      <input
        v-model="price"
        type="number"
        placeholder="Precio"
      ><br>

      <p v-if="msg">{{ msg }}</p>


      <button :disabled="formEmpty">Guardar</button>
    </form>



  </div>
</template>

<style scoped>

</style>