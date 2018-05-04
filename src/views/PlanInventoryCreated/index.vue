<template>
    <section class="sm-container PlanInventoryCreated">
        <!-- 头部 开始 -->
        <mns-header></mns-header>
        <!-- 头部 结束 -->

        <div class="x-floor x-flow">
            <el-row type="flex" justify="center" align="middle">
                <el-col :offset="3" :span="4">
                    <div class="detail-cell active">
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
                    <div class="detail-cell">
                        <p><span>3</span><b>确认生成</b></p>
                        <p class="grey">提交生产计划表</p>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="x-floor">
            <el-row class="min-title">
                <el-col :span="24"> <b class="detail-cell f16">导入参数表</b></el-col>
            </el-row>
            <el-row class="mt20">
                <el-col :span="3"> <span class="detail-cell">OTB表</span></el-col>
                <el-col :span="21">
                    <el-upload
                        action=""
                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                        auto-upload
                        :limit="1">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">仅支持.xlsx格式<a class="blue ml10">下载OTB模板</a></div>
                    </el-upload>
                </el-col>
            </el-row>
            <el-row class="mt20">
                <el-col :span="3"> <span class="detail-cell">新品生产计划表</span></el-col>
                <el-col :span="21">
                    <el-upload
                        action=""
                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                        auto-upload
                        :limit="1">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">仅支持.xlsx格式<a class="blue ml10">下载新品生产计划表模板</a></div>
                    </el-upload>
                </el-col>
            </el-row>
            <el-row class="min-title">
                <el-col :span="24"> <b class="detail-cell f16">基本信息</b></el-col>
            </el-row>
            <el-row >
                <el-col :span="6">
                    <div class="type-list">
                        <h3 class="f18">彩妆</h3>
                        <div class="con">
                            <p class="money">货款总金额 <b class="f22 ml10">¥123212123</b></p>
                            <p>细类数量：17个</p>
                        </div>
                    </div>
                    
                </el-col>
                <el-col :span="6">
                    <div class="type-list">
                        <h3 class="f18">彩妆</h3>
                        <div class="con">
                            <p class="money">货款总金额 <b class="f22 ml10">¥123212123</b></p>
                            <p>细类数量：17个</p>
                        </div>
                    </div>
                    
                </el-col>
                <el-col :span="6">
                    <div class="type-list">
                        <h3 class="f18">彩妆</h3>
                        <div class="con">
                            <p class="money">货款总金额 <b class="f22 ml10">¥123212123</b></p>
                            <p>细类数量：17个</p>
                        </div>
                    </div>
                    
                </el-col>
                <el-col :span="6">
                    <div class="type-list">
                        <h3 class="f18">彩妆</h3>
                        <div class="con">
                            <p class="money">货款总金额 <b class="f22 ml10">¥123212123</b></p>
                            <p>细类数量：17个</p>
                        </div>
                    </div>
                    
                </el-col>
            </el-row>
            <el-row class="mt50 text-center">
                <router-link to="/CheckPlan">
                    <el-button type="primary"> 下 一 步 </el-button>
                </router-link>
            </el-row>
        </div>
    </section>
</template>
<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>
