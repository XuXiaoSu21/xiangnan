import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        FullScreen: true,
        showMenu: true,
        navPosAdj: false,
        btmMenuState: false
    },
    getter: {
        getNavPosAdj() {
            return this.state.navPosAdj
        }
    },
    mutations: {
        setFullScreen() {
            this.state.FullScreen = !this.state.FullScreen
            if (this.state.FullScreen) {
                this.state.btmMenuState = true
            } else {
                this.state.btmMenuState = false
            }
        },
        setShowMenu(state, flag) {
            state.showMenu = flag
        },
        setNavPosAdj(state, boolean) {
            state.navPosAdj = boolean
        },
        setBtmMenu() {
            this.state.btmMenuState = !this.state.btmMenuState
        }
    },
    actions: {}
})
