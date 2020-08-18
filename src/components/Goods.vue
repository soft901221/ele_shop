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
        <li v-for="(items,index) in data" :key="index" ref="goodsGroup" class="typetitle">
          <h5>{{items.name}}</h5>
          <ul>
            <li v-for="(item,key) in items['foods']" :key="key">
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
                  <good-number :food="shopGoods[index]['foods'][key]"></good-number>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <div class="loading-wrapper"></div>
    </Scroll>
    <good-car :carFoods="selectGoodsList"></good-car>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Scroll from "@/components/Scroll";
import goodNumber from "@/components/good-number";
import goodCar from "@/components/good-car";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { Scroll,goodNumber,goodCar },
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
          this.data = res.data.data.concat(this.data);
          console.log(this.data);
        })
        .then(() => {
          this.$refs.goodsGroup.forEach((el, index) => {
            this.heightToTop.push(el.offsetHeight + this.heightToTop[index]);
          });
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
      const target = this.$refs.goodsGroup[i];
      this.$refs.goodsScroll.scrollToElement(target, 300);
    },
    carFoods(ms){
      console.log(ms);
      this.carfoods = ms
    }
    // 商品添加入购物车
    // addCar(index,key){

    //   this.shopGoods[index]['foods'][key]['count']++;
    //   this.$emit("carFoods",this.selectGoodsList)

    // },
    // // 减少购物车数量
    // reduce(item){
    //   // this.carState = true
    //   console.log(item);
    // }
  },
  computed: {
    shopGoods() {
      try {
        var copyData = this.data;
      } catch (error) {
        return [];
      }

      for (let index = 0; index < copyData.length; index++) {
        //  copyData[index]['count'] = 0;
        this.$set(copyData[index], "count", 0);
        for (
          let index2 = 0;
          index2 < copyData[index]["foods"].length;
          index2++
        ) {
          // copyData[index]['foods'][index2]['count'] = 0;
          this.$set(copyData[index].foods[index2], "count", 0);
        }
      }
      console.log(copyData);
      return copyData;
    },
    selectGoodsList() {
      const selectGoodsList = [];
      this.shopGoods.forEach((good) => {
        console.log(1);
        good.foods.forEach((food) => {
          if (food.count > 0) selectGoodsList.push(food);
        });
      });
      console.log(selectGoodsList);
      return selectGoodsList;
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
         
        }
        .ys {
          margin: 10px 0;
        }
      }
    }
  }
}
</style>