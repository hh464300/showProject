
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
export default mutations;