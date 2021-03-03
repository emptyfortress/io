import { createStore } from 'vuex'

export const store = createStore({
	state () {
		return {
			count: 0,
			tabbar: true
		}
	},
	getters: {
		count: state => { return state.count },
		tabbar: state => { return state.tabbar },
	},
	mutations: {
		increment (state) {
			state.count++
		},
		toggleTabbar (state) { state.tabbar = !state.tabbar }
	}
})
