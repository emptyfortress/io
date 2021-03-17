<template lang="pug">
IonItemSliding()
	IonItem
		IonGrid.ion-no-padding.gr
			IonRow
				IonCol
					IonLabel
						.num 
							div {{item.number}}
							div {{item.type}}
							div Не начато
						h2 {{ item.title }}
			IonRow
				IonCol(size="9").col1
					div Автор: {{ item.executor }}
					div Срок: {{ item.deadline }}
				IonCol.ion-text-end
					.file
						IonIcon(src="assets/icons/attach.svg")
						span {{ item.files }}
			IonRow
				IonCol.descr {{ item.descr }}
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
	IonItemSliding,
	IonItem,
	IonGrid,
	IonLabel,
	IonNote,
	IonRow,
	IonCol,
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
		IonItemSliding,
		IonItem,
		IonGrid,
		IonLabel,
		IonNote,
		IonRow,
		IonCol,
		IonItemOptions,
		IonItemOption,
		IonIcon,
	},
}
</script>
<style scoped lang="scss">
h2 {
	font-weight: 600;
	margin-bottom: 0.5rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	&::before {
		content: '';
		width: 0.5rem;
		height: 0.5rem;
		display: inline-block;
		border-radius: 50%;
		background: var(--ion-color-primary);
		margin-right: 0.3rem;
		margin-bottom: 0.1rem;
	}
}
.num {
	display: flex;
	justify-content: space-between;
	margin-right: 0.5rem;
	/* font-weight: 300; */
	font-size: 0.7rem;
}
.col1 {
	font-weight: 300;
}
.descr {
	font-weight: 400;
	margin-top: 0.3rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.file {
	color: var(--ion-color-primary);
	font-weight: 600;
	margin-top: 4px;
	margin-bottom: 4px;
	font-size: 1rem;
	span {
		margin-left: 0.5rem;
	}
}
.gr {
	font-size: 0.9rem;
	padding-top: 10px;
	padding-bottom: 10px;
	width: calc(100%);
}
</style>
