<template lang="pug">
li
	.flex(:class="{'sel' : item.selected}")
		.chevron(@click="toggle"  v-show="isFolder" :class="{'open' : isOpen}")
			IonIcon(:icon="chevronForwardOutline")
		.myripple.ion-activatable.ripple-parent
			.name {{ item.name}}
			IonRippleEffect
		IonBadge(color="primary" v-show="item.badge") 10
	transition(name="slidex" mode="out-in")
		ul(v-show="isOpen" v-if="isFolder")
			TreeItem(class="item" v-for="(child, index) in item.children" :key="index" :item="child")
</template>

<script>
import { IonIcon, IonRippleEffect, IonBadge } from '@ionic/vue'
import { chevronForwardOutline } from 'ionicons/icons'

export default {
	props: {
		item: Object,
	},
	components: { IonIcon, IonRippleEffect, IonBadge },
	data: function() {
		return {
			chevronForwardOutline,
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
		margin-right: 0.3rem;
		&.open {
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
