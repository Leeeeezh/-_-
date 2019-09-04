import {
  HTTP
} from '../utils/http.js'
let http = new HTTP()
//获取最新期刊
function getLatestClassicData(callback) {
  http.request({
    url: '/classic/latest',
    success: res => {
      callback && callback(res)
      _saveClassic(res)
    }
  })
}
//获取上/下一期期刊
function getClassicData(currentIndex, position, callback) {
  http.request({
    url: `/classic/${currentIndex}/${position}`,
    success: res => {
      callback && callback(res)
      _saveClassic(res)
    }
  })
}

//读缓存
function loadClassic(index) {
  let result = wx.getStorageSync(index.toString())
  if(result.index===index){
    return result
  }else {
    return false
  }
}

//写缓存
function _saveClassic(res) {
  let index = res.data.index
  let data = res.data
  wx.setStorageSync(index.toString(), data)
}

export {
  getLatestClassicData,
  getClassicData,
  loadClassic
}