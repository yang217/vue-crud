<template>
    <div id="socked">
    <h1>我是父组件</h1>
    <input type="text" v-model="value1"  placeholder="姓名" ref="input1">
    <input type="text" v-model="value2"  placeholder="邮箱">
    <input type="text" v-model="value3" placeholder="查询">
    <button @click="getdata">查询</button>
    <a @click="add">添加</a>
    <h2>{{value1}}====>{{value2}}</h2>
    <list :listdata="list"></list>
    <h4>查询到的数据</h4>
    <p v-if='newlist.length==0'> 没有数据哦</p>
    <ul>
        <li v-for="(item,index) in newlist" :key='index'>{{item.name}}+{{item.email}}</li>
    </ul>
    <ul>


    </ul>
    </div>
</template>

<script>
import list from './list.vue'
export default {
 data(){
     return {
         value1:'',
         value2:'',
         value3:'',
         list:[
           {
             name:'jspnm1',email:'43831188@163.com',
             
            
           },
           {
             name:'jspnm2',email:'43831188@163.com',
             
           },
           {
             name:'jspnm3',email:'43831188@163.com',
             
           },
           {
             name:'杨222222',email:'43831188@163.com',
             
           }



         ],
         newlist:[]

     }
 },
 components:{
     list
 },
 methods:{
     add(){
         var ref1=this.$refs.input1;
         console.log(ref1.value)
         ref1.value='杨豪'
         this.list.push({name:this.value1,email:this.value2})
     },
     getdata(){
        
        this.list.forEach(element => {
            if(element.name.indexOf(this.value3)>-1||element.email.indexOf(this.value3)>-1){
                this.newlist.push(element)
            }
         

        });
     }
 }
}
</script>

<style lang='scss' scoped>
 $pink:pink;
 div{
    border: 1px orangered solid;
    padding: 30px;
    border-radius: 15%;
     text-align:center;

   h1{
     background: $pink;
     padding: 50px 0;
     text-align:center;
  }
  input{
      display: block;
      width: 80%;
      margin: 20px auto;
      height: 40px;
      line-height: 40px;
  }
  a{
      color: blueviolet;
  }
 }

</style>
