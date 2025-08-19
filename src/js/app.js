// your awesome code here

const boardSize = 4;
const playingField = document.getElementById("field");

if (playingField) {
    for (let i  = 0; i < boardSize ** 2; i += 1) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        playingField.appendChild(cell);
    }
}