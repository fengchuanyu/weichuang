<template>
     <div class="news">
       <div class="news-content" v-if="index>=nowindex*10 && index<=nowindex*10+9" v-for="(item,index) in dataList" :key="index+'di'" @click="$router.push({name:'newsdetail',params:{id:index}})">
         <img :src="item.image" alt="">
         <h4 class="title">{{item.title}}</h4>
         <div class="text">{{item.text}}</div>
       </div>
       <div class="news-nav">
         <ul>
           <li @click="homepage" :class="{navBerfore:nowindex==0}">首页</li>
           <li @click="goback" :class="{navBerfore:nowindex==0}">上一页</li>
           <li v-for="(item,index) in indexList" :key="index+'il'" @click="change(index)" :class="{active:index==nowindex}" v-show="judge(index)">{{item}}</li>
           <li @click="nextpage" :class="{navAfter:nowindex==Math.ceil((this.dataList.length-1)/10-1)}">下一页</li>
           <li @click="endpage" :class="{navAfter:nowindex==Math.ceil((this.dataList.length-1)/10-1)}">尾页</li>
         </ul>
       </div>
     </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      dataList:[],
      indexList:[],
      nowindex:0,
      pageNum:0,
    }
  },
  created(){
        this.getData()
    },

   methods:{
        getData(){
           axios.get('./data/newsdata.json')
           .then((response)=>{
                console.log(response);
                this.dataList=response.data.newsData;
                // for(let i=0;i<this.dataList.length;i++){
                // this.dataList[i].pictureSrc=require('@/assets/img/'+this.dataList[i].pictureSrc);                
                // }
                this.pageNum=Math.ceil((this.dataList.length)/10);
                for(let i=0;i<this.pageNum;i++)
                {
                      this.indexList[i]=""+(i+1);
                }  
           })
           .catch((error)=>{
                console.log(error);
           })
        },
        change(index){
            this.nowindex=index;
            scrollTo(0,0);
        },
        homepage(){
          this.nowindex=0;
          scrollTo(0,0)
        },
        goback(){
          this.nowindex--;
          scrollTo(0,0);
          if(this.nowindex<0){
             this.nowindex=0
          }
        },
        judge(index){
                if(this.pageNum -(this.nowindex+1) <= 4 && this.pageNum -(index+1) <= 4){
                    return true;
                }else if(this.nowindex<=index&&index<=this.nowindex+4){
                    return true;
                }
            },

        nextpage(){
          this.nowindex++;
          scrollTo(0,0);
          if(this.nowindex>Math.ceil((this.dataList.length-1)/10-1)){
              this.nowindex=Math.ceil((this.dataList.length-1)/10-1);
          }
        },
        endpage(){
          this.nowindex=Math.ceil((this.dataList.length-1)/10-1);
          scrollTo(0,0)
          // console.log(Math.ceil((this.dataList.length-1)/2-1)); 
        } 
   },   
}
</script>
<style scoped>
.news{
  background: #fff;
  border:1px solid gray;
  width: 1100px;
  margin: 2% auto;
}
.news-content{
  border:1px solid darkgray;
  margin: 0 auto;
  margin-top: 20px;
  height: 200px;
  width: 1050px;
  position: relative;  
}
.news-content img{
  height: 200px;
  width: 300px;
  position: absolute;
  left: 0;
  top: 0;
}
.news-content h4{
  position: absolute;
  left: 310px;
  top: 0;
  right: 10px;
  margin: 0;
  padding: 0;
}
.news-content .text{
  position: absolute;
  left: 310px;
  top: 40px;
  right: 10px;
  height: 150px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
}
ul li{
  list-style: none;
  float: left;
  margin: 0 10px;
  text-align: center;
  height: 24px;
  line-height: 24px;
  cursor: pointer;
}
.news-nav ul{
  margin: 50px auto;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.active{
  background: #000;
  color: #fff;
  border-radius: 50%;
  height: 24px;
  width: 24px;  
}
.navBerfore{
  color: darkgrey;
  cursor: pointer;
}
.navAfter{
  color: darkgrey;
  cursor: pointer;
}
</style>
