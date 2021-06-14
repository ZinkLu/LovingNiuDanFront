"use strict";
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
        wx.login({ success: function (res) { console.log(res); } });
        wx.getUserProfile({
            desc: '展示用户信息',
            success: function (res) {
                console.log(res);
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFaEMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLEVBQUU7UUFDVCxRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1FBQ25ELHFCQUFxQixFQUFFLEtBQUs7UUFDNUIsZUFBZSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLDZCQUE2QixDQUFDO0tBQ3pHO0lBR0QsV0FBVztRQUNULEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsY0FBYztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUVKLElBQUksRUFBRSxDQUFDLGNBQWMsRUFBRTtZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLHFCQUFxQixFQUFFLElBQUk7YUFDNUIsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBQ0QsY0FBYztRQUFkLGlCQVlDO1FBVkMsRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUNoQixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDaEIsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7b0JBQ3RCLFdBQVcsRUFBRSxJQUFJO2lCQUNsQixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFdBQVcsRUFBWCxVQUFZLENBQU07UUFFaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNkLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzNCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxzQkFBc0I7UUFDcEIsRUFBRSxDQUFDLFVBQVUsQ0FDWDtZQUNFLEdBQUcsRUFBRSwwQ0FBMEMsR0FBRyxLQUFLO1NBQ3hELENBQ0YsQ0FBQTtRQUVELEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBQyxHQUFHLElBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7UUFFcEQsRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUNoQixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNsQixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG4vLyDojrflj5blupTnlKjlrp7kvotcbmNvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbW90dG86ICcnLFxuICAgIHVzZXJJbmZvOiB7fSxcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxuICAgIGNhbklVc2VHZXRVc2VyUHJvZmlsZTogZmFsc2UsXG4gICAgY2FuSVVzZU9wZW5EYXRhOiB3eC5jYW5JVXNlKCdvcGVuLWRhdGEudHlwZS51c2VyQXZhdGFyVXJsJykgJiYgd3guY2FuSVVzZSgnb3Blbi1kYXRhLnR5cGUudXNlck5pY2tOYW1lJykgLy8g5aaC6ZyA5bCd6K+V6I635Y+W55So5oi35L+h5oGv5Y+v5pS55Li6ZmFsc2VcbiAgfSxcblxuICAvLyDkuovku7blpITnkIblh73mlbBcbiAgYmluZFZpZXdUYXAoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9sb2dzL2xvZ3MnLFxuICAgIH0pXG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKHd4LmdldFVzZXJQcm9maWxlKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBjYW5JVXNlR2V0VXNlclByb2ZpbGU6IHRydWUsXG4gICAgICB9KVxuICAgIH1cbiAgfSxcbiAgZ2V0VXNlclByb2ZpbGUoKSB7XG4gICAgLy8g5o6o6I2Q5L2/55Sod3guZ2V0VXNlclByb2ZpbGXojrflj5bnlKjmiLfkv6Hmga/vvIzlvIDlj5HogIXmr4/mrKHpgJrov4for6XmjqXlj6Pojrflj5bnlKjmiLfkuKrkurrkv6Hmga/lnYfpnIDnlKjmiLfnoa7orqTvvIzlvIDlj5HogIXlpqXlloTkv53nrqHnlKjmiLflv6vpgJ/loavlhpnnmoTlpLTlg4/mmLXnp7DvvIzpgb/lhY3ph43lpI3lvLnnqpdcbiAgICB3eC5nZXRVc2VyUHJvZmlsZSh7XG4gICAgICBkZXNjOiAn5bGV56S655So5oi35L+h5oGvJywgLy8g5aOw5piO6I635Y+W55So5oi35Liq5Lq65L+h5oGv5ZCO55qE55So6YCU77yM5ZCO57ut5Lya5bGV56S65Zyo5by556qX5Lit77yM6K+36LCo5oWO5aGr5YaZXG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgZ2V0VXNlckluZm8oZTogYW55KSB7XG4gICAgLy8g5LiN5o6o6I2Q5L2/55SoZ2V0VXNlckluZm/ojrflj5bnlKjmiLfkv6Hmga/vvIzpooTorqHoh6oyMDIx5bm0NOaciDEz5pel6LW377yMZ2V0VXNlckluZm/lsIbkuI3lho3lvLnlh7rlvLnnqpfvvIzlubbnm7TmjqXov5Tlm57ljL/lkI3nmoTnlKjmiLfkuKrkurrkv6Hmga9cbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICB1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgIH0pXG4gIH0sXG5cbiAgZ2V0VXNlclByb2ZpbGVGb3JUYWJsZSgpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKFxuICAgICAge1xuICAgICAgICB1cmw6IFwiLi4vcXVlc3Rpb25uYWlyZS9xdWVzdGlvbm5haXJlP25pY2tOYW1lPVwiICsgXCJ4eHhcIlxuICAgICAgfVxuICAgIClcbiAgICAvLyByZXR1cm4gXG4gICAgd3gubG9naW4oeyBzdWNjZXNzOiAocmVzKSA9PiB7IGNvbnNvbGUubG9nKHJlcykgfSB9KVxuXG4gICAgd3guZ2V0VXNlclByb2ZpbGUoe1xuICAgICAgZGVzYzogJ+WxleekuueUqOaIt+S/oeaBrycsIC8vIOWjsOaYjuiOt+WPlueUqOaIt+S4quS6uuS/oeaBr+WQjueahOeUqOmAlO+8jOWQjue7reS8muWxleekuuWcqOW8ueeql+S4re+8jOivt+iwqOaFjuWhq+WGmVxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSlcbiJdfQ==