<template lang="pug">
IonMenu( side="end" menu-id="right" content-id="main" type="push")
	IonContent.all
		IonImg(src="assets/img/darkMode.svg" color="danger").boom
		IonContent.nice.ion-padding
			IonItem
				IonLabel Тёмная тема
				IonToggle(v-model="mode" @ionChange="dark")
			IonText
				p.ion-text-center Выберите основной цвет
			.mygrid
				IonFabButton(@click="setColor('one')").fab.one
					IonIcon(v-show="color === 'one'" :icon="checkmarkOutline")
				IonFabButton(@click="setColor('two')").fab.two
					IonIcon(v-show="color === 'two'" :icon="checkmarkOutline")
				IonFabButton(@click="setColor('three')").fab.three
					IonIcon(v-show="color === 'three'" :icon="checkmarkOutline")
				IonFabButton(@click="setColor('four')").fab.four
					IonIcon(v-show="color === 'four'" :icon="checkmarkOutline")
				IonFabButton(@click="setColor('five')").fab.five
					IonIcon(v-show="color === 'five'" :icon="checkmarkOutline")
				IonFabButton(@click="setColor('six')").fab.six
					IonIcon(v-show="color === 'six'" :icon="checkmarkOutline")
				IonFabButton(@click="setColor('seven')").fab.seven
					IonIcon(v-show="color === 'seven'" :icon="checkmarkOutline")
				IonFabButton(@click="setColor('eight')").fab.eight
					IonIcon(v-show="color === 'eight'" :icon="checkmarkOutline")
			IonButton(@click="setFont") set font
				
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
	IonIcon,
	IonButton
} from '@ionic/vue'
import { checkmarkOutline, } from 'ionicons/icons'

export default {
	data() {
		return {
			mode: false,
			color: 'six',
			checkmarkOutline,
		}
	},
	components: { IonMenu, IonImg, IonContent, IonItem, IonLabel, IonToggle, IonText, IonFabButton, IonIcon, IonButton },
	methods: {
		dark() {
			document.querySelector('body').classList.toggle('dark')
		},
		setFont() {
			
		},
		setColor(e) {
			this.color = e
			document.querySelector('#col').className = ''
			document.querySelector('#col').classList.add(e)
		}
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
.fab.one::part(native) {
	--background: #F64137;
}
.fab.two::part(native) {
	--background: #FF8622;
}
.fab.three::part(native) {
	--background: #EBC008;
}
.fab.four::part(native) {
	--background: #409123;
}
.fab.five::part(native) {
	--background: #0092D8;
}
.fab.six::part(native) {
	--background: #2C74F9;
}
.fab.seven::part(native) {
	--background: #7057F9;
}
.fab.eight::part(native) {
	--background: #be38ff;
}
</style>
