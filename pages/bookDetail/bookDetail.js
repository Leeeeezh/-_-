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
    detail: null,
    likeStatus: false,
    likeCount: 0,
    isInputPanelShow: false
  },
  // 页面加载
  onLoad: async function(options) {
    const bookId = options.bookid
    this.setData({
      bookId
    })

    const res = await getBookDetail(bookId)
    this.setData({
      detail: res.data
    })
    // .then(res => {
    //   console.log(res.data)
    //   this.setData({
    //     detail: res.data
    //   })
    // })

    getLikeStatus(bookId).then(res => {
      console.log(res.data)
      this.setData({
        likeStatus: !!res.data.like_status,
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
    const comment = event.detail.comment || event.detail.value
    if (comment.length > 12) {
      wx.showToast({
        title: '短评最多12个字哦',
        icon: 'none',
        duration: 2000
      })
      return
    }

    postComment(this.data.bookId, comment)
    this.hideInputPanel()
    this.data.comments.unshift({
      content: comment,
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