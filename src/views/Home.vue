<template lang="pug">
IonPage
	IonHeader
		IonToolbar
			IonTitle Home
	IonContent
		IonButton(router-link="/page") to page
</template>

<script>
import {
	IonPage,
	IonHeader,
	IonTitle,
	IonToolbar,
	IonContent,
	IonButton,
	IonFooter,
} from '@ionic/vue'
import {
	menu,
	easelOutline,
	speedometerOutline,
	addCircleOutline,
	searchOutline,
	notificationsOutline,
} from 'ionicons/icons'

export default {
	data() {
		return {
			menu,
			easelOutline,
			speedometerOutline,
			addCircleOutline,
			searchOutline,
			notificationsOutline,
		}
	},
	components: {
		IonPage,
		IonHeader,
		IonTitle,
		IonToolbar,
		IonContent,
		IonButton,
		IonFooter,
	},
}
</script>

<style scoped lang="scss"></style>
