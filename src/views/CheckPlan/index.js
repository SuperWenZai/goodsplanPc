import { SortableItem, SortableList } from './components'
import mnsHeader from '@/components/mnsHeader'
export default {
  name: 'CheckPlan',
  components: {
    SortableList,
    SortableItem,
  mnsHeader},
  created() {},
  methods: {
    // 点击行选中
    toggleSelection(rows) {
      // if(!rows.is_lock){
      //     this.$refs.multipleTable.toggleRowSelection(rows)

      // }
      console.log(rows)
      this.editCoefficient = rows.editCoefficient
      this.editBackCargo = rows.editBackCargo
    },
    // 选中数据记录
    handleSelectionChange(val) {
      this.multipleSelection = val
    },

    // 锁定表单
    lockRows(e) {
      this.multipleSelection.forEach(item => {
        item.is_lock = true
      })
    },
    // 解锁
    deblockingRows(e) {
      this.multipleSelection.forEach(item => {
        item.is_lock = false
      })
    },
    // 设置行样式
    rowClass(rows, index) {
      if (rows.row.is_lock) {
        return 'disabled'
      }
    },

    // 添加筛选条件
    addscreening() {
      this.screeningData.push({
        type: '',
        state: '',
        num: ''
      })
    },

    // 删除筛选条件
    screeningDetele(index) {
      if (this.screeningData.length == 1) return
      this.screeningData.splice(index, 1)
    },

    // 点击设置
    openSet() {
      this.setLineDialog = true
      this.setList = JSON.parse(JSON.stringify(this.list))
    },
    // 确认设置
    enterSet() {
      this.list = JSON.parse(JSON.stringify(this.setList))
      this.setLineDialog = false
    },
    // 设置开关监听
    fixedLeft(item, index) {
      if (item.sortable) {
        item.is_show = true
        if (index == 0) return
        this.setList.splice(index, 1)
        this.setList.unshift(item)
      }
    }

  },
  data() {
    return {
      /*  ---------------- 弹窗数据 --------------------- */
      // 条件筛选数据
      screeningData: [{
        type: '',
        state: '',
        num: ''
      }],
      // 条件筛选弹窗
      screeningDialog: false,
      // 配置列表项弹窗
      setLineDialog: false,

      /*  ----------------- 生产表操作数据 -------------------- */
      // 生产表单高度
      tableHeight: 600,
      // 普通搜索
      searchData: {
      },
      // 修改项
      radio: '0',
      // 选中项
      multipleTable: [],
      // table表头数据
      list: [
        {
          name: '中类名称',
          prop: 'product_name',
          sortable: false,
          is_show: false
        },
        {
          name: '单品数量',
          prop: 'num',
          sortable: false,
          is_show: true
        },
        {
          name: '计划进货金额',
          prop: 'plan_money',
          sortable: false,
          is_show: true
        },
        {
          name: '剩余货款额度',
          prop: 'surplus_money',
          sortable: false,
          is_show: true
        },
        {
          name: '次月货款金额',
          prop: 'next_month_money',
          sortable: false,
          is_show: true
        },
        {
          name: '次次月货款金额',
          prop: 'sec_month_money',
          sortable: false,
          is_show: true
        },
        {
          name: '次次月货款金额',
          prop: 'sec_month_money',
          sortable: false,
          is_show: true
        },
        {
          name: '次次月货款金额',
          prop: 'sec_month_money',
          sortable: false,
          is_show: true
        },
        {
          name: '次次月货款金额',
          prop: 'sec_month_money',
          sortable: false,
          is_show: true
        },
        {
          name: '次次月货款金额',
          prop: 'sec_month_money',
          sortable: false,
          is_show: true
        }
      ],
      // 设置表头数据
      setList: [],
      // table数据
      tableData: [
        {
          product_name: '彩妆',
          num: '1240',
          is_lock: true,
          plan_money: '21255231',
          surplus_money: '5215355',
          next_month_money: '2342345235',
          sec_month_money: '324523453452345',
          editCoefficient: {
            gz: 2.0,
            lf: 1.0,
            cd: 1.0,
            wh: 1.0,
            cs: 1.0,
            sy: 1.0,
            next: 1.0,
            sec_next: 1.0
          },
          editBackCargo: {
            gz: 3.0,
            lf: 1.0,
            cd: 1.0,
            wh: 1.0,
            cs: 1.0,
            sy: 1.0
          }
        }, {
          product_name: '彩妆',
          num: '1241',
          is_lock: false,
          plan_money: '21255231',
          surplus_money: '5215355',
          next_month_money: '2342345235',
          sec_month_money: '324523453452345',
          editCoefficient: {
            gz: 1.0,
            lf: 1.0,
            cd: 1.0,
            wh: 1.0,
            cs: 1.0,
            sy: 1.0,
            next: 1.0,
            sec_next: 1.0
          },
          editBackCargo: {
            gz: 1.0,
            lf: 1.0,
            cd: 1.0,
            wh: 1.0,
            cs: 1.0,
            sy: 1.0
          }
        }, {
          product_name: '彩妆',
          num: '1241',
          is_lock: false,
          plan_money: '21255231',
          surplus_money: '5215355',
          next_month_money: '2342345235',
          sec_month_money: '324523453452345',
          editCoefficient: {
            gz: 1.0,
            lf: 1.0,
            cd: 1.0,
            wh: 1.0,
            cs: 1.0,
            sy: 1.0,
            next: 1.0,
            sec_next: 1.0
          },
          editBackCargo: {
            gz: 1.0,
            lf: 1.0,
            cd: 1.0,
            wh: 1.0,
            cs: 1.0,
            sy: 1.0
          }
        }, {
          product_name: '彩妆',
          num: '1241',
          is_lock: false,
          plan_money: '21255231',
          surplus_money: '5215355',
          next_month_money: '2342345235',
          sec_month_money: '324523453452345',
          editCoefficient: {
            gz: 1.0,
            lf: 1.0,
            cd: 1.0,
            wh: 1.0,
            cs: 1.0,
            sy: 1.0,
            next: 1.0,
            sec_next: 1.0
          },
          editBackCargo: {
            gz: 1.0,
            lf: 1.0,
            cd: 1.0,
            wh: 1.0,
            cs: 1.0,
            sy: 1.0
          }
        }
      ],
      // 修改系数
      editCoefficient: {
        gz: 1.0,
        lf: 1.0,
        cd: 1.0,
        wh: 1.0,
        cs: 1.0,
        sy: 1.0,
        next: 1.0,
        sec_next: 1.0
      },
      // 修改回货量
      editBackCargo: {
        gz: 1.0,
        lf: 1.0,
        cd: 1.0,
        wh: 1.0,
        cs: 1.0,
        sy: 1.0
      }
    }
  }

}
