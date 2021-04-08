<template lang="pug">
IonPage
	IonHeader
		IonToolbar
			IonButtons(slot="start")
				IonBackButton
			IonTitle {{ route.meta.title }}
	IonContent( :fullscreen="true" :scroll-events="true" @ionScrollStart="hideTab" @ionScrollEnd="showTab")
		IonHeader( collapse="condense" )
			IonToolbar()
				IonTitle( size="large") Мои папки
		Breadcrumbs
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
// import { ref } from 'vue'
// import { useStore } from 'vuex'

import {
	IonPage,
	IonButtons,
	IonButton,
	IonBackButton,
	IonContent,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonIcon,
	IonRippleEffect,
} from '@ionic/vue'
// import { icon } from 'ionicons/icons'

export default {
	components: {
		IonPage,
		IonButtons,
		IonButton,
		IonBackButton,
		IonContent,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonIcon,
		IonRippleEffect,
		Breadcrumbs,
	},
	setup () {
		const router = useRouter()
		const route = useRoute()

		return {
			router,
			route
		}
	}
}
</script>

<style lang="scss">
ion-content {
	background: pink;
}
</style>
