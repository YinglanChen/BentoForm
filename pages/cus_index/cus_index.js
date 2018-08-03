// pages/cus_index/cus_index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picked: false,
    // all restaurants
    res_name: ["Sushi Too", "福村"],
    res_desc: [
      { "num": 0, "name": "Sushi Too", "desc": "这是一些餐厅简介……\n这是家厉害的餐馆", "added": false },
      { "num": 1, "name": "福村", "desc": "这还是一些餐厅简介……\n这是家更厉害的餐馆", "added": false }
    ],
    // restaurants listed in detail
    res_added: []
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var ind = e.detail.value
    if (this.data.res_desc[ind].added == false) {
      this.data.res_desc[ind].added = true
      this.data.res_added.unshift(this.data.res_desc[ind])
      this.setData({
        res_desc: this.data.res_desc,
        res_added: this.data.res_added
      })
    }
  },

  deleteItem: function (e) {
    var n = e.currentTarget.dataset.ind
    var ord = this.data.res_added[n].num
    this.data.res_desc[ord].added = false
    this.data.res_added.splice(n, 1)
    this.setData({
      res_desc: this.data.res_desc,
      res_added: this.data.res_added
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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