// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      { "main": "黑椒牛肉盖饭", "side": "绿豆西米露 或 大骨汤 或 西瓜汁", "price": "$9"}
    ],
    inputValue1: '',
    inputValue2: '',
    inputValue3: '',
    user: ''
  },

  bindInput1: function (e) {
    this.setData({
      inputValue1: e.detail.value
    })
  },

  bindInput2: function (e) {
    this.setData({
      inputValue2: e.detail.value
    })
  },

  bindInput3: function (e) {
    this.setData({
      inputValue3: e.detail.value
    })
  },

  confirm: function(e) {
    var v1 = this.data.inputValue1
    var v2 = this.data.inputValue2
    var v3 = this.data.inputValue3
    this.data.listData.unshift({"main": v1, "side": v2, "price": '$' + v3})
    this.setData({
      listData: this.data.listData,
      inputValue1: '',
      inputValue2: '',
      inputValue3: ''
    })
    /* storage */
    var key = this.data.user
    wx.setStorageSync(key, this.data.listData)
  },

  deleteItem: function(e) {
    var num = e.currentTarget.dataset.ind
    this.data.listData.splice(num, 1)
    this.setData({
      listData: this.data.listData
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 查看是否授权
    var that = this
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
              that.setData({
                user: res.userInfo.nickName
              })
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})