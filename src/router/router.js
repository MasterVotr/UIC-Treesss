import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import TreeSearch from "@/components/TreeSearch.vue";
import Home from "@/components/Home.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path:'/treeSearch',
        name: 'treeSearch',
        component: TreeSearch
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router