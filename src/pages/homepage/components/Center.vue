<!--
 * @Author: your name
 * @Date: 2020-06-13 18:50:04
 * @LastEditTime: 2020-06-13 20:50:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vrvideo\src\pages\homepage\components\Center.vue
--> 

<template>
  <div class="center">
    <div class="left">
      <div class="left-top"></div>
      <div class="left-bot"></div>
    </div>
    <div class="right">
      <div class="right-top"></div>
      <div class="right-mid"></div>
      <div class="right-bot"></div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .center
    width 65vw
    height 60vh
    margin 0 2rem
    border-radius 0 20px 0 20px
    background-color #c2c7da
    display flex
    .left
      flex-basis 72rem
      height 100%
      background-color #333
      border-radius 0 0 0 20px
      border-right 1px #000 solid
    .right
      height 100%
      background-color #ccc
      border-radius 0 20px 0 20px
</style>

<script>
export default {
  name: 'Center'
}
</script>