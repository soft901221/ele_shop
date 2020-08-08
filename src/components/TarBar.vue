<template>
  <div id="tarbar">
   <ul>
          <li :class="{active:index==activeIndex}" v-for="(item,index) in titles" :key="item.id" @click="tabSelect(index,item.id)">{{item.label}}</li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'TarBar',
  props:{
    titles:{
      type:Array,
      default:function () {
        return [
{
              id:1,
              label:"商品"
            },
            {
              id:2,
              label:"评论"
            },
            {
              id:3,
              label:"商家"
            }
        ]
      }
    },
    nowIndex:{
      type:Number,
      default:0
    }
  },
  data(){
    return {
      activeIndex:this.nowIndex
    }
  },
  methods: {
    tabSelect(i,id){
      // console.log(i)
      this.activeIndex = i;
      this.$emit('tab-select',id);
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

