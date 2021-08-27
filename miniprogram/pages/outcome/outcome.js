"use strict";
var app = getApp();
Page({
    data: {
        formInfo: {},
        constellation: '',
        marriageList: ['保密', '已婚', '未婚'],
        educationList: [ '保密', '小学', '初中', '中专', '高中', '大专', '本科', '研究生以上'],
        constellationList: ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'],
    },
    onLoad: function () {
        
        const payload = {
            name: 'name',
            gender: 0,
            birthDay: '1992-10-31',
            height: 180,
            constellation: 'leo',
            profession: 'profession',
            education: 1,
            birth_place: 'birth_place',
            marriage: 1,
            hobbies: 'hobbies',
            contract: 'contract',
            self_introduction: 'self_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introductionself_introduction',
            requirements: 'requirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirementsrequirements'
        }
        app.globalData.formInfo = payload
        
        let constellation = ''
        switch (app.globalData.formInfo.constellation) {
            case 'aries':
                constellation = '白羊座'
                break;
            case 'taurus':
                constellation = '金牛座'
                break;
            case 'gemini':
                constellation = '双子座'
                break;
            case 'cancer':
                constellation = '巨蟹座'
                break;
            case 'leo':
                constellation = '狮子座'
                break;
            case 'virgo':
                constellation = '处女座'
                break;
            case 'libra':
                constellation = '天秤座'
                break;
            case 'scorpio':
                constellation = '天蝎座'
                break;
            case 'sagittarius':
                constellation = '射手座'
                break;
            case 'capricorn':
                constellation = '摩羯座'
                break;
            case 'aquarius':
                constellation = '水瓶座'
                break;
            case 'pisces':
                constellation = '双鱼座'
                break;
            default:
                break;
        }
        this.setData({
            formInfo: app.globalData.formInfo,
            constellation: constellation
        });
        console.log('log: ', this.data.formInfo)
    },
    bindViewTap () {
        console.log('log: 123')
    }
});
