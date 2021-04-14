let boardSize = prompt("enter board size for the game");

let userOneBoard = createBoard(boardSize);
let userTwoBoard = createBoard(boardSize);
let userOneHitCount = 3; // if hit reaches 0 then print message of who wins the game
let userTwoHitCount = 3;
// let myGrid = createBoard(boardSize);

// drawBreak();
displayGrid(userOneBoard);
displayGrid(userTwoBoard);

// createBoard(myGrid);

for (let i = 0; i < 1; i++) {
  let index = parseInt(i);
  let shipNumber = index + 1;
  // console.log(typeof(index))
  let x = prompt("Enter the x coordinate for your ship number " + shipNumber);
  let y = prompt(
    "Enter dcgnthe y coordinate for your ship number " + shipNumber
  );
  // console.log(typeof(x))
  placeCharacter(x, y, "O", userOneBoard);
  x = prompt("Enter the x coordinate for your ship number " + shipNumber);
   y = prompt("Enter dcgnthe y coordinate for your ship number " + shipNumber);
  placeCharacter(x, y, "O", userTwoBoard);
  drawBreak();
  displayGrid(userOneBoard);
  displayGrid(userTwoBoard);
}


while (userOneHitCount > 0 && userTwoHitCount > 0) {
   x = prompt('Enter the x coordinate for your attack');
   y = prompt('Enter the y coordinate for your attack');
}

function createBoard(dimension) {
  let grid = [];
  for (let i = 0; i < dimension; i++) {
    grid[i] = [];
    for (let j = 0; j < dimension; j++) {
      grid[i][j] = "-";
    }
  }
  return grid;
}

function displayGrid(grid) {
  const columns = columnHeading(grid.length);
  console.log(columns);
  for (let i = 0; i < grid.length; i++) {
    let rows = i + " ";
    for (let cell of grid[i]) {
      if (cell === "Ship") {
        rows += "- ";
      } else {
        rows += cell + " ";
      }
    }
    console.log(rows);
  }
}

function columnHeading(size) {
  let result = "  ";
  for (let i = 0; i < size; i++) {
    result += i + " ";
  }
  return result;
}




function placeCharacter(x, y, c, grid) {
  let i = parseInt(x);
  let j = parseInt(y);

  let vertOrHorz = prompt(
    "Enter whether you want to place it vertically (PRESS V) or horizontally (PRESS H"
  );
  if (vertOrHorz === "V") {
    let upDown = prompt(
      "Enter whether you want to place the ship upside (PRESS U) or downside (PRESS D)"
    );
    //   try{
    //     if(grid[i-1][j]=== '-')
    //     console.log(grid[i][j])
    //   else
    //   throw error;
    //   }
    // catch(error)
    // {
    //   console.log("error in your code")
    //   console.log("try again")
    //   placeCharacter(x, y, 'O', userOneBoard);
    // }
    if (upDown === "U") {
      console.log(grid[i][j] === "-");
      console.log(grid[i - 1][j] === "-");
      console.log(grid[i - 2][j] === "-");
      // try{
      if (
        grid[i][j] === "-" &&
        grid[i - 1][j] === "-" &&
        grid[i - 2][j] === "-"
      ) {
        grid[i][j] = c;
        grid[i - 1][j] = c;
        grid[i - 2][j] = c;
      } else {
        console.log("invalid value, ship can't be placed here");
      }
      // }
      // catch
      // {
      //   console.log("error in your code")
      //     console.log("try again")
      //     placeCharacter(x, y, 'O', userOneBoard);
      // }
    }
    if (upDown === "D") {
      if (
        grid[i][j] === "-" &&
        grid[i + 1][j] === "-" &&
        grid[i + 2][j] === "-"
      ) {
        grid[i][j] = c;
        grid[i + 1][j] = c;
        grid[i + 2][j] = c;
      } else {
        console.log("invalid value, ship can't be placed here");
      }
    }
  }
  if (vertOrHorz === "H") {
    let side = prompt(
      "Enter whether you want to place the ship left (PRESS L) or right (PRESS R) side"
    );

    if (side === "L") {
      console.log(grid[i][j] === "-");
      console.log(grid[i][j - 1] === "-");
      console.log(grid[i][j - 2] === "-");

      if (
        grid[i][j] === "-" &&
        grid[i - 1][j] === "-" &&
        grid[i - 2][j] === "-"
      ) {
        grid[i][j] = c;
        grid[i - 1][j] = c;
        grid[i - 2][j] = c;
      } else {
        console.log("invalid value, ship can't be placed here");
      }
    }
    if (side === "R") {
      if (
        grid[i][j] === "-" &&
        grid[i + 1][j] === "-" &&
        grid[i + 2][j] === "-"
      ) {
        grid[i][j] = c;
        grid[i][j + 1] = c;
        grid[i][j + 2] = c;
      } else {
        console.log("invalid value, ship can't be placed here");
      }
    }
  }
}

function attack(x, y, grid) {
  if (grid[x][y] === "O") {
    grid[x][y] = "!";
    return true;
  } else if (grid[x][y] === "-") {
    grid[x][y] = "x";
    return false;
  } else {
    return false;
  }
}

function drawBreak() {
  console.log("-------------OUTPUT CHANGES--------------------");
}
