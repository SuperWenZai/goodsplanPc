export default[
    {   // 首页
        path: '/home',
        name: 'Home',
        meta :{pageTitle:"首页"},
        component: (resolve) => require(['@/views/Home/index.vue'], resolve)
    },
    {   // 生产计划清单
        path: '/PlanInventory',
        name: 'PlanInventory',
        meta :{pageTitle:"生产计划"},
        component: (resolve) => require(['@/views/PlanInventory/index.vue'], resolve)
    },
    {   // 生产计划清单详情
        path: '/PlanInventoryDetail',
        name: 'PlanInventoryDetail',
        meta :{pageTitle:"生产计划详情"},
        component: (resolve) => require(['@/views/PlanInventory/detail.vue'], resolve)
    },
    {   // 创建生产计划
        path: '/PlanInventoryCreated',
        name: 'PlanInventoryCreated',
        meta :{pageTitle:"创建生产计划"},
        component: (resolve) => require(['@/views/PlanInventoryCreated/index.vue'], resolve)
    },
    {   // 校对生产计划
        path: '/CheckPlan',
        name: 'CheckPlan',
        meta :{pageTitle:"校对生产计划"},
        component: (resolve) => require(['@/views/CheckPlan/index.vue'], resolve)
    },
    {   // 生产计划生成
        path: '/PlanEnter',
        name: 'PlanEnter',
        meta :{pageTitle:"生产计划生成"},
        component: (resolve) => require(['@/views/PlanEnter/index.vue'], resolve)
    },
    {   // 匹配
        path: '*',
        name: 'APP',
        meta :{pageTitle:"首页"},
        component: (resolve) => require(['@/views/Home/index.vue'], resolve)
    },
    {   // 登录
        path: '/login',
        name: 'login',
        meta :{pageTitle:"登录"},
        component: (resolve) => require(['@/views/login/index.vue'], resolve)
    },
    {   // 个人信息
        path: '/Information',
        name: 'Information',
        meta :{pageTitle:"个人信息"},
        component: (resolve) => require(['@/views/Information/index.vue'], resolve)
    },
    {   // 设置
        path: '/Set',
        name: 'Set',
        meta :{pageTitle:"设置"},
        component: (resolve) => require(['@/views/Set/index.vue'], resolve),
        children: [
            {   // 细类信息 默认
                path: '',
                redirect: 'Fine',
                name: 'Fine',
                component: (resolve) => require(['@/views/Fine/index.vue'], resolve),
            },
            {   // 细类信息 CommodityTop
                path: 'Fine',
                name: 'Fine',
                component: (resolve) => require(['@/views/Fine/index.vue'], resolve),
            },
            {   // 商品TOP300 
                path: 'CommodityTop',
                name: 'CommodityTop',
                component: (resolve) => require(['@/views/CommodityTop/index.vue'], resolve),
            },
            {   // 仓库门店信息表
                path: 'Storehouse',
                name: 'Storehouse',
                component: (resolve) => require(['@/views/Storehouse/index.vue'], resolve),
            },
            {   // 角色管理
                path: 'Roles',
                name: 'Roles',
                component: (resolve) => require(['@/views/Roles/index.vue'], resolve),
            },
            {   // 系统日志 
                path: 'Journal',
                name: 'Journal',
                component: (resolve) => require(['@/views/Journal/index.vue'], resolve),
            },
            {   // 用户管理 
                path: 'UserManagement',
                name: 'UserManagement',
                component: (resolve) => require(['@/views/UserManagement/index.vue'], resolve),
            }
        ]
    }
]
