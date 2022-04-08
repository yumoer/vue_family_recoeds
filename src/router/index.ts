import { createRouter, createWebHistory } from 'vue-router'
import {setDocumentTitle} from "@/utils";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue')
        },
    ]
})
router.beforeEach((to, from, next) => {
    setDocumentTitle(to.meta.title as string)
    next()
})
export default router
