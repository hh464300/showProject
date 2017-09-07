const getters = {
    counttype(state){
        return state.count % 2 == 0 ? '偶数':'奇数'
    },
    count(state){
        if(state.count < 0 ){
            state.count = 0;
        }
        if(state.count > 15){
            state.count = 15;
        }
        return state.count;
    }
}
export default getters

