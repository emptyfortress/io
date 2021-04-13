<template lang="pug">
IonMenu(side="start" menu-id="left" content-id="main" type="overlay").mymenu
	.topBlock
		img(src="assets/img/logo.svg").logo
		.fio Орлов И.А.
		.user
			IonAvatar.av
				img(src="assets/img/user0.svg")
			.online
			IonFabButton(size="small" color="primary" ).exit
				IonIcon(:icon="logOutOutline" )
	IonContent(scroll-events @ionScroll="move")
		IonList
			IonItem(v-for="item in menuList" lines="full").myripple.ion-activatable.ripple-parent
				IonIcon(:icon="item.icon")
				IonLabel {{ item.title }}
				IonBadge(v-if="item.badge") {{ item.badge }}
				IonRippleEffect
			ul.tree
				template(v-for="item in treeData" :key="item.id")
					TreeItem(class="item" :item="item")

			IonListHeader.hd Дополнительно
			IonItem( lines="full").myripple.ion-activatable.ripple-parent
				IonIcon(src="assets/icons/addScreen.svg")
				IonLabel Добавить на гл.экран
				IonRippleEffect
			IonMenuToggle(menu="left")
				IonMenuToggle(menu="right")
					IonItem(lines="full").myripple.ion-activatable.ripple-parent
						IonIcon(:icon="moonOutline")
						IonLabel Темы
			IonItem(v-for="item in menuList1" lines="full").myripple.ion-activatable.ripple-parent
				IonIcon(:icon="item.icon")
				IonLabel {{ item.title}}
				IonBadge(v-if="item.badge") {{ item.badge }}
				IonRippleEffect
		//- .hid

</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import TreeItem from '@/components/TreeItem'
import { mapGetters } from 'vuex'

import {
	IonMenu,
	IonMenuToggle,
	IonAvatar,
	IonFabButton,
	IonContent,
	IonList,
	IonListHeader,
	IonItem,
	IonIcon,
	IonLabel,
	IonBadge,
	IonRippleEffect,
} from '@ionic/vue'
import { moonOutline, logOutOutline } from 'ionicons/icons'

export default {
	data() {
		return {
			moonOutline,
			logOutOutline,
			userAnimation: null,
			listAnimation: null,
			logoAnimation: null,
			fabAnimation: null,
			nameAnimation: null,
		}
	},
	components: {
		TreeItem,
		anime,
		IonMenu,
		IonMenuToggle,
		IonAvatar,
		IonFabButton,
		IonContent,
		IonList,
		IonListHeader,
		IonItem,
		IonIcon,
		IonLabel,
		IonBadge,
		IonRippleEffect,
	},
	computed: {
		...mapGetters(['treeData', 'menuList', 'menuList1'])
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
			targets: '.fio',
			translateY: -45,
			translateX: -40,
			easing: 'linear',
			autoplay: false,
		})
		this.listAnimation = anime({
			targets: '.topBlock',
			height: 54,
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
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	padding-bottom: 1rem;
	background: var(--ion-color-step-100);
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
.fio {
	text-align: center;
	margin-top: 1.5rem;
	color: var(--ion-text-color);
}
.tree {
	list-style: none;
	padding: 0;
	margin: 0;
	margin-left: 12px;
	border-bottom: 1px solid #ccc;
	.dark & {
		border-bottom: 1px solid var(--ion-border-color);
	}
}
.hid {
	height: 200px;
}
.myripple {
	position: relative;
	ion-icon {
		margin-right: 0.5rem;
	}
}
.hd {
	text-transform: uppercase;
	margin-top: 4rem;
}
.item::part(native) {
	font-size: 1rem;
}
.item ul {
	margin-top: 0;
}
</style>
