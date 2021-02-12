<template lang="pug">
#container
	strong {{ name }}
	p
		span Explore
		a(target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components") UI Components
	ion-button(router-link="/pag") button
</template>

<script>
import { IonButton } from '@ionic/vue'

export default {
	name: 'ExploreContainer',
	props: {
		name: String
	},
	components: {
		IonButton
	}
}
</script>

<style scoped lang="scss">
#container {
	text-align: center;
	position: absolute;
	left: 0;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
}

#container strong {
	font-size: 20px;
	line-height: 26px;
}

#container p {
	font-size: 16px;
	line-height: 22px;
	color: #8c8c8c;
	margin: 0;
}

#container a {
	text-decoration: none;
}
</style>
