let posX;
let posY;
let rectSizeX = 50;
let rectSizeY = 50;
let velocityX;
let velocityY;
let centerPositionX;
let centerPositionY;

function setup() {
    canvas = createCanvas(300, 550, 'beholder');
    textSize(24);
    // giver canvas border på 2 pixel, 
    // og sørger derefter for at kanten tælles med i width
    canvas.elt.style.border = '5px solid black';
    canvas.elt.style.boxSizing = 'border-box';
    canvas.elt.style.borderRadius = '20px';

    canvas.parent('#beholder');
    // gør canvas-elementet responsivt til skærmbredden
    //canvas.elt.style.width = '100%';
    //canvas.elt.style.height = '100%';

    //bemærk at noden skal pakkes ud via .elt
    const parentDiv = select('#beholder').elt;
    const p = select('#test1').elt;
    // indsæt canvas i ny position i rækkefølgen af elementer i div'en beholder
    parentDiv.insertBefore(canvas.elt, p);
    posX = width/2;
    posY = height/2;
    velocityX = random(-3, 3);
    velocityY = random(-3, 3);
    centerPositionX = width/2;
    centerPositionY = height/2;
    setShakeThreshold(1);
}

function draw(){
    background(255, 150, 0);
    strokeWeight(5);
    fill(255);
    rectMode(CENTER);
    //translate(positionX, positionY);
    //rotate(PI/3.0);
    rect(posX, posY, rectSizeX, rectSizeY);
    update();
    fill(0);
    text('Hastighed: ' + str(Math.abs(velocityX) + Math.abs(velocityY)), Math.abs(centerPositionX/10), Math.abs(centerPositionY) + Math.abs(centerPositionY/1.25));
}

function update(){
    if(posX >= width - rectSizeX/2 || posX <= 0 + rectSizeX/2){
        velocityX *= -1;
    }
    if(posY >= height - rectSizeY/2 || posY <= 0 + rectSizeY/2){
        velocityY *= -1;
    }
    posX += velocityX;
    posY += velocityY;
}

function deviceShaken(){
    velocityX += velocityX/10;
    velocityY += velocityY/10;
}