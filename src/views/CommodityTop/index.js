import mnsImportfile from '@/components/mnsImportfile'
export default {
  name: 'CommodityTop',

  components: {
  mnsImportfile},

  data() {
    return {
      // dialogVisible: false,
      // fileList: []
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],

      value: '',

      input: '',

      tableData: [{
        id: '12987122',
        name: '12',
        category: '123',
        desc: '1234',
        address: '12345',
        shop: '10',
        shopId: '10333'
      }, {
        id: '12987123',
        name: '12',
        category: '123',
        desc: '1234',
        address: '12345',
        shop: '10',
        shopId: '10333'
      }, {
        id: '12987125',
        name: '12',
        category: '123',
        desc: '1234',
        address: '12345',
        shop: '10',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '12',
        category: '123',
        desc: '1234',
        address: '12345',
        shop: '10',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '12',
        category: '123',
        desc: '1234',
        address: '12345',
        shop: '10',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '12',
        category: '123',
        desc: '1234',
        address: '12345',
        shop: '10',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '12',
        category: '123',
        desc: '1234',
        address: '12345',
        shop: '10',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '12',
        category: '123',
        desc: '1234',
        address: '12345',
        shop: '10',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '12',
        category: '123',
        desc: '1234',
        address: '12345',
        shop: '10',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '12',
        category: '123',
        desc: '1234',
        address: '12345',
        shop: '10',
        shopId: '10333'
      }],

      tableDataMain: [
        {
          id: '12987122',
          name: '12',
          category: '123',
          desc: '1234',
          address: '12345',
          shop: '10',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '12',
          address: '12345'
        }
      ]
    }
  },

  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {
        })
    },

    // handleSuccess() {
    //   this.dialogVisible = true
    //   console.log('handleSuccess')
    // },

  // handleError() {
  //   this.dialogVisible = true
  //   console.log('handleError')
  // }
  }
}
