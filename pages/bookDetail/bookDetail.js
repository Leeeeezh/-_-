import {
  getBookDetail,
  getMyBookCount,
  getLikeStatus,
  getComments
} from '../../modules/getBookData.js'

import {
  postLike,
  postComment
} from '../../modules/postData.js'

Page({
  data: {
    bookId: 0,
    comments: [],
    detail: {
      image: '',
      title: '加载中',
      author: ['加载中'],
      summary: '加载中',
      publisher: '加载中',
      pubdate: '加载中',
      pages: '加载中',
      price: '加载中',
      binding: '加载中',
      category: '加载中',
      isbn: '加载中'
    },
    likeStatus: false,
    likeCount: 0,
    isInputPanelShow: false
  },
  // 页面加载
  onLoad: function(options) {
    wx.showLoading({
      title: '加载中',
    })
    const bookId = options.bookid
    this.setData({
      bookId
    })

    const bookDetail = getBookDetail(bookId)
    const likeStatus = getLikeStatus(bookId)
    const comments = getComments(bookId)
    //Promise.race()
    Promise.all([bookDetail, comments, likeStatus]).then(res => {
      console.log(res)
      this.setData({
        detail: res[0].data,
        comments: res[1].data.comments,
        likeStatus: !!res[2].data.like_status,
        likeCount: res[2].data.fav_nums
      })
      wx.hideLoading()
    })

    // bookDetail.then(res => {
    //   console.log(res.data)
    //   this.setData({
    //     detail: res.data
    //   })
    // })

    // comments.then(res => {
    //   this.setData({
    //     comments: res.data.comments
    //   })
    // })

    // likeStatus.then(res => {
    //   this.setData({
    //     likeStatus: !!res.data.like_status,
    //     likeCount: res.data.fav_nums
    //   })
    // })

  },

  //  收藏/取消收藏事件
  onHeartTap: function({
    detail: {
      behavior
    }
  }) {
    // console.log(behavior)
    postLike(
      behavior,
      this.data.bookId,
      400
    )
  },
  //  提交短评
  onCommentSubmit(event) {
    const text = event.detail.text || event.detail.value
    if (text.length > 12) {
      wx.showToast({
        title: '短评最多12个字哦',
        icon: 'none',
        duration: 2000
      })
      return
    }

    postComment(this.data.bookId, text)
    this.hideInputPanel()
    this.data.comments.unshift({
      content: text,
      nums: 1
    })
    this.setData({
      comments: this.data.comments
    })
  },
  //  显示输入面板
  showInputPanel() {
    this.setData({
      isInputPanelShow: true
    })
  },
  //  隐藏输入面板
  hideInputPanel() {
    this.setData({
      isInputPanelShow: false
    })
  }
})