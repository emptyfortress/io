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
// import { chart1, chart2, chart3 } from '@/extra/chart.js'

import {
	IonPage,
	IonBackButton,
	IonContent,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonSlides,
	IonSlide,
} from '@ionic/vue'

// import { ref, computed } from 'vue'
// import { useStore } from 'vuex'

export default {
	components: {
		axios,
		SlideItem,
		Bottom,
		Chart,
		IonPage,
		IonBackButton,
		IonContent,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonSlides,
		IonSlide,
	},
	created() {
		axios.get('./tasks.json').then((response) => {
			this.$store.commit('setItems', response.data)
		})
	},
	data() {
		return {
			slides: [
				{ id: 0, name: 'Новое' },
				{ id: 1, name: 'Срочное' },
				{ id: 2, name: 'Важное' },
			],
			currentSlide: 0,
		}
	},
	computed: {
		items() {
			return this.$store.getters.items
		},
		sr1 ()  {return this.chart1(this.items) },
		sr2 ()  {return this.chart2(this.items) },
		sr3 ()  {return this.chart3(this.items) }
	},
	methods: {
		async slideChange() {
			let result = await document.querySelector('#slides').getActiveIndex
			this.currentSlide = result
		},
		chart1 (e)  {
			let temp = []
			let ozn = e.filter((item) => item.type === 'На ознакомление')
				.length
			let isp = e.filter((item) => item.type === 'На исполнение')
				.length
			let vhod = e.filter((item) => item.type === 'Входящие').length
			temp.push(ozn)
			temp.push(isp)
			temp.push(vhod)
			return temp
		},
		chart2 (e)  {
			let temp = []
			let nach = e.filter((item) => item.deadline === 'Вчера').length
			let rab = e.filter((item) => item.deadline === 'Сегодня').length
			let zav = e.filter((item) => item.deadline === 'Завтра').length
			let del = e.filter((item) => item.deadline === 'На неделе')
				.length
			temp.push(nach)
			temp.push(rab)
			temp.push(zav)
			temp.push(del)
			const entries = new Map([['data', temp]])
			const obj = Object.fromEntries(entries)
			let ar = []
			ar.push(obj)
			return ar
		},
		chart3 (e)  {
			let temp = []
			let nach = e.filter(
				(item) => item.status === 'Не начато' && item.controler
			).length
			let rab = e.filter(
				(item) => item.status === 'В работе' && item.controler
			).length
			let zav = e.filter(
				(item) => item.status === 'Завершено' && item.controler
			).length
			let del = e.filter(
				(item) => item.status === 'Делегировано' && item.controler
			).length
			temp.push(nach)
			temp.push(rab)
			temp.push(zav)
			temp.push(del)
			const entries = new Map([['data', temp]])
			const obj = Object.fromEntries(entries)
			let ar = []
			ar.push(obj)
			return ar
		}
	}

	// setup() {
	// 	const store = useStore()
	// 	const slides = [
	// 		{ id: 0, name: 'Новое' },
	// 		{ id: 1, name: 'Срочное' },
	// 		{ id: 2, name: 'Важное' },
	// 	]
	// 	let currentSlide = ref(0)
	// 	const slideChange = async () => {
	// 		let result = await document.querySelector('#slides').getActiveIndex()
	// 		currentSlide.value = result
	// 	}
	// 	axios.get('./tasks.json').then((response) => {
	// 		store.commit('setItems', response.data)
	// 	})
	// 	let items = computed(() => store.getters.items)
	// 	let sr1 = computed(() => chart1(items.value))
	// 	let sr2 = computed(() => chart2(items.value))
	// 	let sr3 = computed(() => chart3(items.value))
	// 	const hideTab = () => store.commit('setTabbar', false)
	// 	const showTab = () => store.commit('setTabbar', true)
	// 	return {
	// 		slides,
	// 		currentSlide,
	// 		sr1,
	// 		sr2,
	// 		sr3,
	// 		slideChange,
	// 		hideTab,
	// 		showTab,
	// 	}
	// },
}
</script>

<style scoped lang="scss">
.sl {
	padding-bottom: 1.5rem;
}
</style>
