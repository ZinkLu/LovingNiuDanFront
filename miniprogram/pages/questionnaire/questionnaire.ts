
import { UserInfo } from "./questionnaireModel"

let _today = new Date()
let today_string = `${_today.getFullYear()}-${_today.getMonth() + 1}-${_today.getDate()}`


function checkInputs(userInfo: UserInfo): boolean {
  if (userInfo.gender) {
    return true
  }
  return true
}


Page(
  {
    data: {

      userInfo: new UserInfo(),

      // control
      submitted: false,
      today: today_string,

    },
    onLoad(query: Record<string, string>) {
      console.log(this.data.userInfo.birthDay)
      this.setData(
        {
          nickName: query.nickName
        }
      )
    },

    bindDateChange(e: any) {
      let tmp = this.data.userInfo
      tmp.birthDay = e.detail.value
      this.setData(
        {
          userInfo: tmp
        }
      )
    },

    submitTable(e: any) {
      // 验证
      console.info(e)
      if (!checkInputs(this.data.userInfo)) {
      }

      // 发送请求
      wx.request(
        {
          url: "http://ccc.yiqipinba.xyz:5000/questionnaire",
          data: this.data.userInfo,
          dataType: "json",
          method: "POST",
          success: (req) => { console.log(req.data) },
          fail: (req) => { console.log(req.errMsg) }
        }
      )
    }

  }
)

