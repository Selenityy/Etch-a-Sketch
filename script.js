const container = document.getElementById("container");
let row = document.createElement("row");
container.appendChild(row);

function createRow() {
    let newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "white";
    newDiv.style.border = "1px solid #000000";
    newDiv.style.height = "100px";
    newDiv.style.width = "100px";
    row.appendChild(newDiv);
}

for (let i = 1; i <17; i++) createRow(i); 

// create a 16x16 grid of divs
// create a div
// make borders on the div
// duplicate to 16 divs
// position the divs in a row
// create columns