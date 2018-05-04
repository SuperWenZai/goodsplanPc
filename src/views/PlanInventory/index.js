import mnsHeader from '@/components/mnsHeader';
export default {
    name: 'PlanInventory',
    components: {
      mnsHeader
    },
    created(){

    },
    methods:{
        toggleSelection(rows) {
            if (rows) {
              rows.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
              });
            } else {
              this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    },
    data(){ 
    	return{
            tableData3: [{
                month:'05',
                date: '2016-05-03',
                name: '王小虎',
                product_min:"生活百货",
                gz:'1002',
                lf:'1002',
                cd:'1002',
                wh:'1002',
                cs:'1002',
                sy:"1003",
                state:"已确认",
                return:"2123",
                money:"¥11221",
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                month:'05',
                date: '2016-05-02',
                name: '王小虎',
                product_min:"生活百货",
                gz:'1002',
                lf:'1002',
                cd:'1002',
                wh:'1002',
                cs:'1002',
                sy:"1003",
                state:"已确认",
                return:"2123",
                money:"¥11221",
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                month:'05',
                date: '2016-05-04',
                name: '王小虎',
                product_min:"生活百货",
                gz:'1002',
                lf:'1002',
                cd:'1002',
                wh:'1002',
                cs:'1002',
                sy:"1003",
                state:"已确认",
                return:"2123",
                money:"¥11221",
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                month:'05',
                date: '2016-05-01',
                name: '王小虎',
                product_min:"生活百货",
                gz:'1002',
                lf:'1002',
                cd:'1002',
                wh:'1002',
                cs:'1002',
                sy:"1003",
                state:"已确认",
                return:"2123",
                money:"¥11221",
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                month:'05',
                date: '2016-05-08',
                name: '王小虎',
                gz:'1002',
                lf:'1002',
                cd:'1002',
                wh:'1002',
                cs:'1002',
                sy:"1003",
                state:"已确认",
                return:"2123",
                money:"¥11221",
                product_min:"生活百货",
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                month:'06',
                date: '2016-05-06',
                name: '王小虎',
                product_min:"生活百货",
                gz:'1002',
                lf:'1002',
                cd:'1002',
                wh:'1002',
                cs:'1002',
                sy:"1003",
                state:"已确认",
                return:"2123",
                money:"¥11221",
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                month:'06',
                date: '2016-05-07',
                name: '王小虎',
                gz:'1002',
                lf:'1002',
                cd:'1002',
                wh:'1002',
                cs:'1002',
                sy:"1003",
                state:"已确认",
                return:"2123",
                money:"¥11221",
                product_min:"生活百货",
                address: '上海市普陀区金沙江路 1518 弄'
            }],
            searchData:{
                type:"",
                date:"",
                state:""
            },
            multipleSelection: [],
            currentPage:1
    	}
    },
}
