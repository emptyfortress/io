<template lang="pug">
IonApp
	IonSplitPane(content-id="main")
		IonMenu(side="start" menu-id="left" content-id="main" type="overlay")
			IonContent 
				IonMenuToggle(routerLink="/tabs/page") to page
		IonPage(id="main")
			IonContent
				IonRouterOutlet
				IonTabs
					IonTabBar(slot="bottom")
						IonMenuButton.menu
						IonTabButton(tab="tab1" href="/tabs/tab1")
							IonIcon( :icon="speedometerOutline" )
						IonTabButton(tab="page" href="/tabs/page")
							IonIcon( :icon="folderOpenOutline" )
						IonTabButton(tab="tab2" href="/tabs/tab2")
							IonIcon( :icon="notificationsOutline" )
						IonTabButton(tab="tab3" href="/tabs/tab3")
							IonIcon(:icon="searchOutline")
						IonTabButton(tab="")
			IonFab(vertical="bottom" horizontal="end" slot="fixed").fabb
				IonFabButton(color="danger")
					IonIcon(:icon="addOutline")

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
	IonFooter,
	IonTabs,
	IonTabBar,
	IonMenuButton,
	IonTabButton,
	IonFab,
	IonFabButton,
	IonIcon,
} from '@ionic/vue'
import MainView from '@/views/MainView'
import {
	menu,
	easelOutline,
	speedometerOutline,
	addOutline,
	folderOpenOutline,
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
		IonFooter,
		IonTabs,
		IonTabBar,
		IonMenuButton,
		IonTabButton,
		IonFab,
		IonFabButton,
		IonIcon,
	},
	data() {
		return {
			menu,
			easelOutline,
			speedometerOutline,
			addOutline,
			folderOpenOutline,
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
.fabb {
	position: fixed;
	bottom: 1rem;
}
</style>
