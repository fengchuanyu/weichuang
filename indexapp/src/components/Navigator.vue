<template>
  <div class="container">
    <nav>
      <ul class="clearix">
        <li @click="routerChange({path:'/'})"><img src="@/assets/img/logo.png" alt="" style="margin-top: 10px"></li>
        <li
            @click='routerChange(item,index)'
            class="menu-item"
            :class="{'active':index ==checkindex }"
            v-for="(item, index) in navList" :key='index+"nl"'>{{item.name}}</li>

        <div style="float: right">
          <li><input class="search" placeholder="请输入要搜索的内容" @keyup.enter="search"/></li>
          <li @click="login">登陆</li>
          <li>/</li>
          <li @click="register">注册</li>
        </div>

      </ul>
    </nav>
    <footer></footer>
  </div>
</template>
<script>
    export default {

        data(){
            return{
                checkindex: -1,
                navList:[
                    {
                        name:"核心课程",
                        path:'/class'
                    },
                    {
                        name:"成功案例",
                        path:'/case'
                    },
                    {
                        name:"新闻资讯",
                        path:'/newsindex'
                    },
                    {
                        name:"关于我们",
                        path:'/about'
                    }
                ]
            }
        },
        methods:{
            routerChange(item,index){
                this.$router.push(item.path);
                this.checkindex = index
            },
            login(){
                alert("登陆")
            },
            register(){
                alert("注册")
            },
            search(){
                alert("搜索")
            },
        }
    }
</script>
<style scoped>
  .active {
    color: rgb(0, 144, 255);;
  }
  .container{
    box-shadow:0px 1px 1px rgba(0,0,0,.2);
    overflow: hidden;
    width: 100%;
    height: 70px;
    background: #fff;
  }
  nav{
    width: 1200px;;
    text-align:center;
    margin:0 auto;
    
  }
  nav ul{
    width: 1200px;
  }
  nav ul li{
    float: left;
    margin-left: 20px;
    line-height: 60px;
    font-size: 16px
  }

  .clearix::after{
    content: "";
    clear: both;
    display: block;
  }
  input::-webkit-input-placeholder{
    color: #aaa
  }
  .search{
    border: 1px #ddd solid;
    border-radius: 42px;
    height: 30px;
    padding-left: 10px;
    color: gray;
    padding: 5px 30px;
  }
  input{outline:none;}
  li:hover{
    color: rgb(0, 144, 255);
    cursor: pointer;
  }
  ul{
    margin-left: auto;
    margin-right: auto;
    display: inline;
  }
</style>
