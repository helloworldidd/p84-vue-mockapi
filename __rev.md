# Archivo 1: App-v1.vue

Ruta: C:\Users\patri\OneDrive\Desktop\bootcamp-frontend-2026\p84-vue-mockapi\src\App-v1.vue

```vue
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

```

---

# Archivo 2: App.vue

Ruta: C:\Users\patri\OneDrive\Desktop\bootcamp-frontend-2026\p84-vue-mockapi\src\App.vue

```vue
<script setup>

</script>

<template>

    <router-link class="btn btn-secondary m-2" to="/">Home</router-link>
    <router-link class="btn btn-secondary m-2" to="/about">About</router-link>


    <router-view />
  
</template>

<style scoped>

</style>
```

---

# Archivo 3: main.js

Ruta: C:\Users\patri\OneDrive\Desktop\bootcamp-frontend-2026\p84-vue-mockapi\src\main.js

```js
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

import App from './App.vue'

createApp(App)
    .use(createPinia())
    .use(router)
    .mount("#app");
```

---

# Archivo 4: ProductForm.vue

Ruta: C:\Users\patri\OneDrive\Desktop\bootcamp-frontend-2026\p84-vue-mockapi\src\components\ProductForm.vue

```vue
<script setup>
import { ref, computed } from 'vue'
import { useProductStore } from '@/stores/productStore'

const productStore = useProductStore()

const id = ref(null)

const name = ref('')
const description = ref('')
const price = ref('')

const msg = ref('')

const isEditing = computed(() => id.value !== null)

const formEmpty = computed(() => {
  return !name.value || !description.value || !price.value
})

async function handleSubmit() {
  const productData = {
    name: name.value,
    description: description.value,
    price: Number(price.value)
  }

  if (isEditing.value) {
    await productStore.updateProduct(
      id.value,
      productData
    )

    msg.value = 'Producto actualizado con éxito'
  }
  else {
    await productStore.createProduct(productData)

    msg.value = 'Producto creado con éxito'
  }

  resetForm()
}

function editProduct(product) {
  id.value = product.id
  name.value = product.name
  description.value = product.description
  price.value = product.price
}

function resetForm() {
  id.value = null

  name.value = ''
  description.value = ''
  price.value = ''

  setTimeout(() => {
    msg.value = ''
  }, 2000)
}
</script>

<template>
  <div>
    <h1>ProductForm</h1>

    <form @submit.prevent="handleSubmit">
      <h2>
        {{ isEditing ? 'Editar Producto' : 'Crear Producto' }}
      </h2>

      <input
        v-model="name"
        type="text"
        placeholder="Nombre"
      >

      <br>

      <input
        v-model="description"
        type="text"
        placeholder="Descripción"
      >

      <br>

      <input
        v-model="price"
        type="number"
        placeholder="Precio"
      >

      <br>

      <p v-if="msg">
        {{ msg }}
      </p>

      <button :disabled="formEmpty">
        {{ isEditing ? 'Actualizar' : 'Guardar' }}
      </button>
    </form>
  </div>
</template>
```

---

# Archivo 5: ProductList.vue

Ruta: C:\Users\patri\OneDrive\Desktop\bootcamp-frontend-2026\p84-vue-mockapi\src\components\ProductList.vue

```vue
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
      
      <button
        @click="productStore.editProduct(product)"
      >
        Editar
      </button>
      
      <button
        @click="productStore.deleteProduct(product.id)"
      >
        Eliminar
      </button>
    </div>
    
  </div>
  </div>
</template>

<style scoped>

</style>
```

---

# Archivo 6: index.js

Ruta: C:\Users\patri\OneDrive\Desktop\bootcamp-frontend-2026\p84-vue-mockapi\src\router\index.js

```js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [

    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router



```

---

# Archivo 7: productStore.js

Ruta: C:\Users\patri\OneDrive\Desktop\bootcamp-frontend-2026\p84-vue-mockapi\src\stores\productStore.js

```js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

const API_URL = 'http://localhost:3000/products'


export const useProductStore = defineStore('product', () => {


    // State
    const products = ref([])
    const loading = ref(false)
    const error = ref(null)

    // Getters
    const totalProducts = computed(() => {
        return products.value.length
    })

    // Actions

    async function fetchProducts() {
        loading.value = true
        error.value = null

        try {
            const response = await axios.get(API_URL)
            products.value = response.data
        } catch (err) {
            error.value = "Error al obtener los productos 🦕☄️"
            console.log(err)
        } finally {
            loading.value = false
        }
   
    }

    async function createProduct() {
        
    }

    async function deleteProduct() {
    }

    async function updateProduct() {
    }





    return {
        products,
        loading,
        error,
        totalProducts,
        fetchProducts,
        createProduct,
        deleteProduct,
        updateProduct
    }

})


```

---

# Archivo 8: AboutView.vue

Ruta: C:\Users\patri\OneDrive\Desktop\bootcamp-frontend-2026\p84-vue-mockapi\src\views\AboutView.vue

```vue
<script setup>

</script>

<template>
  <div>
    <h1 class="text-center">About</h1>
    
  </div>
</template>

<style scoped>

</style>
```

---

# Archivo 9: HomeView.vue

Ruta: C:\Users\patri\OneDrive\Desktop\bootcamp-frontend-2026\p84-vue-mockapi\src\views\HomeView.vue

```vue
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
```

---


