<!--  -->
<template>
<div class="good-number">
    <i class="iconfont icon-minus-circle" :class="{'on':food['count']>0}" @click="reduce(food)"></i>
    <span class="good-num" :class="{'on':food['count']>0}">{{food['count']}}</span>
    <i class="iconfont icon-add-circle" @click="addCar(food)"></i>
    </div>
</template>

<script>


export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
props:{
    food:{
        type:Object,
            default:()=>{
                count:0
            }
    }
    
},
//监听属性 类似于data概念
computed: {},

//方法集合
methods: {
    addCar(food){
      
      this.food['count']++;
     
    
    },
    // 减少购物车数量
    reduce(food){
      // this.carState = true
       this.food['count']--;
    }
},

created() {

},

}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
div {
           
            & i {
              vertical-align: sub;
            }
            .icon-minus-circle {
              margin-right: -90px;
              display: none;
              opacity: 0;
              transition: all 1s;
              &.on {
                display: inline;
                opacity: 1;
                margin-right: 0;
              }
            }

            span {
              margin: 0 20px;
              display: none;
              opacity: 0;
              transition: opacity 1s;
              &.on {
                opacity: 1;
                display: inline;
                color: red;
              }
            }
             .icon-add {
            &-circle {
              font-size: 40px;
              color: #00a0dc;
            }
          }
          .icon-minus-circle {
            font-size: 40px;
            color: #00a0dc;
          }
          }
</style>