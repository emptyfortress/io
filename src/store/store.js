import { createStore } from 'vuex'

export const store = createStore({
	state () {
		return {
			dark: false,
			tabbar: true,
			actionBar: false,
			selectedPie: 0,
			selectedBar: null,
			selectedBar1: null,
			items: [],
		}
	},
	getters: {
		dark: state => { return state.dark },
		tabbar: state => { return state.tabbar },
		actionBar: state => { return state.actionBar },
		selectedPie: state => { return state.selectedPie },
		selectedBar: state => { return state.selectedBar },
		selectedBar1: state => { return state.selectedBar1 },
		items: state => { return state.items }
	},
	mutations: {
		toggleTabbar (state) { state.tabbar = !state.tabbar },
		setTabbar (state, payload) { state.tabbar = payload },
		toggleDark (state) { state.dark = !state.dark },
		setSelectedPie (state, payload) { state.selectedPie = payload },
		setItems (state, payload) { state.items = payload},
	}
})
