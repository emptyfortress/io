<template lang="pug">
.bread
	routerLink(to="#" @click="test" v-for="chunk in chunks" :key="chunk") {{ chunk }}
</template>

<script>
export default {
	data() {
		return {
		}
	},
	computed: {
		chunks () {
			let arr = this.$route.path.split('/')
			arr.shift() 
			return arr
		}
	}
}
</script>

<style lang="scss">
.bread {
	margin: 1rem;
	font-size: 0.9rem;
	padding: 0 1rem;
	padding-left: 0;
	a {
		display: inline-block;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
		&::before {
			content: "/";
			display: inline-block;
			margin: 0 0.25rem;
			cursor: default;
		}
	}
}
</style>
