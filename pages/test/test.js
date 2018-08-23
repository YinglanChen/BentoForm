var app = getApp()
Page({
  data: {
    aKey: "null",
    aValue: "null",
    aType: "null"
  },
  onLoad: function (options) {
    //加载时就获取后台的数据
    this.get_data()
  },
  insert: function () {
    // 插入数据
    var that = this
    wx.request({
      url: 'https://www.alphalunch.xyz/test',
      data: {
      },
      method: 'get',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.get_data();
      }
    })
  },
  update: function () {
    // 更新数据
    var that = this
    wx.request({
      url: 'https://api.wxappclub.com/put',
      data: {
        appkey: 'hi0yhmmemhkn00ud7ne748agga7qyj1j',
        key: "akey",
        value: "new_avalue",
        type: "String"
      },
      method: 'get',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.get_data();
      }
    })
  },
  del: function () {
    //删除数据
    var that = this
    wx.request({
      url: 'https://api.wxappclub.com/del',
      data: {
        'appkey': 'hi0yhmmemhkn00ud7ne748agga7qyj1j',
        'key': "akey",
        'type': "String"
      },
      method: 'get',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          aKey: "null",
          aValue: "null",
          aType: "null"
        })
      }
    })
  },
  get_data: function () {
    // 获取数据
    var that = this;
    wx.request({
      url: 'https://api.wxappclub.com/get',
      data: {
        'appkey': 'hi0yhmmemhkn00ud7ne748agga7qyj1j',
        'key': "akey",
        'type': "String"
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.success) {
          that.setData({
            aKey: res.data.result.key,
            aValue: res.data.result.value,
            aType: res.data.result.type
          })
        }
      }
    })
  }
})