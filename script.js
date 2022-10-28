const container = document.getElementById("container");
let rows = [];
let boxes = document.getElementsByClassName("box")
let userRow, userColumn;

// when repeat button is clicked, starts a new game
document.querySelector("button").addEventListener("click", repeat);

// prompts user for rows and columns, checks if integer and within the max width and height
function userPrompt() {
    userRow = parseInt(prompt("How many rows?", ""));
    userColumn = parseInt(prompt("How many columns?", ""));
    // userRow = parseInt(x);
    // userColumn = parseInt(y);
    if (!Number.isInteger(userRow) || !Number.isInteger(userColumn)){ 
        alert("Please only input integers.");
        repeat();
    } 
    if (userRow > 100 || userRow < 1) {
        alert("Please pick a number between 1 - 100.");
        repeat();
    } 
    if (userColumn > 100 || userColumn < 1) {
        alert("Please pick a number between 1 - 100.");
        repeat();
    }
};

function game() {
    // This function will create one div box. Commented out is if we need the boxes nested in an individual class beyond itself
    function createDiv(rowNum) {
        // let row = document.createElement("row");
        // row.classList.add("row");
        let newDiv = document.createElement("div");
        newDiv.classList.add("box");
        // row.appendChild(newDiv);
        rows[rowNum].appendChild(newDiv);
    }

    // This function is a loop to have 16 div boxes per row, for 16 rows
    function createRows(column, row) {
        for (let j = 0; j < column; j++) {
            rows[j] = document.createElement(`row${j}`)
            rows[j].classList.add("rows");
            container.appendChild(rows[j]);
            for (let i = 0; i < row; i++) {
                createDiv(j); 
            }
        }
    }
    createRows(userRow, userColumn);

    // adds color to the boxes you hover over
    for (let box of boxes) {
        box.addEventListener("mouseover", function hover() {
            box.style.backgroundColor = "#C097C1";
        });
    }
}

// when button clicks, the prompt and game go again
function repeat() {
    document.getElementById("container").innerHTML = "";
    userPrompt();
    game();
}

// runs the prompt first then the game
userPrompt();
game();
