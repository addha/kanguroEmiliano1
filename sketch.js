//variables globales
var fondo,fondoObjeto;
var kanguro1,kanguro2,kanguro3,kanguroJugador,kanguroRun;
var pisoInvisible, ObstaculosDeSuelo;
var piedra, arbusto, arbusto2, arbusto3;
var estadoDelJuego = "play";

function preload(){
    fondo      = loadImage    ("./Imagenes/bg.png");
    kanguroRun = loadAnimation("./Kanguro/kangaroo1.png","./Kanguro/kangaroo2.png","./Kanguro/kangaroo3.png");
    piedra     = loadImage    ("./Obstaculos/stone.png");
    arbusto    = loadImage    ("./Obstaculos/shrub1.png");
    arbusto2   = loadImage    ("./Obstaculos/shrub2.png");
    arbusto3   = loadImage    ("./Obstaculos/shrub3.png");
}

function setup(){
    createCanvas(1666,1000);

    fondoObjeto = createSprite(750,425);
    fondoObjeto.addImage("fondo",fondo);
    fondoObjeto.scale= 0.42
    fondoObjeto.x = fondoObjeto.width/2;

    kanguroJugador = createSprite(150,675);
    kanguroJugador.addAnimation("Runing",kanguroRun);
    kanguroJugador.scale= 0.2
    kanguroJugador.setCollider("circle",0,0,300);

    pisoInvisible=createSprite(150,775,500,15);
    pisoInvisible.visible=true;
    grupoArbusto = new Group()
}

function draw(){
    background("#000000");

    drawSprites();

    if(estadoDelJuego == "play"){
        fondoObjeto.velocityX = -3;
        if (fondoObjeto.x < 100){
            fondoObjeto.x + 400
            //fondoObjeto.x = fondoObjeto.width/2;
            //console.log()
        }
        console.log("entramos al modo play")
        //hacer que el kanguroJugador salte al presionar la barra espaciadora
        if(keyDown("space")){
            //kanguroJugador.y = 260
            kanguroJugador.velocityY=-15
            console.log("si funciona el codigo");
        }
        //agregar gravedad
        kanguroJugador.velocityY = kanguroJugador.velocityY + 1;
        creacionDeArbustos();
        creacionDePiedras();
        //ObstaculosDeSuelo();
        //automaticJump();
        //evitar que el kanguroJugador caiga
        pisoInvisible=createSprite(150,775,500,15);
        pisoInvisible.visible=true;
        kanguroJugador.collide(pisoInvisible);
        /*if (grupoDeObstaculosDelPiso.isTouching(kanguroJugador)){
            estadoDelJuego = "end";
            console.log("si funciono?");
        }*/
    }
}

function  creacionDeArbustos(){
    if (frameCount % 220 === 0) {
        var arbustoo = createSprite(1700,750,40,110);
        var Arbusto = Math.round(random(1,3));
        arbustoo.scale=0.1;
        arbustoo.velocityX=-3.8;
        switch(Arbusto) {
            case 1: arbustoo.addImage(arbusto);
                break;
            case 2: arbustoo.addImage(arbusto2);
                break;
            case 3: arbustoo.addImage(arbusto3);
                break;
            default: break;
        }
        arbustoo.lifetime= 500;
        grupoArbusto.add(arbustoo);
    }
}

function creacionDePiedras(){
    if (frameCount % 250 === 0){
        var piedraa = createSprite(1700,750,40,110);
        piedraa.addImage(piedra);
        piedraa.scale = 0.1;
        piedraa.velocityX = -3.8;
        piedraa.lifetime = 500;
    }
    
}