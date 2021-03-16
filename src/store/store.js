import { createStore } from 'vuex'

export const store = createStore({
	state () {
		return {
			dark: false,
			tabbar: true,
			selectedChart: null,
			total: null,
		}
	},
	getters: {
		dark: state => { return state.dark },
		tabbar: state => { return state.tabbar },
		selectedChart: state => { return state.selectedChart },
		total: state => { return state.total },

	},
	mutations: {
		toggleTabbar (state) { state.tabbar = !state.tabbar },
		toggleDark (state) { state.dark = !state.dark },
		setSelectedChart (state, payload) { state.selectedChart = payload },
		setTotal (state, payload) { state.total = payload},
	}
})
