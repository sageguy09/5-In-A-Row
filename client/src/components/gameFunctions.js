import cardObjs from './cardObjects.json'
import { INVALID_MOVE } from 'boardgame.io/core'
function initialState(ctx, state) {
    let cardId = 0;
    let cards = [];
    cardObjs.forEach(card => {
        cards.push({
            id: cardId++,
            cardObj: card
        })
    })
    return state || {
        board: {
            deck: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            burn: []
        },
        player_0: {
            hand: []
        },
        player_1: {
            hand: []
        },
        cells: Array(100).fill(null),
        cards,
    }
}

function drawCard(currentState, ctx) {
    let {currentPlayer, playerId} = getCurrentPlayer(currentState, ctx);
    if (currentPlayer.hand.length >= 4){
        return INVALID_MOVE;
    }
    let boardId="board"
    let currentBoard = currentState[boardId]
    //add last card from board.deck to currentPlayer hand
    let deckIndex = currentBoard.deck.length - 1; 
    let hand = ImmutableArray.append(currentPlayer.hand, currentBoard.deck[deckIndex]);
    //remove the last card in deck
    let deck = ImmutableArray.removeAt(currentBoard.deck, deckIndex);
    let player = {...currentPlayer, hand};
    let board = {...currentBoard, deck};
    let state = {...currentState, [playerId]: player, [boardId]: board}
    return state;
    
}

function playCard(currentState, ctx, cardId) {
    let {currentPlayer, playerId} = getCurrentPlayer(currentState, ctx);
    let boardId="board"
    let currentBoard = currentState[boardId]
    //find the card in hand, add hand.card to  burn
    let handIndex = currentPlayer.hand.indexOf(cardId);
    //let cells = playOnCell(currentState, ctx, cardId );
    let burn = ImmutableArray.append(currentBoard.burn, currentPlayer.hand[handIndex])
    //remove card from player hand. 
    let hand = ImmutableArray.removeAt(currentPlayer.hand, handIndex)
    //construct and return a new state object with changes.
    let player = {...currentPlayer, hand};
    let board = {...currentBoard, burn};
    let state = {...currentState, [playerId]: player, [boardId]: board};
    return state;
}

function clickCell(G, ctx, id) {
    if (G.cells[id] !== null) {
        return INVALID_MOVE;
    }
    //fill cell with 0 or 1 depending the current player.
    G.cells[id] = ctx.currentPlayer;
}


function getCurrentPlayer(state, ctx) {
    let playerId = "player_" + ctx.currentPlayer;
    let currentPlayer = state[playerId];
    return {currentPlayer, playerId};
}

const ImmutableArray = {
    append(arr, value) {
        return [...arr, value];
    },
    removeAt(arr, index) {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
    },
};

//create function onTurnStart that will check the players turn to ensure they 
//have enough cards to to playCard




//checkCards[]
export {initialState, drawCard, playCard, clickCell}














/*
function getCurrentBoard(state, "board") {
    let boardId =  ctx.currentBoard;
    let currentBoard = state[boardId];
    return {currentBoard, boardId};
}*/

/*
function initialState1() {
    return {
        cards: ["one", "two", "three", "four", "five", "six"],
        player_0: {
            deck: [0, 1, 2, 3],
            hand: [],
            field: []
        },
        player_1: {
            deck: [4, 5, 6, 7],
            hand: [],
            field: []
        }
    };
}

function drawCard1(currentState) {
    // TODO: we'll need a way to know which is the current player 
    // at some point.
    // but for now let's assume it's player 0.
    let playerID = "player_0";
    let currentPlayer = currentState[playerID];
    // Add the last card in the player's deck to their hand.
    let deckIndex = currentPlayer.deck.length - 1;
    let hand = [...currentPlayer.hand, currentPlayer.deck[deckIndex]];
    // Remove the last card in the deck.
    let deck = currentPlayer.deck.slice(0, deckIndex);
    // Construct and return a new state object with our changes.
    let player = { ...currentPlayer, hand, deck };
    let state = { ...currentState, [playerID]: player };
    return state;
}

let state_0 = initialState1();
let state_1 = drawCard1(state_0);
console.log('state_0', state_0);
console.log('state_1', state_1);
*/



/*
function drawCard(currentState) {
    let playerId= "player_0";
    let boardId= "board"
    let currentPlayer = currentState[playerId];
    let currentBoard = currentState[boardId]
    //add last card from board.deck to currentPlayer hand
    let deckIndex = currentBoard.deck.length - 1; 
    let hand = [...currentPlayer.hand, currentBoard.deck[deckIndex]];
    //remove the last card in deck
    let deck = currentBoard.deck.slice(0, deckIndex);
    let player = {...currentPlayer, hand};
    let board = {...currentBoard, deck};
    let state = {...currentState, [playerId]: player, [boardId]: board}
    return state;
}

function playCard(currentState, ctx, cardId) {
    let playerId = "player_0"; 
    let boardId="board"
    let currentPlayer = currentState[playerId];
    let currentBoard = currentState[boardId]
    //find the card in hand and add to burn
    let handIndex = currentPlayer.hand.indexOf(cardId);
    let lastPlayed = [...currentBoard.lastPlayed, currentPlayer.hand[handIndex]];
    //remove card from player hand. 
    let hand = [...currentPlayer.hand.slice(0, handIndex), ...currentPlayer.hand.slice(handIndex+1)];
    //construct and return a new state object with changes.
    let player = {...currentPlayer, hand};
    let board = {...currentBoard, lastPlayed};
    let state = {...currentState, [playerId]: player, [boardId]: board};
    return state;
}


function constructStateForPlayer(currentState, playerId, playerState) {
    let newPlayerState = Object.assign({}, currentState[playerId], playerState);
    return {...currentState, [playerId]: newPlayerState};
}

function constructStateForBoard(currentState, boardId, boardState) {
    let newBoardState = Object.assign({}, currentState[boardId], boardState);
    return {...currentState, [boardId]: newBoardState};
}



build a  function for this where you are combinng these together to see if you 
can build a constructor for state from the passed values
let player = {...currentPlayer, hand};
    let board = {...currentBoard, lastPlayed};
    let state = {...currentState, [playerId]: player, [boardId]: board};
    return state;
    function constructState(currentState)
    */


/*
old test scripts
let state_One = initialState();
let state_Two = drawCard(state_One);
console.log('state_One', state_One)
console.log('state_Two', state_Two)
*/