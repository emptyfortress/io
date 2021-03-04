<template lang="pug">
IonPage
	IonHeader
		IonToolbar
			IonButtons(slot="start")
				IonBackButton
			IonTitle Tab 2
	IonContent( :fullscreen="true" :scroll-events="true" @ionScrollStart="tab").ion-padding
		IonHeader( collapse="condense" )
			IonToolbar()
				IonTitle( size="large" ) Tab 2
		p(v-for="n in 7") Nullam eu ante vel est convallis dignissim.  Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio.  Nunc porta vulputate tellus.  Nunc rutrum turpis sed pede.  Sed bibendum.  Aliquam posuere.  Nunc aliquet, augue nec adipiscing interdum, lacus tellus malesuada massa, quis varius mi purus non odio.  Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus diam neque sit amet urna.  Curabitur vulputate vestibulum lorem.  Fusce sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.  Sed id ligula quis est convallis tempor.  Curabitur lacinia pulvinar nibh.  Nam a sapien.

</template>

<script>
import {
	IonPage,
	IonButtons,
	IonBackButton,
	IonContent,
	IonHeader,
	IonToolbar,
	IonTitle,
} from '@ionic/vue'
import ExploreContainer from '@/components/ExploreContainer.vue'

export default {
	name: 'Tab2',
	components: {
		ExploreContainer,
		IonPage,
		IonButtons,
		IonBackButton,
		IonContent,
		IonHeader,
		IonToolbar,
		IonTitle,
	},
	methods: {
		tab() {
			this.$store.commit('toggleTabbar')
		},
		logScrolling(e) {
			console.log(e)
		},
	},
}
</script>

<style scoped lang="scss">
ion-content {
	/* --background: red; */
	/* --offset-bottom: -56px; */
}
</style>
