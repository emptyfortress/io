<template lang="pug">
IonMenu( side="end" menu-id="right" content-id="main" type="push")
	IonContent.all
		IonImg(src="assets/img/darkMode.svg" color="danger").boom
		IonContent.nice.ion-padding
			IonItem
				IonLabel Тёмная тема
				IonToggle(v-model="mode" @ionChange="test")
			IonText
				p.ion-text-center Выберите основной цвет
			.mygrid
				IonFabButton.fab
					IonIcon(:icon="checkmarkOutline")
				IonFabButton.fab.primary
				IonFabButton.fab.secondary
				IonFabButton.fab.favorite
				IonFabButton.fab
				IonFabButton.fab
				IonFabButton.fab
				IonFabButton.fab
				
</template>

<script>
import {
	IonMenu,
	IonImg,
	IonContent,
	IonItem,
	IonLabel,
	IonToggle,
	IonText,
	IonFabButton,
	IonIcon
} from '@ionic/vue'
import { checkmarkOutline, } from 'ionicons/icons'

export default {
	data() {
		return {
			mode: false,
			checkmarkOutline,
		}
	},
	components: { IonMenu, IonImg, IonContent, IonItem, IonLabel, IonToggle, IonText, IonFabButton, IonIcon },
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
.mygrid {
	display: grid;
	grid-template-columns: repeat(4, auto);
	/* width: 80%; */
	gap: 1rem;
	.fab {
		--box-shadow: none;
		border: 3px solid #fff;
		border-radius: 50%;
	}

}
.fab.primary::part(native) {
	--background: #ff0000;
}
</style>
