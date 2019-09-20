/*function initialState() {
    return {
        deck: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        burn: [],
        player_0: {
            hand: []
        },
        player_2: {
            hand: []
        },
    }
}

function drawCard(currentState) {
    let playerId= "player_0";
    let stateDeck="deck"
    let currentPlayer = currentState[playerId];
    let currentDeck = currentState[stateDeck];
    //add last card from deck 
    let deckIndex = currentDeck.deck.length - 1; 
    let hand = [...currentPlayer.deck, currentDeck[deckIndex]];
    //remove the last card in deck
    let deck 

}
*/


function initialState() {
    return {
        cards: ["one", "two", "three", "four", "five", "six", "seven", "eight"],
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

function drawCard(currentState) {
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

let state_0 = initialState();
let state_1 = drawCard(state_0);
console.log('state_0', state_0);
console.log('state_1', state_1);