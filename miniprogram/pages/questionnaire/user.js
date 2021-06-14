"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gender = exports.Marriage = exports.Education = exports.Constellation = void 0;
var Constellation;
(function (Constellation) {
    Constellation["capricorn"] = "\u9B54\u7FAF\u5EA7";
    Constellation["aquarius"] = "\u6C34\u74F6\u5EA7";
    Constellation["pisces"] = "\u53CC\u9C7C\u5EA7";
    Constellation["aries"] = "\u7261\u7F8A\u5EA7";
    Constellation["taurus"] = "\u91D1\u725B\u5EA7";
    Constellation["gemini"] = "\u53CC\u5B50\u5EA7";
    Constellation["cancer"] = "\u5DE8\u87F9\u5EA7";
    Constellation["leo"] = "\u72EE\u5B50\u5EA7";
    Constellation["virgo"] = "\u5904\u5973\u5EA7";
    Constellation["libra"] = "\u5929\u79E4\u5EA7";
    Constellation["scorpio"] = "\u5929\u874E\u5EA7";
    Constellation["sagittarius"] = "\u5C04\u624B\u5EA7";
})(Constellation = exports.Constellation || (exports.Constellation = {}));
var Education;
(function (Education) {
    Education["undergraduate"] = "\u672C\u79D1";
    Education["postgraduateAbove"] = "\u7814\u7A76\u751F\u4EE5\u4E0A";
})(Education = exports.Education || (exports.Education = {}));
var Marriage;
(function (Marriage) {
    Marriage["single"] = "\u5355\u8EAB";
    Marriage["married"] = "\u5DF2\u5A5A";
    Marriage["secret"] = "\u4FDD\u5BC6";
})(Marriage = exports.Marriage || (exports.Marriage = {}));
var Gender;
(function (Gender) {
    Gender["male"] = "\u7537";
    Gender["female"] = "\u5973";
    Gender["secret"] = "\u4FDD\u5BC6";
})(Gender = exports.Gender || (exports.Gender = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsSUFBWSxhQWFYO0FBYkQsV0FBWSxhQUFhO0lBQ3JCLGlEQUFpQixDQUFBO0lBQ2pCLGdEQUFnQixDQUFBO0lBQ2hCLDhDQUFjLENBQUE7SUFDZCw2Q0FBYSxDQUFBO0lBQ2IsOENBQWMsQ0FBQTtJQUNkLDhDQUFjLENBQUE7SUFDZCw4Q0FBYyxDQUFBO0lBQ2QsMkNBQVcsQ0FBQTtJQUNYLDZDQUFhLENBQUE7SUFDYiw2Q0FBYSxDQUFBO0lBQ2IsK0NBQWUsQ0FBQTtJQUNmLG1EQUFtQixDQUFBO0FBQ3ZCLENBQUMsRUFiVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQWF4QjtBQUVELElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNqQiwyQ0FBb0IsQ0FBQTtJQUNwQixpRUFBMkIsQ0FBQTtBQUMvQixDQUFDLEVBSFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFHcEI7QUFFRCxJQUFZLFFBRVg7QUFGRCxXQUFZLFFBQVE7SUFDaEIsbUNBQWEsQ0FBQTtJQUFFLG9DQUFjLENBQUE7SUFBRSxtQ0FBYSxDQUFBO0FBQ2hELENBQUMsRUFGVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQUVuQjtBQUVELElBQVksTUFFWDtBQUZELFdBQVksTUFBTTtJQUNkLHlCQUFVLENBQUE7SUFBRSwyQkFBWSxDQUFBO0lBQUUsaUNBQWEsQ0FBQTtBQUMzQyxDQUFDLEVBRlcsTUFBTSxHQUFOLGNBQU0sS0FBTixjQUFNLFFBRWpCIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZW51bSBDb25zdGVsbGF0aW9uIHtcbiAgICBjYXByaWNvcm4gPSBcIumtlOe+r+W6p1wiLFxuICAgIGFxdWFyaXVzID0gXCLmsLTnk7bluqdcIixcbiAgICBwaXNjZXMgPSBcIuWPjOmxvOW6p1wiLFxuICAgIGFyaWVzID0gXCLniaHnvorluqdcIixcbiAgICB0YXVydXMgPSBcIumHkeeJm+W6p1wiLFxuICAgIGdlbWluaSA9IFwi5Y+M5a2Q5bqnXCIsXG4gICAgY2FuY2VyID0gXCLlt6jon7nluqdcIixcbiAgICBsZW8gPSBcIueLruWtkOW6p1wiLFxuICAgIHZpcmdvID0gXCLlpITlpbPluqdcIixcbiAgICBsaWJyYSA9IFwi5aSp56ek5bqnXCIsXG4gICAgc2NvcnBpbyA9IFwi5aSp6J2O5bqnXCIsXG4gICAgc2FnaXR0YXJpdXMgPSBcIuWwhOaJi+W6p1wiLFxufVxuXG5leHBvcnQgZW51bSBFZHVjYXRpb24ge1xuICAgIHVuZGVyZ3JhZHVhdGUgPSBcIuacrOenkVwiLFxuICAgIHBvc3RncmFkdWF0ZUFib3ZlID0gXCLnoJTnqbbnlJ/ku6XkuIpcIixcbn1cblxuZXhwb3J0IGVudW0gTWFycmlhZ2Uge1xuICAgIHNpbmdsZSA9IFwi5Y2V6LqrXCIsIG1hcnJpZWQgPSBcIuW3suWpmlwiLCBzZWNyZXQgPSBcIuS/neWvhlwiXG59XG5cbmV4cG9ydCBlbnVtIEdlbmRlciB7XG4gICAgbWFsZSA9IFwi55S3XCIsIGZlbWFsZSA9IFwi5aWzXCIsIHNlY3JldCA9IFwi5L+d5a+GXCJcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIFBsYWNlVHlwZSB7XG4gICAgcHJvdmluY2U6IHN0cmluZ1xuICAgIGNpdHk6IHN0cmluZ1xuICAgIGRpc3RyaWN0OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSB1c2VySW5mb1R5cGUge1xuICAgIHNlcmlhbDogc3RyaW5nLFxuICAgIG9wZW5JRDogc3RyaW5nLFxuICAgIHVzZXJOYW1lOiBzdHJpbmcsXG4gICAgZ2VuZGVyOiBHZW5kZXIsXG4gICAgYmlydGhEYXk6IHN0cmluZyxcbiAgICBoZWlnaHQ6IG51bWJlcixcbiAgICBjb25zdGVsbGF0aW9uOiBDb25zdGVsbGF0aW9uLCAvLyDmmJ/luqdcbiAgICBwcm9mZXNzaW9uOiBzdHJpbmcsIC8vIOiBjOS4mlxuICAgIGVkdWNhdGlvbjogRWR1Y2F0aW9uLCAvLyDlrabkvY1cbiAgICBiaXJ0aFBsYWNlOiBQbGFjZVR5cGUsIC8vIOWHuueUn+WcsFxuICAgIG1hcnJpYWdlOiBNYXJyaWFnZSwgLy8g5ama5ae7XG4gICAgaG9iYmllczogc3RyaW5nLFxuICAgIGNvbnRyYWN0OiBzdHJpbmcsIC8vIOiBlOezu+aWueW8jyBcbiAgICBzZWxmSW50cm9kdWN0aW9uOiBzdHJpbmcsXG4gICAgcmVxdWlyZW1lbnRzOiBzdHJpbmcsXG59XG4iXX0=