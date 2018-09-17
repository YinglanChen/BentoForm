Page({
  data: {
    res_id: -1,
    /*listByOrder: [
      { "cus_id": "Sudoku", "price": "$1", "location": "Gates" },
      { "cus_id": "Sudoku2", "price": "$100", "location": "Hunt" }
    ],*/
    listByOrder: [],
    filters: [
      { name: 'byOrder', value: '按订单查看', checked: true },
      { name: 'byPlace', value: '按地点查看', checked: false },
      { name: 'byMenu', value: '按菜品查看', checked: false },

    ]
  },

  onLoad: function (options) {
    this.setData({
      res_id: options.id
    })
    var that = this
    wx.request({
      url: 'https://www.alphalunch.xyz/bento/res/currentorder',
      data: {
        rid: this.data.res_id,
        s: "7eac8fde1aa076c4e16502cf85980562"
      },
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          listByOrder: res.data
        })
      }
    })
  },

  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    var fil = this.data.filters
    for (var i = 0; i < fil.length; i++) {
      if (fil[i].name == e.detail.value) {
        fil[i].checked = true
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