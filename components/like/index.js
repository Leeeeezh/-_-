Component({
  properties: {
    count: {
      type: Number,
      value: 0
    },
    isLike: {
      type: Boolean,
      value: false
    }
  },
  data: {
    likeImg: 'images/like.png',
    dislikeImg: 'images/dislike.png'
  },
  methods: {
    onLikeTap(event) {
      let count = this.properties.count
      let isLike = this.properties.isLike
      if (!isLike) {
        this.setData({
          count: count + 1,
          isLike: true
        })
      } else {
        this.setData({
          count: count - 1,
          isLike: false
        })
      }
      //  向上触发自定义事件
      let behavior = this.properties.isLike?'like':'dislike'
      this.triggerEvent('hearttap',{
        behavior
      },{})
    }
  }
})