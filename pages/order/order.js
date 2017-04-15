var util = require('../../utils/util.js');
Page({
  data: {
    list: {}
  },
  onLoad: function() {
    //从缓存中读取数据
    var that = this
    wx.getStorage({
      key: 'list',
      success: function(res) {
        that.setData({
          list: res.data,
          key: Date.now(),
          newOrder: new util.order(Date.now(), '', '', util.formatTime(new Date)),
          placeholder: ''
        })
      }
    })
  },
  onShow: function() {
    this.onLoad()
  },
  //Debug Tool 查看storage
  showStorage: function() {
    wx.getStorage({
      key: 'list',
      success: function(res) {
        console.log(res.data)
      }
    })
  },
  writeStorage: function(){
    try {
      wx.setStorageSync('list', this.data.list)
    } catch (e) {

    }
  },
  addOrder: function(){
    //var key = Date.now()
    //var newOrder = new order(Date.now(), this.data.name, this.data.remark, util.formatTime(new Date));
    //this.data.list[key] = newOrder
    if (this.data.newOrder.name == "") {
      wx.showToast({
        title: "订单名不能为空"
      });
      return false;
    }
    this.data.list[this.data.key] = this.data.newOrder;
    //同步缓存
    this.writeStorage()
    this.setData({
      list: this.data.list
    });
    wx.switchTab({
      url: '../list/list'
    });
  },
  bindRemark: function(remark) {
    this.data.newOrder.newRemark(remark.detail.value)
    //this.setData({
    //  remark: remark.detail.value
    //});
  },
  bindName: function(name) {
    this.data.newOrder.newName(name.detail.value)
    //this.setData({
    //  name: name.detail.value
    //});
  }
})
