difference = 0;
rightWristX = 0;
leftWristX = 0; 

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Model Initialization Success");
}

function draw(){
    background('#969A97');
    textSize(difference);
    fill("ff0000");
    text("Ritvik", 300,300);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results.length);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWristX;
    }
}