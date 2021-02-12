<template lang="pug">
ion-page
	ion-header
		ion-toolbar
			ion-buttons
				ion-back-button
			ion-title Hello!
	ion-content
</template>

<script>
import { IonPage, IonToolBar, IonBackButton, IonContent } from '@ionic/vue'

export default {
	components: { IonPage, IonToolBar, IonBackButton, IonContent },
	data() {
		return {}
	},
}
</script>

<style scoped lang="scss"></style>
