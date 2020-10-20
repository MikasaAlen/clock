Page({
  onShow: function() {
    wx.setNavigationBarTitle({
      title: '设置'
    })
    this.setData({
    	workTime: wx.getStorageSync('workTime'),
    	restTime: wx.getStorageSync('restTime')
    })
  },
  changeWorkTime: function(e) {
  	wx.setStorage({
  		key: 'workTime',
  		data: e.detail.value
  	})
  },
  changeRestTime: function(e) {
  	wx.setStorage({
  		key: 'restTime',
  		data: e.detail.value
  	})
  },
  changeImg: function() {
   
    var bgImg = 'https://i.loli.net/2020/10/19/WpywBjal41Uct5u.png';
    this.setData( {
      pBackgroundImg: bgImg
    } );
  },
  onLoad: function (options) {
    var that = this    //这句话是必须的
    that.changeImg();
  },
})
