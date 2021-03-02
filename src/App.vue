<template lang="pug">
IonApp
	IonSplitPane(content-id="main")
		IonMenu(side="start" menu-id="left" content-id="main" type="overlay")
			IonContent 
				IonMenuToggle(routerLink="/page") to page
		IonPage(id="main")
			IonContent
				IonRouterOutlet
			IonTabBar(slot="bottom")
				IonMenuButton.menu
				IonTabButton(@click="goHome")
					IonIcon( :icon="easelOutline" )
				IonTabButton(  @click="test")
					IonIcon( :icon="notificationsOutline" )
				IonTabButton( @click="test" )
					IonIcon( :icon="addCircleOutline" )
				IonTabButton(@click="test")
					IonIcon(:icon="searchOutline")

</template>

<script>
import {
	IonApp,
	IonSplitPane,
	IonMenu,
	IonMenuToggle,
	IonPage,
	IonContent,
	IonRouterOutlet,
	IonTabBar,
	IonMenuButton,
	IonTabButton,
	IonIcon,
} from '@ionic/vue'
import MainView from '@/views/MainView'
import {
	menu,
	easelOutline,
	speedometerOutline,
	addCircleOutline,
	searchOutline,
	notificationsOutline,
} from 'ionicons/icons'

export default {
	name: 'App',
	components: {
		MainView,
		IonApp,
		IonSplitPane,
		IonMenu,
		IonMenuToggle,
		IonPage,
		IonContent,
		IonRouterOutlet,
		IonTabBar,
		IonMenuButton,
		notificationsOutline,
		IonTabButton,
		IonIcon,
	},
	data() {
		return {
			menu,
			easelOutline,
			speedometerOutline,
			addCircleOutline,
			searchOutline,
			notificationsOutline,
		}
	},
	methods: {
		goHome() {
			this.$router.push('/')
		},
		test() {
			console.log('foooo')
		},
	},
}
</script>

<style scoped lang="scss">
.menu {
	font-size: 1.5rem;
	margin-left: 20px;
}
</style>
