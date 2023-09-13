function setup(){
    canvas = createCanvas(450,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/KmdF3D2rj/model.json',modelLoaded);
}
function modelLoaded() {
    console.log('Model Loaded!')
}

function draw() {
    image(video, 0, 100, 400, 450);
    classifier.classify(video, gotResult);
}

function gotResult(error,results) {
    if(error){
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result").innerHTML = results[0].label;
       

    }
}
