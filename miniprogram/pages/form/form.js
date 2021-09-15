"use strict";
var app = getApp();
Page({
    data: {
        // background: ['demo-text-1', 'demo-text-2', 'demo-text-3']
        constellationIndex: -1,
        constellationList: ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'],
        educationIndex: -1,
        educationList: ['保密', '小学', '初中', '中专', '高中', '大专', '本科', '研究生以上'],
        marriageIndex: -1,
        marriageList: ['保密', '已婚', '未婚'],
        genderList: ['保密', '男', '女'],
        personalInfo: '',
        requireInfo: '',
        formData: {
            name: '', // 名字
            gender: -1, // 性别
            birth_day: '', // 生日
            height: 0, // 身高
            constellation: '', // 星座
            profession: '', // 职业
            education: 0, // 学历
            birth_place: '', // 出生地
            marriage: 0, // 婚姻
            hobbies: '', // 爱好
            contract: '', // 联系电话
            self_introduction: '', // 自我介绍
            requirements: '' // 要求
        },
        birth_day: '',
        gender: -1
    },
    onLoad: function () {
    },
    // 输入框变化
    inputedit(val) {
        const key = val.currentTarget.id
        let value = val.detail.value
        if (key === 'height') {
            value = parseInt(value)
        }
        const obj = this.data.formData
        obj[key] = value
        this.setData(obj);
        console.log('log: after', this.data.formData)
    },
    // 选择 变化
    pcikerChange(val) {
        const key = val.currentTarget.id
        let value = val.detail.value
        if (key === 'gender') {
            value = parseInt(value)
            this.setData({
                gender: value
            });
        }
        const obj = this.data.formData
        obj[key] = value
        this.setData(obj);
        console.log('log: after', this.data.formData)
    },
    // 星座选择
    constellationChange(val) {
        console.log('log: val', val.detail.value)
        const index = parseInt(val.detail.value)
        this.setData({
            constellationIndex: index
        });
        const obj = this.data.formData
        switch (this.data.constellationList[index]) {
            case '白羊座':
                obj.constellation = 'aries'
                break;
            case '金牛座':
                obj.constellation = 'taurus'
                break;
            case '双子座':
                obj.constellation = 'gemini'
                break;
            case '巨蟹座':
                obj.constellation = 'cancer'
                break;
            case '狮子座':
                obj.constellation = 'leo'
                break;
            case '处女座':
                obj.constellation = 'virgo'
                break;
            case '天秤座':
                obj.constellation = 'libra'
                break;
            case '天蝎座':
                obj.constellation = 'scorpio'
                break;
            case '射手座':
                obj.constellation = 'sagittarius'
                break;
            case '摩羯座':
                obj.constellation = 'capricorn'
                break;
            case '水瓶座':
                obj.constellation = 'aquarius'
                break;
            case '双鱼座':
                obj.constellation = 'pisces'
                break;
            default:
                break;
        }
        this.setData(obj);
        console.log('log: after', this.data.formData)
    },
    // 婚姻选择
    marriageChange(val) {
        const index = parseInt(val.detail.value)
        this.setData({
            marriageIndex: index
        });
        const obj = this.data.formData
        obj.marriage = index
        this.setData(obj);
        console.log('log: after', this.data.formData)
    },
    // 学历选择
    educationChange(val) {
        const index = parseInt(val.detail.value)
        this.setData({
            educationIndex: index
        });
        const obj = this.data.formData
        obj.education = index
        this.setData(obj);
        console.log('log: after', this.data.formData)
    },
    // 自我介绍
    personInfoChange(val) {
        console.log('log: val', val)
        const value = val.detail.value
        this.setData({
            personalInfo: value
        });
        const obj = this.data.formData
        obj.self_introduction = value
        this.setData(obj);
        console.log('log: after', this.data.formData)
    },
    // 要求
    requireInfoChange(val) {
        console.log('log: val', val)
        const value = val.detail.value
        this.setData({
            requireInfo: value
        });
        const obj = this.data.formData
        obj.requirements = value
        this.setData(obj);
        console.log('log: after', this.data.formData)
    },
    // 去支付
    goPay() {
        console.log('log: formData', this.data.formData)
        // const payload = {
        //     name: 'name',
        //     gender: 0,
        //     birth_day: '1992-10-31',
        //     height: 180,
        //     constellation: 'leo',
        //     profession: 'profession',
        //     education: 1,
        //     birth_place: 'birth_place',
        //     marriage: 1,
        //     hobbies: 'hobbies',
        //     contract: 'contract',
        //     self_introduction: 'self_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introduction',
        //     requirements: 'requirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirements'
        // }


        const payload = this.data.formData
        app.globalData.formInfo = payload

        let tips = ''

        if (!payload.name) {
            tips = '姓名一定要填噢'
        } else if (!payload.birth_day) {
            tips = '生日一定要填噢'
        } else if (!payload.height) {
            tips = '身高一定要填噢'
        } else if (payload.constellation > -1) {
            tips = '星座一定要填噢'
        } else if (!payload.profession) {
            tips = '职业一定要填噢'
        } else if (!payload.birth_place) {
            tips = '出生地一定要填噢'
        } else if (!payload.contract) {
            tips = '联系电话一定要填噢'
        } else if (!payload.hobbies) {
            tips = '兴趣爱好一定要填噢'
        } else if (payload.self_introduction.length < 40) {
            tips = '自我介绍至少40字噢'
        } else if (payload.requirements.length < 40) {
            tips = '对ta的要求至少40字噢'
        }
        if (tips) {
            wx.showToast({
                title: tips,
                icon: "none",
                duration: 1000
            })
            return
        }
        wx.login({
            success: (res) => {
                wx.request({
                    url: app.globalData.baseUrl + "/code",
                    data: { code: res.code },
                    method: "GET",
                    success: (result) => {
                        console.log('result', result)
                        app.globalData.appCode = res.code
                        payload.code = res.code
                        // 发送请求
                        wx.request(
                            {
                                url: app.globalData.baseUrl + "/questionnaire",
                                data: payload,
                                dataType: "json",
                                method: "POST",
                                success: (res) => {
                                    console.log(res)
                                    app.globalData.questionnaireId = res.data.data.id
                                    wx.navigateTo({
                                        url: './../payment/payment'
                                    })
                                },
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
    }
});
