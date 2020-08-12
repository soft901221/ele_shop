<!--  -->
<template>
  <div class="maingoods">
    <!-- 左侧商品导航 -->
    <Scroll :data="data" class="navleft" ref="navScroll">
      <ul>
        <li
          ref="navGoods"
          v-for="(item,index) in data"
          :key="index"
          :class="{'active':index==activeIndex}"
          @click="changeIndex(index)"
        >{{item.name}}</li>
      </ul>
    </Scroll>
    <!-- 右侧商品 -->
    <Scroll
      class="navright"
      ref="goodsScroll"
      :data="data"
      @scroll="foodScroll"
      :pulldown="pulldown"
      @pulldown="loadData"
    >
      <ul class="content">
        <li v-for="items in data" :key="items.id" ref="goodsGroup" class="typetitle">
          <h5>{{items.name}}</h5>
          <ul>
            <li v-for="item in items['foods']" :key="item.id">
              <div class="pic">
                <img :src="item.image" alt />
              </div>
              <div class="desc">
                <h4>{{item.name}}</h4>
                <p v-if="item.description">{{item.description}}</p>
                <div class="ys">
                  <span>月售{{item.sellCount}}份</span>
                  <span>好评率{{item.rating}}%</span>
                </div>
                <div class="price">
                  ￥ {{item.price}}
                  <div>
                    <i class="iconfont icon-add-circle"></i>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <div class="loading-wrapper"></div>
    </Scroll>
    <div class="fixCar">
      <div class="car">
        <span>231</span>
        <i class="iconfont icon-cart-Empty-fill"></i>
      </div>
      <span class="total-price" >￥ 20元</span>
      <span class="freight">另需配送费20元</span>
      <span class="toCar">去结算</span>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Scroll from "@/components/Scroll";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { Scroll },
  data() {
    return {
      data: [],
      pulldown: true,
      activeIndex: 0,
      heightToTop: [0], //每个栏目对应滚动距离合集
      scrollY: 0, //滚动的距离
    };
  },

  //方法集合
  methods: {
    loadData() {
      this.$axios
        .get("/goods")
        .then((res) => {
          console.log(res.data.data);
          this.data = res.data.data.concat(this.data);
        })
        .then(() => {
          console.log(this.$refs.goodsGroup);
          this.$refs.goodsGroup.forEach((el, index) => {
            this.heightToTop.push(el.offsetHeight + this.heightToTop[index]);
          });
          console.log(this.heightToTop);
        });
    },
    // 商品滚动
    foodScroll(res) {
      this.scrollY = Math.abs(Math.round(res.y));
      // console.log(this.scrollY);
      for (let i = 0; i < this.heightToTop.length; i++) {
        if (
          this.scrollY >= this.heightToTop[i] &&
          this.scrollY < this.heightToTop[i + 1]
        ) {
          this.activeIndex = i;
          console.log(i);
          // console.log(this.$refs.goodsScroll);
          if (i === this.$refs.goodsGroup.length - 2) {
            //当滚动到倒数第2个位置时左侧列表向上滚动一个距离

            this.$refs.navScroll.scrollToElement(this.$refs.navGoods[1], 100);
          }
          if (i === 2) {
            //向下滚动时，左侧列表向下滚动一个距离
            this.$refs.navScroll.scrollToElement(this.$refs.navGoods[0], 100);
          }
        }
      }
    },
    //左侧商品导航点击事件
    changeIndex(i) {
      this.activeIndex = i;
      console.log(this.$refs.navGoods);
      const target = this.$refs.goodsGroup[i];
      this.$refs.goodsScroll.scrollToElement(target, 300);
      console.log(target);
      console.log(i);
    },
  },
  created() {
    this.loadData();
  },
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.maingoods {
  display: flex;
  flex-wrap: nowrap;
  .navleft {
    width: 250px;
    li {
      text-align: center;
      background: #eee;
      box-sizing: border-box;
      padding: 40px;
      &.active {
        background: white;
      }
    }
  }
}
.typetitle {
  background: #eee;
  color: #93999f;
  h5 {
    line-height: 60px;
    text-indent: 10px;
    font-size: 24px;
  }
  ul {
    background: white;
    li {
      display: flex;
      flex-wrap: nowrap;
      border-bottom: 2px solid #eee;
      padding: 20px 0;
      .pic {
        width: 160px;
        img {
          width: 100%;
        }
        flex-grow: 0;
      }
      .desc {
        margin-left: 16px;
        flex-grow: 1;
        .price {
          color: red;
          font-weight: 500;
          position: relative;
          div {
            position: absolute;
            right: 30px;
            top: 0;
          }
          .icon-add {
            &-circle {
              font-size: 40px;
              color: #00a0dc;
            }
          }
        }
        .ys {
          margin: 10px 0;
        }
      }
    }
  }
}
.fixCar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100px;
  width: 100%;
  background: #07111b;
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
    i {
      font-size: 60px;
      color: #999;
    }
    span {
      position: absolute;
    }
    
  }
  .toCar{
      display: block;
    background: #2b333b;
    height: 100px;
    width: 200px;
    position: absolute;
    top: 0;
    right: 0;
    line-height: 100px;
    text-align: center;
    font-size: 26px;
    }
}
</style>