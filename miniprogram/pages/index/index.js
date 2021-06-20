"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configs_1 = require("../../configs/configs");
var app = getApp();
Page({
    data: {
        motto: '',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        canIUseGetUserProfile: false,
        canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName')
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs',
        });
    },
    onLoad: function () {
        if (wx.getUserProfile) {
            this.setData({
                canIUseGetUserProfile: true,
            });
        }
    },
    getUserProfile: function () {
        var _this = this;
        wx.getUserProfile({
            desc: '展示用户信息',
            success: function (res) {
                console.log(res);
                _this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                });
            }
        });
    },
    getUserInfo: function (e) {
        console.log(e);
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    },
    getUserProfileForTable: function () {
        wx.navigateTo({
            url: "../questionnaire/questionnaire?nickName=" + "xxx"
        });
        wx.login({
            success: function (res) {
                wx.request({
                    url: configs_1.config.BASE_URL + "/code",
                    data: { code: res.code },
                    method: "GET",
                    success: function (result) {
                        console.log(result);
                        var code = res.code;
                        wx.getUserProfile({
                            desc: '展示用户信息',
                            success: function (res) {
                                var payload = JSON.parse(JSON.stringify(res));
                                payload.code = code;
                                console.info("\u521B\u5EFA\u7528\u6237\u4FE1\u606F\u7684\u4FE1\u606F\u4E3A" + JSON.stringify(payload));
                                wx.request({
                                    url: configs_1.config.BASE_URL + "/user",
                                    data: res,
                                    method: "POST",
                                    success: function (result) { console.log(result); }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGlEQUE4QztBQUc5QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUVoQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsRUFBRTtRQUNULFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQscUJBQXFCLEVBQUUsS0FBSztRQUM1QixlQUFlLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUM7S0FDekc7SUFHRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNO1FBRUosSUFBSSxFQUFFLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gscUJBQXFCLEVBQUUsSUFBSTthQUM1QixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFDRCxjQUFjO1FBQWQsaUJBWUM7UUFWQyxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQ2hCLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNoQixLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtvQkFDdEIsV0FBVyxFQUFFLElBQUk7aUJBQ2xCLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsV0FBVyxFQUFYLFVBQVksQ0FBTTtRQUVoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDM0IsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHNCQUFzQjtRQUNwQixFQUFFLENBQUMsVUFBVSxDQUNYO1lBQ0UsR0FBRyxFQUFFLDBDQUEwQyxHQUFHLEtBQUs7U0FDeEQsQ0FDRixDQUFBO1FBRUQsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBSVgsRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDVCxHQUFHLEVBQUUsZ0JBQU0sQ0FBQyxRQUFRLEdBQUcsT0FBTztvQkFDOUIsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUU7b0JBQ3hCLE1BQU0sRUFBRSxLQUFLO29CQUNiLE9BQU8sRUFBRSxVQUFDLE1BQU07d0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTt3QkFDbkIsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQTt3QkFFckIsRUFBRSxDQUFDLGNBQWMsQ0FBQzs0QkFDaEIsSUFBSSxFQUFFLFFBQVE7NEJBQ2QsT0FBTyxFQUFFLFVBQUMsR0FBRztnQ0FDWCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtnQ0FDN0MsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7Z0NBRW5CLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUVBQWEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUcsQ0FBQyxDQUFBO2dDQUVwRCxFQUFFLENBQUMsT0FBTyxDQUFDO29DQUNULEdBQUcsRUFBRSxnQkFBTSxDQUFDLFFBQVEsR0FBRyxPQUFPO29DQUM5QixJQUFJLEVBQUUsR0FBRztvQ0FDVCxNQUFNLEVBQUUsTUFBTTtvQ0FDZCxPQUFPLEVBQUUsVUFBQyxNQUFNLElBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDLENBQUM7aUNBQzdDLENBQUMsQ0FBQTs0QkFDSixDQUFDO3lCQUNGLENBQUMsQ0FBQTtvQkFDSixDQUFDO2lCQUNGLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUE7SUFLSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcblxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ3MvY29uZmlnc1wiXG5cbi8vIOiOt+WPluW6lOeUqOWunuS+i1xuY29uc3QgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KClcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBtb3R0bzogJycsXG4gICAgdXNlckluZm86IHt9LFxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG4gICAgY2FuSVVzZUdldFVzZXJQcm9maWxlOiBmYWxzZSxcbiAgICBjYW5JVXNlT3BlbkRhdGE6IHd4LmNhbklVc2UoJ29wZW4tZGF0YS50eXBlLnVzZXJBdmF0YXJVcmwnKSAmJiB3eC5jYW5JVXNlKCdvcGVuLWRhdGEudHlwZS51c2VyTmlja05hbWUnKSAvLyDlpoLpnIDlsJ3or5Xojrflj5bnlKjmiLfkv6Hmga/lj6/mlLnkuLpmYWxzZVxuICB9LFxuXG4gIC8vIOS6i+S7tuWkhOeQhuWHveaVsFxuICBiaW5kVmlld1RhcCgpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy4uL2xvZ3MvbG9ncycsXG4gICAgfSlcbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAod3guZ2V0VXNlclByb2ZpbGUpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGNhbklVc2VHZXRVc2VyUHJvZmlsZTogdHJ1ZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuICBnZXRVc2VyUHJvZmlsZSgpIHtcbiAgICAvLyDmjqjojZDkvb/nlKh3eC5nZXRVc2VyUHJvZmlsZeiOt+WPlueUqOaIt+S/oeaBr++8jOW8gOWPkeiAheavj+asoemAmui/h+ivpeaOpeWPo+iOt+WPlueUqOaIt+S4quS6uuS/oeaBr+Wdh+mcgOeUqOaIt+ehruiupO+8jOW8gOWPkeiAheWmpeWWhOS/neeuoeeUqOaIt+W/q+mAn+Whq+WGmeeahOWktOWDj+aYteensO+8jOmBv+WFjemHjeWkjeW8ueeql1xuICAgIHd4LmdldFVzZXJQcm9maWxlKHtcbiAgICAgIGRlc2M6ICflsZXnpLrnlKjmiLfkv6Hmga8nLCAvLyDlo7DmmI7ojrflj5bnlKjmiLfkuKrkurrkv6Hmga/lkI7nmoTnlKjpgJTvvIzlkI7nu63kvJrlsZXnpLrlnKjlvLnnqpfkuK3vvIzor7fosKjmhY7loavlhplcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgICAvLyDkuI3mjqjojZDkvb/nlKhnZXRVc2VySW5mb+iOt+WPlueUqOaIt+S/oeaBr++8jOmihOiuoeiHqjIwMjHlubQ05pyIMTPml6XotbfvvIxnZXRVc2VySW5mb+WwhuS4jeWGjeW8ueWHuuW8ueeql++8jOW5tuebtOaOpei/lOWbnuWMv+WQjeeahOeUqOaIt+S4quS6uuS/oeaBr1xuICAgIGNvbnNvbGUubG9nKGUpXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgfSlcbiAgfSxcblxuICBnZXRVc2VyUHJvZmlsZUZvclRhYmxlKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oXG4gICAgICB7XG4gICAgICAgIHVybDogXCIuLi9xdWVzdGlvbm5haXJlL3F1ZXN0aW9ubmFpcmU/bmlja05hbWU9XCIgKyBcInh4eFwiXG4gICAgICB9XG4gICAgKVxuICAgIC8vIHJldHVybiBcbiAgICB3eC5sb2dpbih7XG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKVxuXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogY29uZmlnLkJBU0VfVVJMICsgXCIvY29kZVwiLFxuICAgICAgICAgIGRhdGE6IHsgY29kZTogcmVzLmNvZGUgfSxcbiAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICAgICAgY29uc3QgY29kZSA9IHJlcy5jb2RlXG5cbiAgICAgICAgICAgIHd4LmdldFVzZXJQcm9maWxlKHtcbiAgICAgICAgICAgICAgZGVzYzogJ+WxleekuueUqOaIt+S/oeaBrycsIC8vIOWjsOaYjuiOt+WPlueUqOaIt+S4quS6uuS/oeaBr+WQjueahOeUqOmAlO+8jOWQjue7reS8muWxleekuuWcqOW8ueeql+S4re+8jOivt+iwqOaFjuWhq+WGmVxuICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBheWxvYWQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlcykpXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5jb2RlID0gY29kZVxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKGDliJvlu7rnlKjmiLfkv6Hmga/nmoTkv6Hmga/kuLoke0pTT04uc3RyaW5naWZ5KHBheWxvYWQpfWApXG5cbiAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgIHVybDogY29uZmlnLkJBU0VfVVJMICsgXCIvdXNlclwiLFxuICAgICAgICAgICAgICAgICAgZGF0YTogcmVzLFxuICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHsgY29uc29sZS5sb2cocmVzdWx0KSB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuXG5cblxuICB9XG59KVxuIl19