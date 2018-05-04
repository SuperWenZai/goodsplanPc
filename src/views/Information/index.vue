<!--information.vue-->

<template>
  <div class="information">

    <!-- 头部 开始 -->
    <mns-header></mns-header>
    <!-- 头部 结束 -->

    <!-- 内容 开始 -->
    <div class="container">

        <el-card class="box-card">

            <el-row :gutter="40">
                <el-col :span="11">
                    <div class="left">头像：</div>
                </el-col>
                <el-col :span="13">
                    <div class="right">

                        <div class="icon">
                            <img src="../../assets/images/user-pic.jpg" alt="">
                        </div>

                        <div class="uploadIcon">
                            <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">

                            <el-button size="small" type="primary">点击上传</el-button>
                        </el-upload>
                        </div>

                    </div>
                </el-col>
            </el-row>

            <el-row :gutter="40">
                <el-col :span="11">
                    <div class="left">用户名：</div>
                </el-col>
                <el-col :span="13">
                    <div class="right">
                        <el-input v-model="name" placeholder="请输入内容" :disabled="true"></el-input>

                        <el-button type="text" @click="dialogVisible = true">修改密码 ></el-button>

                        <el-dialog
                            title="修改密码"
                            :visible.sync="dialogVisible"
                            width="500px"
                            top="260px"
                            :center="true">

                            <div class="main">

                                <div slot="footer" class="dialog-footer">
                                    <el-input placeholder="输入原密码"></el-input>
                                    <el-input placeholder="输入新密码"></el-input>
                                    <el-input placeholder="再次输入新密码"></el-input>
                                    <span class="tip">原密码有误</span>
                                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                                </div>
                            </div>
                        </el-dialog>
                    </div>
                </el-col>
            </el-row>

            <el-row :gutter="40">
                <el-col :span="11">
                    <div class="left">姓名：</div>
                </el-col>
                <el-col :span="13">
                    <div class="right">
                        <el-input placeholder="请输入内容" :disabled="true"></el-input>
                    </div>
                </el-col>
            </el-row>

            <el-row :gutter="40">
                <el-col :span="11">
                    <div class="left">角色：</div>
                </el-col>
                <el-col :span="13">
                    <div class="right">
                        <el-input placeholder="请输入内容" :disabled="true"></el-input>
                    </div>
                </el-col>
            </el-row>

        </el-card>

    </div>
    <!-- 内容 结束 -->
  
  </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>