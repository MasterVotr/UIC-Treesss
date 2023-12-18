import {createRouter, createWebHashHistory} from 'vue-router'
import TreeSearch from "@/components/TreeSearch.vue";
import Home from "@/components/Home.vue";
import DisplayGraph from "@/components/DisplayGraph.vue";

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
    },
    {
        path:'/displayGraph',
        name: 'displayGraph',
        component: DisplayGraph
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router