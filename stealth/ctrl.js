//ctrl.js
var toggle=false;
var c = document.getElementById("mainCanvas");

c.addEventListener('mousedown',function (e)  {

	const rect = c.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    
    //console.log("mouse down");
    toggle = true;
    touch_handler(x,y);
    console.log(x +":"+ y);
},false);

c.addEventListener('mouseup',function (e)  {
	const rect = c.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;

    toggle = false;
    player.xMod = 0;
    player.yMod = 0;
    player.targetX = player.x;
    player.targetY = player.y;
},false);

c.addEventListener('mousemove',function (e)  {
	const rect = c.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;

    //console.log("mouse move");
    if(toggle){
        touch_handler(x,y);
    }
},false);

c.addEventListener('ontouchstart',function (e)  { 
    e.preventDefault();
	const rect = c.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    //console.log("touchstart called");
    touch_handler(x,y);
	toggle = true;
},false);

c.addEventListener('ontouchend',function (e)  { 
    e.preventDefault();
	const rect = c.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
	toggle = false;
},false);

c.addEventListener('ontouchmove',function (e){
    e.preventDefault();
    const rect = c.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    //console.log("x:"  + x + ", y:" + y);
    if(toggle){
        touch_handler(x,y);
    }
},false);

function touch_handler(x,y){
    //console.log("toggle in handler =" + toggle)
    if(toggle){
        player.set_target(x,y);
    }
}

//key board
document.onkeydown = checkKey;

function checkKey(e) {
	e = e || window.event;
    
    console.log("keycode:" + e.keyCode);
    switch(e.keyCode){
        case 38: // up arrow
		    player.set_target(player.x,(player.y - 40));
        break;
        case 40: // down arrow
		    player.set_target(player.x,(player.y + 40));
        break;
        case 37: // left arrow
	        player.set_target((player.x - 40),player.y);
        break;
        case 39: // right arrow
            player.set_target((player.x + 40),player.y);
        break;
        case 17: // ctrl
            debug = !debug;
        break;
    }

}
