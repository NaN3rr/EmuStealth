
var debug = false;

var currentScene = 1;

window.onload = function(){
    //currentScene = 0;
    scene_switch(currentScene);
}

const canMax = {x:1200,y:700};

document.getElementById("mainCanvas").style.zIndex = "4"; 
document.getElementById("envCanvas").style.zIndex = "0"; 
document.getElementById("hudCanvas").style.zIndex = "1";

var cHud = document.getElementById("hudCanvas");
var cHudCtx = cHud.getContext('2d');

var cEnv = document.getElementById("envCanvas");
var cEnvCtx = cEnv.getContext("2d");


