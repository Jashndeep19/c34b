var doggy,dog,happyDog,foods,database,foodstock

function preload()
{
  dog = loadImage("images/dog.png");
  happyDog = loadImage("images/happyDog.png");
}

 function setup(){ 
 database=firebase.database(); 
 createCanvas(500,500);
 doggy=createSprite(250,300,150,150);
 doggy.addImage(dog);
 doggy.scale=0.15;
 foodstock=database.ref('food');
 foodstock.on("value",readStock); 
 textSize(20);
 }


function draw() {  
background(46, 139, 87)
if(keyWentDown(UP_ARROW)){
 writeStock(foods)
  doggy.addImage(happyDog)
   }
   
drawSprites();
fill(255,255,254); 
stroke("black");
text("Food remaining : "+foods,170,200); 
textSize(13);
text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1;
    }
    database.ref('/').update({
      Food:x
    })
  }

 function readStock(data){
    foods=data.val(); 
  }
