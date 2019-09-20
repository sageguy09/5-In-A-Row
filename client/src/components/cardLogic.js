import { Client } from 'boardgame.io/react';
import { Game } from 'boardgame.io/core';
import {initialState, drawCard } from './cards'
import App from '../App';

const cards = Game({
    setup: initialState, 
    moves: {
        drawCard
    }
});

const CardsLogic = Client({
    game: cards
});

export default CardsLogic;