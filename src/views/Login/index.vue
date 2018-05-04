<!--login.vue-->

<template>
  <div class="login">

    <div class="loginMain">

      <div class="logo">
        <img src="../../assets/images/logo.png" alt="" srcset="">
      </div>

      <div class="describe">
        <p class="top">Miniso名创优品商品中心计划管理系统</p>
        <p class="bottom">Commodity Center Project Control System</p>
      </div>

      <div class="formItem">
        <el-input v-model="account" placeholder="帐户"></el-input>
        <el-input v-model="password" placeholder="密码"></el-input>
        <router-link to="/home">
        <el-button type="primary">登录</el-button>
        </router-link>
      </div>

      <div class="text">
        © 2018 名创优选科技（广州）有限公司
      </div>
    </div>

    <!-- 画布 开始 -->
    <mns-canvas></mns-canvas>
    <!-- 画布 结束 -->

  </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>