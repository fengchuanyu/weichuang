<template>
  <div class="content">
    <div class="wrapper">
      <div class="head">
        <div class="back">
          <div class="back-info">
            <h1>{{classlist.classType}}</h1>
            <p>本课程已帮助数千名在校大学生获得国内BAT公司offer</p>
          </div>
          <div class="back-btns">
            <button class="preLesson">免费试听</button>
            <button class="lessonSechedule">查看课表</button>
          </div>
          <div class="count-down">
            <p>距离下次开课还有</p>
            <p><span>{{day}}</span>天<span>{{hour}}</span>小时<span>{{minute}}</span>分<span>{{second}}</span>秒</p>
          </div>
        </div>
        <div class="front">
          <div>
            <p>课程时长</p>
            <p>6个月</p>
            <p>每周2天，每天8小时</p>
          </div>
          <div>
            <p>课程时长</p>
            <p>6个月</p>
            <p>每周2天，每天8小时</p>
          </div>
          <div>
            <p>课程时长</p>
            <p>6个月</p>
            <p>每周2天，每天8小时</p>
          </div>
        </div>
      </div>
      <nav class="classNav">
        <ul>
          <li v-for="(item,index) in classnavList" :key="index+'cnl'" :class="{'active':item.isSelected}" @click="select(item.id)">
            <a :href="'#'+item.id" class="atitle">
            <span>{{item.title}}</span>
            <div :class="{'bot-line':item.isSelected}"></div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="class-intro">
      <span>{{classlist.classIntTitle}}</span>
      <p>{{classlist.classIntroduce}}</p>
      <img src="@/assets/img/课程详情_03.png" alt="">

    </div>

      <div class="class-skill">
        <p>{{classlist.classType}}入门从这里开始</p>
        <img src="@/assets/img/课程详情_07.jpg" alt="">
        <div class="class-skill-r">
          <div class="skill-intro">
            <p>我能学到那些技能</p>
            <p>{{classlist.skillDescription}}</p>
          </div>
          <ul>
            <li v-for="(item,index) in classlist.skillPoint" :key="index">
              <h4>{{item.skillName}}</h4>
              <p>{{item.skillInt}}</p>
            </li>
          </ul>
        </div>
      </div>
    <div class="wrapper">
        <div class="treatment">
          <h3>在这里你能享受到的待遇</h3>
          <div class="treatment-items">
            <div  v-for="(item,index) in tratementList" :key="index+'tl'">
              <img :src="item.img" alt="">
              <p>{{item.intro}}</p>
            </div>
          </div>
        </div>
    </div>
    <a name="1">
      <div class="lesson-plan">
        <h3>课程将如何安排</h3>
        <div class="lesson-content" v-for="(item,index) in planList" :key="index+'pl'"  v-show="item.isShow">
          <h4>{{item.title}}</h4>
          <p>{{item.info}}</p>
          <div class="plan-items">
            <div  v-for="(items,cindex) in item.class" :key="cindex+'classl'">
              <div>{{items.classTitle}}</div>
              <h4>{{items.introTitle}}</h4>
              <p>{{items.introContent}}</p>
            </div>
          </div>
        </div>
        <div v-if="planList.length">
        <div class="show-all" @click="showAll" v-show="!planList[1].isShow">
          查看全部课程安排
          <img src="@/assets/img/arrow.png" alt="">
        </div>
        <div class="show-all" @click="showAll" v-show="planList[1].isShow">
          收起
          <img src="@/assets/img/arrow_up.png" alt="">
        </div>
        </div>
      </div>
    </a>
    <a name="2">
      <div class="wrapper">
        <div class="suitable">
          <h3>合适人群</h3>
          <p>知道你对{{classlist.classType}}充满兴趣，你就是最适合的人选</p>
        </div>
        <div class="comments">
          <h3>我在这里只为等待你的到来</h3>
          <ul class="clearix">
            <li v-for="(item,index) in commentList" :key="index+'cl'" v-show="item.isShow">
              <img :src="item.userIcon" alt="">
              <p>{{item.userName}}</p>
              <div class="stars">
                <span v-for="(items,index) in item.stars" :key="index+'star'">
                  <img src="@/assets/img/star.png" alt="">
                </span>
              </div>
              <p>{{item.content}}</p>
            </li>
          </ul>
        </div>
        <div v-if="commentList.length">
        <div class="show-all" @click="showAllComment" v-show="!commentList[4].isShow">
          查看全部用户评论
          <img src="@/assets/img/arrow.png" alt="">
        </div>
        <div class="show-all" @click="showAllComment" v-show="commentList[4].isShow">
          收起
          <img src="@/assets/img/arrow_up.png" alt="">
        </div> 
        </div>
      </div>
    </a>

  </div>

</template>
<script>
    export default {
        data(){
            return{
                Objindex:this.$route.params.objindex,
                classnavList:[],
                tratementList:[],
                classlist:[],
                planList:[],
                commentList:[],
                nextLesson:'2018/9/19 20:27:00',
                now:null,
                end:null,
                leftTime:null,
                day:0,
                hour:0,
                minute:0,
                second:0,
            }
        },
        created(){
            this.getData();
        },
        mounted(){
            setInterval(()=>{
                this.countDown()
            },1000)
        },
        methods: {
            getData(){
                axios.get('./data/clasdetail.json')
                .then((res) =>{
                    this.tratementList = res.data.tratementList;
                    this.commentList=res.data.classTypes[this.Objindex-1].commentList;
                    for (let i = 0; i < res.data.tratementList.length; i++) {
                      this.tratementList[i].img = require("@/assets/img/"+this.tratementList[i].img);
                    }
                    for (let j = 0; j < this.commentList.length; j++) {
                      this.commentList[j].userIcon = require("@/assets/img/"+this.commentList[j].userIcon);
                    }
                    this.classnavList=res.data.classnavList;
                    this.planList=res.data.classTypes[this.Objindex-1].planList;
                    this.classlist=res.data.classTypes[this.Objindex-1];
                })
                .catch(() =>{

                })
            },
            select(id) {
                for (let i = 0; i < this.classnavList.length; i++) {
                    if (this.classnavList[i].isSelected) {
                        this.classnavList[i].isSelected = !this.classnavList[i].isSelected;
                    }
                }
                this.classnavList[id].isSelected = true;
            },
            countDown() {
                let date = new Date();
                this.now = date.getTime();
                let endDate = new Date(this.nextLesson);
                this.end = endDate.getTime();
                this.leftTime = this.end - this.now;
                if (this.leftTime>=0) {
                    this.day = Math.floor(this.leftTime/1000/60/60/24);
                    this.hour = Math.floor(this.leftTime/1000/60/60%24);
                    this.minute = Math.floor(this.leftTime/1000/60%60);
                    this.second = Math.floor(this.leftTime/1000%60);
                }
            },
            showAll(){
                for(let i = 1; i < this.planList.length; i++){
                    if(!this.planList[i].isShow){
                        this.planList[i].isShow = true;
                    }else{
                        this.planList[i].isShow = false;
                    }
                }
            },
            showAllComment(){
                for(let i = 3; i < this.commentList.length; i++){
                    if(!this.commentList[i].isShow){
                        this.commentList[i].isShow = true;
                    }else{
                        this.commentList[i].isShow = false;
                    }
                }
            }
        },

    }
</script>
<style scoped>
  h1{
    font-size: 45px
  }
  a{
    text-decoration:none;
  }
  .atitle{
    color: #0090FF;
  }
  .content{
    width:100%;
    overflow: hidden;
  }
  .wrapper{
    width:1200px;
    height:100%;
    overflow: hidden;
  }
  .back{
    margin-top: 20px;
    width:100%;
    height:400px;
    border-radius:20px;
    background: linear-gradient(to right top, #480d8b, #0b3c7a);
    color:#fff;
    text-align: center;
    position: relative;
  }
  .back-info{
    padding-top:35px;
  }
  .count-down p,.back-info p{
    font-size:18px;
  }
  .back-btns{
    padding-top: 22px;
  }
  .back button{
    width:110px;
    height:35px;
    border:1px solid #fff;
    border-radius: 5px;
    background: none;
    color:#fff;
    margin-right:30px;
  }
  .count-down{
    padding-top: 10px;
  }
  .count-down span{
    font-size: 26px;
    font-weight:bold;
  }
  .front{
    width:70%;
    height:150px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 1px 1px 1px 1px #e9e9e9;
    position: absolute;
    left:50%;
    transform: translateX(-50%) translateY(-100px);
    display: flex;
  }
  .front div{
    flex:1;
    border-right: 3px #0090ff solid;
    height:60%;
    margin-top: 30px;
    padding-left:40px;
    font-size:15px;
  }
  .front div:last-child{
    border:none;
  }
  .front div p:nth-child(2){
    font-size:22px;
    font-weight:bold;
  }
  .preLesson:hover,.lessonSechedule:hover{
    color:#0090ff;
    background: #fff;
  }
  .classNav ul{
    
    margin:0 auto;
    position: absolute;
    left:50%;
    transform: translateY(80px) translateX(-150px);

  }
  .classNav li{
    float:left;
    color:#333;
    margin-right: 20px;
  }
  .bot-line{
    height:3px;
    width:40px;
    border-radius: 10px;
    background: #0090ff;
    margin:0 auto;
  }
  .active{
    color:#0090ff !important;
  }
  .class-intro{
    height:200px;
    width:100%;
    background: #006abc;
    margin-top: 150px;
    color:#fff;
    position: relative;
  }
  .class-intro span{
    position: absolute;
    top:20px;
    left:40px;
    font-size:22px;
    font-weight: bold;
  }
  .class-intro p{
    position: absolute;
    top:60px;
    left:40px;
    width:600px;
  }
  .class-intro img{
    position: absolute;
    height:200px;
    right:20px;
  }
  .class-skill{
    margin-top:20px;
    /*background: #f8fafc;*/
    height:100%;
  }
  .class-skill img{
    height:500px;
    float: left;
  }
  .class-skill>p,.skill-intro p:first-child{
    font-size: 22px;
    font-weight:bold;
    color:#333;
  }
  .class-skill>p{
    float: right;
  }

  .class-skill-r{
    position: relative;
    color:#333;
  }
  .skill-intro{
    position: absolute;
    left:510px;
    top:30px;
  }
  .class-skill ul{
    position: absolute;
    width:600px;
    top:100px;
    left:450px;
  }
  .class-skill-r ul li{
    height:100%;
    width:210px;
    border-bottom:2px solid #333;
    margin:30px 30px 10px 60px;
    float: left;
  }
  .class-skill-r ul li h4{
    font-weight: bold;
  }
  .treatment{
    color:#333;
    margin-top:70px;
    text-align: center;
  }
  .treatment-items{
    display: flex;
  }
  .treatment-items img{
    height: 60px;
    width: 60px;
    margin-top: 20px;
  }

  .treatment-items div{
    flex:1;
    height:130px;
    width:120px;
    background: #f8fafc;
    border-radius: 10px;
    margin:30px 10px 10px 10px;
  }
  .treatment-items p{
    margin-top: 10px;
    color:#484949;
  }

  .lesson-plan{
    background: #f8fafc;
    margin-top:40px;
    text-align: center;
    color:#333;
    padding:20px 0 20px 0;
    transition: height 1s ease;
  }
  .lesson-plan h3, .plan-detail h4{
    margin:10px;
    font-weight: bold;
  }
  .lesson-plan p:nth-child(2){
    margin: 10px auto;
    width: 800px;
    text-align: left;
    line-height: 30px;
  }
  .plan-items{
    display: flex;
    margin: 20px 0 40px 0;
  }
  .plan-items p{
    width:200px;
    margin: 0 auto;
  }

  .plan-items>div{
    width:120px;
    height:150px;
    flex:1;
    background: #fff;
    margin:10px;
    border-radius: 10px;
  }
  .plan-items>div>div{
    height:40px;
    background: #999;
    color:#fff;
    line-height: 40px;
    border-radius: 10px 10px 0 0;
  }
  .plan-items>div p{
    font-size: 14px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    color:#bfbfbf;
  }
  .show-all{
    width:180px;
    height: 40px;
    background: #999;
    border-radius: 30px;
    color:#fff;
    line-height: 40px;
    text-align: center;
    margin: 30px auto;

  }
  .show-all img{
    height: 25px;
    width: 25px;
    margin-top: 7px;
  }

  .suitable{
    text-align: center;
    border-bottom:2px solid #000;
    width:500px;
    margin: 20px auto;
  }
  .suitable p{
    margin:20px;
    font-size: 15px;
  }

  .comments{
    text-align: center;
    margin: 20px auto;
  }
  .comments ul{
    display: flex;
    flex-wrap: wrap;
  }

  .comments li{
    width:33.3%;
    box-sizing: border-box;
    padding: 50px;
    float: left;
    border-right:1px solid #000;
    font-size: 14px;
    color:#424242;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .comments li:nth-child(3n){
    border:none;
  }
  .comments li img{
    height:50px;
    width: 50px;
  }
  .comments li p:nth-child(4){
    text-align: left;
  }

  .stars span img{
    height: 20px;
    width: 20px;
  }

</style>
