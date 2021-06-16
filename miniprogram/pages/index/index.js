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
                    success: function (result) { console.log(result); }
                });
            }
        });
        wx.getUserProfile({
            desc: '展示用户信息',
            success: function (res) {
                console.log(res);
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGlEQUE4QztBQUc5QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUVoQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsRUFBRTtRQUNULFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQscUJBQXFCLEVBQUUsS0FBSztRQUM1QixlQUFlLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUM7S0FDekc7SUFHRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNO1FBRUosSUFBSSxFQUFFLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gscUJBQXFCLEVBQUUsSUFBSTthQUM1QixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFDRCxjQUFjO1FBQWQsaUJBWUM7UUFWQyxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQ2hCLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNoQixLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtvQkFDdEIsV0FBVyxFQUFFLElBQUk7aUJBQ2xCLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsV0FBVyxFQUFYLFVBQVksQ0FBTTtRQUVoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDM0IsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHNCQUFzQjtRQUNwQixFQUFFLENBQUMsVUFBVSxDQUNYO1lBQ0UsR0FBRyxFQUFFLDBDQUEwQyxHQUFHLEtBQUs7U0FDeEQsQ0FDRixDQUFBO1FBRUQsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBSVgsRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDVCxHQUFHLEVBQUUsZ0JBQU0sQ0FBQyxRQUFRLEdBQUcsT0FBTztvQkFDOUIsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUU7b0JBQ3hCLE1BQU0sRUFBRSxLQUFLO29CQUNiLE9BQU8sRUFBRSxVQUFDLE1BQU0sSUFBTyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUMsQ0FBQztpQkFDN0MsQ0FBQyxDQUFBO1lBRUosQ0FBQztTQUNGLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDaEIsSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbEIsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlncy9jb25maWdzXCJcblxuLy8g6I635Y+W5bqU55So5a6e5L6LXG5jb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIG1vdHRvOiAnJyxcbiAgICB1c2VySW5mbzoge30sXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcbiAgICBjYW5JVXNlR2V0VXNlclByb2ZpbGU6IGZhbHNlLFxuICAgIGNhbklVc2VPcGVuRGF0YTogd3guY2FuSVVzZSgnb3Blbi1kYXRhLnR5cGUudXNlckF2YXRhclVybCcpICYmIHd4LmNhbklVc2UoJ29wZW4tZGF0YS50eXBlLnVzZXJOaWNrTmFtZScpIC8vIOWmgumcgOWwneivleiOt+WPlueUqOaIt+S/oeaBr+WPr+aUueS4umZhbHNlXG4gIH0sXG5cbiAgLy8g5LqL5Lu25aSE55CG5Ye95pWwXG4gIGJpbmRWaWV3VGFwKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vbG9ncy9sb2dzJyxcbiAgICB9KVxuICB9LFxuICBvbkxvYWQoKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICh3eC5nZXRVc2VyUHJvZmlsZSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgY2FuSVVzZUdldFVzZXJQcm9maWxlOiB0cnVlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIGdldFVzZXJQcm9maWxlKCkge1xuICAgIC8vIOaOqOiNkOS9v+eUqHd4LmdldFVzZXJQcm9maWxl6I635Y+W55So5oi35L+h5oGv77yM5byA5Y+R6ICF5q+P5qyh6YCa6L+H6K+l5o6l5Y+j6I635Y+W55So5oi35Liq5Lq65L+h5oGv5Z2H6ZyA55So5oi356Gu6K6k77yM5byA5Y+R6ICF5aal5ZaE5L+d566h55So5oi35b+r6YCf5aGr5YaZ55qE5aS05YOP5pi156ew77yM6YG/5YWN6YeN5aSN5by556qXXG4gICAgd3guZ2V0VXNlclByb2ZpbGUoe1xuICAgICAgZGVzYzogJ+WxleekuueUqOaIt+S/oeaBrycsIC8vIOWjsOaYjuiOt+WPlueUqOaIt+S4quS6uuS/oeaBr+WQjueahOeUqOmAlO+8jOWQjue7reS8muWxleekuuWcqOW8ueeql+S4re+8jOivt+iwqOaFjuWhq+WGmVxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xuICAgIC8vIOS4jeaOqOiNkOS9v+eUqGdldFVzZXJJbmZv6I635Y+W55So5oi35L+h5oGv77yM6aKE6K6h6IeqMjAyMeW5tDTmnIgxM+aXpei1t++8jGdldFVzZXJJbmZv5bCG5LiN5YaN5by55Ye65by556qX77yM5bm255u05o6l6L+U5Zue5Yy/5ZCN55qE55So5oi35Liq5Lq65L+h5oGvXG4gICAgY29uc29sZS5sb2coZSlcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxuICAgICAgaGFzVXNlckluZm86IHRydWVcbiAgICB9KVxuICB9LFxuXG4gIGdldFVzZXJQcm9maWxlRm9yVGFibGUoKSB7XG4gICAgd3gubmF2aWdhdGVUbyhcbiAgICAgIHtcbiAgICAgICAgdXJsOiBcIi4uL3F1ZXN0aW9ubmFpcmUvcXVlc3Rpb25uYWlyZT9uaWNrTmFtZT1cIiArIFwieHh4XCJcbiAgICAgIH1cbiAgICApXG4gICAgLy8gcmV0dXJuIFxuICAgIHd4LmxvZ2luKHtcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXG5cbiAgICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiBjb25maWcuQkFTRV9VUkwgKyBcIi9jb2RlXCIsXG4gICAgICAgICAgZGF0YTogeyBjb2RlOiByZXMuY29kZSB9LFxuICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7IGNvbnNvbGUubG9nKHJlc3VsdCkgfVxuICAgICAgICB9KVxuXG4gICAgICB9XG4gICAgfSlcblxuICAgIHd4LmdldFVzZXJQcm9maWxlKHtcbiAgICAgIGRlc2M6ICflsZXnpLrnlKjmiLfkv6Hmga8nLCAvLyDlo7DmmI7ojrflj5bnlKjmiLfkuKrkurrkv6Hmga/lkI7nmoTnlKjpgJTvvIzlkI7nu63kvJrlsZXnpLrlnKjlvLnnqpfkuK3vvIzor7fosKjmhY7loavlhplcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pXG4iXX0=