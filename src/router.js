import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: () => import('./components/Guest/home')
        },
        {
            path: '/login',
            component: () => import('./components/Guest/login')
        },
        {
            path: '/register',
            component: () => import('./components/Guest/register')
        },
        {
            path: '/buysell',
            component: () => import('./components/Guest/buysell')
        },
        {
            path: '/staking',
            component: () => import('./components/Guest/staking')
        },
        {
            path: '/spot-trading',
            component: () => import('./components/Guest/spotTrading')
        },
        {
            path: '/mobile',
            component: () => import('./components/Guest/mobile')
        },
        {
            path: '/limits-commissions',
            component: () => import('./components/Guest/limits-commissions')
        },
        {
            path: '/fee-schedule',
            component: () => import('./components/Guest/fee-schedule')
        },
        {
            path: '/about',
            component: () => import('./components/Guest/about')
        },
        {
            path: '/contacts',
            component: () => import('./components/Guest/contacts')
        },
        {
            path: '/legal-security',
            component: () => import('./components/Guest/legal-and-security')
        },
        {
            path: '/affiliate-program',
            component: () => import('./components/Guest/affiliate-program')
        },
        {
            path: '/press',
            component: () => import('./components/Guest/press')
        },
            //    account routes
        {
            path: '/account/trade',
            component: () => import('./components/Account/trade')
        },
        {
            path: '/account/buysell',
            component: () => import('./components/Account/buysell')
        },
        {
            path: '/account/finance',
            component: () => import('./components/Account/finance')
        },
        {
            path: '/account/cards',
            component: () => import('./components/Account/cards')
        }
    ]
})