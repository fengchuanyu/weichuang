<template>
  <div class="big">
    <div class="head-image">
      <img src="@/assets/img/headimg.jpg" alt="">
      <div class="container">
          <div class="title">
            <div class="title-head">
                <span class="title-head-one">核心课程</span><br>
                <div class="title-head-two"></div>
            </div>
            <span class="more" @click="$router.push({name:'class'})">更多&gt;</span>
          </div>
          <div class="info">
            <ul>
              <li v-for="(items,index) in classdata" :key="index+'class'">
                <div class="info-img">
                    <div class="info-img-bg"></div>
                    <img :src="items.src" alt="">
                </div>
                  <div class="info-main">
                      <p class="main-name">{{items.name}}</p>
                      <p class="main-v">{{items.title}}</p>
                      <span>
                        {{items.artist}}
                    </span>
                  </div>
              </li>
            </ul>
          </div>
      </div>
    </div>
    <div class="second">
      <img src="@/assets/img/centerimg.jpg" alt="">
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
        <div class="second-case">
            <div class="container">
                <div class="title title-case">
                    <div class="title-head">
                        <span class="title-head-one">成功案例</span><br>
                        <div class="title-head-two title-case-two"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="caseinfo">
                        <div class="case-title">2018年就业信息</div>
                        <div class="case-body">
                            <div class="case-body-all" :style="photostyle">
                                <img v-for="(items,index) in photodata" :key="index+'photo'" :src="items.src" alt="">
                                <!--<ul class="case-body-all-hang">
                                    <li v-for="(items,index) in casedata" :key="index+'case'" class="case-body-info">
                                        <div class="case-content">
                                            <img :src="items.src" alt="">
                                            <div class="case-content-right">
                                                <div class="case-name">{{items.name}}</div>
                                                <span>{{items.company}} | {{items.school}}</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="case-body-all-hang">
                                    <li v-for="(items,index) in casedata" :key="index+'case'" class="case-body-info">
                                        <div class="case-content">
                                            <img :src="items.src" alt="">
                                            <div class="case-content-right">
                                                <div class="case-name">{{items.name}}</div>
                                                <span>{{items.company}} | {{items.school}}</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="case-body-all-hang">
                                    <li v-for="(items,index) in casedata" :key="index+'case'" class="case-body-info">
                                        <div class="case-content">
                                            <img :src="items.src" alt="">
                                            <div class="case-content-right">
                                                <div class="case-name">{{items.name}}</div>
                                                <span>{{items.company}} | {{items.school}}</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>-->
                            </div>
                        </div>
                        <div class="case-more">
                            <div class="more-content" @click="$router.push({name:'case'})">
                                <span>查看更多</span>
                                <i class="iconfont icon-gengduo"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="third">
        <div class="container">
            <div class="title">
                <div class="title-head">
                    <span class="title-head-one">金牌导师阵容</span><br>
                    <div class="title-head-two"></div>
                </div>
            </div>
            <div class="teacherinfo">
                <ul>
                    <li v-for="(items,index) in teacherdata" :key="index+'teacher'">
                        <div class="teacher-info">
                            <div class="teacher-title">
                                <img :src="items.src" alt="">
                                <p class="teacher-name">{{items.name}}</p>
                                <div></div>
                                <p class="teacher-position">{{items.position}}</p>
                            </div>
                            <div class="teacher-content">
                                <span>{{items.artist}}</span>
                            </div>
                            <div class="teacher-more">更多资历→</div>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    </div>
    <div class="fourth">
        <div class="container">
            <div class="title programme-title">
                    <div class="title-head">
                        <span class="title-head-one">你的个性化培训方案</span><br>
                        <div class="title-head-two"></div>
                    </div>
                </div>
            <div class="programme-head">我们将评估你的专业基础，教育背景与求职需要，并以此为依据，为你定制一套个性化培训方案</div>
            <div class="programme-content">
                    <ul>
                        <li>
                            <div>
                                <img src="@/assets/img/icon4.png" alt="">
                                <p class="programme-content-title">课前咨询</p>
                                <p class="programme-content-body">决定上课前，与您的课程授课老师一对一咨询，以解答困惑。</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="@/assets/img/icon3.png" alt="">
                                <p class="programme-content-title">课程训练</p>
                                <p class="programme-content-body">根据你的个性化培训方案，完成你的课程培训，迅速提高专业水平。</p>
                            </div>

                        </li>
                        <li>
                            <div>
                                <img src="@/assets/img/icon1.png" alt="">
                                <p class="programme-content-title">面试指导</p>
                                <p class="programme-content-body">与老师一对一沟通，完成简历修改和模拟面试，或得内部推荐，为面试做好充分准备。</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="@/assets/img/icon2.png" alt="">
                                <p class="programme-content-title">职前服务</p>
                                <p class="programme-content-body">通过面试后，您还可以从这里获得专业的薪酬谈判、职位选择等咨询服务。</p>
                            </div>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      classdata: [],
      casedata: [],
      teacherdata: [],
      photodata: [],
      isshow: 0
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get("./data/classdata.json").then(response => {
        this.classdata = response.data.ClassData;
        for (let i = 0; i < this.classdata.length; i++) {
          this.classdata[i].src = require("@/assets/img/" +
            this.classdata[i].src);
        }
      });
      axios.get("./data/casedata.json").then(response => {
        this.casedata = response.data.CaseData;
        for (let i = 0; i < this.casedata.length; i++) {
          this.casedata[i].src = require("@/assets/img/" +
            this.casedata[i].src);
        }
      });

      axios.get("./data/teacherdata.json").then(response => {
        this.teacherdata = response.data.TeacherData;
        for (let i = 0; i < this.teacherdata.length; i++) {
          this.teacherdata[i].src = require("@/assets/img/" +
            this.teacherdata[i].src);
        }
      });

      axios.get("./data/photodata.json").then(response => {
        this.photodata = response.data.PhotoData;
        for (let i = 0; i < this.photodata.length; i++) {
          this.photodata[i].src = require("@/assets/img/" +
            this.photodata[i].src);
        }
      });
    }
  },
  computed: {
    photostyle() {
      return {
        width: 1060 * this.photodata.length + "px"
      };
    }
  }
};
</script>
<style scoped>
.big {
  padding-bottom: 30px;
  font-weight: 400;
}
/*head-img开始*/
.head-image {
  width: 100%;
  margin-bottom: 30px;
}
.head-image img {
  width: 100%;
}
.container {
  width: 1060px;
  margin: 0 auto;
}
.title {
  margin: 20px 0;
  text-align: center;
}
.title-head {
  font-size: 26px;
}
.title-head .title-head-two {
  height: 3px;
  background: dodgerblue;
  border-radius: 20%;
  width: 45px;
  margin: 5px auto;
}
.title .more {
  float: right;
  font-size: 19px;
  margin-top: -52px;
  margin-right: 20px;
  color: #6c6c6c;
}
.info {
  height: 340px;
  width: 100%;
}
.info ul {
  height: 340px;
  width: 100%;
}
.info ul li {
  width: 32%;
  background: #ffffff;
  float: left;
  margin-right: 2%;
  height: 340px;
  overflow: hidden;
}
.info ul li:nth-child(3) {
  margin: 0;
}
.info-img {
  height: 180px;
  width: 100%;
  overflow: hidden;
  transform: skew(0deg, 3deg);
  transform-origin: top left;
  margin-top: -17px;
  position: relative;
}
.info-img-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
}
.info-img img {
  width: 100%;
  height: 100%;
  transform: skew(0deg, -3deg);
  margin-top: 8px;
  position: relative;
  z-index: 0;
}
.info-main {
  position: relative;
  margin: 5px 10px 0px 10px;
}
.info-main .main-v {
  border-bottom: 1px solid #bfbfbf;
  font-size: 14px;
  color: #aaaaaa;
  padding-bottom: 5px;
  margin-bottom: 5px;
}
.info-main .main-name {
  font-size: 24px;
}
.info-main span {
  font-size: 16px;
}
/*head-img结束*/

/*second开始*/
.second {
  position: relative;
}
.second-case {
  background: #ffffff;
  margin-top: -20px;
}
.title-case {
  padding-top: 20px;
}
.imgon {
  height: 260px;
  background: rgba(30, 144, 255, 0.7);
  position: absolute;
  top: 0;
  width: 100%;
}
.imgon ul {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
}
.imgon ul li {
  position: relative;
  float: left;
  flex-grow: 1;
  color: white;
  font-size: 19px;
  font-weight: 200;
}
.imgon ul li div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.imgon ul li span {
  display: block;
}
/*case开始*/
.caseinfo {
  height: 450px;
  background: #ffffff;
}
.case-title {
  font-size: 24px;
  text-align: center;
}
.title-head .title-case-two {
  background: mediumpurple;
}
.case-body {
  height: 350px;
  overflow: hidden;
}
.case-body-all {
  padding-top: 20px;
  height: 350px;
  animation: test 60s linear infinite;
  overflow: hidden;
}

@keyframes test {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-2080px);
  }
  100% {
    transform: translateX(0);
  }
}
.case-body-all img {
  float: left;
  width: 1060px;
}

.case-body-all-hang {
  height: 98px;
  width: 1000%;
}
.case-body-all-hang:nth-child(1) {
  margin-left: 100px;
}
.case-body-all-hang:nth-child(3) {
  margin-left: 100px;
}
.case-body-info {
  position: relative;
  padding: 2px;
  border-radius: 40px/40px;
  border: 1px solid dodgerblue;
  float: left;
  margin: 10px;
  background: #f8fafc;
}
.case-content img {
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 1px solid dodgerblue;
  margin: 0 2px;
  float: left;
}
.case-content-right {
  float: left;
  padding-right: 10px;
}
.case-name {
  font-size: 20px;
  font-weight: 500;
}
.case-more {
  position: relative;
  margin: 0 auto;
  height: 40px;
  width: 150px;
  background: dodgerblue;
  border-radius: 20px/20px;
  font-size: 20px;
  line-height: 40px;
  color: #ffffff;
  bottom: 0;
}
.more-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  height: 40px;
  width: 107px;
}
.icon-gengduo {
  position: absolute;
  font-size: 28px;
}
/*case结束*/
/*second结束*/

/*third开始*/
.third {
  padding-bottom: 10px;
}
.teacherinfo {
  height: 400px;
}
.teacherinfo ul {
  width: 100%;
  height: 100%;
}
.teacherinfo ul li {
  width: 23.3%;
  height: 100%;
  background: #ffffff;
  float: left;
  margin-right: 2%;
  border: 1px solid #dddddd;
}
.teacherinfo ul li:nth-child(4) {
  margin: 0;
}
.teacher-info {
  margin: 30px 20px;
}
.teacher-title {
  width: 100%;
  /*height: 160px;*/
  text-align: center;
}
.teacher-title div {
  height: 2px;
  width: 160px;
  background: dodgerblue;
  margin: 1px auto;
}
.teacherinfo ul li:nth-child(1) .teacher-title div {
  background: orange;
}
.teacherinfo ul li:nth-child(2) .teacher-title div {
  background: deepskyblue;
}
.teacherinfo ul li:nth-child(3) .teacher-title div {
  background: blue;
}
.teacherinfo ul li:nth-child(4) .teacher-title div {
  background: yellowgreen;
}
.teacher-title img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}
.teacherinfo ul li:nth-child(1) img {
  border: 2px solid orange;
}
.teacherinfo ul li:nth-child(2) img {
  border: 2px solid deepskyblue;
}
.teacherinfo ul li:nth-child(3) img {
  border: 2px solid blue;
}
.teacherinfo ul li:nth-child(4) img {
  border: 2px solid yellowgreen;
}

.teacher-name {
  font-size: 20px;
  font-weight: 500;
}
.teacher-position {
  color: #bfbfbf;
}
.teacher-content {
  font-size: 15px;
  height: 130px;
  overflow: hidden;
  margin: 10px 0;
}
.teacher-more {
  color: dodgerblue;
  text-align: right;
}
/*third结束*/

/*fourth开始*/
.fourth {
  background: dodgerblue;
  height: 400px;
}
.programme-title {
  padding-top: 20px;
}
.programme-title .title-head-one {
  color: #ffffff;
}
.programme-title .title-head-two {
  background: #ffffff;
}
.programme-head {
  color: #ffffff;
  text-align: center;
  font-size: 20px;
}
.programme-content {
  height: 215px;
  width: 100%;
  margin-top: 20px;
}
.programme-content ul {
  height: 100%;
}
.programme-content ul li {
  width: 22.7%;
  height: 100%;
  margin-right: 3%;
  background: #ffffff;
  float: left;
  text-align: center;
  color: dodgerblue;
  font-weight: 500;
}
.programme-content ul li:nth-child(4) {
  margin: 0;
}
.programme-content ul li div {
  margin: 20px 20px 0 20px;
}
.programme-content ul li img {
  height: 72px;
}
.programme-content-title {
  font-size: 20px;
  font-weight: 500;
}
.programme-content-body {
  text-align: left;
}
/*fourth结束*/
</style>
