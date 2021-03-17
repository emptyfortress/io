import { createStore } from 'vuex'

export const store = createStore({
	state () {
		return {
			dark: false,
			tabbar: true,
			actionBar: false,
			selectedChart: null,
			items: [],
		}
	},
	getters: {
		dark: state => { return state.dark },
		tabbar: state => { return state.tabbar },
		actionBar: state => { return state.actionBar },
		selectedChart: state => { return state.selectedChart },
		items: state => { return state.items }
	},
	mutations: {
		toggleTabbar (state) { state.tabbar = !state.tabbar },
		setTabbar (state, payload) { state.tabbar = payload },
		toggleDark (state) { state.dark = !state.dark },
		setSelectedChart (state, payload) { state.selectedChart = payload },
		setItems (state, payload) { state.items = payload},
	}
})
