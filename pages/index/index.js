Page({

  /**
   * 页面的初始数据
   */
  data: {
    
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
    
  },

  /* 跳转页面 */
  jumpToRestIndex: function () {
    wx.login({
      success: function (res) {
        if (res.code) {
          
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

    var that = this
    wx.request({
      url: 'https://www.alphalunch.xyz/res/login',
      data: {
      },
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.get_data();
      }
    })
    wx.navigateTo({
      url: '/pages/res_index/res_index?id= '
    })
  },
  
  jumpToCusIndex:  function() {
    wx.navigateTo({
      url: '/pages/cus_index/cus_index',
    })
  }
})