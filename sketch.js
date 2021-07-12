var ball;
var position,database

function setup(){
    database=firebase.database()

    createCanvas(500,500);
    ball = createSprite(250,250,20,20);
    ball.shapeColor = "red";

    var ballposition=database.ref('ball/position')
    ballposition.on("value",readposition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
        ball.shapeColor = "cyan";
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
        ball.shapeColor = "lime";
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
        ball.shapeColor = "purple";
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
        ball.shapeColor = "blue";
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
       x : position.x + x,
       y : position.y + y
    })

}
function readposition(data){
position=data.val()
ball.x=position.x
ball.y=position.y
}
