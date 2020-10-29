let gridSize = 16;
const container = document.querySelector(".container");

function generateGrid() {
    while(container.firstChild) {
        container.firstChild.remove();
    }

    for (let i = 0; i < gridSize; i++) {
        const newRow = document.createElement("div");

        for (let j = 0; j < gridSize; j++) {
            const rowBlock = document.createElement("div");
            rowBlock.classList.add("row");
            rowBlock.addEventListener("mouseover", () => {
                rowBlock.classList.add("sketched");
            })
            newRow.appendChild(rowBlock);
        }

        container.appendChild(newRow);
    }
}

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    const blocks = document.querySelectorAll(".sketched");
    blocks.forEach((block) => {
        block.classList.remove("sketched");
    })
});

const change = document.querySelector("#change");
change.addEventListener("click", () => {
    do{
        gridSize = parseInt(prompt("Please enter a number between 2 and 100 for the desired grid size", "16"));
    }while(isNaN(gridSize) || gridSize > 100 && gridSize < 2);
    generateGrid();
});


generateGrid();