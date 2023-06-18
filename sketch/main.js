// Global Variables
const body = document.body;
const container = document.querySelector(".container");

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

// Function to re-size the grid upon button click.
function divSize(){
    size = prompt("Enter size of the grid (0 - 90): ");

    // Wipe the original grid.
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }

    createDivs(size);
}

function main(){
    createDivs();

    // Event listeners
    const btn_changeSize = document.querySelector("#btn_changeSize");
    btn_changeSize.addEventListener('click', divSize);
}

main();

