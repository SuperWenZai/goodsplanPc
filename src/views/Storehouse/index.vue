<!--Storehouse.vue-->

<template>
  <div class="Storehouse">

    <!-- 头部 开始 -->
    <div class="newFile">
        <el-button-group>
            <el-button type="primary" @click="dialognewFileVisible = true">新建仓库</el-button>
            <el-button @click="dialogFormVisible = true">批量修改门店数</el-button>
        </el-button-group>

        <!-- 新建仓库弹窗 开始 -->
        <el-dialog 
            title="新建仓库" 
            :visible.sync="dialognewFileVisible" 
            :center="false"
            width="480px">

            <div class="newFileMain">
                <el-row :gutter="20">
                    <el-col :span="4"><div class="name">仓库编号</div></el-col>
                    <el-col :span="20"><div class="item"><el-input v-model="input" placeholder="请输入内容"></el-input></div></el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="4"><div class="name">仓库名称</div></el-col>
                    <el-col :span="20"><div class="item"><el-input v-model="input" placeholder="请输入内容"></el-input></div></el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="4"><div class="name">门店数量</div></el-col>
                    <el-col :span="20"><div class="item"><el-input v-model="input" placeholder="请输入内容"></el-input></div></el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="4"><div class="name">启用状态</div></el-col>
                    <el-col :span="20">
                        <div class="item">
                        <el-switch
                            v-model="value3">
                        </el-switch>
                        </div></el-col>
                </el-row>
            </div>

            <div slot="footer" class="dialog-footer">
                <el-button @click="dialognewFileVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialognewFileVisible = false">保 存</el-button>
            </div>
        </el-dialog>
        <!-- 新建仓库弹窗 结束 -->

        <!-- 批量编辑门店数量弹窗 开始 -->
        <el-dialog 
            title="批量编辑门店数量" 
            :visible.sync="dialogFormVisible" 
            :center="false"
            width="540px">
            
            <div class="classify">

                <div class="compartment">

                    <el-row :gutter="20">
                        <el-col :span="12">
                            <div class="item">
                                广州仓：
                                <el-input v-model="input" placeholder="请输入内容"></el-input>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="item">
                                武汉仓：
                                <el-input v-model="input" placeholder="请输入内容"></el-input>
                            </div>
                        </el-col>
                    </el-row>

                                                <el-row :gutter="20">
                        <el-col :span="12">
                            <div class="item">
                                廊坊仓：
                                <el-input v-model="input" placeholder="请输入内容"></el-input>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="item">
                                常熟仓：
                                <el-input v-model="input" placeholder="请输入内容"></el-input>
                            </div>
                        </el-col>
                    </el-row>

                                                <el-row :gutter="20">
                        <el-col :span="12">
                            <div class="item">
                                成都仓：
                                <el-input v-model="input" placeholder="请输入内容"></el-input>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="item">
                                沈阳仓：
                                <el-input v-model="input" placeholder="请输入内容"></el-input>
                            </div>
                        </el-col>
                    </el-row>

                </div>

            </div>

            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
            </div>
        </el-dialog>
        <!-- 批量编辑门店数量弹窗 结束 -->

    </div>
    <!-- 头部 结束 -->

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
            label="仓库编码"
            prop="name"
            align="center">
            </el-table-column>
            <el-table-column
            label="仓库名称"
            prop="desc"
            align="center">
            </el-table-column>
            <el-table-column
            label="门店数量"
            prop="desc"
            align="center">
            </el-table-column>
            <el-table-column
            label="更新日期"
            prop="desc"
            align="center">
            </el-table-column>
            <el-table-column
            label="启用"
            prop="desc"
            align="center">
            </el-table-column>
            <el-table-column
            label="操作"
            prop="desc"
            align="center">

                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="dialogeditVisible = true">编辑</el-button>
                    <el-button
                    size="mini"
                    @click="prohibit">禁用</el-button>
                    <el-button
                    size="mini"
                    @click="del">删除</el-button>

                    <!-- 编辑 开始 -->
                    <el-dialog 
                        title="编辑仓库信息" 
                        :visible.sync="dialogeditVisible" 
                        :center="false"
                        width="480px">

                        <div class="newFileMain">
                            <el-row :gutter="20">
                                <el-col :span="4"><div class="name">仓库编号</div></el-col>
                                <el-col :span="20"><div class="item"><el-input v-model="input" placeholder="请输入内容"></el-input></div></el-col>
                            </el-row>

                            <el-row :gutter="20">
                                <el-col :span="4"><div class="name">仓库名称</div></el-col>
                                <el-col :span="20"><div class="item"><el-input v-model="input" placeholder="请输入内容"></el-input></div></el-col>
                            </el-row>

                            <el-row :gutter="20">
                                <el-col :span="4"><div class="name">门店数量</div></el-col>
                                <el-col :span="20"><div class="item"><el-input v-model="input" placeholder="请输入内容"></el-input></div></el-col>
                            </el-row>

                            <el-row :gutter="20">
                                <el-col :span="4"><div class="name">启用状态</div></el-col>
                                <el-col :span="20">
                                    <div class="item">
                                    <el-switch
                                        v-model="value3">
                                    </el-switch>
                                    </div></el-col>
                            </el-row>
                        </div>

                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogeditVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dialogeditVisible = false">保 存</el-button>
                        </div>
                    </el-dialog>
                    <!-- 编辑 结束 -->

                </template>

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