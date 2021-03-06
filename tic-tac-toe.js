let board = document.getElementById("tic-tac-toe-board");
let count = 0;
let player1squares = [];
let player2squares = [];

const getWinningCombinations = (player) => {
    let playerWinningCombinations = [
        player.includes("square-0") &&
            player.includes("square-1") &&
            player.includes("square-2"),
        player.includes("square-3") &&
            player.includes("square-4") &&
            player.includes("square-5"),
        player.includes("square-6") &&
            player.includes("square-7") &&
            player.includes("square-8"),
        player.includes("square-0") &&
            player.includes("square-3") &&
            player.includes("square-6"),
        player.includes("square-1") &&
            player.includes("square-4") &&
            player.includes("square-7"),
        player.includes("square-2") &&
            player.includes("square-5") &&
            player.includes("square-8"),
        player.includes("square-0") &&
            player.includes("square-4") &&
            player.includes("square-8"),
        player.includes("square-6") &&
            player.includes("square-4") &&
            player.includes("square-2"),
    ];

    return playerWinningCombinations;
};

const handleClick = (e) => {
    let square = document.getElementById(event.target.id);
    let x = document.createElement("img");
    let o = document.createElement("img");
    x.setAttribute("id", "x");
    o.setAttribute("id", "o");
    x.setAttribute("src", "./images/player-x.svg");
    o.setAttribute("src", "./images/player-o.svg");

    if (count === 0 || count % 2 === 0) {
        square.appendChild(x);
        player1squares.push(event.target.id);
        count++;
    } else {
        square.appendChild(o);
        player2squares.push(event.target.id);
        count++;
    }
};

const determineWin = (e) => {
    let squares = document.querySelectorAll('.square');
    let header = document.getElementById('winner-text');
    getWinningCombinations(player1squares).forEach((combination) => {
        console.log(combination);
        if (combination) {
            header.innerText = `Player 1 won!`;
            squares.forEach((sqr) => {
                if (Array.from(sqr.childNodes).includes(document.getElementById('x'))) {
                    sqr.removeChild(document.getElementById('x'));
                } else if (Array.from(sqr.childNodes).includes(document.getElementById('o'))) {
                    sqr.removeChild(document.getElementById('o'));
                }

            })

        }
    });
    getWinningCombinations(player2squares).forEach((combination) => {
        if (combination) {
            header.innerText = `Player 2 won!`
            squares.forEach((sqr) => {
                if (Array.from(sqr.childNodes).includes(document.getElementById('x'))) {
                    sqr.removeChild(document.getElementById('x'));
                } else if (Array.from(sqr.childNodes).includes(document.getElementById('o'))) {
                    sqr.removeChild(document.getElementById('o'));
                }

            })
        }
    });
};

board.addEventListener("click", (event) => {
    handleClick(event);
    determineWin();
});

//     0,
// ][0][0][1][0][2][1][0][1][1][1][2][2][0][2][1][2][2][0][0][1][0][2][0][0][1][1][1][2][1][0][2][1][1][2][2][0][0][1][1][2][2][0][2][1][1][2][0];
