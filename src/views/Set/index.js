import mnsHeader from '@/components/mnsHeader'
export default {
  name: 'Set',

  data() {
    return {
      titles: [{
        title: '基础数据',
        menu: [
          {
            name: '细类信息',
            url: '/Set/Fine'
          },
          {
            name: '商品TOP300',
            url: '/Set/CommodityTop'
          },
          {
            name: '仓库门店信息表',
            url: '/Set/Storehouse'
          }
        ]
      },
        {
          title: '系统权限',
          menu: [
            {
              name: '角色管理',
              url: '/Set/Roles'
            },
            {
              name: '用户管理',
              url: '/Set/UserManagement'
            },
            {
              name: '系统日志',
              url: '/Set/Journal'
            }
          ]
        }]
    }
  },

  components: {
  mnsHeader}
}
