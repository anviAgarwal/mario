
function preload()
{}

function setup() {
  createCanvas(9000, 668);
  var countDistanceX=0;
  var gap;
  for (var i =0;i<6;i++){
    platform1=new Platform(countDistanceX);
    gap=random([0,0,0,0,80]);
    countDistanceX=countDistanceX+platform1.rw+gap;
  }
}


function draw() {
  background('skyblue'); 
 drawSprites();
}

