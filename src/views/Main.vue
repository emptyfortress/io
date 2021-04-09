<template lang="pug">
IonPage
	IonHeader
		IonToolbar
			IonButtons(slot="start")
				IonBackButton
			IonTitle Главная
	IonContent
		IonHeader( collapse="condense" )
			IonToolbar()
				IonTitle( size="large" ) Главная
		Breadcrumbs
		.flexcenter
			.grid
				Cell(v-for="cell in cells" :cell="cell")

</template>

<script>
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
	IonBadge,
} from '@ionic/vue'

import {
	arrowUndoOutline,
	menu,
} from 'ionicons/icons'

import { useStore } from 'vuex'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import Cell from '@/components/Cell.vue'

export default {
	name: 'Tab2',
	components: {
		IonPage,
		IonButtons,
		IonBackButton,
		IonContent,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonIcon,
		IonRippleEffect,
		Breadcrumbs,
		IonBadge,
		IonButton,
		Cell,
	},

	setup() {
		const men = true
		const store = useStore()

		const dirs = [
			{ id: 0, menu: false, name: 'Важное' },
			{ id: 1, menu: false, name: 'Черновики' },
			{ id: 2, menu: false, name: 'Договоры' },
			{ id: 3, menu: false, name: 'Архив' },
			{ id: 4, menu: false, name: 'Folder 1' },
		]
		const cells = [
			{ id: 0, icon: 'history', title: 'Последние', url: '/last' },
			{ id: 1, icon: 'starOutline', title: 'Избранное', url: '/last' },
			{ id: 2, icon: 'task', title: 'Задания', url: '/last' },
			{ id: 3, icon: 'docs', title: 'Документы', url: '/last' },
			{ id: 4, icon: 'folder', title: 'Мои папки', url: '/main/folders' },
		]

		const addFolder = () => store.commit('addFolder', { id: 33, name: 'test' })
		const hideTab = () => store.commit('setTabbar', false)
		const showTab = () => store.commit('setTabbar', true)

		return {
			hideTab,
			showTab,
			arrowUndoOutline,
			men,
			menu,
			dirs,
			addFolder,
			cells,
		}
	},
}
</script>

<style scoped lang="scss">
.flexcenter {
	display: flex;
	justify-content: center;
	align-items: flex-end;
	height: 70%;
}
.grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	gap: 1.5rem;
}
</style>
