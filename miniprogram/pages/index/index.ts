// index.ts

import { config } from "../../configs/configs"

// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    motto: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true,
      })
    }
  },
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  getUserProfileForTable() {
    wx.navigateTo(
      {
        url: "../questionnaire/questionnaire?nickName=" + "xxx"
      }
    )
    // return 
    wx.login({
      success: (res) => {

        // console.log(res)

        wx.request({
          url: config.BASE_URL + "/code",
          data: { code: res.code },
          method: "GET",
          success: (result) => {
            console.log(result)
            const code = res.code

            wx.getUserProfile({
              desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
              success: (res) => {
                let payload = JSON.parse(JSON.stringify(res))
                payload.code = code

                console.info(`创建用户信息的信息为${JSON.stringify(payload)}`)

                wx.request({
                  url: config.BASE_URL + "/user",
                  data: res,
                  method: "POST",
                  success: (result) => { console.log(result) }
                })
              }
            })
          }
        })
      }
    })




  }
})
