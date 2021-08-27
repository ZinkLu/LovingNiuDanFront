"use strict";
var app = getApp();
Page({
    data: {
    },
    bindViewTap: function () {
        // 获取用户信息
        
        wx.navigateTo({
            url: '../form/form'
            // url: '../paySuccess/paysuccess'
            // url: '../print/print'
        });
        // console.log('log: 开始获取用户信息')
        // this.apiUserProfileGet()
    },
    onLoad: function () {
        wx.login({
            success: (res) => {
                app.globalData.appCode = res.code
                this.apiCodeGet(res.code)
            },
            fail (err) {
                console.log('log: err', err) 
            }
        })
    },
    apiCodeGet (code) {
        console.log('log: 开始请求code接口', code)
        wx.request({
            url: app.globalData.baseUrl + "/code",
            data: { code },
            method: "GET"
            // success: () => {
            // }
        })
    },
    // 获取用户信息
    apiUserProfileGet () {
        wx.getUserProfile({
            desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                let payload = JSON.parse(JSON.stringify(res))
                payload.code = app.globalData.appCode
                // 创建用户
                console.log('log: 开始创建用户')
                this.apiUserPost(payload)
                // 跳转
                wx.navigateTo({
                    url: '../form/form'
                    // url: '../paySuccess/paysuccess'
                });
            },
            fail (e) {
                console.log('log: e', e) 
            }
        })
    },
    // 创建用户
    apiUserPost (payload) {
        console.info(`创建用户信息的信息为${JSON.stringify(payload)}`)
        wx.request({
            url: app.globalData.baseUrl + "/user",
            data: payload,
            method: "POST",
            success: (result) => { console.log('用户创建成功', result) }
        })
    }
});
