//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')
Page({
  data: {
    note_title: "",
    note_group: "",
    note_content: "",
    note_id: ""
  },
  onLoad: function(e) {
    var note_data = wx.getStorageSync(e.key).toString()
    var note = new Array()
    note = note_data.split(',')

    this.setData({
      note_title: note[0],
      note_group: note[1],
      note_content: note[2],
      note_id: note[3]
    })
  },
  note_title: function(e) {
    this.data.note_title = e.detail.value;
  },
  note_content: function(e) {
    this.data.note_content = e.detail.value;
  },
  note_cancle: function() {
    wx.navigateBack({
      delta: 1
    })
  },
  del_note: function() {
    var note_id = this.data.note_id
    wx.removeStorageSync(note_id)
    wx.navigateBack({
      delta: 1
    })
  },
  del_note: function() {
    var note_id = this.data.note_id
    wx.showModal({
      content: '确认删除此笔记？',
      success(res) {
        if (res.confirm) {
          wx.removeStorageSync(note_id)
          wx.removeStorage({
            key: 'note_id',
            success: function(res) {
              wx.navigateBack({
                delta: 1
              })
            },
          })

        }
      }
    })
  },
  note_save: function() {
    var that = this 
    wx.showModal({
      content: '确认修改笔记？',
      success(res) {
        if (res.confirm) {
          var note_id = that.data.note_id
          var note_data = [that.data.note_title, that.data.note_group, that.data.note_content, note_id]
          note_data = note_data.toString()
          wx.setStorageSync(note_id, note_data)
          wx.navigateBack({
            delta: 1
          })
        }
      }
    })

  }
})