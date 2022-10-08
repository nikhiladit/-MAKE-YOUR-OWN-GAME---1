var knife, knifeImg;
var watermelon, apple, mango, banana, orange, pomegranet, pineapple;
var watermelonImg, appleImg, mangoImg, bananaImg, orangeImg, pomegranetImg, pineappleImg;

function preload() {
    wartermelonImg = loadImage("./assets/watermelon.png");
    appleImg = loadImage("./assets/apple.png");
    bananaImg = loadImage("./assets/banana.png");
    pomegranetImg = loadImage("./assets/pomegranet.png");
    orangeImg = loadImage("./assets/orange.png");
    pineappleImg = loadImage("./assets/pineapple.png");
    mangoImg = loadImage("./assets/mango.png");
    knifeImg = loadImage("./assets/knife.png");

}

function setup() {
    createCanvas(350,650);

    watermelon = createSprite(200,200);
    watermelon.addImage(wartermelonImg);
    watermelon.scale = 0.5;

}

function draw() {
    background(0);

    

    drawSprites();

}