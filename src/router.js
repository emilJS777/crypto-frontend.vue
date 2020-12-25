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
            component: () => import('./components/Guest/auth/login')
        },
        {
            path: '/register',
            component: () => import('./components/Guest/auth/register')
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
        {
            path: '/blog',
            component: () => import('./components/Guest/blog/home')
        },
        {
            path: '/blog/listings',
            component: () => import('./components/Guest/blog/categories/listings')
        },
        {
            path: '/blog/product',
            component: () => import('./components/Guest/blog/categories/product')
        },
        {
            path: '/blog/leadership',
            component: () => import('./components/Guest/blog/categories/leadership')
        },
        {
            path: '/blog/geographies',
            component: () => import('./components/Guest/blog/categories/geographies')
        },
        {
            path: '/blog/market',
            component: () => import('./components/Guest/blog/categories/market')
        },
        {
            path: '/blog/certain-blog',
            component: () => import('./components/Guest/blog/certain-blog')
        },
        {
            path: '/buy-crypto',
            component: () => import('./components/Guest/buy-crypto')
        },
        {
            path: '/sell-bitcoins',
            component: () => import('./components/Guest/sell-bitcoins')
        },
        {
            path: '/bitcoin-trading',
            component: () => import('./components/Guest/bitcoin-trading')
        },
        {
            path: '/bitcoin-calculator',
            component: () => import('./components/Guest/bitcoin-calculator')
        },
        {
            path: '/bitcoin-halving',
            component: () => import('./components/Guest/bitcoin-halving')
        },
        {
            path: '/k7-api',
            component: () => import('./components/Guest/k7-api')
        },
        {
            path: '/refund-policy',
            component: () => import('./components/Guest/refund-policy')
        },
        {
            path: '/terms',
            component: () => import('./components/Guest/legal-and-scurity-docs/terms')
        },
        {
            path: '/privacy',
            component: () => import('./components/Guest/legal-and-scurity-docs/privacy')
        },
        {
            path: '/aml-kyc',
            component: () => import('./components/Guest/legal-and-scurity-docs/aml-kyc')
        },
        {
            path: '/anti-fraud-policy',
            component: () => import('./components/Guest/legal-and-scurity-docs/anti-fraud-policy')
        },
        {
            path: '/payment-policy',
            component: () => import('./components/Guest/legal-and-scurity-docs/payment-policy')
        },
        {
            path: '/risk-warning',
            component: () => import('./components/Guest/legal-and-scurity-docs/risk-warning')
        },
        {
            path: '/cardholders-agreement',
            component: () => import('./components/Guest/legal-and-scurity-docs/cardholders-agreement')
        },
        {
            path: '/listing-policy',
            component: () => import('./components/Guest/legal-and-scurity-docs/listing-policy')
        },
        {
            path: '/prices',
            component: () => import('./components/Guest/prices')
        },
        {
            path: '/reset-password',
            component: () => import('./components/Guest/auth/reset-password')
        },
        {
            path: '/affiliate-program/faq',
            component: () => import('./components/Guest/affiliate-program/faq')
        },
        {
            path: '/affiliate-program/terms',
            component: () => import('./components/Guest/affiliate-program/terms')
        },
        {
            path: '/status',
            component: () => import('./components/Guest/status/home')
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
            path: '/account/staking',
            component: () => import('./components/Account/staking')
        },
        {
            path: '/account/finance',
            component: () => import('./components/Account/finance')
        },
        {
            path: '/account/cards',
            component: () => import('./components/Account/cards')
        },
        {
            path: '/account/affiliate',
            component: () => import('./components/Account/affiliate')
        },
        {
            path: '/account/profile',
            component: () => import('./components/Account/profile')
        },
        {
            path: '/account/account-activity',
            component: () => import('./components/Account/account-activity')
        },
        {
            path: '/account/social-networks',
            component: () => import('./components/Account/social-networks')
        },
        {
            path: '/account/verification',
            component: () => import('./components/Account/verification')
        },
        {
            path: '/account/verification/identity',
            component: () => import('./components/Account/verification/identity')
        },
        {
            path: '/account/support',
            component: () => import('./components/Account/support/collections-menu')
        },
        {
            path: '/account/support/collections',
            component: () => import('./components/Account/support/sub-collections-menu')
        },
        {
            path: '/account/support/edition',
            component: () => import('./components/Account/support/edition')
        },
        {
            path: '/account/deposit-withdraw',
            component: () => import('./components/Account/deposit-withdraw')
        },
        {
            path: '/account/processing-alerts',
            component: () => import('./components/Account/processing-alerts')
        },
    ]
})