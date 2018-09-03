Page({
  data: {
    res_id: -1,
    /*listByOrder: [
      { "cus_id": "Sudoku", "price": "$1", "location": "Gates" },
      { "cus_id": "Sudoku2", "price": "$100", "location": "Hunt" }
    ],*/
    listByOrder: [],
    filters: [
      { name: 'byOrder', value: '按订单查看', checked: false },
      { name: 'byPlace', value: '按地点查看', checked: false },
      { name: 'byMenu', value: '按菜品查看', checked: false },

    ]
  },
  onLoad: function () {
    this.setData({
      res_id: options.id
    })
  },

  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    var that = this
    var fil = this.data.filters
    for (var i = 0; i < fil.length; i++) {
      if (fil[i].name == e.detail.value) {
        fil[i].checked = true
        wx.request({
          url: 'https://www.alphalunch.xyz/res/currentorder',
          data: {
            rid: res_id,
            key: 's',
            value: 0x7eac8fde1aa076c4e16502cf85980562
          },
          method: 'GET',
          header: {
            'Content-Type': 'application/json'
          },
          success: function (res) {
            that.setData({
              filters: res.data
            })
          }
        })
      }
      else {
        fil[i].checked = false
      }
    }
    this.setData({
      filters: fil
    })
  }

})