<template>

    <section class="sm-container CheckPlan">
         <!-- 头部 开始 -->
        <mns-header></mns-header>
        <!-- 头部 结束 -->
        <!-- 新建流程 -->
        <div class="x-floor x-flow">
            <el-row type="flex" justify="center" align="middle">
                <el-col :offset="3" :span="4">
                    <div class="detail-cell ">
                        <p><span>1</span><b>设置参数</b></p>
                        <p class="grey">设置基础参数</p>
                    </div>
                </el-col>
                <el-col :span="4" class="line">
                    
                </el-col>
                <el-col :offset="1" :span="4">
                    <div class="detail-cell active">
                        <p><span>2</span><b>校对初表</b></p>
                        <p class="grey">调整生产计划表</p>
                        <p class="blue"><i class="el-icon-refresh f24"></i> 数据同步时间：2018-01-01 15:00</p>
                    </div>
                </el-col>
                <el-col :span="4" class="line">
                    
                </el-col>
                <el-col :offset="1"  :span="5">
                    <div class="detail-cell">
                        <p><span>3</span><b>确认生成</b></p>
                        <p class="grey">提交生产计划表</p>
                    </div>
                </el-col>
            </el-row>
        </div>
        <!-- 详情表 -->
        <div class="x-floor">
            <el-row type="flex" justify="center" align="middle" class="all-list">
                <el-col :span="5" class="text-center">
                    <p class="grey">单品数量（款）</p>
                    <p class="money f24">22312312121312</p>
                </el-col>
                <el-col :span="5" class="text-center">
                    <p class="grey">总计回货量（个）</p>
                    <p class="money f24">22312312121312</p>
                </el-col>
                <el-col :span="5" class="text-center">
                    <p class="grey">总计进货金额（元）</p>
                    <p class="money blue f24">22312312121312</p>
                </el-col>
                <el-col :span="5" class="text-center">
                    <p class="grey">次月进货金额（元）</p>
                    <p class="money f24">22312312121312</p>
                </el-col>
                <el-col :span="5" class="text-center">
                    <p class="grey">次次月进货金额（元）</p>
                    <p class="money f24">22312312121312</p>
                </el-col>
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
        <div class="x-floor">
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

        <!-- 生产表 -->
        <div class="x-floor">
            <el-row>
                <el-col :span="18">
                    <el-form :inline="true" ref="searchData" :model="searchData" class="search">
                        <el-form-item label="筛选项" prop="type">
                            <el-input placeholder="输入查询的关键字" v-model="searchData.text" class="input-with-select">
                                <el-select v-model="searchData.type" slot="prepend"  placeholder="类型">
                                    <el-option label="商品代码" value="0"></el-option>
                                    <el-option label="商品名称" value="1"></el-option>
                                    <el-option label="供应商代码" value="2"></el-option>
                                    <el-option label="供应商名称" value="3"></el-option>
                                </el-select>

                            </el-input>
                        </el-form-item>
                        <el-form-item label="生命周期" prop="period" >
                            <el-select v-model="searchData.period" placeholder="生命周期">
                                <el-option label="新品区" value="0"></el-option>
                                <el-option label="导入期" value="1"></el-option>
                                <el-option label="补货期" value="2"></el-option>
                                <el-option label="计划期" value="2"></el-option>
                                <el-option label="淘汰期" value="2"></el-option>
                                <el-option label="废除期" value="2"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="范围" prop="range" >
                            <el-select v-model="searchData.range" placeholder="范围">
                                <el-option label="当前细类" value="0"></el-option>
                                <el-option label="全部细类" value="1"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" >查询</el-button>
                            <el-button @click="resetForm('searchData')">清空</el-button>
                        </el-form-item>
                    </el-form>

                    <div class="table-warp">
                        <div class="mb20 clearfix">
                            <el-col :span="18">
                                <el-button>撤销</el-button>
                                <el-button type="primary" @click="lockRows">锁定</el-button>
                                <el-button type="success" @click="deblockingRows">解锁</el-button>
                                <el-button type="info">重置</el-button>
                            </el-col>
                            <el-col :span="6" class="text-right">
                                <el-button type="success" icon="el-icon-sort" @click="screeningDialog = true" circle></el-button>
                                <el-button type="warning" icon="el-icon-setting" @click="openSet" circle></el-button>
                            </el-col>
                        </div>
                        <!-- table列表 -->
                        <el-table
                            border
                            ref="multipleTable"
                            :data="tableData"
                            tooltip-effect="dark"
                            highlight-current-row
                            :row-class-name="rowClass"
                            :max-height="tableHeight"
                            :height="tableHeight"
                            style="text-align: center"
                            @row-click ="toggleSelection"
                            @selection-change="handleSelectionChange"
                            fit
                            :default-sort = "{prop: 'date', order: 'descending'}">
                            <el-table-column
                                type="selection"
                                >
                            </el-table-column>

                            <el-table-column  
                                :label="item.name" 
                                :prop="item.prop" 
                                :fixed="item.sortable"
                                width="150"
                                v-if="item.is_show"
                                :class-name = "item.is_show ? 'show': 'hidden'"
                                v-for="(item, index) in list"
                                :key="index">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-col>
                <!-- 修改项 -->
                <el-col :span="6" class="edit-warp">
                    <el-tabs type="border-card">
                        <el-tab-pane label="系数设置">
                            <el-row class="min-title">
                                <el-col :span="24"> <b class="detail-cell f16">分仓修改</b></el-col>
                            </el-row>
                            <el-row >
                                <el-col :span="6" class="text-center">修改项</el-col>
                                <el-col :span="18">
                                    <el-radio v-model="radio" label="0">系数</el-radio>
                                    <el-radio v-model="radio" label="1">回货量</el-radio>
                                </el-col>
                            </el-row>
                            <!-- 系数、回货量切换框 -->
                            <div class="screeningEdit" v-if="radio == 0">
                                <el-row class="mt10">
                                    <el-col :span="6" class="text-center"><span class="detail-cell">广州仓：</span></el-col>
                                    <el-col :span="18">
                                        <el-input-number size="medium" v-model="editCoefficient.gz" :min="0.1" :max="10" :step="0.1"></el-input-number>
                                    </el-col>
                                </el-row>
                                <el-row class="mt10">
                                    <el-col :span="6" class="text-center"><span class="detail-cell">廊坊仓：</span></el-col>
                                    <el-col :span="18">
                                         <el-input-number size="medium" v-model="editCoefficient.lf" :min="0.1" :max="10" :step="0.1"></el-input-number>
                                    </el-col>
                                </el-row>
                                <el-row class="mt10">
                                    <el-col :span="6" class="text-center"><span class="detail-cell">成都仓：</span></el-col>
                                    <el-col :span="18">
                                        <el-input-number size="medium" v-model="editCoefficient.cd" :min="0.1" :max="10" :step="0.1"></el-input-number>
                                    </el-col>
                                </el-row>
                                <el-row class="mt10">
                                    <el-col :span="6" class="text-center"><span class="detail-cell">武汉仓：</span></el-col>
                                    <el-col :span="18">
                                         <el-input-number size="medium" v-model="editCoefficient.wh" :min="0.1" :max="10" :step="0.1"></el-input-number>
                                    </el-col>
                                </el-row>
                                <el-row class="mt10">
                                    <el-col :span="6" class="text-center"><span class="detail-cell">常熟仓：</span></el-col>
                                    <el-col :span="18">
                                         <el-input-number size="medium" v-model="editCoefficient.cs" :min="0.1" :max="10" :step="0.1"></el-input-number>
                                    </el-col>
                                </el-row>
                                <el-row class="mt10">
                                    <el-col :span="6" class="text-center"><span class="detail-cell">沈阳仓：</span></el-col>
                                    <el-col :span="18">
                                         <el-input-number size="medium" v-model="editCoefficient.sy" :min="0.1" :max="10" :step="0.1"></el-input-number>
                                    </el-col>
                                </el-row>
                                <el-row class="mt20 text-center">
                                    <el-button size="small">应用到细类</el-button>
                                    <el-button type="primary" size="small">应用到选中项</el-button>
                                </el-row>
                            </div>
                            <div class="backEdit" v-if="radio == 1">
                                <el-row class="mt10">
                                    <el-col :span="6" class="text-center"><span class="detail-cell">广州仓：</span></el-col>
                                    <el-col :span="18">
                                        <el-input placeholder="请输入内容" type="number" v-model="editBackCargo.gz" size="medium">
                                        </el-input>
                                    </el-col>
                                </el-row>
                                <el-row class="mt10">
                                    <el-col :span="6" class="text-center"><span class="detail-cell">廊坊仓：</span></el-col>
                                    <el-col :span="18">
                                         <el-input placeholder="请输入内容" type="number" v-model="editBackCargo.lf" size="medium">
                                        </el-input>
                                    </el-col>
                                </el-row>
                                <el-row class="mt10">
                                    <el-col :span="6" class="text-center"><span class="detail-cell">成都仓：</span></el-col>
                                    <el-col :span="18">
                                         <el-input placeholder="请输入内容" type="number" v-model="editBackCargo.cd" size="medium">
                                        </el-input>
                                    </el-col>
                                </el-row>
                                <el-row class="mt10">
                                    <el-col :span="6" class="text-center"><span class="detail-cell">武汉仓：</span></el-col>
                                    <el-col :span="18">
                                        <el-input placeholder="请输入内容" type="number" v-model="editBackCargo.wh" size="medium">
                                        </el-input>
                                    </el-col>
                                </el-row>
                                <el-row class="mt10">
                                    <el-col :span="6" class="text-center"><span class="detail-cell">常熟仓：</span></el-col>
                                    <el-col :span="18">
                                        <el-input placeholder="请输入内容" type="number" v-model="editBackCargo.cs" size="medium">
                                        </el-input>
                                    </el-col>
                                </el-row>
                                <el-row class="mt10">
                                    <el-col :span="6" class="text-center"><span class="detail-cell">沈阳仓：</span></el-col>
                                    <el-col :span="18">
                                        <el-input placeholder="请输入内容" type="number" v-model="editBackCargo.sy" size="medium">
                                        </el-input>
                                    </el-col>
                                </el-row>
                                <el-row class="mt10 text-center">
                                    <el-button size="small">应用到细类</el-button>
                                    <el-button type="primary" size="small">应用到选中项</el-button>
                                </el-row>
                            </div>
                            <div class="nextMonthEdit mt20">
                                <el-row class="min-title">
                                    <el-col :span="24" > <b class="detail-cell f16">细类系数</b></el-col>
                                </el-row>
                                <el-row class="mt10">
                                    <el-col :span="6" class="text-center"><span class="detail-cell">次月：</span></el-col>
                                    <el-col :span="18">
                                        <el-input-number size="medium" v-model="editCoefficient.next" :min="0.1" :max="10" :step="0.1"></el-input-number>
                                    </el-col>
                                </el-row>
                                <el-row class="mt10">
                                    <el-col :span="6" class="text-center"><span class="detail-cell">次次月：</span></el-col>
                                    <el-col :span="18">
                                        <el-input-number size="medium" v-model="editCoefficient.sec_next" :min="0.1" :max="10" :step="0.1"></el-input-number>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="商品信息" >
                            <div class="shop-detail clearfix">
                                <el-col :span="24" > <b class="detail-cell f16">基础信息</b></el-col>
                                <el-col :span="24"><span class="detail-cell">商品名称：爱是范德萨发大水发首付多少爱是范德萨发大水发首付多少爱是范德萨发大水发首付多少爱是范德萨发大水发首付多少</span></el-col>
                                <el-col :span="24"><span class="detail-cell">商品图示：<img src="" width="100" height="100"></span></el-col>
                                <el-col :span="24"><span class="detail-cell">商品代码：1002</span></el-col>
                                <el-col :span="24"><span class="detail-cell">供应商代码：12313</span></el-col>
                                <el-col :span="24"><span class="detail-cell">供应商名称：xxxxxxxxx</span></el-col>
                                <el-col :span="24"><span class="detail-cell">商品分类：大类-中类-细类</span></el-col>
                                <el-col :span="24"><span class="detail-cell">生命周期：补货期</span></el-col>
                                <el-col :span="24"><span class="detail-cell">首次到店时间：2017-10-10</span></el-col>
                                <el-col :span="24"><span class="detail-cell">采购规格：1*5*6</span></el-col>
                                <el-col :span="24"><span class="detail-cell">装箱数：150</span></el-col>
                                <el-col :span="24"><span class="detail-cell blue">成品库存更新时间：2018-10-10</span></el-col>
                                <el-col :span="24"><b class="detail-cell blue">有效成品库存：15230</b></el-col>
                            </div>
                            <div class="shop-detail clearfix">
                                <el-col :span="24" > <b class="detail-cell f16">商品库销信息</b></el-col>
                                <el-col :span="24"><span class="detail-cell">有库存门店数：10</span></el-col>
                                <el-col :span="24"><span class="detail-cell">单店日均销量：2400</span></el-col>
                                <el-col :span="24"><span class="detail-cell">合计当前库存：212</span></el-col>
                                <el-col :span="24"><span class="detail-cell">合计预扣数量：23123</span></el-col>
                                <el-col :span="24"><span class="detail-cell">合计门店总库存：213</span></el-col>
                                <el-col :span="24"><span class="detail-cell">剩余在单量：1221</span></el-col>
                                <el-col :span="24"><span class="detail-cell">合计库存数量_预计下月初：2121</span></el-col>
                            </div>
                        
                        </el-tab-pane>
                        <el-tab-pane label="各仓库销信息">
                            <div class="shop-detail clearfix">
                                <el-col :span="24" > <b class="detail-cell f16">广州仓</b></el-col>
                                <el-col :span="24"><span class="detail-cell">当前库存：122</span></el-col>
                                <el-col :span="24"><span class="detail-cell">预扣数量：112</span></el-col>
                                <el-col :span="24"><span class="detail-cell">仓库配货量：1002</span></el-col>
                                <el-col :span="24"><span class="detail-cell">在单量：12313</span></el-col>
                                <el-col :span="24"><span class="detail-cell">门店总库存：3452345</span></el-col>
                                <el-col :span="24"><span class="detail-cell">近月销：35345</span></el-col>
                                <el-col :span="24"><span class="detail-cell">有库存门店数：414</span></el-col>
                                <el-col :span="24"><span class="detail-cell">单店日均销：123456-10-10</span></el-col>
                                <el-col :span="24"><span class="detail-cell">细类单品月均销：414</span></el-col>
                                <el-col :span="24"><span class="detail-cell">细类单店日均销：123456</span></el-col>
                            </div>

                            <div class="shop-detail clearfix">
                                <el-col :span="24" > <b class="detail-cell f16">廊坊仓</b></el-col>
                                <el-col :span="24"><span class="detail-cell">当前库存：122</span></el-col>
                                <el-col :span="24"><span class="detail-cell">预扣数量：112</span></el-col>
                                <el-col :span="24"><span class="detail-cell">仓库配货量：1002</span></el-col>
                                <el-col :span="24"><span class="detail-cell">在单量：12313</span></el-col>
                                <el-col :span="24"><span class="detail-cell">门店总库存：3452345</span></el-col>
                                <el-col :span="24"><span class="detail-cell">近月销：35345</span></el-col>
                                <el-col :span="24"><span class="detail-cell">有库存门店数：414</span></el-col>
                                <el-col :span="24"><span class="detail-cell">单店日均销：123456-10-10</span></el-col>
                                <el-col :span="24"><span class="detail-cell">细类单品月均销：414</span></el-col>
                                <el-col :span="24"><span class="detail-cell">细类单店日均销：123456</span></el-col>
                            </div>

                            <div class="shop-detail clearfix">
                                <el-col :span="24" > <b class="detail-cell f16">成都仓</b></el-col>
                                <el-col :span="24"><span class="detail-cell">当前库存：122</span></el-col>
                                <el-col :span="24"><span class="detail-cell">预扣数量：112</span></el-col>
                                <el-col :span="24"><span class="detail-cell">仓库配货量：1002</span></el-col>
                                <el-col :span="24"><span class="detail-cell">在单量：12313</span></el-col>
                                <el-col :span="24"><span class="detail-cell">门店总库存：3452345</span></el-col>
                                <el-col :span="24"><span class="detail-cell">近月销：35345</span></el-col>
                                <el-col :span="24"><span class="detail-cell">有库存门店数：414</span></el-col>
                                <el-col :span="24"><span class="detail-cell">单店日均销：123456-10-10</span></el-col>
                                <el-col :span="24"><span class="detail-cell">细类单品月均销：414</span></el-col>
                                <el-col :span="24"><span class="detail-cell">细类单店日均销：123456</span></el-col>
                            </div>


                            <div class="shop-detail clearfix">
                                <el-col :span="24" > <b class="detail-cell f16">武汉仓</b></el-col>
                                <el-col :span="24"><span class="detail-cell">当前库存：122</span></el-col>
                                <el-col :span="24"><span class="detail-cell">预扣数量：112</span></el-col>
                                <el-col :span="24"><span class="detail-cell">仓库配货量：1002</span></el-col>
                                <el-col :span="24"><span class="detail-cell">在单量：12313</span></el-col>
                                <el-col :span="24"><span class="detail-cell">门店总库存：3452345</span></el-col>
                                <el-col :span="24"><span class="detail-cell">近月销：35345</span></el-col>
                                <el-col :span="24"><span class="detail-cell">有库存门店数：414</span></el-col>
                                <el-col :span="24"><span class="detail-cell">单店日均销：123456-10-10</span></el-col>
                                <el-col :span="24"><span class="detail-cell">细类单品月均销：414</span></el-col>
                                <el-col :span="24"><span class="detail-cell">细类单店日均销：123456</span></el-col>
                            </div>


                            <div class="shop-detail clearfix">
                                <el-col :span="24" > <b class="detail-cell f16">常熟仓</b></el-col>
                                <el-col :span="24"><span class="detail-cell">当前库存：122</span></el-col>
                                <el-col :span="24"><span class="detail-cell">预扣数量：112</span></el-col>
                                <el-col :span="24"><span class="detail-cell">仓库配货量：1002</span></el-col>
                                <el-col :span="24"><span class="detail-cell">在单量：12313</span></el-col>
                                <el-col :span="24"><span class="detail-cell">门店总库存：3452345</span></el-col>
                                <el-col :span="24"><span class="detail-cell">近月销：35345</span></el-col>
                                <el-col :span="24"><span class="detail-cell">有库存门店数：414</span></el-col>
                                <el-col :span="24"><span class="detail-cell">单店日均销：123456-10-10</span></el-col>
                                <el-col :span="24"><span class="detail-cell">细类单品月均销：414</span></el-col>
                                <el-col :span="24"><span class="detail-cell">细类单店日均销：123456</span></el-col>
                            </div>


                            <div class="shop-detail clearfix">
                                <el-col :span="24" > <b class="detail-cell f16">沈阳仓</b></el-col>
                                <el-col :span="24"><span class="detail-cell">当前库存：122</span></el-col>
                                <el-col :span="24"><span class="detail-cell">预扣数量：112</span></el-col>
                                <el-col :span="24"><span class="detail-cell">仓库配货量：1002</span></el-col>
                                <el-col :span="24"><span class="detail-cell">在单量：12313</span></el-col>
                                <el-col :span="24"><span class="detail-cell">门店总库存：3452345</span></el-col>
                                <el-col :span="24"><span class="detail-cell">近月销：35345</span></el-col>
                                <el-col :span="24"><span class="detail-cell">有库存门店数：414</span></el-col>
                                <el-col :span="24"><span class="detail-cell">单店日均销：123456-10-10</span></el-col>
                                <el-col :span="24"><span class="detail-cell">细类单品月均销：414</span></el-col>
                                <el-col :span="24"><span class="detail-cell">细类单店日均销：123456</span></el-col>
                            </div>
                        </el-tab-pane>

                    </el-tabs>
                </el-col>
            </el-row>
            <el-row class=" mt50 pt50 text-center">
                <router-link to="/PlanInventoryDetail">
                    <el-button> 上 一 步 </el-button>
                </router-link>
                <router-link to="/PlanEnter" class="ml10">
                    <el-button type="primary"> 提 交 </el-button>
                </router-link>
            </el-row>
        </div>

        


        <!-- 高级操作弹窗 -->
        <!-- 条件筛选 -->
        <el-dialog 
            title="高级条件筛选" 
            :visible.sync="screeningDialog"
            width="600px">
            <div class="screeningWarp">
                <el-button type="text" @click="addscreening">添加条件<i class="el-icon-plus"></i></el-button>
                <div class="shop-detail">
                    <div class="item mb20" v-for="(item,index) in screeningData" :key="index">
                        <p>条件{{index+1}}</p>
                        <el-row>
                            <el-col :span="7">
                                <el-select v-model="screeningData[index].type"  placeholder="类型">
                                    <el-option label="商品代码" value="0"></el-option>
                                    <el-option label="商品名称" value="1"></el-option>
                                    <el-option label="广州仓月销修正" value="2"></el-option>
                                    <el-option label="广州仓库存数" value="3"></el-option>
                                    <el-option label="广州仓需求量" value="4"></el-option>
                                    <el-option label="武汉仓月销修正" value="5"></el-option>
                                    <el-option label="武汉仓月销量" value="6"></el-option>
                                    <el-option label="武汉仓需求量" value="7"></el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="7">
                                <el-select v-model="screeningData[index].state" placeholder="状态">
                                    <el-option label="等于" value="0"></el-option>
                                    <el-option label="不等于" value="1"></el-option>
                                    <el-option label="大于" value="2"></el-option>
                                    <el-option label="大于等于" value="3"></el-option>
                                    <el-option label="小于" value="4"></el-option>
                                    <el-option label="小于等于" value="5"></el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="7">
                                <el-input placeholder="输入判断值" v-model="screeningData[index].num"></el-input>
                            </el-col>
                            <el-col :span="3" class="text-right">
                                <el-button type="danger" icon="el-icon-delete" @click="screeningDetele(index)" circle></el-button>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="screeningDialog = false">取 消</el-button>
                <el-button type="primary" @click="screeningDialog = false">确 定</el-button>
            </div>
        </el-dialog>
      
        <!-- 配置列表项 -->
        <el-dialog 
            title="配置列表项" 
            :visible.sync="setLineDialog"
            
            width="400px">
            <div class="setLineWarp">
                <SortableList 
                    lockAxis='y'
                    class="sortableList"
                    :distance="30"
                    v-model="setList">
                    <SortableItem 
                    v-for="(item, index) in setList" 
                    :index="index" 
                    :key="index"
                    :item="item"
                    class="sortableItem">
                        <el-row>
                            <el-col :span="17" class="name">
                                <el-checkbox v-model="item.is_show" :disabled="item.sortable">{{item.name}}</el-checkbox>
                               </el-col>
                            <el-col :span="7" class="text-right">
                                <el-switch
                                    v-model="item.sortable"
                                    @change="fixedLeft(item,index)"
                                    active-color="#409EFF"
                                    inactive-color="#ccc">
                                </el-switch>
                            </el-col>
                        </el-row>
                    </SortableItem>
                </SortableList>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="setLineDialog = false">取 消</el-button>
                <el-button type="primary" @click="enterSet">确 定</el-button>
            </div>
        </el-dialog>
    </section>
</template>
<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>
