//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Array.prototype.distinct = function() {
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
  },
  onLoad: function() {
    // wx.clearStorageSync()
  },
  onShow() {
    //初始化数据
    this.setData({
      list_group: '',
      list_note: ''
    })

    var group_index = 0
    var note_index = 0
    var key = 0
    var stkeys = wx.getStorageInfoSync().keys.toString()
    var group = new Array()
    var note = new Array()
    stkeys = stkeys.split(',')
    for (key; key < stkeys.length; key++) {
      var content = wx.getStorageSync(stkeys[key]).toString()
      content = content.split(',')
      if (content.length == 2) {
        var gname = "list_group[" + group_index + "]"
        group.push(content[1])
        group_index = group_index + 1
      } else if (content.length == 4) {
        var nname = "list_data[" + note_index + "]"
        note.push(content)
        note_index = note_index + 1
      }
    }
    group = group.distinct()
    for (var i = 0; i < group.length; i++) {
      group_index = "list_group[" + i + "]"
      this.setData({
        [group_index]: group[i]
      })
    }
    for (var i = 0; i < note.length; i++) {
      var note_title_index = "list_note[" + i + "].title"
      var note_group_index = "list_note[" + i + "].group"
      var note_date_index = "list_note[" + i + "].date"
      this.setData({
        [note_title_index]: note[i][0]
      })
      this.setData({
        [note_group_index]: note[i][1]
      })
      this.setData({
        [note_date_index]: note[i][3]
      })
    }
    //添加笔记信息

  },
  add_note: function() {
    wx.navigateTo({
      url: '../add_content/add_content'
    })
  },

  add_type: function() {
    wx.navigateTo({
      url: '../add_type/add_type'
    })
  },

  clear_data: function() {
    var that = this
    wx.showModal({
      title: '提示',
      content: '确认删除所有数据吗？',
      success: function(res) {
        if (res.confirm) {
          wx.clearStorageSync()

          that.setData({
            'list_note': ''
          })
          that.setData({
            'list_group': ''
          })
          that.onLoad()
        }
      }
    })
  },
  note_detail: function(e){
    var viewDataSet = e.target.dataset;
    var id = viewDataSet.id
    var title = viewDataSet.title
    wx.navigateTo({
      url: '../detail/detail?key='+id,
    })
  },
  log: function() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  }
})