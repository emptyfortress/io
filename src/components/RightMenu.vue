<template lang="pug">
IonMenu( side="end" menu-id="right" content-id="main" type="push")
	IonContent.all
		IonImg(src="assets/img/darkMode.svg").boom
		IonContent.nice.ion-padding
			IonItem
				IonLabel Dark mode
				IonToggle(v-model="mode" @ionChange="test")
</template>

<script>
import {
	IonMenu,
	IonImg,
	IonContent,
	IonItem,
	IonLabel,
	IonToggle,
} from '@ionic/vue'
export default {
	data() {
		return {
			mode: false,
		}
	},
	components: { IonMenu, IonImg, IonContent, IonItem, IonLabel, IonToggle },
	methods: {
		test() {
			document.querySelector('body').classList.toggle('dark')
		},
	},
}
</script>

<style scoped lang="scss">
.all {
	border-left: 1px solid #ccc;
}
.boom {
	width: 70%;
	margin: 0 0 2rem auto;
	/* margin: 0 auto; */
}
.nice {
	/* --ion-background-color: #fff; */
}
</style>
