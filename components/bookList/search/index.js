// components/bookList/search/index.js
import {
  SearchData,
} from '../../../modules/getSearchData.js'

const searchData = new SearchData()



Component({
  /**
   * 组件的属性列表
   */
  properties: {
    flag: {
      type: String,
      observer: function(){
        if(!this.data.keyword || this.data.isRequesting){
          return
        }
        this.data.isRequesting = true
        wx.showLoading({
          title: '正在拼命加载中',
        })
        let result = searchData.getSearchResult(this.data.keyword, this.data.currentIndex)
        result.then(res=>{
          this.setData({
            result: this.data.result.concat(res.data.books),
            currentIndex: this.data.currentIndex + 20
          })
          this.data.isRequesting = false
          wx.hideLoading()
        },err=>{
          this.data.isRequesting = false
        })
      }
    }
  },

  data: {
    history: ['加载中'],
    hot: [],
    result: [],
    isSearching: false,
    keyword: '',
    currentIndex: 0,
    isRequesting: false
  },
  attached() {
    this.setData({
      history: searchData.getSearchHistory(),
    })

    searchData.getHotSearch().then(res=>{
      this.setData({
        hot: res.data.hot
      })
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    clear() {
      wx.hideLoading()
      this.setData({
        keyword: '',
        isSearching: false,
        result: []
      })
    },
    inputConfirm(event) {
      const q = event.detail.value || event.detail.text
      if(!q){
        wx.showToast({
          title: '搜索关键词不能为空哦',
          duration: 1500,
          icon: 'none'
        })
        return
      }
      this.setData({
        isSearching: true,
        keyword: q
      })
      wx.showLoading({
        title: '正在搜索',
      })
      let result = searchData.getSearchResult(q)
      result.then(res=>{
        this.setData({
          result: res.data.books,
          currentIndex: 20
        })
        wx.hideLoading()
      })
      searchData.encacheSearchHistory(q)
    },
    
    hideSearchPanel() {
      this.triggerEvent('hide', {}, {})
    }
  }
})