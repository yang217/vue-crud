<template>
    <div>
<h1>我是这个父组件的子组件</h1>
<a @click="get">GET</a>
<ul>
    <li v-for="(item,index) in listdata" :key='index' @click='getindex(index)' :class="{avtive:index==currenindex}">
        名字是{{item.name}}邮箱是<a  :href="item.email">{{item.email}}</a>
        <a @click.stop="del(index)" class="e">删除</a>
        <a @click.stop="edi(index)" class="e">修改</a>
    </li>
</ul>
<div class="model" :class="{active:ismodel}">
    <h3>修改面板</h3>
 <label>
    姓名 <input type="text" v-model="value1">
 </label>
  <label>
    邮箱 <input type="text" v-model="value2">
    
 </label>
 <a @click="close">确定</a>
</div>
    </div>
    
</template>

<script>
export default {
    data(){
      return{
         currenindex:0,
         value1:'',
         value2:'',
         ismodel:0,
         editindex:''
         
      }
    },
    props:{
        listdata:{
            type:Array,
            default:()=>[]
        }

    },
    mounted() {
        console.info(this.listdata,'22')
    },
    methods:{
        get(){
           console.log(this.listdata) 
        },
        getindex(index){
             
               this.currenindex=index
              
               
        },
        del(index){
            var isdelet=confirm('是否要删除');
            if(isdelet){
               
                this.listdata.splice(index,1)
            }
        },
        edi(index){
          
            this.ismodel=1;
            this.editindex=index;


        },
        close(){
       
         this.listdata[this.editindex].name=this.value1;
         this.listdata[this.editindex].email=this.value2;
         this.ismodel=0;  
        }

    }
    

}
</script>

<style lang="scss" scoped>
$color:green;
 div{
    padding: 30px 0;
    border:2px $color dotted;
    text-align: center;
    position: relative;
    h1{
        padding: 25px 0;
        background: $color;
    }
   
 }
 ul{
        li.avtive{
            background: palegreen;
        }a.e{
            color: purple;
        }
    }
 .model{
     width: 500px;
     height: 200px;
     padding: 50px;
     background: rgba(223,221,322,1);
     position: absolute;
     top: -300px;
     text-align: center;
     display: none;
 }
 .model.active{
     display: block;
 }
 .model label{
     display: block;
     margin: 30px;
 }
</style>
