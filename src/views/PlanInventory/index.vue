<template>

    <section class="sm-container PlanInventory">
        <!-- 头部 开始 -->
        <mns-header></mns-header>
        <!-- 头部 结束 -->

        
        <div class="sm-main-table mt20">
            <el-form :inline="true" ref="searchData" :model="searchData" class="demo-form-inline">
                <el-form-item label="中类" prop="type">
                    <el-input v-model="searchData.type"   placeholder="中类"></el-input>
                </el-form-item>
                <el-form-item label="月份" prop="date">
                    <el-date-picker type="month"  placeholder="选择月份" v-model="searchData.date"></el-date-picker>
                </el-form-item>
                <el-form-item label="状态" prop="state" >
                    <el-select v-model="searchData.state" placeholder="状态">
                        <el-option label="已创建" value="0"></el-option>
                        <el-option label="已确认" value="1"></el-option>
                        <el-option label="已作废" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" >查询</el-button>
                    <el-button @click="resetForm('searchData')">清空</el-button>
                </el-form-item>
                <router-link to="/PlanInventoryCreated">
                    <el-button class="newCreated" type="primary" icon="el-icon-plus">新建计划</el-button>
                </router-link>
            </el-form>

            <!-- table列表 -->
            <el-table
                border
                ref="multipleTable"
                :data="tableData3"
                tooltip-effect="dark"
                style="text-align: center"
                fit
                @selection-change="handleSelectionChange"
                :default-sort = "{prop: 'date', order: 'descending'}">

                <el-table-column
                    type="selection">
                </el-table-column>

                <el-table-column
                    sortable
                    width="101"
                    prop="month"
                    label="计划月份">
                </el-table-column>

                <el-table-column
                    sortable
                    width="101"
                    prop="date"
                    label="创建日期"
                    >
                    <template slot-scope="scope">
                        {{ scope.row.date }}
                    </template>
                </el-table-column>

                <el-table-column
                    width="90"
                    label="商品中类"
                    prop="product_min"       
                    >
                </el-table-column>

                <el-table-column
                    sortable
                    prop="gz"
                    label="广州仓"
                    >
                </el-table-column>

                <el-table-column
                    sortable
                    prop="lf"
                    label="廊坊仓"
                    >
                </el-table-column>

                <el-table-column
                    sortable
                    prop="cd"
                    label="成都仓"
                    >
                </el-table-column>

                <el-table-column
                    sortable
                    prop="wh"
                    label="武汉仓"
                    >
                </el-table-column>

                <el-table-column
                    sortable
                    prop="cs"
                    label="常熟仓"
                    >
                </el-table-column>

                <el-table-column
                    sortable
                    prop="sy"
                    label="沈阳仓"
                    >
                </el-table-column>

                <el-table-column
                    sortable
                    width="130"
                    prop="return"
                    label="合计回货量"
                    >
                </el-table-column>

                <el-table-column
                    sortable
                    width="110"
                    prop="money"
                    label="进货金额"
                    >
                </el-table-column>

                <el-table-column
                    width="100"
                    prop="state"
                    label="状态"
                    >
                </el-table-column>

                <el-table-column
                    width="150"
                    label="操作">
                    <template slot-scope="scope">
                        <el-row> 
                            <router-link to="/PlanInventoryDetail">
                                <el-button
                                    size="mini"
                                    type="primary">
                                    查看
                                </el-button>
                            </router-link>
                            <router-link to="/PlanInventoryCreated">
                                <el-button
                                    size="mini">
                                    编辑
                                </el-button>
                            </router-link>
                        </el-row>
                        <el-row> 
                            <el-button
                                size="mini"
                                type="success">
                                确认
                            </el-button>

                            <el-button
                                size="mini"
                                type="danger">
                                作废
                            </el-button>
                        </el-row>
                    </template>
                </el-table-column>


            </el-table>


            <!-- 分页  -->
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[100]"
                :page-size="100"
                background
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
        </div>
    </section>
</template>
<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>
