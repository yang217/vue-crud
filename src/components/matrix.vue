<template>
  <div>
    <!-- <div class="matrixForm">
        <ul v-for='i in this.$store.state.n'>
          <li v-for='j in $parent.$store.state.n'>
            <input type="number" v-bind:value='val[(i)][(j)]' required="required" />
          </li>
      </ul>
    </div> -->
    <div v-html="matrixForm" class="matrixForm" id="matrixForm"></div>
    <div style="clear:both;width:100%;"></div>
    <button @click='cal()' class="enter" >计算</button>
    <div class="result">{{res}}</div>
  </div>
</template>
<style>
.matrixForm{
  padding: 15px;
}
.matrixForm ul{
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  justify-content:center;
}
.matrixForm ul li{
  display: block;
  margin: 8px;
  flex-grow:1;
  height: 25px;
  margin-left: 5px;
}
.matrixForm ul li input{
  display: block;
  text-align: center;
  width: 100%;
  height: 100%;
}
.result{
  font-size: 2rem;
  text-align: center;
  display: block;
  width: 100%;
  color: 	#ff7575;
}
.enter{
  display: block;
  width: 80%;
  background-color:#FF8F59;
  color: #FFF;
  font-size: 1.4rem;
  border-radius: 5px;
  text-align: center;
  border: none;
  margin: 15px auto;
}
</style>
<script>
import det from '../lib/det.js';
export default {
  data:function(){
    return {
      res:0,
      val:[]
    }
  },
  computed:{
    matrixForm:function(){
      var code='';
      console.log(this.$store.state)
      for (var i = 0; i < this.$store.state.n; i++) {
        code+='<ul>';
        for (var j = 0; j < this.$store.state.n; j++) {
          var value;
          if(this.val.hasOwnProperty(i) && this.val[i].hasOwnProperty(j)){
            value = this.val[i][j];
          }else{
            value = 0;
          }
          code+='<li><input type="number" data-i="'+i+'" data-j="'+j+'" required="required" value="'+value+'" /></li>';
        }
        code+='</ul>';
      }
      return code;
    }
  },
  methods:{
    cal:function(){
      var val=new Array(this.$store.state.n);
      for (var i = 0; i < this.$store.state.n; i++) {
        val[i]=new Array(this.$store.state.n);
      }
      for( i of document.querySelector("#matrixForm").querySelectorAll("input[type=number]")){
        if(i.value==''){
          i.value=0;
        }
        val[i.dataset.i][i.dataset.j]=i.value;
      }
      this.val=val;
      this.res=det(val);
      return ;
    }
  }
}
</script>
