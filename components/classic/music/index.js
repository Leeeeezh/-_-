import {
  behavior
} from '../classic-beh.js'

const player = wx.getBackgroundAudioManager()

Component({
  behaviors: [behavior],

  properties: {
    musicSrc: String,
    title: String
  },

  data: {
    isPlaying: false,
    timer: null,
    playingSrc: './images/playing.png',
    standbySrc: './images/standby.png'
  },

  attached: function() {
    this.checkPlayerStatus()
    this.listenPlayerStatus()
  },

  methods: {
    // 检测播放状态,切换播放/暂停图标
    checkPlayerStatus() {
      if (player.paused) {
        this.setData({
          isPlaying: false
        })
      } else if (player.src === this.properties.musicSrc) {
        this.setData({
          isPlaying: true
        })
      }
    },
    //  点击按钮时播放/暂停音乐播放
    onPlayTap: function(event) {
      let isPlaying = !this.data.isPlaying
      this.setData({
        isPlaying: isPlaying
      })
      if (isPlaying) {
        player.title = this.properties.title
        player.src = this.properties.musicSrc
      } else {
        player.pause()
      }
    },
    // 监听后台播放器事件
    listenPlayerStatus: function () {
      player.onPause(() => {
        this.checkPlayerStatus()
      })
      player.onPlay(() => {
        this.checkPlayerStatus()
      })
      player.onStop(() => {
        this.checkPlayerStatus()
      })
      player.onEnded(() => {
        this.checkPlayerStatus()
      })
    }
  }
})

