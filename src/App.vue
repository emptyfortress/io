<template lang="pug">
IonApp
	IonSplitPane(content-id="main")
		LeftDrawer
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
import LeftDrawer from '@/components/LeftDrawer'

import Tabs from '@/views/Tabs.vue'
import {
	IonApp,
	IonSplitPane,
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
		LeftDrawer,
		RightMenu,
		IonApp,
		IonSplitPane,
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

<style scoped lang="scss"></style>
