var API_URL='https://api.douban.com/v2/movie/in_theaters';
Page({
    data: {
        title:"加载中",
        movies:[]
    },
    onLoad:function () {
        var that = this;//把this保存起来
        wx.showToast({
            title: "加载中...",
            icon:"loading",
            duration:10000
        });
        wx.request({
            url:API_URL,
            data:{},
            method:'GET',
            header:{
                'Content-Type':'json'
            },
            success:function (res) {
                wx.hideToast();
                var data=res.data;
                that.setData({
                    title:data.title,
                    movies:data.subjects
                });
                console.log(res.data);
            }
        })
    }
})
