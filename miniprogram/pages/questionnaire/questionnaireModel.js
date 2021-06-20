"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfo = void 0;
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
        this.userName = "";
        this.gender = 0;
        this.birthDay = "1992-10-31";
        this.height = 1.00;
        this.constellation = "";
        this.profession = "";
        this.education = 5;
        this.birthPlace = "";
        this.marriage = 0;
        this.hobbies = "";
        this.contract = "";
        this.selfIntroduction = "";
        this.requirements = "";
    }
    return UserInfo;
}());
exports.UserInfo = UserInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25uYWlyZU1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb25uYWlyZU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBO0lBQUE7UUFDWSxjQUFTLEdBQUcsRUFBRSxDQUFBO1FBUWQsVUFBSyxHQUFHLEVBQUUsQ0FBQTtRQVFWLGNBQVMsR0FBRyxFQUFFLENBQUE7SUFPMUIsQ0FBQztJQXRCRyxzQkFBVywyQkFBUTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUN6QixDQUFDO2FBQ0QsVUFBb0IsS0FBYTtZQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtRQUMxQixDQUFDOzs7T0FIQTtJQU1ELHNCQUFXLHVCQUFJO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDckIsQ0FBQzthQUNELFVBQWdCLEtBQWE7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDdEIsQ0FBQzs7O09BSEE7SUFNRCxzQkFBVywyQkFBUTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUN6QixDQUFDO2FBQ0QsVUFBb0IsS0FBYTtZQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtRQUMxQixDQUFDOzs7T0FIQTtJQUlMLFlBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDO0FBR0Q7SUFrQkk7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFBO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBQ2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFBO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFBO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFBO1FBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUE7UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUE7SUFDMUIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDO0FBbENZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhY2VUeXBlLCB1c2VySW5mb1R5cGUgfSBmcm9tIFwiLi91c2VyXCJcblxuY2xhc3MgUGxhY2UgaW1wbGVtZW50cyBQbGFjZVR5cGUge1xuICAgIHByaXZhdGUgX3Byb3ZpbmNlID0gXCJcIlxuICAgIHB1YmxpYyBnZXQgcHJvdmluY2UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb3ZpbmNlXG4gICAgfVxuICAgIHB1YmxpYyBzZXQgcHJvdmluY2UodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wcm92aW5jZSA9IHZhbHVlXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2l0eSA9IFwiXCJcbiAgICBwdWJsaWMgZ2V0IGNpdHkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NpdHlcbiAgICB9XG4gICAgcHVibGljIHNldCBjaXR5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fY2l0eSA9IHZhbHVlXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGlzdHJpY3QgPSBcIlwiXG4gICAgcHVibGljIGdldCBkaXN0cmljdCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzdHJpY3RcbiAgICB9XG4gICAgcHVibGljIHNldCBkaXN0cmljdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2Rpc3RyaWN0ID0gdmFsdWVcbiAgICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIFVzZXJJbmZvIGltcGxlbWVudHMgdXNlckluZm9UeXBlIHtcblxuICAgIHNlcmlhbDogc3RyaW5nXG4gICAgdXNlck5hbWU6IHN0cmluZ1xuICAgIGdlbmRlcjogbnVtYmVyXG4gICAgYmlydGhEYXk6IHN0cmluZ1xuICAgIGhlaWdodDogbnVtYmVyXG4gICAgY29uc3RlbGxhdGlvbjogc3RyaW5nXG4gICAgcHJvZmVzc2lvbjogc3RyaW5nXG4gICAgZWR1Y2F0aW9uOiBudW1iZXJcbiAgICBiaXJ0aFBsYWNlOiBzdHJpbmdcbiAgICBtYXJyaWFnZTogbnVtYmVyXG4gICAgaG9iYmllczogc3RyaW5nXG4gICAgY29udHJhY3Q6IHN0cmluZ1xuICAgIHNlbGZJbnRyb2R1Y3Rpb246IHN0cmluZ1xuICAgIHJlcXVpcmVtZW50czogc3RyaW5nXG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNlcmlhbCA9IFwiXCJcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9IFwiXCJcbiAgICAgICAgdGhpcy5nZW5kZXIgPSAwXG4gICAgICAgIHRoaXMuYmlydGhEYXkgPSBcIjE5OTItMTAtMzFcIlxuICAgICAgICB0aGlzLmhlaWdodCA9IDEuMDBcbiAgICAgICAgdGhpcy5jb25zdGVsbGF0aW9uID0gXCJcIlxuICAgICAgICB0aGlzLnByb2Zlc3Npb24gPSBcIlwiXG4gICAgICAgIHRoaXMuZWR1Y2F0aW9uID0gNVxuICAgICAgICB0aGlzLmJpcnRoUGxhY2UgPSBcIlwiXG4gICAgICAgIHRoaXMubWFycmlhZ2UgPSAwXG4gICAgICAgIHRoaXMuaG9iYmllcyA9IFwiXCJcbiAgICAgICAgdGhpcy5jb250cmFjdCA9IFwiXCJcbiAgICAgICAgdGhpcy5zZWxmSW50cm9kdWN0aW9uID0gXCJcIlxuICAgICAgICB0aGlzLnJlcXVpcmVtZW50cyA9IFwiXCJcbiAgICB9XG59XG4iXX0=