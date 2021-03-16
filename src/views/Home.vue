<template lang="pug">
IonPage
	IonHeader
		IonToolbar
			IonButtons(slot="start")
				IonBackButton
			IonTitle Сводка
	IonContent( :fullscreen="true" :scroll-events="true")
		IonHeader( collapse="condense" )
			IonToolbar
				IonTitle( size="large" ) Сводка
		IonSlides(pager="true" ref="slides" id="slides" @ionSlideDidChange="test").sl
			IonSlide(v-for="slide in slides")
				Chart(:slide="slide")
		transition(name="fade" mode="out-in")
			div(v-if="currentSlide === 0")
				transition(name="fade" mode="out-in")
					h5(v-if="selectedChart === null") Новые задания и документы
					h5(v-else) {{ selectedChart.label }}
			h5(v-else-if="currentSlide === 1") Истекают сроки исполнения
			h5(v-else-if="currentSlide === 2") Задания и документы на контроле
		transition(name="slideY" mode="out-in")
			IonList(v-show="selectedChart !== null" lines="full").mol
				transition-group(name="listX")
					SlideItem(v-for="item in items" @swipe="rem(item)" @read="rem(item)" :key="item.id" :item="item")
</template>

<script>
import TreeItem from '@/components/TreeItem'
import Chart from '@/components/Chart'
import SlideItem from '@/components/SlideItem'

import {} from 'ionicons/icons'

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

export default {
	data() {
		return {
			slides: [
				{ id: 0, name: 'Новое' },
				{ id: 1, name: 'Срочное' },
				{ id: 2, name: 'Важное' },
			],
			currentSlide: 0,
			items: [
				{ id: 0, name: 'item 0 name very very long and selskjal lkja ' },
				{ id: 1, name: 'item 1 name' },
				{ id: 2, name: 'item 2 name' },
				{ id: 3, name: 'item 3 name' },
				{ id: 4, name: 'item 4 name' },
			],
		}
	},
	computed: {
		selectedChart() {
			return this.$store.getters.selectedChart
		},
	},
	components: {
		SlideItem,
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
		rem(e) {
			console.log(e)
			this.items = this.items.filter((item) => item.id !== e.id)
			// console.log(e.target)
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
.mol {
	margin-bottom: 4rem;
}
</style>
