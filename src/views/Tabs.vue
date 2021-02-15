<template lang="pug">
ion-page.my
	ion-tabs
		ion-tab-bar( slot="bottom").myy
			ion-tab-button( tab="tab1" href="/tabs/tab1" )
				ion-icon(src="assets/icons/line.svg")
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

<style scoped lang="scss">
.my {
	/* --ion-tab-bar-background: #ccc; */
}
ion-tab-bar {
	border-top: 6px solid var(--ion-color-primary);
}
</style>
