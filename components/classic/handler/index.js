// components/classic/handler/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    latest: Boolean,
    earliest: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeArrowSrc: './images/arrow_solid.png',
    disactiveArrowSrc: './images/arrow_void.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onNextTap: function() {
      // 判断是否为最新一期,否则触发next事件
      if (this.data.latest) {
        wx.showToast({
          title: '已经是最新的一期了哦',
          icon: 'none'
        })
      } else {
        this.triggerEvent("next")
      }
    },

    onPrevTap: function() {
      // 判断是否为最早一期,否则触发prev事件
      if (this.data.earliest) {
        wx.showToast({
          title: '已经是最早的一期了哦',
          icon: 'none'
        })
      } else {
        this.triggerEvent("prev")
      }
    }
  }
})