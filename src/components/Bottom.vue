<template lang="pug">
div(v-if="currentSlide === 0")
	h5(v-if="selectedPie === null") Новые задания и документы
	//- IonRow(v-else).ion-justify-content-between.ion-padding-start.ion-align-items-center
		.tot {{ selectedPie.label }}
			span ({{ selectedPie.val }})
		IonButton(fill="clear" size="small" @click="readAll") Прочитать все

div(v-else-if="currentSlide === 1")
	h5(v-if="selectedBar === null") Истекают сроки исполнения
	//- IonRow(v-else).ion-justify-content-between.ion-padding-start.ion-align-items-center
		.tot {{ selectedBar.label }}
			span ({{ selectedBar.val }})
		IonButton(fill="clear" size="small" @click="readAll") Прочитать все

div(v-else-if="currentSlide === 2")
	h5(v-if="selectedBar1 === null") Задания и документы на контроле
	//- IonRow(v-else).ion-justify-content-between.ion-padding-start.ion-align-items-center
		.tot {{ selectedBar1.label }}
			span ({{ selectedBar1.val }})
		IonButton(fill="clear" size="small" @click="readAll") Прочитать все

IonList(v-show="selectedPie !== null || selectedBar !== null || selectedBar1 !== null" lines="full").mol
	transition-group(name="listX")
		SlideItem(v-for="item in filteredItems" @swipe="rem(item)" @read="rem(item)" :key="item.id" :item="item")
</template>

<script>
import { IonRow, IonButton, IonList } from '@ionic/vue'
import {} from 'ionicons/icons'
import axios from 'axios'
import SlideItem from '@/components/SlideItem'
import { mapGetters } from 'vuex'

export default {
	components: { axios, SlideItem, IonRow, IonButton, IonList },
	props: {
		currentSlide: Number,
	},
	data() {
		return {}
	},
	computed: {
		...mapGetters(['items', 'selectedPie', 'selectedBar', 'selectedBar1']),
		filteredItems() {
			if (this.currentSlide === 0) {
				return this.items?.filter(
					(item) => item.type === this.selectedPie?.label
				)
			} else return null
		},
	},
	methods: {
		rem(e) {
			let all = this.items?.filter((item) => item.id !== e.id)
			this.$store.commit('setItems', all)
		},
		readAll() {
			// let all = this.items.filter(
			// 	(item) => item.type !== this.selectedPie?.label
			//)
			// this.$store.commit('setItems', all)
			console.log(this.items)
			// this.$store.commit('setSelectedPie', null)
		},
	},
}
</script>

<style scoped lang="scss">
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
