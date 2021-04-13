<template lang="pug">
IonPage(v-if="dir")
	IonHeader
		IonToolbar
			IonButtons(slot="start")
				IonBackButton
			IonTitle {{  dir.name }}
	IonContent( :fullscreen="true" :scroll-events="true" @ionScrollStart="hideTab" @ionScrollEnd="showTab")
		IonHeader( collapse="condense" )
			IonToolbar()
				IonTitle( size="large") {{ dir.name }}
		Breadcrumbs

		.grid
			.left.ion-activatable.ripple-parent
				IonIcon(:icon="arrowUndoOutline" @click="router.go(-1)")
				.tit Назад
				IonRippleEffect
			.right(v-if="route.path !== '/main/folders'")
				IonButton(size="small" @click="foldMenu")
					.ion-margin-end
						span(v-if="dir.menu") Убрать из
						span(v-if="!dir.menu") Добавить в
					IonIcon(:icon="menu")

		.grid1
			.folder.ion-activatable.ripple-parent(v-for="n in 4" :key="n" )
				IonIcon(src="assets/icons/folder.svg").fl
				.tit Папка {{ n }}
				IonRippleEffect

		br
		IonList(lines="full").mol
			transition-group(name="listX")
				SlideItemDumb(v-for="n in 20")

		//- routerView

</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import SlideItemDumb from '@/components/SlideItemDumb.vue'

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
	IonList,
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
		IonList,
		SlideItemDumb,
	},
	setup () {
		const hideTab = () => store.commit('setTabbar', false)
		const showTab = () => store.commit('setTabbar', true)

		const router = useRouter()
		const route = useRoute()
		const store = useStore()
		const foldMenu = (() => {
			let ind = store.getters.dirs.findIndex((e) => e.name === dir.value.name)
			if (dir.value.menu) {
				store.commit('removeFolder', ind)
			} else {
				store.commit('addFolder', dir.value )
			}
			dir.value.menu = !dir.value.menu
		})

		const dir = computed(() => {
			let dirs = store.getters.dirs
			return dirs.find((e) => e.id === parseInt(route.params.id))
		})

		return {
			router,
			route,
			hideTab,
			showTab,
			arrowUndoOutline,
			menu,
			foldMenu,
			dir
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
.mol {
	margin-bottom: 4rem;
}
</style>
