"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var configs_1 = require("../../configs/configs");
var questionnaireModel_1 = require("./questionnaireModel");
var user_1 = require("./user");
var _today = new Date();
var today_string = _today.getFullYear() + "-" + (_today.getMonth() + 1) + "-" + _today.getDate();
var ChoiceMapping = {
    "Constellation": user_1.Constellation,
    "Education": user_1.Education,
    "Marriage": user_1.Marriage,
    "Gender": user_1.Gender,
};
Page({
    data: {
        userInfo: new questionnaireModel_1.UserInfo(),
        submitted: false,
        today: today_string,
        ConstellationChoice: user_1.Constellation,
        EduChoice: user_1.Education,
        MarriageChoice: user_1.Marriage,
        GenderChoice: user_1.Gender
    },
    onLoad: function (query) {
        console.log(this.data.userInfo.birthDay);
        this.setData({ nickName: query.nickName });
    },
    bindDateChange: function (e) {
        var tmp = this.data.userInfo;
        tmp.birthDay = e.detail.value;
        this.setData({ userInfo: tmp });
    },
    bindSelectorChange: function (e) {
        for (var key in ChoiceMapping) {
            if (Object.prototype.hasOwnProperty.call(ChoiceMapping, key)) {
                var element = ChoiceMapping[key];
                if (e.currentTarget.id.includes(key)) {
                    var choice = element[e.detail.value];
                    var tmp = this.data.userInfo;
                    tmp[key.toLowerCase()] = choice.key;
                    this.setData({ userInfo: tmp });
                }
            }
        }
    },
    submitTable: function (e) {
        var _this = this;
        var payload = JSON.parse(JSON.stringify(this.data.userInfo));
        wx.login({
            success: function (res) {
                wx.request({
                    url: configs_1.config.BASE_URL + "/code",
                    data: { code: res.code },
                    method: "GET",
                    success: function (result) {
                        console.log(result);
                        payload.code = res.code;
                        console.info(payload);
                        wx.request({
                            url: configs_1.config.BASE_URL + "/questionnaire",
                            data: payload,
                            dataType: "json",
                            method: "POST",
                            success: function (req) {
                                _this.makeOrder(res.code, req.data.data.id);
                            },
                            fail: function (req) { console.log(req.errMsg); }
                        });
                    },
                    fail: function () {
                        return;
                    }
                });
            }
        });
    },
    makeOrder: function (code, questionnaire_id) {
        var _this = this;
        wx.request({
            url: configs_1.config.BASE_URL + "/order",
            data: { code: code, questionnaire_id: questionnaire_id },
            method: "POST",
            success: function (res) {
                console.log("making order now");
                console.log(res);
                var orderId = res.data.data;
                _this.Pay(orderId, code);
            }
        });
    },
    Pay: function (order_id, code) {
        console.log("\u8BA2\u5355\u53F7 " + order_id);
        wx.request({
            url: configs_1.config.BASE_URL + "/payment",
            data: { code: code, order_id: order_id },
            method: "POST",
            success: function (res) {
                console.log("get payment sign now");
                console.log(res);
                var payLoad = res.data.data;
                var params = __assign(__assign({}, payLoad), { sussces: function (res) {
                        console.log("????????????");
                        console.log(res.data);
                    }, fail: function (res) {
                        console.log("????????????");
                        console.log(res.errMsg);
                    } });
                wx.requestPayment(params);
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25uYWlyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInF1ZXN0aW9ubmFpcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLGlEQUE4QztBQUM5QywyREFBK0M7QUFDL0MsK0JBQW1FO0FBRW5FLElBQUksTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7QUFDdkIsSUFBSSxZQUFZLEdBQU0sTUFBTSxDQUFDLFdBQVcsRUFBRSxVQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQUksTUFBTSxDQUFDLE9BQU8sRUFBSSxDQUFBO0FBRXpGLElBQU0sYUFBYSxHQUFHO0lBQ3BCLGVBQWUsRUFBRSxvQkFBYTtJQUM5QixXQUFXLEVBQUUsZ0JBQVM7SUFDdEIsVUFBVSxFQUFFLGVBQVE7SUFDcEIsUUFBUSxFQUFFLGFBQU07Q0FDakIsQ0FBQTtBQUVELElBQUksQ0FDRjtJQUNFLElBQUksRUFBRTtRQUVKLFFBQVEsRUFBRSxJQUFJLDZCQUFRLEVBQUU7UUFHeEIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsS0FBSyxFQUFFLFlBQVk7UUFFbkIsbUJBQW1CLEVBQUUsb0JBQWE7UUFDbEMsU0FBUyxFQUFFLGdCQUFTO1FBQ3BCLGNBQWMsRUFBRSxlQUFRO1FBQ3hCLFlBQVksRUFBRSxhQUFNO0tBQ3JCO0lBQ0QsTUFBTSxFQUFOLFVBQU8sS0FBNkI7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFFRCxjQUFjLEVBQWQsVUFBZSxDQUFNO1FBQ25CLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFBO1FBQzVCLEdBQUcsQ0FBQyxRQUFRLEdB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TUFBTSxDQUFDLENBQUE7b0JBQzNCLENBQUMsR0FDQSxDQUFBO2dCQUNBLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDNUIsQ0FBQztTQUNGLENBQ0YsQ0FBQTtJQUlILENBQUM7Q0FDRixDQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25maWdzL2NvbmZpZ3NcIlxuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tIFwiLi9xdWVzdGlvbm5haXJlTW9kZWxcIlxuaW1wb3J0IHsgQ29uc3RlbGxhdGlvbiwgRWR1Y2F0aW9uLCBNYXJyaWFnZSwgR2VuZGVyIH0gZnJvbSBcIi4vdXNlclwiXG5cbmxldCBfdG9kYXkgPSBuZXcgRGF0ZSgpXG5sZXQgdG9kYXlfc3RyaW5nID0gYCR7X3RvZGF5LmdldEZ1bGxZZWFyKCl9LSR7X3RvZGF5LmdldE1vbnRoKCkgKyAxfS0ke190b2RheS5nZXREYXRlKCl9YFxuXG5jb25zdCBDaG9pY2VNYXBwaW5nID0ge1xuICBcIkNvbnN0ZWxsYXRpb25cIjogQ29uc3RlbGxhdGlvbixcbiAgXCJFZHVjYXRpb25cIjogRWR1Y2F0aW9uLFxuICBcIk1hcnJpYWdlXCI6IE1hcnJpYWdlLFxuICBcIkdlbmRlclwiOiBHZW5kZXIsXG59XG5cblBhZ2UoXG4gIHtcbiAgICBkYXRhOiB7XG5cbiAgICAgIHVzZXJJbmZvOiBuZXcgVXNlckluZm8oKSxcblxuICAgICAgLy8gY29udHJvbFxuICAgICAgc3VibWl0dGVkOiBmYWxzZSxcbiAgICAgIHRvZGF5OiB0b2RheV9zdHJpbmcsXG5cbiAgICAgIENvbnN0ZWxsYXRpb25DaG9pY2U6IENvbnN0ZWxsYXRpb24sXG4gICAgICBFZHVDaG9pY2U6IEVkdWNhdGlvbixcbiAgICAgIE1hcnJpYWdlQ2hvaWNlOiBNYXJyaWFnZSxcbiAgICAgIEdlbmRlckNob2ljZTogR2VuZGVyXG4gICAgfSxcbiAgICBvbkxvYWQocXVlcnk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YS51c2VySW5mby5iaXJ0aERheSlcbiAgICAgIHRoaXMuc2V0RGF0YSh7IG5pY2tOYW1lOiBxdWVyeS5uaWNrTmFtZSB9KVxuICAgIH0sXG5cbiAgICBiaW5kRGF0ZUNoYW5nZShlOiBhbnkpIHtcbiAgICAgIGxldCB0bXAgPSB0aGlzLmRhdGEudXNlckluZm9cbiAgICAgIHRtcC5iaXJ0aERheSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB0aGlzLnNldERhdGEoeyB1c2VySW5mbzogdG1wIH0pXG4gICAgfSxcblxuICAgIGJpbmRTZWxlY3RvckNoYW5nZShlOiBhbnkpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIENob2ljZU1hcHBpbmcpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChDaG9pY2VNYXBwaW5nLCBrZXkpKSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IENob2ljZU1hcHBpbmdba2V5XVxuXG4gICAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5pZC5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBjb25zdCBjaG9pY2UgPSBlbGVtZW50W2UuZGV0YWlsLnZhbHVlXVxuICAgICAgICAgICAgbGV0IHRtcCA9IHRoaXMuZGF0YS51c2VySW5mb1xuICAgICAgICAgICAgdG1wW2tleS50b0xvd2VyQ2FzZSgpXSA9IGNob2ljZS5rZXlcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IHVzZXJJbmZvOiB0bXAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3VibWl0VGFibGUoZTogYW55KSB7XG4gICAgICAvLyDpqozor4FcbiAgICAgIC8vIGNvbnNvbGUuaW5mbyhlKVxuICAgICAgLy8gaWYgKCFjaGVja0lucHV0cyh0aGlzLmRhdGEudXNlckluZm8pKSB7XG4gICAgICAvLyB9XG5cbiAgICAgIHZhciBwYXlsb2FkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEudXNlckluZm8pKVxuXG4gICAgICB3eC5sb2dpbih7XG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogY29uZmlnLkJBU0VfVVJMICsgXCIvY29kZVwiLFxuICAgICAgICAgICAgZGF0YTogeyBjb2RlOiByZXMuY29kZSB9LFxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgICAgICAgIHBheWxvYWQuY29kZSA9IHJlcy5jb2RlXG4gICAgICAgICAgICAgIC8vIOWPkemAgeivt+axglxuXG4gICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhwYXlsb2FkKVxuICAgICAgICAgICAgICB3eC5yZXF1ZXN0KFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHVybDogY29uZmlnLkJBU0VfVVJMICsgXCIvcXVlc3Rpb25uYWlyZVwiLFxuICAgICAgICAgICAgICAgICAgZGF0YTogcGF5bG9hZCxcbiAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVxKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWtlT3JkZXIocmVzLmNvZGUsIHJlcS5kYXRhLmRhdGEuaWQpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZmFpbDogKHJlcSkgPT4geyBjb25zb2xlLmxvZyhyZXEuZXJyTXNnKSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBtYWtlT3JkZXIoY29kZTogc3RyaW5nLCBxdWVzdGlvbm5haXJlX2lkOiBudW1iZXIpIHtcblxuICAgICAgLy8gY29uc29sZS5sb2coY29kZSwgcXVlc3Rpb25uYWlyZV9pZClcblxuICAgICAgd3gucmVxdWVzdChcbiAgICAgICAge1xuICAgICAgICAgIHVybDogY29uZmlnLkJBU0VfVVJMICsgXCIvb3JkZXJcIixcbiAgICAgICAgICBkYXRhOiB7IGNvZGU6IGNvZGUsIHF1ZXN0aW9ubmFpcmVfaWQ6IHF1ZXN0aW9ubmFpcmVfaWQgfSxcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWFraW5nIG9yZGVyIG5vd1wiKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgbGV0IG9yZGVySWQgPSByZXMuZGF0YS5kYXRhXG4gICAgICAgICAgICB0aGlzLlBheShvcmRlcklkLCBjb2RlKVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBQYXkoKVxuICAgICAgICB9XG4gICAgICApXG4gICAgfSxcblxuICAgIFBheShvcmRlcl9pZDogbnVtYmVyLCBjb2RlOiBzdHJpbmcpIHtcbiAgICAgIGNvbnNvbGUubG9nKGDorqLljZXlj7cgJHtvcmRlcl9pZH1gKVxuICAgICAgd3gucmVxdWVzdChcbiAgICAgICAge1xuICAgICAgICAgIHVybDogY29uZmlnLkJBU0VfVVJMICsgXCIvcGF5bWVudFwiLFxuICAgICAgICAgIGRhdGE6IHsgY29kZTogY29kZSwgb3JkZXJfaWQ6IG9yZGVyX2lkIH0sXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldCBwYXltZW50IHNpZ24gbm93XCIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICBsZXQgcGF5TG9hZCA9IHJlcy5kYXRhLmRhdGE7XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAuLi5wYXlMb2FkLFxuICAgICAgICAgICAgICBzdXNzY2VzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaUr+S7mOaIkOWKn1wiKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmlK/ku5jlpLHotKVcIilcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB3eC5yZXF1ZXN0UGF5bWVudChwYXJhbXMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgXG5cbiAgICB9XG4gIH1cbilcblxuIl19