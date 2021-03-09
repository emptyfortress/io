<template lang="pug">
IonPage
	IonHeader
		IonToolbar
			IonTitle Home

	IonContent


</template>

<script>
import anime from 'animejs/lib/anime.es.js'

import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
} from '@ionic/vue'

import {} from 'ionicons/icons'

export default {
	data() {
		return { animation: null }
	},
	components: { anime, IonPage, IonHeader, IonToolbar, IonTitle, IonContent },
	mounted() {
		this.animation = anime({
			targets: '.us',
			translateX: 200,
			scale: 0.5,
			autoplay: false,
		})
	},
	methods: {
		move(e) {
			// console.log(e)
			console.log(e.detail.scrollTop)
			this.animation.seek(e.detail.scrollTop)
		},
	},
}
</script>

<style scoped lang="scss">
.us {
	width: 100px;
	height: 100px;
	background: #ccc;
	margin-top: 2rem;
}
</style>
