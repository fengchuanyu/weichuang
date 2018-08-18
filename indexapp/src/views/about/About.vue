<template>
  <div class="container">
        <div class="company">
           <div class="image">
               <img :src="companySrc" alt="">
           </div>
            <div class="text">
                    <p>
                        {{companyIntroduction}}
                    </p>
            </div>
        </div>
        <div class="teacher">
            <div class="header">
                <h3>金牌导师阵容</h3>
                <span></span>
            </div>
            <div class="content">
                <ul class="list">
                    <li v-for="(items,index) in teachers" :key="index +'cl'" @click="gotodetial(items)">
                        <div class="cirle"><img :src="items.src" alt=""></div>
                        <h3>{{items.name}}</h3>
                        <span></span>
                        <p class="job">{{items.job}}</p>
                        <div class="details">
                            {{items.introduction}}
                            <a href="https://www.baidu.com/" class="more">更多资历→</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="load-content"></div>
            <!--<transition name="show">-->
                <teacherdetial  v-show="isShow" class="techaer-detial" :itemProps='nowItem' @click.native="disappear">
                </teacherdetial>
          <!--  </transition>-->
        </div>
        <div class="history">
            <div class="his-header">
                <h3>发展历程</h3>
                <span></span>
                <div class="content"></div>
            </div>
        </div>
        <div class="connect">
            <div class="con-header">
                <h3>联系我们</h3>
                <span></span>
            </div>
            <div class="content">
                    <div class="image">
                        <div class="curtain">
                            <div class="inner">
                                <p>学府总校：学府书城写字楼822室内 </p>
                                <p>咨询热线/微信</p>
                                <p>18545859788 18545857988</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
  </div>
</template>
<script>
    import teacherdetial from '@/components/TeacherDetail.vue'
import axios from "axios";
export default {
    components:{
        teacherdetial,
    },
  data() {
    return {
      teachers: [],
      companyIntroduction: "",
      companySrc: null,
        isShow:false,
        nowItem:'',
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("../data/aboutdata.json")
        .then(res => {
          for (let i = 0; i < res.data.teachers.length; i++) {
            res.data.teachers[i].src = require("@/assets/img/" +
              res.data.teachers[i].src);
          }
          for (let j = 0; j < res.data.company.length; j++) {
            res.data.company[j].src = require("@/assets/img/" +
              res.data.company[j].src);
          }
          this.teachers = res.data.teachers;
          this.companySrc = res.data.company[0].src;
          this.companyIntroduction = res.data.company[0].introduction;
        })
        .catch(() => {

        });
    },
      gotodetial(item)
      {
          this.isShow = true;
          this.nowItem=item;
      },
      disappear(){
          this.isShow=false;
      }
  }
};
</script>
<style scoped>
.container {
  margin-top: 20px;
  position: relative;
  width: 1200px;
}
.company {
  background: #fff;
  border: 1px solid #ccc;
  padding: 30px 30px;
}
/*.show-enter-active,.show-leave-active{
    transition:all 2s;
}
.show-enter{
   transform: scale(0.8);
}
.show-leave-to{
    transform: scale(0.2);
}
.show-enter-to,.show-leave{
    margin-left:0px;
}*/
.company .image img {
  display: block;
  margin: 0 auto;
  padding-bottom: 30px;
  width: 100%;
}
.text {
  padding: 0 30px;
  display: flex;
  justify-content: center;
}
.text p {
  font-size: 18px;
  font-weight: normal;
}
.container .teacher .header,
.history .his-header,
.connect .con-header {
  text-align: center;
  padding: 20px 0;
}
.container .teacher .header span,
.history .his-header span,
.connect .con-header span {
  display: block;
  margin: 10px auto;
  width: 44px;
  border-bottom: 2px solid #4a90fc;
}
.list {
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: space-between;
}
.list img {
  width: 100%;
  display: block;
  margin: 0 auto;
}
.list li .cirle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 25px auto 0 auto;
  background: white;
  overflow: hidden;
}
.list li:nth-child(4n + 1) .cirle,
.list li:nth-child(4n + 1) span {
  border: 1px solid #ec9170;
}
.list li:nth-child(4n + 2) .cirle,
.list li:nth-child(4n + 2) span {
  border: 1px solid #51a1d3;
}
.list li:nth-child(4n + 3) .cirle,
.list li:nth-child(4n + 3) span {
  border: 1px solid #6f71fa;
}
.list li:nth-child(4n + 4) .cirle,
.list li:nth-child(4n + 4) span {
  border: 1px solid #c0983d;
}
.list li span {
  display: inline-block;
  width: 128px;
}
.content .job {
  font-weight: lighter;
  color: #676766;
}
.content .details {
  padding: 10px;
}
.content .details .more {
  padding-top: 30px;
  float: right;
  color: #529de3;
}

.content .list li {
  width: 278px;
  height: 400px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  background: #fff;
}
.history .content {
  width: 1198px;
  height: 598px;
  border: 1px solid #ccc;
  background: #fff;
}
.connect {
  margin-bottom: 50px;
}
.connect .content {
  width: 1158px;
  border: 1px solid #ccc;
  padding: 20px;
  background: #fff;

}
.connect .content .image {
  height: 350px;
  background: url("../../assets/img/map.png");
  margin: 0 auto;
  padding: 20px;
}
.connect .content .curtain {
  width: 100%;
  height: 350px;
  background: white;
  opacity: 0.8;
  margin: 0 auto;
  position: relative;
}
.connect .content .inner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.connect .content .inner p {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
.techaer-detial{
   position: fixed;
    left:50%;
    top:50%;
    margin-left:-250px;
    margin-top: -125px;
    z-index: 1;


}
</style>
