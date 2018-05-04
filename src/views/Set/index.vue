<!--Set.vue-->

<template>
  <div class="Set">

    <!-- 头部 开始 -->
    <mns-header></mns-header>
    <!-- 头部 结束 -->

    <el-container>

        <el-aside width="250px">
            
            <el-menu
                :default-active="this.$route.path"
                :router="true">
                
                <el-menu-item-group v-for="(item,index) in titles" :key="index" :index="index">

                    <template slot="title">{{ item.title }}</template>
                    <el-menu-item :index="itemNext.url" v-for="(itemNext,i) in item.menu" :key="i">
                        {{ itemNext.name }}
                    </el-menu-item>
                    
                </el-menu-item-group>
            </el-menu>
        </el-aside>

        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>

  </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>