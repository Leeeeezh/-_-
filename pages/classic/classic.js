import {
  getLatestClassicData,
  getClassicData,
  getLikeData,
  loadClassic
} from '../../modules/getClassicData.js'

import {
  postLike
} from '../../modules/postData.js'

Page({
  data: {
    index: 0,
    id: 0,
    fav_num: 0,
    image: '',
    content: '',
    url: '',
    like_status: false,
    title: '',
    type: 0,
    latestIndex: 0,
    earliestIndex: 1
  },

  onHeartTap: function({
    detail: {
      behavior
    }
  }) {
    // console.log(behavior)
    postLike(
      behavior,
      this.data.id,
      this.data.type
    )
  },

  onPrevTap: function() {
    let currentIndex = this.data.index

    //  尝试读缓存
    let result = loadClassic(currentIndex - 1)
    if (result) {
      this.setData({
        ...result
      })
      getLikeData(this.data.type, this.data.id, res => {
        this.setData({
          ...res.data
        })
      })
    } else {
      // 无缓存,请求
      getClassicData(currentIndex, 'previous', res => {
        this.setData({
          ...res.data
        })
      })
    }
  },

  onNextTap: function() {
    let currentIndex = this.data.index
    //  尝试读缓存
    let result = loadClassic(currentIndex + 1)
    if (result) {
      this.setData({
        ...result
      })
      getLikeData(this.data.type, this.data.id, res => {
        this.setData({
          ...res.data
        })
      })
    } else {
      // 无缓存,请求
      getClassicData(currentIndex, 'next', res => {
        this.setData({
          ...res.data
        })
      })
    }
  },
  // 页面加载时获取最新期刊
  onLoad: function(options) {
    getLatestClassicData(res => {
      this.setData({
        ...res.data,
        latestIndex: res.data.index
      })
    })
  },

  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {}
})