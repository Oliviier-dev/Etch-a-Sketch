let cells;
let gridSize = prompt("enter grid size");

let button = document.querySelector('.btn');

button.addEventListener('click', function(){
    cells = document.querySelectorAll('.cell');
    cells.forEach(cell =>{
        cell.style.backgroundColor = 'white';
    })

})

function createGrids(gridSize){
    let container = document.querySelector('.container');

    for (let i = 0; i < gridSize; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 0; j < gridSize; j++){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
    }

    cells = document.querySelectorAll('.cell');
    cells.forEach(cell =>{
        cell.addEventListener('mouseenter', function(){
            cell.style.backgroundColor = 'black';
            // console.log("Ok");
        })
    })

}

if (gridSize <= 64){
    createGrids(gridSize);
} else{
    alert("Enter a short gridSize number");
}