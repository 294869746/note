//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')
Page({
  data : {
    note_title: "",
    note_group: "",
    note_content: "" 
  },
  onLoad: function () {

  },
  note_title: function(e){
    this.data.note_title = e.detail.value;
  },
  note_group: function(e){
    this.data.note_group = e.detail.value;
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
    var stkeys = wx.getStorageInfoSync().keys.toString()
    var group = new Array()
    var group_index =0
    stkeys = stkeys.split(',')
    for (var key=0; key < stkeys.length; key++) {
      var content = wx.getStorageSync(stkeys[key]).toString()
      content = content.split(',')
      if (content.length == 2) {
        group.push(content[1])
      }
    }
    for(var i=0;i<group.length;i++){
      var input_group = this.data.note_group.toString()
      var exist_group = group[i]
      var flag = true
      if(input_group == exist_group)
      {
        flag = false
        break
      }
    }
    if (flag)
      {
        wx.showToast({
          title: '您的分组不存在',
          icon: 'loading'
        })
        this.setData({
          note_group: ''
        })
      }
      else{
        wx.navigateBack({
          delta: 1
        })
        var note_id = new Date().getTime()
        var note_data = [this.data.note_title, this.data.note_group, this.data.note_content, note_id]
        note_data = note_data.toString()
        note_id = note_id.toString()
        wx.setStorageSync(note_id, note_data)
      }

  }
})



