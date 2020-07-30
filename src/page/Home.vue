<template>
  <div id="home">
    <Header></Header>
    <tar-bar></tar-bar>
    <Goods></Goods>
   
  </div>
</template>
<script>
import Header from "@/components/Header";
import TarBar from "@/components/TarBar";
import ShopScroll from "@/components/ShopScroll";
import Goods from "@/components/Goods";
export default {
  name: "Home",
  components: {
    Header,
    TarBar,
    ShopScroll,
    Goods
  },
  methods: {}
};
</script>
<style lang="scss" scoped>

</style>