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
					IonIcon( :icon="speedometerOutline" )
				IonTabButton(  @click="goNotific")
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
	folderOutline,
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
		IonTabButton,
		IonIcon,
	},
	data() {
		return {
			menu,
			easelOutline,
			speedometerOutline,
			addCircleOutline,
			folderOutline,
			searchOutline,
			notificationsOutline,
		}
	},
	methods: {
		goNotific() {
			this.$router.push('/notifications')
		},
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
	margin-left: 15px;
	margin-right: 12px;
}
</style>
