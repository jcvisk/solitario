import _ from 'underscore';

let tipos = ['C', 'D', 'H', 'S'];
let especiales = ['A', 'J', 'Q', 'K'];

/**
 * 
 * @returns Un nuevo deck barajeado
 */
export const createDeck = () => {
    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (const tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (const tipo of tipos) {
        for (const especiale of especiales) {
            deck.push(especiale + tipo);
        }
    }

    return _.shuffle(deck);
}