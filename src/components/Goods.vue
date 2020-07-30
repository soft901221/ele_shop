<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li>...</li>
      <li>...</li>
      
    </ul>
  </div>
</template>
<script>
  import BScroll from 'better-scroll';
  export default {
    mounted() {
      this.$axios.post('/news/api')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
        this.$nextTick(() => {
        this.a2BScroll = new BScroll(this.$refs.wrapper,{})
      })
     
    }
  }
</script>
<style lang="scss" scoped>
.wrapper{
  overflow: hidden;
  height: calc(100vh - 415px);
  .content{
    background: red;
    li{
    
    }
  }
}
</style>