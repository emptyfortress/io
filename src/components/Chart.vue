<template lang="pug">
IonCard
	IonCardContent
		IonCardTitle(color="primary")
			.title {{ slide.name }}
		apexchart(v-if="slide.id === 0" height="240" :options="chart1" :series="series1")
		apexchart(v-else-if="slide.id === 1"  height="220" :options="chart2" :series="series2")
		apexchart(v-else  height="220" :options="chart3" :series="series3")
</template>

<script>
import { IonCard, IonCardContent, IonCardTitle } from '@ionic/vue'
import {} from 'ionicons/icons'
import VueApexCharts from 'vue3-apexcharts'
import { chart1, chart2, chart3, series1, series2, series3 } from '@/chart.js'

export default {
	props: { slide: Object },
	data() {
		return {
			chart1,
			series1,
			chart2,
			series2,
			chart3,
			series3,
		}
	},
	components: {
		apexchart: VueApexCharts,
		IonCard,
		IonCardContent,
		IonCardTitle,
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
