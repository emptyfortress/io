<template lang="pug">
IonItemSliding
	IonItem
		IonGrid.ion-no-padding.gr
			IonRow
				IonCol
					IonLabel
						.num 
							div 123-bc
							div На ознакомление
							div В работе
						h2 О проведении субботника
			IonRow
				IonCol.col1
					div Автор: Орлов Г.Ф.
					div Срок: 21.04.2021
				IonCol(size="auto").ion-text-end
					.file
						IonIcon(src="assets/icons/attach.svg")
						span 2
			IonRow
				IonCol.descr Это описание документа
	IonItemOptions(side="end")
		IonItemOption(expandable)
			IonIcon(slot="icon-only" :icon="mailOpenOutline") 
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
	color: var(--ion-color-primary);
	font-weight: 600;
	margin-bottom: 0.5rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	/* &::before { */
	/* 	content: ''; */
	/* 	width: 0.5rem; */
	/* 	height: 0.5rem; */
	/* 	display: inline-block; */
	/* 	border-radius: 50%; */
	/* 	background: var(--ion-color-primary); */
	/* 	margin-right: 0.3rem; */
	/* 	margin-bottom: 0.1rem; */
	/* } */
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
	padding-top: 12px;
	padding-bottom: 12px;
	width: calc(100%);
}
</style>
