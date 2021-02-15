<template lang="pug">
ion-page
	ion-header
		ion-toolbar
			ion-title Tab 1
	ion-content( :fullscreen="true" )
		ion-header( collapse="condense" )
			ion-toolbar
				ion-title( size="large" ) Tab 1
		ion-button(router-link="/tabs/tab1/tab2") Go to tab 2
		ion-icon(src="assets/icons/line.svg" color="primary").lar
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
}
</script>

<style scoped lang="scss">
.lar {
	font-size: 2rem;
	cursor: pointer;
	fill: red;
	stroke: red;
}
</style>
