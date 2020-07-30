<template>
  <div id="header">
    <div class="top">
      <img src="../assets/seller.jpg" alt />
      <div class="right">
        <h4>一品虾城</h4>
        <p>蜂鸟专送 / 38分钟送达</p>
        <p>
          在线支付满28减5
          <span>5</span>
        </p>
      </div>
    </div>
    <div class="des">
      <span>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span>
      <i></i>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Header",
  mounted() {
   
  }
};
</script>
<style lang="scss" scoped>
#header {
  background-color: rgba(7, 17, 27, 0.5);
  color: #fff;
  // 头开始
  .top {
    display: flex;
    padding: 40px;
    img {
      width: 200px;
      margin-right: 30px;
    }
    .right {
      flex-grow: 1;
      h4 {
        text-indent: 20px;
        font-size: 20px;
      }
      p {
        margin: 10px 20px 5px 0;
        span {
          background: rgba(7, 17, 27, 0.5);
          display: inline-block;
          width: 50px;
          height: 20px;
          border-radius: 10px;
          text-align: center;
          line-height: 20px;
          float: right;
        }
      }
    }
  }
  // 头结束

  // 描述开始
  .des {
    display: flex;
        align-items: center;
        background: rgba(7, 17, 27, 0.2);
        padding: 0 10px;
    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      
      padding: 10px ;
      display: inline-block;
      box-sizing: border-box;
      width: 100%;
    }
    i {
      display: inline-block;
      width: 15px;
      height: 15px;
      border: 1px solid white;
      border-width: 1px 1px 0 0;
      transform: rotate(45deg);
    }
  }
}
</style>

