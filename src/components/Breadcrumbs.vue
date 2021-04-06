<template lang="pug">
.bread
	routerLink(to="#" @click="test") one
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	methods: {
		test() {
			console.log(this.$route.fullPath.split('/'))
		}
	}

}
</script>

<style lang="scss">
.bread {
	margin-bottom: 1rem;
	font-size: 1.0rem;
	a {
		display: inline-block;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
		&::after {
			content: "/";
			display: inline-block;
			margin: 0 0.5rem;
			cursor: default;
		}
	}
}
</style>
