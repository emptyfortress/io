<template lang="pug">
.up.ion-activatable.ripple-parent(@click="go()" :class="centr" )
	IonIcon(:src="`assets/icons/${cell.icon}.svg`")
	.tit {{ cell.title }}
	IonRippleEffect
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
// import { useStore } from 'vuex'
import { IonIcon, IonRippleEffect } from '@ionic/vue'
import {
	arrowUndoOutline,
} from 'ionicons/icons'

export default {
	props: {
		cell: Object
	},
	components: {
		IonRippleEffect,
		IonIcon,
	},
	setup (props) {
		const router = useRouter()
		const go = () => router.push(props.cell.url)

		const centr = computed(() =>  props.cell.id === 4 ? 'fold' : '')

		return {
			router,
			arrowUndoOutline,
			centr,
			go,
		}
	}
}
</script>

<style lang="scss">
.up {
	font-size: 1rem;
	text-align: center;
	cursor: pointer;
	position: relative;
	padding: 1rem;
	ion-icon {
		font-size: 3rem;
		color: var(--ion-color-primary);
	}
	&.fold {
		grid-column: 1/-1;
		ion-icon {
			color: #e7bd86;
			.dark & {
				color: var(--ion-color-text);
			}
		}
	}
}
</style>
