// @ts-ignore
const suits:string[] = ['spade', 'diamond', 'heart', 'club'];
// @ts-ignore
const values:string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];


// @ts-ignore
const cards:Card = [];
for (const suit of suits) {
    for (const value of values) {
        // @ts-ignore
        const card:Card = {cardSuit: suit, value: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);

type Accumulator = {
    spades:Card[],
    diamonds:Card[],
    hearts:Card[],
    clubs:Card[]
}
const reduce = cards.reduce((accumulator:Accumulator, card:any) => {
    switch(card.cardSuit) {
        case 'spade':
            accumulator.spades.push(card);
            break;
        case 'diamond':
            accumulator.diamonds.push(card);
            break;
        case 'club':
            accumulator.clubs.push(card);
            break;
        case 'heart':
            accumulator.hearts.push(card);
            break;
    }
    return accumulator;
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});
console.log(reduce);
