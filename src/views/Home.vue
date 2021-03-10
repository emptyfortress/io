<template lang="pug">
IonPage
	IonHeader
		IonToolbar
			IonTitle Home
	IonContent
		img(src="assets/icons/lock.svg" color="primary").re
		ul.tree
			TreeItem(class="item" :item="treeData" @make-folder="makeFolder" @add-item="addItem")

</template>

<script>
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
} from '@ionic/vue'

import {} from 'ionicons/icons'
import TreeItem from '@/components/TreeItem'

export default {
	data() {
		return {
			treeData: {
				name: 'My Tree',
				children: [
					{ name: 'hello' },
					{ name: 'wat' },
					{
						name: 'child folder',
						selected: true,
						children: [
							{
								name: 'child folder',
								children: [{ name: 'badge', badge: 5 }, { name: 'wat' }],
							},
							{ name: 'hello' },
							{ name: 'wat' },
							{
								name: 'child folder',
								children: [{ name: 'hello' }, { name: 'wat' }],
							},
						],
					},
				],
			},
		}
	},
	components: {
		TreeItem,
		IonPage,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
	},
	methods: {
		makeFolder: function(item) {
			item.children = []
			this.addItem(item)
		},
		addItem: function(item) {
			item.children.push({
				name: 'new stuff',
			})
		},
	},
}
</script>

<style scoped lang="scss">
.tree {
	list-style: none;
	padding: 0.5rem;
	margin-left: 0rem;
 }
.re path {
	fill: red;
 }
</style>
