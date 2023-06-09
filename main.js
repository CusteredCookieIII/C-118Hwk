counter=0;
const doodles=["sun", "square", "snowflake", "mug", "rollor coster"];
score=0;

function setup() {
    canvas = createCanvas(200, 200);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth= window.speechSynthesis;
}

function clearCanvas(){
    background("white");
}

function preload(){
    classifier = ml5.imageClassifier('DoodleNet')
}

function draw(){
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    };
}

function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML = 'label '+ results[0].label;

    document.getElementById('confidence').innerHTML = 'Confidence' + Math.round(results[0].confidence * 100) + '%';

    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}

function start_timer(){
object = Math.floor(Math.random() * 5);
clock = setInterval(interval, 1000);
console.log(object);
mls=setInterval(tick, 10);
doodle = doodles[object];
document.getElementById("thing").innerHTML = doodle;


}

function interval(){
    counter++;
    document.getElementById("number").innerHTML = counter;
    console.log(counter);
    console.log(score); 
    if(counter==20){
        background("white");
        clearInterval(clock);
        clearInterval(tick);
        counter=0;
    }

    
}

function tick(){
    if(object==0 && document.getElementById("label") =="label sun")
    {
        score++;
        document.getElementById("points").innerHTML = score;
    }

    if(object==1 && document.getElementById("label")=="label square")
    {
        score++;
        document.getElementById("points").innerHTML = score;
    }

    if(object==2 && document.getElementById("label")=="label snowflake")
    {
        score++;
        document.getElementById("label points").innerHTML = score;
    }

    if(object==3 && document.getElementById("label")=="label mug")
    {
        score++;
        document.getElementById("points").innerHTML = score;
    }

    if(object==4 && document.getElementById("label")=="label roller_coaster")
    {
        score++;
        score++;
        document.getElementById("points").innerHTML = score;
    }
}