import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'home',
        component: () => import ('../views/Homepage.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})