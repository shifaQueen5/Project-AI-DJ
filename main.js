song1 = "";
song2 = "";
function preload(){
    song1 = loadSound("money_jiggle_jiggle.mp3");
    song2 = loadSound("loco_by_itzy.mp3");
}
function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("Posenet is Initialized");
}
