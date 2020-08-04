<template>
  <div id="home">
    <Header></Header>
    <tar-bar></tar-bar>
    <div class="maingoods">
      <!-- 左侧商品导航 -->
      <Goods :data="data" class="navleft" rel="navScroll">
        <ul>
          <li rel="navGoods" v-for="(item,index) in data" :key="index" :class="{'active':index==activeIndex}" @click="changeIndex(index)">{{item.name}}</li>
        </ul>
      </Goods>
      <!-- 右侧商品 -->
      <Goods class="navright" ref='goodsScroll' :data="data" @scroll="foodScroll" :pulldown="pulldown" @pulldown="loadData">
        <ul class="content">
          <li v-for="items in data" :key="items.id" ref='goodsGroup' class="typetitle">
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
                  <p class="price">￥ {{item.price}}</p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <div class="loading-wrapper"></div>
      </Goods>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import TarBar from "@/components/TarBar";
// import ShopScroll from "@/components/ShopScroll";
import Goods from "@/components/Goods";
// import Rating from "@/components/Rating";
export default {
  name: "Home",
  components: {
    Header,
    TarBar,
    // ShopScroll,
    Goods,
  },
  data() {
    return {
      data: [],
      pulldown: true,
      activeIndex:0,
      heightToTop:[0],//每个栏目对应滚动距离合集
      scrollY:0//滚动的距离
    };
  },
  created() {
    this.loadData();
    
  },
  methods: {
    loadData() {
      this.$axios.get("/goods").then((res) => {
        console.log(res.data.data);
        this.data = res.data.data.concat(this.data);
      }).then(()=>{
        console.log(this.$refs.goodsGroup);
        this.$refs.goodsGroup.forEach((el,index) => {
          this.heightToTop.push(el.offsetHeight+this.heightToTop[index])
        });
        console.log(this.heightToTop);
      })
      ;
    },
    // 商品滚动
    foodScroll(res){
      
      this.scrollY = Math.abs(Math.round(res.y));
      // console.log(this.scrollY);
      for(let i=0;i<this.heightToTop.length;i++){
        if(this.scrollY>=this.heightToTop[i]&&this.scrollY<this.heightToTop[i+1])
        {
          this.activeIndex = i;
          console.log(i);
          // console.log(this.$refs.goodsScroll);
        if (i === this.$refs.goodsGroup.length - 2) {//当滚动到倒数第2个位置时左侧列表向上滚动一个距离
             
             console.log(i);
             console.log(this.$refs);
              }
           
        }
      }
    },
    //左侧商品导航点击事件
    changeIndex(i){
      this.activeIndex = i;
       console.log(this.$refs.navGoods);
      const target = this.$refs.goodsGroup[i];
      this.$refs.goodsScroll.scrollToElement(target,300)
      console.log(target);
    console.log(i);
    }
  },
};
</script>
<style lang="scss" scoped>
#home {
  .maingoods{display: flex;flex-wrap: nowrap;
    .navleft{
      width: 250px;
      li{
        text-align: center;
        background: #eee;
        box-sizing: border-box;
        padding: 40px;
        &.active{
          background: white;
        }
      }
    }
    .navright{
      
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
        .pic {
          width: 160px;
          img {
            width: 100%;
          }
          flex-grow: 0;
        }
        .desc {
          margin-left: 16px;
          .price {
            color: red;
            font-weight: 500;
          }
          .ys {
            margin: 10px 0;
          }
        }
      }
    }
  }
}
</style>