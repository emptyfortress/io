<template lang="pug">
IonPage
	IonHeader
		IonToolbar
			IonButtons(slot="start")
				IonBackButton
			IonTitle Сводка
	IonContent( :fullscreen="true" :scroll-events="true" @ionScrollStart="hideTab" @ionScrollEnd="showTab")
		IonHeader( collapse="condense" )
			IonToolbar
				IonTitle( size="large" ) Сводка
		IonSlides(pager="true" id="slides" @ionSlideDidChange="slideChange").sl
			IonSlide(v-for="slide in slides")
				Chart(:slide="slide" :series1="sr1" :series2="sr2" :series3="sr3")
		Bottom(:currentSlide="currentSlide")
</template>

<script>
import Chart from '@/components/Chart'
import SlideItem from '@/components/SlideItem'
import Bottom from '@/components/Bottom.vue'
import axios from 'axios'
import { chart1, chart2, chart3 } from '@/extra/chart.js'

import {
	IonPage,
	IonBackButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonSlides,
	IonSlide,
} from '@ionic/vue'

import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
	components: {
		axios,
		SlideItem,
		Bottom,
		Chart,
		IonPage,
		IonBackButton,
		IonButtons,
		IonContent,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonSlides,
		IonSlide,
	},
	setup() {
		const store = useStore()
		const slides = [
			{ id: 0, name: 'Новое' },
			{ id: 1, name: 'Срочное' },
			{ id: 2, name: 'Важное' },
		]
		let currentSlide = ref(0)
		const slideChange = async () => {
			let result = await document.querySelector('#slides').getActiveIndex()
			currentSlide.value = result
		}
		axios.get('./tasks.json').then((response) => {
			store.commit('setItems', response.data)
		})
		let items = computed(() => store.getters.items)
		let sr1 = computed(() => chart1(items.value))
		let sr2 = computed(() => chart2(items.value))
		let sr3 = computed(() => chart3(items.value))
		const hideTab = () => store.commit('setTabbar', false)
		const showTab = () => store.commit('setTabbar', true)
		return {
			slides,
			currentSlide,
			sr1,
			sr2,
			sr3,
			slideChange,
			hideTab,
			showTab,
		}
	},
}
</script>

<style scoped lang="scss">
.sl {
	padding-bottom: 1.5rem;
}
</style>
