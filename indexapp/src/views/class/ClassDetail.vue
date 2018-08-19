<template>
  <div class="content">
    <div class="wrapper">
      <div class="head">
        <div class="back">
          <div class="back-info">
            <h3>Web前端工程师的核心课程</h3>
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
            <span>{{item.title}}</span>
            <div :class="{'bot-line':item.isSelected}"></div>
          </li>
        </ul>
      </nav>
    </div>
    <div class="class-intro">
      <span>清风十里，不如认识你——"Web前端"</span>
      <p>
        Web前端开发是从网页制作演变而来，其中包括三个要素：HTML、CSS和JavaScript；
        Web前端用人数量已经远远超过主流编程语言的开发人员的数量。据统计，我国对于Web前
        端工程师人员的缺口将达到12万。在2017年的岗位全年共招聘136848人，平均每月招聘人
        数需求11412人。
        据数据显示，2017年Web前端岗位月薪最高达到2-3万元，月平均薪资8190元，预计在2018
        年待遇将再一次水涨船高。
      </p>
      <img src="@/assets/img/课程详情_03.png" alt="">

    </div>

      <div class="class-skill">
        <p>前端入门从这里开始</p>
        <img src="@/assets/img/课程详情_07.jpg" alt="">
        <div class="class-skill-r">
          <div class="skill-intro">
            <p>我能学到那些技能</p>
            <p>系统学习html、css、js、jQuery，HTML5 & CSS3，移动端开发、require.js、es6、sass、
              webpack、vue、php、node，你将有能力独立开发应用这些功能的项目。</p>
          </div>
          <ul>
            <li>
              <h4>轮播图特效</h4>
              <p>网页特效中常使用多张图片轮播</p>
            </li>
            <li>
              <h4>弹出层</h4>
              <p>在登录、注册、警告、对话框常会用到</p>
            </li>
            <li>
              <h4>瀑布流</h4>
              <p>广泛应用于电商网站的详细页或商品展示</p>
            </li>
            <li>
              <h4>固定导航</h4>
              <p>网页中常见的导航菜单固定显示在页面的某个部位</p>
            </li>
            <li>
              <h4>楼层导航</h4>
              <p>单击楼层导航时，可滚动至对应的楼层；显示对应楼层时，对应的导航项则发生改变</p>
            </li>
          </ul>
        </div>
      </div>
    <div class="wrapper">
        <div class="treatment">
          <h3>在这里你能享受到的待遇</h3>
          <div class="treatment-items">
            <div  v-for="(item,index) in tratementList" :key="index+'tl'">
              <img :src=item.img alt="">
              <p>{{item.intro}}</p>
            </div>
          </div>
        </div>
    </div>

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
      <div class="show-all" @click="showAll" v-show="!planList[1].isShow">
        查看全部课程安排
        <img src="@/assets/img/arrow.png" alt="">
      </div>
      <div class="show-all" @click="showAll" v-show="planList[1].isShow">
        收起
        <img src="@/assets/img/arrow_up.png" alt="">
      </div>
    </div>

    <div class="wrapper">
      <div class="suitable">
        <h3>合适人群</h3>
        <p>知道你对web前端充满兴趣，你就是最适合的人选</p>
      </div>
      <div class="comments">
        <h3>我在这里只为等待你的到来</h3>
        <ul class="clearix">
          <li v-for="(item,index) in commentList" :key="index+'cl'" v-show="item.isShow">
            <img :src="item.userIcon" alt="">
            <p>{{item.userName}}</p>
            <div class="stars">
              <span v-for="items in item.stars">
                <img src="@/assets/img/star.png" alt="">
              </span>
            </div>
            <p>{{item.content}}</p>
          </li>
        </ul>
      </div>
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

</template>
<script>
    export default {
        data(){
            return{
                classnavList:[
                    {
                        id:0,
                        title:'课程介绍',
                        path:'',
                        isSelected:true,
                    },
                    {
                        id:1,
                        title:'课程大纲',
                        path:'',
                        isSelected:false,
                    },
                    {
                        id:2,
                        title:'学员评价',
                        path:'',
                        isSelected:false,
                    },
                    {
                        id:3,
                        title:'课程笔记',
                        path:'',
                        isSelected:false,
                    },
                ],
                tratementList:[
                    {
                        img:require('@/assets/img/课程详情-1.png'),
                        intro:'庞大广泛的人脉圈',
                    },
                    {
                        img:require('@/assets/img/课程详情-2.png'),
                        intro:'专业的就业指导',
                    },
                    {
                        img:require('@/assets/img/课程详情-3.png'),
                        intro:'丰富的教学经验',
                    },
                    {
                        img:require('@/assets/img/课程详情-4.png'),
                        intro:'合理的课程安排',
                    },
                    {
                        img:require('@/assets/img/课程详情-5.png'),
                        intro:'最牛的就业保障',
                    }
                ],
                planList:[
                    {
                        title:'第一阶段',
                        info:'HTML主要是为“网页创建和其它可在网页浏览器中看到的信息”设计的一种标记语言，为搭建网页结构做出第一步。本阶段主要介绍了HTML的语法基础、表格、表单、等标签，并有案例结合，达到学以致用。',
                        class:[
                            {
                                classTitle:'第1课',
                                introTitle:'HTML基础',
                                introContent:'HTML是网页制作必备技能，在本课程主要介绍HTML概念、语法及常用基础标签。',

                            },{
                                classTitle:'第2课',
                                introTitle:'HTML表格',
                                introContent:'表格在网页中用于数据和排版本课程介绍表格概念、语法、操作，并通过案例掌握知识。',
                            },{
                                classTitle:'第3课',
                                introTitle:'HTML表单',
                                introContent:'表单用于收集用户信息，本课程介绍表单概念、语法及创建表单,并通过案例掌握知识。',
                            },{
                                classTitle: '第4课',
                                introTitle: '搭建网页HTML结构',
                                introContent: '本课程带领大家一起搭建一个网页HTML结构，并掌握网布局相应知识与技巧。',
                            },{
                                classTitle:'第5课',
                                introTitle:'课程进阶',
                                introContent:'本课程介绍什么是元数据，以及如何使用CSS样式，并通过案例掌握知识。',
                            },
                        ],
                        isShow:true,
                    },
                    {
                        title:'第二阶段',
                        info:'CSS”部分（英语：Head）、和“主体”部分（英语：Body），其中“头”部提供关于网页的信息，“主体”部分提供网页的具体内容。',
                        class:[
                            {
                                classTitle:'第1课',
                                introTitle:'CSS基础',
                                introContent:'HTML没有1.0版本是因为当时有很多不同的版本。有些人认为蒂姆·伯纳斯-李的版本应该算初版，这个版本没有IMG元素。当时被称为HTML+的后续版的开发工作于1993年开始，最初是被设计成为“HTML的一个超集”。',
                            },{
                                classTitle:'第2课',
                                introTitle:'CSS',
                                introContent:'HTML3.0规范是由当时刚成立的W3C于1995年3月提出，提供了很多新的特性，例如表格、文字绕排和复杂数学元素的显示。',
                            },{
                                classTitle:'第3课',
                                introTitle:'CSS',
                                introContent:'HTML 4.0同样也加入了很多特定浏览器的元素和属性，但是同时也开始“清理”这个标准.',
                            },{
                                classTitle: '第4课',
                                introTitle: 'CSS',
                                introContent: 'HTML 5草案的前身名为Web Applications 1.0。于2004年被WHATWG提出',
                            },{
                                classTitle:'第5课',
                                introTitle:'CSS',
                                introContent:'XHTML 5，从XHTML 1.x的更新版，基于HTML 5草案。',
                            },
                        ],
                        isShow:false,
                    },
                    {
                        title:'第三阶段',
                        info:'HTML超文本标记语言的结构包括“头”部分（英语：Head）、和“主体”部分（英语：Body），其中“头”部提供关于网页的信息，“主体”部分提供网页的具体内容。',
                        class:[
                            {
                                classTitle:'第1课',
                                introTitle:'JS基础',
                                introContent:'素。当时被称为HTML+的后续版的开发工作于1993年开始，最初是被设计成为“HTML的一个超集”。',
                            },{
                                classTitle:'第2课',
                                introTitle:'JS',
                                introContent:'HTML3.0规范是由当时刚成立的W3C于1995年3月提出，提供了很多新的特性，例如表格、文字绕排和复杂数学元素的显示。',
                            },{
                                classTitle:'第3课',
                                introTitle:'JS',
                                introContent:'HTML 4.0同样也加入了很多特定浏览器的元素和属性，但是同时也开始“清理”这个标准.',
                            },{
                                classTitle: '第4课',
                                introTitle: 'JS',
                                introContent: 'HTML 5草案的前身名为Web Applications 1.0。于2004年被WHATWG提出',
                            },
                            {
                                classTitle:'第5课',
                                introTitle:'课程进阶',
                                introContent:'XHTML 5，从XHTML 1.x的更新版，基于HTML 5草案。',
                            },
                        ],
                        isShow:false,
                    },
                    {
                        title:'第四阶段',
                        info:'HTML超文本标记语言的结构包括“头”部分（英语：Head）、和“主体”部分（英语：Body），其中“头”部提供关于网页的信息，“主体”部分提供网页的具体内容。',
                        class:[
                            {
                                classTitle:'第1课',
                                introTitle:'HTML基础',
                                introContent:'HTML没有1.0版本是因为当时有很多不同的版本。有些人认为蒂姆·伯纳斯-李的版本应该算初版，这个版本没有IMG元素。当时被称为HTML+的后续版的开发工作于1993年开始，最初是被设计成为“HTML的一个超集”。',
                            },{
                                classTitle:'第2课',
                                introTitle:'HTML表格',
                                introContent:'HTML3.0规范是由当时刚成立的W3C于1995年3月提出，提供了很多新的特性，例如表格、文字绕排和复杂数学元素的显示。',
                            },
                            {
                                classTitle:'第3课',
                                introTitle:'HTML表单',
                                introContent:'HTML 4.0同样也加入了很多特定浏览器的元素和属性，但是同时也开始“清理”这个标准.',
                            },{
                                classTitle: '第4课',
                                introTitle: '搭建网页HTML结构',
                                introContent: 'HTML 5草案的前身名为Web Applications 1.0。于2004年被WHATWG提出',
                            },{
                                classTitle:'第5课',
                                introTitle:'课程进阶',
                                introContent:'XHTML 5，从XHTML 1.x的更新版，基于HTML 5草案。',
                            },
                        ],
                        isShow:false,
                    },
                ],

                commentList:[
                    {
                        userName:'nicheng',
                        stars:4,
                        userIcon:require('@/assets/img/user.png'),
                        content:'讲的很不错，每小结都有自己独有的知识点，每个章节可以覆盖很多知识点，总体来讲真的很全面。课程也是不错，其实还是有一定基础的，现',
                        isShow:true,
                    },
                    {
                        userName:'昵称',
                        stars:5,
                        userIcon:require('@/assets/img/user.png'),
                        content:'讲的很不错，每小结都有自己独有的知识点，每个章节可以覆盖很多知识点，总体来讲真的很全面。课程也是不错，其实还是有一定基础的，现在来看看，正好可以巩固自己以前看书漏掉的知识，最有特点的就是课后习题，这一点我个人很喜欢。可能是习惯了吧，习惯听完课有题做的感觉，这样可以迅速的发现哪里自己存在问题，进行查漏补缺，总之课程很棒!',
                        isShow:true,
                    },
                    {
                        userName:'aaa',
                        stars:3,
                        userIcon:require('@/assets/img/user.png'),
                        content:'每个章节可以覆盖很多知识点，总体来讲真的很全面。课程也是不错，其实还是有一定基础的，现',
                        isShow:true,
                    },
                    {
                        userName:'aaa',
                        stars:3,
                        userIcon:require('@/assets/img/user.png'),
                        content:'每个章节可以覆盖很多知识点，总体来讲真的很全面。课程也是不错，其实还是有一定基础的，现',
                        isShow:false,
                    },
                    {
                        userName:'aaa',
                        stars:3,
                        userIcon:require('@/assets/img/user.png'),
                        content:'每个章节可以覆盖很多知识点，总体来讲真的很全面。课程也是不错，其实还是有一定基础的，现',
                        isShow:false,
                    },
                    {
                        userName:'aaa',
                        stars:3,
                        userIcon:require('@/assets/img/user.png'),
                        content:'讲的很不错，每小结都有自己独有的知识点，每个章节可以覆盖很多知识点，总体来讲真的很全面,每个章节可以覆盖很多知识点，总体来讲真的很全面。课程也是不错，其实还是有一定基础的，现',
                        isShow:false,
                    },
                ],
                nextLesson:'2018/8/19 20:27:00',
                now:null,
                end:null,
                leftTime:null,
                day:0,
                hour:0,
                minute:0,
                second:0,
            }
        },
        mounted(){
            setInterval(()=>{
                this.countDown()
            },1000)
        },
        methods: {
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
    padding-top:3%;
  }
  .count-down p,.back-info p{
    font-size:16px;
  }
  .back-btns{
    padding-top: 5%;
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
    width:100%;
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
