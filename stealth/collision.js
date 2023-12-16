//collision

function collision(x,y,w,h){
    var i=0;
    var prox = 10; //proximity factor 

    //Non passable object loop
    for(i=0;i<envNpas.length;i++){
        if(envNpas[i].active){
            if(x >= envNpas[i].x && x <= (envNpas[i].x+envNpas[i].imgW) && y >= envNpas[i].y && y <= (envNpas[i].y + envNpas[i].imgH)
            || (x+w) >= envNpas[i].x && (x+w) <= (envNpas[i].x+envNpas[i].imgW) && (y+h) >= envNpas[i].y && (y+h) <= (envNpas[i].y + envNpas[i].imgH)
            ){
                messageBox.set(envNpas[i].x,envNpas[i].y-50,"Sorry you can't walk through walls, maybe in the sequel.",4000);
                return true;
            }
        }
    }

    // Item/trigger loop
    for(i=0;i<item.length;i++){
        if(x >= item[i].x - prox && x <= (item[i].x+item[i].imgW + prox) && y >= item[i].y - prox && y <= (item[i].y + item[i].imgH + prox)
        || (x+w) >= item[i].x - prox && (x+w) <= (item[i].x+item[i].imgW + prox) && (y+h) >= item[i].y - prox && (y+h) <= (item[i].y + item[i].imgH + prox)
        ){  
            if(item[i].active == true){
                item[i].action();
            }
        }
    }
    
    //exit
    if(exit.active){
        if(x >= exit.x && x <= (exit.x+exit.imgW) && y >= exit.y && y <= (exit.y + exit.imgH)
        || (x+w) >= exit.x && (x+w) <= (exit.x+exit.imgW) && (y+h) >= exit.y && (y+h) <= (exit.y + exit.imgH)
        ){
            for(n=0;n < emu.length;n++){emu[n].active = false;}

            currentScene++;
            scene_switch(currentScene);
        }
    }

    //back
    if(back.active){
        if(x >= back.x && x <= (back.x+back.imgW) && y >= back.y && y <= (back.y + back.imgH)
        || (x+w) >= back.x && (x+w) <= (back.x+back.imgW) && (y+h) >= back.y && (y+h) <= (back.y + back.imgH)
        ){
            for(n=0;n < emu.length;n++){emu[n].active = false;}

            currentScene--
            scene_switch(currentScene);
        }
    }   
    return false;
}