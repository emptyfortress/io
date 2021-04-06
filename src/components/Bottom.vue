<template lang="pug">
div(v-if="currentSlide === 0")
	template(v-if="selectedPie === null")
		h5 Новые задания и документы
		img(src="assets/img/newsletters.svg").news
	IonRow(v-else).ion-justify-content-between.ion-padding-start.ion-align-items-center
		.tot {{ selectedPie.label }}
			span ({{ total1  }})
		IonButton(fill="clear" size="small" @click="readAll") Прочитать все

	IonList(v-show="selectedPie !== null" lines="full").mol
		transition-group(name="listX")
			SlideItem(v-for="item in filteredItems" @swipe="rem(item)" @read="rem(item)" :key="item.id" :item="item")

div(v-else-if="currentSlide === 1")
	template(v-if="selectedBar === null")
		h5  Истекают сроки исполнения
		img(src="assets/img/time.svg").news
	IonRow(v-else).ion-justify-content-between.ion-padding-start.ion-align-items-center
		.tot {{ selectedBar.label }}
			span ({{ total2 }})
		IonButton(fill="clear" size="small" @click="readAll") Прочитать все

	IonList(v-show="selectedBar !== null" lines="full").mol
		transition-group(name="listX")
			SlideItem(v-for="item in filteredItems" @swipe="rem(item)" @read="rem(item)" :key="item.id" :item="item")

div(v-else-if="currentSlide === 2")
	template(v-if="selectedBar1 === null")
		h5   Задания и документы на контроле
		img(src="assets/img/control.svg").news
	IonRow(v-else).ion-justify-content-between.ion-padding-start.ion-align-items-center
		.tot {{ selectedBar1.label }}
			span ({{ total3 }})
		IonButton(fill="clear" size="small" @click="readAll") Прочитать все

</template>

<script>
import { IonRow, IonButton, IonList } from '@ionic/vue'
import {} from 'ionicons/icons'
import SlideItem from '@/components/SlideItem'
import { mapGetters } from 'vuex'

export default {
	components: { SlideItem, IonRow, IonButton, IonList },
	props: {
		currentSlide: Number,
	},
	computed: {
		...mapGetters(['items', 'total1', 'total2', 'total3', 'selectedPie', 'selectedBar', 'selectedBar1']),
		filteredItems() {
			if (this.currentSlide === 0) {
				return this.items?.filter(
					(item) => item.type === this.selectedPie?.label
				)
			} else if (this.currentSlide === 1) {
				return this.items?.filter(
					(item) => item.dead === this.selectedBar?.label
				)
			} else return this.items
		},
	},
	methods: {
		rem(e) {
			let all = this.items?.filter((item) => item.id !== e.id)
			this.$store.commit('setItems', all)
			this.$store.commit('decrementTotal')
		},
		readAll() {
			let all = this.items.filter(
				(item) => item.type !== this.selectedPie?.label
			)
			this.$store.commit('setItems', all)
			this.$store.commit('setSelectedPie', null)
		},
	},
}
</script>

<style scoped lang="scss">
h5 {
	text-align: center;
	font-weight: bold;
	font-size: 1.1rem;
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
.news {
	width: 40%;
	display: block;
	margin: 1rem auto;
}
</style>
