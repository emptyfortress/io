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

	RightMenu

</template>

<script>
import RightMenu from '@/components/RightMenu'

import Tabs from '@/views/Tabs.vue'
import {
	IonApp,
	IonSplitPane,
	IonMenu,
	IonList,
	IonItem,
	IonMenuToggle,
	IonPage,
	IonContent,
	IonRouterOutlet,
	IonTabs,
	IonFooter,
} from '@ionic/vue'

export default {
	name: 'App',
	components: {
		Tabs,
		RightMenu,
		IonApp,
		IonSplitPane,
		IonMenu,
		IonList,
		IonItem,
		IonMenuToggle,
		IonPage,
		IonContent,
		IonRouterOutlet,
		IonTabs,
		IonFooter,
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
