<!--  -->
<template>
<div id="cars">
  <div class="foodsList">
    <ul>
        <li v-for="(item,index) in carFoods" :key="index">{{item.name}} {{item.count}}</li>
      </ul>
  </div>
  <div class="fixCar">
      <div class="car" :class="{'on':carFoods.length>0}">
        <span :class="{'on':carFoods.length>0}">{{carFoodsLength}}</span>
        <i class="iconfont icon-cart-Empty-fill" :class="{'on':carFoods.length>0}"></i>
      </div>
      <span class="total-price" :class="{'on':carFoods.length>0}">￥ 33元</span>
      <span class="freight">另需配送费20元</span>
      <span class="toCar" :class="{'on':carFoods.length>0}">去结算</span>
      
    </div>
</div>

</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props:{
    carFoods:{
        type:Array,
        default:()=>[{}]
    }
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {
  carFoodsLength(){
    console.log(this.carFoods);
    try {
      return this.carFoods.reduce((pre,cur)=>{
        console.log(pre);
        console.log(cur);
      return pre+cur.count
    },0)
    } catch (error) {
      return 0
    }
    
  },
  totalPrices(){
    return this.carFoods.reduce((pre,cur)=>{
      return pre.count*pre.prices+cur.count*pre.prices
    })
  }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
 
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
 console.log(333);
  console.log(this.carFoods);
},
methods: {
  
},
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
#cars{
 position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.fixCar {
 
  height: 100px;
  width: 100%;
  background: #07111b;
  .total-price.on{
    color: white;
  }
  >span{
   color: #999;
   &:nth-of-type(1){
     margin-left: 180px;
    font-weight: 800;
    font-size: 36px;
    line-height: 100px;
    margin-right: 40px;
   }
  }
  .car {
    transform: translate(50px, -30px);
    display: inline-block;
    border-radius: 50%;
    // background: #00a0dc;
    background: #333;
    position: absolute;
    padding: 20px;
    &.on{
      background: #00a0dc;
    }
    i {
      font-size: 60px;
      color: #999;
      &.on{
        color: white;
      }
    }
    span {
          position: absolute;
    background: red;
    border-radius: 50%;
    padding: 10px;
    top: -20px;
    right: -20px;
    color: white;
    display: none;
    &.on{
      display: block;
    }
    }
    
  }
  .toCar{
      display: block;
    background: #2b333b;
    height: 100px;
    width: 200px;
    position: absolute;
    bottom: 0;
    right: 0;
    line-height: 100px;
    text-align: center;
    font-size: 26px;
    &.on{
      background: #04b43c;
      color: white;
    }
    }
    ul{
      
    }
}
</style>