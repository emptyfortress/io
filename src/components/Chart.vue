<template lang="pug">
IonCard
	IonCardContent
		IonCardTitle(color="primary")
			.title {{ slide.name }}
		apexchart(v-if="slide.id === 0" height="240" :options="chart1" :series="series1" @click="test1" id="chart1")
		apexchart(v-else-if="slide.id === 1"  height="220" :options="chart2" :series="series2")
		apexchart(v-else  height="220" :options="chart3" :series="series3")
</template>

<script>
import { IonCard, IonCardContent, IonCardTitle } from '@ionic/vue'
import {} from 'ionicons/icons'
import VueApexCharts from 'vue3-apexcharts'
import { chart2, chart3, series1, series2, series3 } from '@/chart.js'

export default {
	props: { slide: Object },
	data() {
		return {
			// chart1,
			series1,
			chart2,
			series2,
			chart3,
			series3,
			chart1: {
				theme: {
					monochrome: {
						enabled: true,
						color: '#37A5F7',
						shadeTo: 'light',
						shadeIntensity: 0.65,
					},
				},
				plotOptions: {
					pie: {
						donut: {
							size: '65%',
							background: 'transparent',
							labels: {
								show: true,
								name: {
									show: true,
									fontSize: '15px',
									fontFamily: 'Helvetica, Arial, sans-serif',
									fontWeight: 400,
									color: 'black',
									offsetY: -10,
									formatter: function(val) {
										return val
									},
								},
								value: {
									show: true,
									fontSize: '21px',
									fontFamily: 'Helvetica, Arial, sans-serif',
									fontWeight: 600,
									color: undefined,
									offsetY: 3,
									formatter: function(val) {
										return val
									},
								},
								total: {
									show: true,
									showAlways: false,
									label: 'Всего',
									fontSize: '15px',
									fontFamily: 'Helvetica, Arial, sans-serif',
									fontWeight: 400,
									color: 'black',
									formatter: function(w) {
										return w.globals.seriesTotals.reduce((a, b) => {
											return a + b
										}, 0)
									},
								},
							},
						},
					},
				},
				legend: {
					show: false,
					position: 'bottom',
				},
				dataLabels: {
					enabled: false,
					formatter: function(value, { seriesIndex, w }) {
						return w.config.series[seriesIndex]
					},
				},
				chart: {
					toolbar: {
						show: true,
					},
					background: 'none',
					type: 'donut',
					events: {
						dataPointSelection: (e, a, config) => {
							this.test(config.dataPointIndex)
							// console.log(e, a, config)
						},
						// dataPointSelection: function(e, a, config) {
						// 	mytest(config.dataPointIndex)
						// 	console.log(e, a, config)
						// },
					},
				},
				labels: ['На ознакомление', 'На исполнение', 'Входящие'],
				fill: {
					type: 'gradient',
				},
				tooltip: {
					enabled: false,
				},
			},
		}
	},
	components: {
		apexchart: VueApexCharts,
		IonCard,
		IonCardContent,
		IonCardTitle,
	},
	methods: {
		test(a) {
			// console.log(a)
			console.log('fuuuuuuuuuuuuoooo ' + a)
		},
	},
}
// function mytest(e) {
// 	console.log('foooo ' + e)
// }
</script>

<style scoped lang="scss">
.title {
	font-size: 1.3rem;
	font-weight: 400;
	text-transform: uppercase;
	text-align: left;
}
ion-card {
	width: 100%;
	max-width: 600px;
	height: 260px;
	background: var(--ion-color-primary-contrast);
	.dark & {
		background: var(--ion-color-step-100);
		border: 1px solid var(--ion-color-step-200);
	}
}
</style>
