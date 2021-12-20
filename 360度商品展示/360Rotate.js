
class RotaCanvas{
    constructor(el,width,height,srcArr){
        // canvas element
        this.el = el;
        // canvas ctx
        this.ctx = el.getContext('2d');
        //canvas width
        this.width = width;
        //canvas height
        this.height = height;
        //360度拍摄的图片src
        this.images = [];
        //图片下标
        this.frame = 0;
        //鼠标操作开始
        this.started = false;
        //鼠标操作开始的水平坐标
        this.startedX = -1;
        //是否允许自动播放
        this.play = false;
        //初始化
        this.init(srcArr);

    }

    /**
     * 初始化
     * @param array srcArr 
     */
    init(srcArr){
        // 设置canvas 宽高
        this.el.width = this.width;
        this.el.height = this.height;
        //加载图片
        this.images =  this.loadImages(srcArr);
        //显示第一张图片，必须等图片加载完再绘制
        this.images[0].onload = ()=>{
            //绘制图片，显示
            this.redraw(this.images[0]);
        }
        //绑定鼠标事件
        this.el.addEventListener("mousedown",(e)=>{
            RotaCanvas.doMouseDown(e,this);
        }, false);

        this.el.addEventListener("mousemove",(e)=>{
            RotaCanvas.doMouseMove(e,this);
        }, false);

        this.el.addEventListener("mouseup",(e)=>{
            RotaCanvas.doMouseUp(e,this);
        }, false);
        this.el.addEventListener("mouseleave",(e)=>{
            RotaCanvas.doMmouseleave(e,this);
        }, false);
    }
    /**
     * 批量创建img，加载图片
     * @param array srcArr 
     * @returns array
     */
    loadImages(srcArr){
        let arr = [];
        if(Array.isArray(srcArr)&&srcArr.length>0){
            srcArr.forEach(src => {
                if (typeof(src) === 'string') {
                    let img = new Image();
                    img.src =src;
                    arr.push(img);
                }
            });
        }
        return arr;
    }

    /**
     * 绘图
     * @param {*} imgObj 
     */
    redraw(imgObj)
	{
        this.ctx.clearRect(0, 0, this.width, this.height)
        this.ctx.drawImage(imgObj, 0, 0, this.width, this.height);
	}

    /**
     * 计算鼠标移动坐标
     * @param {*} x 
     * @param {*} y 
     * @returns 
     */
    getPointOnCanvas( x, y) {
		let bbox = this.el.getBoundingClientRect();
		return {
            x: x - bbox.left * (this.width  / bbox.width),
			y: y - bbox.top  * (this.height / bbox.height)
		};
	}

  
    /**
     * 自动旋转播放
     */
    autoPlay(interval=100){
        let self = this
        if(self.play){
            let imgObj = this.images[self.frame];
            self.frame++;
            self.redraw(imgObj);
            if(self.frame > self.images.length - 1){
                self.frame = 0;
            }
            setTimeout(() => {
                self.autoPlay();
            },interval);
        }
    }

    /**
     * 开始播放
     * @param {*} interval 
     */
    doPlay(interval=100){
        this.play = true;
        this.autoPlay(interval);
    }
    /**
     * 停止播放
     */
    stopPlay(){
        this.play = false;
    }

    /************鼠标操作***************** */
    static doMouseDown(event,canvas){
        if(canvas instanceof RotaCanvas){
            let x = event.pageX
            let y = event.pageY
            let loc = canvas.getPointOnCanvas(x,y);
            canvas.started = true;
            canvas.startedX = loc.x
        }
    }

    static doMouseMove(event,canvas){
       
        if(canvas instanceof RotaCanvas &&  canvas.started){
            let x = event.pageX
            let y = event.pageY
            let loc = canvas.getPointOnCanvas(x,y);
			let count = Math.floor(Math.abs((canvas.startedX - loc.x)/30));
			let frameIndex = Math.floor((canvas.startedX - loc.x)/30);
            while(count > 0)
			{				
				count--;	
				if(frameIndex > 0)
				{
					frameIndex--;
					canvas.frame++;
				} else if(frameIndex < 0)
				{
					frameIndex++;
					canvas.frame--;
				}
				else if(frameIndex == 0)
				{
					break;
				}
								
				if(canvas.frame >= canvas.images.length-1)
				{
					canvas.frame = 0;
				}
				if(canvas.frame <= 0)
				{
					canvas.frame = canvas.images.length-1;
				}
                let imgObj = canvas.images[canvas.frame];
				canvas.redraw(imgObj);
			}
        }
    }

    static doMouseUp(event,canvas){
        if(canvas instanceof RotaCanvas && canvas.started){
            canvas.startedX = -1;
            canvas.started = false;
        }
    }

    static doMmouseleave(event,canvas){
        if(canvas instanceof RotaCanvas && canvas.started){
            canvas.startedX = -1;
            canvas.started = false;
        }
    }
}






