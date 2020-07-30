<template>
  <div id="tarbar">
   <ul>
          <li :class="{active:index==nowIndex}" v-for="(item,index) in titles" :key="index" @click="tabSelect(index)">{{item}}</li>
        </ul>
  </div>
</template>

<script>
export default {
  name: 'TarBar',
  data() {
    return {
      titles:[
        "商品",
        "评论",
        "商家"
      ],
      nowIndex:0
    }
  },
  methods: {
    tabSelect(i){
      // console.log(i)
      this.nowIndex = i
    }
  },
}
</script>
<style lang="scss">
#tarbar{
  ul{
    list-style: none;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #aaa;
    li{
          width: 34%;
          height: 80px;
          text-align: center;
          font-size: 30px;
          line-height: 80px;
          &.active{
            border-bottom: 2px red solid;
          }
    }
  }
}
</style>

