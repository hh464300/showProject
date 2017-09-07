import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default new vuex.Store({
	getters,
	actions,
	state,
	mutations
})
