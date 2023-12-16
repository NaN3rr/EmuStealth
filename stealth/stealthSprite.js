


var imgSpriteStealth = new Image();
var imgSprite = new Image();
imgSprite.src = "img/J.png";
imgSpriteStealth.src = "img/Jstealth.png";

var twoSecTimer = setInterval(sprite_timer, 300);

function sprite_timer(){
	//console.log("in sprite Timer");
    player.draw();
}

var player = {
	active:true,
	x:20,
	y:200, 
	stealthSkill:50,

	dir:'down',
	
    targetX:300,
    targetY:300,

	xMod:0,
	yMod:0,

	//anim specific
	imgW:40,
	imgH:80,
	
	frame:0,
	//items
	blueKey:false,
	redKey:false,
	cloakJacket:false,
	
	//objectives
	eggs:false,
	computer:false,

	stealth:false,
	moveFactor:20,

    set_target:function(x,y){
		if(player.active){
        	this.targetX = x;
			this.targetY = y;
		}
		//console.log("Target set to: " +this.targetX +","+this.targetY);
    },
	
	move:function()
	{
		fov();
		if(this.targetX > this.x && Math.abs(this.targetX - this.x) > 30){
			this.xMod = this.moveFactor;
		}else if(this.targetX < this.x && Math.abs(this.targetX - this.x) > 30){
       		this.xMod =-this.moveFactor;
       	}else{
			this.xMod = 0;
		}
		
		if(this.targetY > this.y && Math.abs(this.targetY - this.y) > 30){
			this.yMod = this.moveFactor;
			this.dir = 'down';
       	}else if(this.targetY < this.y && Math.abs(this.targetY - this.y) > 30){
       		this.yMod =-this.moveFactor;
		}else{
			this.dir = 'up';
			this.yMod = 0;
		}

		if(this.xMod > 0 && this.yMod == 0){
			this.dir = 'right';
		}else if(this.xMod < 0 && this.yMod == 0){
			this.dir = 'left';
		}

		if(collision((this.x+this.xMod),(this.y +this.yMod),(this.imgW+this.xMod),(this.imgH + this.yMod))){
			//console.log("invalid movement reseting mods");
			this.xMod = 0;
			this.yMod = 0;
		}

		if(this.xMod == 0 && this.yMod == 0){
			this.stealth = true;
		}else{this.stealth = false;}
		

	},

	draw:function() { 
		this.move();

		//if(this.cloakJacket && !this.stealth){this.imgH = 40;}else{this.imgH = 80;}
		//console.log("in draw, mods:" + this.xMod + "," + this.yMod );
		if(this.stealth){
			//console.log("Shhhh... I'm in stealth mode");
		}
		c.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);
		if(this.stealth){
			c.getContext('2d').drawImage(imgSpriteStealth,this.x += this.xMod,this.y += this.yMod,this.imgW,this.imgH);
		}else if(!this.stealth){
			
			switch(this.dir){
				case 'left':
					if(this.frame == 0){
						if(this.cloakJacket){
							imgSprite.src = "img/JPantsLeft1.png";
						}else{imgSprite.src="img/JAnimLeft1.png";}
					}
					else{
						if(this.cloakJacket){
							imgSprite.src = "img/JPantsLeft2.png";
						}else{imgSprite.src="img/JAnimLeft2.png";}
					}
				break;
				case 'right':
					if(this.frame == 0){
						if(this.cloakJacket){
							imgSprite.src = "img/JPantsRight1.png";
						}else{imgSprite.src="img/JAnimRight1.png";}
					}
					else{
						if(this.cloakJacket){
							imgSprite.src = "img/JPantsRight2.png";
						}else{imgSprite.src="img/JAnimRight2.png";}
					}
				break;
				case 'up':
					if(this.frame == 0){
						if(this.cloakJacket){
							imgSprite.src = "img/JPantsBack1.png";
						}else{imgSprite.src="img/JAnimBack1.png";}
					}
					else{
						if(this.cloakJacket){
							imgSprite.src = "img/JPantsBack2.png";
						}else{imgSprite.src="img/JAnimBack2.png";}
					}
				break;
				case 'down':
					if(this.frame == 0){
						if(this.cloakJacket){
							imgSprite.src = "img/JPantsFront1.png";
						}else{imgSprite.src="img/JAnimFront1.png";}
					}
					else{
						if(this.cloakJacket){
							imgSprite.src = "img/JPantsFront2.png";
						}else{imgSprite.src="img/JAnimFront2.png";}
					}
				break;
			}
			c.getContext('2d').drawImage(imgSprite,this.x += this.xMod,this.y += this.yMod,this.imgW,80);
		}
		if(this.frame == 0){this.frame = 1}
		else{this.frame = 0}
	},

	un_draw:function(){
		c.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);
	}
};