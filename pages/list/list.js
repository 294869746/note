//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Array.prototype.distinct = function () {
  var arr = this,
    result = [],
    i,
    j,
    len = arr.length;
  for (i = 0; i < len; i++) {
    for (j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        j = ++i;
      }
    }
    result.push(arr[i]);
  }
  return result;
}

Page({
  data: {
    list_data: [{
      date: '',
      message: '',
      group: ''
    }],
    list_group: ['']
  },
  onLoad: function() {
  },
  onShow() {
    var index = 0
    var key = 0
    var stkeys = wx.getStorageInfoSync().keys.toString()
    var group = new Array()
    stkeys = stkeys.split(',')
    for (key; key < stkeys.length; key++) {
      var content = wx.getStorageSync(stkeys[key]).toString()
      content = content.split(',')
      if (content.length == 2) {
        var gname = "list_group[" + index + "]"
          group.push(content[1])
        index = index + 1
      }
    }
    group = group.distinct()
    for(var i=0;i<group.length;i++)
    {
      index = "list_group["+i+"]"
      this.setData({
        [index]: group[i] 
      })
    }
  },
  add_note: function() {
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