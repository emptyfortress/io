<template lang="pug">
IonPage
	IonHeader
		IonToolbar
			IonButtons(slot="start")
				IonBackButton
			IonTitle home small
	IonContent( :fullscreen="true" :scroll-events="true").ion-padding
		IonHeader( collapse="condense" )
			IonToolbar
				IonTitle( size="large" ) Home

</template>

<script>
import { treeData, menuList } from '@/data.js'
import {
	IonPage,
	IonButtons,
	IonBackButton,
	IonContent,
	IonHeader,
	IonToolbar,
	IonTitle,
} from '@ionic/vue'

import {} from 'ionicons/icons'
import TreeItem from '@/components/TreeItem'

export default {
	data() {
		return {
			treeData,
			menuList,
		}
	},
	components: {
		TreeItem,
		IonPage,
		IonButtons,
		IonBackButton,
		IonContent,
		IonHeader,
		IonToolbar,
		IonTitle,
	},
	methods: {},
}
</script>

<style scoped lang="scss">
.tree {
	list-style: none;
	padding: 0;
	margin: 0;
}
</style>
