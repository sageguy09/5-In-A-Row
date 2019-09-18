import { Client } from 'boardgame.io/react';
import { Game } from 'boardgame.io/core';
import TicTacToeBoard from './ticGameBoard';

// return true if 'cells' is in a winning configuration

function IsVictory(cells) {
    const positions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let pos of positions) {
        const symbol = cells[pos[0]];
        let winner = symbol;
        for (let i of pos) {
          if (cells[i] != symbol) {
            winner = null;
            break;
          }
        }
        if (winner != null) return true;
      }
    
      return false;
}

//return true if all 'cells ' are occupied
function IsDraw(cells) {
    return cells.filter(c => c === null).length == 0;
}


const TicTacToe = Game({
    setup : () => ({ cells: Array(9).fill(null) }),

    moves: {
        clickCell(G, ctx, id) {
            if (G.cells[id] === null) {
                G.cells[id] = ctx.currentPlayer;
            }
        },
    },

    flow: {
        movesPerTurn: 1,

        endGameIf: (G, ctx) => {
            if (IsVictory(G.cells)) {
                return { winner: ctx.currentPlayer };
            }
            if (IsDraw(G.cells)) {
                return { draw: true };
            }
        },
    },
});



const TicGame = Client({ game: TicTacToe, board: TicTacToeBoard });
//disable debug window;
export default TicGame;

