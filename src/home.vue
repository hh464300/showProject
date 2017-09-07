<template>
    <div id="home">
        <button @click='$store.commit("add")'>增加</button>
        <button @click='$store.commit("del")'>减少</button>
        <button @click='$store.commit("oddAdd")'>偶数增加</button>
        <button @click='$store.commit("asyncAdd")'>异步增加</button>
        <button @click='asyncAddTwo'>异步增加2</button>
        <hr>
        <p>现在的数据是：{{count}}</p>
        <p>现在的数据类型是：{{counttype}}</p>
    </div>
</template>
<script>
   //  import {mapGetters,mapActions} from 'vuex'
   import {mapActions,mapGetters} from 'vuex';
    export default {
        
       computed:mapGetters([
       	'count',
       	'counttype'
       ]),
       methods:mapActions([
           'asyncAddTwo',
           'add',
           'asyncAdd',
           'del',
           'oddAdd'
       ])
    }
</script>