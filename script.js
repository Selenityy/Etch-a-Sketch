const container = document.getElementById("container");
let rows = [];

function createDiv(rowNum) {
    // let row = document.createElement("row");
    // row.classList.add("row");
    let newDiv = document.createElement("div");
    newDiv.classList.add("box");
    // row.appendChild(newDiv);
    rows[rowNum].appendChild(newDiv);
}

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


// create a 16x16 grid of divs
// create a div
// make borders on the div
// duplicate to 16 divs
// position the divs in a row
// create columns