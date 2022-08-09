//Assign value to grid div
let esGrid = document.querySelector(".esGrid");

//Create column div and add column class to it
let gridColumn = document.createElement("div");
gridColumn.classList.add("column");


//declare empty array of rows and boxes to add divs and styles to
let gridRows = [];
let gridBoxes = [];
let gridPixels = 8;


//Link variable to the button for changing the amount of pixels
let changePixels =  document.querySelector("#changePixels");

changePixels.addEventListener("click", () => {

    gridPixels = prompt("Enter a grid size");
    removeGrid();
    createGrid(gridPixels);
  
})

//function for creating grid
let createGrid = (gridPixels) => {

    //Run a loop 8 times to create new row elements in an array called gridRow
    for (row = 0; row < gridPixels; row++){

        //Add each row to the gridRows array
        gridRows[row] = document.createElement("div"); 

        //add the 'row' class to each row
        gridRows[row].classList.add("row");

        //append each row to the grid column
        gridColumn.appendChild(gridRows[row]);


        //For each of the 8 times a row is created and added to the array, create 8 boxes
        for(box = 0; box < gridPixels; box++){

            //create an array of 8 boxes for each of the 8 rows
            gridBoxes[row*box] = document.createElement("div");

            //add the box class to each of 64 boxes  
            gridBoxes[row*box].classList.add("box");

            //add eventListener to each box, add "red" class to change color on mouseover
            gridBoxes[row*box].addEventListener("mouseover", function(){this.classList.add("red")});

            //append 8 boxes to each of the 8 rows
            gridRows[row].appendChild(gridBoxes[row*box]);
        }


    esGrid.appendChild(gridColumn);
    }

}

//function for removing grid
let removeGrid = () => {
    esGrid.innerHTML = "";
    gridColumn.innerHTML = "";
    gridRows = [];
    gridBoxes = [];
}

createGrid(gridPixels);

