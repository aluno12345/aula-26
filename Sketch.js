
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, solo1;
var caixa1, caixa2, caixa3, caixa4, caixa5;
var porco1, porco2;
var tronco1, tronco2, tronco3, tronco4;
var bird1;
var fundo;
var plataforma;

function preload(){
  fundo = loadImage("sprites/bg.png");
}

function setup() {
  var canvas = createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;

  plataforma = new Solo(150,305,300,180);	
  solo1 = new Solo(width/2, height, width, 20);
  //primeira camada
  caixa1 = new Caixa(700, 320, 70, 70);
  caixa2 = new Caixa(920, 320, 70, 70);
  porco1 = new Porco(810,320);
  tronco1 = new Tronco(810,260,300,PI/2);

  //segunda camada
  caixa3 = new Caixa(700, 240, 70, 70);
  caixa4 = new Caixa(920, 240, 70, 70);
  porco2 = new Porco(810,240);
  tronco2 = new Tronco(810,180,300,PI/2);

  //terceira camada
  caixa5 = new Caixa(810, 160, 70, 70);
  tronco3 = new Tronco(760,120,160,PI/4);
  tronco4 = new Tronco(880,120,160,-PI/4);

  bird1 = new Passaro(100,100);

  Engine.run(engine);
}

function draw() {
  background(fundo);

  solo1.display();

  caixa1.display();
  caixa2.display();
  porco1.display();
  tronco1.display();
  plataforma.display();	

  caixa3.display();
  caixa4.display();
  porco2.display();
  tronco2.display();

  caixa5.display();
  tronco3.display();
  tronco4.display();

  bird1.display();
}
