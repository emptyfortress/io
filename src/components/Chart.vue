<template lang="pug">
IonCard
	IonCardContent
		IonCardTitle(color="primary")
			.title {{ slide.name }}
		apexchart(v-if="slide.id === 0" height="240" :options="chart1" :series="series1" @select="select1")
		apexchart(v-else-if="slide.id === 1"  height="220" :options="chart2" :series="series2")
		apexchart(v-else  height="220" :options="chart3" :series="series3")
</template>

<script>
import { IonCard, IonCardContent, IonCardTitle } from '@ionic/vue'
import {} from 'ionicons/icons'
import VueApexCharts from 'vue3-apexcharts'
import { charts } from '@/mixins/chartData.js'

export default {
	props: ['slide', 'series1', 'series2', 'series3'],
	mixins: [charts],
	components: {
		apexchart: VueApexCharts,
		IonCard,
		IonCardContent,
		IonCardTitle,
	},
	data() {
		return {
			// series1: [4, 5, 12],
			/* series2: [{ data: [1, 4, 2, 7] }], */
			// series3: [{ data: [8, 11, 3, 1] }],
		}
	},
	methods: {
		select1(e) {
			let smile = e.selectedDataPoints[0].length
			if (smile > 0) {
				this.$store.commit('setSelectedChart', {
					label: e.w.config.labels[e.dataPointIndex],
					index: e.dataPointIndex,
				})
			} else {
				this.$store.commit('setSelectedChart', null)
				console.log(e.dataPointIndex)
			}
		},
	},
}
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
