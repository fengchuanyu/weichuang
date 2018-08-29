<template>
  <div class="page">
    <div class="content">
      <div v-if="newId==index" v-for="(item,index) in dataList" :key="index+'nl'">
          <h1>{{item.title}} </h1>
          <h5>{{item.data}} </h5><br>
          <hr style="position:absolute; left:5%; width:90%"><br>
          <ul>
            <li>{{item.text}} </li><br>
            <img :src="item.image" alt="">
          </ul>
      </div><br>
          <hr style="position:absolute; left:5%; width:90%"><br>
          <div class="choose">
            <div class="left clearfix">
              <span v-if="newId==0" @click="homepage" :style="style">首页</span> <span v-if="newId==0" @click="goback" :style="style">上一页</span>
              <span v-if="newId!=0" @click="homepage">首页</span> <span v-if="newId!=0"  @click="goback" >上一页</span>
            </div>
            <div class="right clearfix">
               <span v-if="newId!=this.dataList.length-1" @click="nextpage">下一页</span>  <span v-if="newId!=this.dataList.length-1" @click="endpage">尾页</span>
               <span v-if="newId==this.dataList.length-1" @click="nextpage" :style="style">下一页</span>  <span v-if="newId==this.dataList.length-1" @click="nextpage" :style="style">尾页</span>
            </div>
          </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
       created(){
          this.getData();
       },
       computed:{
         style(){
           return {color:`gray`}
         }
       },
       data(){
         return{
           dataList:[],
           newId:this.$route.params.id
         }
       },
       methods:{
         getData(){
           axios.get('./data/newsdata.json')
           .then((res)=>{
               this.dataList=res.data.newsData
           })
         },
         homepage(){
          //  console.log("home");
           this.newId=0,
           scrollTo(0,0)
         },
         goback(){
           this.newId--,
           scrollTo(0,0);
           if(this.newId<0){
             this.newId=0
           }
         },
         nextpage(){
           this.newId++,
           scrollTo(0,0);
           if(this.newId>this.dataList.length-1){
             this.newId=this.dataList.length-1
           }
         },
         endpage(){
           this.newId=this.dataList.length-1,
           scrollTo(0,0)
         }
       },
}
</script>
<style scoped>
   .page{
     margin: 5% auto;
     width: 100%;
     height: 100%;
   }
   ul li{
     list-style: none;
   }
   .content{
     position: relative;
     border: 1px solid #ddd;
     background: #fff;
     text-align: center;
     padding: 0 5%;
   }
   .content img{
     width: 85%;
     height:300px;
   }
   .clearfix::after{
     content: "";
     display: block;
     clear: both;
   }
   .content li{
     text-align: left;
   }
   .choose{
     /* text-align: center; */
     line-height: 100px;
     height:100px;
   }
   .left{
     float: left;
     width: 50%;
   }
   .left span{
     padding: 10px;
   }
   .right{
     width: 50%;
     float: right;
   }
   .right span{
     padding: 10px;
   }
   .choose span{
     cursor: pointer;
   }
</style>
