Component({
  properties: {
    count: {
      type: Number,
      value: 0,
      observer: function () {

      }
    },
    isLike: {
      type: Boolean,
      value: false,
      observer: function () {

      }
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
    }
  }
})