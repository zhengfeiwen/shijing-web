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
router.beforeEach((to, from, next) => {
    //当移动端试图访问pc端页面时
    const isMobile = /Android |webos| iPhone |iPod| BlackBerry | iPad/i.test(navigator.userAgent)
    if (!isMobile) {  // 判断设备 && 跳转的路由中meta的type类型 是否为‘mobile’​
        if(to.path.includes('/pc/')) next()
        else next(to.path.replace('mobile', 'pc'))
    }
    // ​当pc端页面试图访问移动端页面时
    if (isMobile) {
        if(to.path.includes('/mobile/')) next()
        else next(to.path.replace('pc', 'mobile'))
    }
  });

export default router;