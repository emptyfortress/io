<template lang="pug">
IonPage
	IonHeader
		IonToolbar
			IonButtons(slot="start")
				IonBackButton
	IonContent
		img(src="assets/img/avv.png" @click="inc")
	h2 {{ count }}
	IonFooter
		IonToolbar(:color="test")
			IonButtons(slot="start")
				IonButton lakjs
			IonTitle Hello!
</template>

<script>
import { mapGetters } from 'vuex'

import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonBackButton,
	IonContent,
	IonFooter,
	IonButton,
	IonTitle,
} from '@ionic/vue'

export default {
	components: {
		IonPage,
		IonHeader,
		IonToolbar,
		IonButtons,
		IonBackButton,
		IonContent,
		IonFooter,
		IonButton,
		IonTitle,
	},
	data() {
		return {
			color: null,
		}
	},
	created() {
		this.color = this.$route.meta.color
	},
	computed: {
		test() {
			return this.$route.meta.color
		},
		...mapGetters(['count']),
	},
	methods: {
		inc() {
			this.$store.commit('increment')
		},
	},
}
</script>

<style scoped lang="scss"></style>
