// components/bookList/bookitem/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bookInfo: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    _title: '',
    isSearching: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onBookTap() {
      wx.navigateTo({
        url: `/pages/bookDetail/bookDetail?bookid=${this.data.bookInfo.id}`,
      })
    }
  }
})
