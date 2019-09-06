import {
  HTTP
} from '../utils/http_p.js'

let http = new HTTP()
//获取热门书籍
function getHotBookData() {
  return http.requestPromise({
    url: '/book/hot_list'
  })
}
//获取书籍详情
function getBookDetail(bookId) {
  return http.requestPromise({
    url: `/book/${bookId}/detail`
  })
}
// ??
function getMyBookCount() {
  return http.requestPromise({
    url: '/book/favor/count'
  })
}
//  收藏状态
function getLikeStatus(bookId) {
  return http.requestPromise({
    url: `/book/${bookId}/favor`
  })
}
//  书评
function getComments(bookId) {
  return http.requestPromise({
    url: `/book/${bookId}/short_comment`
  })
}

export {
  getHotBookData,
  getBookDetail,
  getMyBookCount,
  getLikeStatus,
  getComments
}