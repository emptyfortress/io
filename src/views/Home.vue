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
		IonSlides(pager="true" :options="slideOpts").sl
			IonSlide
				IonCard
					IonCardHeader
						p header
					IonCardContent
						IonCardSubtitle
							p suttitle
						IonCardTitle
							p title
			IonSlide
				h1 Slide 2
			IonSlide
				h1 Slide 3
		IonList
			IonItem(v-for="n in 30")
				IonLabel item {{ n }}
</template>

<script>
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
			// slideOpts: {
			// 	initialSlide: 2,
			// 	speed: 400,
			// },
		}
	},
	components: {
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
	methods: {},
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
	height: 60%;
	padding-bottom: 0.5rem;
}
</style>
