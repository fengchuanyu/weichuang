<template>
  <div class="container">
    <class-title></class-title>
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
            <li class="student-name">学员名称</li>
            <li class="student-name">毕业学校</li>
            <li>就业公司</li>
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
      </div>

    </div>
  </div>
</template>
<script>
import classTitle from '@/components/classTitle.vue'
export default {
    created(){
        this.getData();
    },
    data(){
        return{
            caseData:[]
        }
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
    },
    components:{
          classTitle:classTitle
    }
}
</script>
<style scoped>
  .container{
    margin-bottom: 20px;

  }
  /* header部分的代码在'@/components/classTitle.vue' header组件在本页第三行    <class-title></class-title> 
  可以对class-title添加class进行微调
  */

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
  .detail{
    display: -webkit-box;
    -webkit-line-clamp: 2;/*限制文本的行数，只显示两行*/
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: 390px;
    text-align: center;
    font-size: 23px;
    padding: 10px;
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
    height: 800px;
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
