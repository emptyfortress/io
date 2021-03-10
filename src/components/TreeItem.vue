<template lang="pug">
li
	.flex(:class="{'sel' : item.selected}")
		img(@click="toggle" src="assets/icons/chevr.svg" v-show="isFolder" :class="{'op' : isOpen}").chevron
		.myripple.ion-activatable.ripple-parent
			.name {{ item.name}}
			IonRippleEffect
		IonBadge(color="primary" v-show="item.badge") 10
	ul(v-show="isOpen" v-if="isFolder")
		TreeItem(class="item" v-for="(child, index) in item.children" :key="index" :item="child")
</template>

<script>
import { IonBadge, IonRippleEffect } from '@ionic/vue'
import {} from 'ionicons/icons'

export default {
	props: {
		item: Object,
	},
	components: { IonBadge, IonRippleEffect },
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
	position: relative;
	display: flex;
	width: 100%;
	padding: 0.5rem;
	margin: 0;
	cursor: pointer;
	&.sel {
		background: var(--ion-color-selection);
	}
}
.name {
	flex-grow: 1;
}
.myripple {
	width: 100%;
}
.item {
	font-size: 1.1rem;
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
