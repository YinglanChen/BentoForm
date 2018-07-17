Page({
  data: {
    listData: [
      { "code": "01", "text": "text1", "type": "type1" },
      { "code": "02", "text": "text2", "type": "type2" }
    ],
    filters: [
      { name: 'byOrder', value: '按订单查看' },
      { name: 'byPlace', value: '按地点查看', checked: 'true' },
      { name: 'byMenu', value: '按菜品查看' },

    ]
  },
  onLoad: function () {
    console.log('onLoad')
  },


  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  }

})