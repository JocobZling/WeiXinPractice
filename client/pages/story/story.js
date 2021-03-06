//手指按下的坐标
var startX = 0;
var startY = 0;
//手指在canvas上移动的坐标
var moveX = 0;
var moveY = 0;
//移动位置跟开始位置的差值
var X = 0;
var Y = 0;
//蛇头的对象
var snakeHead = {
    x: 0,
    y: 0,
    color: "#ff0000",
    w: 20,
    h: 20
};
//身体对象(数组)
var snackBodys = [];
//食物的对象
var foods = [];
//窗口的宽高
var windowWidth = 0;
var windowHeight = 0;
//手指的方向
var direction = null;
//蛇移动的方向
var snakeDirection = "right";
Page({
    canvasStart: function (e) {
        startX = e.touches[0].x;
        startY = e.touches[0].y
    },
    canvasMove: function (e) {
        moveX = e.touches[0].x;
        moveY = e.touches[0].y;
        X = moveX - startX;
        Y = moveY - startY;
        if (Math.abs(X) > Math.abs(Y) && X > 0) {
            direction = "right";
        } else if (Math.abs(X) > Math.abs(Y) && X < 0) {
            direction = "left";
        } else if (Math.abs(X) < Math.abs(Y) && Y > 0) {
            direction = "bottom";
        } else if (Math.abs(X) < Math.abs(Y) && Y < 0) {
            direction = "top";
        }
    },
    canvasEnd: function () {
        snakeDirection = direction;
    },
    onReady: function () {
        //获取画布的上下文
        var context = wx.createContext();
        var frameNum = 0;//帧数
        function draw(obj) {
            context.setFillStyle(obj.color);
            context.beginPath();
            context.rect(obj.x, obj.y, obj.w, obj.h);
            context.closePath();
            context.fill();
        }
        //碰撞函数
        function collide(obj1,obj2) {
            var l1 = obj1.x;
            var r1 =l1+obj1.w;
            var t1=obj1.y;
            var b1=t1+obj1.h;

            var l2 = obj2.x;
            var r2 =l2+obj2.w;
            var t2=obj2.y;
            var b2=t2+obj2.h;
        }


        function animate() {
            frameNum++;
            if (frameNum % 20 === 0) {
                //向蛇身体数组添加一个上一个的位置（身体对象）
                snackBodys.push({
                    x: snakeHead.x,
                    y: snakeHead.y,
                    w: 20,
                    h: 20,
                    color: "#00ff00"
                });
                switch (snakeDirection) {
                    case "left":
                        snakeHead.x -= snakeHead.w;
                        break;
                    case "right":
                        snakeHead.x += snakeHead.w;
                        break;
                    case "top":
                        snakeHead.y -= snakeHead.h;
                        break;
                    case "bottom":
                        snakeHead.y += snakeHead.h;
                        break;
                }
                if (snackBodys.length > 6) {
                    //移除不用的身体
                    snackBodys.shift();
                }
            }
            //绘制蛇头
            draw(snakeHead);
            //绘制蛇身
            for (let i = 0; i < snackBodys.length; i++) {
                let snackBody = snackBodys[i];
                draw(snackBody);
            }
            //绘制食物
            for (let i = 0; i < foods.length; i++) {
                let foodObj = foods[i];
                draw(foodObj);
            }
            wx.drawCanvas({
                canvasId: 'snackCanvas',
                actions: context.getActions()
            });
            requestAnimationFrame(animate);//?
        }

        //随机的函数
        function rand(min, max) {
            return parseInt(Math.random()*(max-min))+min;
        }

        //构造食物对象
        function Food() {
            this.x = rand(0, windowWidth);
            this.y = rand(0, windowHeight);
            var w = rand(10, 20);
            this.w = w;
            this.h = w;
            this.color = "rgb(" + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + ")";
        }

        wx.getSystemInfo({
            success:function (res) {
                windowWidth = res.windowWidth;
                windowHeight = res.windowHeight;
                for (var i = 0; i < 20; i++) {
                    var foodObj = new Food();
                    foods.push(foodObj);
                }
                animate();
            }

        });


    }
})
