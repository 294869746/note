//index.js
//获取应用实例
const app = getApp()

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
    console.log(this.data)
    wx.navigateBack({
      delta: 1
    })
  }
})



