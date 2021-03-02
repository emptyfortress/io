<template lang="pug">
IonPage
	IonTabs
		IonTabBar( slot="bottom")
			IonTabButton(tab="tab1" href="#")
				IonMenuButton
			IonTabButton( tab="tab2" href="/" )
				IonIcon( :icon="easelOutline" )
			IonTabButton( tab="tab3" href="#" @click="test")
				IonIcon( :icon="notificationsOutline" )
			IonTabButton( tab="tab4" href="#" )
				IonIcon( :icon="addCircleOutline" )
			IonTabButton( tab="tab4" href="/tabs/tab3" )
				IonIcon( :icon="searchOutline" )
</template>

<script>
import {
	IonPage,
	IonTabs,
	IonTabBar,
	IonMenuButton,
	IonTabButton,
	IonIcon,
} from '@ionic/vue'
import {
	menu,
	easelOutline,
	speedometerOutline,
	addCircleOutline,
	searchOutline,
	notificationsOutline,
} from 'ionicons/icons'

export default {
	name: 'Tabs',
	components: {
		IonPage,
		IonTabs,
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
			searchOutline,
			notificationsOutline,
		}
	},
	methods: {
		test() {
			console.log('foooo')
		},
	},
}
</script>

<style scoped lang="scss">
ion-tab-bar {
	/* border-top: 1px solid var(--ion-color-primary); */
}
</style>
