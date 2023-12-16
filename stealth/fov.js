//field of vision 
//line of sight

//player stealth skill
//emu detect skill
//distance 
var apTimer = setInterval(ap_timer,1000);

function ap_timer(){
    fov();
}

function fov(){
    var n = 0;
    var i = 0;
    //console.log("fov() called");
    for(n=0;n < emu.length;n++){
        if(emu[n].active){
            if(emu[n].dir == 'left' && player.x < emu[n].x
                    || emu[n].dir == 'right' && player.x > emu[n].x + emu[i].imgW
                    ||emu[n].dir == 'up' && player.y < emu[n].y
                    ||emu[n].dir == 'down' && player.y > emu[n].y + emu[i].imgH){
                
                if(!player.stealth){
                    los(n,'moving');
                }else if(player.stealth){
                    los(n,'hiding');
                    //c.getContext('2d').clearRect(0,0,100,100);
                    //c.getContext('2d').font = "15px Arial";
                    //c.getContext('2d').fillText("Stealth", 10, 10);
                }
            }
        }
    }
}

function los(emuRef,type){
    var n=0;
    var i=0;

    var blocked = false;
    //line_intercept(src X,src Y, tar X, tar Y, testx1,testy1,testx2,texty2);
    //make an x
    //for(n=0;n < emu.length;n++){
        
    if(emu[emuRef].active){
        for(i=0;i < envNpas.length;i++){
            if(envNpas[i].active){
               //console.log(envNpas[i].id +":"+envNpas[i].active+":"+envNpas[i].x+":"+envNpas[i].y);
                if(line_intercept(emu[emuRef].x,emu[emuRef].y,player.x,player.y,envNpas[i].x,envNpas[i].y,(envNpas[i].x+envNpas[i].imgW),(envNpas[i].y + envNpas[i].imgH))
                    ||line_intercept(emu[emuRef].x,emu[emuRef].y,player.x,player.y,envNpas[i].x,(envNpas[i].y+envNpas[i].imgH),(envNpas[i].x+envNpas[i].imgW),envNpas[i].y)
                ){
                    //c.getContext('2d').clearRect(0,0,100,100);
                    //c.getContext('2d').font = "15px Arial";
                    //c.getContext('2d').fillText("blocked by "+ envNpas[i].id, 10, 10);
                    blocked = true;
                }
            }  
        }
    }
    
    if(!blocked){
        //console.log("not blocked");
        //check sight distance
        if(point_distance(player.x,player.y,emu[emuRef].x,emu[emuRef].y) < emu[emuRef].sightDistance){
            if(type == 'moving'){
                //player rolls against emu
                if(!vs_roll(emu[emuRef].detect,player.stealthSkill,'stealth')){
                    c.getContext('2d').beginPath();
                    c.getContext('2d').lineWidth = "5";
                    c.getContext('2d').strokeStyle = "red";
                    c.getContext('2d').moveTo(emu[emuRef].x , emu[emuRef].y);
                    c.getContext('2d').lineTo(player.x, player.y);
                    c.getContext('2d').stroke();
                    messageBox.set(emu[emuRef].x,emu[emuRef].y-50,"I SEE YOU!!!",4000);
                    game_over();
                }else{
                    console.log("successful Stealth roll!");
                }
            }else if(type == 'hiding'){
                //console.log('hiding');
                //roll against player s
                if(skill_roll(player.stealthSkill,'stealth')){
                    console.log("successful hide roll");
                }else{
                    c.getContext('2d').beginPath();
                    c.getContext('2d').lineWidth = "5";
                    c.getContext('2d').strokeStyle = "red";
                    c.getContext('2d').moveTo(emu[n].x , emu[n].y);
                    c.getContext('2d').lineTo(player.x, player.y);
                    c.getContext('2d').stroke();
                    messageBox.set(emu[emuRef].x,emu[emuRef].y-50,"I SEE YOU!!!",4000);
                    game_over();
                }
            }
        }else if(point_distance(player.x,player.y,emu[emuRef].x,emu[emuRef].y) > emu[emuRef].sightDistance){
            console.log(point_distance(player.x,player.y,emu[emuRef].x,emu[emuRef].y) + ":" + emu[emuRef].sightDistance);
            console.log("Out of sight distance");
        }
    }
} 

