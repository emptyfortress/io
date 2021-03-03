<template lang="pug">
IonApp
	IonSplitPane(content-id="main")
		IonMenu(side="start" menu-id="left" content-id="main" type="overlay")
			IonContent
				IonList.bot
					IonItem(v-for="n in 3") Menu Item
					IonItem
						IonMenuToggle(routerLink="/tabs/page") to page
		IonPage(id="main")
			IonContent
				Tabs
	IonMenu( side="end" menu-id="right" content-id="main" type="push")
		IonHeader 
			IonToolbar( color="primary" )
				IonTitle Start Menu
		IonContent 
			IonList 
				IonItem(v-for="n in 30") Menu Item

</template>

<script>
import Tabs from '@/views/Tabs.vue'
import {
	IonApp,
	IonSplitPane,
	IonMenuToggle,
	IonPage,
	IonRouterOutlet,
	IonMenu,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonList,
	IonItem,
} from '@ionic/vue'
import MainView from '@/views/MainView'

export default {
	name: 'App',
	components: {
		Tabs,
		MainView,
		IonApp,
		IonSplitPane,
		IonMenuToggle,
		IonPage,
		IonRouterOutlet,
		IonMenu,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonList,
		IonItem,
	},
	data() {
		return {}
	},
	methods: {
		test() {
			console.log('foooo')
		},
	},
}
</script>

<style scoped lang="scss">
.bot {
	position: absolute;
	bottom: 0;
	width: 100%;
}
</style>
