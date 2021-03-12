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
				IonCard
					IonCardContent
						IonCardTitle(color="primary")
							.tit {{ slide.name }}
						apexchart(width="280" :options="chartOptions" :series="series").char
		IonList
			IonItem(v-for="n in 30")
				IonLabel item {{ n }}
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'
import { treeData, menuList } from '@/data.js'
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

export default {
	data() {
		return {
			treeData,
			menuList,
			slides: [{ name: 'Новое' }, { name: 'Срочное' }, { name: 'Важное' }],
			chartOptions: {
				colors: [
					'#aeb8c2',
					'#99a3ad',
					'#7c858d',
					'#66707a',
					'#535c65',
					'#40474f',
				],
				legend: {
					show: false,
				},
				dataLabels: {
					enabled: true,
				},
				chart: {
					background: 'none',
					id: 'vuechart-example',
					type: 'donut',
					events: {
						dataPointSelection: function(e, a, config) {
							console.log(config.dataPointIndex)
						},
					},
				},
				labels: ['Новые', 'Просрочено', 'Завершено', 'В работе'],
			},
			series: [44, 55, 41, 77],
		}
	},
	components: {
		apexchart: VueApexCharts,
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
			console.log(result)
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
ion-card {
	width: 100%;
	height: 100%;
	background: var(--ion-color-primary-contrast);
	.dark & {
		background: var(--ion-color-step-100);
		border: 1px solid var(--ion-color-step-200);
	}
}
.sl {
	padding-bottom: 1.5rem;
}
.tit {
	font-size: 1.3rem;
	font-weight: 400;
	text-transform: uppercase;
	text-align: left;
}
</style>
