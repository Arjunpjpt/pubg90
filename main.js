var AM = new AssetManager();

//requestAnimationFrame(draw);

var unMove = [];
var player = [];

// AM.queueDownload("./img/RobotUnicorn.png");
// AM.queueDownload("./img/guy.jpg");
// AM.queueDownload("./img/mushroomdude.png");
// AM.queueDownload("./img/runningcat.png");
// AM.queueDownload("./img/notthere.png");
AM.queueDownload("./img/grass.png");
//AM.queueDownload("./img/glock26.png");
AM.queueDownload("./img/suitMan.png");


var canvas = document.getElementById("gameWorld");
var ctx = canvas.getContext("2d");

AM.downloadAll(function () {

    var suitImg = AM.getAsset("./img/suitMan.png");
    //var gunImg = AM.getAsset("./img/glock26.png");
    var bgImg = AM.getAsset("./img/grass.png");

    unMove.push(new OBJ(0,0,1400,750,0,0,1400,750,bgImg));
    player.push(new OBJ(0,0,64,64,100,100,100,100,suitImg));
});


var lastEvent = 38;

document.addEventListener("keydown", function(event) {

    var currentEvent = event.which;
    
    if(currentEvent == 38) {
        player[0].goForward(38);

    } else if(currentEvent == 37) {
        player[0].goForward(37);

    } else if(currentEvent == 39) {
        player[0].goForward(39);

    } else if(currentEvent == 40) {
        player[0].goForward(40);


    }else if(currentEvent == 68) {
        console.log('d is clicked');
        //down
        //ctx.drawImage(bl, sheetX,sheetY, 45,68,kidX,kidY,45,68);
        //moveForward(currentEvent);
        

    }
  })

window.setInterval(function() {

    console.log("drawed");

    for(var i=0; i<unMove.length; i++) {
        unMove[i].drawIt(ctx);
    }
    for(var i=0; i<player.length; i++) {
        player[i].drawIt(ctx);
    }
}, 100)

