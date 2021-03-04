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
			IonContent(:fullscreen="true")
				//- Tabs
				IonRouterOutlet
					IonTabs
			IonFooter
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
	IonFooter,
	IonTabBar,
	IonTabButton,
	IonLabel,
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
		MainView,
		Tabs,
		IonApp,
		IonSplitPane,
		IonMenuToggle,
		IonPage,
		IonRouterOutlet,
		IonFooter,
		IonTabBar,
		IonTabButton,
		IonLabel,
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
	computed: {
		tabbar() {
			return this.$store.getters.tabbar
		},
	},
	methods: {},
}
</script>

<style scoped lang="scss">
.bot {
	position: absolute;
	bottom: 0;
	width: 100%;
}
.pack {
	transition: 0.3s ease all;
	&.mov {
		transform: translateY(60px);
	}
}
.footer-md::before {
	background: none;
}
</style>
