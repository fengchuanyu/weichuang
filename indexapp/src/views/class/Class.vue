<template>
  <div>
    <class-title></class-title>
    <class-components v-for="(items,index) in objList" :key='index+"ul"' :itemProps='items'></class-components>
  </div>
</template>
<script>
import classComponents from '@/components/classComponents.vue'
import classTitle from '@/components/classTitle.vue'
export default {
  created(){
     this.getData();
  },
  data(){
    return{
      objList:[]
    }
  },
  components:{
    classComponents:classComponents,
    classTitle:classTitle
  },
  methods:{
        getData(){
        axios.get('./data/class.json').then((res)=>{
        this.objList = res.data.objList;
        let i;
        for(i=0;i<this.objList.length;i++){
          this.objList[i].avatarUrl=require('@/assets/img/'+this.objList[i].avatarUrl)
        }
      })
    }
  }
}
</script>
<style scoped>
</style>
