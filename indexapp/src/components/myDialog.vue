<template>
    <div class="box">
        <div class="nav">
            <div class="header-first">
                <div class="iconfont icon-cha-copy" id="close"></div>
            </div>
            <div class="header-second">
                <div class="image">
                    <img src="../assets/img/slogo.png" alt="">
                </div>
                <div class="text">
                    <div class="weichuang">唯创网讯-IT教育领导品牌</div>
                    <div class="try">【免费试学】 咨询010-12345678</div>
                </div>
            </div>
            <div class="content-first">
                <div class="content-first-part1">
                    <div class="content clearfix">
                        <div class="head">
                            <img src="../assets/img/boyhead.png" alt="">
                        </div>
                        <div class="text">
                            <div class="name-time">
                                唯创王老师   16:27:24
                            </div>
                            <div class="dialog-box">
                                <span>同学您好！请问您咨询什么课程？</span>
                            </div>
                        </div>
                    </div>
                    <div class="content clearfix">
                        <div class="head">
                            <img src="../assets/img/boyhead.png" alt="">
                        </div>
                        <div class="text">
                            <div class="name-time">
                                唯创王老师   16:27:24
                            </div>
                            <div class="dialog-box">
                                <span>唯创网讯专注IT培训，培养学员超过十万名！</span>
                            </div>
                        </div>
                    </div>
                    <div class="bubble">
                        <div class="text">
                            感谢您的咨询！谢谢，再见！
                        </div>
                    </div>
                </div>
                <div class="content-first-part2">
                    <div class="content"><span>当前对话已结束，您可以<a href="">开始新对话</a>或<a href="">留言</a></span></div>
                </div>
            </div>
            <div class="content-second">
                <div class="content-second-header">
                    <div>关于我们</div>
                </div>
                <div class="content-second-text">
                    <div>唯创网讯是黑龙江省内最早最专
                        业最权威的WEB全栈培训机构，
                        自2012年以来培养了大批高质量
                        学员，我们不断努力，不断创造
                        奇迹，我们每一年都培养出大量
                        的优秀高薪就业学员，平均每年
                        有超过72%~80%的学生都就业
                        与互联网企业，工资平均超过14
                        万，在省内拥有超高的口碑。
                    </div>
                </div>
                <div class="content-second-logo">
                    <div><img src="../assets/img/logo.png" alt=""></div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
        import '@/assets/iconfont/iconfont.css'
    export default {
        name: "myDialog"
    }
</script>

<style scoped>
    .clearfix:after {
        content:"";
        display: block;
        clear:both;
    }
    .box{
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.5);

        z-index: 1;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
 .nav{
     width: 800px;
     height: 600px;
     background: #fff;
     border-radius: 2%;
     overflow: hidden;
     margin: 50px auto;
     z-index: 2;
 }
    .header-first{
        height: 35px;
        width: 100%;
        background:#eeeeee;
        position: relative;
    }
    .header-first #close{
        float: left;
        margin-left: 10px;
            color: #e64d4c;
        text-align: center;
        line-height: 35px;
    }
    .header-second{
        width: 100%;
        height: 80px;
        background: #4a90fc;
        position: relative;
    }
 .content-first{
     position: relative;
     width: 65%;
     height: 485px;
     background: #fff;
     border-right: 1px solid #dedede;
     float: left;
 }
 .content-first .content-first-part1{
     height: 325px;
     border-bottom: 1px solid #dedede;
 }
    .content-first .content-first-part2 .content{
        height: 160px;
        text-align: center;
        line-height: 160px;
        font-size: 20px;
        font-weight: bolder;
    }
    .content-first .content-first-part2 .content a{
        color: #4c8fea;
    }
 .content-first .head{
     width: 70px;
     height: 70px;
     border-radius: 50%;
     float: left;
     margin: 10px;
 }
 .content-first .head img{
     width: 70px;
     height: 70px;
 }
 .content-first .text{
     float: left;
     margin: 10px 0;
 }
 .content-first .text .name-time{
     color: #b9b9b9;
     font-size: 16px;
     left: 10px;
 }
 .content-first .text .dialog-box{
     background: #eee;
     height: 35px;
     text-align: center;
     line-height: 35px;
     border-radius:5%;
     padding: 3px;
 }
    .content-first .bubble{
        height: 40px;
        position:relative;
    }
    .content-first .bubble .text{
        width: 182px;
       height: 35px;
        background: #eeeeee;
        color: #a5a5a5;
        border-radius: 5%;
        text-align: center;
        line-height: 35px;
        position: absolute;
        margin: 10px auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
.image img{
    float: left;
    width: 50px;
    height: 50px;
    margin: 15px;
}
 .header-second .text{
        float: left;
        margin: 10px;
        color: white;
    }
 .header-second.text .weichuang{
     font-size: 18px;
 }
    .content-second{
        position: relative;
        width: 279px;
        height: 485px;
        background: #fff;
        float: left;
    }
    .content-second .content-second-header{
        height: 55px;
        border-bottom: 1px solid #dedede;
        text-align: center;
        line-height: 55px;
        font-size: 20px;
        color: #2e2e2e;
        font-weight: bolder;
    }
    .content-second .content-second-text{
        height: 250px;
        border-bottom: 1px solid #dedede;
        font-weight: bolder;
        font-size: 16px;
        color: #676767;
        padding: 20px;
    }
    .content-second .content-second-logo div{
        height: 139px;
        width: 279px;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }
    .content-second .content-second-logo div img{
        width: 60%;
    }

</style>