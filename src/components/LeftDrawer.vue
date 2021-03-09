<template lang="pug">
IonMenu(side="start" menu-id="left" content-id="main" type="overlay")
	.topBlock
		img(src="assets/img/logo1.svg").logo
		.name Константинопольский И.А.
		.user
			IonAvatar.av
				img(src="assets/img/user0.svg")
			IonFabButton(size="small").fb
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
import { closeOutline, logOutOutline } from 'ionicons/icons'

export default {
	data() {
		return {
			closeOutline,
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
			targets: '.av',
			translateY: -90,
			translateX: -120,
			width: 32,
			height: 32,
			easing: 'linear',
			autoplay: false,
		})
		this.fabAnimation = anime({
			targets: '.fb',
			opacity: 0,
			translateY: -50,
			translateX: -100,
			easing: 'linear',
			autoplay: false,
		})
		this.nameAnimation = anime({
			targets: '.name',
			opacity: 0,
			translateY: -30,
			translateX: -70,
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
			this.logoAnimation.seek(e.detail.scrollTop * 3)
			this.fabAnimation.seek(e.detail.scrollTop * 9)
			this.nameAnimation.seek(e.detail.scrollTop * 9)
		},
	},
}
</script>

<style scoped lang="scss">
.user {
	position: absolute;
	top: 100px;
	left: 50%;
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
.fb {
	position: absolute;
	bottom: -1rem;
	right: -1rem;
	--background: #fff;
	--box-shadow: none;
	--color: var(--ion-color-primary);
}
.name {
	text-align: center;
	margin-top: 2rem;
}
</style>
