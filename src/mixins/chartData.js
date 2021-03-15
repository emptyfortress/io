const charts = {
	data() {
		return {
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
						dataPointSelection: (_, __, config) => {
							// console.log(config)
							// console.log('my')
							// console.log(config.selectedDataPoints[0].length)
							this.select1(config)
						},
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
			chart2: {
				chart: { type: 'bar' },
				plotOptions: {
					bar: {
						horizontal: true,
					},
				},
				dataLabels: {
					enabled: false,
				},
				xaxis: {
					categories: [
						'Просрочено',
						'Срок сегодня',
						'Срок завтра',
						'На неделе',
					],
				},
				fill: {
					type: 'gradient',
					gradient: {
						shade: 'light',
						type: 'vertical',
						shadeIntensity: 0.25,
						gradientToColors: undefined,
						inverseColors: true,
						opacityFrom: 0.85,
						opacityTo: 0.85,
						stops: [50, 0, 100],
					},
				},
			},
			chart3: {
				chart: {
					type: 'bar',
				},
				plotOptions: {
					bar: {
						horizontal: true,
					},
				},
				dataLabels: {
					enabled: false,
				},
				xaxis: {
					categories: ['Не начато', 'В работе', 'Завершено', 'Делегировано'],
				},
				fill: {
					type: 'gradient',
					gradient: {
						shade: 'light',
						type: 'vertical',
						shadeIntensity: 0.25,
						gradientToColors: undefined,
						inverseColors: true,
						opacityFrom: 0.85,
						opacityTo: 0.85,
						stops: [50, 0, 100],
					},
				},
			},
		}
	},
}

export { charts }
