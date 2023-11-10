function setup(){
canvas=createCanvas(280,280);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
synth = window.speechSynthesis;
}
function preload(){
m=ml5.imageClassifier('DoodleNet');
}
function classifyCanvas(){
m.classify(canvas,gotResult);
}

function draw(){
strokeWeight(9);
stroke(0);
if (mouseIsPressed) {
line(pmouseX,pmouseY,mouseX,mouseY);
}
}

function gotResult(error,result){
if (error) {
console.log(error); 
}
else{
console.log(result);
document.getElementById("la").innerHTML="Label - "+result[0].label;
document.getElementById("con").innerHTML="Accuracy - "+Math.round(result[0].confidence*100)+ "%";
utterThis = new SpeechSynthesisUtterance(result[0].label);
synth.speak(utterThis);
}
}
function c(){
background("white");

}