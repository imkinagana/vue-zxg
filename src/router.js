import Vue from 'vue'
import VueRouter from 'vue-router';
import Portal from "@/components/Portal";
import Zxg from "@/components/zxg/Zxg";
import Traphouserecord from "@/components/traphouserecord/Traphouserecord";
import Starz from "@/components/starz/Starz";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    hash: false,
    routes: [
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/',
            name: 'portal',
            component: Portal
        },
        {
            path: '/zxg',
            name: 'zxg',
            component: Zxg
        },
        {
            path: '/traphouserecord',
            name: 'traphouserecord',
            component: Traphouserecord
        },
        {
            path: '/starz',
            name: 'starz',
            component: Starz
        },
    ],

})

export default router