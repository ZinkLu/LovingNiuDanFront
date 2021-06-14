"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfo = void 0;
var user_1 = require("./user");
var Place = (function () {
    function Place() {
        this._province = "";
        this._city = "";
        this._district = "";
    }
    Object.defineProperty(Place.prototype, "province", {
        get: function () {
            return this._province;
        },
        set: function (value) {
            this._province = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (value) {
            this._city = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "district", {
        get: function () {
            return this._district;
        },
        set: function (value) {
            this._district = value;
        },
        enumerable: false,
        configurable: true
    });
    return Place;
}());
var UserInfo = (function () {
    function UserInfo() {
        this.serial = "";
        this.openID = "";
        this.userName = "";
        this.gender = user_1.Gender.female;
        this.birthDay = "1992-10-31";
        this.height = 1.00;
        this.constellation = user_1.Constellation.aquarius;
        this.profession = "";
        this.education = user_1.Education.postgraduateAbove;
        this.birthPlace = new Place();
        this.marriage = user_1.Marriage.single;
        this.hobbies = "";
        this.contract = "";
        this.selfIntroduction = "";
        this.requirements = "";
    }
    return UserInfo;
}());
exports.UserInfo = UserInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25uYWlyZU1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb25uYWlyZU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUE0RjtBQUU1RjtJQUFBO1FBQ1ksY0FBUyxHQUFHLEVBQUUsQ0FBQTtRQVFkLFVBQUssR0FBRyxFQUFFLENBQUE7UUFRVixjQUFTLEdBQUcsRUFBRSxDQUFBO0lBTzFCLENBQUM7SUF0Qkcsc0JBQVcsMkJBQVE7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDekIsQ0FBQzthQUNELFVBQW9CLEtBQWE7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7UUFDMUIsQ0FBQzs7O09BSEE7SUFNRCxzQkFBVyx1QkFBSTthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ3JCLENBQUM7YUFDRCxVQUFnQixLQUFhO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ3RCLENBQUM7OztPQUhBO0lBTUQsc0JBQVcsMkJBQVE7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDekIsQ0FBQzthQUNELFVBQW9CLEtBQWE7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7UUFDMUIsQ0FBQzs7O09BSEE7SUFJTCxZQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQUdEO0lBbUJJO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7UUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUE7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFNLENBQUMsTUFBTSxDQUFBO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFBO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBQ2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQWEsQ0FBQyxRQUFRLENBQUE7UUFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUE7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBUyxDQUFDLGlCQUFpQixDQUFBO1FBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQTtRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLGVBQVEsQ0FBQyxNQUFNLENBQUE7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUE7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUE7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQTtRQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQTtJQUMxQixDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQUFwQ0QsSUFvQ0M7QUFwQ1ksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGFjZVR5cGUsIHVzZXJJbmZvVHlwZSwgR2VuZGVyLCBDb25zdGVsbGF0aW9uLCBFZHVjYXRpb24sIE1hcnJpYWdlIH0gZnJvbSBcIi4vdXNlclwiXG5cbmNsYXNzIFBsYWNlIGltcGxlbWVudHMgUGxhY2VUeXBlIHtcbiAgICBwcml2YXRlIF9wcm92aW5jZSA9IFwiXCJcbiAgICBwdWJsaWMgZ2V0IHByb3ZpbmNlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm92aW5jZVxuICAgIH1cbiAgICBwdWJsaWMgc2V0IHByb3ZpbmNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJvdmluY2UgPSB2YWx1ZVxuICAgIH1cblxuICAgIHByaXZhdGUgX2NpdHkgPSBcIlwiXG4gICAgcHVibGljIGdldCBjaXR5KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaXR5XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgY2l0eSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2NpdHkgPSB2YWx1ZVxuICAgIH1cblxuICAgIHByaXZhdGUgX2Rpc3RyaWN0ID0gXCJcIlxuICAgIHB1YmxpYyBnZXQgZGlzdHJpY3QoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc3RyaWN0XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZGlzdHJpY3QodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9kaXN0cmljdCA9IHZhbHVlXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBVc2VySW5mbyBpbXBsZW1lbnRzIHVzZXJJbmZvVHlwZSB7XG5cbiAgICBzZXJpYWw6IHN0cmluZ1xuICAgIG9wZW5JRDogc3RyaW5nXG4gICAgdXNlck5hbWU6IHN0cmluZ1xuICAgIGdlbmRlcjogR2VuZGVyXG4gICAgYmlydGhEYXk6IHN0cmluZ1xuICAgIGhlaWdodDogbnVtYmVyXG4gICAgY29uc3RlbGxhdGlvbjogQ29uc3RlbGxhdGlvblxuICAgIHByb2Zlc3Npb246IHN0cmluZ1xuICAgIGVkdWNhdGlvbjogRWR1Y2F0aW9uXG4gICAgYmlydGhQbGFjZTogUGxhY2VcbiAgICBtYXJyaWFnZTogTWFycmlhZ2VcbiAgICBob2JiaWVzOiBzdHJpbmdcbiAgICBjb250cmFjdDogc3RyaW5nXG4gICAgc2VsZkludHJvZHVjdGlvbjogc3RyaW5nXG4gICAgcmVxdWlyZW1lbnRzOiBzdHJpbmdcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsID0gXCJcIlxuICAgICAgICB0aGlzLm9wZW5JRCA9IFwiXCJcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9IFwiXCJcbiAgICAgICAgdGhpcy5nZW5kZXIgPSBHZW5kZXIuZmVtYWxlXG4gICAgICAgIHRoaXMuYmlydGhEYXkgPSBcIjE5OTItMTAtMzFcIlxuICAgICAgICB0aGlzLmhlaWdodCA9IDEuMDBcbiAgICAgICAgdGhpcy5jb25zdGVsbGF0aW9uID0gQ29uc3RlbGxhdGlvbi5hcXVhcml1c1xuICAgICAgICB0aGlzLnByb2Zlc3Npb24gPSBcIlwiXG4gICAgICAgIHRoaXMuZWR1Y2F0aW9uID0gRWR1Y2F0aW9uLnBvc3RncmFkdWF0ZUFib3ZlXG4gICAgICAgIHRoaXMuYmlydGhQbGFjZSA9IG5ldyBQbGFjZSgpXG4gICAgICAgIHRoaXMubWFycmlhZ2UgPSBNYXJyaWFnZS5zaW5nbGVcbiAgICAgICAgdGhpcy5ob2JiaWVzID0gXCJcIlxuICAgICAgICB0aGlzLmNvbnRyYWN0ID0gXCJcIlxuICAgICAgICB0aGlzLnNlbGZJbnRyb2R1Y3Rpb24gPSBcIlwiXG4gICAgICAgIHRoaXMucmVxdWlyZW1lbnRzID0gXCJcIlxuICAgIH1cbn1cbiJdfQ==