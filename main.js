function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,100);
    video=createCapture(VIDEO);
    video.size(550, 500);
  

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+ noseX +"noseY"+noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference= floor(leftWristX - rightWrist);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}

function draw(){
    background('#969A97');
    textSize(difference);
    fill('#F90093');
    text('Lila', 10,20,30,40,50, );
    square(noseX, noseY, difference);
}

noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function preload(){

}