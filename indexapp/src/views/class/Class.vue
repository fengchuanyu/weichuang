<template>
  <div>
    <h1>课程</h1>
    <class-components v-for="(items,index) in objList" :key='index+"ul"'></class-components>
  </div>
</template>
<script>
import classComponents from '@/components/classComponents.vue'
export default {
  data(){
    return{
      objList:[{
        indexObj:1,
        avatarUrl:'',
        teacherName:'someone',
        teacherJob:'JAVA',
        teacherDetail:'hello world!',
        classType:'JAVA',
        classIntroduce:'avatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduce'
      },
      {
        indexObj:2,
        avatarUrl:'',
        teacherName:'someone',
        teacherJob:'JAVA',
        teacherDetail:'hello world!',
        classType:'JAVA',
        classIntroduce:'avatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduce'
      },
      {
        indexObj:3,
        avatarUrl:'',
        teacherName:'someone',
        teacherJob:'JAVA',
        teacherDetail:'hello world!',
        classType:'JAVA',
        classIntroduce:'avatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduce'
      },
      {
        indexObj:4,
        avatarUrl:'',
        teacherName:'someone',
        teacherJob:'JAVA',
        teacherDetail:'hello world!',
        classType:'JAVA',
        classIntroduce:'avatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduce'
      },
      {
        indexObj:5,
        avatarUrl:'',
        teacherName:'someone',
        teacherJob:'JAVA',
        teacherDetail:'hello world!',
        classType:'JAVA',
        classIntroduce:'avatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduceavatar,teacherName,teacherJob,teacherDetail,classType,classIntroduce'
      }]
    }
  },
  components:{
    classComponents:classComponents
  }
}
</script>
<style scoped>

</style>
