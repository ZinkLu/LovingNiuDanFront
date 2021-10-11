var app = getApp();
// miniprogram/pages/paySuccess/paysuccess.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        today: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + '',
        blockLeft: 0,
        orderPrice: 0,
        navied: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log('log: app.globalData.orderPrice', app.globalData.orderPrice)
        this.setData({
            orderPrice: app.globalData.orderPrice
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },
    sliderChange(val) {
        console.log('log: val', val.detail.value)
        this.setData({
            blockLeft: val.detail.value
        });
        if (val.detail.value > 80 && !this.navied) {
            this.navied = true
            wx.navigateTo({
                // url: '../form/form'
                  url: '../print/print'
            });
        }
    }
})