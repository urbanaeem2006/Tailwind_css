let lastPaintTime = 0;
const SNAKE_SPEED = 1;

const snakeBody = [
  {x : 8, y : 8 },
  // {x : 9, y : 8 },
  // {x : 10, y : 8 },
  

]

const gameBoard = document.querySelector(".game-board")

function paint(currentTime){
  let TimeSeconds = (currentTime - lastPaintTime) / 1000;
    requestAnimationFrame(paint);
    if( TimeSeconds < 1 / SNAKE_SPEED) return; 
    lastPaintTime = currentTime
     

    update();
     
    draw();
}

window.requestAnimationFrame(paint);



function draw(){
  drawSnake();  
}

function update(){
  snakeMove()
}

function drawSnake(){
  snakeBody.forEach(segment=>{
    let snakeElement = document.createElement("div")
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.style.gridRowStart = segment.y;

    snakeElement.classList.add("snake")

    gameBoard.appendChild(snakeElement)
  })
}

function snakeMove()[
  snakeBody[0].x++
]











    

