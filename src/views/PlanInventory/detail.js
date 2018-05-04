import mnsHeader from '@/components/mnsHeader';
export default {
    name: 'PlanInventory',
    components: {
      mnsHeader
    },
    created(){

    },
    methods:{

    },
    data(){ 
    	return{
            tableData: [{
                product_name: '彩妆',
                num:"1241",
                plan_money: '21255231',
                surplus_money: '5215355',
                next_month_money:"2342345235",
                sec_month_money:"324523453452345",
              }, {
                product_name: '彩妆',
                num:"1241",
                plan_money: '21255231',
                surplus_money: '5215355',
                next_month_money:"2342345235",
                sec_month_money:"324523453452345",
              }, {
                product_name: '彩妆',
                num:"1241",
                plan_money: '21255231',
                surplus_money: '5215355',
                next_month_money:"2342345235",
                sec_month_money:"324523453452345",
              }, {
                product_name: '彩妆',
                num:"1241",
                plan_money: '21255231',
                surplus_money: '5215355',
                next_month_money:"2342345235",
                sec_month_money:"324523453452345",
            }]
    	}
    },
}
