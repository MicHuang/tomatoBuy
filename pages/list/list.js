Page({
  data: {
    hidden: true,
    index: 0,
    list: [
      {
        id: 20170409,
        name: '日货订单',
      }, {
        id: 20170410,
        name: '加拿大订单'
      }, {
        id: 20160101,
        name: '很久之前的订单'
      }
    ]
  },
  //事件处理
  onTap: function() {
    wx.navigateTo({
      url: './'
    })
  },
  deleteOrder: function(e){
    var dataSet = e.target.dataset;
    var Index = dataSet.index;
    this.data.list.splice(Index,1);
    this.setData({
      list: this.data.list
    });
  },
  modelTap: function(e) {
    var that = this;
    var o = e;
    wx.showModal({
      content: "确定要删除吗？",
      confirmText: "确定",
      cancelText: "取消",
      success: function(e) {
        if (e.confirm) {
          that.deleteOrder(o)
        }
      }
    })
  }
})
