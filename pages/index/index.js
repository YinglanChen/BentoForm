var app = getApp()
// TODO: Delete app secret on Github -- HIGHLY IMPORTANT!!!!!!!!!!!!!!!!!
// Hint: use console.log(json object) to print-debug
// TODOs:
/* 将openid在后台加密为token后返回前端缓存，不宜在前端保存openid*/
/* 微信手机客户端容易被反编译并轻松获得Appsecret，造成重大的安全威胁。开发者应将Appsecret保存到后台服务器中，
通过服务器使用Appsecert获取Accesstoken。所有对于“api.weixin.qq.com”域名下的接口请求请全部通过后台服务器发起，
请勿直接通过小程序的前端代码发起。所以解决办法就是把code传给后台，让后台去请求微信的官方接口获得openId和session-key。*/

// CONSTANTS
const APP_ID ='wxdf3e5bc6bf28c758';
const APP_SECRET ='7eac8fde1aa076c4e16502cf85980562';

// var SESSION_KEY=''//储存获取到session_key

// PAGE
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
  jumpToRestIndex: function() {
    var oid = ""
    var rid = -1
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            data: {
              appid : APP_ID,
              secret: APP_SECRET,
              js_code: res.code,
              grant_type: 'authorization_code'
            },
            method: "GET",
            header: {
              'Content-Type': 'application/json'
            },
            success: function (res) {
              console.log(res)
              oid = res.data.openid
              wx.request({
                url: 'https://www.alphalunch.xyz/bento/res/login',
                data: {
                  id: oid,
                  s: "7eac8fde1aa076c4e16502cf85980562"
                },
                method: 'GET',
                header: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                success: function (res) {
                  console.log(res)
                  rid = res.data
                  wx.navigateTo({
                    url: '/pages/res_index/res_index?id=' + rid
                  });
                }
              })
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
  },
  
  jumpToCusIndex:  function() {
    wx.login({

      success: function (res) {
        if (res.code) {
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            data: {
              appid : APP_ID,
              secret: APP_SECRET,
              js_code: res.code,
              grant_type: 'authorization_code'
            },
            method: "GET",
            header: {
              'Content-Type': 'application/json'
            },
            success: function (res) {
              console.log(res.data)
              app.globalData.OPEN_ID = res.data.openid
              console.log(app.globalData.OPEN_ID)

            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
    // question: scope of oid
    wx.navigateTo({
      url: '/pages/cus_index/cus_index'
    })
  }
})