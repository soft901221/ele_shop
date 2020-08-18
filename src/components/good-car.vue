<!--  -->
<template>
<div id="cars">
  <div class="backCar">
  <div class="foodsList" :class="{'carState':carState}">
    <div class="foodsList-title">购物车 <i class="iconfont icon-close" @click="closeCar"></i></div>
    <ul>
        <li v-for="(item,index) in carFoods" :key="index">{{item.name}}<span><em>￥{{item.price}}</em><good-number :food="item"></good-number></span></li>
      </ul>
  </div>
  </div>
  <div class="fixCar">
    
      <div class="car" :class="{'on':carFoods.length>0}" @click="showCarList">
        <span :class="{'on':carFoods.length>0}">{{carFoodsLength}}</span>
        <i class="iconfont icon-cart-Empty-fill" :class="{'on':carFoods.length>0}"></i>
      </div>
      <span class="total-price" :class="{'on':carFoods.length>0}">￥ {{totalPrices}}元</span>
      <span class="freight">另需配送费20元</span>
      <span class="toCar" :class="{'on':carFoods.length>0}" @click="tolayer">去结算</span>
      
</div>
</div>

</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import goodNumber from "@/components/good-number";
export default {
//import引入的组件需要注入到对象中才能使用
components: {goodNumber},
props:{
    carFoods:{
        type:Array,
        default:()=>[{}]
    },
   
},
data() {
//这里存放数据
return {
carState:false
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
      
      return pre+cur.count*cur.price
    },0)
  }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  // 查看购物车
  showCarList(){
    console.log(231);
    this.carState = true;
 
  },
  // 关闭购物车
  closeCar(){
    this.carState = false
  },
  // 去结算
  tolayer(){
     this.$layer.open({
    content: `总共花费`+this.totalPrices+'元'
    ,btn: '我知道了'
  });
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
 
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
 console.log(333);
  console.log(this.carFoods);
}
}
</script>
<style lang='scss' scoped>
.foodsList{
  background: white;
  display: none;
  &-title{
    font-size: 30px;
    font-weight: 500;
    line-height: 100px;
    border-bottom: 1px solid #eee;
    padding: 0 20px;
    i{
          float: right;
    font-size: 40px;
    }
  }
  ul{
    li{
      font-size: 30px;
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    span{
       display: flex;
      justify-content: space-between;
      em{
        font-style: normal;
    color: red;
      }
      div{
        margin-left: 20px;
      }
    }
    }
  }
}
.carState{
  display: block;
}
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
    
}

</style>
<style>
  .layui-m-layermain .layui-m-layercont{
  font-size: 40px !important;
}
.layui-m-layerbtn span{
   font-size: 30px !important;
}
.layui-m-layerbtn{
      height: 80px !important;
    line-height: 80px !important;
}
</style>