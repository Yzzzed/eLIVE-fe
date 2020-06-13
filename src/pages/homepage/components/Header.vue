<!--
 * @Author: your name
 * @Date: 2020-06-13 17:31:39
 * @LastEditTime: 2020-06-13 20:47:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vrvideo\src\pages\homepage\components\header.vue
--> 

<template>
    <div class="header">
      <div class="logo">
        <el-image :src="url" fit="scale-down" class="logo"></el-image>
      </div>
      <div class="search">
        <el-input placeholder="search" v-model="input">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div class="state">
        <el-button icon="el-icon-search" class="btn">交易平台</el-button>
        <el-button circle icon="el-icon-s-custom" class="btn"></el-button>
      </div>
    </div>
</template>

<style lang="stylus" scoped>
  .header
    margin 1rem 2rem
    height 8vh
    display flex
    align-items center
    justify-content space-between
    .logo
      width 11.37rem
      height 5.75rem
      margin 0 3rem
      flex 1
      display flex
      justify-content center
    .search
      flex 2
    .state
      flex 1
      display flex
      justify-content center
      .btn
        margin 0 2rem
</style>

<script>
import logo from '@/assets/imgs/logo.png'
export default {
    name: 'Header',
    data () {
      return {
        url: logo
      }
    }
}
</script>

