import {
  getBookDetail,
  getMyBookCount,
  getLikeStatus,
  getComments
} from '../../modules/getBookData.js'

Page({
  data: {
    bookId: 0,
    comments: [],
    detail: null,
    likeStatus: false,
    likeCount: 0
  },
  onLoad: function(options) {
    const bookId = options.bookid
    this.setData({
      bookId
    })

    getBookDetail(bookId).then(res => {
      console.log(res.data)
      this.setData({
        detail:res.data
      })
    })

    getLikeStatus(bookId).then(res => {
      console.log(res.data)
      this.setData({
        likeStatus: !!res.data.likeStatus,
        likeCount: res.data.fav_nums
      })
    })

    getComments(bookId).then(res => {
      console.log(res.data)
      this.setData({
        comments: res.data.comments
      })
    })
  },
  onReady: function() {

  },
  onShow: function() {

  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  }
})