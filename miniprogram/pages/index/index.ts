// index.ts
// 获取应用实例
// const app = getApp<IAppOption>()

Page({
  data: {
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: './../payment/payment'
    })
  },
  onLoad() {
    console.log('log: 12333')
    wx.login({
      success: res => {
        console.log('log: 123')
        console.log('log: res', res.code)
      }
    })
  }
})
