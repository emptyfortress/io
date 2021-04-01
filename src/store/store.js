import { createStore } from 'vuex'

export const store = createStore({
	state () {
		return {
			dark: false,
			tabbar: true,
			actionBar: false,
			selectedPie: null,
			selectedBar: null,
			selectedBar1: null,
			items: [],
			total: 0,
		}
	},
	getters: {
		dark: state => { return state.dark },
		tabbar: state => { return state.tabbar },
		actionBar: state => { return state.actionBar },
		selectedPie: state => { return state.selectedPie },
		selectedBar: state => { return state.selectedBar },
		selectedBar1: state => { return state.selectedBar1 },
		total: state => { return state.total },
		items: state => { return state.items }
	},
	mutations: {
		toggleTabbar (state) { state.tabbar = !state.tabbar },
		setTabbar (state, payload) { state.tabbar = payload },
		toggleDark (state) { state.dark = !state.dark },
		setSelectedPie (state, payload) { state.selectedPie = payload },
		setItems (state, payload) { state.items = payload},
		decrementTotal (state) { state.total -= 1  },
		setTotal (state, payload) { state.total = payload },
	}
})
