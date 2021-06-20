
import { config } from "../../configs/configs"
import { UserInfo } from "./questionnaireModel"
import { Constellation, Education, Marriage, Gender } from "./user"

let _today = new Date()
let today_string = `${_today.getFullYear()}-${_today.getMonth() + 1}-${_today.getDate()}`

const ChoiceMapping = {
  "Constellation": Constellation,
  "Education": Education,
  "Marriage": Marriage,
  "Gender": Gender,
}

Page(
  {
    data: {

      userInfo: new UserInfo(),

      // control
      submitted: false,
      today: today_string,

      ConstellationChoice: Constellation,
      EduChoice: Education,
      MarriageChoice: Marriage,
      GenderChoice: Gender
    },
    onLoad(query: Record<string, string>) {
      console.log(this.data.userInfo.birthDay)
      this.setData({ nickName: query.nickName })
    },

    bindDateChange(e: any) {
      let tmp = this.data.userInfo
      tmp.birthDay = e.detail.value
      this.setData({ userInfo: tmp })
    },

    bindSelectorChange(e: any) {
      for (const key in ChoiceMapping) {
        if (Object.prototype.hasOwnProperty.call(ChoiceMapping, key)) {
          const element = ChoiceMapping[key]

          if (e.currentTarget.id.includes(key)) {
            const choice = element[e.detail.value]
            let tmp = this.data.userInfo
            tmp[key.toLowerCase()] = choice.key
            this.setData({ userInfo: tmp })
          }
        }
      }
    },

    submitTable(e: any) {
      // 验证
      // console.info(e)
      // if (!checkInputs(this.data.userInfo)) {
      // }

      var payload = JSON.parse(JSON.stringify(this.data.userInfo))

      wx.login({
        success: (res) => {
          wx.request({
            url: config.BASE_URL + "/code",
            data: { code: res.code },
            method: "GET",
            success: (result) => {
              console.log(result)
              payload.code = res.code
              // 发送请求

              console.info(payload)
              wx.request(
                {
                  url: config.BASE_URL + "/questionnaire",
                  data: payload,
                  dataType: "json",
                  method: "POST",
                  success: (req) => { console.log(req.data) },
                  fail: (req) => { console.log(req.errMsg) }
                }
              )
            },
            fail: () => {
              return
            }
          })
        }
      })
    },



  }
)

