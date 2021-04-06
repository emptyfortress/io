<template lang="pug">
IonPage
	IonHeader
		IonToolbar
			IonButtons(slot="start")
				IonBackButton
			IonTitle Папки
	IonContent( :fullscreen="true" :scroll-events="true" @ionScrollStart="hideTab" @ionScrollEnd="showTab").ion-padding
		IonHeader( collapse="condense" )
			IonToolbar()
				IonTitle( size="large" ) Папки
		Breadcrumbs
		.grid.first
			.up
				IonIcon(:icon="arrowUndoOutline")
				.tit Назад
			.folder.ion-activatable.ripple-parent(v-for="dir in dirs" :key="dir.id")
				.rel
					IonIcon(:icon="folder")
					.dot
				.tit {{ dir.name }}
				IonRippleEffect
		.grid.second
			.folder.ion-activatable.ripple-parent(v-for="n in 12")
				IonIcon(:icon="documentOutline")
				.tit Входящие
				IonRippleEffect

</template>

<script>
import {
	IonPage,
	IonButtons,
	IonBackButton,
	IonContent,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonIcon,
	IonRippleEffect,
	IonBadge
} from '@ionic/vue'

import {folder, arrowUndoOutline, documentOutline } from 'ionicons/icons'

import { useStore } from 'vuex'
import Breadcrumbs from '@/components/Breadcrumbs.vue'

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
	},
	setup() {
		const store = useStore()
		const dirs = [
			{ id: 0, menu: false, name: 'Важное' },
			{ id: 1, menu: false, name: 'Черновики' },
			{ id: 2, menu: false, name: 'Договоры' },
			{ id: 3, menu: false, name: 'Архив' },
			{ id: 4, menu: false, name: 'Folder 1' },
		]
		const hideTab = () => store.commit('setTabbar', false)
		const showTab = () => store.commit('setTabbar', true)

		return { hideTab, showTab, folder, arrowUndoOutline, documentOutline, dirs }
	},
}
</script>

<style scoped lang="scss">
ion-content {
}
.grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
	&.first {
		margin-top: 8rem;
		margin-bottom: 1rem;
	}
	&.second {
		opacity: .5;
		margin-bottom: 5rem;
	}
}
.folder, .up {
	font-size: .9rem;
	text-align: center;
	cursor: pointer;
	ion-icon {
		font-size: 3rem;
		color: #5C4328;
	}
}
.rel {
	display: inline-block;
	position: relative;
}
.up {
	grid-column: 1/4;
	justify-self: start;
	padding-left: 1rem;
}
.ripple-parent {
	position: relative;
	overflow: hidden;
}
.dot {
	width: 15px;
	height: 15px;
	background: var(--ion-color-success);
	border-radius: 50%;
	position: absolute;
	bottom: 5px;
	right: -5px;
	border: 2px solid #fff;
	
}
</style>
