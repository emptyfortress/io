<template lang="pug">
IonPage
	IonHeader
		IonToolbar
			IonButtons(slot="start")
				IonBackButton
			IonTitle Папка {{ route.params.id }}
	IonContent( :fullscreen="true" :scroll-events="true" @ionScrollStart="hideTab" @ionScrollEnd="showTab")
		IonHeader( collapse="condense" )
			IonToolbar()
				IonTitle( size="large") Папка {{ route.params.id }}
		Breadcrumbs

		.grid
			.left.ion-activatable.ripple-parent
				IonIcon(:icon="arrowUndoOutline" @click="router.go(-1)")
				.tit Назад
				IonRippleEffect
			.right(v-if="route.path !== '/main/folders'")
				IonButton(size="small" @click="test")
					.ion-margin-end
						span(v-if="men") Убрать из
						span(v-if="!men") Добавить в
					IonIcon(:icon="menu")

		routerView

</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
// import { ref } from 'vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'

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
		const test = (() => console.log(route.params))

		return {
			router,
			route,
			hideTab,
			showTab,
			arrowUndoOutline,
			menu,
			test
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

.folder, .left {
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
