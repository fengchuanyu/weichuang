<template>
    <div class="container">
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
                    <ul v-for="(item,index) in items.src" :key='index+"bl"'>
                        <li>{{item.name}}</li>
                        <li>{{item.school}}</li>
                        <li>{{item.company}}</li>
                    </ul>
                </div>
            </div>
            <div></div>
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
        </div>
        <div class="container-three" v-show="isshow">
            <img src="../assets/img/load.gif" alt="">
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                dataLists:[],
                title:["学员姓名","毕业学校","就业公司"],
                isif:true,
                isifs:false,
                type:"type1",
                isEnd:false,
                isfinsh:true,
                isshow:true
            }
        },
        created(){
            if(this.type == "type1"){
                this.getData();
            }else if(this.type == "type2"){
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
        },
        mounted() {
            window.onscroll = () => {
                let scrollTop = document.documentElement.scrollTop;   //滚动高度
                let scrollHeigth = document.documentElement.scrollHeight;   //可滚动高度
                let clientHeight = document.documentElement.clientHeight;    //可视高度
                let heigh = scrollTop - scrollHeigth + clientHeight;
                //console.log(heigh);
                if (heigh >= 0) {
                    if(this.isfinsh) {
                        if (!this.isEnd) {
                            //this.isshow = true;
                            this.isfinsh = false;
                            if(this.type == "type1"){
                                this.getData();
                            }else if(this.type == "type2"){
                                this.getDatas();
                            }
                        }
                    }
                }
            }
        }
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
    .container{
        width: 1038px;
        margin: auto;
        padding: 50px 80px 20px 80px;
        border: 1px solid #dddddd;
        position: relative;
    }
    .head-one{
        font-weight: bolder;
        margin-left: 160px;
        margin-bottom: 30px;
        font-size: 30px;
    }
    .head-one li{
        margin-left: 160px;
    }
    .head-two-one{
        color: #008ffd;
        position: absolute;
        font-weight: bolder;
        font-size: 26px;
    }
    .head-two-one div{
        height: 18px;
        width: 18px;
        border: 1px solid #008ffd;
        position: absolute;
        border-radius: 50%;
        left: 211px;
        top: 0px;
        background-color: white;
        z-index: 1;
    }
    .nav-two{
        position: relative;
        left: 221px;
        top: 0px;
        border-left: 1px solid #dddddd;
        color: #313131;
        font-size: 22px;
    }
    .nav-two li{
        padding: 0px 115px 6px 125px;
    }
    .nav-two-one{
        padding: 0 100px;
    }
    .nav-two-title, .nav-two-src{
        padding: 0px 3px 10px 3px;
    }
    .container-three{
        text-align: center;
    }
</style>
