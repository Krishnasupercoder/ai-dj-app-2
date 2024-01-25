var canvas;
var webcam;
var music;
 
function preload(){
music = loadSound("music.mp3")
}
function setup(){
canvas = createCanvas(600,500);
canvas.center();
webcam = createCapture(VIDEO);
webcam.hide();

}
function draw(){
image(webcam,0,0,600,500);
}
function play(){
    music.play();
    document.getElementById("stop").style.visibility="visible";
    document.getElementById("show").style.visibility="hidden";
    
}
function stop(){
    music.stop();
    document.getElementById("show").style.visibility="visible";
    document.getElementById("stop").style.visibility="hidden";
}