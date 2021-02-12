<template lang="pug">
ion-page
	ion-tabs
		ion-tab-bar( slot="bottom" color="")
			ion-tab-button( tab="tab1" href="/tabs/tab1" )
				ion-icon(src="/assets/img/my.svg")
				ion-label Tab 1
			ion-tab-button( tab="tab2" href="/tabs/tab2" )
				ion-icon( :icon="ellipse" )
				ion-label Tab 2
			ion-tab-button( tab="tab3" href="/tabs/tab3" )
				ion-icon( :icon="square" )
				ion-label Tab 3
</template>

<script>
import {
	IonPage,
	IonTabs,
	IonTabBar,
	IonTabButton,
	IonIcon,
	IonLabel,
} from '@ionic/vue'
import { ellipse, square, triangle } from 'ionicons/icons'

export default {
	name: 'Tabs',
	components: {
		IonPage,
		IonTabs,
		IonTabBar,
		IonTabButton,
		IonIcon,
		IonLabel,
	},
	data() {
		return {
			ellipse,
			square,
			triangle,
		}
	},
	methods: {
		test() {
			console.log('foooo')
		},
	},
	// setup() {
	// 	return {
	// 		ellipse,
	// 		square,
	// 		triangle,
	// 	}
	// }
}
</script>
