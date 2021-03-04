<template lang="pug">
IonPage
	IonHeader
		IonToolbar
			IonTitle note
	IonContent
</template>

<script>
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
} from '@ionic/vue'

export default {
	data() {
		return {}
	},
	components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent },
}
</script>

<style scoped lang="scss"></style>
