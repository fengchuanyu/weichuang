<template>
    <div>
        <div class="container">
            <div :class="[left,{'background-orange':itemProps.indexObj%5==1},{'background-blue':itemProps.indexObj%5==2},{'background-green':itemProps.indexObj%5==3},{'background-zi':itemProps.indexObj%5==4},{'background-darkorange':itemProps.indexObj%5==0}]">
                <img class="avatar" :src="itemProps.avatarUrl">
                <h3 class="teacher-name text-white">{{itemProps.teacherName}}</h3>
                <span class="teacher-job text-white">{{itemProps.teacherJob}}</span>
                <div class="teacher-detail-container">
                    <div class="teacher-detail text-white">{{itemProps.teacherDetail}}</div>
                </div>
                <div class="more text-white" @click="$router.push({name:'about'})">了解讲师→</div>
            </div>
             <div class="right">
                 <h2 :class="[{'text-orange':itemProps.indexObj%5==1},{'text-blue':itemProps.indexObj%5==2},{'text-green':itemProps.indexObj%5==3},{'text-zi':itemProps.indexObj%5==4},{'text-darkorange':itemProps.indexObj%5==0}]">{{itemProps.classType}}</h2>
                 <h3 :class="[{'text-orange':itemProps.indexObj%5==1},{'text-blue':itemProps.indexObj%5==2},{'text-green':itemProps.indexObj%5==3},{'text-zi':itemProps.indexObj%5==4},{'text-darkorange':itemProps.indexObj%5==0}]">{{itemProps.classTypeDetail}}</h3>
                 <div class="teacher-introduce-container">
                    <span class="teacher-introduce">{{itemProps.classIntroduce}}</span>
                    <div class="teacher-more">
                        <span>参课教师 ：</span>
                        <ul>
                            <li>
                                <img src="../assets/img/user.png" alt="">
                                <div>吴迎</div>
                            </li>
                            <li>
                                <img src="../assets/img/user.png" alt="">
                                <div>Shan Luo</div>
                            </li>
                            <li>
                                <img src="../assets/img/user.png" alt="">
                                <div>William Liu</div>
                            </li>
                        </ul>
                        
                    </div>
                 </div>
                <router-link :to="{name:'classdetail',params:{objindex:itemProps.indexObj}}"><div :class="[studyNow,{'background-orange':itemProps.indexObj%5==1},{'background-blue':itemProps.indexObj%5==2},{'background-green':itemProps.indexObj%5==3},{'background-zi':itemProps.indexObj%5==4},{'background-darkorange':itemProps.indexObj%5==0}]"><h4 class="study-now-text" @click="toStudyNow(itemProps.indexObj)">立即学习</h4></div></router-link>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container{
    margin-bottom: 26px;
    width: 1200px;
    height: 333px;
    border-radius: 25px 25px;
    overflow: hidden;
}
.left{
width:272px;
height:333px;

float: left;

}
.right{
margin-left: 272px; 
padding-left: 27px;   
width:899px;
height:333px;
background: rgb(240, 240, 240);
}
.avatar{
    margin-left: 18px;
    margin-top: 18px;
    width: 82px;
    height: 82px;
    border-radius: 50%;
    background-color: aqua;
    display: inline-block;
    float: left;
    border: 2px solid white;
}
.teacher-name{
margin-top: 24px;
margin-left: 122px;
}
.teacher-job{
margin-left: 22px;
font-size: 16px;
}
.teacher-detail-container{
    margin-top: 35px;
    margin-left: 27px;
width:217px;
height:190px;
/* background: beige; */
}
.teacher-detail{
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 6;
overflow: hidden;
font-size: 16px;

}
.teacher-introduce{
font-size: 16px;
display: inline-block;

}
.teacher-introduce-container{
height:180px;
position: relative;


}
.components-color{
    background: orange;
}
.components-color-text{
    color: orange;
}
.more{
    margin-left: 164px;
    margin-top:-17px;
    font-size: 16px;
    cursor: pointer;
}
.study-now{
    margin-left:754px;
    width: 122px;
    height:35px;
    border-radius: 20px 20px;
    text-align: center;
    line-height: 35px;
    font-size:20px;
}
.study-now-text{
    color: white;
}
.background-blue{
    background-color: rgb(0, 144, 255);
}
.text-blue{
    color: rgb(0, 144, 255);
}
.background-orange{
    background-color: rgb(254,174,23);
}
.text-orange{
    color: rgb(254,174,23);
}
.background-green{
    background-color: rgb(77, 203, 119);
}
.text-green{
    color: rgb(77, 203, 119);
}
.background-zi{
    background-color: rgb(167, 0, 254);
}
.text-zi{
    color: rgb(167, 0, 254);
}
.background-darkorange{
    background-color: rgb(255, 133, 0);
}
.text-darkorange{
    color: rgb(255, 133, 0);
}
.text-white{
    color: white;
}
.teacher-more{
    position: absolute;
    top: 120px;
    text-align: center;
    font-size: 16px;

}
.teacher-more ul{
    float: left;
}
.teacher-more li{
    list-style: none;
    margin-left: 15px;
    float: left;
    text-align: center;
}
.teacher-more span{
    margin-top: 30px;
    float: left;
    font-size: 16px;
}
.teacher-more img{
    margin-left: 35px;
    margin-top: 18px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: aqua;
    display: inline-block;
    border: 2px solid white;
    float: left;
}
.teacher-more div{
    margin-left: 30px;
}
</style>
<script>
export default {
    props:['itemProps'],
    // created(){console.log(this.itemProps);
    // },
    data(){
        return{
            left:'left',
            componentsColor:'components-color',
            studyNow:'study-now',
            componentsColorText:'components-color-text',
            textWhite:'text-wihte'
        }
    },
    methods:{
        toDetail(){
            // this.$router.push('/classdetail');
            console.log('success classdetail');
            
        },
        toStudyNow(objindex){
            console.log('success studynow '+objindex);
        }
    }
}
</script>
