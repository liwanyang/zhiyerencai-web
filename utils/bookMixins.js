 const bookMinxins = {
  methods: {
    //画图形
    draw_graph(graphType, obj) {
      //把蒙版放于画板上面
      $("#canvas_bak").css("z-index", 1);
      //先画在蒙版上 再复制到画布上

      chooseImg(obj);
      var canDraw = false;

      var startX;
      var startY;

      //鼠标按下获取 开始xy开始画图
      var mousedown = e => {
        this.scroolTop = $(window).scrollTop();
        this.scroolLeft = $(window).scrollLeft();
        this.canvasTop = $(this.canvas).offset().top - this.scroolTop;
        this.canvasLeft = $(this.canvas).offset().left - this.scroolLeft;

        this.context.strokeStyle = this.color;
        this.context_bak.strokeStyle = this.color;
        this.context_bak.lineWidth = this.size;
        if (this.isMobile()) {
          startX = e.originalEvent.touches[0].clientX - this.canvasLeft;
          startY = e.originalEvent.touches[0].clientY - this.canvasTop;
        } else {
          startX = e.clientX - this.canvasLeft;
          startY = e.clientY - this.canvasTop;
        }
        this.context_bak.moveTo(startX, startY);
        canDraw = true;
        if (graphType == "pencil") {
          this.context_bak.beginPath();
        } else if (graphType == "circle") {
          this.context.beginPath();
          this.context.moveTo(startX, startY);
          this.context.lineTo(startX + 1, startY + 1);
          this.context.stroke();
        } else if (graphType == "rubber") {
          this.context.clearRect(
            startX - this.size * 10,
            startY - this.size * 10,
            this.size * 20,
            this.size * 20
          );
        }
        // 阻止点击时的cursor的变化，draw
        e = e || window.event;
        e.preventDefault();
      };

      //鼠标离开 把蒙版canvas的图片生成到canvas中
      var mouseup = e => {
        e = e || window.event;
        canDraw = false;
        var image = new Image();
        // if (graphType != "rubber") {
        image.src = this.canvas_bak.toDataURL();
        image.onload = () => {
          this.context.drawImage(
            image,
            0,
            0,
            image.width,
            image.height,
            0,
            0,
            this.canvasWidth,
            this.canvasHeight
          );
          this.clearContext();
          this.saveImageToAry();
        };
        // }
      };

      //选择功能按钮 修改样式
      function chooseImg(obj) {
        var imgAry = $(".draw_controller li");
        for (var i = 0; i < imgAry.length; i++) {
          $(imgAry[i]).removeClass("active");
          $(imgAry[i]).addClass("normal");
        }
        $(obj).removeClass("normal");
        $(obj).addClass("active");
      }

      // 鼠标移动
      var mousemove = e => {
        this.scroolTop = $(window).scrollTop();
        this.scroolLeft = $(window).scrollLeft();
        this.canvasTop = $(this.canvas).offset().top - this.scroolTop;
        this.canvasLeft = $(this.canvas).offset().left - this.scroolLeft;
        e = e || window.event;
        if (this.isMobile()) {
          var x = e.originalEvent.touches[0].clientX - this.canvasLeft;
          var y = e.originalEvent.touches[0].clientY - this.canvasTop;
        } else {
          var x = e.clientX - this.canvasLeft;
          var y = e.clientY - this.canvasTop;
        }
        //方块  4条直线搞定
        if (graphType == "square") {
          if (canDraw) {
            this.context_bak.beginPath();
            this.clearContext();
            this.context_bak.moveTo(startX, startY);
            this.context_bak.lineTo(x, startY);
            this.context_bak.lineTo(x, y);
            this.context_bak.lineTo(startX, y);
            this.context_bak.lineTo(startX, startY);
            this.context_bak.stroke();
          }
          //直线
        } else if (graphType == "line") {
          if (canDraw) {
            this.context_bak.beginPath();
            this.clearContext();
            this.context_bak.moveTo(startX, startY);
            this.context_bak.lineTo(x, y);
            this.context_bak.stroke();
          }
          //画笔
        } else if (graphType == "pencil") {
          if (canDraw) {
            if (this.isMobile()) {
              this.context_bak.lineTo(
                e.originalEvent.touches[0].clientX - this.canvasLeft,
                e.originalEvent.touches[0].clientY - this.canvasTop
              );
            } else {
              this.context_bak.lineTo(
                e.clientX - this.canvasLeft,
                e.clientY - this.canvasTop
              );
            }
            this.context_bak.stroke();
          }
          //圆 未画得时候 出现一个小圆
        } else if (graphType == "circle") {
          this.clearContext();
          if (canDraw) {
            // 鼠标点击移动时产生的圆
            this.context_bak.beginPath();
            var radii = Math.sqrt(
              (startX - x) * (startX - x) + (startY - y) * (startY - y)
            );
            this.context_bak.arc(startX, startY, radii, 0, Math.PI * 2, false);
            this.context_bak.stroke();
          } else {
            this.context_bak.beginPath();
            this.context_bak.arc(x, y, 20, 0, Math.PI * 2, false);
            this.context_bak.stroke();
          }
          //涂鸦 未画得时候 出现一个小圆
        } else if (graphType == "handwriting") {
          if (canDraw) {
            // 鼠标点击移动产生的圆圈
            this.context_bak.beginPath();
            this.context_bak.strokeStyle = this.color;
            this.context_bak.fillStyle = this.color;

            //计算当前点和上一个点的距离
            var tmpX = x - startX;
            var tmpY = y - startY;
            var dist = Math.sqrt(Math.pow(tmpX, 2) + Math.pow(tmpY, 2));
            dist = Math.round(dist);

            //定义递增点
            var ix = tmpX / dist;
            var iy = tmpY / dist;

            //定义绘制点
            var currX = startX;
            var currY = startY;
            for (var i = 0; i < dist; i++) {
              this.context_bak.arc(
                currX,
                currY,
                this.size * 10,
                0,
                Math.PI * 2,
                false
              );

              currX += ix;
              currY += iy;
            }

            this.context_bak.fill();
            this.context_bak.stroke();
            this.context_bak.restore();

            //保存上一次的点
            startX = x;
            startY = y;
          } else {
            this.clearContext();
            this.context_bak.beginPath();
            this.context_bak.strokeStyle = this.color;
            this.context_bak.fillStyle = this.color;
            this.context_bak.arc(x, y, this.size * 10, 0, Math.PI * 2, false);
            this.context_bak.fill();
            this.context_bak.stroke();
          }
          //橡皮擦 不管有没有在画都出现小方块 按下鼠标 开始清空区域
        } else if (graphType == "rubber") {
          this.context_bak.lineWidth = 1;
          this.clearContext();
          this.context_bak.beginPath();
          this.context_bak.strokeStyle = "#000000";
          this.context_bak.moveTo(x - this.size * 10, y - this.size * 10);
          this.context_bak.lineTo(x + this.size * 10, y - this.size * 10);
          this.context_bak.lineTo(x + this.size * 10, y + this.size * 10);
          this.context_bak.lineTo(x - this.size * 10, y + this.size * 10);
          this.context_bak.lineTo(x - this.size * 10, y - this.size * 10);
          this.context_bak.stroke();
          if (canDraw) {
            this.context.clearRect(
              x - this.size * 10,
              y - this.size * 10,
              this.size * 20,
              this.size * 20
            );
          }
        }
      };

      //鼠标离开区域以外 除了涂鸦 都清空
      var mouseout = () => {
        if (graphType != "handwriting") {
          this.clearContext();
        }
      };

      $(this.canvas_bak).unbind();
      if (this.isMobile()) {
        $(this.canvas_bak).bind("touchstart", mousedown);
        $(this.canvas_bak).bind("touchmove", mousemove);
        $(this.canvas_bak).bind("touchend", mouseup);
        $(this.canvas_bak).bind("touchcancel", mouseout);
      } else {
        $(this.canvas_bak).bind("mousedown", mousedown);
        $(this.canvas_bak).bind("mousemove", mousemove);
        $(this.canvas_bak).bind("mouseup", mouseup);
        $(this.canvas_bak).bind("mouseout", mouseout);
      }
    }
  }
}
export default{bookMinxins}
