<template lang="pug">
IonPage
	IonHeader
		IonToolbar
			IonButtons(slot="start")
				IonBackButton
			IonTitle {{ route.meta.title }}
	IonContent( :fullscreen="true" :scroll-events="true" @ionScrollStart="hideTab" @ionScrollEnd="showTab")
		IonHeader( collapse="condense" )
			IonToolbar()
				IonTitle( size="large") {{ route.meta.title }} 
		Breadcrumbs

		.grid
			.left.ion-activatable.ripple-parent
				IonIcon(:icon="arrowUndoOutline" @click="router.go(-1)")
				.tit Назад
				IonRippleEffect
			.right(v-if="route.path !== '/main/folders'")
				IonButton(size="small")
					.ion-margin-end
						span(v-if="men") Убрать из
						span(v-if="!men") Добавить в
					IonIcon(:icon="menu")

		.grid1
			.folder.ion-activatable.ripple-parent(v-for="dir in dirs" :key="dir.id" @click="router.push(dir.url)")
				IonIcon(src="assets/icons/folder.svg").fl
				.tit(:class="{dot : dir.menu}") {{ dir.name }}
				IonRippleEffect

</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
// import { ref } from 'vue'
import { useStore } from 'vuex'

import {
	IonPage,
	IonButtons,
	IonButton,
	IonBackButton,
	IonContent,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonIcon,
	IonRippleEffect,
} from '@ionic/vue'
import { arrowUndoOutline, menu } from 'ionicons/icons'

export default {
	components: {
		IonPage,
		IonButtons,
		IonButton,
		IonBackButton,
		IonContent,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonIcon,
		IonRippleEffect,
		Breadcrumbs,
	},
	setup () {
		const hideTab = () => store.commit('setTabbar', false)
		const showTab = () => store.commit('setTabbar', true)

		const router = useRouter()
		const route = useRoute()
		const store = useStore()

		const dirs = [
			{ id:  0, url: '/main/folders/0', menu: true, name: 'Важное' },
			{ id:  1, url: '/main/folders/1', menu: true, name: 'Черновики' },
			{ id:  2, url: '/main/folders/2', menu: true, name: 'Договоры' },
			{ id:  3, url: '/main/folders/3', menu: false, name: 'Архив' },
			{ id:  4, url: '/main/folders/4', menu: false, name: 'Folder 0' },
			{ id:  5, url: '/main/folders/5', menu: false, name: 'Folder 1' },
			{ id:  6, url: '/main/folders/6', menu: false, name: 'Folder 2' },
			{ id:  7, url: '/main/folders/7', menu: false, name: 'Folder 3' },
			{ id:  8, url: '/main/folders/8', menu: false, name: 'Folder 4' },
			{ id:  9, url: '/main/folders/9', menu: false, name: 'Folder 5' },
			{ id: 10, url: '/main/folders/10', menu: false, name: 'Folder 6' },
			{ id: 11, url: '/main/folders/11', menu: false, name: 'Folder 7' },
			{ id: 12, url: '/main/folders/12', menu: false, name: 'Folder 8' },
			{ id: 13, url: '/main/folders/13', menu: false, name: 'Folder 9' },
			{ id: 14, url: '/main/folders/14', menu: false, name: 'Folder 10' },
			{ id: 15, url: '/main/folders/15', menu: false, name: 'Folder 11' },
			{ id: 16, url: '/main/folders/16', menu: false, name: 'Folder 12' },
		]

		return {
			router,
			route,
			hideTab,
			showTab,
			arrowUndoOutline,
			menu,
			dirs
		}
	}
}
</script>

<style lang="scss">
.grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	gap: 1rem;
	margin-bottom: 2rem;
	margin-top: 5rem;
}
.folder,
.left {
	font-size: 0.9rem;
	text-align: center;
	cursor: pointer;
	position: relative;
	padding: .5rem 0;
	ion-icon {
		font-size: 2rem;
		color: var(--ion-color-primary);
	}
	.fl {
		font-size: 4rem;
		color: #e7bd86;
		.dark & {
			color: var(--ion-color-text);
		}
	}
}
.grid1 {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	align-items: center;
	gap: 1rem;
	.dot:before {
		content: '';
		width: 8px;
		height: 8px;
		display: inline-block;
		border-radius: 50%;
		margin-right: .25rem;
		background: var(--ion-color-primary);
	}
}
</style>
