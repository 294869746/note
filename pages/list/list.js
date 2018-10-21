//index.js
//获取应用实例
const app = getApp()

Page({
  onLoad: function () {
  },
  onclick: function(){
    console.log('test')
    wx.navigateTo({
      url: '../add_content/add_content'
    })
  }
})

function onclick() {
  console.log('test')  
}
