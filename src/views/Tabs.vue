<template lang="pug">
.pack(:class="{ 'mov' : !tabbar}")
	IonTabBar
		IonMenuButton.menu
		IonTabButton(tab="home" href="/home")
			IonIcon( :icon="speedometerOutline" )
		IonTabButton(tab="folders" href="/folders")
			IonIcon( :icon="folderOpenOutline")
		IonTabButton(tab="notifications" href="/notifications")
			IonIcon( :icon="notificationsOutline" )
			IonBadge(color="danger") 20
		IonTabButton(tab="search" href="/search")
			IonIcon(:icon="searchOutline")
		IonTabButton(tab="")
IonFab(vertical="bottom" horizontal="end" :class="{'mov' : !tabbar}").fabb
	IonFabButton(color="primary" @click="showAdd")
		IonIcon(:icon="addOutline")
IonActionSheet(:is-open="add" header="Albums" :buttons="buttons" @onDidDismiss="showAdd")
</template>

<script>
import {
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
	menu,
	addOutline,
	folderOpenOutline,
	speedometerOutline,
	addCircleOutline,
	searchOutline,
	notificationsOutline,
} from 'ionicons/icons'

export default {
	name: 'Tabs',
	components: {
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
			add: false,
			menu,
			addOutline,
			folderOpenOutline,
			speedometerOutline,
			addCircleOutline,
			searchOutline,
			notificationsOutline,
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
</style>
