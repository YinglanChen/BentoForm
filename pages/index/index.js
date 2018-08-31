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
    var oid = ""
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            data: {
              appid = wxdf3e5bc6bf28c758,
              secret: 0x7eac8fde1aa076c4e16502cf85980562,
              js_code: res.code,
              grant_type: authorization_code
            },
            method: "GET",
            header: {
              'Content-Type': 'application/json'
            },
            success: function (res) {
              oid = res.data.openid
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

    var that = this
    var rid = ""
    wx.request({
      url: 'https://www.alphalunch.xyz/res/login',
      data: {
        id = oid
      },
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        rid = res.data;
      }
    })
    wx.navigateTo({
      url: '/pages/res_index/res_index?id=' + rid
    })
  },
  
  jumpToCusIndex:  function() {
    wx.navigateTo({
      url: '/pages/cus_index/cus_index',
    })
  }
})