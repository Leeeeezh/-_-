import {
  HTTP
} from '../utils/http_p.js'

let http = new HTTP()

function getMyCollectionData() {
  return http.requestPromise({
    url: '/classic/favor'
  })
}

function getBookCount() {
  return http. requestPromise({
    url: '/book/favor/count'
  })
}

export {
  getMyCollectionData,
  getBookCount
}