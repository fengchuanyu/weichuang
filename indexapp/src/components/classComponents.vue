<template>
    <div>
        <div class="container">
            <div :class="[left,componentsColor]">
                <div class="avatar"></div>
                <h3 class="teacher-name">某老师</h3>
                <span class="teacher-job">web前端工程师</span>
                <div class="teacher-detail-container">
                    <span class="teacher-detail">433333333333333333 33333333333 333333333 3333 333333 333 3333333 33333333 33 3333 333 3333</span>
                </div>
                <div class="more">了解详情-></div>
            </div>
             <div class="right">
                 <h2 :class="componentsColorText">web前端</h2>
                 <h3 :class="componentsColorText">从0开始....</h3>
                 <div class="teacher-introduce-container">
                 <span class="teacher-introduce">433333333333333 a sa s aglsa;kf;a las;lk;a k;ask ;akas; fk;al;k;sa k;sak ;ak ;sok ;sak;ok ;ask ;ak; aksd ;sak;askfo kp;k p;ak; ksa; 333333333333333333333333333333333333333333333333333333333333333333</span>
                 </div>
                <div :class="[studyNow,componentsColor]"><h4 class="study-now-text">立即学习</h4></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container{
    margin-left: 78px;
    margin-bottom: 40px;
    width: 1000px;
    height: 333px;
    background: rgb(238, 238, 238);
    border-radius: 15px 15px;
    overflow: hidden;
}
.left{
width:222px;
height:333px;

float: left;

}
.right{
margin-left: 222px; 
padding-left: 10px;   
width:778px;
height:333px;
/* background: blue; */
}
.avatar{
    margin-left: 8px;
    margin-top: 8px;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background-color: aqua;
    display: inline-block;
    float: left;
}
.teacher-name{
margin-top: 12px;
margin-left: 80px;
}
.teacher-job{
margin-left: 8px;

}
.teacher-detail-container{
    margin-top: 10px;
width:222px;
height:223px;
/* background: beige; */
}
.teacher-detail{
position:relative;
}
.teacher-introduce{

}
.teacher-introduce-container{
width:768px;
height:180px;


}
.components-color{
    background: orange;
}
.components-color-text{
    color: orange;
}
.more{
    margin-left: 150px;
}
.study-now{
    margin-left:650px;
    width: 102px;
    height:35px;
    border-radius: 20px 20px;;
    text-align: center;
    line-height: 35px;
}
.study-now-text{
    color: white;
}
.background-blue{
    background-color: rgb(8, 117, 219);
}
.text-blue{
    color: rgb(8, 117, 219);
}
.background-orange{
    background-color: orange;
}
.text-orange{
    color: orange;
}
.background-green{
    background-color: rgb(71, 209, 101);
}
.text-green{
    color: rgb(71, 209, 101);
}
.background-zi{
    background-color: rgb(136, 29, 179);
}
.text-zi{
    color: rgb(136, 29, 179);
}
</style>
<script>
export default {
    data(){
        return{
            left:'left',
            componentsColor:'components-color',
            studyNow:'study-now',
            componentsColorText:'components-color-text'
        }
    }
}
</script>
