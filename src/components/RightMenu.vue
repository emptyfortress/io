<template lang="pug">
IonMenu( side="end" menu-id="right" content-id="main" type="push")
	IonContent.all
		IonImg(src="assets/img/darkMode.svg" color="danger").boom
		IonContent.nice.ion-padding
			IonItem
				IonLabel Тёмная тема
				IonToggle(v-model="mode" @ionChange="dark")
			.font Шрифт
			IonItem
				IonRange(min="11" max="23" color="primary" v-model="fs" pin @ionChange="setFont")
					IonIcon(slot="start" size="small" :icon="textOutline")
					IonIcon(slot="end" :icon="textOutline")
			.font Выберите основной цвет
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
			IonItem
				IonLabel Настроить цвет:
				.swatch
					input(type="color" :value="swatch")
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
	IonButton,
	IonRange,
} from '@ionic/vue'
import { checkmarkOutline, textOutline } from 'ionicons/icons'

export default {
	data() {
		return {
			mode: false,
			color: 'six',
			swatch: '#2c74f9',
			fs: 16,
			checkmarkOutline,
			textOutline,
		}
	},
	components: {
		IonMenu,
		IonImg,
		IonContent,
		IonItem,
		IonLabel,
		IonToggle,
		IonText,
		IonFabButton,
		IonIcon,
		IonButton,
		IonRange,
	},
	methods: {
		dark() {
			document.querySelector('body').classList.toggle('dark')
		},
		setFont(e) {
			document.querySelector('html').style.fontSize = e.detail.value + 'px'
		},
		setColor(e) {
			this.color = e
			document.querySelector('#col').className = ''
			document.querySelector('#col').classList.add(e)
		},
	},
}
</script>

<style scoped lang="scss">
.all {
	border-left: 1px solid #ccc;
}
.boom {
	width: 50%;
	margin: 0 0 2rem auto;
	/* margin: 0 auto; */
}
.nice {
	/* --ion-background-color: #fff; */
}
.mygrid {
	display: grid;
	grid-template-columns: repeat(4, auto);
	padding: 0 1rem;
	margin-top: 1rem;
	gap: 0.5rem;
	.fab {
		--box-shadow: none;
		border: 3px solid #fff;
		border-radius: 50%;
	}
}
.font {
	padding-left: 1rem;
	margin-top: 2rem;
	font-size: 1.0rem;
	font-weight: bold;
}
.swatch {
	margin: 2rem auto;
	input {
		width: 50px;
		height: 50px;
	}
}

.fab.one::part(native) {
	--background: #f64137;
}
.fab.two::part(native) {
	--background: #ff8622;
}
.fab.three::part(native) {
	--background: #ebc008;
}
.fab.four::part(native) {
	--background: #409123;
}
.fab.five::part(native) {
	--background: #0092d8;
}
.fab.six::part(native) {
	--background: #2c74f9;
}
.fab.seven::part(native) {
	--background: #7057f9;
}
.fab.eight::part(native) {
	--background: #be38ff;
}
</style>
