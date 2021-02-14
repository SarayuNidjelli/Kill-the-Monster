const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
bg = loadImage("images/GamingBackground.png")

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600, 600, 1200, 20);
  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 400, y: 50 });
  monster = new Monster(1500,500,300);
  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(800, 100, 70, 70);
  box3 = new Box(700, 100, 70, 70);
  box4 = new Box(600, 100, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);

  ground.display();
  hero.display();
  rope.display();
  monster.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}