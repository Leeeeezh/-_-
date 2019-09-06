import {
  API_BASE_URL,
  APP_KEY
} from '../config.js'

class HTTP {
  constructor() {
    this.tips = {
      1: '抱歉,发生了错误'
    }
  }

  requestPromise({
    url,
    data= {},
    method='GET'
  }) {
    return new Promise((resolve, reject) => {
      this._request({
        url,
        resolve,
        reject,
        data,
        method
      })
    })
  }

  _request({
    url,
    resolve,
    reject,
    data= {},
    method= 'GET'
  }) {
    wx.request({
      url: API_BASE_URL + url,
      method,
      data,
      header: {
        'Content-Type': 'application/json',
        'appkey': APP_KEY
      },
      success: res => {
        if (res.statusCode.toString().startsWith('2')) {
          resolve(res)
        } else {
          this._showErrInfo()
          reject()
        }
      },
      fail: err => {
        this._showErrInfo(1)
        reject(err)
      },
    })
  }

  _showErrInfo(code) {
    if (!code) {
      code = 1
    }
    wx.showToast({
      title: this.tips[code],
      icon: 'none',
      duration: 2000
    })
  }
}

export {
  HTTP
}