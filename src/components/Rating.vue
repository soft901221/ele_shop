<!-- 店铺 -->
<template>
  <Scroll>
    <div>
      <div class="ratings">
        <!-- 顶部 -->
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
              <span>{{sellers.deliveryTime}}分钟</span>
            </p>
          </div>
        </div>
      </div>
      <!-- 顶部end -->

      <!-- 评论区 -->
      <div>
        <div class="ratings-content-filter">
          <span
            v-for="(item,index) in ratingTypes"
            :key="index"
            :class="[item.flag,{'selected':item.type==ratingType}]"
            @click="slectItem(item.type)"
          >{{item.label}}{{item.count}}</span>
        </div>
        <!-- 只看有评论的 -->
        <p class="p-selected" @click="selectRatings" :class="{'on':selectRating==true}">
          <i class="iconfont icon-success"></i> 只看有内容的评论
        </p>
        <div class="ratings-content-list">
          <ul>
            <li v-for="(item,index) in ratsIndex" :key="index">
              <div>
                <img :src="item.avatar" alt />
              </div>
              <div>
                <p>
                  <span>{{item.username}}</span>
                  <i class="times">{{item.rateTime}}</i>
                </p>
                <star-score :stars="item.score"></star-score>
                <span>{{item.deliveryTime}}分送达</span>
                <p>{{item.text}}</p>
                <div class="recommendation">
                  <i :class="['iconfont',item.rateType==0?'icon-good':'icon-bad']"></i>
                  <span v-for="(rat,i) in item.recommend" :key="i">{{rat}}</span>
                </div>
              </div>
            </li>
          </ul>
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
    StarScore,
  },
  data() {
    return {
      sellers: {},
      ratings: [],
      ratingType: -1, //默认查看全部(好评，差评)
      selectRating: false, //默认看全部评论
      ratingTypes: [
        {
          label: "全部",
          flag: "all",
          type: -1,
        },
        {
          label: "满意",
          flag: "positive",
          type: 0,
        },
        {
          label: "不满意",
          flag: "negative",
          type: 1,
        },
      ],
      // ratsIndex:[]
    };
  },
  created() {
    // 加载评论1
    this.$axios
      .get("/ratings")
      .then((res) => {
        this.ratings = res.data.data;
        this.ratsIndex = this.ratings;
        this.ratingTypes.forEach((item) => {
          if (item.type == -1) {
            item.count = this.ratings.length;
          } else {
            item.count = this.ratings.filter(
              (rat) => rat.rateType == item.type
            ).length;
          }
        });
        console.log(11);
        console.log(this.ratingTypes);
      })
      .then(() => {
        // 加载评分
        this.$axios.get("/seller").then((res) => {
          this.sellers = res.data.data;
        });
      });
  },
  computed: {
    ratsIndex: {
      get() {
        // console.log(val);
        if (this.ratingType == -1) {
          if (!this.selectRating) {
            return this.ratings;
          } else {
            return this.ratings.filter((item) => {
              return item.text != "";
            });
          }
        } else {
          if (!this.selectRating) {
            return this.ratings.filter((item) => {
              return item.rateType == this.ratingType;
            });
          } else {
            return this.ratings.filter((item) => {
              console.log(this.selectRating == false);
              return item.rateType == this.ratingType && item.text != "";
            });
          }
        }
      },
      set(newval) {},
    },
  },
  methods: {
    slectItem(type) {
      console.log(type);
      this.ratingType = type;
    },
    // 选择评论状态
    selectRatings() {
      this.selectRating = !this.selectRating;
      console.log(this.selectRating);
      // if(this.selectRating){

      //   this.ratsIndex = this.ratings.filter(item=>{
      //           return item.text !=''&& this.ratingType==-1 || item.rateType==this.ratingType

      //         })
      //         console.log( this.ratingTypes.length);
      // }else{
      //    this.ratsIndex = this.ratings
      // }
    },
  },
};
</script>
<style lang="scss" scoped>
.ratings {
  padding: 40px;
  border-bottom: 30px #eee solid;
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
      p {
        line-height: 45px;
        span:nth-of-type(1) {
          margin-right: 30px;
        }
      }
    }
  }
}
.ratings-content-filter {
  span {
    width: 130px;
    height: 60px;
    line-height: 60px;
    display: inline-block;
    margin: 20px;
    text-align: center;
  }

  span.all {
    background: #d6ecf8;
  }
  span.positive {
    background: #d6ecf8;
  }
  span.negative {
    background: #ccc;
    color: #fff;
  }
  span.selected {
    color: white;
    background: #00a0dc;
  }
}
.ratings-content-list {
  li {
    display: flex;
    flex-wrap: nowrap;
    padding: 20px;
    & > div:nth-of-type(1) {
      width: 10%;
      margin-right: 20px;
      img {
        display: block;
        width: 100%;
        border-radius: 50%;
      }
    }
    & > div:nth-of-type(2) {
      .times {
        float: right;
        font-size: 20px;
        color: #93999f;
      }
      .recommendation {
        i {
          color: #00a0dc;
          font-size: 30px;
          vertical-align: middle;
        }
        span {
          color: #93999f;
          border: 1px solid #93999f;
          line-height: 40px;
          height: 40px;
          display: inline-block;
          box-sizing: border-box;
          padding: 0 20px;
          font-size: 18px;
          text-align: center;
          margin: 10px;
        }
      }
    }
  }
}
.p-selected i {
  font-size: 32px;
  color: #93999f;
}
.p-selected.on i {
  color: #00a0dc;
}
</style>