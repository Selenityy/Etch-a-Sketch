const container = document.getElementById("container");
let rows = [];
let boxes = document.getElementsByClassName("box")
let userRow, userColumn;

// when repeat button is clicked, starts a new game
document.querySelector("button").addEventListener("click", repeat);

// prompts user for rows first then columns, checks if integer and within the max width and height
function userPrompt() {
    function rowInput() {
        let userInputRow = prompt("How many rows?","");
        userRow = parseInt(userInputRow);
        if (userInputRow === null) {
            return;
        } else if (!Number.isInteger(userRow)) {
            alert("Please only input integers.");
            rowInput();
        } else if (userRow > 100 || userRow < 1) {
            alert("Please pick a number between 1 - 100.");
            rowInput();
        } else { 
            columnInput(); 
        }
    } 
    rowInput();

    function columnInput() {
        let userInputColumn = prompt("How many columns?", "");
        userColumn = parseInt(userInputColumn);
        if (userInputColumn === null) {
            return;
        } else if (!Number.isInteger(userColumn)){ 
            alert("Please only input integers.");
            columnInput();
        } else if (userColumn > 100 || userColumn < 1) {
            alert("Please pick a number between 1 - 100.");
            columnInput();
        } else {
            game();
        }
    };
};

function game() {
    // This function will create one div box. Commented out is if we need the boxes nested in an individual class beyond itself
    function createDiv(rowNum) {
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
}

// runs the prompt first then the game
userPrompt();