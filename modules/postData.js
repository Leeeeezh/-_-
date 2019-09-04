import {
  HTTP
} from '../utils/http.js'
let http = new HTTP()

function postLike(behavior, art_id, type) {
  http.request({
    url: behavior==='like'?'/like':'/like/cancel',
    method: 'POST',
    data: {
      art_id: art_id,
      type: type
    }
  })
}

export {
  postLike
}