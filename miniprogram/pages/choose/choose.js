"use strict";
var app = getApp();
Page({
    data: {
        showPanel: true,
        showOpenEgg: true,
        page1: true,
        page2: false,
        page3: false,
    },
    onLoad: function () {
    },
    bindViewTap (val) {
        console.log('log: 123', val.currentTarget.id)
        this.setData({
            showPanel: false
        });
        setTimeout(() => {
            this.setData({
                page1: false,
                page2: true
            })
        }, 500);
        setTimeout(() => {
            this.setData({
                showOpenEgg: false
            })
        }, 510);
        setTimeout(() => {
            this.setData({
                showOpenEgg: true
            })
        }, 1000);
        setTimeout(() => {
            this.setData({
                page2: false,
                page3: true
            })
        }, 2000);
    }
});
