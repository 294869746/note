//index.js
//获取应用实例
const app = getApp()

Page({
  onLoad: function () {
  },
  onShow() {
    this.onLoad
    console.log("reload")
  },
  add_note: function(){
    console.log('test')
    wx.navigateTo({
      url: '../add_content/add_content'
    })
  },

  add_type: function () {
    console.log('test')
    wx.navigateTo({
      url: '../add_type/add_type'
    })
  },

  log: function(){
    wx.navigateTo({
      url: '../logs/logs',
    })
  }
})