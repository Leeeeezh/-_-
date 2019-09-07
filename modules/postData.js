import {
  HTTP
} from '../utils/http.js'
let http = new HTTP()

function postLike(behavior, art_id, type) {
  http.request({
    url: behavior === 'like' ? '/like' : '/like/cancel',
    method: 'POST',
    data: {
      art_id: art_id,
      type: type
    }
  })
}

function postComment(book_id, content) {
  http.request({
    url: '/book/add/short_comment',
    method: 'POST',
    data: {
      book_id,
      content
    },
    success: res=>{
      if(res.data.msg==="ok"){
        wx.showToast({
          title: '添加成功',
          duration: 1000
        })
      }
    }
  })
}

export {
  postLike,
  postComment
}