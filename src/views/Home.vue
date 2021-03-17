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
				Chart(:slide="slide" :series1="ser1")
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
import { mapGetters } from 'vuex'

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
	IonSlide,
	IonRow,
	IonButton,
	IonList,
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
			tasks: [],
		}
	},
	created() {
		axios.get('./tasks.json').then((response) => {
			this.$store.commit('setItems', response.data)
			this.tasks = response.data
		})
	},
	computed: {
		...mapGetters(['selectedChart', 'items']),
		filteredItems() {
			return this.tasks.filter(
				(item) => item.type === this.selectedChart?.label
			)
		},
		total() {
			return this.filteredItems.length
		},
		ser1() {
			let temp = []
			let ozn = this.tasks.filter((item) => item.type === 'На ознакомление')
				.length
			let isp = this.tasks.filter((item) => item.type === 'На исполнение')
				.length
			let vhod = this.tasks.filter((item) => item.type === 'Входящие').length
			temp.push(ozn)
			temp.push(isp)
			temp.push(vhod)
			return temp
		},
	},
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
	methods: {
		async test() {
			let result = await document.querySelector('#slides').getActiveIndex()
			this.currentSlide = result
		},
		rem(e) {
			let all = this.tasks.filter((item) => item.id !== e.id)
			this.tasks = all
			this.$store.commit('setItems', all)
		},
		readAll() {
			this.tasks = this.tasks.filter(
				(item) => item.type !== this.selectedChart.label
			)
			this.$store.commit('setSelectedChart', null)
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
