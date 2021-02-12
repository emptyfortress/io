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
		ion-icon(src="assets/img/my.svg").lar
</template>

<script>
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonButton,
	IonIcon,
} from '@ionic/vue'
import ExploreContainer from '@/components/ExploreContainer.vue'

export default {
	name: 'Tab1',
	components: {
		ExploreContainer,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonPage,
		IonButton,
		IonIcon
	},
}
</script>

<style scoped lang="scss">
.lar {
	font-size: 2rem;
	fill: red;
	cursor: pointer;
	&:hover {
		fill: yellow;
	}
}

</style>
