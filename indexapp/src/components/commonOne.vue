<template>
    <div class="containers">
        <div class="container-one" v-if="isif">
            <div class="head-one">
                <ul>
                    <li v-for="(items,index) in title" :key='index+"dl"'>{{items}}</li>
                </ul>
            </div>
            <div v-for="(items,index) in dataLists" :key='index+"al"' class="head-two">

                <div class="head-two-one">
                    {{items.year}}
                    <div></div>
                </div>
                <div class="nav-two">
                    <ul v-for="(item,index) in items.src" :key='index+"bl"' class="">
                        <li>{{item.name}}</li>
                        <li>{{item.school}}</li>
                        <li>{{item.company}}</li>
                    </ul>
                </div>
            </div>
            <!-- <div class="container-three" v-show="isshow">
                <div @click="btnone" class="btn-two">
                    <div class="btn-one btn-three">&lt;</div>
                </div>
            </div> -->
        </div>
        <div class="container-two" v-if="isifs">
            <div v-for="(items,index) in dataLists" :key='index+"cl"' class="head-two">
               
                <div class="head-two-one">
                    {{items.year}}
                    <div></div>
                </div>
            
                <div  class="nav-two nav-two-one">
                    <div class="nav-two-title">
                        {{items.titles[0]}}
                    </div>
                    <div class="nav-two-src">
                        {{items.src}}
                    </div>
                </div>
            </div>
            <div class="container-three" v-show="isshow">
                <div @click="btnone" class="btn-two">
                    <div class="btn-one">&lt;</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        props:["msg"],
        data(){
            return{
                dataLists:[],
                title:["学员姓名","毕业学校","就业公司"],
                isif:true,
                isifs:false,
                type:"type2",
                isEnd:false,
                isfinsh:true,
                isshow:true
            }
        },
        created(){
            if(this.msg == "type1"){
                this.getData();
            }else if(this.msg == "type2"){
                this.getDatas();
            }
        },
        methods:{
            getData(){
                axios.get('./data/dataList.json').then((res)=>{
                    this.dataLists = this.dataLists.concat(res.data.datalist);
                    this.isfinsh = true;
                    //this.isshow = false;
                    if(res.data.datalist.length == 0){
                        this.isEnd = true;
                        this.isshow = false;
                    }
                }).catch(()=>{

                })
            },
            getDatas(){
                axios.get('./data/dataLists.json').then((res)=>{
                    this.dataLists = this.dataLists.concat(res.data.datalist);
                    this.isif = false;
                    this.isifs = true;
                    this.isfinsh = true;
                    //this.isshow = false;
                    if(res.data.datalist.length == 0){
                        this.isEnd = true;
                        this.isshow = false;
                    }
                }).catch(()=>{

                })
            },
            btnone(){
                if(this.isfinsh) {
                    if (!this.isEnd) {
                        //this.isshow = true;
                        this.isfinsh = false;
                        if(this.msg == "type1"){
                            this.getData();
                        }else if(this.msg == "type2"){
                            this.getDatas();
                        }
                    }
                }
            }
        },
    }
</script>

<style scoped>
    *{
        margin: 0px;
        padding: 0px;
    }
    li{
        list-style: none;
        display: inline-block;
    }
    .containers{
        box-sizing: border-box;
        overflow: hidden;
        width: 100% ;
        height: 599px;
        margin: auto;
        padding-top: 30px;
        position: relative;
        overflow-y: scroll;
    }
    .head-one{
        font-weight: bolder;
        margin-left: 100px;
        margin-bottom: 30px;
        font-size: 30px;
        margin-left: 240px;
        
    }
    .head-two{
        width: 100%
    }
    .head-one ul{
        display: flex;
    }
    .head-one li{
        text-align: center;
        flex: 1;
    }
    .head-two-one{
        color: #008ffd;
        position: absolute;
        font-weight: bolder;
        font-size: 26px;
        width: 25%;
        text-align: center
    }
    .head-two-one div{
        height: 18px;
        width: 18px;
        border: 1px solid #008ffd;
        position: absolute;
        border-radius: 50%;
        left: 211px;
        top: 12px;
        background-color: white;
        z-index: 1;
    }
    .nav-two{
        margin-left: 240px;
        text-align: center;
        top: 0px;
        
        color: #313131;
        font-size: 22px;
        
    }
    .nav-two-one{
        padding-left: 100px;
        
    }
    .nav-two ul{
        display: flex
    }
    .nav-two li{
        flex: 1 ;
        text-align: center;
    }
    .nav-two-title, .nav-two-src{
        padding: 0px 3px 10px 3px;
    }
    .btn-one{
        font-size: 36px;
        color: white;
        font-weight: bolder;
        display: block;
        transform: rotate(270deg);
        position: relative;
        left: 20px;
        width: 40px;
    }
    .btn-three{
        bottom: 10px;
    }
    .container-three .btn-two{
        width: 80px;
        height: 40px;
        background-color: #008ffd;
        line-height: 40px;
        position: relative;
        bottom:0px;
    }
    .container-three{
        width: 80px;
        margin: 0 auto;
    }
    .head-two-left{
        width: 30%
    }
</style>
