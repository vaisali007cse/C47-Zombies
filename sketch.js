let test = false;
let test2 = false;
let s
let r = (0)
let d = 0
let bubbles = [];
let badZombies = [];
let lilCatcher;
let img;
let robo;
let button;
var number;
let canvasW;
let canvasH;

function preload() {
  zomb = loadImage('zombie.png');
  redzomb = loadImage('redzombie.png');
  vac = loadImage('vac.png');
  robo = loadFont('Roboto-Bold.ttf');

}

function setup() {
   greenish = createElement('body', '# of green zombies');
    greenish.position(windowWidth/35, 200);

   redish = createElement('body', '# of red zombies');
    redish.position(windowWidth/35, 265);

  
    greenSlide = createSlider(1,150);
    greenSlide.position(windowWidth/35, 235);

    redSlide= createSlider(1,150);
    redSlide.position(windowWidth/35, 300);
  
  

  
// input = createInput();
let canvasW = (windowWidth*(4/6));
let canvasH = (windowHeight*(4/6));
  
  console.log(canvasW);
  console.log(canvasH);
  
  button = createButton('start');
    button.position(windowWidth/35, 335);

  button.mousePressed(run);
  
  var cnv = createCanvas(canvasW, canvasH, WEBGL);
  cnv.position(windowWidth/6, 200);
   // cnv.parent('container')
  textFont(robo);
  textSize(width / 10);
  fill(255);
  textAlign(CENTER, CENTER);
}

function run() {
  test = false;
  test2 = false;
  bubbles = [];
  badZombies = [];
  ix = (random(width));
  iy = (random(height));
  ir = random(40, 70);
  // let number = input.value();

  const r = redSlide.value();
  const g = greenSlide.value();
  lilCatcher = new catcher();
  for (let i = 0; i < g; i++) {
    bubbles.push(new Bubble());
  }

  for (let i = 0; i < r; i++) {
    badZombies.push(new redzombie());
  }

  console.log(badZombies.length);

}

function draw() {

   
  background(r);
  translate(-width / 2, -height / 2);

  if (bubbles.length <= 0) {
    test2 === false;
  }
  
   

  for (var i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].display();
    bubbles[i].move();
    if (lilCatcher.intersect(bubbles[i])) {
      bubbles.splice(i, 1);
    }
  lilCatcher.display();
    lilCatcher.move();
   
  }

  for (var i = badZombies.length - 1; i >= 0; i--) {
    badZombies[i].display();
    badZombies[i].move();
    if (lilCatcher.intersect(badZombies[i])) {
      test = true;
    }

    if (test === true) {
      background(183, 11, 11) && text('YOU LOSE',windowWidth/3, windowHeight/3);
    }

    if (test2 === false && bubbles.length <= 0) {
      background(0, 0, 255) && text('YOU WIN!', 400, 200);
    }

    
  }
  
}
