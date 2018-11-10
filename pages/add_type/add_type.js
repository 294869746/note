//index.js
//获取应用实例
const app = getApp()

Page({
  onLoad: function () {
  },
  add_cancle: function () {
    wx.navigateBack({
      delta: 1
    })
  },
})