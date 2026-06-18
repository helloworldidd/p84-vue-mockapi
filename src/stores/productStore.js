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

    async function createProduct(product) {
        const response = await axios.post(API_URL, product)

        products.value.push(response.data)


    }

    async function deleteProduct(id) {
        await axios.delete(`${API_URL}/${id}`)

        products.value = products.value.filter(
            product => product.id !== id)



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

