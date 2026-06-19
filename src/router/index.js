import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import EditView from '../views/EditView.vue'

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
    },
    {
        path: '/products/:id/edit',
        name: 'product-edit',
        component: EditView
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


