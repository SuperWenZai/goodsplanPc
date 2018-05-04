<!--Fine.vue-->

<template>
  <div class="Fine">

    <!-- 导入数据 开始 -->
    <mns-importfile></mns-importfile>
    <!-- 导入数据 结束 -->
    <!-- <div class="importFile">

        <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :multiple="false"
            :on-success="handleSuccess"
            :on-error="handleError"
            :file-list="fileList">

                <el-button size="small" type="primary">导入数据 +</el-button>
        </el-upload>

        <el-dialog
            title="导入数据成功"
            :visible.sync="dialogVisible"
            width="300px">
        <span>
            更新时间 2018.04.11 11:25:05
        </span>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>
    </div> -->

    <!-- 搜索 开始 -->
    <div class="search">
        <el-row :gutter="30">
            <el-col :span="5">
                <div class="item">
                    <label class="type">细类编号：</label>
                    <el-input v-model="input" placeholder="请输入"></el-input>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="item">
                    <label class="type">细类编号：</label>
                    <el-input v-model="input" placeholder="请输入"></el-input>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="item">
                    <label class="type">细类编号：</label>
                      <el-select v-model="value" placeholder="请选择大类">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="value" placeholder="请选择大类">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="item buttonItem">
                    <el-button-group>
                        <el-button type="primary">查询</el-button>
                        <el-button>清空</el-button>
                        <el-button>导出</el-button>
                    </el-button-group>
                </div>
            </el-col>
        </el-row>
    </div>
    <!-- 搜索 结束 -->

    <!-- 表格列表 开始 -->
    <div class="table">
        <el-table
            :data="tableData"
            style="width: 100%"
            height="580px"
            border>

            <el-table-column type="expand">

                <el-table
                    :data="tableDataMain"
                    style="width: 100%"
                    :show-header="false"
            >
                        <el-table-column
                        prop="id">
                        </el-table-column>
                        <el-table-column
                        prop="name">
                        </el-table-column>
                        <el-table-column
                        prop="address">
                        </el-table-column>
                </el-table>

            </el-table-column>

            <el-table-column
            label="细类编号"
            prop="id" 
            align="center">
            </el-table-column>
            <el-table-column
            label="细类名称"
            prop="name"
            align="center">
            </el-table-column>
            <el-table-column
            label="所属中类"
            prop="desc"
            align="center">
            </el-table-column>
                <el-table-column
            label="类型"
            prop="desc"
            align="center">
            </el-table-column>
                <el-table-column
            label="仓库周转天数"
            prop="desc"
            align="center">
            </el-table-column>
                <el-table-column
            label="门店周转天数"
            prop="desc"
            align="center">
            </el-table-column>
            <el-table-column
            label="合理周转天数"
            prop="desc"
            align="center">
            </el-table-column>
            <el-table-column
            label="次月系数"
            prop="desc"
            align="center">
            </el-table-column>
            <el-table-column
            label="次次月系数"
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
                @click="dialogFormVisible = true">编辑</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="del">删除</el-button>

                <el-dialog 
                    title="编辑细类" 
                    :visible.sync="dialogFormVisible" 
                    :center="false"
                    width="620px">
                    
                    <div class="classify">

                        <div class="typefy">
                            <el-row :gutter="20">
                                <el-col :span="12">
                                    <div class="item">
                                        细类编号：220548
                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="item">
                                        细类名称：BB霜
                                    </div>
                                </el-col>
                            </el-row>

                            <el-row :gutter="20">
                                <el-col :span="12">
                                    <div class="item">
                                        所属中类：面霜
                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="item">
                                        所属大类：美容护肤
                                    </div>
                                </el-col>
                            </el-row>
                            
                            <el-row :gutter="20">
                                <el-col :span="12">
                                    <div class="item">
                                        类型：
                                        <el-select v-model="value" placeholder="请选择">
                                            <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="item">
                                        合理周转天数：
                                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                                    </div>
                                </el-col>
                            </el-row>
                                                    
                            <el-row :gutter="20">
                                <el-col :span="12">
                                    <div class="item">
                                        仓库周转天数：
                                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="item">
                                        门店周转天数：
                                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                                    </div>
                                </el-col>
                            </el-row>

                            <el-row :gutter="20">
                                <el-col :span="12">
                                    <div class="item">
                                        次月系数：
                                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                                    </div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="item">
                                        次次月系数：
                                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>

                        <div class="compartment">

                            <h1>分仓起送量</h1>

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