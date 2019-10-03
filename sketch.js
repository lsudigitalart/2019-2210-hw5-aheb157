function setup(){
createCanvas(800,800);
background(0);
angleMode (degrees);
}

function draw(){
noStroke(0);
push ();
 fill (255,0,0); 
 rect(width/2, height/2, 400,400);
 pop ();
 push(0);
fill(215);
rect(0,0,400,400);
pop ();
push ();
fill(250,215,0);
rect(400,0,400,400);
pop();
push ();
fill(0,0,255);
rect(0,400,400,400);
pop();

let r=(255,0,0);
let b=(0,0,255);
let y=(250,215,0);
let g=(215);

//gray square
push ();
rotate(mouseX);
fill(y,r,y);
quad(30,300,200,230,200,30,30,110);
fill(b,r,b);
quad(200,230,30,300,200,350,370,300);
fill(y,b,y);
quad(200,230,200,30,370,110,370,300);
pop ();

//yellow square
push ();
rotate (mouseX);
fill(g,b,g);
quad(430,80,600,130,600,360,430,300);
fill(g,g,y);
quad(600,30,430,80,600,130,770,80);
fill(r,g,g);
quad(600,130,770,80,770,300,600,360);
pop ();

//blue square
push();
rotate( mouseX);
fill(g,y,b);
quad(30,480,200,530,200,760,30,700);
fill(y,g,y);
quad(200,430,30,480,200,530,370,480);
fill(g,r,r);
quad(200,530,370,480,370,700,200,760);
pop();

//red square
push ();
rotate(mouseX);
fill(g,b,b);
quad(430,700,600,630,600,430,430,510);
fill(g,g,y);
quad(600,630,430,700,600,750,770,700);
fill(g,r,r);
quad(600,630,600,430,770,510,770,700);
pop();


// how do gradients 
//




//use quads
}