var API_URL = "https://api.douban.com/v2/movie/subject/";

Page({
    data:{
        movie:{}
    },
    onLoad:function (params){
        var that = this;
        wx.request({
            url: API_URL+params.id,
            data: {},
            header: {
                'Content-Type': 'json'
            },
            success: function(res) {
                that.setData({
                    movie: res.data
                });
            }
        })
    }
});