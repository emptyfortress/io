import { createStore } from 'vuex'
import axios from 'axios'
import { treeData, menuList, menuList1, dirs } from '@/data.js'

axios.get('./tasks.json').then((response) => {
	store.state.items = response.data
})


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
			total1: 0,
			total2: 0,
			total3: 0,
			color: null,
			treeData,
			menuList,
			menuList1,
			dirs,
		}
	},
	getters: {
		dark: state => { return state.dark },
		tabbar: state => { return state.tabbar },
		actionBar: state => { return state.actionBar },
		selectedPie: state => { return state.selectedPie },
		selectedBar: state => { return state.selectedBar },
		selectedBar1: state => { return state.selectedBar1 },
		total1: state => { return state.total1 },
		total2: state => { return state.total2 },
		total3: state => { return state.total3 },
		items: state => { return state.items },
		color: state => { return state.color },
		treeData: state => { return state.treeData },
		menuList: state => { return state.menuList },
		menuList1: state => { return state.menuList1 },
		dirs: state => { return state.dirs },
	},
	mutations: {
		toggleTabbar (state) { state.tabbar = !state.tabbar },
		setTabbar (state, payload) { state.tabbar = payload },
		toggleDark (state) { state.dark = !state.dark },
		setSelectedPie (state, payload) { state.selectedPie = payload },
		setSelectedBar (state, payload) { state.selectedBar = payload },
		setSelectedBar1 (state, payload) { state.selectedBar1 = payload },
		setItems (state, payload) { state.items = payload},
		decrementTotal (state) { state.total -= 1  },
		setTotal1 (state, payload) { state.total1 = payload },
		setTotal2 (state, payload) { state.total2 = payload },
		setTotal3 (state, payload) { state.total3 = payload },
		setColor (state, payload) { state.color = payload },
		addFolder (state, payload) { state.treeData[2].children.push(payload) }
	}
})
