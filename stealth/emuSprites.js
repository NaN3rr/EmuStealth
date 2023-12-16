//var cEmus = document.getElementById("mainCanvas");

//var imgSpriteArray = [];

//var imgSpriteStealth = new Image();
var imgSurvEmu = new Image();
imgSurvEmu.src = "img/survEmuLeft.png";
var imgLaserEmu = new Image();
imgLaserEmu.src = "img/laserEmuFront.png";
var imgCamera =  new Image();
imgCamera.src = 'img/cameraRight.png';
var imgCamera2 = new Image();
imgCamera2.src= 'img/cameraRight.png';
var imgDingo = new Image();
imgDingo.src = 'img/dingo.png';
//var imgSurvEmuRight = new Image();
//imgSurvEmuRight.src = "img/survEmuRight.png";

//imgSpriteStealth.src = "img/Jstealth.png";

var emuTimer = setInterval(emu_timer, 300);
var cameraTimer = setInterval(camera_timer,2000);

function camera_timer(){
    if(debug){
        console.log("camera timer");
        console.log("Scene:" + currentScene);
    }
    if(emu[3].active){emu[3].move();}
    if(emu[4].active){emu[4].move();}
}

function emu_timer(){
    var n=0;
    //console.log("in sprite Timer");
    for(n=0;n<emu.length;n++){
        if(emu[n].active){emu[n].draw();}
    }
}

//0 - surveilance emu
//1 - laser emu 1
//2 - laser emu 2
//3 - camera 1 clockwise
//4 - camer 2 counter clockwise

var emu =[ 
{
    id:'surveilance emu',
    active:true,
    sightDistance:1000,
    detect:80,
    x:600,
	y:600, 

    targetX:600,
    targetY:600,

	xMod:0,
	yMod:0,

	//anim specific
	imgW:80,
	imgH:80,
    
    dir:'right',
    frame:0,
    looper:0,

    set_target:function(x,y){
        this.targetX = x;
		this.targetY = y;
		console.log("Target set to: " +this.targetX +","+this.targetY);
    },
	
	move:function()
	{
        fov();
        //move left and right
        switch(this.dir){
            case 'left':
                this.xMod = -20;
            break;
            case 'right':
                this.xMod = 20;
            break;
            case 'up':

            break;
            case 'down':
            
            break;
        }

        this.looper++;

        if(this.dir == 'left' && this.looper >= 10){
            this.dir = 'right';
            this.looper = 0;
        }else if(this.dir == 'right' && this.looper >= 10){
            this.dir = 'left';
            this.looper = 0;
        }

        //console.log("dir:" + this.dir + " looper:" + this.looper);
        		
	},

	draw:function() { 
        this.move();
        if(this.active){
            switch(this.dir){ 
                case 'left':
                    imgSurvEmu.src = 'img/survEmuLeft.png';
                break;
                case 'right':
                    imgSurvEmu.src = 'img/survEmuRight.png';
                break;
            }
            c.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);
            c.getContext('2d').drawImage(imgSurvEmu,this.x += this.xMod,this.y += this.yMod,this.imgW,this.imgH);
        
            if(debug){
                c.getContext('2d').beginPath();
                c.getContext('2d').lineWidth = "3";
                c.getContext('2d').strokeStyle = "green";
                c.getContext('2d').rect(this.x, this.y, this.imgW, this.imgH);
                c.getContext('2d').stroke();
                //c.getContext('2d').font = "14px Arial";
                //c.getContext('2d').fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        }
    },

    un_draw:function(){
		c.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);
	}
},
    
{
    id:'laser emu',
    active:false,
    sightDistance:600,
    detect:60,
    x:1300,
    y:-400, 
        
    targetX:600,
    targetY:600,
    
    xMod:0,
    yMod:0,
    
    //anim specific
    imgW:50,
    imgH:100,
        
    dir:'down',
    frame:0,
    looper:0,
    
    set_target:function(x,y){
        this.targetX = x;
        this.targetY = y;
        console.log("Target set to: " +this.targetX +","+this.targetY);
    },
        
    move:function()
    {
        fov();
        //move left and right
        switch(this.dir){
            case 'left':
                this.xMod = -10;
            break;
            case 'right':
                this.xMod = 10;
            break;
            case 'up':
                this.yMod = -10;
            break;
            case 'down':
                this.yMod = 10;
            break;
    
               
        }
    
        this.looper++;
    
        if(this.dir == 'up' && this.looper >= 20){
            this.dir = 'down';
            this.looper = 0;
        }else if(this.dir == 'down' && this.looper >= 20){
            this.dir = 'up';
            this.looper = 0;
        }
    
        //console.log("dir:" + this.dir + " looper:" + this.looper);
                    
    },
    
    draw:function() { 
        if(this.active){
            this.move();
            switch(this.dir){ 
                case 'up':
                    imgLaserEmu.src = "img/laserEmuBack.png";
                break;
                case 'down':
                    imgLaserEmu.src = "img/laserEmuFront.png";
                break;
                case 'left':
                    imgSurvEmu.src = 'img/survEmuLeft.png';
                break;
                case 'right':
                    imgSurvEmu.src = 'img/survEmuRight.png';
                break;
            }
            c.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);
            c.getContext('2d').drawImage(imgLaserEmu,this.x += this.xMod,this.y += this.yMod,this.imgW,this.imgH);
            
            if(debug){
                c.getContext('2d').beginPath();
                c.getContext('2d').lineWidth = "3";
                c.getContext('2d').strokeStyle = "red";
                c.getContext('2d').rect(this.x, this.y, this.imgW, this.imgH);
                c.getContext('2d').stroke();
                //c.getContext('2d').font = "14px Arial";
                //c.getContext('2d').fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        }
    },

    un_draw:function(){
		c.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);
	}
},
{
    id:'laser emu2',
    active:false,
    sightDistance:600,
    detect:60,
    x:1300,
    y:-400, 
        
    targetX:600,
    targetY:600,
    
    xMod:0,
    yMod:0,
    
    //anim specific
    imgW:50,
    imgH:100,
        
    dir:'down',
    frame:0,
    looper:0,
    
    set_target:function(x,y){
        this.targetX = x;
        this.targetY = y;
        console.log("Target set to: " +this.targetX +","+this.targetY);
    },
        
    move:function()
    {
        fov();
        //move left and right
        switch(this.dir){
            case 'left':
                this.xMod = -10;
            break;
            case 'right':
                this.xMod = 10;
            break;
            case 'up':
                this.yMod = -10;
            break;
            case 'down':
                this.yMod = 10;
            break;      
        }
    
        this.looper++;
    
        if(this.dir == 'up' && this.looper >= 40){
            this.dir = 'down';
            this.looper = 0;
        }else if(this.dir == 'down' && this.looper >= 40){
            this.dir = 'up';
            this.looper = 0;
        }                    
    },
    
    draw:function() { 
        if(this.active){
            this.move();
            switch(this.dir){ 
                case 'up':
                    imgLaserEmu.src = "img/laserEmuBack.png";
                break;
                case 'down':
                    imgLaserEmu.src = "img/laserEmuFront.png";
                break;
                case 'left':
                    imgSurvEmu.src = 'img/survEmuLeft.png';
                break;
                case 'right':
                    imgSurvEmu.src = 'img/survEmuRight.png';
                break;
            }
            c.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);
            c.getContext('2d').drawImage(imgLaserEmu,this.x += this.xMod,this.y += this.yMod,this.imgW,this.imgH);
            
            if(debug){
                c.getContext('2d').beginPath();
                c.getContext('2d').lineWidth = "3";
                c.getContext('2d').strokeStyle = "red";
                c.getContext('2d').rect(this.x, this.y, this.imgW, this.imgH);
                c.getContext('2d').stroke();
                //c.getContext('2d').font = "14px Arial";
                //c.getContext('2d').fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        }
    },

    un_draw:function(){
		c.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);
	}
},
{
    //clockwise
    id:'camera',
    active:false,
    sightDistance:600,
    detect:70,
    x:900,
    y:100, 
        
    imgW:50,
    imgH:50,
        
    dir:'down',
        
    move:function()
    {
        fov();
        //move left and right
        //console.log("camera move called");
        switch(this.dir){
            case 'left':
                this.dir = 'up';
            break;
            case 'right':
                this.dir = 'down';
            break;
            case 'down':
                this.dir = 'left';
            break;
            case 'up':
                this.dir = 'right';
            break;
        }      
    },
    
    draw:function() { 
        if(this.active){
            switch(this.dir){ 
                case 'up':
                    imgCamera.src = "img/cameraUp.png";
                break;
                case 'down':
                    imgCamera.src = "img/cameraDown.png";
                break;
                case 'left':
                    imgCamera.src = 'img/cameraLeft.png';
                break;
                case 'right':
                    imgCamera.src = 'img/cameraRight.png';
                break;
            }
            c.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);
            c.getContext('2d').drawImage(imgCamera,this.x,this.y,this.imgW,this.imgH);
            
            if(debug){
                c.getContext('2d').beginPath();
                c.getContext('2d').lineWidth = "3";
                c.getContext('2d').strokeStyle = "yellow";
                c.getContext('2d').rect(this.x, this.y, this.imgW, this.imgH);
                c.getContext('2d').stroke();
                c.getContext('2d').font = "14px Arial";
                c.getContext('2d').fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        }
    },

    un_draw:function(){
        c.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);
    }
},
{
    //counter clockwise
    id:'camera2',
    active:false,  
    x:1000,
    y:300, 
        
    imgW:50,
    imgH:50,
        
    dir:'down',
        
    move:function()
    {
        fov();
        //move left and right
        //console.log("camera2 move called");
        switch(this.dir){
            case 'left':
                this.dir = 'down';
            break;
            case 'right':
                this.dir = 'up';
            break;
            case 'down':
                this.dir = 'right';
            break;
            case 'up':
                this.dir = 'left';
            break;
        }      
    },
    
    draw:function() { 
        if(this.active){
            switch(this.dir){ 
                case 'up':
                    imgCamera2.src = "img/cameraUp.png";
                break;
                case 'down':
                    imgCamera2.src = "img/cameraDown.png";
                break;
                case 'left':
                    imgCamera2.src = 'img/cameraLeft.png';
                break;
                case 'right':
                    imgCamera2.src = 'img/cameraRight.png';
                break;
            }
            c.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);
            c.getContext('2d').drawImage(imgCamera2,this.x,this.y,this.imgW,this.imgH);
            
            if(debug){
                c.getContext('2d').beginPath();
                c.getContext('2d').lineWidth = "3";
                c.getContext('2d').strokeStyle = "yellow";
                c.getContext('2d').rect(this.x, this.y, this.imgW, this.imgH);
                c.getContext('2d').stroke();
                c.getContext('2d').font = "14px Arial";
                c.getContext('2d').fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        }
    },

    un_draw:function(){
        c.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);
    }
},
{
    //counter clockwise
    id:'General Dingo',
    active:false,  
    x:1020,
    y:530, 
        
    imgW:100,
    imgH:100,
        
        
    move:function()
    {
    },
    
    draw:function() { 
        if(this.active){ 
            c.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);
            c.getContext('2d').drawImage(imgDingo,this.x,this.y,this.imgW,this.imgH);
            
            if(debug){
                c.getContext('2d').beginPath();
                c.getContext('2d').lineWidth = "3";
                c.getContext('2d').strokeStyle = "red";
                c.getContext('2d').rect(this.x, this.y, this.imgW, this.imgH);
                c.getContext('2d').stroke();
                c.getContext('2d').font = "14px Arial";
                c.getContext('2d').fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        }
    },

    un_draw:function(){
        c.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);
    }
}

]

