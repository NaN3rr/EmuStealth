//stupidMath.js

function circle_intercept(a,b,x,y,r){
    var distPoints = (a-x)* (a-x) + (b-y)*(b-y);
    r *=r;
    if(distPoints < r){
        return true; //inside circle
    }
    return false;
}

function line_intercept(a,b,c,d,p,q,r,s){
    var det,gm,lm;

    det = (c-a) * (s-q) - (r-p) * (d-b);
    if(det === 0){
        return false;
    }else{
        lm = ((s-q) * (r-a)+(p-r)*(s-b))/det;
        gm = ((b-d)*(r-a)+(c-a)*(s-b))/det;
        return(0<lm && lm <1)&&(0<gm && gm <1);
    }
}

function point_distance(x1,y1,x2,y2){
    var a = x1 - x2;
    var b = y1 - y2;
    var c = Math.floor(Math.sqrt(a*a + b*b)); 
    return c;
}


//rolls
var modifiers = {
    stealth:25
}

function roll(skill){
    var roll= Math.floor(Math.random() * skill) + 1;
    console.log("Roll:" + roll + " Max:" + skill);
    return roll;
}

function skill_roll(skill,type){
    switch(type){
        case 'stealth':
            if(roll(player.stealthSkill) - modifiers.stealth <= player.stealthSkill){
                console.log("successful stealth roll");
                return true;}
            else{
                console.log("failed stealth roll");
                return false;
            }
        break;
    }
    //return false for fail
    //return true success
}

function vs_roll(enemySk,playerSk,type){
    //return true for player succcess
    switch(type){
        case 'stealth':
            if((roll(playerSk) * 100)/playerSk < (roll(enemySk)*100) /enemySk ){
                console.log("emu won roll");
                return false;
            }else{
                console.log("Player won roll");
                return true;
            }
        break;
    }
}