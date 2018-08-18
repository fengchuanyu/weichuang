<template>
  <div style="background-color: white">
    <!--顶部渐变蓝色+白色框-->
    <div class="bigbox">
      <div class="bluebox">
        <div class="all">
          <div class="course"><span>Web前端工程师的核心课程</span></div>
          <div class="offer"><span>本课程以帮助数千名在校大学生获得国内公司BAT公司offer</span></div>
          <div class="BtnLesson" >
            <button class="btn1">免费试听</button>
            <button class="btn2">查看课表</button>
          </div>
          <div class="offer"><span>距离下次开课还有:</span></div>
          <div class="time" ><span><countdown @time-end="message = '倒计时结束'" :endTime='endTime'></countdown></span></div>
        </div>
      </div>
      <div class="whitebox">
        <table class="whitebox_table">
          <tr>
            <td class="whitebox_left">
              <div><span>课程时长</span></div>
              <div><span class="course_1">6个月</span></div>
              <div><span>每周2天课，每天8小时</span></div>
            </td>
            <td class="whitebox_middle">
              <div><span>下次开课</span></div>
              <div><span class="course_1" >2018年9月1日 9:00</span></div>
              <div><span>第一节为免费试听课</span></div>
            </td>
            <td class="whitebox_right" style="border-right: 0">
              <div><span>授课讲师</span></div>
              <div><span class="course1" >谢老师</span></div>
              <div><span>唯创高级讲师</span></div>
            </td>
          </tr>
        </table>
      </div>

    </div>
    <!--点击切换图片-->
    <div class="anchor">
      <table class="anchor_1">
        <tr style="font-size: 20px">
          <a href=""><td id="introduce">课程介绍<br><div class="line" id="introduce1"></div></td></a>
          <td style="width: 20px"></td>
          <a href=""><td id="outline">课程大纲<br><div class="line" id="outline1"></div></td></a>
          <td style="width: 20px"></td>
          <a href=""><td id="evaluate">学员评价<br><div class="line" id="evaluate1"></div></td></a>
          <td style="width: 20px"></td>
          <a href=""><td id="note">课堂笔记<br><div class="line" id="note1"></div></td></a>
        </tr>
      </table>
    </div>
    <div class="blue">
      <div class="text1" style="float: left;width: 400px;height: 200px">
        <span>清风十里，不如认识你 ------   Web前端</span>
        <p>
          Web前端开发是从网页制作演变而来，其中包括三个要素：HTML、CSS和JavaScript；
          Web前端用人数量已经远远超过主流编程语言的开发人员的数量。据统计，我国对于Web前端工程师人员的缺口将达到12完。在2012年的岗位全年共招聘136848人，平均每月招聘人数需求11412人。
          据数据显示，2017年web前端岗位月薪最高达到2-3万元1，月平均薪资8190元，预计在2018年待遇将再一次水涨船高。
        </p>
      </div>
      <div class="picture1" style="float: right;margin-right: 40px">
        111
      </div>
    </div>
    <span style="float: right;">前端入门从这里开始</span>
    <!--左右两个box-->
    <div class="killbox">
      <div class="LeftPicture"></div>
      <div class="Right" style="float: right"></div>
    </div>
    <!--在这里享受到的待遇-->
    <div class="fivepicture" style="position: relative;display: inline">
      <div>
        picture
        庞大广泛的人脉圈
      </div>
      <div>
        picture
        庞大广泛的人脉圈
      </div>
      <div>
        picture
        庞大广泛的人脉圈
      </div>
      <div>
        picture
        庞大广泛的人脉圈
      </div>
      <div>
        picture
        庞大广泛的人脉圈
      </div>
    </div>
    <!--课程该如何安排-->
    <div class="box2">
      <span>课程如何安排</span>
      <span>第一阶段</span>
      <p>一大段话</p>
      <div class="box3">
        <!--数组五个格子-->
      </div>
      <!--查看全部课程的小按钮,点击下拉刷新格子-->
      <button></button>
    </div>
    <!--bottom盒子-->
    <div class="box2">
      <span>适合人群</span>
      <span>只要你对web前端充满兴趣，你就是最适合的人群</span>
      <!--此处一条横线-->
      <div class="box3">
        <span>我在这里只为等待你的到来</span>
        <!--数组五个格子-->
      </div>
      <!--查看全部课程的小按钮,点击下拉刷新格子-->
      <button></button>
    </div>
  </div>
</template>
<script>
    import countdown from '@/components/countdown.vue'
    export default {
        components : {
            countdown
        },
        data () {
            return {
                message : '正在倒计时',
                endTime : '2018-09-1 9:00:00'
            }
        }
    }
</script>
<style scoped>
  .blue{
    width: 100%;
    height: 300px;
    background-color: rgb(0, 144, 255);
    margin-top: -60px;
  }
  .anchor table tr a{
    color: black;
  }
  td{
    border: 0;
  }
  .anchor table tr a:hover{
    color: rgb(0, 144, 255);
    cursor: pointer;
  }
  .anchor table tr a:hover .line{
    visibility: visible;
  }
  .bluebox{
    height: 400px;
    width: 1200px;
    border-radius: 30px;
    color: white;
    margin:30px auto;
    background: radial-gradient(left bottom , ellipse cover , rgb(74, 16, 138) 5% , rgb(64, 18, 135) 46% , rgb(23, 53, 126) 64% , rgb(11, 61, 124) 95%);
    background: -o-radial-gradient(left bottom , ellipse cover , rgb(74, 16, 138) 5% , rgb(64, 18, 135) 46% , rgb(23, 53, 126) 64% , rgb(11, 61, 124) 95%);
    background: -ms-radial-gradient(left bottom , ellipse cover , rgb(74, 16, 138) 5% , rgb(64, 18, 135) 46% , rgb(23, 53, 126) 64% , rgb(11, 61, 124) 95%);
    background: -moz-radial-gradient(left bottom , ellipse cover , rgb(74, 16, 138) 5% , rgb(64, 18, 135) 46% , rgb(23, 53, 126) 64% , rgb(11, 61, 124) 95%);
    background: -webkit-radial-gradient(left bottom , ellipse cover , rgb(74, 16, 138) 5% , rgb(64, 18, 135) 46% , rgb(23, 53, 126) 64% , rgb(11, 61, 124) 95%);
  }
  .time, .course{
    font-size: 30px;
  }
  .offer, .BtnLesson, .offer{
    font-size: 20px;
  }
  .all{
    width: 1200px;
    height: 400px;
    text-align:center;
    /*padding-top: 25px;*/
  }
  .course, .offer, .BtnLesson, .time{
  }
  .course{
    padding-top: 30px;
  }
  .offer{
    padding-top: 15px;
  }
  .btn1{
    margin-right: 80px;
  }
  .time{
    padding-top: 10px;
  }
  .whitebox_table{
    margin: 0 auto;
    width: 800px;
    height: 130px;
    margin-top: 40px;
  }
  .BtnLesson{
    padding-top: 30px;
  }
  .btn1,.btn2{
    width: 150px;
    height: 50px;
    border: 0px white solid;
    border-radius: 10px;
    background: none;
    color: white;
  }
  .btn1:hover{
    background-color: white;
    color: rgb(0, 144, 255);
  }
  .btn2:hover{
    background-color: white;
    color: rgb(0, 144, 255);;
  }
  .whitebox{
    width: 1000px;
    height: 200px;
    border: 1px white solid;
    box-shadow:0px 1px 1px gray;
    margin-left: 100px;
    margin-top: -80px;
    background-color: white;
    border-radius: 20px;
    }
  .whitebox td{
    font-size: 18px;
    border-right: 2px rgb(0, 144, 255) solid;
    border-left: 0;
    border-top: 0;
    border-bottom: 0;
    }
  .whitebox table tr td div{
    margin-left: 20px;
  }
  .anchor{
    width: 600px;
    height: 150px;
    /*border: 1px black solid;*/
    /*box-shadow:0px 1px 1px gray;*/
    margin-left: 350px;
    margin-top: 10px;
    background-color: white;
    border-radius: 20px;
  }
  .line{
    margin-top: 10px;
    margin-left: 8px;
    width: 60px;
    border-top: 1.5px rgb(0, 144, 255) solid;
    visibility: hidden;
  }

  .note .evaluate .introduce .outline :hover{
    color:  rgb(0, 144, 255);
  }
  table{

  }
</style>
