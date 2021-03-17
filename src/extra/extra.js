import { useStore } from 'vuex'

const store = useStore()
const hideTab = () => store.commit('setTabbar', false)
const showTab = () => store.commit('setTabbar', true)


export {test, hideTab, showTab }
