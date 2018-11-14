//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Array.prototype.remove = function (val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};

Page({
  data:{
    addgroup_list: [''],
    input_value: ''
  },
  onLoad: function () {
  },
  onShow: function (){
    var list_keys = wx.getStorageInfoSync().keys.toString()
    list_keys = list_keys.split(',')
    var glist = 0
    for (var i = 0; i < list_keys.length; i++) {
      if (wx.getStorageSync(list_keys[i]).length == 2) {
        var name = "addgroup_list[" + glist + "].name"
        var id = "addgroup_list[" + glist + "].id"
        this.setData({
          [name]: wx.getStorageSync(list_keys[i])[1],
          [id]: wx.getStorageSync(list_keys[i])[0]
        })
        glist += 1
      }
    }
  },
  add_group: function (e) {
    this.setData({
      input_value: e.detail.value
    })


  },
  add_save: function (e) {
    var group_list = new Array()
    var size = this.data.addgroup_list.length
    var list_data_name = "addgroup_list["+size+"].name"
    var list_data_id = "addgroup_list[" + size + "].id"
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
      var group_id = util.formatTime(new Date())
      wx.setStorageSync(group_id, [group_id, group_list[0]])
      this.setData({
        [list_data_name]: group_list[0],
        [list_data_id]: group_id
      })
    }
    this.setData({
      input_value: ''
    })

  },
  del_group: function(e){
    var viewDataSet = e.target.dataset;
    var name = viewDataSet.name
    var id = viewDataSet.id
    var that = this
    wx.showModal({
      content: '是否删除'+name+"?",
      success(res){
        if(res.confirm)
        {
          wx.removeStorageSync(id)
          that.setData({
            addgroup_list: ''
          })
          that.onShow()
        }
      }
    })

  },
  add_cancle: function () {
    wx.navigateBack({
      delta: 1
    })
  },
})