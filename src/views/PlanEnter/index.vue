<template>
    <section class="sm-container PlanEnter">
        <!-- 头部 开始 -->
        <mns-header></mns-header>
        <!-- 头部 结束 -->

        <div class="x-floor x-flow">
            <el-row type="flex" justify="center" align="middle">
                <el-col :offset="3" :span="4">
                    <div class="detail-cell">
                        <p><span>1</span><b>设置参数</b></p>
                        <p class="grey">设置基础参数</p>
                    </div>
                </el-col>
                <el-col :span="4" class="line">
                    
                </el-col>
                <el-col :offset="1" :span="4">
                    <div class="detail-cell ">
                        <p><span>2</span><b>校对初表</b></p>
                        <p class="grey">调整生产计划表</p>
                    </div>
                </el-col>
                <el-col :span="4" class="line">
                    
                </el-col>
                <el-col :offset="1"  :span="5">
                    <div class="detail-cell active">
                        <p><span>3</span><b>确认生成</b></p>
                        <p class="grey">提交生产计划表</p>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="x-floor createdSuccess text-center">
            <p><el-button type="success" icon="el-icon-check" class="f24" circle></el-button></p>
            <p class="mt10 f20">保存成功</p>
            <p class="mt10">2018年4月份生产计划表已生成成功</p>
            <div class="btn-warp">
                <router-link to="/PlanInventory"><el-button type="primary">返回列表</el-button></router-link>
                <router-link to="/PlanInventoryDetail"><el-button>查看计划表</el-button></router-link>
                <el-button>导出</el-button>
            </div>
        </div>
       
    </section>
</template>
<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>
