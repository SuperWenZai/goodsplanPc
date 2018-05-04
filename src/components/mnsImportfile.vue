<template>
    <div class="importFile">

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
    </div>
</template>

<style lang="less">
.upload-demo {
  width: 400px;
  .el-upload-list {
    margin-top: -10px;
    float: right;
    width: 300px;
  }
}
</style>

<script>
export default {
  name: "",

  data() {
    return {
        dialogVisible: false,
        fileList: []
    };
  },

  methods: {
    handleSuccess() {
      this.dialogVisible = true;
      console.log("handleSuccess");
    },

    handleError() {
      this.dialogVisible = true;
      console.log("handleError");
    }
  }
};
</script>

