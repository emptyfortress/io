<template lang="pug">
.pack(:class="{ 'mov' : !tabbar}")
	IonTabBar(v-if="actionBar")
		IonButton test
	IonTabBar(v-else)
		IonMenuButton.menu
		IonTabButton(tab="home" href="/home")
			IonIcon( :icon="pieChartOutline" )
		IonTabButton(tab="folders" href="/folders")
			IonIcon( src="assets/icons/folderOutline.svg")
		IonTabButton(tab="notifications" href="/notifications")
			IonIcon( :icon="notificationsOutline" )
			IonBadge(color="danger") 20
		IonTabButton(tab="search" href="/search")
			IonIcon(:icon="searchOutline")
		IonTabButton(tab="null")
IonFab(vertical="bottom" horizontal="end" :class="{'mov' : !tabbar}").fabb
	IonFabButton(color="primary" @click="showAdd")
		IonIcon(:icon="addOutline")
IonActionSheet(:is-open="add" header="Albums" :buttons="buttons" @onDidDismiss="showAdd")
</template>

<script>
import {
	IonButton,
	IonTabBar,
	IonMenuButton,
	IonBadge,
	IonTabButton,
	IonFab,
	IonFabButton,
	IonIcon,
	IonActionSheet,
} from '@ionic/vue'
import {
	addOutline,
	searchOutline,
	notificationsOutline,
	folderOpenOutline,
	pieChartOutline,
	menu,
} from 'ionicons/icons'

export default {
	name: 'Tabs',
	components: {
		IonButton,
		IonTabBar,
		IonMenuButton,
		IonBadge,
		IonTabButton,
		IonFab,
		IonFabButton,
		IonIcon,
		IonActionSheet,
	},
	data() {
		return {
			addOutline,
			searchOutline,
			notificationsOutline,
			folderOpenOutline,
			pieChartOutline,
			menu,
			add: false,
			buttons: [
				{
					text: 'Delete',
					role: 'destructive',
					// icon: trash,
					handler: () => {
						// this.$router.push('/tabs/new')
						this.$router.push('/new')
						console.log('Delete clicked')
					},
				},
				{
					text: 'Share',
					// icon: share,
					handler: () => {
						console.log('Share clicked')
					},
				},
				{
					text: 'Play (open modal)',
					// icon: caretForwardCircle,
					handler: () => {
						console.log('Play clicked')
					},
				},
				{
					text: 'Favorite',
					// icon: heart,
					handler: () => {
						console.log('Favorite clicked')
					},
				},
				{
					text: 'Cancel',
					// icon: close,
					role: 'cancel',
					handler: () => {
						console.log('Cancel clicked')
					},
				},
			],
		}
	},
	computed: {
		actionBar() {
			return this.$store.getters.actionBar
		},
		tabClass() {
			if (!this.tabbar) {
				return 'mov'
			} else return ''
		},
		tabbar() {
			return this.$store.getters.tabbar
		},
	},
	methods: {
		showAdd() {
			this.add = !this.add
		},
	},
}
</script>

<style scoped lang="scss">
ion-tab-bar {
	border-top: 1px solid var(--ion-color-primary);
}
.menu {
	margin-left: 1rem;
}
.pack {
	transition: 0.3s ease all;
	&.mov {
		transform: translateY(60px);
	}
}
.fabb {
	transition: 0.3s ease all;
	position: fixed;
	bottom: 1rem;
	&.mov {
		transform: translateX(80px);
	}
}
.tab-has-icon {
	transition: 0.3s ease all;
}
.tab-selected {
	border-top: 3px solid var(--ion-color-primary);
	ion-icon {
		transform: translateY(-3px);
		font-size: 2.1rem;
	}
}

.ionicon svg :host {
	stroke: var(--ion-text-color);
	fill: var(--ion-text-color);
}
</style>
