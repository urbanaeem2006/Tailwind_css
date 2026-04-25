//  Game constant
let inputDir = {x: 0, y:0}
let speed = 5;
let lastPaintTime = 0
let score = 0
let snakeArr = [
    {x: 13, y: 15}
];
food = {x: 6, y: 7}

// Game function
function main(ctime){
    window.requestAnimationFrame(main);
    //  console.log(ctime)
    if ((ctime - lastPaintTime)/1000 < 1/speed){
        return

    }
    lastPaintTime = ctime; 
    gameEngine()
   
}
function isCollide(snake){
    // if you bumb into your helf
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true
        }
    }
    // if you bump into the wall
        if(snake[0].x >= 18 || snake[0].x <= 0  && snake[0].y >= 18 || snake[0].y <= 0) {
            return true
}
    
}
function gameEngine(){
    // part 1: updating the snake array 
    if(isCollide(snakeArr)) {
        inputDir = {x: 0, y: 0}
    alert("game Over. press anyy key to play a game")
    snakeArr = [{x: 13, y: 15}]
    score = 0
}
    // if you have eaten the food increment the snake and regenerate the food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y})
        let a = 2;
        let b = 16
        // random number generate formula
        food = {x: Math.round(a +(b-a)* Math.random()),  y: Math.round(a +(b-a)* Math.random())}
    }

    // Moving the snake
    for (let i = snakeArr.length - 2; i>= 0; i--) {
        snakeArr[i+1] = {...snakeArr[i]}
        
    }
    snakeArr[0].x += inputDir.x
    snakeArr[0].y += inputDir.y
    // part 2: Display the snake and food
    // display the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement("div")
        // y is row and x is column
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
               if (index === 0) {
             snakeElement.classList.add("head")

        }
        else{
             snakeElement.classList.add("snake")
        }
        board.appendChild(snakeElement)
    });
    // display the food
        foodElement = document.createElement("div")
        // y is row and x is column
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add("food")
        board.appendChild(foodElement)
}

// main logic start
window.requestAnimationFrame(main);
window.addEventListener("keydown", e =>{
    inputDir = {x:0, y:1} //Start the game//
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp")
            inputDir.x = 0;
            inputDir.y = -1;
            break;

         case "ArrowDown":
            console.log("ArrowDown")
             inputDir.x = 0;
            inputDir.y = +1;
            break;
            

            case "ArrowLeft":
            console.log("ArrowLeft")
            inputDir.x = -1;
            inputDir.y = 0;
            break;

               case "ArrowRight":
                  console.log("ArrowRight")
                  inputDir.x = 1;
                   inputDir.y = 0;
                 break;
    
        default:
            break;
    }
})







