import {
  getMyCollectionData,
  getBookCount
} from '../../modules/getMyCollectionData.js'

// pages/collections/collections.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    classic: {},
    authorized: false,
    userInfo: {}
  },

  // getUserInfo(event) {
  //   console.log(event)
  // },
  userAuthorize() {
    wx.getSetting({
      success: data => {
        if (data.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: data => {
              this.setData({
                userInfo: data.userInfo,
                authorized: true
              })
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.userAuthorize()
    let collections = getMyCollectionData()
    let count = getBookCount()

    Promise.all([collections, count]).then(res => {
      console.log(res[0].data)
      console.log(res[1].data)
      this.setData({
        classic: res[0].data,
        count: res[1].data.count
      })
    })
  },

  onGetUserInfo(event) {
    const userInfo = event.detail.userInfo
    this.setData({
      userInfo
    })
    this.userAuthorize()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})