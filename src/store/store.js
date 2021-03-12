import { createStore } from 'vuex'

export const store = createStore({
	state () {
		return {
			count: 0,
			tabbar: true,
			dark: false,
		}
	},
	getters: {
		count: state => { return state.count },
		tabbar: state => { return state.tabbar },
		dark: state => { return state.dark },
	},
	mutations: {
		increment (state) {
			state.count++
		},
		toggleTabbar (state) { state.tabbar = !state.tabbar },
		toggleDark (state) { state.dark = !state.dark }
	}
})
