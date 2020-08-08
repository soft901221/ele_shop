<!-- 店铺 -->
<template>
  <Scroll>
    <div class="ratings">
      <div class="rating-top">
        <div class="rating-top-left">
          <h2>{{sellers.score}}</h2>
          <h3>综合评估</h3>
          <p>高于周边商家{{sellers.rankRate}}%</p>
        </div>
        <div class="rating-top-right">
          <p>
            <span>服务态度</span>
            <star-score :stars="sellers.serviceScore"></star-score>
          </p>
          <p>
            <span>商品评分</span>
           <star-score :stars="sellers.foodScore"></star-score>
          </p>
          <p>
            <span>配送时间</span>
            <span>38分钟</span>
          </p>
        </div>
      </div>
    </div>
  </Scroll>
</template>

<script>
import Scroll from "@/components/Scroll";
import StarScore from "@/components/star-score";
export default {
  components: {
    Scroll,
    StarScore
  },
  data(){
      return{
        sellers:{}
      }
  },
  created() {
      this.$axios.get('/seller').then((res)=>{
          console.log(res.data.data);
        //   this.sellers = res.data.data
        this.sellers = res.data.data
      })
  },
};
</script>
<style lang="scss" scoped>
.ratings {
  padding: 40px;
  .rating-top {
    display: flex;
    flex-wrap: nowrap;
    .rating-top-left {
      width: 40%;
      border-right: 2px solid #ccc;
      h2 {
        color: #f90;
        font-size: 45px;
        text-align: center;
      }
      h3 {
        font-size: 30px;
        font-weight: 300;
        text-align: center;
      }
      p {
        font-size: 22px;
        color: #777;
        margin-top: 10px;
        text-align: center;
      }
    }
    .rating-top-right {
      width: 60%;
      padding-left: 37.5px;
      p{
          line-height: 45px;
          span:nth-of-type(1){
              margin-right: 30px;
          }
      }
    }
  }
}
</style>