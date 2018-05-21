//var URL = prompt("Please enter the URL of the image yu want to create (better with high quality photo)")

window.onload =function (){
    
    var colors = [];
    var W;
    var H;
    var image = new Image();
    var WH;
    var radius =1;
    var lineWidth =1;
    var imageData;
    var start;
    var numBalls =500;
    
    image.onload = function(){
        WH = image.width/image.height
        console.log(WH)
        
        initialize();
        drawCanvas(ctxOriginal);
        drawCanvas(ctx);
        drawBackground();
        ctxOriginal.drawImage(image,0,0,W,H);
        //start = setInterval(drawColors, 1)
        createBalls();
        start = setInterval(moveBalls,50);
    }
    
    image.src="image.png"
    
    
    
    //draws original image
    
    var canvasOriginal = document.getElementById("canvasOriginal");
    var ctxOriginal = canvasOriginal.getContext('2d');
    
    // draws second canvas
    var canvas = document.getElementById("canvas")
    var ctx = canvas.getContext('2d');
    

    
    
    function initialize (){ // tells user to choose size of image
        W = prompt("what do you want the width of the picture to be?")
        console.log(W);
        H = W/WH;
        console.log(H)
    }
    
    function drawCanvas(context){
        context.canvas.width = W;
        context.canvas.height = H;
    }
    
    function drawBackground(){
        ctx.fillStyle = "rgba(0,0,0,255)"
        ctx.fillRect(0,0,W,H);
    }
    
    function circle(x,y,radius,r,g,b,a){
        var RGBA = "rgba("+r+","+g+","+b+","+a+")";
        ctx.fillStyle = RGBA;
        ctx.beginPath();
        ctx.arc(x,y,radius,0,Math.PI*2,true);
        ctx.fill();
    }

    
    
    
    function createBalls(){
        for(var i=0; i<numBalls; i++){
            colors.push({
                x:Math.floor(Math.random() * W) ,
                y:Math.floor(Math.random()*H ), 
                vx: (Math.floor(Math.random() * 2) +1) * (Math.random() < 0.5 ? -1 : 1),
                vy: (Math.floor(Math.random() * 2) +1) *  (Math.random() < 0.5 ? -1 : 1),
                nx:100,
                ny:100,
            })
            
        }
        
    }
    
    var limiter = 0;
    
    function moveBalls(){
        for(var i=0; i<numBalls; i++){
            colors[i].nx = colors[i].vx + colors[i].x;
            colors[i].ny = colors[i].vy + colors[i].y;
            imageData = ctxOriginal.getImageData(colors[i].x,colors[i].y,1,1);
            //circle(colors[i].nx, colors[i].ny, radius, imageData.data[0],
            //imageData.data[1], imageData.data[2], imageData.data[3]);
            drawLine(colors[i].x, colors[i].y, colors[i].nx, colors[i].ny, imageData.data[0], imageData.data[1], imageData.data[2], imageData.data[3])
            
            if(colors[i].nx > W || colors[i].nx < 0){
                colors[i].vx *= -1;
            }
            else if (colors[i].ny > H || colors[i].ny <0){
                colors[i].vy *=-1;   
            }
            
            colors[i].x = colors[i].nx;
            colors[i].y = colors[i].ny;
            
        }
        if(limiter >= 60000){
           clearInterval(start);
            console.log("stopped");
        }
        else{
           limiter++
           }
        
    }
    
    function drawLine(x,y,nx,ny,r,g,b,a){
        var RGBA = "rgba("+r+","+g+","+b+","+a+")";
        ctx.strokeStyle = RGBA;
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineWidth = lineWidth;
        ctx.lineTo(nx,ny);
        ctx.stroke();
    }
    
    /*
    var limiter = 0;
    
    function drawColors (){
        for(var i=0; i<50; i++){
            
            colors.push({
                x:Math.random() * W,
                y:Math.random()*H,  
            })   
            imageData = ctxOriginal.getImageData(colors[i].x,colors[i].y,1,1);
            colors[i]={
                x:colors[i].x,
                y:colors[i].y,
                r:imageData.data[0],
                g:imageData.data[1],
                b:imageData.data[2],
                a:imageData.data[3],
            }
            //circle(colors[i].x, colors[i].y, radius, imageData.data[0],imageData.data[1],imageData.data[2],imageData.data[3])
            circle(colors[i].x, colors[i].y, radius, colors[i].r, colors[i].g, colors[i].b, colors[i].a)
        }
        colors.splice(0,colors.length);
        console.log(limiter)
        if(limiter>=5000 && limiter < 12000){
            radius = 1;
            limiter++;
           }
        else if(limiter >= 60000){
            clearInterval(start)
            console.log("stopped")
        }
        else{
            limiter ++
        }
    }*/
    
}
