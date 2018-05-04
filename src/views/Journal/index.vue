<!--Journal.vue-->

<template>
  <div class="Journal">

    <!-- 表格列表 开始 -->
    <div class="table">
        <el-table
            :data="tableData"
            style="width: 100%"
            border>

            <el-table-column
            type="index"
            align="center"
            label="序号"
            width="80px">
            </el-table-column>
            <el-table-column
            label="操作时间"
            prop="name"
            align="center"
            width="200px">
            </el-table-column>
            <el-table-column
            label="用户名"
            prop="desc"
            align="center"
            width="200px">
            </el-table-column>
            <el-table-column
            label="操作内容"
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