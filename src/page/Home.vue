<template>
  <div id="home">
    <Header @layers='layerState'></Header>
    <tar-bar :titles='titles' :now-index='0' @tab-select="tabSelect"></tar-bar>
    <component :is="ponname" ></component>
    <Layers :seller="seller" v-if="layersActive" @layerstate="getLayersState"></Layers>
    
  </div>
</template>
<script>
import Header from "@/components/Header";
import TarBar from "@/components/TarBar";
import Goods from "@/components/Goods";
import Shops from "@/components/Shops";
import Rating from "@/components/Rating";
import Layers from "@/components/Layers";

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
    Rating,
    Layers
  },
  data(){
    return{
      ponname:"Goods",
      titles,
      pages,
      layersActive:false,
      seller:{},
      
    }
  },
  created() {
    this.$axios.get("/seller").then((res) => {
      console.log(res.data);
      this.seller = res.data.data;
    });
  },
  methods: {
    tabSelect(id){
        console.log(id);
        this.ponname = this.pages[id-1]
    },
    layerState(msg){
      console.log(msg);
      this.layersActive = !msg
    },
    getLayersState(msg){
    this.layersActive = msg
    },
    
  },
};
</script>
