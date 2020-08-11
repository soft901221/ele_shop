<!--  -->
<template>
    <div class='layers'>
        <h2>3123</h2>
        <star-score :stars=4></star-score>
        <h3>优惠信息</h3>
        <ul>
            <li>1</li>
        </ul>
        <h3>商家公告</h3>
        <p>3123123</p>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import StarScore from "@/components/star-score";

export default {
//import引入的组件需要注入到对象中才能使用
components: {StarScore},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.layers{
        position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background: rgba(0,0,0,.8);
    color:white;
    text-align: center;
        padding: 80px;
        h2{
            margin-bottom: 40px;
            font-size: 40px;
        }
        h3{
            font-size: 30px;
            font-weight: 400;
            position: relative;
            margin: 40px 0;
            &::after{
                content: "";
                position: absolute;
                width: 35%;
                border-top: 2px solid #aaa;
                right: 0;
                 top: 50%;
            }
             &::before{
                content: "";
                position: absolute;
                width: 35%;
                border-top: 2px solid #aaa;
                left: 0;
                top: 50%;
            }
        }
        li{
            list-style: none;
        }
}
</style>