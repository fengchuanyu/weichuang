<template>
<div>
      <header>
      <img src="@/assets/img/success-header.jpg"/>
      <h1 class="header-title">唯创网讯</h1>
      <p>省内最早最权威最专业的WEB前端培训</p>
      <p>一站式解决零基础就业</p>
    </header>
</div>
</template>
<style scoped>
.container{
    margin-bottom: 20px;

  }
  /*header start*/
  header{
    width: 100%;
    height: 400px;
    position: relative;
  }
  header img{
    position: absolute;
    width: 100%;
  }
  header h1{
    position: absolute;
    color: #fff;
    transform: translateX(-50%);
    left: 50%;
    margin-top: 20px;
    letter-spacing: 5px;
    font-size: 75px;
  }
  header p:first-of-type{
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    top: 50%;
    font-size: 29px;
    color: gold;
    border-radius: 30px;

    padding: 0 20px;
    letter-spacing: 3px;
    background: rgba(255,255,255,.5);
  }
  header p:last-of-type{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 40px;
    font-size: 29px;
    color: #fff;
    letter-spacing: 5px;
  }
  /*header end*/
</style>
