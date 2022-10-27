
let size=600;
let particles = [];
let stones = [];
let waterArr = [];
let arr = new Array(size);
let state="sand";



for (var i = 0; i < arr.length; i++) {
  arr[i] = new Array(size).fill(0);
}

function setup() {
  createCanvas(size, size);
  background(0);
  sandbutton = createButton('Sand');
  sandbutton.position(0, 20);

  waterbutton = createButton('Water');
  waterbutton.position(105, 20);

  stonebutton = createButton('stone');
  stonebutton.position(215, 20);

  sandbutton.mousePressed(changetoSand);
  waterbutton.mousePressed(changetoWater);
  stonebutton.mousePressed(changetoStone);
  
  console.log(arr[100][100]);
}

function changetoSand(){
  state="sand";
}
function changetoWater(){
  state="water";
}
function changetoStone(){
  state="stone";
}





function addParticles(x,y){
  x = Math.floor(x);
  y = Math.floor(y);
  particles.push(new particle(x,y));
  arr[x][y] = 1;
}

function addStones(x,y){
  x = Math.floor(x);
  y = Math.floor(y);
  stones.push(new stone(x,y));
  arr[x][y] = 2;
}
function addWater(x,y){
  x = Math.floor(x);
  y = Math.floor(y);
  waterArr.push(new water(x,y));
  arr[x][y] = 3;
}


function updateParticles(){
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
  }
  for (var i = 0; i < waterArr.length; i++) {
    waterArr[i].update();
  }
}


function drawParticles(){
  for (var i = 0; i < particles.length; i++) {
    particles[i].draw();
  }
  for (var i = 0; i < stones.length; i++) {
    stones[i].draw();
  }
  for (var i = 0; i < waterArr.length; i++) {
    waterArr[i].draw();
  }

}


function draw() {
  background(0);
  colorMode(HSB, 100);
  updateParticles();
  drawParticles();
  if (mouseIsPressed === true) {
    if(mouseX>0 && mouseX<size && mouseY>0 && mouseY<size){
      if(state === "sand"){
        for(let i = 0; i < 10; i++){
          addParticles(mouseX+Math.floor(Math.random() * 20),mouseY+Math.floor(Math.random() * 20));
        }
      }else if(state === "stone"){
        for(let i = 0; i < 10; i++){
          addStones(mouseX+i-5,mouseY);
          addStones(mouseX,mouseY+i-5);
        }
      }else if(state === "water"){
          for(let i = 0; i < 10; i++){
            addWater(mouseX+Math.floor(Math.random() * 20),mouseY+Math.floor(Math.random() * 20));
          }
        }
      }
    } 
} 
