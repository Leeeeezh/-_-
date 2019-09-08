import {
  HTTP
} from '../utils/http_p.js'

class SearchData extends HTTP{
  constructor() {
    super()
    this.key = 'searchHistory'
    this.maxLength = 10
  }

  getSearchHistory() {
    const history = wx.getStorageSync(this.key)
    if (!history) {
      return []
    } else {
      return history
    }
  }

  getHotSearch() {
    return this.requestPromise({
      url: '/book/hot_keyword'
    })
  }

  getSearchResult(q, start) {
    start = !start?0:start
    return this.requestPromise({
      url: `/book/search?q=${q}&start=${start}`
    })
  }

  encacheSearchHistory(word) {
    let history = this.getSearchHistory()
    const exist = history.includes(word)
    if (!exist) {
      history.unshift(word)
      history.length > 10 && history.pop()
      wx.setStorageSync(this.key, history)
    }
    return history
  }
}

export {
  SearchData
}