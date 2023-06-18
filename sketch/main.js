// Global Variables
const body = document.body;
const container = document.querySelector(".container");
const row = document.querySelector(".row");
const column = document.querySelector(".column");

// Function that creates the divs. Default is 16 x 16.
// This function will also set the correct CSS layouts.
function createDivs(x = 16){
    for (let i = 0; i < (x); i++){
        const row = document.createElement('div'); 
        row.classList.add("row");
        container.appendChild(row);

        for (let j = 0; j < x; j++){
            const cell = document.createElement('div'); // 'td' = table data.
            cell.classList.add('cell');
            cell.innerText = "cell";
            row.appendChild(cell);
        }   
    }
}

createDivs();

