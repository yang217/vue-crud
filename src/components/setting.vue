<template>
  <div>
    <div class="top">计算<a @click='fn()' class="select">{{this.$store.state.n}}</a>阶行列式</div>
    <div v-show='showPanel' class="panel">
      <a  v-for='item in list' @click='change(item)'>{item}</a>
    </div>
    <div style="clear:both;width:100%;"></div>
  </div>
</template>
<style>
.top{
  font-size: 1.4rem;
  font-size: #000;
  text-align: center;
  padding-top: 25px;
}
.panel{
  margin-top: 10px;
  display: flex;
  justify-content:center;
}
.panel a{
  display: block;
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  font-size: 1.2rem;
  border-radius: 5px;
  margin-left: 5px;
  background-color: #FFF;
}
.select{
  padding: 4px 10px;;
  margin: 0 5px;
  text-align: center;
  border-radius: 5px;
  display: inline-block;
  background-color: #ff7575;
  color: #FFF;
}
</style>
<script>
export default {
  data:()=>{
    return {
      showPanel:false,
      n:3,
      list:[2,3,4,5,6,7,8,9]
    }
  },
  methods:{
    fn:function(){
      if(this.showPanel){
        this.showPanel=false;
      }else{
        this.showPanel=true;
      }
    },
    change:function(num){
      this.$store.commit('setN',num);
    }
  }
}
</script>
