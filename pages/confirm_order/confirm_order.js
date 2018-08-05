Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "确认订单-",
    confirmed: [],
    locations: ["Hunt", "Gates"]
  },

  getBack: function (e) {
    wx.navigateBack({
      delta: 1
    })
  },

  /* upload "confirmed", "time" and "place" to database */
  confirm: function (e) {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.confirm)
    var res = options.res
    var menu = JSON.parse(options.confirm)
    this.setData({
      name: this.data.name + res,
      confirmed: menu
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