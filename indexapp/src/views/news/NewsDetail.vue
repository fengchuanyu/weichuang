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
              <span @click="homepage">首页</span> <span @click="goback">上一页</span>
            </div>
            <div class="right clearfix">
               <span @click="nextpage">下一页</span>  <span @click="endpage">尾页</span>
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
       data(){
         return{
           dataList:[],
           newId:0
         }
       },
       methods:{
         getData(){
           axios.get('./data/newsdata.json')
           .then((res)=>{
               this.dataList=res.data.albums
           })
           .catch((error)=>{
             console.log(error);
           })
         },
         homepage(){
          //  console.log("home");
           this.newId=0
         },
         goback(){
           this.newId--
           if(this.newId<0){
            //  show=false
           }
         },
         nextpage(){
           this.newId++
         },
         endpage(){
           this.newId=this.dataList.length-1
         }
       }
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
     box-shadow:2px 2px 10px 5px rgba(255,255,255,.6);
     border: 1px solid gray;
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
</style>
