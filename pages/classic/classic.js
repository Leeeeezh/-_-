import {
  getClassicData
} from '../../modules/getData.js'

import {
  postLike
} from '../../modules/postData.js'

Page({
  data: {
    classicData: null
  },
  onHeartTap: function({detail:{behavior}}){
    console.log(behavior)
    postLike(
      behavior,
      this.data.classicData.id,
      this.data.classicData.type
    )
  },
  onLoad: function (options) {
    getClassicData(res => {
      console.log(res.data)
      this.setData({
        classicData: res.data
      })
    })
  },
  onReady: function () {
  },
  onShow: function () {
  },
  onHide: function () {
  },
  onUnload: function () {
  },
  onPullDownRefresh: function () {
  },
  onReachBottom: function () {
  },
  onShareAppMessage: function () {
  }
})