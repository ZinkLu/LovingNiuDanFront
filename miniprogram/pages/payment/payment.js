// miniprogram/pages/payment/payment.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    method: [
      {
        name: '微信支付',
        check: true,
        orderPrice: 0
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用订单金额接口
    this.getPrice(app.globalData.appCode)
  },

  getPrice(code) {

    wx.request({
      url: app.globalData.baseUrl + "/config",
      data: { code },
      method: "GET",
      success: (result) => {
        console.log('result price', result)
        const price = result.data.data.ORDER_PRICE || 0
        app.globalData.orderPrice = price
        this.setData({
          orderPrice: price / 100
        });
      },
      fail: () => {
        return
      }
    })
  }
  ,

  savePayment() {
    console.log('log: 创建订单', app.globalData.appCode, app.globalData.questionnaireId)
    this.makeOrder(app.globalData.appCode, app.globalData.questionnaireId)
  },
  makeOrder(code, questionnaire_id) {
    wx.request(
      {
        url: app.globalData.baseUrl + "/order",
        data: { code, "questionnaire_id": questionnaire_id },
        method: "POST",
        success: (res) => {
          console.log("making order now")
          console.log(res)
          let orderId = res.data.data
          this.Pay(orderId, code)
        }
      }
    )
  },

  Pay(order_id, code) {
    console.log(`订单号 ${order_id}`)
    wx.request(
      {
        url: app.globalData.baseUrl + "/payment",
        data: { code, order_id },
        method: "POST",
        success: (res) => {
          console.log("get payment sign now", res.data.data)
          // console.log(res)
          let payLoad = res.data.data;
          // let params = {
          //   ...payLoad,
          //   sussces: function (res) {
          //     console.log("支付成功")
          //     console.log(res.data)
          //     wx.navigateTo({
          //       url: './../paySuccess/paysuccess'
          //     })
          //   },
          //   fail: function (res) {
          //     console.log("支付失败")
          //     console.log(res.errMsg)
          //   },
          // }
          // wx.requestPayment(params)
          wx.requestPayment({
            ...payLoad,
            success(res) {
              console.log('pay success', res)
              wx.navigateTo({
                url: './../paySuccess/paysuccess'
              })
            },
            fail(err) {
              console.error('pay fail', err)
            }
          })
        }
      }
    )
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  }
})