import { createRouter,createWebHistory } from "vue-router";
import Mobile from './mobile'
import Pc from './pc'
let router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "",
            redirect: '/pc/home'
        },
        ...Mobile,
        ...Pc
    ]
})

export default router;