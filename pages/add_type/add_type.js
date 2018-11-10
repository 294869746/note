//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Page({
  data:{
    addgroup_list: [''],
    input_value: ''
  },
  onLoad: function () {
    var list_keys = wx.getStorageInfoSync().keys.toString()
    list_keys = list_keys.split(',')
    var glist = 0 
    for(var i=0;i<list_keys.length;i++)
    {
      if(wx.getStorageSync(list_keys[i]).length==2)
      {
        var index = "addgroup_list[" + glist + "]"
        this.setData({
          [index]: wx.getStorageSync(list_keys[i])[1]
        })
        glist += 1
      }
    }
  },
  onShow: function (){

  },
  add_group: function (e) {
    this.setData({
      input_value: e.detail.value
    })


  },
  add_save: function (e) {
    var group_list = new Array()
    var size = this.data.addgroup_list.length
    var list_data_num = "addgroup_list["+size+"]"
    //加个重名校验
    var old_list = this.data.addgroup_list
    for (var i = 0; i < old_list.length; i++) {
      if (this.data.input_value == this.data.addgroup_list[i]) {
        wx.showToast({
          title: '分组重名了',
          icon: 'loading'
        })
        this.setData({
          input_value: ''
        })
      }
    }
    //结束
    group_list.push(this.data.input_value)
    if (this.data.input_value != undefined && this.data.input_value != '')
    {
      console.log(group_list[0])
      this.setData({
        [list_data_num]: group_list[0]
      })
      var group_id = util.formatTime(new Date())
      wx.setStorageSync(group_id, [group_id, group_list[0]])
    }
    this.setData({
      input_value: ''
    })

  },
  add_cancle: function () {
    wx.navigateBack({
      delta: 1
    })
  },
})