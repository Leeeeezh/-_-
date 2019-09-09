//app.js
wx.onNetworkStatusChange(res => {
  if(!res.isConnected) {
    wx.showToast({
      title: '网络开了小差',
      icon: 'none',
      duration: 1500
    })
  }
})

App({
  globalData: {},


})