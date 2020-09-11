import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import about from '@/components/about'
import services from '@/components/services'
import portfolio2 from '@/components/portfolio2'
import portfolio3 from '@/components/portfolio3'
import portfolio4 from '@/components/portfolio4'
import blog from '@/components/blog'
import blogdetail from '@/components/blogdetail'
import contact from '@/components/contact'
import error from '@/components/error'
import login from '@/components/login'
import signup from '@/components/signup'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/about',
            name: 'about',
            component: about
        },
        {
            path: '/services',
            name: 'services',
            component: services
        },
        {
            path: '/portfolio2',
            name: 'portfolio2',
            component: portfolio2
        },
        {
            path: '/portfolio3',
            name: 'portfolio3',
            component: portfolio3
        },
        {
            path: '/portfolio4',
            name: 'portfolio4',
            component: portfolio4
        },
        {
            path: '/blog',
            name: 'blog',
            component: blog
        },
        {
            path: '/blogdetail',
            name: 'blogdetail',
            component: blogdetail
        },
        {
            path: '/error',
            name: 'error',
            component: error
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/signup',
            name: 'signup',
            component: signup
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact
        },
        
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
