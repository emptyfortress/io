<template lang="pug">
li
	.flex
		img(@click="toggle" src="assets/icons/chevr.svg" v-show="isFolder" :class="{'op' : isOpen}").chevron
		.name {{ item.name}}
		IonBadge(color="primary" v-show="item.badge") 10
	ul(v-show="isOpen" v-if="isFolder")
		TreeItem(class="item" v-for="(child, index) in item.children" :key="index" :item="child")
</template>

<script>
import { IonBadge } from '@ionic/vue'
import {} from 'ionicons/icons'

export default {
	props: {
		item: Object,
	},
	components: { IonBadge },
	data: function() {
		return {
			isOpen: false,
		}
	},
	computed: {
		isFolder: function() {
			return this.item.children && this.item.children.length
		},
	},
	methods: {
		toggle: function() {
			if (this.isFolder) {
				this.isOpen = !this.isOpen
			}
		},
	},
}
</script>

<style scoped lang="scss">
li {
	list-style: none;
}
.flex {
	display: flex;
	width: 100%;
	padding-right: 0.5rem;
}
.name {
	flex-grow: 1;
}
.item {
	display: block;
	font-size: 1.1rem;
	padding: 0.5rem;
	padding-right: 0rem;
	margin: 0;
	cursor: pointer;
	.chevron {
		transition: 0.3s all;
		&.op {
			transform: rotate(90deg);
		}
	}
	ul {
		margin: 0;
		margin-top: 0.5rem;
		padding: 0;
		margin-left: 1.5rem;
	}
}
</style>
