<template lang="pug">
IonMenu(side="start" menu-id="left" content-id="main" type="overlay")
	IonAvatar.user
		img(src="assets/img/user0.svg")
	IonContent
		//- img(src="assets/img/logo.svg")
		IonList
			IonItem(v-for="n in 30") Menu Item
			IonItem
				IonMenuToggle(routerLink="/tabs/page") to page
</template>

<script>
import {
	IonMenu,
	IonContent,
	IonAvatar,
	IonList,
	IonItem,
	IonMenuToggle,
} from '@ionic/vue'
import {} from 'ionicons/icons'

export default {
	data() {
		return {}
	},
	components: {
		IonMenu,
		IonContent,
		IonAvatar,
		IonList,
		IonItem,
		IonMenuToggle,
	},
}
</script>

<style scoped lang="scss">
.user {
	width: 128px;
	height: 128px;
	/* background: #ccc; */
	margin: 2rem auto;
	background: linear-gradient(
		0deg,
		rgba(255, 255, 255, 1) 10%,
		rgba(95, 195, 255, 1) 100%
	);
}
</style>
