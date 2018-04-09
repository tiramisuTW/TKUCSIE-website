//Aliases
let Application = PIXI.Application,
  Container = PIXI.Container,
  loader = PIXI.loader,
  resources = PIXI.loader.resources,
  TextureCache = PIXI.utils.TextureCache,
  Sprite = PIXI.Sprite,
  Rectangle = PIXI.Rectangle;

//Create a Pixi Application
let app = new PIXI.Application({
  width: 256,
  height: 256,
  antialias: true, // default: false
  transparent: false, // default: false
  resolution: 1, // default: 1
});
app.renderer.backgroundColor = 0xFFFFFF;
app.renderer.view.style.position = "fixed";
app.renderer.view.style.zIndex = -1;
app.renderer.view.style.top = 0;
app.renderer.view.style.left = 0;

app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);



app.stage = new PIXI.display.Stage();
var layer = new PIXI.display.Layer();
layer.useRenderTexture = true;
// this flag is required, or you'll get
// "glDrawElements: Source and destination textures of the draw are the same."
layer.useDoubleBuffer = true;

var trailSprite = new PIXI.Sprite(layer.getRenderTexture());
trailSprite.alpha = 0.8;

layer.addChild(trailSprite);

app.stage.addChild(layer);
var showLayer = new PIXI.Sprite(layer.getRenderTexture());
app.stage.addChild(showLayer);



//Define any variables that are used in more than one function
let word = [],
  box;

function setup() {

  box = new PIXI.Graphics();
  box.beginFill(0xFFFFFF);
  box.drawRect(0, 0, window.innerWidth, 1);
  box.endFill();
  box.position.set(0, window.innerHeight - 10)
  app.stage.addChild(box);

  for (let i = 0; i < 20; i++) {
    addElement(i);
  }
}

setup();


function addElement(i) {
  word[i] = null;
  word[i] = new PIXI.Text(i % 2, new PIXI.TextStyle({
    fill: "0xdddddd",
    fontSize: 20
  }));
  word[i].position.set(randomInt(0, window.innerWidth), -1 * randomInt(0, 1000));
  layer.addChild(word[i]);
  app.ticker.add(delta => gameLoop(delta, word[i]));
}

function gameLoop(delta, target) {
  target.y += 5

  if (hitTestRectangle(target, box)) {
    target.x = randomInt(0, window.innerWidth);
    target.y = 0;


  }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hitTestRectangle(r1, r2) {

  //Define the variables we'll need to calculate
  let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

  //hit will determine whether there's a collision
  hit = false;

  //Find the center points of each sprite
  r1.centerX = r1.x + r1.width / 2;
  r1.centerY = r1.y + r1.height / 2;
  r2.centerX = r2.x + r2.width / 2;
  r2.centerY = r2.y + r2.height / 2;

  //Find the half-widths and half-heights of each sprite
  r1.halfWidth = r1.width / 2;
  r1.halfHeight = r1.height / 2;
  r2.halfWidth = r2.width / 2;
  r2.halfHeight = r2.height / 2;

  //Calculate the distance vector between the sprites
  vx = r1.centerX - r2.centerX;
  vy = r1.centerY - r2.centerY;

  //Figure out the combined half-widths and half-heights
  combinedHalfWidths = r1.halfWidth + r2.halfWidth;
  combinedHalfHeights = r1.halfHeight + r2.halfHeight;

  //Check for a collision on the x axis
  if (Math.abs(vx) < combinedHalfWidths) {

    //A collision might be occuring. Check for a collision on the y axis
    if (Math.abs(vy) < combinedHalfHeights) {

      //There's definitely a collision happening
      hit = true;
    } else {

      //There's no collision on the y axis
      hit = false;
    }
  } else {

    //There's no collision on the x axis
    hit = false;
  }

  //`hit` will be either `true` or `false`
  return hit;
};