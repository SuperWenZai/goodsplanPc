<!--CommodityTop.vue-->

<template>
  <div class="CommodityTop">

    <!-- 导入数据 开始 -->
    <mns-importfile></mns-importfile>
    <!-- 导入数据 结束 -->

    <!-- 表格列表 开始 -->
    <div class="table">
        <el-table
            :data="tableData"
            style="width: 100%"
            border>

            <el-table-column
            type="index"
            align="center"
            label="编号"
            width="80px">
            </el-table-column>
            <el-table-column
            label="商品编码"
            prop="name"
            align="center">
            </el-table-column>
            <el-table-column
            label="商品名称"
            prop="desc"
            align="center">
            </el-table-column>
            <el-table-column
            label="更新日期"
            prop="desc"
            align="center">
            </el-table-column>

            
        </el-table>
    </div>
    <!-- 表格列表 结束 -->

    <!-- 分页 开始 -->
    <div class="page">
        <el-pagination
            background
            layout="total, prev, pager, next"
            :total="100"
            :page-size="10">
        </el-pagination>
    </div>
    <!-- 分页 结束 -->
  </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>