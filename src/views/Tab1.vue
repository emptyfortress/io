<template lang="pug">
IonPage
	IonHeader
		IonToolbar
			IonTitle Tab 1
	IonContent( :fullscreen="true" )
		IonHeader( collapse="condense" )
			IonToolbar
				IonTitle( size="large" ) Tab 1
		IonButton(routerLink="/tab2") Go to tab 2
		IonButton(@click="hid") hide
</template>

<script>
import { albumsOutline } from 'ionicons/icons'

import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonButton,
	IonIcon,
	IonFooter,
} from '@ionic/vue'

export default {
	name: 'Tab1',
	data() {
		return {
			albumsOutline,
		}
	},
	components: {
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonPage,
		IonButton,
		IonIcon,
		IonFooter,
	},
	methods: {
		hid() {
			this.$store.commit('toggleTabbar')
		},
	},
}
</script>

<style scoped lang="scss">
.lar {
	font-size: 3rem;
}
</style>
