function OBJ(sx,sy,sw,sh,cx,cy,cw,ch,img) {
    this.sheetX = sx;
    this.sheetY = sy;
    this.sheetWidth = sw;
    this.sheetHeight = sh;
    this.canvasX = cx;
    this.canvasY = cy;
    this.canvasWidth = cw;
    this.canvasHeight = ch;
    this.img =img;
    this.lastDir = 38;
    this.speed = 15;
}

OBJ.prototype.goForward = function(dir) {
    console.log("go");
    switch(dir) {
      case 38:
        if(this.lastDir == dir) {
            //console.log("yes");
            this.sheetX += 64;
            this.canvasY -=this.speed;
            if(this.sheetX >= 576) {
                this.sheetX =0;
            }
        } else {
            this.sheetX = 0;
            this.sheetY = 0;
            this.lastDir =dir;
        }
        break;
      case 40:
        if(this.lastDir == dir) {
            //console.log("yes");
            this.sheetX += 64;
            this.canvasY +=this.speed;
            if(this.sheetX >= 576) {
                this.sheetX =0;
            }
        } else {
            this.sheetX = 0;
            this.sheetY = 128;
            this.lastDir =dir;
        }
        break;
      case 37:
        if(this.lastDir == dir) {
            //console.log("yes");
            this.sheetX += 64;
            this.canvasX -=this.speed;
            if(this.sheetX >= 576) {
                this.sheetX =0;
            }
        } else {
            this.sheetX = 0;
            this.sheetY = 64;
            this.lastDir =dir;
        }
        break;
      case 39:
        if(this.lastDir == dir) {
            //console.log("yes");
            this.sheetX += 64;
            this.canvasX +=this.speed;
            if(this.sheetX >= 576) {
                this.sheetX =0;
            }
        } else {
            this.sheetX = 0;
            this.sheetY = 192;
            this.lastDir =dir;
        }
        break;
      default:
        // code block
    }
}

OBJ.prototype.nextFrame = function(dir) {
    switch(dir) {
      case 'south':
        this.canvasY += 3;
        break;
      case 'north':
        this.canvasY -= 3;
        break;
      case 'west':
        this.canvasX -= 3;
        break;
      case 'east':
        this.canvasX += 3;
        break;
      default:
        // code block
    }
}

OBJ.prototype.drawIt = function (ctx) {
    console.log("inside draw");
    ctx.drawImage(this.img,
        this.sheetX, this.sheetY,  // source from sheet
        this.sheetWidth, this.sheetHeight, // width and height of source
        this.canvasX, this.canvasY, // destination coordinates
        this.canvasWidth, this.canvasHeight); // destination width and height
}

