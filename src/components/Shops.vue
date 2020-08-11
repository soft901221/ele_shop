<!-- 商品 -->
<template>
  <div class="shops">
    <Scroll>
      <div class="shops-all">
        <div class="shops-top">
          <div class="shops-top-left">
            <p class="shops-title">{{seller.name}}</p>
            <star-score :stars="seller.score"></star-score>
            <span>
              ({{seller.ratingCount}})
              <em>月售{{seller.sellCount}}单</em>
            </span>
          </div>
          <div class="shops-top-right" @click="enshrine=!enshrine">
            <i class="iconfont icon-favorites-fill" :class="{'on':enshrine==true}"></i>
            <p>{{enshrine ? "收藏":"不收藏"}}</p>
          </div>
        </div>
        <hr />
        <div class="shops-top-bottom">
          <ul>
            <li>
              <p>起送价</p>
              <h4>
                <span>{{seller.minPrice}}</span>元
              </h4>
            </li>
            <li>
              <p>商家配送</p>
              <h4>
                <span>{{seller.deliveryPrice}}</span>元
              </h4>
            </li>
            <li>
              <p>配送时间</p>
              <h4>
                <span>{{seller.deliveryTime}}</span>分钟
              </h4>
            </li>
          </ul>
        </div>

        <div class="bulletin">
          <h2>公告</h2>
          <p class="description">{{seller.bulletin}}</p>
          <ul>
            <li v-for="(item,index) in seller.supports" :key="index">{{item.description}}</li>
          </ul>
        </div>

        <div class="scene">
          <p>商家实景</p>
          <Scroll>
            <ul class="content">
              <li v-for="(item,index) in seller.pics" :key="index">
                <img :src="item" alt />
              </li>
            </ul>
          </Scroll>
        </div>

        <div class="CompanyData">
          <p>商家信息</p>
          <ul>
            <li v-for="(item,index) in seller.infos" :key="index">{{item}}</li>
          </ul>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Scroll from "@/components/Scroll";
import starScore from "@/components/star-score";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { Scroll, starScore },
  data() {
    //这里存放数据
    return {
      seller: {},
      enshrine:false
    };
  },
  created() {
    this.$axios.get("/seller").then((res) => {
      console.log(res.data);
      this.seller = res.data.data;
    });
  },
  //方法集合
  methods: {},
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.shops-all {
  .shops-top {
    display: flex;
    flex-wrap: nowrap;
    padding: 30px;

    .shops-top-left {
      flex-grow: 1;
      .shops-title {
        font-size: 30px;
      }
      .star-score {
        font-size: 30px;
        margin-top: 10px;
      }
    }
    .shops-top-right {
      width: 20%;
      text-align: center;
      i {
        font-size: 40px;
      }
      .on{
        color: #f01414;
      }
      p {
        text-align: center;
        font-size: 24px;
      }
    }
  }
  hr {
    margin: 20px 30px;
  }
  .shops-top-bottom {
    padding: 0 40px 40px 40px;
    border-bottom: 0.4rem #eee solid;
    ul {
      list-style: none;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      li {
        flex-grow: 1;
        text-align: center;
        h4 {
          font-weight: 400;
          span {
            font-size: 40px;
          }
        }
        &:nth-of-type(2) {
          border: 1px solid #ccc;
          border-top: none;
          border-bottom: none;
        }
      }
    }
  }
  .bulletin {
    padding: 40px;
    ul {
      list-style: none;
      li {
        text-indent: 2em;
        font-size: 24px;
        line-height: 100px;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      }
    }
    h2 {
      font-weight: 500;
      font-size: 30px;
    }
    .description {
      color: #f01414;
      line-height: 40px;
      padding-left: 10px;
      margin-bottom: 20px;
    }
  }
  .scene {
    border-bottom: 40px solid #eee;
    border-top: 40px solid #eee;
    padding: 40px;
    .rating {
      height: 100%;
    }
    p {
      font-size: 30px;
      line-height: 2em;
    }
    ul {
      // width: 2000px;
      display: inline-flex;
      flex-wrap: nowrap;
    }
    li {
      list-style: none;
      flex-shrink: 0;
      margin-right: 20px;
      img {
        width: 260px;
        height: 170px;
      }
    }
  }
  .CompanyData {
    padding: 40px;
    font-size: 30px;
    ul {
      list-style: none;
      li {
        font-size: 24px;
        line-height: 100px;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      }
    }
  }
}
</style>