import { createWebHistory, createRouter } from 'vue-router'

import Homepage from '../pages/Home.vue';
import SignIn from '../pages/SignIn.vue';
import Cart from '../pages/Cart.vue';

const routes = [
  { path: '/', component: Homepage },
  { path: '/sign-in/', component: SignIn },
  { path: '/cart/', component: Cart },
]

const router = createRouter({
    history: createWebHistory('/vite-test/'),
    routes
})

export default router
