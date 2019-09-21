import {initialState, drawCard, playCard} from './cards'

const mockCtx = {
    numPlayers: 2,
    turn: 0,
    currentPlayer: "0",
    currentBoard: "1",
    playOrder: ["0", "1"]
};
let mockState = {
    board_1: {
        deck: [1, 2, 3, 4, 5],
        lastPlayed: [],
        burn: []
    },
    player_0: {
        hand: []
    },
    player_1: {
        hand: []
    },
}


test('drawing a card', () => {
    let state_One = initialState(mockCtx, mockState);
    let state_Two = drawCard(state_One, mockCtx);
    //initial  board.deck expectation
    expect(state_One.board_1.deck).toEqual([1, 2, 3, 4, 5]);
    //post drawCard(state_One) board.deck expectation 
    expect(state_Two.board_1.deck).toEqual([1, 2, 3, 4]);
    //initial player_0.hand expectation
    console.log(state_One.player_0.hand)
    expect(state_One.player_0.hand).toEqual([]);
    // post drawCard(state_One) player_0.hand
    expect(state_Two.player_0.hand).toEqual([5]);
})

test('playing a card', () => {
    let state_1 = initialState(mockCtx, mockState);
    let state_2 = drawCard(state_1, mockCtx);
    let state_3 = playCard(state_2, mockCtx, 5);
    //initial board.lastPlayed expectation
    expect(state_2.board_1.lastPlayed).toEqual([]);
    //initial player_0.hand expectation
    expect(state_2.player_0.hand).toEqual([5]);
    //post playCard board_1.lastPlayed expectation
    expect(state_3.board_1.lastPlayed).toEqual([5])
    //post playCard player_0.hand expectation
    expect(state_3.player_0.hand).toEqual([])

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