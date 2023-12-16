//sceneCtrl.js

//scene 1



function game_over(){
    player.active = false;
    player.xMod = player.yMod = 0;
    var gameOverTimer = setTimeout(goto_game_over,3000);
    
    //pause for 5 seconds
    //change to game over page
}

function complete(){
    player.active = false;
    player.xMod = player.yMod = 0;
    messageBox.set(player.x,player.y-50,"MISSION COMPLETE!",4000);
    var completeTimer = setTimeout(goto_complete,3000);
}

function goto_complete(){
    window.location.href = "./complete.html";
}

function goto_game_over(){
    window.location.href = "./gameOver.html";
}

function scene_switch(scene){
    if(scene < 0){scene = 0;}

    if(debug){
        console.log("Scene:" + currentScene);
    }

    c.getContext('2d').clearRect(0,0,canMax.x,canMax.y);
    cEnvCtx.clearRect(0,0,canMax.x,canMax.y);

    switch(scene){
        case 0:
            imgBack.src = "img/prarie.png";
            player.un_draw();
            player.x = 0;//20 initial
            player.y = 100;//200
            player.targetX = 50;//300
            player.targetY = 150;//300

            envNpas[0].active = true;
            envNpas[1].active = true;
            envNpas[2].active = true;
            envNpas[3].active = false;
            envNpas[4].active = false;
            envNpas[5].active = false;
            envNpas[6].active = false;
            envNpas[7].active = false;

            item[0].active = false;

            emu[0].active = true;
            emu[0].x = 600;
            emu[0].y = 600;
            emu[0].looper = 0;
            emu[0].dir = 'right';

            emu[1].active = false;
            emu[1].un_draw();

            emu[2].active = false;
            emu[2].un_draw();

            exit.x = 1100;
            exit.y = 500;

            back.active = false;
            back.x = 0;
            back.y = 0;
        break;
        case 1:
            imgBack.src = "img/mud.png";
            player.un_draw();
            player.x = 0;
            player.y = 150;
            player.targetX = 0;
            player.targetY = 150;

            envNpas[0].active = true;
            envNpas[0].x = 600;
            envNpas[0].y = 100;
            envNpas[1].active = false;
            envNpas[2].active = true;
            envNpas[2].x = 700;
            envNpas[2].y = 50;
            envNpas[3].active = true;
            envNpas[4].active = true;
            envNpas[5].active = true;
            envNpas[6].active = true;
            envNpas[7].active = true;

            item[0].active = true;

            emu[0].active = false;
            emu[0].un_draw();

            emu[1].active = true;
            emu[1].x = 600;
            emu[1].y = 200;

            emu[2].active = true;
            emu[2].x = 1100;
            emu[2].y = 300

            exit.x = 970;
            exit.y = 200;

            back.active = false;
            back.x = 0;
            back.y = 0;
        break;
        case 2:
            imgBack.src = "img/interior.png";
            player.un_draw();
            player.x = 450;
            player.y = 100;
            player.targetX = 450;
            player.targetY = 100;

            envNpas[0].active = false;
            envNpas[1].active = false;
            envNpas[2].active = false;
            envNpas[3].active = false;
            envNpas[4].active = false;
            envNpas[5].active = false;
            envNpas[6].active = false;
            envNpas[7].active = false;
            envNpas[8].set(true,300,0,50,275);

            envNpas[9].active = true;
            envNpas[9].imgW = 300;
            envNpas[9].imgH = 50;
            envNpas[10].set(true,0,430,350,50);
            envNpas[11].set(true,0,650,1200,50);
            envNpas[12].set(true,0,0,50,800);
            envNpas[13].set(true,500,430,1000,50);
            envNpas[14].set(true,canMax.x - 50,0,50,canMax.y - 220);
            envNpas[15].set(true,500,0,650,50);
            envNpas[16].active = true;
            envNpas[17].active = false;
            envNpas[18].active = false;
            envNpas[19].active = false;
            envNpas[20].set(true,300,275,50,150);
            envNpas[21].active = false;
            envNpas[22].active = false;
            item[0].active = false;
            if(!player.eggs){item[1].active = true;}
            if(!player.blueKey){item[3].active = true;}
            item[2].active = false;
            item[4].active = false;
            item[5].active = false;
            item[6].active = true;
            item[7].active = false;

            emu[0].active = false;
            emu[0].un_draw();
            emu[1].active = false;
            emu[1].un_draw();
            emu[2].active = false;
            emu[2].un_draw;

            emu[3].active = true;
            emu[3].x = 50
            emu[3].y = 250;
            emu[4].active = true;
            emu[4].x = 1100;
            emu[4].y = 200;

            exit.active = true;
            exit.x = canMax.x - exit.imgW;
            exit.y = canMax.y - exit.imgH - 100;

            back.active = false;
            back.x = 0;
            back.y = 0;
        break;
        case 3:
            imgBack.src = "img/interior.png";
            player.un_draw();
            player.x = 120;
            player.y = 400;
            player.targetX = 1000;
            player.targetY = 400;

            envNpas[0].active = false;
            envNpas[1].active = false;
            envNpas[2].active = false;
            //barrels
            envNpas[3].set(true,75,200);
            envNpas[4].set(true,300,250);
            envNpas[5].set(true,450,250);
            envNpas[6].active = false;
            envNpas[7].active = false;
            //wall1
            envNpas[8].set(true,0,0,50,450);
            envNpas[9].set(true,0,0,canMax.x,50);
            envNpas[10].set(true,550,0,50,500);
            envNpas[11].set(true,0,canMax.y - 50,canMax.x);
            envNpas[12].set(true,canMax.x - 50,0,50,canMax.y);
            envNpas[13].set(true,0,canMax.y - 50,canMax.x,50);
            envNpas[14].set(true,800,400,350,50);
            envNpas[15].set(true,800,400,50,300);

            envNpas[16].active = false;
            envNpas[17].active = true;
            envNpas[18].active = true;
            envNpas[19].active = true;
            envNpas[20].set(true,550,500,50,150);
            envNpas[21].set(true,600,50);
            envNpas[22].set(true,1000,50);
            item[0].active = false;
            item[1].active = false;
            if(!player.cloakJacket){item[2].active = true;}
            item[3].active = false;
            item[4].active = true;
            if(!player.redKey){item[5].active = true;}
            item[6].active = false;
            item[7].active = true;

            emu[0].active = false;
            emu[0].un_draw();
            emu[1].active = false;
            emu[1].un_draw();
            emu[2].active = false;
            emu[2].un_draw;

            emu[3].active = false;
            emu[3].x = 50
            emu[3].y = 250;
            emu[4].active = false;
            emu[4].x = 1100;
            emu[4].y = 200;
            emu[5].active = true;

            exit.active = false;
            exit.x = 600;
            exit.y = canMax.y - exit.imgH;

            back.active = true;
            back.x = 0;
            back.y = 500;
        break;
    }
}