<!--Roles.vue-->

<template>
  <div class="Roles">

    <!-- 头部 开始 -->
    <div class="newFile">
            
        <el-button type="primary" @click="dialognewFileVisible = true">新建角色+</el-button>

        <!-- 新建角色弹窗 开始 -->
        <el-dialog 
            title="新建角色" 
            :visible.sync="dialognewFileVisible" 
            :center="false"
            width="480px">

            <div class="rolesNew">
                <el-row :gutter="20">
                    <el-col :span="4"><div class="name">角色名称</div></el-col>
                    <el-col :span="20"><div class="item"><el-input v-model="input" placeholder="请输入内容"></el-input></div></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4"><div class="name">权限清单</div></el-col>
                    <el-col :span="20">
                        <div class="item">
                            
                            <div class="itemMain">
                                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">货款分配</el-checkbox>
                                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                                    <el-checkbox v-for="citya in cities" :label="citya" :key="citya">{{citya}}</el-checkbox>
                                </el-checkbox-group>
                                <div style="margin: 15px 0;"></div>
                                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">计划管理</el-checkbox>
                                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                                    <el-checkbox v-for="cityb in cities" :label="cityb" :key="cityb">{{cityb}}</el-checkbox>
                                </el-checkbox-group>
                                <div style="margin: 15px 0;"></div>
                                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                                    <el-checkbox v-for="cityc in cities" :label="cityc" :key="cityc">{{cityc}}</el-checkbox>
                                </el-checkbox-group>
                            </div>

                        </div>
                    </el-col>
                </el-row>
            </div>

            <div slot="footer" class="dialog-footer">
                <el-button @click="dialognewFileVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialognewFileVisible = false">保 存</el-button>
            </div>
        </el-dialog>
        <!-- 新建角色弹窗 结束 -->

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
            label="序号"
            width="80px">
            </el-table-column>
            <el-table-column
            label="角色名称"
            prop="name"
            align="center">
            </el-table-column>
            <el-table-column
            label="创建日期"
            prop="desc"
            align="center">
            </el-table-column>
            <el-table-column
            label="权限"
            prop="desc"
            align="center">
            </el-table-column>
            <el-table-column
            label="用户数量"
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
                    @click="del">删除</el-button>

                    <!-- 编辑 开始 -->
                    <el-dialog 
                        title="编辑仓库信息" 
                        :visible.sync="dialogeditVisible" 
                        :center="false"
                        width="480px">

                        <div class="rolesNew">
                            <el-row :gutter="20">
                                <el-col :span="4"><div class="name">角色名称</div></el-col>
                                <el-col :span="20"><div class="item"><el-input v-model="input" placeholder="请输入内容"></el-input></div></el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="4"><div class="name">权限清单</div></el-col>
                                <el-col :span="20">
                                    <div class="item">
                                        
                            <div class="itemMain">
                                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">货款分配</el-checkbox>
                                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                                    <el-checkbox v-for="citya in cities" :label="citya" :key="citya">{{citya}}</el-checkbox>
                                </el-checkbox-group>
                                <div style="margin: 15px 0;"></div>
                                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">计划管理</el-checkbox>
                                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                                    <el-checkbox v-for="cityb in cities" :label="cityb" :key="cityb">{{cityb}}</el-checkbox>
                                </el-checkbox-group>
                                <div style="margin: 15px 0;"></div>
                                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                                    <el-checkbox v-for="cityc in cities" :label="cityc" :key="cityc">{{cityc}}</el-checkbox>
                                </el-checkbox-group>
                            </div>

                                    </div>
                                </el-col>
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