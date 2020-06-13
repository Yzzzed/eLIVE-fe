<!--
 * @Author: Yzed
 * @Date: 2020-06-13 16:28:19
 * @LastEditTime: 2020-06-13 20:27:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \科研\vrvideo\src\components\Homepage.vue
-->

<template>
  <div class="homepage">
    <div class="top">
      <Header></Header>
    </div>
    <div class="mid">
      <Center></Center>
    </div>
    <div class="bot">
      <Footer></Footer>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .homepage
    background-color #374785
    width 95%
    height 92%
    border 2px #fff solid 
    border-radius 1.5rem
    box-shadow 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    display flex
    flex-direction column
    .mid
      display flex
      justify-content center
    .bot
      display flex
      justify-content center
</style>

<script>
import Header from './components/Header'
import Center from './components/Center'
import Footer from './components/Footer'
export default {
    name: 'Homepage',
    components: {
      Header,
      Center,
      Footer
    }
}
</script>
