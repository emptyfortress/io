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
		.grid
			.up
				IonIcon(:icon="arrowUndoOutline")
				.tit Назад
			.folder.ion-activatable.ripple-parent(v-for="n in 5")
				IonIcon(:icon="folder")
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
	IonRippleEffect
} from '@ionic/vue'

import {folder, arrowUndoOutline } from 'ionicons/icons'

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
	},
	setup() {
		const store = useStore()
		const hideTab = () => store.commit('setTabbar', false)
		const showTab = () => store.commit('setTabbar', true)

		return { hideTab, showTab, folder, arrowUndoOutline }
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
	margin-top: 8rem;
}
.folder, .up {
	font-size: .9rem;
	text-align: center;
	cursor: pointer;
	ion-icon {
		font-size: 3rem;
		/* color: var(--ion-color-secondary-tint); */
		color: #5C4328;
	}
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
</style>
