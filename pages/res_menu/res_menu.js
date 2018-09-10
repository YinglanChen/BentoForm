// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    res_id: -1,
    // menu (need to be obtained from the database)
    /*listData: [
      { "entree": "黑椒牛肉盖饭", "side": "绿豆西米露 或 大骨汤 或 西瓜汁", "price": "$9"}
    ],*/
    listData: [],
    locations: [
      { "ind": 0, "location": "Hunt", "checked": false, "start": "", "end": "" },
      { "ind": 1, "location": "Gates", "checked": false, "start": "", "end": "" }
    ],
    inputValue1: '',
    inputValue2: '',
    inputValue3: '',
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

  addItem: function (e) {
    var v1 = this.data.inputValue1
    var v2 = this.data.inputValue2
    var v3 = this.data.inputValue3
    
    var that = this
    wx.request({
      url: 'https://www.alphalunch.xyz/bento/res/addmenu',
      data: {
        id: this.data.res_id,
        entree: v1,
        side: v2,
        price: v3,
        s: "7eac8fde1aa076c4e16502cf85980562"
      },
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        console.log(that.data.listData)
        that.data.listData.unshift({
          "fields": {"restaurant": that.data.res_id, "entree": v1, "side": v2, "price": v3, "deleted": false},
          "pk": res.data
        })
        that.setData({
          listData: that.data.listData,
          inputValue1: '',
          inputValue2: '',
          inputValue3: ''
        })
      }
    })
  },

  deleteItem: function (e) {
    var num = e.currentTarget.dataset.ind
    this.data.listData.splice(num, 1)
    this.setData({
      listData: this.data.listData
    })
    wx.request({
      url: 'https://www.alphalunch.xyz/bento/res/deletemenu',
      data: {
        rid: this.data.res_id,
        mid: e.currentTarget.dataset.mid,
        s: "7eac8fde1aa076c4e16502cf85980562"
      },
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
      }
    })
  },

  checkboxChange: function (e) {
    var nlist = e.detail.value
    for (var i = 0; i < this.data.locations.length; i++) {
      this.data.locations[i].checked = false
    }
    for (var j = 0; j < nlist.length; j++) {
      var k = nlist[j]
      this.data.locations[k].checked = true
    }
    for (var l = 0; l < this.data.locations.length; l++) {
      if (this.data.locations[l].checked == false) {
        this.data.locations[l].start = ""
        this.data.locations[l].end = ""
      }
    }
    this.setData({
      locations: this.data.locations
    })
    console.log(this.data.locations)
  },

  startTime: function (e) {
    var n = e.currentTarget.dataset.ind
    this.data.locations[n].start = e.detail.value
    this.setData({
      locations: this.data.locations
    })
  },

  endTime: function (e) {
    var n = e.currentTarget.dataset.ind
    this.data.locations[n].end = e.detail.value
    this.setData({
      locations: this.data.locations
    })
  },

  /* upload menu to the database */
  confirm: function (e) {
    var placeList = []
    var len = this.data.locations.length
    for (var j = 0; j < len; j++) {
      var loc = this.data.locations[j]
      if (loc.checked == true) {
        var tp = loc.start + "-" + loc.end + "," + loc.location
        placeList.unshift(tp)
      }
    }
    
    wx.request({
      url: 'https://www.alphalunch.xyz/bento/res/updatetp',
      data: {
        rid: this.data.res_id,
        tp: placeList,
        s: "7eac8fde1aa076c4e16502cf85980562"
      },
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("Success. Res_id: " + options.id)
    this.setData({
      res_id: options.id
    })
    var that = this
    wx.request({
      url: 'https://www.alphalunch.xyz/bento/general/allmenu',
      data: {
        id: this.data.res_id,
        s: "7eac8fde1aa076c4e16502cf85980562"
      },
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          listData: res.data
        });
      }
    })
    
    wx.request({
      url: 'https://www.alphalunch.xyz/bento/general/alltp',
      data: {
        id: this.data.res_id,
        s: "7eac8fde1aa076c4e16502cf85980562"
      },
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        var timeplace = res.data
        var loc = that.data.locations
        for (var i = 0; i < timeplace.length; i++) {
          for (var j = 0; j < loc.length; j++) {
            if (loc[j].location == timeplace[i].fields.place) {
              var startend = timeplace[i].fields.time.split("-")
              loc[j].start = startend[0]
              loc[j].end = startend[1]
              loc[j].checked = true
            }
          }
        }
        that.setData({
          locations: loc
        })
        console.log(that.data.locations)
      }
    })

    // 查看是否授权
    /*var that = this
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
    })*/
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