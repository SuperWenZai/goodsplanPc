import mnsHeader from '@/components/mnsHeader'
export default {
  name: 'Home',

  components: {
  mnsHeader},

  data() {
    return {
      home: [ // 首页板块 url iconClass name
        {
          name: '贷款计划',
          url: '',
          icon: 'iconLoan'
        },
        {
          name: '生产计划',
          url: '/PlanInventory',
          icon: 'iconPlanInventory'
        },
        {
          name: '返单计划',
          url: '',
          icon: 'iconReturnlist'
        },
        {
          name: '系统设置',
          url: '/Set',
          icon: 'iconSet'
        }
      ]
    }
  }

}
