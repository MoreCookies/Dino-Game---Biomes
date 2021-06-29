/*
SCAVENGER HUNT!!
Here is the list of things to find in the code,
-1 amogus
-3 sus

Note: These can be found within some comments! They don't necesarily have to be exclusive in one single comment! Good luck!
if you use ctrl+f i will slap you


*/
let currentBiome = "forest"
var backimg;
var groundimg;
let grounds = []
var fr = 30;
var randomObject;
var winWidth = 500;
var winHeight = 500;
var x1 = winWidth;
var x2 = 0;
var objectLimit = 50;
var frameTimer = 0;
var obstacleInterval = 0;
var obstacles = []
var frameCounter = 0;
var score = 0;
var randomObstacles = 0;
//welcome to grass class lass brass last fast mast pastor tasse waaste cast sus brrass bbbbbbbbbbbbbb
class Ground {
	constructor(img, limit, widthI, heightI, up, xx) {
		this.img = img;
		this.limit = limit;
		this.x = xx;
    this.randomN = 0;
    this.widthI = widthI;
    this.heightI = heightI;
    this.up = up;
    if(widthI == null) {
      this.widthI = width/this.limit;
    }
    if(heightI == null) {
      this.heightI = height/10;
    }
    if(up == null) {
      this.up = height-200;
    }
    
    if(xx == null) {
      this.x = width;
    }
    this.randomN = round(random(0.99, 2))
    if (this.randomN == 1) {
			this.x += random(3, 8);
		} else if (this.randomN == 2) {
			this.x -= random(3, 8);
		} 
	}

	display() {
		image(this.img, this.x, this.up, this.widthI, this.heightI)
	}

	update() {
		this.x -= width/this.limit;
	}
}

class dino {
  constructor(upArrow, downArrow, jumpHeight, obstaclesI, imgUp, imgDown, imgIdle, widthI, heightI, gravity) {
    this.upAr = upArrow;
    this.downAr = downArrow;
    this.jumpH = jumpHeight;
    this.obstacle = obstaclesI;
    this.x = winWidth/2
    this.y = winHeight-150
    this.speed = jumpHeight;
    this.currentImg = imgIdle;
    this.downSpeed = 0;
    this.gravity = gravityl
    this.currentAnim = 1;
  }

  display() {
    image(currentImg, x, y, widthI, heightI)
  }

  handleKeypressed() {
    if(keyCode == upArrow) {
      this.currentImg = imgUp;
      this.downSpeed = -10;
      this.speed = jumpHeight;
    } else if(keyCode == downArrow) {
      //crouching animation
    }
  }

  update() {
    this.downSpeed *= gravity/10;
    this.y -= this.downSpeed;
    if(this.y <= winHeight-150) {
      this.downSpeed = 0;
      this.y = winHeight-150;
    }
  }

  checkCollision() {
    /*
    use this.x and this.y along with the fact that the positions of images are in the top left corner to check collisions have fun lmao fuuuuu
    */
    for(var r = 0; r < obstacle.length; r++) {
      
    }
  }

}

function preload() {
  //forest imgs
	backImg = loadImage("assets/backgrounds/forestbg.jpg");
  backImg2 = loadImage("assets/backgrounds/forestbg2.jpg")
  backImg.resize(300, 300);
  backImg2.resize(300, 300);
	groundImg = loadImage("assets/biomeObjects/Deep Forest/forestground.jpg");
  grassImg = loadImage("assets/biomeObjects/Deep Forest/Grass.png");
	treeImg = loadImage("assets/biomeObjects/Deep Forest/tree.png");
	tentImg = loadImage("assets/biomeObjects/Deep Forest/tent.png");
	rockImg = loadImage("assets/biomeObjects/Deep Forest/rock.png");
  fireImg = loadImage("assets/biomeObjects/Deep Forest/fire.png")
}

function setup() {
	// When website starts
	createCanvas(winWidth, winHeight);
	imageMode(CORNER);
  frameRate(fr);
  var obstacleInterval = round(random(0.6, 1.4));
  randomObstacles = round(random(1, 3))
}

function draw() {
  frameTimer = (frameCounter/fr);
	//ground, change based on biome, do later; remember though
	//also remember to update the current graphics variables img'es based on the biomie
	image(backImg, x1, 0, winWidth, winHeight)
	image(backImg2, x2, 0, width, height)

	image(groundImg, x1, winWidth-75, winWidth, 100)
  image(groundImg, x2, winWidth-75, winWidth, 100)
  //scroll the background and ground amogus
  if(x1 <= -width) {
    x1 = winWidth
  }
  if(x2 <= -width) {
    x2 = winWidth
  }
  //make random objects in the background
  randomObject = random(0.99, 3)
  if(randomObject <= 1.001) {
    //tent
    grounds.push(new Ground(tentImg, objectLimit, 65, 65, height-135))
  } else if(randomObject <= 1.3) {
    //rock
    grounds.push(new Ground(rockImg, objectLimit, 30, 35, height-105))
  } else if(randomObject <= 2.95) {
    //grass
    grounds.push(new Ground(grassImg, objectLimit, 15, 30, (height-93)))
  } else if(randomObject <= 3) {
    //fire
    grounds.push(new Ground(fireImg, objectLimit, 35, 40, height-115))
  }
	//update and delete the objects
	for (var k = 0; k < grounds.length; k++) {
		grounds[k].display();
		grounds[k].update();
	}
  if(grounds[0].x <= (0-grounds[0].widthI)) {
    grounds.shift();
  }

  //make obstacle trees
  if(frameTimer >= obstacleInterval) {
    for(var i = 0; i < randomObstacles; i++) {
      obstacles.push(new Ground(treeImg, objectLimit, 75-(i*3), 90-(i*4), (height-160)+((i*6)/2), width+((i*35)+6)));
    }
    frameCounter = 0;
    obstacleInterval = round(random(0.6, 1.4));
    randomObstacles = round(random(1, 3))
  }
  for(var f = 0; f < obstacles.length; f++) {
    obstacles[f].display();
    obstacles[f].update();
  }
  if(obstacles.length > 0) {
    if(obstacles[0].x <= (0-obstacles[0].widthI)) { 
      obstacles.shift();
    }
  }
  //sus

  x1 -= winWidth/objectLimit
  x2 -= winWidth/objectLimit
  frameCounter += 1;
}