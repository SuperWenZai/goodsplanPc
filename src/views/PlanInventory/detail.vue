<template>
    <section class="sm-container PlanInventory">
        <!-- 头部 开始 -->
        <mns-header></mns-header>
        <!-- 头部 结束 -->
        
        <!-- 清单tool -->
        <div class="x-floor">
            <el-row>
                <el-col :span="24">生产计划表  / 计划明细表</el-col>
            </el-row>
            <el-row  type="flex" align="middle"  justify="center">
                <el-col :span="12">2018年4月生产计划（居家生活,数码电子）</el-col>
                <el-col :span="12" class="text-right">
                    <el-button size="small" type="danger" >作废</el-button>
                    <el-button size="small" type="success">编辑</el-button>
                    <el-button size="small" type="primary" >查询</el-button>
                    <el-button  type="primary" >导出</el-button>
                </el-col>
            </el-row>
            <el-row  type="flex" align="middle" class="mt20"  justify="center">
                <el-col :span="12">
                    <el-col :span="12">
                        <span class="detail-cell"> 创建人：曲丽丽</span>
                    </el-col>
                    <el-col :span="12">
                        <span class="detail-cell"> 所属中类：居家生活,数码电子</span>
                    </el-col>
                    <el-col :span="12">
                        <span class="detail-cell"> 创建时间：2018-03-25 10:21</span>
                    </el-col>
                    <el-col :span="12">
                        <span class="detail-cell"> 确认时间:-</span>
                    </el-col>
                </el-col>
                <el-col :span="12" class="text-right">
                    <el-col :span="12">
                        <span class="detail-cell gray-6"> 状态</span>
                    </el-col>
                    <el-col :span="12">
                        <span class="detail-cell gray-6"> 进货金额</span>
                    </el-col>
                    <el-col :span="12">
                        <span class="detail-cell f22"> 已创建</span>
                    </el-col>
                    <el-col :span="12">
                        <span class="detail-cell f22 bule"> ¥ 1254856891.08</span>
                    </el-col>
                </el-col>
            </el-row>
        </div>
        <!-- 清单详细信息 -->
        <div class="x-floor">
            <el-row class="title">
                <el-col :span="24"> <b class="detail-cell f20">详细信息</b></el-col>
            </el-row>

            <el-row  type="flex" align="middle">
                <el-col :span="6" > <span class="detail-cell ">计划单商品数量：2841  款</span></el-col>
                <el-col :span="6" > <span class="detail-cell ">合计回货量：140357  个</span></el-col>
                <el-col :span="6" > <span class="detail-cell ">OTB货款总额：477,213.80 元</span></el-col>
                <el-col :span="6" > <span class="detail-cell ">货款余额：477,213.80 元</span></el-col>
            </el-row>

            <el-row  type="flex" align="middle">
                <el-col :span="6" > <span class="detail-cell ">次月需求量：140357  个</span></el-col>
                <el-col :span="6" > <span class="detail-cell ">次月货款金额：477,213.80 元</span></el-col>
                <el-col :span="6" > <span class="detail-cell ">次次月需求量：140357  个</span></el-col>
                <el-col :span="6" > <span class="detail-cell ">次次月货款金额：477,213.80 元</span></el-col>
            </el-row>

            <el-row class="min-title">
                <el-col :span="24"> <b class="detail-cell f16">分仓信息</b></el-col>
            </el-row>

            <el-row  type="flex" align="middle">
                <el-col :span="6" > <span class="detail-cell ">广州仓  ：55484件     477,213.80 元</span></el-col>
                <el-col :span="6" > <span class="detail-cell ">成都仓  ：13474件     410,213.80 元</span></el-col>
                <el-col :span="6" > <span class="detail-cell ">武汉仓  ：55484件     477,213.80 元</span></el-col>
                <el-col :span="6" > <span class="detail-cell ">廊坊仓  ：13452件     310,213.80 元</span></el-col>
            </el-row>
            <el-row  type="flex" align="middle">
                <el-col :span="6" > <span class="detail-cell ">常熟仓  ：55484件     477,213.80 元</span></el-col>
                <el-col :span="6" > <span class="detail-cell ">沈阳仓  ：13474件     410,213.80 元</span></el-col> 
            </el-row>

            <el-row class="min-title">
                <el-col :span="24"> <b class="detail-cell f16">中类详情</b></el-col>
            </el-row>
            <div  class="el-row mt20">
                <el-table 
                    stripe
                    :data="tableData"
                    style="text-align:center"
                    border>
                    <el-table-column
                        width="180"
                        label="中类名称"
                        prop="product_name"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="num"
                        width="180"
                        label="单品数量">
                    </el-table-column>
                    <el-table-column
                        prop="plan_money"
                        label="计划进货金额">
                    </el-table-column>
                    <el-table-column
                        prop="surplus_money"
                        label="剩余货款额度">
                    </el-table-column>
                    <el-table-column
                        prop="next_month_money"
                        label="次月货款金额">
                    </el-table-column>
                    <el-table-column
                        prop="sec_month_money"
                        label="次次月货款金额">
                    </el-table-column>
                </el-table>
            </div>


            <el-row class="min-title mt20">
                <el-col :span="24"> <b class="detail-cell f16">计划表详情</b></el-col>
            </el-row>

            <div  class="el-row mt20">
                <el-table 
                    stripe
                    :data="tableData"
                    style="text-align:center"
                    border>
                    <el-table-column
                        width="180"
                        label="中类名称"
                        prop="product_name"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="num"
                        width="180"
                        label="单品数量">
                    </el-table-column>
                    <el-table-column
                        prop="plan_money"
                        label="计划进货金额">
                    </el-table-column>
                    <el-table-column
                        prop="surplus_money"
                        label="剩余货款额度">
                    </el-table-column>
                    <el-table-column
                        prop="next_month_money"
                        label="次月货款金额">
                    </el-table-column>
                    <el-table-column
                        prop="sec_month_money"
                        label="次次月货款金额">
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </section>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./detail.js"></script>