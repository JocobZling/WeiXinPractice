Page({
    data:{
        msgList:[],
        scrollTop:0
    },
    onLoad:function (options) {

    },
    send:function (e) {
      console.log(e.detail.value.msg);
      var msg={"type":0, "msg":e.detail.value.msg };
      var msgList=this.data.msgList;
      msgList.push(msg);
      this.setData({
          msgList:msgList
      });
      this.getReply(e.detail.value.msg);
    },
    getReply:function (sendMsg) {
      var that=this;//获取数据
      var url="https://www.tuling123.com/openapi/api";
      wx.request({
          url:url,
          data:{
              'key':'86f59dab7924470ca1c60b7ac7933c1d',
              'info':sendMsg,
              'userid':'zl',
          },
          header:{
            'content-type':'json'
          },
          success:function (res) {
              console.log(res.data.text);
              var msg={"type":1,"msg":res.data.text};
              var msgList=that.data.msgList;
              msgList.push(msg);
              that.setData({
                  msgList:msgList
              });
              that.setData({
                  scrollTop:that.data.scrollTop+100
              })
          }
      })
        
    }
})