const container = document.getElementById("container");
let rows = [];

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
function createRows() {
    for (let j = 1; j < 17; j++) {
        rows[j] = document.createElement(`row${j}`)
        rows[j].classList.add("rows");
        container.appendChild(rows[j]);
        for (let i = 1; i < 17; i++) {
            createDiv(j); 
        }
    }
}

createRows();

let boxes = document.getElementsByClassName("box")
for (let box of boxes) {
    box.addEventListener("mouseover", function hover() {
        box.style.backgroundColor = "black";
    });
}
