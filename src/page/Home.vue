<template>
  <div id="home">
    <Header></Header>
    <tar-bar></tar-bar>
    <!-- <Goods></Goods> -->
    <component :is="ponname"></component>
  </div>
</template>
<script>
import Header from "@/components/Header";
import TarBar from "@/components/TarBar";
import Goods from "@/components/Goods";
import Shops from "@/components/Shops";
import Rating from "@/components/Rating";
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
      ponname:Goods
    }
  }
};
</script>
