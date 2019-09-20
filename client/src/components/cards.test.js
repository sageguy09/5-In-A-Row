import {initialState, drawCard} from './cards'


let mockState = {
    board: {
        deck: [1, 2, 3, 4, 5],
        burn: []
    },
    player_0: {
        hand: []
    },
    player_2: {
        hand: []
    },
}


test('drawing a card', () => {
    let state_One = initialState(mockState);
    let state_Two = drawCard(state_One);
    //initial  board.deck expectation
    expect(state_One.board.deck).toEqual([1, 2, 3, 4, 5]);
    //post drawCard(state_One) board.deck expectation 
    expect(state_Two.board.deck).toEqual([1, 2, 3, 4]);
    //initial player_0.hand expectation
    expect(state_One.player_0.hand).toEqual([]);
    // post drawCard(state_One) player_0.hand
    expect(state_Two.player_0.hand).toEqual([5]);
})










/*
let state_One = initialState();
let state_Two = drawCard(state_One);
console.log('state_One', state_One)
console.log('state_Two', state_Two)
*/
export {initialState, drawCard}




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