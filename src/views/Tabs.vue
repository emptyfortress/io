<template lang="pug">
IonPage
	IonTabs(@hello="hello")
		IonTabBar(slot="bottom" :class="{ 'hide' : scroll }")
			IonMenuButton.menu
			IonTabButton(tab="tab1" href="/tabs/tab1")
				IonIcon( :icon="speedometerOutline" )
			IonTabButton(tab="page" href="/tabs/page")
				IonIcon( :icon="folderOpenOutline" )
			IonTabButton(tab="tab2" href="/tabs/tab2")
				IonIcon( :icon="notificationsOutline" )
				IonBadge(color="danger") 20
			IonTabButton(tab="tab3" href="/tabs/tab3")
				IonIcon(:icon="searchOutline")
			IonTabButton(tab="")
	IonFab(vertical="bottom" horizontal="end" slot="fixed").fabb
		IonFabButton(color="danger")
			IonIcon(:icon="addOutline")
</template>

<script>
import {
	IonPage,
	IonTabs,
	IonTabBar,
	IonMenuButton,
	IonBadge,
	IonTabButton,
	IonFab,
	IonFabButton,
	IonIcon,
} from '@ionic/vue'
import {
	menu,
	addOutline,
	folderOpenOutline,
	speedometerOutline,
	addCircleOutline,
	searchOutline,
	notificationsOutline,
} from 'ionicons/icons'

export default {
	props: ['scroll'],
	name: 'Tabs',
	components: {
		IonPage,
		IonTabs,
		IonTabBar,
		IonMenuButton,
		IonBadge,
		IonTabButton,
		IonFab,
		IonFabButton,
		IonIcon,
	},
	data() {
		return {
			menu,
			addOutline,
			folderOpenOutline,
			speedometerOutline,
			addCircleOutline,
			searchOutline,
			notificationsOutline,
		}
	},
	methods: {
		hello() {
			this.$emit('hello')
		},
	},
}
</script>

<style scoped lang="scss">
ion-tab-bar {
	transition: 0.3s ease all;
	&.hide {
		transform: translateY(60px);
	}
	/* border-top: 1px solid var(--ion-color-primary); */
}
.fabb {
	position: fixed;
	bottom: 1rem;
}
</style>
