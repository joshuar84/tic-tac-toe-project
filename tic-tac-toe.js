let board = document.getElementById("tic-tac-toe-board");

let count = 0;
const handleClick = (e) => {
    let square = document.getElementById(event.target.id);
    let x = document.createElement("img");
    let o = document.createElement("img");
    x.setAttribute("src", "./images/player-x.svg");
    o.setAttribute("src", "./images/player-o.svg");
    if (count === 0 || count % 2 === 0) {
        square.appendChild(x);
        count++;
    } else {
        square.appendChild(o);
        count++;
    }
};

const determineWin = (e) => {};

board.addEventListener("click", (event) => {
    handleClick(event);
});
