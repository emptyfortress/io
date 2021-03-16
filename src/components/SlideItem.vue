<template lang="pug">
IonItemSliding()
	IonItem
		IonLabel
			h2 {{ item.name }}
			p Автор: Иванов П.С.
			p Срок: 24.11.2020
			p Oceanic Next has joined your network
		IonNote(slot="end").note
			div 10:45 AM
			.file
				IonIcon(src="assets/icons/attach.svg")
				span 5
	IonItemOptions(side="end" @ionSwipe="some")
		IonItemOption(expandable)
			IonIcon(slot="icon-only" :icon="mailOpenOutline" @click="$emit('read')")
	IonItemOptions(side="start")
		IonItemOption(color="secondary")
			IonIcon(slot="icon-only" :icon="arrowRedoOutline")
		IonItemOption
			IonIcon(slot="icon-only" :icon="star")

</template>

<script>
import {
	IonNote,
	IonItemSliding,
	IonItem,
	IonLabel,
	IonItemOptions,
	IonItemOption,
	IonIcon,
} from '@ionic/vue'
import {
	star,
	arrowRedoOutline,
	mailOpenOutline,
	documentAttachOutline,
} from 'ionicons/icons'

export default {
	props: ['item'],
	data() {
		return { star, arrowRedoOutline, mailOpenOutline, documentAttachOutline }
	},
	methods: {
		some() {
			this.$emit('swipe')
		},
		test() {
			// document.querySelector('#item100').open()
		},
	},
	components: {
		IonNote,
		IonItemSliding,
		IonItem,
		IonLabel,
		IonItemOptions,
		IonItemOption,
		IonIcon,
	},
}
</script>
<style scoped lang="scss">
h2 {
	font-weight: 600;
}
.note {
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
	padding-bottom: 1rem;
	.file {
		font-size: 1rem;
		vertical-align: bottom;
		span {
			margin-left: 4px;
		}
	}
}
</style>
