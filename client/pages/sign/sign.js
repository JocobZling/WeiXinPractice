var util = require('../../utils/util.js');
Page({
    data: {
        sign:[],
        time:"",
    },
    onLoad: function (options) {
        var that=this;
        var time = util.formatTime(new Date());
        this.setData({
            time: time,
        });
    },
    send:function (e) {
      console.log(e.detail.value);
        this.getSign(e.detail.value);
    },
    getSign:function (sign) {
        var url="http://web.juhe.cn:8080/constellation/getAll";
        var that=this;
        wx.request({
            url:url,
            method:'GET',
            data:{
                'consName':sign,
                'type':'today',
                'key':'9a353d2f52b7fbd5c95ca7acf2fe8ad1'
            },
            header:{
                'content-type':'json'
            },
            success:function (res) {
                that.setData({
                    sign:res.data
                })
            }
        })
    }
});