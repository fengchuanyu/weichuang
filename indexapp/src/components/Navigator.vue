<template>
  <div class="container">
    <nav>
      <ul class="clearix">
        <li><img src="@/assets/img/logo.png" alt=""></li>
        <li @click='routerChange(item)' v-for="(item, index) in navList" :key='index+"nl"'>{{item.name}}</li>
      </ul>
    </nav>
    <footer></footer>
  </div>
</template>
<script>
export default {
  data(){
    return{
      navList:[
        {
          name:"核心课程",
          path:'/'
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
    routerChange(item){
      this.$router.push(item.path);
    }
  }
}
</script>
<style scoped>
nav{
  width: 100%;
}
nav ul{
  width: 1400px;
  
}
nav ul li{
  float: left;
  margin-left: 20px;
}
.clearix::after{
  content: "";
  clear: both;
  display: block;
}
</style>
