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
		IonSlides(pager="true" id="slides" @ionSlideDidChange="test").sl
			IonSlide(v-for="slide in slides")
				Chart(:slide="slide" :series1="ser1" :series2="ser2" :series3="ser3")
		div(v-if="currentSlide === 0")
			h5(v-if="selectedChart === null") Новые задания и документы
			IonRow(v-else).ion-justify-content-between.ion-padding-start.ion-align-items-center
				.tot {{ selectedChart.label }}
					span ({{ total }})
				IonButton(fill="clear" size="small" @click="readAll") Прочитать все
		h5(v-else-if="currentSlide === 1") Истекают сроки исполнения
		h5(v-else-if="currentSlide === 2") Задания и документы на контроле
		IonList(v-show="currentSlide === 0 && selectedChart !== null" lines="full").mol
			transition-group(name="listX")
				SlideItem(v-for="item in filteredItems" @swipe="rem(item)" @read="rem(item)" :key="item.id" :item="item")
</template>

<script>
import TreeItem from '@/components/TreeItem'
import Chart from '@/components/Chart'
import SlideItem from '@/components/SlideItem'
import axios from 'axios'

import {
	IonPage,
	IonButtons,
	IonBackButton,
	IonContent,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonSlides,
	IonSlide,
	IonRow,
	IonButton,
	IonList,
} from '@ionic/vue'

import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
	components: {
		axios,
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
		IonSlide,
		IonRow,
		IonButton,
		IonList,
	},

	setup() {
		const store = useStore()
		const slides = [
			{ id: 0, name: 'Новое' },
			{ id: 1, name: 'Срочное' },
			{ id: 2, name: 'Важное' },
		]
		let currentSlide = ref(0)

		let tasks = ref([])
		axios.get('./tasks.json').then((response) => {
			store.commit('setItems', response.data)
			tasks.value = response.data
		})
		let filteredItems = computed(() => {
			return tasks.value.filter(
				(item) => item.type === selectedChart.value?.label
			)
		})

		let total = computed(() => filteredItems.value.length)

		let selectedChart = computed(() => {
			return store.getters.selectedChart
		})

		let ser1 = computed(() => {
			let temp = []
			let ozn = tasks.value.filter((item) => item.type === 'На ознакомление')
				.length
			let isp = tasks.value.filter((item) => item.type === 'На исполнение')
				.length
			let vhod = tasks.value.filter((item) => item.type === 'Входящие').length
			temp.push(ozn)
			temp.push(isp)
			temp.push(vhod)
			return temp
		})
		let ser2 = computed(() => {
			let temp = []
			let nach = tasks.value.filter((item) => item.deadline === 'Вчера').length
			let rab = tasks.value.filter((item) => item.deadline === 'Сегодня').length
			let zav = tasks.value.filter((item) => item.deadline === 'Завтра').length
			let del = tasks.value.filter((item) => item.deadline === 'На неделе')
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
		})
		let ser3 = computed(() => {
			let temp = []
			let nach = tasks.value.filter(
				(item) => item.status === 'Не начато' && item.controler
			).length
			let rab = tasks.value.filter(
				(item) => item.status === 'В работе' && item.controler
			).length
			let zav = tasks.value.filter(
				(item) => item.status === 'Завершено' && item.controler
			).length
			let del = tasks.value.filter(
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
		})

		const test = async () => {
			let result = await document.querySelector('#slides').getActiveIndex()
			currentSlide.value = result
		}

		const rem = (e) => {
			let all = tasks.value.filter((item) => item.id !== e.id)
			tasks.value = all
			store.commit('setItems', all)
		}

		const readAll = () => {
			tasks.value = tasks.value.filter(
				(item) => item.type !== selectedChart.value?.label
			)
			store.commit('setSelectedChart', null)
		}

		return {
			slides,
			currentSlide,
			total,
			filteredItems,
			ser1,
			ser2,
			ser3,
			test,
			rem,
			readAll,
			selectedChart,
		}
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
	font-weight: bold;
}
.mol {
	margin-bottom: 4rem;
}
.tot {
	font-weight: 600;
	font-size: 1rem;
	span {
		font-weight: 400;
		margin-left: 0.5rem;
	}
}
</style>
