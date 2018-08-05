Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    // menu (should be obtained from the database)
    menu: [
      { "main": "黑椒牛肉盖饭", "side": "绿豆西米露 或 大骨汤 或 西瓜汁", "price": "$9", "num": 0 },
      { "main": "黑椒猪肉盖饭", "side": "红豆西米露 或 大骨汤 或 哈密瓜汁 (测试换行......)", "price": "$100", "num": 0 }
    ]
  },

  plus: function (e) {
    var n = e.currentTarget.dataset.ind
    this.data.menu[n].num += 1
    this.setData({
      menu: this.data.menu
    })
  },

  minus: function (e) {
    var n = e.currentTarget.dataset.ind
    if (this.data.menu[n].num > 0) {
      this.data.menu[n].num -= 1
      this.setData({
        menu: this.data.menu
      })
    }
  },

  confirm: function (e) {
    var that = this
    wx.navigateTo({
      url: "/pages/confirm_order/confirm_order?res={{that.data.name}}&confirm=" + JSON.stringify(this.data.menu),
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name: options.res
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