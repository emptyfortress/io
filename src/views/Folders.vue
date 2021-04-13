<template lang="pug">
IonPage
	IonHeader
		IonToolbar
			IonButtons(slot="start")
				IonBackButton
			IonTitle {{ route.meta.title }}
	IonContent( :fullscreen="true" :scroll-events="true" @ionScrollStart="hideTab" @ionScrollEnd="showTab")
		IonHeader( collapse="condense" )
			IonToolbar()
				IonTitle( size="large") {{ route.meta.title }} 
		Breadcrumbs

		.grid
			.left.ion-activatable.ripple-parent
				IonIcon(:icon="arrowUndoOutline" @click="router.go(-1)")
				.tit Назад
				IonRippleEffect

		.grid1
			.folder.ion-activatable.ripple-parent(v-for="dir in dirs" :key="dir.id" @click="router.push(dir.url)")
				IonIcon(src="assets/icons/folder.svg").fl
				.tit(:class="{dot : dir.menu}") {{ dir.name }}
				IonRippleEffect

</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

import {
	IonPage,
	IonButtons,
	IonButton,
	IonBackButton,
	IonContent,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonIcon,
	IonRippleEffect,
} from '@ionic/vue'
import { arrowUndoOutline, menu } from 'ionicons/icons'

export default {
	components: {
		IonPage,
		IonButtons,
		IonButton,
		IonBackButton,
		IonContent,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonIcon,
		IonRippleEffect,
		Breadcrumbs,
	},
	setup () {
		const hideTab = () => store.commit('setTabbar', false)
		const showTab = () => store.commit('setTabbar', true)

		const router = useRouter()
		const route = useRoute()
		const store = useStore()

		const dirs = computed(() => store.getters.dirs)

		return {
			router,
			route,
			hideTab,
			showTab,
			arrowUndoOutline,
			menu,
			dirs
		}
	}
}
</script>

<style lang="scss">
.grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	gap: 1rem;
	margin-bottom: 2rem;
	margin-top: 5rem;
}
.folder,
.left {
	font-size: 0.9rem;
	text-align: center;
	cursor: pointer;
	position: relative;
	padding: .5rem 0;
	ion-icon {
		font-size: 2rem;
		color: var(--ion-color-primary);
	}
	.fl {
		font-size: 4rem;
		color: #e7bd86;
		.dark & {
			color: var(--ion-color-text);
		}
	}
}
.grid1 {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	align-items: center;
	gap: 1rem;
	.dot:before {
		content: '';
		width: 8px;
		height: 8px;
		display: inline-block;
		border-radius: 50%;
		margin-right: .25rem;
		background: var(--ion-color-primary);
	}
}
</style>
