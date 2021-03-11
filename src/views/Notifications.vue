<template lang="pug">
IonPage
	IonHeader
		IonToolbar
			IonTitle note
	IonContent
		IonIcon(src="assets/img/rec.svg" color="primary").bl
</template>

<script>
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonIcon,
} from '@ionic/vue'

export default {
	data() {
		return {}
	},
	components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon },
}
</script>

<style scoped lang="scss">
.bl {
	font-size: 5rem;
}
</style>
