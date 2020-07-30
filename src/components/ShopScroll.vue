<template>
  <div class="wrapper">
      <ul class="content">
        <li>...</li>
        <li>...</li>
      </ul>
      <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: 'ShopScroll',
  data() {
    return {
      
    }
  }, 
  mounted() {
    let wrapper = document.querySelector('.wrapper');
    let scroll = new BScroll(wrapper);
  },
  methods: {
    
  },
}
</script>
<style lang="scss">

</style>

