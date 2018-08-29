<template>
  <div class="container">
    <header>
      <img src="@/assets/img/success-header.jpg"/>
      <h1 class="header-title">唯创网讯</h1>
      <p>省内最早最权威最专业的WEB前端培训</p>
      <p>一站式解决零基础就业</p>
    </header>
    <div class="excellent-student">
      <p>明星学员</p>
      <p></p>
      <div class="student-info clear-fix">
        <a v-for="(item,index) in caseData" :key="index+'al'">
          <div>
            <img :src="item.src"/>
          </div>
          <div class="detail">{{item.evaluate}}</div>
          <ul class="clearix">
            <li class="student-name">{{item.name}}</li>
            <li class="student-name">{{item.school}}</li>
            <li>{{item.company}}</li>
          </ul>
        </a>
       <!-- <a>
          <div>
            <img src="@/assets/img/student-info.png"/>
          </div>
          <div class="detail">学员评价学员评价学员评价学员评价学员评价学员评价学员评价学员评价学员评价学员评价学员评价学员评价学员评价学员评价学员评价学员评价</div>
          <ul class="clearix">
            <li class="student-name">学员名称</li>
            <li class="student-name">毕业学校</li>
            <li>就业公司</li>
          </ul>
        </a>
        <a>
          <div>
            <img src="@/assets/img/student-info.png"/>
          </div>
          <div class="detail">学员评价学员评价学员评价学员评价学员评价学员评价学员评价学员评价学员评价学员评价学员评价学员评价学员评价学员评价学员评价学员评价</div>
          <ul class="clearix">
            <li class="student-name">学员名称</li>
            <li class="student-name">毕业学校</li>
            <li>就业公司</li>
          </ul>
        </a>-->
      </div>
    </div>
    <div class="employment">
      <p class="high-salary">高薪就业榜</p>
      <p class="salayr-line"></p>
      <div class="ranking-list">
        <ul class="clear-fix">
          <li>
            <p>20+</p>
            <p>每周OFFER</p>
          </li>
          <li>
            <p>80%+</p>
            <p>就业率</p>
          </li>
          <li>
            <p>￥13.5k</p>
            <p>平均薪酬</p>
          </li>
          <li>
            <p>2000+</p>
            <p>累计OFFER</p>
          </li>

        </ul>
        <commonone :msg = "type"></commonone>
      </div>

    </div>
  </div>
</template>
<script>
import commonone from '@/components/commonOne.vue'
import axios from 'axios'
export default {
    created(){
        this.getData();
    },
    data(){
        return{
            caseData:[],
            type:"type1"
        }
    },
    components:{
        commonone
    },
    methods:{
        getData(){
            axios.get('./data/successcase.json')
                .then((res) =>{
                    //console.log(res);
                    this.caseData=res.data.caseData;
                    for(let i=0;i<this.caseData.length;i++){
                        this.caseData[i].src=require('@/assets/img/'+this.caseData[i].src);
                    }
                })
                .catch(() =>{

                })
        }
    }
}
</script>
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

  .excellent-student{
    position: relative;
    width: 100%;
  }
  .excellent-student p:first-of-type{
    text-align: center;
    font-size: 28px;
    letter-spacing: 3px;
    margin: 15px 0 10px 0;

  }
  .excellent-student p:nth-of-type(2){
    width:65px;
    height:2px;
    margin: 0 auto;
    background-color:blue;
    overflow:hidden;
  }
  .clear-fix::after{
    content: '';
    clear: both;
    display: block;
  }
  .student-info{
    margin: 20px 0;
    width: 100%;
    background: #fff;
  }
  .student-info a{
    float: left;
    margin-top: 10px;
    margin-left: 15px;
    box-shadow:  0 1px 1px 1px rgba(0, 0, 0, 0.15);
  }
  .student-info a:first-of-type{
    margin-left: 0;
  }
  .student-info img{
    width:390px;
    height:200px;
  }
  .detail{
    display: -webkit-box;
    -webkit-line-clamp: 5;/*限制文本的行数，只显示两行*/
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: 390px;
    text-align: center;
    font-size: 16px;
    padding: 10px 10px 0 10px;
    box-sizing: border-box;
    letter-spacing: 3px;
  }
  .student-info ul{
    margin-left: 10px;
  }
  .student-info ul li{
    float: left;
    margin: 8px 8px;
    font-size:18px;
    color: #808080;
  }
  .student-info .student-name::after{
    content: '';
    border: 1px solid #aaa;
    margin-left: 13px;
  }

  .employment{
    width: 100%;

  }
  .employment .high-salary{
    text-align: center;
    font-size: 28px;
    letter-spacing: 3px;
    margin: 15px 0 10px 0;

  }
  .employment .salayr-line{
    width:65px;
    height:2px;
    margin: 0 auto;
    background-color:blue;
    overflow:hidden;
  }
  .ranking-list{
    /*height: 800px;*/
    border: 1px solid #cccccc;
    margin-top: 35px;
    width: 100%;
    background: #fff;
  }
  .employment ul{
    margin: 15px auto;
    width: 100%;
    padding-bottom: 15px;
    border-bottom:1px solid #cccccc;
    display: flex;
  }
  .employment ul li{
    float:left;
    font-size: 23px;
    /*text-align: center;*/
    flex-grow: 1;
    margin-left: 90px;
  }

</style>
