import { createRouter, createWebHistory } from '@ionic/vue-router'
import Home from '@/views/Home.vue'

const routes = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/home',
		name: 'home',
		component: Home
	},
	{
		path: '/folders',
		name: 'folders',
		component: () => import('@/views/Folders.vue'),
	},
	{
		path: '/notifications',
		name: 'notifications',
		component: () => import('@/views/Notifications.vue'),
	},
	{
		path: '/search',
		name: 'search',
		component: () => import('@/views/Search.vue'),
	},
	{
		path: '/new',
		component: () => import('@/views/New.vue')
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
