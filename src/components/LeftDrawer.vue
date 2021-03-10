<template lang="pug">
IonMenu(side="start" menu-id="left" content-id="main" type="overlay")
	.topBlock
		img(src="assets/img/logo1.svg").logo
		.name Орлов И.А.
		.user
			IonAvatar.av
				img(src="assets/img/user0.svg")
			.online
			IonFabButton(size="small").exit
				IonIcon(:icon="logOutOutline" )
	IonContent(scroll-events @ionScroll="move").lisst
		IonList
			IonItem(v-for="n in 30") Menu Item
			IonItem
				IonMenuToggle(routerLink="/tabs/page") to page

</template>

<script>
import anime from 'animejs/lib/anime.es.js'

import {
	IonMenu,
	IonAvatar,
	IonFabButton,
	IonContent,
	IonList,
	IonMenuToggle,
	IonFooter,
	IonItem,
	IonIcon,
	IonLabel,
} from '@ionic/vue'
import { logOutOutline } from 'ionicons/icons'

export default {
	data() {
		return {
			logOutOutline,
			userAnimation: null,
			listAnimation: null,
			logoAnimation: null,
			fabAnimation: null,
			nameAnimation: null,
		}
	},
	components: {
		anime,
		IonMenu,
		IonAvatar,
		IonFabButton,
		IonContent,
		IonList,
		IonMenuToggle,
		IonFooter,
		IonItem,
		IonIcon,
		IonLabel,
	},
	mounted() {
		this.userAnimation = anime({
			targets: '.user',
			translateY: -137,
			translateX: -120,
			scale: 0.3,
			easing: 'linear',
			autoplay: false,
		})
		this.fabAnimation = anime({
			targets: '.exit',
			opacity: 0,
			easing: 'linear',
			autoplay: false,
		})
		this.nameAnimation = anime({
			targets: '.name',
			translateY: -45,
			translateX: -40,
			easing: 'linear',
			autoplay: false,
		})
		this.listAnimation = anime({
			targets: '.topBlock',
			height: 50,
			easing: 'linear',
			autoplay: false,
		})
		this.logoAnimation = anime({
			targets: '.logo',
			translateX: 50,
			opacity: 0,
			easing: 'linear',
			autoplay: false,
		})
	},
	methods: {
		move(e) {
			this.listAnimation.seek(e.detail.scrollTop * 5)
			this.userAnimation.seek(e.detail.scrollTop * 5)
			this.logoAnimation.seek(e.detail.scrollTop * 5)
			this.fabAnimation.seek(e.detail.scrollTop * 9)
			this.nameAnimation.seek(e.detail.scrollTop * 5)
		},
	},
}
</script>

<style scoped lang="scss">
.user {
	position: absolute;
	top: 100px;
	left: 85px;
	transform: translateX(-50%);
	.av {
		width: 128px;
		height: 128px;
		background: linear-gradient(
			0deg,
			rgba(255, 255, 255, 1) 10%,
			rgba(95, 195, 255, 1) 100%
		);
	}
	.online {
		position: absolute;
		bottom: 3px;
		right: 3px;
		width: 36px;
		height: 36px;
		background: #0da80d;
		border-radius: 50%;
		border: 3px solid #fff;
	}
}
.dark .user .av {
	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 1) 10%,
		rgba(63, 130, 171, 1) 100%
	);
}
.topBlock {
	position: relative;
	height: 250px;
	/* border-bottom: 1px solid #ccc; */
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	margin-bottom: 1rem;
}
.logo {
	width: 50%;
	margin: 0.5rem auto;
	display: block;
}
.exit {
	position: absolute;
	bottom: -0.5rem;
	left: -0.5rem;
	--background: #fff;
	--box-shadow: none;
	--color: var(--ion-color-primary);
}
.edit {
	position: absolute;
	top: -1rem;
	left: -1rem;
	--background: #fff;
	--box-shadow: none;
	--color: var(--ion-color-primary);
}
.name {
	text-align: center;
	margin-top: 1.5rem;
}
</style>
