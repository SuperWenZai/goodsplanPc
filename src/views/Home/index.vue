<!-- home.vue -->
<template>
    <div class="home">

        <!-- 头部 开始 -->
        <mns-header></mns-header>
        <!-- 头部 结束 -->

        <!-- 首页内容 开始 -->
        <div class="container">
            <div class="containerMain clearfix">
                <router-link :to="item.url" v-for="(item,index) in home" :key="index" :index="index">
                    <el-card class="box-card">
                        <div :class="['icon bgcenter',item.icon]"></div>
                        <span class="name">{{ item.name }}</span>
                    </el-card>
                </router-link>
            </div>
        </div>
        <!-- 首页内容 结束 -->

        <!-- 页脚 开始 -->
        <div class="text">
            © 2018 名创优选科技（广州）有限公司
        </div>
        <!-- 页脚 结束 -->
    </div>
</template>
<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>
