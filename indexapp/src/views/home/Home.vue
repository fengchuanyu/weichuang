<template>
  <div class="big">
    <div class="head-image">
      <!-- <img src="../../assets/img/headimg.jpg" alt=""> -->
      <div class="container">
          <div class="title">
            <div class="title-head">
                <span class="title-head-one">核心课程</span><br>
                <div class="title-head-two"></div>
            </div>
            <span class="more">更多&gt;</span>
          </div>
          <div class="info">
            <ul>
              <li v-for="(items,index) in classdata" :key="index+'class'">
                <div class="info-img">
                  <img :src="items.src" alt="">
                  <div class="info-main">
                    <h2>{{items.name}}</h2>
                    <p class="main-v">{{items.title}}</p>
                    <span>
                        {{items.artist}}
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
      </div>
    </div>
    <div class="second">
      <!-- <img src="../../assets/img/centerimg.jpg" alt=""> -->
      <div class="imgon">
          <ul>
            <li>
              <div>
                <span>20+</span>
                <span>每周OFFER</span>
              </div>
            </li>
            <li>
              <div>
                <span>80%+</span>
                <span>就业率</span>
              </div>
            </li>
            <li>
              <div>
                <span>￥13.5K</span>
                <span>平均薪资</span>
              </div>
            </li>
            <li>
              <div>
                <span>2,000+</span>
                <span>累计OFFER</span>
              </div>
            </li>
          </ul>
      </div>
      <div class="container">
        <div class="title">
          <div class="title-head">
            <span class="title-head-one">成功案例</span><br>
            <div class="title-head-two"></div>
          </div>
          <span class="more">更多&gt;</span>
        </div>
        <div class="container">
          <div class="caseinfo">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                classdata:[],
                casedata:[]
            }
        },
        created(){
          this.getData();
        },
        methods:{
            getData(){
                axios.get('./data/classdata.json')
                    .then( (response) => {
                        this.classdata = response.data.ClassData;
                        console.log(this.classdata);
                        
                        for(let i = 0 ; i < this.classdata.length ; i++){
                            this.classdata[i].src=require('@/assets/img/'+ this.classdata[i].src)
                        }
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error)
                });
                axios.get('./data/casedata.json')
                    .then( (response) => {
                        this.casedata = response.data.CaseData;
                        console.log(this.casedata);
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error)
                    });

            },
    }
  }
</script>
<style scoped>
  .big{
    padding-bottom:100px;
  }
  /*head-img开始*/
  .head-image{
    width: 100%;
    margin-bottom:20px;
  }
  .head-image img{
    width: 100%;
  }
  .container{
    width: 1040px;
    margin:0 auto;
    height: 500px;
  }
  .title{
    margin:30px 0;
    text-align: center;
  }
  .title-head{
    font-size:26px;
  }
  .title-head .title-head-two{
    height: 3px;
    background: deepskyblue;
    border-radius: 20%;
    width: 45px;
    margin: 5px auto;
  }
  .title .more{
    float:right;
    font-size: 19px;
    margin-top:-52px;
    margin-right:20px;
    color: #aaaaaa;
  }
  .info{
    height: 450px;
    width: 100%;
  }
  .info ul{
    height: 400px;
    width: 100%;
  }
  .info ul li{
    width: 32%;
    background: white;
    float:left;
    margin-right:2%;
    height: 400px;
  }
  .info ul li:nth-child(3){
    margin:0;
  }
  .info-img{
    height: 200px;
  }
  .info-img img{
    height: 100%;
  }
  .info-main{
    margin:0 10px 10px 10px;
  }
  .info-main .main-v{
    border-bottom:1px solid #bfbfbf;
    font-size:16px;
    color:#bfbfbf;
    padding-bottom:10px;
    margin-bottom:10px;
  }
  .info-main span{
    font-size:16px;
  }
  /*head-img结束*/

  /*second开始*/
  .second{
    position: relative;
  }
  .imgon{
    height: 260px;
    background: #30b2ff;
    opacity: 0.7;
    position:absolute;
    top:0;
    width: 100%;
  }
  .imgon ul{
    width: 80%;
    height: 100%;
    margin:0 auto;
    display: flex;
  }
  .imgon ul li{
    position:relative;
    float:left;
    flex-grow: 1;
    color:white;
    font-size:19px;
    font-weight: 200;
  }
  .imgon ul li div{
    position: absolute;
    top:50%;
    left:50%;
    transform: translateX(-50%) translateY(-50%);
  }
  .imgon ul li span{
    display: block;
  }
  /*case开始*/
  .caseinfo{
    height: 450px;
    background: #ffffff;
  }
  /*case结束*/
  /*second结束*/
</style>
