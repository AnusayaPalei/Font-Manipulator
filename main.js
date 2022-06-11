function setup(){
    canvas= createCanvas(500,500);
    canvas.position(800,140);
  
    video = createCapture(VIDEO);
    video.position(200,140);
    video.size(500,500);
  
    poseNet=ml5.poseNet(video, modelloaded);
    poseNet.on('pose',gotposes);
  }
  function draw(){
    background("#5196e3");
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    textSize(difference);
    fill("#cc2404");
    text('Anusaya',50,400);
}


function modelloaded(){
    console.log("PoseNet Is Initialized And Loaded");
}

leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;

function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

        difference = floor(leftWrist_x - rightWrist_x);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}