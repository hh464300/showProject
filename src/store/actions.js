export default  {
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