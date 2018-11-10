//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')
Page({
  data : {
    note_title: "",
    note_type: "",
    note_content: "" 
  },
  onLoad: function () {

  },
  note_title: function(e){
    this.data.note_title = e.detail.value;
  },
  note_type: function(e){
    this.data.note_type = e.detail.value;
  },
  note_content: function(e){
    this.data.note_content = e.detail.value;
  },
  note_cancle: function(){
    wx.navigateBack({
      delta: 1
    })
  },
  note_save: function() {
    var that = this 
    console.log(this.data)
    wx.navigateBack({
      delta: 1
    })
    var note_id = util.formatTime(new Date())
    var note_data = [that.data.note_title, that.data.note_type, that.data.note_content, note_id]
    note_data = note_data.toString()
    note_id = note_id.toString()
    console.log(wx.getStorageInfoSync().currentSize)
    console.log(wx.getStorageSync('2'))
    wx.setStorageSync(note_id, note_data)
  }
})



