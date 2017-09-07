<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <button @click="show" class="btn btn-primary btn-lg">点击</button>
    <p></p>
    <hr>
    <!-- 让模态框显示的按钮 -->
    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
    登陆
    </button>
    <!-- 模态框 -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">hello world</h4>
          </div>
          <div class="modal-body">
            模态框内容
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary">保存</button>
          </div>
        </div>
      </div>
    </div>


    <!-- 表单 -->
    <form  @submit.prevent='checkMessage'>
      <div class="form-group">
        <label for="exampleInputEmail1">邮箱</label>
        <input type="text" name='email' v-model='myform.email' class="form-control" id="exampleInputEmail1" placeholder="请输入邮箱">
        <p v-show='emailcheckfalse' style='color:red;'>邮箱格式不正确</p>
        <p v-show='emailchecktrue' style='color:green;'>正确</p>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">密码</label>
        <input type="password" v-model='myform.pwd' name='pwd' class="form-control" id="exampleInputPassword1" placeholder="请输入密码">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword2">密码</label>
        <input type="password" v-model='myform.repwd' name='repwd' class="form-control" id="exampleInputPassword2" placeholder="请确认密码">
      </div>
      <button type="submit" class="btn btn-default">提交</button>
    </form>
    <hr>
     <!--<button class='btn btn-primary' @click='getJson'>请求</button>
    <hr />-->
    <a href="#/home">首页</a>
    <hr>
    <homeview></homeview>
  </div>
</template>

<script>
//import $ from 'jquery';
import Vue from 'vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Resource from  'vue-resource';
Vue.use(Resource);
//import Router from 'vue-router';
//import axios from 'axios';



import hometemp from './home.vue';
//Vue.use(axios);
export default {
  name: 'app',
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      myform:{
        email:'',
        pwd:'',
        repwd:''
      },
      emailcheckfalse:false,
      emailchecktrue:false
    }
  },
  components:{
    'homeview':hometemp
  },
  methods:{
    show(){
      $("p").text('hello world');
    },
    checkMessage(){
     //console.log(JSON.stringify(this.myform),this.$http);
     //验证邮箱 var reg = /^[\w-]{4,12}@[0-9a-ZA-Z]{2,20}(\.[a-z]+){1,3}$/;
     var emailreg = /^[\w-]{4,12}@[0-9a-zA-Z]{2,20}(\.[a-z]+){1,3}$/;
     var pwddreg = /^[\w-]{6,12}$/;
     var bool = emailreg.test(this.myform.email) && pwddreg.test(this.myform.pwd) && (this.myform.pwd === this.myform.repwd); 
     if(bool){
       this.emailchecktrue=true;
       this.emailcheckfalse=false;
        axios.get('/',JSON.stringify(this.myform)).then(()=>{
          console.log("提交成功");
          },()=>{
            console.log('提交失败');
          })
     }else{
       this.emailchecktrue=false;
       this.emailcheckfalse=true;
     }
     
    },
    /*
     * 跨域
     * getJson(){
    	$.get('http://api.douban.com//v2/movie/in_theaters',(data)=>{
    			console.log(data)
    	})
    }*/
   
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
