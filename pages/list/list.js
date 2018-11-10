//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list_data: [{
      date: '1',
      message: 'foo',
      group: 'java'
    }, {
      date: '2',
      message: 'bar',
      group: 'python'
    },
      {
        date: '3',
        message: 'foo',
        group: 'java'
      }, {
        date: '4',
        message: 'bar',
        group: 'python'
      }],
    list_group: [{
      name: "java",
    },{
      name: "python"
    }]
  },
  onLoad: function() {

  },
  onShow() {
    this.onLoad
    console.log("reload")
  },
  add_note: function() {
    console.log('test')
    wx.navigateTo({
      url: '../add_content/add_content'
    })
  },

  add_type: function() {
    console.log('test')
    wx.navigateTo({
      url: '../add_type/add_type'
    })
  },

  log: function() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  }
})