var listItem = require('../list/list.js')
Page({
  data: {
  },
  addOrder: function(){
    var newOrder = [{
      id: 20170312,
      name: '新的订单'
    }];

    listItem.data.list = listItem.data.list.concat(newOrder);
    this.setData({
      list: this.data.list
    });
  }
})
