//enviroment


const envRate = 300;
var envTimer = setInterval(env_timer, envRate);
var imgBush = new Image();
var imgRock = new Image();
var imgTree = new Image();
var imgBarrel = new Image();
var imgBack = new Image();
var imgDumpster = new Image();
var imgJolt = new Image();
var imgEggs = new Image();
var imgMissles = new Image();
var imgWall = new Image();
var imgCloakingJacket = new Image();
var imgGuardEmu = new Image();
var imgBlueKey = new Image();
var imgCbBox = new Image();
var imgToilet = new Image();
var imgDoor = new Image();
var imgBlueLock = new Image();
var imgRedKey = new Image();
var imgRedLock = new Image();
var imgUse = new Image();
var imgComputer = new Image();
var imgBed = new Image();

imgBack.src = 'img/prarie.png';
imgBush.src = 'img/bush.png';
imgRock.src = 'img/rock.png';
imgTree.src = 'img/pine.png';
imgBarrel.src = 'img/barrel.png';
imgDumpster.src = 'img/dumpster.png';
imgJolt.src = 'img/jolt.png';
imgMissles.src = 'img/missles.png';
imgWall.src = 'img/wall.png';
imgEggs.src = 'img/eggs.png';
imgCloakingJacket.src = 'img/cloakingJacket.png';
imgGuardEmu.src = 'img/emuGuard.png';
imgBlueKey.src = 'img/blueKey.png';
imgCbBox.src = 'img/cbBox.png';
imgToilet.src = 'img/toilet.png';
imgDoor.src = 'img/door.png';
imgBlueLock.src = 'img/blueLock.png';
imgRedKey.src = 'img/redKey.png';
imgRedLock.src = 'img/redLock.png';
imgUse.src = 'img/use.png';
imgComputer.src = 'img/computer.png';
imgBed.src = 'img/bed.png';

function env_timer(){
    var n=0;
    var i=0;
    cEnvCtx.drawImage(imgBack,0,0,canMax.x,canMax.y);

    for(n=0;n < envNpas.length;n++){
        if(envNpas[n].active){envNpas[n].draw();}
    }

    for(i=0;i < item.length;i++){
        if(item[i].active){item[i].draw();}
    }

    if(exit.active){exit.draw();}
    if(back.active){back.draw();}
}

//remeber to update fov & collision
/*ENV
0-bush
1-rock
2-tree
3-barrel
4-barrel2
5-barrel3
6-dumpster
7-missles
8-wall1
9-wall2
10-wall3
11-wall4
12-wall5
13-wall6
14-wall7
15-wall8
16-guard Emu
17-card board box
18 - card board box 2
19 - toilet
20 - door
21 - computer
22 - bed
*/

/*item
0-jolt
1-eggs
2--cloakingJacket
3-blue key
4-blue lock
5-red key
6-red lock
7-computer trigger
*/


var envNpas = [
    {
        id:'bush1',
        active:true,
        x:600,
        y:400,
        imgW:100,
        imgH:100,

        draw:function(){
            //cEnvCtx.clearRect(this.x,this.y,this.imgW,this.imgH);
            cEnvCtx.drawImage(imgBush,this.x,this.y,this.imgW,this.imgH);

            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "green";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        set:function(active,x,y){
            this.active = active;
            this.x = x;
            this.y = y;
        }
    },
    {
        id:'rock',
        active:true,
        x:900,
        y:300,
        imgW:100,
        imgH:100,
    
        draw:function(){
            cEnvCtx.drawImage(imgRock,this.x,this.y,this.imgW,this.imgH);

            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "grey";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        set:function(active,x,y){
            this.active = active;
            this.x = x;
            this.y = y;
        }
    },
    {
        id:'tree',
        active:true,
        x:200,
        y:200,
        imgW:100,
        imgH:200,
    
        draw:function(){
            cEnvCtx.drawImage(imgTree,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "green";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        set:function(active,x,y){
            this.active = active;
            this.x = x;
            this.y = y;
        }
    },
    {
        id:'barrel',
        active:false,
        x:1000,
        y:300,
        imgW:50,
        imgH:75,
    
        draw:function(){
            cEnvCtx.drawImage(imgBarrel,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "green";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        set:function(active,x,y){
            this.active = active;
            this.x = x;
            this.y = y;
        }
    },
    {
        id:'barrel2',
        active:false,
        x:600,
        y:500,
        imgW:50,
        imgH:75,
    
        draw:function(){
            cEnvCtx.drawImage(imgBarrel,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "green";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        set:function(active,x,y){
            this.active = active;
            this.x = x;
            this.y = y;
        }
    },
    {
        id:'barrel3',
        active:false,
        x:700,
        y:350,
        imgW:50,
        imgH:75,
    
        draw:function(){
            cEnvCtx.drawImage(imgBarrel,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "green";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        set:function(active,x,y){
            this.active = active;
            this.x = x;
            this.y = y;
        }
    },
    {
        id:'dumpster',
        active:false,
        x:150,
        y:500,
        imgW:200,
        imgH:200,
    
        draw:function(){
            cEnvCtx.drawImage(imgDumpster,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "green";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        set:function(active,x,y){
            this.active = active;
            this.x = x;
            this.y = y;
        }
    },
    {
        id:'missles',
        active:false,
        x:150,
        y:100,
        imgW:200,
        imgH:200,
    
        draw:function(){
            cEnvCtx.drawImage(imgMissles,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "green";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        set:function(active,x,y){
            this.active = active;
            this.x = x;
            this.y = y;
        }
    },
    {
        id:'wall1',
        active:false,
        x:300,
        y:0,
        imgW:50,
        imgH:270,
    
        draw:function(){
            cEnvCtx.drawImage(imgWall,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "grey";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        set:function(active,x,y,w,h){
            this.active = active;
            this.x = x;
            this.y = y;
            this.imgW = w;
            this.imgH = h;
        }
    },
    {
        id:'wall2',
        active:false,
        x:0,
        y:0,
        imgW:300,
        imgH:50,
    
        draw:function(){
            cEnvCtx.drawImage(imgWall,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "grey";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        set:function(active,x,y,w,h){
            this.active = active;
            this.x = x;
            this.y = y;
            this.imgW = w;
            this.imgH = h;
        }
    },
    {
        id:'wall3',
        active:false,
        x:0,
        y:430,
        imgW:350,
        imgH:50,
    
        draw:function(){
            cEnvCtx.drawImage(imgWall,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "grey";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        set:function(active,x,y,w,h){
            this.active = active;
            this.x = x;
            this.y = y;
            this.imgW = w;
            this.imgH = h;
        }
    },
    {
        id:'wall4',
        active:false,
        x:0,
        y:600,
        imgW:1200,
        imgH:50,
    
        draw:function(){
            cEnvCtx.drawImage(imgWall,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "grey";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        set:function(active,x,y,w,h){
            this.active = active;
            this.x = x;
            this.y = y;
            this.imgW = w;
            this.imgH = h;
        }
    },
    {
        id:'wall5',
        active:false,
        x:0,
        y:480,
        imgW:50,
        imgH:270,
    
        draw:function(){
            cEnvCtx.drawImage(imgWall,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "grey";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        set:function(active,x,y,w,h){
            this.active = active;
            this.x = x;
            this.y = y;
            this.imgW = w;
            this.imgH = h;
        }
    },
    {
        id:'wall6',
        active:false,
        x:800,
        y:400,
        imgW:50,
        imgH:250,
    
        draw:function(){
            cEnvCtx.drawImage(imgWall,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "grey";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        set:function(active,x,y,w,h){
            this.active = active;
            this.x = x;
            this.y = y;
            this.imgW = w;
            this.imgH = h;
        }
    },
    {
        id:'wall7',
        active:false,
        x:800,
        y:400,
        imgW:350,
        imgH:50,
    
        draw:function(){
            cEnvCtx.drawImage(imgWall,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "grey";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        set:function(active,x,y,w,h){
            this.active = active;
            this.x = x;
            this.y = y;
            this.imgW = w;
            this.imgH = h;
        }
    },
    {
        id:'wall8',
        active:false,
        x:600,
        y:430,
        imgW:600,
        imgH:50,
    
        draw:function(){
            cEnvCtx.drawImage(imgWall,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "grey";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        set:function(active,x,y,w,h){
            this.active = active;
            this.x = x;
            this.y = y;
            this.imgW = w;
            this.imgH = h;
        }
    },
    {
        id:'Guard Emu',
        active:false,
        x:50,
        y:430,
        imgW:200,
        imgH:200,
    
        draw:function(){
            cEnvCtx.drawImage(imgGuardEmu,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "red";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        set:function(active,x,y,w,h){
            this.active = active;
            this.x = x;
            this.y = y;
        }
    },
    {
        id:'Cardboard Box',
        active:false,
        x:450,
        y:100,
        imgW:75,
        imgH:75,
    
        draw:function(){
            cEnvCtx.drawImage(imgCbBox,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "pink";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        set:function(active,x,y){
            this.active = active;
            this.x = x;
            this.y = y;
        }
    },
    {
        id:'Cardboard Box 2',
        active:false,
        x:50,
        y:100,
        imgW:75,
        imgH:75,
    
        draw:function(){
            cEnvCtx.drawImage(imgCbBox,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "pink";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        set:function(active,x,y){
            this.active = active;
            this.x = x;
            this.y = y;
        }
    },
    {
        id:'Toilet',
        active:false,
        x:1050,
        y:550,
        imgW:100,
        imgH:100,
    
        draw:function(){
            cEnvCtx.drawImage(imgToilet,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "yellow";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        set:function(active,x,y){
            this.active = active;
            this.x = x;
            this.y = y;
        }
    },
    {
        id:'Door',
        active:false,
        x:550,
        y:500,
        imgW:50,
        imgH:150,
    
        draw:function(){
            cEnvCtx.drawImage(imgDoor,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "yellow";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        set:function(active,x,y,w,h){
            this.active = active;
            this.x = x;
            this.y = y;
            this.imgW = w;
            this.imgH = h;
        }
    },
    {
        id:'computer',
        active:false,
        x:550,
        y:500,
        imgW:200,
        imgH:100,
    
        draw:function(){
            cEnvCtx.drawImage(imgComputer,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "blue";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        set:function(active,x,y){
            this.active = active;
            this.x = x;
            this.y = y;
        }
    },
    {
        id:'bed',
        active:false,
        x:900,
        y:500,
        imgW:150,
        imgH:200,
    
        draw:function(){
            cEnvCtx.drawImage(imgBed,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "pink";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        set:function(active,x,y){
            this.active = active;
            this.x = x;
            this.y = y;
        }
    }
]

var item = [
    {
        id:'jolt',
        active:false,
        x:50,
        y:600,
        imgW:25,
        imgH:50,
    
        draw:function(){
            cEnvCtx.drawImage(imgJolt,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "green";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            } 
        },
        action:function(){
            player.moveFactor = 40;
            this.active = false;
            messageBox.set(this.x,this.y-50,"You drink the Jolt, you speed is increased",4000);
        }
    },
    {
        id:'egg',
        active:false,
        x:200,
        y:50,
        imgW:100,
        imgH:100,
    
        draw:function(){
            cEnvCtx.drawImage(imgEggs,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "green";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        action:function(){
            this.active = false;
            player.eggs = true;
            messageBox.set(this.x,this.y-50,"You take an emu egg specimen.",4000);
            if(player.computer == true && player.eggs == true){
                complete();
            }
        }
    },
    {
        id:'Cloaking Jacket',
        active:false,
        x:200,
        y:50,
        imgW:50,
        imgH:50,
    
        draw:function(){
            cEnvCtx.drawImage(imgCloakingJacket,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "blue";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        action:function(){
            this.active = false;
            player.cloakJacket = true;
            messageBox.set(this.x,this.y-50,"You found the Cloaking Jacket your torso is now invisible",5000);
        }
    },
    {
        id:'Blue key',
        active:false,
        x:250,
        y:550,
        imgW:50,
        imgH:50,
    
        draw:function(){
            cEnvCtx.drawImage(imgBlueKey,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "blue";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        action:function(){
            if(player.cloakJacket){
                this.active = false;
                player.blueKey = true;
                messageBox.set(this.x,this.y-50,"You put the blue key in your inventory.",4000);
            }else if(!player.cloakJacket){
                game_over();
            }  
        }
    },
    {
        id:'Blue lock',
        active:false,
        x:500,
        y:500,
        imgW:50,
        imgH:150,
    
        draw:function(){
            cEnvCtx.drawImage(imgBlueLock,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "blue";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        action:function(){
            if(player.blueKey){
                this.active = false;
                envNpas[20].active = false;
            }else if(!player.blueKey){
                messageBox.set(this.x,this.y-50,"The door is locked",4000);
            }   
        }
    },
    {
        id:'Red key',
        active:false,
        x:1100,
        y:350,
        imgW:50,
        imgH:50,
    
        draw:function(){
            cEnvCtx.drawImage(imgRedKey,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "blue";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        action:function(){
            this.active = false;
            player.redKey = true;
            messageBox.set(this.x,this.y-50,"You found the Red Key!",4000);   
        }
    },
    {
        id:'Red lock',
        active:false,
        x:350,
        y:275,
        imgW:50,
        imgH:150,
    
        draw:function(){
            cEnvCtx.drawImage(imgRedLock,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "blue";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        action:function(){
            if(player.redKey){
                this.active = false;
                envNpas[20].active = false;
            }else if(!player.redKey){
                messageBox.set(this.x,this.y-50,"The door is locked",4000);
            }   
        }
    },
    {
        id:'Computer Trigger',
        active:false,
        x:600,
        y:150,
        imgW:200,
        imgH:50,
    
        draw:function(){
            cEnvCtx.drawImage(imgUse,this.x,this.y,this.imgW,this.imgH);
            if(debug){
                cEnvCtx.beginPath();
                cEnvCtx.lineWidth = "6";
                cEnvCtx.strokeStyle = "blue";
                cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
                cEnvCtx.stroke();
    
                cEnvCtx.font = "14px Arial";
                cEnvCtx.fillText("I'm a " + this.id, this.x + (this.imgW /2), this.y + (this.imgH/2));
            }
        },
        action:function(){
            player.computer = true;
            messageBox.set(this.x,this.y-50,"You download General Dingo's battle plans, You also find some rather embarassing personal e-mails.",4000);
            if(player.computer == true && player.eggs == true){
                complete();
            }
        }
    }
]

var exit = {
    id:'exit',
    active:true,
    x:1100,
    y:500,
    imgW:100,
    imgH:100,

    draw:function(){
        //cEnvCtx.clearRect(this.x,this.y,this.imgW,this.imgW);

        cEnvCtx.beginPath();
        cEnvCtx.lineWidth = "6";
        cEnvCtx.strokeStyle = "blue";
        cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
        cEnvCtx.stroke();

        cEnvCtx.font = "14px Arial";
        cEnvCtx.fillText("Exit", this.x + (this.imgW /2), this.y + (this.imgH/2));
    }
}

var back = {
    id:'back',
    active:false,
    x:1100,
    y:0,
    imgW:100,
    imgH:100,
    
    draw:function(){
        cEnvCtx.clearRect(this.x,this.y,this.imgW,this.imgW);
    
        cEnvCtx.beginPath();
        cEnvCtx.lineWidth = "6";
        cEnvCtx.strokeStyle = "blue";
        cEnvCtx.rect(this.x, this.y, this.imgW, this.imgH);
        cEnvCtx.stroke();
    
        cEnvCtx.font = "14px Arial";
        cEnvCtx.fillText("Exit", this.x + (this.imgW /2), this.y + (this.imgH/2));
    }
}

