import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


const state = {
    count:10
} 
const mutations = {
    add:function(state){
        state.count++
    },
    del(state){
        state.count--
    },
    oddAdd(state){
        if(state.count%2 == 0){
            state.count++
        }
    },
    asyncAdd(state){
        new Promise((resolve)=>{
            setTimeout(function(){
                state.count++;
                resolve();
            },1000)
        }).then(function(){
            console.log('异步加载完毕')
        })
    },
    AddTwo(state,index){
        state.count += index
    }

}

const getters = {
    getType(state){
        return state.count % 2 == 0 ? '偶数':'奇数'
    },
    getcount(state){
        if(state.count < 0 ){
            state.count = 0;
        }
        if(state.count > 15){
            state.count = 15;
        }
        return state.count;
    }
}
const actions = {
    asyncAddTwo:({commit})=>{
        commit('AddTwo',2)
    },
    del:({commit})=>{
        commit("del")
    },
    add:({commit})=>{
        commit('add')
    },
    oddAdd:function({commit}){
        commit('oddAdd');
    },
    asyncAdd:function({commit}){
        commit('asyncAdd');
    }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})