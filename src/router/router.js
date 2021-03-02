import { createRouter, createWebHistory } from '@ionic/vue-router'
// import Tabs from '@/views/Tabs.vue'
import Home from '@/views/Home.vue'
import Notifications from '@/components/Notifications'


import Pag from '@/views/Pag'

const routes = [
	{
		path: '/',
		component: Home,
		// redirect: '/pag',
	},
	{
		path: '/notifications',
		component: Notifications,
	},
	{
		path: '/page',
		component: Pag,
		meta: {
			color: 'danger'
		}
	},
	// {
	// 	path: '/tabs/',
	// 	component: Tabs,
	// 	children: [
	// 		{
	// 			path: '',
	// 			redirect: '/tabs/tab1',
	// 		},
	// 		{
	// 			path: 'tab1',
	// 			component: () => import('@/views/Tab1.vue'),
	// 			children: [
	// 				{
	// 					path: 'tab2',
	// 					component: () => import('@/views/Tab2.vue'),
	// 				},
	// 			],
	// 		},
	// 		{
	// 			path: 'tab2',
	// 			component: () => import('@/views/Tab2.vue'),
	// 		},
	// 		{
	// 			path: 'tab3',
	// 			component: () => import('@/views/Tab3.vue'),
	// 		},
	// 	],
	// },
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
