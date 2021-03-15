<template lang="pug">
IonPage
	IonHeader
		IonToolbar
			IonButtons(slot="start")
				IonBackButton
			IonTitle Сводка
	IonContent( :fullscreen="true" :scroll-events="true").ion-padding
		IonHeader( collapse="condense" )
			IonToolbar
				IonTitle( size="large" ) Сводка
		IonSlides(pager="true" ref="slides" id="slides" @ionSlideDidChange="test").sl
			IonSlide(v-for="slide in slides")
				Chart(:slide="slide")
		transition(name="fade" mode="out-in")
			div(v-if="currentSlide === 0")
				transition(name="fade" mode="out-in")
					h5(v-if="selectedChart === null") Вновь поступившие задания и документы
					h5(v-else) zag
			h5(v-else-if="currentSlide === 1") Истекают сроки исполнения
			h5(v-else-if="currentSlide === 2") Задания и документы на контроле
		transition(name="slideY" mode="out-in")
			IonList(v-show="selectedChart !== null")
				IonItem(v-for="n in 30")
					IonLabel item {{ n }}
</template>

<script>
import {
	IonPage,
	IonButtons,
	IonBackButton,
	IonContent,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonSlides,
	IonCard,
	IonCardHeader,
	IonCardContent,
	IonCardSubtitle,
	IonCardTitle,
	IonSlide,
	IonList,
	IonItem,
	IonLabel,
} from '@ionic/vue'

import {} from 'ionicons/icons'
import TreeItem from '@/components/TreeItem'
import Chart from '@/components/Chart'

export default {
	data() {
		return {
			slides: [
				{ id: 0, name: 'Новое' },
				{ id: 1, name: 'Срочное' },
				{ id: 2, name: 'Контроль' },
			],
			currentSlide: 0,
		}
	},
	computed: {
		selectedChart() {
			return this.$store.getters.selectedChart
		},
	},
	components: {
		Chart,
		TreeItem,
		IonPage,
		IonButtons,
		IonBackButton,
		IonContent,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonSlides,
		IonCard,
		IonCardHeader,
		IonCardContent,
		IonCardSubtitle,
		IonCardTitle,
		IonSlide,
		IonList,
		IonItem,
		IonLabel,
	},
	methods: {
		async test() {
			let result = await document.querySelector('#slides').getActiveIndex()
			this.currentSlide = result
		},
	},
}
</script>

<style scoped lang="scss">
.tree {
	list-style: none;
	padding: 0;
	margin: 0;
}
.sl {
	padding-bottom: 1.5rem;
}
h5 {
	text-align: center;
}
</style>
