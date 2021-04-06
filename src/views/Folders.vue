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
		.up
			IonIcon(:icon="folder" :color="primary")
			.tit Входящие
		.grid
			.folder(v-for="n in 5")
				IonIcon(:icon="folder" :color="primary")
				.tit Входящие

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
} from '@ionic/vue'

import {folder} from 'ionicons/icons'

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
		Breadcrumbs,
	},
	setup() {
		const store = useStore()
		const hideTab = () => store.commit('setTabbar', false)
		const showTab = () => store.commit('setTabbar', true)

		return { hideTab, showTab, folder }
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
}
.folder, .up {
	font-size: .9rem;
	text-align: center;
	ion-icon {
		font-size: 3rem;
		/* color: var(--ion-color-secondary-tint); */
		color: #5C4328;
	}
}
</style>
