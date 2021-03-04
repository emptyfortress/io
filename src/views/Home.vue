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
	IonToolbar,
	IonTitle,
	IonContent,
	IonButton,
} from '@ionic/vue'

import {} from 'ionicons/icons'

export default {
	data() {
		return {}
	},
	components: {
		IonPage,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonButton,
	},
}
</script>

<style scoped lang="scss"></style>
