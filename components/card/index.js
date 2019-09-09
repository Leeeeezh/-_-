// components/card/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    image: String,
    type: Number,
    count: Number,
    text: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    typeMap: {
      100: '电影',
      200: '音乐',
      300: '句子'
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
