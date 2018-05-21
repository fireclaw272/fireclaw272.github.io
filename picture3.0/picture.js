//var URL = prompt("Please enter the URL of the image yu want to create (better with high quality photo)")

window.onload =function (){
    
    var colors = [];
    var W;
    var H;
    var image = new Image();
    var WH;
    var radius =3;
    var imageData;
    var start;
    var maxPixel;
    
    
    image.onload = function(){
        WH = image.width/image.height
        console.log(WH)
        
        initialize();
        drawCanvas(ctxOriginal);
        drawCanvas(ctx);
        drawBackground();
        ctxOriginal.drawImage(image,0,0,W,H);
        start = setInterval(createRow, 1)
        
        
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
        maxPixel = W * H;
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

    //var currentX=1;
    var currentY=0;
    
    
    //uncomment below code to draw picture pixel by pixel
    /*function createPixels(){
        imageData = ctxOriginal.getImageData(currentX-1,currentY-1,1,1);
        drawPixel(currentX-1, currentY-1, imageData.data[0], imageData.data[1], imageData.data[2], imageData.data[3])
        if(currentX == W && currentY == H){//if it is at the bottom right pixel
           clearInterval(start);
            console.log("stopped");
        }
        else if( W==currentX ){// if it as at the right of the screen
            currentY++;
            currentX=1;
        }
        else{
            currentX++;
        }
    }*/
    
    
    function createRow(){
        for(var i= 0; i<W; i++){
            
            colors.push({
                x:i+1,
                y:currentY,
            })
            
            imageData = ctxOriginal.getImageData(i,currentY-1,1,1);
            
            colors[i] = {
                x:colors[i].x,
                y:currentY,
                r:imageData.data[0],
                g:imageData.data[1],
                b:imageData.data[2],
                a:imageData.data[3],
            }
            drawPixel(colors[i].x, currentY, colors[i].r, colors[i].g, colors[i].b, colors[i].a)
        }
        if(currentY >= H){
           clearInterval(start);
            console.log("stopped");
           }
        else{
            currentY++
        }
        
    }
    
    
    
    
    function drawPixel(x,y,r,g,b,a){
        var RGBA = "rgba("+r+","+g+","+b+","+a+")";
        ctx.fillStyle = RGBA;
        ctx.fillRect(x,y,1,1);
    }
    
    /*
    var limiter = 0;
    
    function drawColors (){
        for(var i=0; i<50; i++){
            
            colors.push({
                x:Math.floor(Math.random() * W),
                y:Math.floor(Math.random()*H),  
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
