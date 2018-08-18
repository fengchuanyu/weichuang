<template>
        <div>
            <div id="bcover"> </div>
            <transition name="show">
            <div class="tdcontainer" v-show="true">

                <div class="t-photo">
                    <img  :src="itemProps.src" alt="">
                </div>
                <div class="t-title">
                    <p class="t-name">{{itemProps.name}}</p>
                    <div class="t-line"></div>
                    <p class="t-position">{{itemProps.job}}</p>
                </div>
                <div class="detial">
                    {{itemProps.introduction}}
                    五年前端开发经验，曾任职聚美优品高级前端工程师，京东商城技术部、服饰家居
                    事业部资深web前端工程师，期间主导了商城的重构以及负责大促首页前端项目，
                    工作中积累了丰富的各种Web开发技术的实战经验。
                </div>
            </div>
            </transition>
        </div>


</template>
<script scoped>
    import axios from "axios";
    export default {
        props:['itemProps'],
        data(){
            return{
            }

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
            }
        }
    }
</script>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    #bcover{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: #171716;
        opacity: 0.4;
    }
.tdcontainer{

    width: 500px;
    border: 1px solid #f8fafc;
    background-color: #f8fafc;
    border-radius: 15px;
    position: relative;
}
.tdcontainer .t-photo{
    width: 100px;
    height:100px;
    border: 2px solid #fb8957;
    border-radius: 50%;
    position: relative;
    top: -50px;
    left: 50%;
    margin-left: -50px;
    overflow: hidden;
}
.tdcontainer .t-title{
    position: absolute;
    top: 56px;
    left: 50%;
    margin-left: -50px;
}
    .tdcontainer .t-name{
        font-size: 22px;
        text-align: center;
        color: #333333;
    }
    .tdcontainer .t-line{
        background-color:#fb8957 ;
        width: 100px;
        height: 2px;
        margin:0 auto;
    }
    .tdcontainer .t-position{
        text-align: center;
        font-size: 15px;
        font-weight: lighter;
        color: #666666;
    }
    .tdcontainer .detial{
        font-size: 16px;
        color: #333333;
        margin: 17px 35px;
       /* position: absolute;
        top: 115px;*/
    }
    .show-enter-active,.show-leave-active{
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
    }
</style>