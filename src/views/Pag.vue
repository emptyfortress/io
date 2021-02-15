<template lang="pug">
ion-page
	ion-header
		ion-toolbar
			ion-buttons(slot="start")
				ion-back-button
	ion-content
		p Nullam eu ante vel est convallis dignissim.  Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio.  Nunc porta vulputate tellus.  Nunc rutrum turpis sed pede.  Sed bibendum.  Aliquam posuere.  Nunc aliquet, augue nec adipiscing interdum, lacus tellus malesuada massa, quis varius mi purus non odio.  Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus diam neque sit amet urna.  Curabitur vulputate vestibulum lorem.  Fusce sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.  Sed id ligula quis est convallis tempor.  Curabitur lacinia pulvinar nibh.  Nam a sapien.
		p Nullam eu ante vel est convallis dignissim.  Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio.  Nunc porta vulputate tellus.  Nunc rutrum turpis sed pede.  Sed bibendum.  Aliquam posuere.  Nunc aliquet, augue nec adipiscing interdum, lacus tellus malesuada massa, quis varius mi purus non odio.  Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus diam neque sit amet urna.  Curabitur vulputate vestibulum lorem.  Fusce sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.  Sed id ligula quis est convallis tempor.  Curabitur lacinia pulvinar nibh.  Nam a sapien.
	ion-footer
		ion-toolbar(:color="test")
			ion-buttons(slot="start")
				ion-button lakjs
			ion-title Hello!
</template>

<script>
import {
	IonPage,
	IonFooter,
	IonButton,
	IonButtons,
	IonBackButton,
} from '@ionic/vue'

export default {
	components: { IonPage, IonFooter, IonButton, IonButtons, IonBackButton },
	data() {
		return {
			color: null,
		}
	},
	created() {
		this.color = this.$route.meta.color
	},
	computed: {
		test() {
			return this.$route.meta.color
		},
	},
}
</script>

<style scoped lang="scss"></style>
