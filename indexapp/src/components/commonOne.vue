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
                    <ul v-for="(item,index) in items.src" :key='index+"bl"'>
                        <li>{{item.name}}</li>
                        <li>{{item.school}}</li>
                        <li>{{item.company}}</li>
                    </ul>
                </div>
            </div>
            <div class="container-three" v-show="isshow">
                <div @click="btnone" class="btn-two">
                    <div class="btn-one btn-three">&lt</div>
                </div>
            </div>
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
                    <div class="btn-one">&lt</div>
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
        height: 580px;
        margin: auto;
        padding-left: 80px;
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
    .head-one li{
        margin: 0 60px 0 90px;
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
        text-align: left;
    }
    .nav-two-one{
        padding-left: 100px;
    }
    .nav-two li{
        padding: 0px 85px 6px 145px;
    }
    .nav-two-title, .nav-two-src{
        padding: 0px 3px 10px 3px;
    }
    .btn-one{
        font-size: 36px;
        color: white;
        font-weight: bolder;
        display: block;
        transform: rotate(90deg);
    }
    .btn-three{
        line-height: 100px;
    }
    .container-three .btn-two{
        width: 80px;
        height: 40px;
        background-color: #008ffd;
        line-height: 40px;
    }
    .container-three{
        width: 80px;
        margin: 0 auto;
    }
</style>
