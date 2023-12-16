


var messageBox = {
    x:0,
    y:0,
    w:400,
    h:50,
    outString:'',
    duration:0,
    set:function(inX,inY,inString,inTime){
        this.x = inX;
        this.y = inY; 
        this.outString = inString;
        this.duration = inTime;
        this.draw();
    },
    draw:function(){
        cHudCtx.globalAlpha = 0.5;
        cHudCtx.fillStyle = "black";
        cHudCtx.fillRect(this.x,this.y,this.w,this.h);
        cHudCtx.globalAlpha = 1;
        cHudCtx.fillStyle = "green";
        cHudCtx.font = "14px Arial";
        cHudCtx.fillText(this.outString,this.x, this.y + 20);
        
        var messageTimer = setTimeout(this.unDraw,this.duration);
    },
    unDraw:function(){
        //console.log("in undraw function");
        cHudCtx.clearRect(0,0,canMax.x,canMax.y);
    }
}