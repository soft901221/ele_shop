<template>
  <div id="home">
    <Header></Header>
    <tar-bar :titles='titles' :now-index='0' @tab-select="tabSelect"></tar-bar>
    <component :is="ponname"></component>
  </div>
</template>
<script>
import Header from "@/components/Header";
import TarBar from "@/components/TarBar";
import Goods from "@/components/Goods";
import Shops from "@/components/Shops";
import Rating from "@/components/Rating";

const titles =[
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
];
const pages = ["Goods","Rating","Shops"];
export default {
  name: "Home",
  components: {
    Header,
    TarBar,
    Goods,
    Shops,
    Rating
  },
  data(){
    return{
      ponname:"Goods",
      titles,
      pages
    }
  },
  methods: {
    tabSelect(id){
        console.log(id);
        this.ponname = this.pages[id-1]
    }
  },
};
</script>
