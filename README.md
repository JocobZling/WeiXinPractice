### 部署文档：
** 1.作品名称：**HouseKeeper
** 2.作品目录：**
client

- images 				  //图片目录
- pages				 //页面目录
- style  				//weUI样式目录
app.js				
app.json				//配置文件
app.wxss				//全局样式

server(nodejs模版自动生成)

** 3.主要页面：**
- "pages/select/select"//选择页面
- "pages/weather/weather"//天气查询页面
- "pages/chat/chat"//聊天页面
- "pages/sign/sign"//星座运势查询页面
- "pages/movie/movie"//电影详情页面
- "pages/movieIndex/movieIndex"//最近上映电影页面  
- "pages/story/story"//贪吃蛇游戏页面(功能不完善未完成)  
- "pages/index/index"//关于我的页面(未完善)

** 4.后台语言：**使用`nodejs`为后台语言，不过该作品并未有涉及后台部分。

** 5.数据来源：**主要调用网络上的api资源来获得数据，
request 合法域名使用如下：
- https://api.douban.com
- https://www.tuling123.com
- https://v.juhe.cn

特别提示：因为聊天的图灵机器人、以及星座api没有获得https证书，所以只能在开发者工具中，
选择不校验安全域名、TLS 版本以及 HTTPS 证书这个选项后方能体验。

下载链接：https://github.com/JocobZling/WeiXinPractice
