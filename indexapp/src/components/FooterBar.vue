<template>
  <div id="footer">
      <div id="content">
          <span @click="toAbout">关于我们 |</span>
          <span> 联系我们 |</span>
          <span> 人才招聘 |</span>
          <span @click="toCase"> 成功案例</span>
          <hr>
          <span id="permit">Copyright  2018-2022 weichuangwangxun.com All Rights Reserved. 京ICP备11018032号 京公网安备11010802013056</span>
      </div>
  </div>
</template>
<script>
    export default {
        methods:{
            toAbout:function () {
                this.$router.push({path:'/about'})
            },
            toCase:function () {
                this.$router.push({path:'/case'})
            }
        }
    }
</script>
<style scoped>
    #footer{
        width:100%;
        height:100px;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    #content{
        width: 1200px;
        height: 100px;
        text-align: center;
        font-size: 14px;
    }
    hr{
        margin: 10px 0;
        color: black;
    }
    #permit{
        font-size: 12px;
    }
</style>
