import {
  HTTP
} from '../utils/http.js'
let http = new HTTP()

function getClassicData(callback) {
  http.request({
    url: '/classic/latest',
    success: res => {
      callback && callback(res)
    }
  })
}

export {
  getClassicData
}